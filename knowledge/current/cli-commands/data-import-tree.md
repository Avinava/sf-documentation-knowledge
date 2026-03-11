---
title: "data import tree"
domain: cli-commands
topic: data-import-tree
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.689Z
keywords: [data, import, tree, Import, JSON, files, org., Description, Examples, Flags, Aliases]
---

# data import tree

> Import data from one or more JSON files into an org.

## data import tree

Import data from one or more JSON files into an org.

### Description for data import tree

The JSON files that contain the data are in sObject tree format, which is a collection of nested, parent-child records with a single root record. Use the "sf data export tree" command to generate these JSON files.

If you used the --plan flag when exporting the data to generate a plan definition file, use the --plan flag to reference the file when you import. If you're not using a plan, use the --files flag to list the files. If you specify multiple JSON files that depend on each other in a parent-child relationship, be sure you list them in the correct order.

### Examples for data import tree

Import the records contained in two JSON files into the org with alias "my-scratch":

```

```

Import records using a plan definition file into your default org:

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

\-f | \--files FILES

Optional

Comma-separated and in-order JSON files that contain the records, in sObject tree format, that you want to insert.

Type: option

\-p | \--plan PLAN

Optional

Plan definition file to insert multiple data files.

Unlike when you use the \`--files\` flag, the files listed in the plan definition file \*\*can\*\* contain more then 200 records. When the CLI executes the import, it automatically batches the records to comply with the 200 record limit set by the API.

The order in which you list the files in the plan definition file matters. Specifically, records with lookups to records in another file should be listed AFTER that file. For example, let's say you're loading Account and Contact records, and the contacts have references to those accounts. Be sure you list the Accounts file before the Contacts file.

The plan definition file has the following schema:

\- items(object) - SObject Type: Definition of records to be insert per SObject Type

\- sobject(string) - Name of SObject: Child file references must have SObject roots of this type

\- files(array) - Files: An array of files paths to load

Type: option

### Aliases for data import tree

```

```