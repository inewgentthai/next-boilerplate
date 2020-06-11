// #region Local Imports
import { MenuService } from "@Services";
// #endregion Local Imports

describe("Menu Service tests", () => {
    test("200 test", async () => {
        const result = await MenuService.GetMenuImage({
            params: { hd: true },
        });
        expect(result.copyright).toEqual("Pankod");
    });

    test("500 test", async () => {
        const result = await MenuService.GetMenuImage({
            params: { hd: false },
        });
        expect(result.copyright).toEqual("");
    });
});
