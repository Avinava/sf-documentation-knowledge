---
title: "data search"
domain: cli-commands
topic: data-search
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T10:26:31.138Z
keywords: [data, search, Execute, SOSL, text-based, query., Description, Examples, Flags]
---

# data search

> Execute a SOSL text-based search query.

## data search

Execute a SOSL text-based search query.

### Description for data search

Specify the SOSL query at the command line with the --query flag or read the query from a file with the --file flag.

By default, the results are written to the terminal in human-readable format. If you specify \`--result-format csv\`, the output is written to one or more CSV (comma-separated values) files. The file names correspond to the Salesforce objects in the results, such as Account.csv. Both \`--result-format human\` and \`--result-format json\` display only to the terminal.

### Examples for data search

Specify a SOSL query at the command line; the command uses your default org:

```

```

Read the SOSL query from a file called "query.txt"; the command uses the org with alias "my-scratch":

```

```

Similar to the previous example, but write the results to one or more CSV files, depending on the Salesforce objects in the results:

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

SOSL query to execute.

Type: option

\-f | \--file FILE

Optional

File that contains the SOSL query.

Type: option

\-r | \--result-format RESULT-FORMAT

Optional

Format to display the results, or to write to disk if you specify "csv".

Type: option

Permissible values are: human, csv, json

Default value: human