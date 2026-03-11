---
title: "org list metadata-types"
domain: cli-commands
topic: org-list-metadata-types
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.838Z
keywords: [org, list, metadata-types, Display, details, metadata, types, enabled, org., Description, Examples, Flags, Aliases]
---

# org list metadata-types

> Display details about the metadata types that are enabled for your org.

## org list metadata-types

Display details about the metadata types that are enabled for your org.

### Description for org list metadata-types

The information includes Apex classes and triggers, custom objects, custom fields on standard objects, tab sets that define an app, and many other metadata types. Use this information to identify the syntax needed for a <name> element in a manifest file (package.xml).

The username that you use to connect to the org must have the Modify All Data or Modify Metadata Through Metadata API Functions permission.

### Examples for org list metadata-types

Display information about all known and enabled metadata types in the org with alias "my-dev-org" using API version 57.0:

```

```

Display only the metadata types that aren't yet supported by Salesforce CLI in your default org and write the results to the specified file:

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

\--api-version API-VERSION

Optional

API version to use; default is the most recent API version.

Override the api version used for api requests made by this command

Type: option

\-o | \--target-org TARGET-ORG

Required

Username or alias of the target org. Not required if the \`target-org\` configuration variable is already set.

Type: option

\-f | \--output-file OUTPUT-FILE

Optional

Pathname of the file in which to write the results.

Directing the output to a file makes it easier to extract relevant information for your package.xml manifest file. The default output destination is the terminal or command window console.

Type: option

### Aliases for org list metadata-types

```

```