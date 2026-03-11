---
title: "org login sfdx-url"
domain: cli-commands
topic: org-login-sfdx-url
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.838Z
keywords: [org, login, sfdx-url, Authorize, Salesforce, authorization, URL, stored, file, through, standard, input, stdin, Description, Examples, Flags, Aliases]
---

# org login sfdx-url

> Authorize an org using a Salesforce DX authorization URL stored in a file or through standard input (stdin).

## org login sfdx-url

Authorize an org using a Salesforce DX authorization URL stored in a file or through standard input (stdin).

### Description for org login sfdx-url

You use the Salesforce DX (SFDX) authorization URL to authorize Salesforce CLI to connect to a target org. The URL contains the required data to accomplish the authorization, such as the client ID, client secret, and instance URL. You must specify the SFDX authorization URL in this format: "force://<clientId>:<clientSecret>:<refreshToken>@<instanceUrl>". Replace <clientId>, <clientSecret>, <refreshToken>, and <instanceUrl> with the values specific to your target org. For <instanceUrl>, don't include a protocol (such as "https://"). Note that although the SFDX authorization URL starts with "force://", it has nothing to do with the actual authorization. Salesforce CLI always communicates with your org using HTTPS.

To see an example of an SFDX authorization URL, run "org display --verbose" on an org.

You have three options when creating the authorization file. The easiest option is to redirect the output of the "sf org display --verbose --json" command into a file. For example, using an org with alias my-org that you've already authorized:

```

```

The resulting JSON file contains the URL in the "sfdxAuthUrl" property of the "result" object. You can then reference the file when running this command:

```

```

NOTE: The "sf org display --verbose" command displays the refresh token only for orgs authorized with the web server flow, and not the JWT bearer flow.

You can also create a JSON file that has a top-level property named sfdxAuthUrl whose value is the authorization URL. Finally, you can create a normal text file that includes just the URL and nothing else.

Alternatively, you can pipe the SFDX authorization URL through standard input by specifying the --sfdx-url-stdin flag.

### Examples for org login sfdx-url

Authorize an org using the SFDX authorization URL in the files/authFile.json file:

```

```

Similar to previous example, but set the org as your default and give it an alias MyDefaultOrg:

```

```

Pipe the SFDX authorization URL from stdin:

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

\-f | \--sfdx-url-file SFDX-URL-FILE

Optional

Path to a file that contains the Salesforce DX authorization URL.

Type: option

\-u | \--sfdx-url-stdin SFDX-URL-STDIN

Optional

Pipe the Salesforce DX authorization URL through standard input (stdin).

Type: option

\-d | \--set-default-dev-hub

Optional

Set the authenticated org as the default Dev Hub.

Type: boolean

\-s | \--set-default

Optional

Set the authenticated org as the default that all org-related commands run against.

Type: boolean

\-a | \--alias ALIAS

Optional

Alias for the org.

Type: option

### Aliases for org login sfdx-url

```

```

```

```