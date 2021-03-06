require("colors");
const fs = require("fs");
const templates = require("./templates");

const componentName = process.argv[2];

if (!componentName) {
  console.error("Please supply a valid component name".red);
  process.exit(1);
}

console.log("Creating Component Templates with name: " + componentName);

const componentDirectory = `./src/components/${componentName}`;

if (fs.existsSync(componentDirectory)) {
  console.error(`Component ${componentName} already exists.`.red);
  process.exit(1);
}

fs.mkdirSync(componentDirectory);

const generatedTemplates = templates.map((template) => template(componentName));

generatedTemplates.forEach((template) => {
  if (template.type === "index") {
    fs.writeFileSync(`${componentDirectory}/index.ts`, template.content);
  } else {
    fs.writeFileSync(
      `${componentDirectory}/${componentName}${template.extension}`,
      template.content
    );
  }
});

fs.appendFile(
  `./src/components/index.ts`,
  `\nexport { default as ${componentName} } from "./${componentName}";`,
  (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Successfully updated index.js");
    }
  }
);

console.log(
  "Successfully created component under: " + componentDirectory.green
);
