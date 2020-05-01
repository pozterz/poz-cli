#!/usr/bin/env node
import * as fs from "fs";
import * as path from "path";
import * as template from "./utils/template";

const CURR_DIR = process.cwd();

const moduleName = "test";
const projectChoice = "nest-module";
const dir = "src/modules";
const templatePath = path.join("templates", projectChoice);
const tartgetPath = path.join(CURR_DIR, dir ? dir : undefined, moduleName);

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

      contents = template.render(contents, { moduleName, moduleNameCap: moduleName.charAt(0).toUpperCase() + moduleName.slice(1) });

      const writePath = path.join(tartgetPath, file);
      fs.writeFileSync(writePath, contents, "utf8");
    } else if (stats.isDirectory()) {
      fs.mkdirSync(path.join(tartgetPath, file));

      // recursive call
      createDirectoryContents(`${templatePath}/${file}`, `${tartgetPath}/${file}`, moduleName);
    }
  });
}

createProject(tartgetPath);
createDirectoryContents(templatePath, tartgetPath, moduleName);
