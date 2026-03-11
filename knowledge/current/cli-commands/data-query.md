---
title: "data query"
domain: cli-commands
topic: data-query
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T10:26:31.138Z
keywords: [data, query, Execute, SOQL, query., Description, Examples, Flags, Aliases]
---

# data query

> Execute a SOQL query.

## data query

Execute a SOQL query.

### Description for data query

Specify the SOQL query at the command line with the --query flag or read the query from a file with the --file flag.

If your query returns more than 10,000 records, prefer to use the \`sf data export bulk\` command instead. It runs the query using Bulk API 2.0, which has higher limits than the default API used by the command.

### Examples for data query

Specify a SOQL query at the command line; the command uses your default org:

```

```

Read the SOQL query from a file called "query.txt" and write the CSV-formatted output to a file; the command uses the org with alias "my-scratch":

```

```

Use Tooling API to run a query on the ApexTrigger Tooling API object:

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

Optional

SOQL query to execute.

Type: option

\-f | \--file FILE

Optional

File that contains the SOQL query.

Type: option

\-t | \--use-tooling-api

Optional

Use Tooling API so you can run queries on Tooling API objects.

Type: boolean

\--all-rows

Optional

Include deleted records. By default, deleted records are not returned.

Type: boolean

\-r | \--result-format RESULT-FORMAT

Optional

Format to display the results; the --json flag overrides this flag.

Type: option

Permissible values are: human, csv, json

Default value: human

\--output-file OUTPUT-FILE

Optional

File where records are written; only CSV and JSON output formats are supported.

Type: option

### Aliases for data query

```

```