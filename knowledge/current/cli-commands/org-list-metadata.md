---
title: "org list metadata"
domain: cli-commands
topic: org-list-metadata
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T10:26:31.256Z
keywords: [org, list, metadata, List, components, properties, specified, type., Description, Examples, Flags, Aliases]
---

# org list metadata

> List the metadata components and properties of a specified type.

## org list metadata

List the metadata components and properties of a specified type.

### Description for org list metadata

Use this command to identify individual components in your manifest file or if you want a high-level view of particular metadata types in your org. For example, you can use this command to return a list of names of all the CustomObject or Layout components in your org, then use this information in a retrieve command that returns a subset of these components.

The username that you use to connect to the org must have the Modify All Data or Modify Metadata Through Metadata API Functions permission.

### Examples for org list metadata

List the CustomObject components, and their properties, in the org with alias "my-dev-org":

```

```

List the CustomObject components in your default org, write the output to the specified file, and use API version 57.0:

```

```

List the Dashboard components in your default org that are contained in the "folderSales" folder, write the output to the specified file, and use API version 57.0:

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

Type: option

\-m | \--metadata-type METADATA-TYPE

Required

Metadata type to be retrieved, such as CustomObject; metadata type names are case-sensitive.

Type: option

\--folder FOLDER

Optional

Folder associated with the component; required for components that use folders; folder names are case-sensitive.

Examples of metadata types that use folders are Dashboard, Document, EmailTemplate, and Report.

Type: option

### Aliases for org list metadata

```

```