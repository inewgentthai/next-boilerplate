// #region Global Imports
import * as React from "react";
// #endregion Global Imports

// #region Local Imports
import { render } from "@Test/utils";
import { HorecaTheme } from "@Components/Themes";
// #endregion Local Imports

describe("HorecaTheme", () => {
    it("should match snapshot", () => {
        const { container } = render(<HorecaTheme>Test</HorecaTheme>);

        expect(container).toMatchSnapshot();
    });
});
