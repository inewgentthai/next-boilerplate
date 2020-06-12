// #region Global Imports
import * as React from "react";
// #endregion Global Imports

// #region Local Imports
import { render } from "@Test/utils";
import { MenuList } from "@Components";
// #endregion Local Imports

describe("MenuList", () => {
    it("should match snapshot", () => {
        const menus = {
            data: [
                {
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
            ]
        }
        const { container } = render(<MenuList menus={ menus }>Test</MenuList>);

        expect(container).toMatchSnapshot();
    });
});
