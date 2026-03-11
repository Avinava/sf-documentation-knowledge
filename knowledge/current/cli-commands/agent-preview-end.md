---
title: "agent preview end"
domain: cli-commands
topic: agent-preview-end
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T10:26:30.986Z
keywords: [agent, preview, end, End, existing, programmatic, session, get, trace, location., Beta, Note, Description, Examples, Flags]
---

# agent preview end

> End an existing programmatic agent preview session and get trace location.

## agent preview end (Beta)

End an existing programmatic agent preview session and get trace location.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_cli_reference)

#### Note

This feature is a Beta Service. Customers may opt to try such Beta Service in its sole discretion. Any use of the Beta Service is subject to the applicable Beta Services Terms provided at Agreements and Terms ([https://www.salesforce.com/company/legal/agreements/](https://www.salesforce.com/company/legal/agreements/ "HTML (New Window)")).

### Description for agent preview end

You must have previously started a programmatic agent preview session with the "agent preview start" command to then use this command to end it. This command also displays the local directory where the session trace files are stored.

The original "agent preview start" command outputs a session ID which you then use with the --session-id flag of this command to end the session. You don't have to specify the --session-id flag if an agent has only one active preview session. You must also use either the --authoring-bundle or --api-name flag to specify the API name of the authoring bundle or the published agent, respecitvely. To find either API name, navigate to your package directory in your DX project. The API name of an authoring bundle is the same as its directory name under the "aiAuthoringBundles" metadata directory. Similarly, the published agent's API name is the same as its directory name under the "Bots" metadata directory.

### Examples for agent preview end

End a preview session of a published agent by specifying its session ID and API name ; use the default org:

```

```

Similar to previous example, but don't specify a session ID; you get an error if the published agent has more than one active session. Use the org with alias "my-dev-org":

```

```

End a preview session of an agent using its authoring bundle API name; you get an error if the agent has more than one active session.

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

\--session-id SESSION-ID

Optional

Session ID outputted by "agent preview start". Not required when the agent has exactly one active session. Run "agent preview sessions" to see the list of all sessions.

Type: option

\-n | \--api-name API-NAME

Optional

API name of the activated published agent you want to preview.

Type: option

\--authoring-bundle AUTHORING-BUNDLE

Optional

API name of the authoring bundle metadata component that contains the agent's Agent Script file.

Type: option