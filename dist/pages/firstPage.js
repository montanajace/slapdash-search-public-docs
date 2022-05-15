"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const icons_1 = require("../utils/icons");
exports.default = () => ({
    view: {
        type: "list",
        options: [
            {
                title: "Search Public Docs in Browser",
                icon: {
                    light: (0, icons_1.globeIcon)("#111"),
                    dark: (0, icons_1.globeIcon)("#eee"),
                },
                action: {
                    type: "open-url",
                    url: "https://docs.clickup.com",
                },
            },
        ],
        ranking: false,
    },
    inputPlaceholder: "Search for Public Docs",
});
