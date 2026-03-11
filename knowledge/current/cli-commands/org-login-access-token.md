---
title: "org login access-token"
domain: cli-commands
topic: org-login-access-token
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T09:49:04.838Z
keywords: [org, login, access-token, Authorize, existing, Salesforce, access, token., Description, Examples, Flags, Aliases]
---

# org login access-token

> Authorize an org using an existing Salesforce access token.

## org login access-token

Authorize an org using an existing Salesforce access token.

### Description for org login access-token

By default, the command runs interactively and asks you for the access token. If you previously authorized the org, the command prompts whether you want to overwrite the local file. Specify --no-prompt to not be prompted.

To use the command in a CI/CD script, set the SF\_ACCESS\_TOKEN environment variable to the access token. Then run the command with the --no-prompt parameter.

### Examples for org login access-token

Authorize an org on https://mycompany.my.salesforce.com; the command prompts you for the access token:

```

```

Authorize the org without being prompted; you must have previously set the SF\_ACCESS\_TOKEN environment variable to the access token:

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

\-r | \--instance-url INSTANCE-URL

Required

URL of the instance that the org lives on.

If you specify an --instance-url value, this value overrides the sfdcLoginUrl value in your sfdx-project.json file.

To specify a My Domain URL, use the format "https://<MyDomainName>.my.salesforce.com".

To specify a sandbox, set --instance-url to "https://<MyDomainName>--<SandboxName>.sandbox.my.salesforce.com".

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

\-p | \--no-prompt

Optional

Don't prompt for confirmation.

Type: boolean

### Aliases for org login access-token

```

```

```

```