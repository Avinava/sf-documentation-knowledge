---
title: "sobject list"
domain: cli-commands
topic: sobject-list
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.997Z
keywords: [sobject, list, List, Salesforce, objects, specified, category., Description, Examples, Flags, Aliases]
---

# sobject list

> List all Salesforce objects of a specified category.

## sobject list

List all Salesforce objects of a specified category.

### Description for sobject list

You can list the standard objects, custom objects, or all. The lists include only Salesforce objects, not Tooling API objects.

### Examples for sobject list

List all objects in your default org:

```

```

List only custom objects in the org with alias "my-scratch-org":

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

\-s | \--sobject SOBJECT

Optional

Category of objects to list.

Type: option

Default value: ALL

### Aliases for sobject list

```

```