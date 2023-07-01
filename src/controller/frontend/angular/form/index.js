const {createCodeOverMaterialUi} = require("./material/index");

let code = "";

const createCodeOverElement = async (project, object, element) => {
  if (project.ui === "material") {
    return await createCodeOverMaterialUi(project, object, element);
  }

  if (project.ui === "antdesign") {
    
  }
}

module.exports = {
  createCodeOverElement
}