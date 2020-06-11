// #region Global Imports
import * as React from "react";
// #endregion Global Imports

// #region Local Imports
import { render } from "@Test/utils";
import { Modal } from "@Components/Themes/Truecoffee";
// #endregion Local Imports

describe("Modal", () => {
    it("should match snapshot", () => {
        const { container } = render(<Modal>Test</Modal>);

        expect(container).toMatchSnapshot();
    });
});
