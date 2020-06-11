// #region Global Imports
import * as React from "react";
// #endregion Global Imports

// #region Local Imports
import { render } from "@Test/utils";
import { ItemList } from "@Components";
// #endregion Local Imports

describe("ItemList", () => {
    it("should match snapshot", () => {
        const { container } = render(<ItemList>Test</ItemList>);

        expect(container).toMatchSnapshot();
    });
});
