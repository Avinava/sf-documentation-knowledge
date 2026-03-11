---
title: "api request graphql"
domain: cli-commands
topic: api-request-graphql
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.578Z
keywords: [api, request, graphql, Execute, GraphQL, statement., Beta, Note, Description, Examples, Flags]
---

# api request graphql

> Execute a GraphQL statement.

## api request graphql (Beta)

Execute a GraphQL statement.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_cli_reference)

#### Note

This feature is a Beta Service. Customers may opt to try such Beta Service in its sole discretion. Any use of the Beta Service is subject to the applicable Beta Services Terms provided at Agreements and Terms ([https://www.salesforce.com/company/legal/agreements/](https://www.salesforce.com/company/legal/agreements/ "HTML (New Window)")).

### Description for api request graphql

Specify the GraphQL statement with the "--body" flag, either directly at the command line or with a file that contains the statement. You can query Salesforce records using a "query" statement or use mutations to modify Salesforce records.

This command uses the GraphQL API to query or modify Salesforce objects. For details about the API, and examples of queries and mutations, see https://developer.salesforce.com/docs/platform/graphql/guide/graphql-about.html.

### Examples for api request graphql

Execute a GraphQL query on the Account object by specifying the query directly to the "--body" flag; the command uses your default org:

```

```

Read the GraphQL statement from a file called "example.txt" and execute it on an org with alias "my-org":

```

```

Pipe the GraphQL statement that you want to execute from standard input to the command:

```

```

Write the output of the command to a file called "output.txt" and include the HTTP response status and headers:

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

\-S | \--stream-to-file STREAM-TO-FILE

Optional

Stream responses to a file.

Type: option

\-i | \--include

Optional

Include the HTTP response status and headers in the output.

Type: boolean

\--body BODY

Required

File or content with the GraphQL statement. Specify "-" to read from standard input.

Type: option