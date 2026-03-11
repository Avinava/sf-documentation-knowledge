---
title: "org disable tracking"
domain: cli-commands
topic: org-disable-tracking
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T10:26:31.256Z
keywords: [org, disable, tracking, Prevent, Salesforce, CLI, changes, source, files, between, project, org., Description, Examples, Flags]
---

# org disable tracking

> Prevent Salesforce CLI from tracking changes in your source files between your project and an org.

## org disable tracking

Prevent Salesforce CLI from tracking changes in your source files between your project and an org.

### Description for org disable tracking

Disabling source tracking has no direct effect on the org, it affects only your local environment. Specifically, Salesforce CLI stores the setting in the org's local configuration file so that no source tracking operations are executed when working with the org.

### Examples for org disable tracking

Disable source tracking for an org with alias "myscratch":

```

```

Disable source tracking for an org using a username:

```

```

Disable source tracking for your default org:

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