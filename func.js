function createMat(scene){
  var mat = new BABYLON.StandardMaterial("material", scene);

  mat.diffuseColor = new BABYLON.Color3(1,0,0);
  mat.specularColor = new BABYLON.Color3(0,1,0);
  mat.specularPower = 25;

  mat.ambientColor = new BABYLON.Color3(0.5,0.98,0.53);
  mat.alpha = 1;

  return mat;
}

function createMat2(scene){
  var mat = new BABYLON.StandardMaterial("material", scene);

  mat.diffuseColor = new BABYLON.Color3(0,0,0);
  mat.specularColor = new BABYLON.Color3(0,1,0);
  mat.specularPower = 25;

  mat.ambientColor = new BABYLON.Color3(0.5,0.98,0.75);
  mat.alpha = 1;

  return mat;
}
