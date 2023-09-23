#!/usr/bin/env node

import {
  createComponentsDirectory,
  componentsDirectoryExists,
  createComponentFile,
  createCssModule,
  createComponentFolder,
} from "./utils.js";

const componentName = process.argv[2];
if (componentName) {
  console.log(componentName);
} else {
  console.log("Missing Component Name");
  process.exit();
}

if (!componentsDirectoryExists()) {
  createComponentsDirectory();
}

// now create a folder with the component name and insert it to the components folder
createComponentFolder(componentName);
createComponentFile(componentName);
createCssModule(componentName);
