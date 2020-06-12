// #region Global Imports
import * as React from "react";
// #endregion Global Imports

// #region Local Imports
import { render } from "@Test/utils";
import { HomeLayout } from "@Components/Themes/Truecoffee/Layout";
// #endregion Local Imports

describe("HomeLayout", () => {
    it("should match snapshot", () => {
        const { container } = render(<HomeLayout title='Test'>Test</HomeLayout>);

        expect(container).toMatchSnapshot();
    });
});
