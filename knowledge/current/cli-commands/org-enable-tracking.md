---
title: "org enable tracking"
domain: cli-commands
topic: org-enable-tracking
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.838Z
keywords: [org, enable, tracking, Allow, Salesforce, CLI, track, changes, source, files, between, project, org., Description, Examples, Flags]
---

# org enable tracking

> Allow Salesforce CLI to track changes in your source files between your project and an org.

## org enable tracking

Allow Salesforce CLI to track changes in your source files between your project and an org.

### Description for org enable tracking

Enabling source tracking has no direct effect on the org, it affects only your local environment. Specifically, Salesforce CLI stores the setting in the org's local configuration file so that source tracking operations are executed when working with the org.

This command throws an error if the org doesn't support tracking. Examples of orgs that don't support source tracking include Developer Edition orgs, production orgs, Partial Copy sandboxes, and Full sandboxes.

### Examples for org enable tracking

Enable source tracking for an org with alias "myscratch":

```

```

Enable source tracking for an org using a username:

```

```

Enable source tracking for your default org:

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