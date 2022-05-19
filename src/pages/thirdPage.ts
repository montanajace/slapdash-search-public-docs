import { CommandResponse } from "@slapdash/command-response-types";
import { clickupLogo } from "../utils/icons";
import { HelpArticle } from "../utils/types";

export default (articleJSON: string): CommandResponse => {
  const article = JSON.parse(articleJSON) as HelpArticle;

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
        icon: clickupLogo,
      },
    ],
  };
};
