// #region Global Imports
import * as React from "react";
// #endregion Global Imports

// #region Local Imports
import { render } from "@Test/utils";
import { DefaultLayout } from "@Components/Themes/Truecoffee/Layout";
// #endregion Local Imports

describe("DefaultLayout", () => {
    it("should match snapshot", () => {
        const { container } = render(<DefaultLayout title='Test'>Test</DefaultLayout>);

        expect(container).toMatchSnapshot();
    });
});
