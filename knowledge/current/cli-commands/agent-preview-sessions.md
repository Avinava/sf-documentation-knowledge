---
title: "agent preview sessions"
domain: cli-commands
topic: agent-preview-sessions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.528Z
keywords: [agent, preview, sessions, List, known, programmatic, sessions., Beta, Note, Description, Examples, Flags]
---

# agent preview sessions

> List all known programmatic agent preview sessions.

## agent preview sessions (Beta)

List all known programmatic agent preview sessions.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_cli_reference)

#### Note

This feature is a Beta Service. Customers may opt to try such Beta Service in its sole discretion. Any use of the Beta Service is subject to the applicable Beta Services Terms provided at Agreements and Terms ([https://www.salesforce.com/company/legal/agreements/](https://www.salesforce.com/company/legal/agreements/ "HTML (New Window)")).

### Description for agent preview sessions

This command lists the agent preview sessions that were started with the "agent preview start" command and are still in the local cache. Use this command to discover specific session IDs that you can pass to the "agent preview send" or "agent preview end" commands with the --session-id flag.

Programmatic agent preview sessions can be started for both published activated agents and by using an agent's local authoring bundle, which contains its Agent Script file. In this command's output table, the Agent column contains either the API name of the authoring bundle or the published agent, whichever was used when starting the session. In the table, if the same API name has multiple rows with different session IDs, then it means that you previously started multiple preview sessions with the associated agent.

### Examples for agent preview sessions

List all cached agent preview sessions:

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