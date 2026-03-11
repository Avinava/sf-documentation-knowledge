---
title: "sobject describe"
domain: cli-commands
topic: sobject-describe
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T10:26:31.397Z
keywords: [sobject, describe, Display, metadata, standard, custom, object, Tooling, API, object., Description, Examples, Flags, Aliases]
---

# sobject describe

> Display the metadata for a standard or custom object or a Tooling API object.

## sobject describe

Display the metadata for a standard or custom object or a Tooling API object.

### Description for sobject describe

The metadata is displayed in JSON format. See this topic for a description of each property: https://developer.salesforce.com/docs/atlas.en-us.api.meta/api/sforce\_api\_calls\_describesobjects\_describesobjectresult.htm.

This command displays metadata for Salesforce objects by default. Use the --use-tooling-api flag to view metadata for a Tooling API object.

### Examples for sobject describe

Display the metadata of the "Account" standard object in your default org:

```

```

Display the metadata of the "MyObject\_\_c" custom object in the org with alias "my-scratch-org":

```

```

Display the metadata of the ApexCodeCoverage Tooling API object in your default org:

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

Required

API name of the object to describe.

Type: option

\-t | \--use-tooling-api

Optional

Use Tooling API to display metadata for Tooling API objects.

Type: boolean

### Aliases for sobject describe

```

```