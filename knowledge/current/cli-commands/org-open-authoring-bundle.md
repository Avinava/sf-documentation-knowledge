---
title: "org open authoring-bundle"
domain: cli-commands
topic: org-open-authoring-bundle
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.838Z
keywords: [org, open, authoring-bundle, Open, Agentforce, Studio, specifically, list, view, showing, agents., Description, Examples, Flags]
---

# org open authoring-bundle

> Open your org in Agentforce Studio, specifically in the list view showing the list of agents.

## org open authoring-bundle

Open your org in Agentforce Studio, specifically in the list view showing the list of agents.

### Description for org open authoring-bundle

The list view shows the agents in your org that are implemented with Agent Script and an authoring bundle. Click on an agent name to open it in Agentforce Builder in a new browser window.

To generate the URL but not launch it in your browser, specify --url-only.

### Examples for org open authoring-bundle

Open the agents list view in your default org using your default browser:

```

```

Open the agents list view in an incognito window of your default browser:

```

```

Open the agents list view in an org with alias MyTestOrg1 using the Firefox browser:

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

Display navigation URL, but don't launch browser.

Type: boolean