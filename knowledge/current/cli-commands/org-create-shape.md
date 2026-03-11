---
title: "org create shape"
domain: cli-commands
topic: org-create-shape
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T09:49:04.838Z
keywords: [org, create, shape, Create, scratch, configuration, based, specified, source, org., Description, Examples, Flags, Aliases]
---

# org create shape

> Create a scratch org configuration (shape) based on the specified source org.

## org create shape

Create a scratch org configuration (shape) based on the specified source org.

### Description for org create shape

Scratch org shapes mimic the baseline setup (features, limits, edition, and Metadata API settings) of a source org without the extraneous data and metadata.

Run "sf org list shape" to view the available org shapes and their IDs.

To create a scratch org from an org shape, include the "sourceOrg" property in the scratch org definition file and set it to the org ID of the source org. Then create a scratch org with the "sf org create scratch" command.

### Examples for org create shape

Create an org shape for the source org with alias SourceOrg:

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

### Aliases for org create shape

```

```