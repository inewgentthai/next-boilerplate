// #region Global Imports
import * as React from "react";
// #endregion Global Imports

// #region Local Imports
import { render } from "@Test/utils";
import { SingleMenu } from "@Components";
// #endregion Local Imports

describe("SingleMenu", () => {
    it("should match snapshot", () => {
        const menu = {
            id: 1,
            name: {
                en: 'en',
                th: 'ไทย'
            },
            inventories: [
                {
                    name: {
                        en: 'en',
                        th: 'ไทย'
                    },
                    price: 50
                }
            ]
        }
        const { container } = render(<SingleMenu menu={ menu }>Test</SingleMenu>);

        expect(container).toMatchSnapshot();
    });
});
