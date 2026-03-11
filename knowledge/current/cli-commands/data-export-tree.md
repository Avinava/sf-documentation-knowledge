---
title: "data export tree"
domain: cli-commands
topic: data-export-tree
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.689Z
keywords: [data, export, tree, Export, org, JSON, files., Description, Examples, Flags, Aliases]
---

# data export tree

> Export data from an org into one or more JSON files.

## data export tree

Export data from an org into one or more JSON files.

### Description for data export tree

Specify a SOQL query, either directly at the command line or read from a file, to retrieve the data you want to export. The exported data is written to JSON files in sObject tree format, which is a collection of nested, parent-child records with a single root record. Use these JSON files to import data into an org with the "sf data import tree" command.

If your SOQL query references multiple objects, the command generates a single JSON file by default. You can specify the --plan flag to generate separate JSON files for each object and a plan definition file that aggregates them. You then specify just this plan definition file when you import the data into an org.

The SOQL query can return a maximum of 2,000 records. For more information, see the REST API Developer Guide. (https://developer.salesforce.com/docs/atlas.en-us.api\_rest.meta/api\_rest/resources\_composite\_sobject\_tree.htm).

### Examples for data export tree

Export records retrieved with the specified SOQL query into a single JSON file in the current directory; the command uses your default org:

```

```

Export data using a SOQL query in the "query.txt" file and generate JSON files for each object and a plan that aggregates them:

```

```

Prepend "export-demo" before each generated file and generate the files in the "export-out" directory; run the command on the org with alias "my-scratch":

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

\-q | \--query QUERY

Required

SOQL query, or filepath of a file that contains the query, to retrieve records.

Type: option

\-p | \--plan

Optional

Generate multiple sObject tree files and a plan definition file for aggregated import.

Type: boolean

\-x | \--prefix PREFIX

Optional

Prefix of generated files.

Type: option

\-d | \--output-dir OUTPUT-DIR

Optional

Directory in which to generate the JSON files; default is current directory.

Type: option

### Aliases for data export tree

```

```