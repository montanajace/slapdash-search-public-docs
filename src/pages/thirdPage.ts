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
        icon: clickupLogo,
      },
    ],
  };
};
