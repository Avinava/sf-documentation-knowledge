---
title: "agent preview start"
domain: cli-commands
topic: agent-preview-start
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T10:26:30.986Z
keywords: [agent, preview, start, Start, programmatic, session., Beta, Note, Description, Examples, Flags]
---

# agent preview start

> Start a programmatic agent preview session.

## agent preview start (Beta)

Start a programmatic agent preview session.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_cli_reference)

#### Note

This feature is a Beta Service. Customers may opt to try such Beta Service in its sole discretion. Any use of the Beta Service is subject to the applicable Beta Services Terms provided at Agreements and Terms ([https://www.salesforce.com/company/legal/agreements/](https://www.salesforce.com/company/legal/agreements/ "HTML (New Window)")).

### Description for agent preview start

This command outputs a session ID that you then use with the "agent preview send" command to send an utterance to the agent. Use the "agent preview sessions" command to list all active sessions and the "agent preview end" command to end a specific session.

Identify the agent you want to start previewing with either the --authoring-bundle flag to specify a local authoring bundle's API name or --api-name to specify an activated published agent's API name. To find either API name, navigate to your package directory in your DX project. The API name of an authoring bundle is the same as its directory name under the "aiAuthoringBundles" metadata directory. Similarly, the published agent's API name is the same as its directory name under the "Bots" metadata directory.

When starting a preview session using the authoring bundle, which contains the agent's Agent Script file, the preview uses mocked actions by default. Specify --use-live-actions for live mode, which uses the real Apex classes, flows, etc, in the org for the actions.

### Examples for agent preview start

Start a programmatic agent preview session by specifying an authoring bundle; uses mocked actions by default. Use the org with alias "my-dev-org":

```

```

Similar to previous example but use live actions and the default org:

```

```

Start a preview session with an activated published agent:

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

Optional

API name of the activated published agent you want to preview.

Type: option

\--authoring-bundle AUTHORING-BUNDLE

Optional

API name of the authoring bundle metadata component that contains the agent's Agent Script file.

Type: option

\--use-live-actions

Optional

Use real actions in the org; if not specified, preview uses AI to simulate (mock) actions.

Type: boolean