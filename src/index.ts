#!/usr/bin/env node
import * as fs from "fs";
import * as path from "path";
import * as inquirer from "inquirer";
import * as chalk from "chalk";
import * as template from "./utils/template";

export interface CliOptions {
  moduleName: string;
  templateName: string;
  templatePath: string;
  tartgetPath: string;
}

const CURR_DIR = process.cwd();

const CHOICES = fs.readdirSync(path.join(__dirname, "templates"));

const QUESTIONS = [
  {
    name: "template",
    type: "list",
    message: "What project template would you like to generate?",
    choices: CHOICES,
  },
  {
    name: "name",
    type: "input",
    message: "name:",
    validate: (input: string) => {
      if (/^([A-Za-z\-\_\d])+$/.test(input)) return true;
      else return "Name may only include letters, numbers, underscores and hashes.";
    },
  },
  {
    name: "output",
    type: "input",
    message: "output dir (default: src/modules):",
  },
];

inquirer.prompt(QUESTIONS).then((answers) => {
  const moduleName = answers["name"] as string;
  const projectChoice = answers["template"] as string;
  const dir = (answers["output"] as string) || "src/modules";
  const templatePath = path.join(__dirname, "templates", projectChoice);
  const tartgetPath = path.join(CURR_DIR, dir ? dir : undefined, moduleName);

  createProject(tartgetPath);
  createDirectoryContents(templatePath, tartgetPath, moduleName);

  const options: CliOptions = {
    moduleName,
    templateName: projectChoice,
    templatePath,
    tartgetPath,
  };

  showMessage(options);
});

function createProject(projectPath: string) {
  if (fs.existsSync(projectPath)) {
    return false;
  }

  fs.mkdirSync(projectPath, { recursive: true });
  return true;
}

function createDirectoryContents(templatePath, tartgetPath, moduleName) {
  const filesToCreate = fs.readdirSync(templatePath);

  filesToCreate.forEach((file) => {
    const origFilePath = `${templatePath}/${file}`;

    // get stats about the current file
    const stats = fs.statSync(origFilePath);

    const splitFilename = file.split(".");
    const [filename] = splitFilename;

    if (filename === "__MODULENAME__") {
      file = file.replace("__MODULENAME__", moduleName);
    }

    if (stats.isFile()) {
      let contents = fs.readFileSync(origFilePath, "utf8");

      contents = template.render(contents, { moduleName, moduleNameCap: moduleName.charAt(0).toUpperCase() + moduleName.slice(1), modelNameCap: moduleName.toUpperCase() + "MODEL" });

      const writePath = path.join(tartgetPath, file);
      fs.writeFileSync(writePath, contents, "utf8");
    } else if (stats.isDirectory()) {
      fs.mkdirSync(path.join(tartgetPath, file));

      // recursive call
      createDirectoryContents(`${templatePath}/${file}`, `${tartgetPath}/${file}`, moduleName);
    }
  });
}

function showMessage(options: CliOptions) {
  console.log(chalk.green("Done."));
}
