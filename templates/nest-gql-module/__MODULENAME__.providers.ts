import { <%= moduleNameCap %> } from './entity/<%= moduleName %>.entity'

export const <%= moduleNameCap %>Provider = [
  {
    provide: IRepository.<%= moduleNameCap %>Repository,
    useValue: <%= moduleNameCap %>,
  }
]