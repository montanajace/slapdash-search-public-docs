import * as cheerio from "cheerio";
import axios from "axios";

import { CommandResponse } from "@slapdash/command-response-types";
import { HelpArticle } from "../utils/types";

import { clickupLogo } from "../utils/icons";

export default async (query: string): Promise<CommandResponse> => {
  const articlePage = await axios.get(
    `https://docs.clickup.com/en/?q=${query}`
  );
  const $ = cheerio.load(articlePage.data);

  const articles: HelpArticle[] = $("a.search__article")
    .toArray()
    .map((cheerioElement) => {
      const element = $.html(cheerioElement);
      return {
        title: $(element).find("span.c__primary").text(),
        preview: $(element).find("span.c__body").text(),
        url: `https://docs.clickup.com${$(element).attr("href")}`,
      };
    });

  return {
    view: {
      type: "list",
      options: articles.map((article) => ({
        title: article.title,
        subtitle: article.preview,
        action: {
          type: "paste",
          value: article.url,
        },
        moveAction: {
          type: "add-param",
          name: "article",
          value: JSON.stringify(article),
        },
        icon: clickupLogo,
      })),
      ranking: false,
    },
  };
};
