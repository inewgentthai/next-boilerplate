// #region Global Imports
import * as React from "react";
// #endregion Global Imports

// #region Local Imports
import { render } from "@Test/utils";
import { SplashScreen } from "@Components";
// #endregion Local Imports

describe("SplashScreen", () => {
    it("should match snapshot", () => {
        const { container } = render(<SplashScreen>Test</SplashScreen>);

        expect(container).toMatchSnapshot();
    });
});
