module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
import React from "react";
import "./${componentName}.scss";

export interface ${componentName}Props {
    foo: string;
}

const ${componentName} = (props: ${componentName}Props) => {
    return <div>{props.foo}</div>
}

export default ${componentName};
`,
  extension: `.tsx`,
  type: "component",
});
