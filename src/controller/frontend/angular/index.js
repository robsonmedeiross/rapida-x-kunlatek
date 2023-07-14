const path = require('path');
const chp = require('child_process');
const fs = require('fs');
const utils = require("kunla-utils");
const projectsPath = path.join(__dirname, "..", "..", "..", "..", "project");
const appsPath = path.join(__dirname, "..", "..", "..", "..", "apps");
const {createCodeOverElement} = require("./form/index");

let code = "";

const setAngularSkeleton = async (project) => {
  console.info(`Check project folder existence`);
  try {
    chp.execSync(`[ -d "${appsPath}/${project.folder}" ]`);
    console.info(`${projectsPath}/${project.folder} already exists`);

    return true;
  } catch (err) {
    try {
      console.info(`Install node lts`);
      chp.execSync('source ~/.nvm/nvm.sh && nvm install --lts');
      console.info(`Install angular lts`);
      chp.execSync('npm uninstall -g @angular/cli && npm cache clean --force && npm cache verify && npm install -g @angular/cli');
      console.info(`Create new angular app "${project.folder}"`);
      chp.execSync(`ng new ${project.folder} --directory apps/${project.folder} --routing --style=scss`);
      console.info(`${projectsPath}/${project.folder} created`);
  
      return true;
    } catch (error) {
      console.warn(error.message);
      return error.message;
    }
  }

}

const startAngularCoding = async (project) => {
  const filesInProjectFolderToSetParams = utils.array.createArrayOverFolderFiles(
    `${projectsPath}/${project.folder}`
  );
  
  return await takeObject(project, filesInProjectFolderToSetParams);
}

const takeObject = async (project, filesInProjectFolderToSetParams) => {
  const result = [];
  for (let i = 0; i < filesInProjectFolderToSetParams.length; i++) {
    const file = filesInProjectFolderToSetParams[i];
    
    if (file != '') {
      const string = fs.readFileSync(`${projectsPath}/${project.folder}/${file}`, "utf8");
      const object = JSON.parse(string);
      result.push(await takeElements(project, object));
    }
  }
  console.log(result, 56);
  return false;
  return result;
}

const takeElements = async (project, object) => {
  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      if (key === "elements") {
        const elements = object[key];
        for (let i = 0; i < elements.length; i++) {
          const element = elements[i];
          return await createCodeOverElement(project, object, element)
        }
      }
    }
  }
}

module.exports = {
  setAngularSkeleton,
  startAngularCoding
}