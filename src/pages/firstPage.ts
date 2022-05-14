import { CommandResponse } from "@slapdash/command-response-types";

import { globeIcon } from "../utils/icons";

export default (): CommandResponse => ({
  view: {
    type: "list",
    options: [
      {
        title: "Search Public Docs in Browser",
        icon: {
          light: globeIcon("#111"),
          dark: globeIcon("#eee"),
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
