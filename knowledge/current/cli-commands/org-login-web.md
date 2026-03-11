---
title: "org login web"
domain: cli-commands
topic: org-login-web
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T10:26:31.257Z
keywords: [org, login, web, Log, Salesforce, server, flow., Description, Examples, Flags, Aliases]
---

# org login web

> Log in to a Salesforce org using the web server flow.

## org login web

Log in to a Salesforce org using the web server flow.

### Description for org login web

Opens a Salesforce instance URL in a web browser so you can enter your credentials and log in to your org. After you log in, you can close the browser window.

Logging into an org authorizes the CLI to run other commands that connect to that org, such as deploying or retrieving metadata. You can log into many types of orgs, such as sandboxes, Dev Hubs, Env Hubs, production orgs, and scratch orgs.

We recommend that you set an alias when you log into an org. Aliases make it easy to later reference this org when running commands that require it. If you don’t set an alias, you use the username that you specified when you logged in to the org. If you run multiple commands that reference the same org, consider setting the org as your default. Use --set-default for your default scratch org or sandbox, or --set-default-dev-hub for your default Dev Hub.

By default, this command uses the global out-of-the-box connected app in your org. If you need more security or control, such as setting the refresh token timeout or specifying IP ranges, create your own connected app using a digital certificate. Make note of the consumer key (also called cliend id) that’s generated for you. Then specify the consumer key with the --client-id flag.

You can also use this command to link one or more connected or external client apps in an org to an already-authenticated user. Then Salesforce CLI commands that have API-specific requirements, such as new OAuth scopes or JWT-based access tokens, can use these custom client apps rather than the default one. To create the link, you use the --client-app flag to give the link a name and the --username flag to specify the already-authenticated user. Use the --scopes flag to add OAuth scopes if required. After you create the link, you then use the --client-app value in the other command that has the API-specific requirements. An example of a command that uses this feature is "agent preview"; see the "Preview an Agent" section in the "Agentforce Developer Guide" for details and examples. (https://developer.salesforce.com/docs/einstein/genai/guide/agent-dx-preview.html)

### Examples for org login web

Run the command with no flags to open the default Salesforce login page (https://login.salesforce.com):

```

```

Log in to your Dev Hub, set it as your default Dev Hub, and set an alias that you reference later when you create a scratch org:

```

```

Log in to a sandbox and set it as your default org:

```

```

Use --browser to specify a specific browser, such as Google Chrome:

```

```

Use your own connected app by specifying its consumer key (also called client ID) and specify additional OAuth scopes:

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

\-b | \--browser BROWSER

Optional

Browser in which to open the org.

If you don’t specify --browser, the command uses your default browser. The exact names of the browser applications differ depending on the operating system you're on; check your documentation for details.

Type: option

Permissible values are: chrome, edge, firefox

\-i | \--client-id CLIENT-ID

Optional

OAuth client ID (also called consumer key) of your custom connected app.

Type: option

\-r | \--instance-url INSTANCE-URL

Optional

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

\-c | \--client-app CLIENT-APP

Optional

Name to give to the link between the connected app or external client and the already-authenticated user. You can specify any string you want. Must be used with --username.

Type: option

\--username USERNAME

Optional

Username of the already-authenticated user to link to the connected app or external client app. Must be used with --client-app.

Type: option

\--scopes SCOPES

Optional

Authentication (OAuth) scopes to request. Use the scope's short name; specify multiple scopes using just one flag instance and separated by spaces: --scopes "sfap\_api chatbot\_api".

Type: option

### Aliases for org login web

```

```

```

```