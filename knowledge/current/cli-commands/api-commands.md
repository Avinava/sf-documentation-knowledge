---
title: "api Commands"
domain: cli-commands
topic: api-commands
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:05.238Z
estimatedTokens: 1695
keywords: [api, Commands, Execute, GraphQL, statement, Beta, Examples, Flags, rest]
---

# api Commands

> Execute a GraphQL statement.

# api Commands

Commands to interact with API calls.

-   **[api request graphql (Beta)](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_api_commands_unified.htm#cli_reference_api_request_graphql_unified)**
    Execute a GraphQL statement.
-   **[api request rest (Beta)](atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_api_commands_unified.htm#cli_reference_api_request_rest_unified)**
    Make an authenticated HTTP request using the Salesforce REST API.

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

## api request rest (Beta)

Make an authenticated HTTP request using the Salesforce REST API.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_cli_reference)

#### Note

This feature is a Beta Service. Customers may opt to try such Beta Service in its sole discretion. Any use of the Beta Service is subject to the applicable Beta Services Terms provided at Agreements and Terms ([https://www.salesforce.com/company/legal/agreements/](https://www.salesforce.com/company/legal/agreements/ "HTML (New Window)")).

### Description for api request rest

When sending the HTTP request with the "--body" flag, you can specify the request directly at the command line or with a file that contains the request.

For a full list of supported REST endpoints and resources, see https://developer.salesforce.com/docs/atlas.en-us.api\_rest.meta/api\_rest/resources\_list.htm.

### Examples for api request rest

List information about limits in the org with alias "my-org":

```

```

List all endpoints in your default org; write the output to a file called "output.txt" and include the HTTP response status and headers:

```

```

Get the response in XML format by specifying the "Accept" HTTP header:

```

```

Create an account record using the POST method; specify the request details directly in the "--body" flag:

```

```

Create an account record using the information in a file called "info.json" (note the @ prefixing the file name):

```

```

Update an account record using the PATCH method:

```

```

Store the values for the request header, body, and so on, in a file, which you then specify with the --file flag; see the description of --file for more information:

```

```

### Flags

\--flags-dir FLAGS-DIR

Optional

Import flag values from a directory.

Type: option

\-o | \--target-org TARGET-ORG

Required

Username or alias of the target org. Not required if the \`target-org\` configuration variable is already set.

Type: option

\-i | \--include

Optional

Include the HTTP response status and headers in the output.

Type: boolean

\-X | \--method METHOD

Optional

HTTP method for the request.

Type: option

Permissible values are: GET, POST, PUT, PATCH, HEAD, DELETE, OPTIONS, TRACE

\-H | \--header HEADER

Optional

HTTP header in "key:value" format.

Type: option

\-f | \--file FILE

Optional

JSON file that contains values for the request header, body, method, and URL.

Use this flag instead of specifying the request details with individual flags, such as --body or --method. This schema defines how to create the JSON file:

{

url: { raw: string } | string;

method: 'GET', 'POST', 'PUT', 'PATCH', 'HEAD', 'DELETE', 'OPTIONS', 'TRACE';

description?: string;

header: string | Array<Record<string, string>>;

body: { mode: 'raw' | 'formdata'; raw: string; formdata: FormData };

}

Salesforce CLI defined this schema to be mimic Postman schemas; both share similar properties. The CLI's schema also supports Postman Collections to reuse and share requests. As a result, you can build an API call using Postman, export and save it to a file, and then use the file as a value to this flag. For information about Postman, see https://learning.postman.com/.

Here's a simple example of a JSON file that contains values for the request URL, method, and body:

{

"url": "sobjects/Account/<Account ID>",

"method": "PATCH",

"body" : {

"mode": "raw",

"raw": {

"BillingCity": "Boise"

}

}

}

See more examples in the plugin-api test directory, including JSON files that use "formdata" to define collections: https://github.com/salesforcecli/plugin-api/tree/main/test/test-files/data-project.

Type: option

\-S | \--stream-to-file STREAM-TO-FILE

Optional

Stream responses to a file.

Type: option

\-b | \--body BODY

Optional

File or content for the body of the HTTP request. Specify "-" to read from standard input or "" for an empty body. If passing a file, prefix the filename with '@'.

Type: option

## Code Examples

```
sf api request graphql --body "query accounts { uiapi { query { Account { edges { node { Id 
 Name { value } } } } } } }"
```

```
sf api request graphql --body example.txt --target-org my-org
```

```
$ echo graphql | sf api request graphql --body -
```

```
sf api request graphql --body example.txt --stream-to-file output.txt --include
```

```
sf api request rest 'services/data/v56.0/limits' --target-org my-org
```

## Related Topics

- api request graphql (Beta) (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_api_commands_unified.htm)
- api request rest (Beta) (atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_api_commands_unified.htm)
