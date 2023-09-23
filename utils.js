import fs from "fs";
import path from "path";
const currentDirectory = process.cwd();
const directoryPath = path.join(currentDirectory, "components");

// creating components folder
export const componentsDirectoryExists = () => {
  if (fs.existsSync(directoryPath)) {
    return true;
  } else {
    return false;
  }
};
export const createComponentsDirectory = () => {
  try {
    fs.mkdirSync(directoryPath, { recursive: true });
    console.log("success");
  } catch (err) {
    console.log(err);
  }
};

// -----

// creating component folder with files

const componentFolderExists = (componentName) => {
  const componentDirectoryPath = path.join(directoryPath, componentName);
  console.log(componentDirectoryPath);
  if (fs.existsSync(componentDirectoryPath)) {
    return true;
  } else {
    return false;
  }
};

export const createComponentFolder = (componentName) => {
  if (!componentFolderExists(componentName)) {
    const componentDirectoryPath = path.join(directoryPath, componentName);
    try {
      fs.mkdirSync(componentDirectoryPath, { recursive: true });
    } catch (err) {
      console.log(err);
    }
  }
};

export const createComponentFile = (componentName) => {
  const componentDirectoryPath = path.join(directoryPath, componentName);
  const componentCode = `import React from 'react'
  import styles from './${componentName}.module.css'
  const ${componentName} = () => {
    return (<div>${componentName}</div>)
  }
  export default ${componentName};
  `;

  const filePath = path.join(componentDirectoryPath, `${componentName}.js`);
  fs.writeFileSync(filePath, componentCode);
};

export const createCssModule = (componentName) => {
  const componentDirectoryPath = path.join(directoryPath, componentName);
  const message = "/* This is a css module */";
  const filePath = path.join(
    componentDirectoryPath,
    `${componentName}.module.css`
  );
  fs.writeFileSync(filePath, message);
};
