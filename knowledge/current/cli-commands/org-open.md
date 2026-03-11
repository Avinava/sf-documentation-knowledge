---
title: "org open"
domain: cli-commands
topic: org-open
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T10:26:31.257Z
keywords: [org, open, Open, default, scratch, another, specified, browser., Description, Examples, Flags, Aliases]
---

# org open

> Open your default scratch org, or another specified org, in a browser.

## org open

Open your default scratch org, or another specified org, in a browser.

### Description for org open

To open a specific page, specify the portion of the URL after "https://mydomain.my.salesforce.com" as the value for the --path flag. For example, specify "--path lightning" to open Lightning Experience, or specify "--path /apex/YourPage" to open a Visualforce page.

Use the --source-file flag to open ApexPage, FlexiPage, Flow, or Agent metadata from your local project in the associated Builder within the Org.

To generate a URL but not launch it in your browser, specify --url-only.

To open in a specific browser, use the --browser flag. Supported browsers are "chrome", "edge", and "firefox". If you don't specify --browser, the org opens in your default browser.

### Examples for org open

Open your default org in your default browser:

```

```

Open your default org in an incognito window of your default browser:

```

```

Open the org with alias MyTestOrg1 in the Firefox browser:

```

```

Display the navigation URL for the Lightning Experience page for your default org, but don't open the page in a browser:

```

```

Open a local Lightning page in your default org's Lightning App Builder:

```

```

Open a local Flow in Flow Builder:

```

```

Open local Agent metadata (Bot) in Agent Builder:

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

\-p | \--path PATH

Optional

Navigation URL path to open a specific page.

Type: option

\-r | \--url-only

Optional

Display navigation URL, but don’t launch browser.

Type: boolean

\-f | \--source-file SOURCE-FILE

Optional

Path to ApexPage, FlexiPage, Flow, or Agent metadata to open in the associated Builder.

Type: option

### Aliases for org open

```

```

```

```