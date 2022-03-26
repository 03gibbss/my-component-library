module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import ${componentName} from './${componentName}';

describe("${componentName}", () => {
  test("renders the ${componentName} component", () => {
    render(<${componentName} foo="bar" />);
  });
});
`,
  extension: `.test.tsx`,
  type: "tests",
});
