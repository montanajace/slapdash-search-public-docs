"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const icons_1 = require("../utils/icons");
exports.default = (articleJSON) => {
    const article = JSON.parse(articleJSON);
    return {
        view: {
            type: "list",
            options: [
                {
                    title: `View in Browser`,
                    subtitle: article.url,
                    action: {
                        type: "open-url",
                        url: article.url,
                    },
                },
                {
                    title: `Copy URL to Clipboard`,
                    subtitle: article.url,
                    action: {
                        type: "copy",
                        value: article.url,
                    },
                },
                {
                    title: `Paste URL`,
                    subtitle: article.url,
                    action: {
                        type: "paste",
                        value: article.url,
                    },
                },
            ],
        },
        tokens: [
            {
                paramName: "article",
                label: article.title,
                icon: icons_1.clickupLogo,
            },
        ],
    };
};
