// #region Global Imports
import * as React from "react";
// #endregion Global Imports

// #region Local Imports
import { render } from "@Test/utils";
import { Layout } from "@Components/Themes/Truecoffee";
// #endregion Local Imports

describe("Layout", () => {
    it("should match snapshot", () => {
        const { container } = render(<Layout>Test</Layout>);

        expect(container).toMatchSnapshot();
    });
});
