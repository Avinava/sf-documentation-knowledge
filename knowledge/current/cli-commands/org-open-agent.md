---
title: "org open agent"
domain: cli-commands
topic: org-open-agent
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T09:49:04.838Z
keywords: [org, open, agent, Open, org's, Agent, Builder, browser., Description, Examples, Flags]
---

# org open agent

> Open an agent in your org's Agent Builder UI in a browser.

## org open agent

Open an agent in your org's Agent Builder UI in a browser.

### Description for org open agent

Use the --api-name flag to open an agent using its API name in the Agent Builder UI of your org. To find the agent's API name, go to Setup in your org and navigate to the agent's details page.

To generate the URL but not launch it in your browser, specify --url-only.

To open Agent Builder in a specific browser, use the --browser flag. Supported browsers are "chrome", "edge", and "firefox". If you don't specify --browser, the org opens in your default browser.

### Examples for org open agent

Open the agent with API name Coral\_Cloud\_Agent in your default org using your default browser:

```

```

Open the agent in an incognito window of your default browser:

```

```

Open the agent in an org with alias MyTestOrg1 using the Firefox browser:

```

```

### Flags

\--json

Optional

Format output as json.

Type: boolean

\--flags-dir FLAGS-DIR

Optional

Import flag values from a directory.

Type: option

\-o | \--target-org TARGET-ORG

Required

Username or alias of the target org. Not required if the \`target-org\` configuration variable is already set.

Type: option

\--api-version API-VERSION

Optional

Override the api version used for api requests made by this command

Type: option

\-n | \--api-name API-NAME

Required

API name, also known as developer name, of the agent you want to open in the org's Agent Builder UI.

Type: option

\--private

Optional

Open the org in the default browser using private (incognito) mode.

Type: boolean

\-b | \--browser BROWSER

Optional

Browser where the org opens.

Type: option

Permissible values are: chrome, edge, firefox

\-r | \--url-only

Optional

Display navigation URL, but don’t launch browser.

Type: boolean