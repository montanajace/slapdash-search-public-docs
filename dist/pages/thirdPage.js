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
                    title: `View ${article.title} Public Doc in Browser`,
                    action: {
                        type: "open-url",
                        url: article.url,
                    },
                },
                {
                    title: `Copy ${article.title} Public Doc URL`,
                    action: {
                        type: "copy",
                        value: article.url,
                    },
                },
                {
                    title: `Paste ${article.title} Public Doc URL`,
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
