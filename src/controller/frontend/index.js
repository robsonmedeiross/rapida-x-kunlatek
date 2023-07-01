const {setAngularSkeleton, startAngularCoding} = require("./angular/index");

let code = "";

const angular = async (project) => {
  await setAngularSkeleton(project);
  // const result = await startAngularCoding(project);
  // console.log(result);
  return false;
}

const svelte = (project) => {
  
}

module.exports = {
  angular,
  svelte
}