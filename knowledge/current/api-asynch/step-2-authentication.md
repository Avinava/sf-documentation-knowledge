---
title: "Step 2: Authentication"
domain: api-asynch
topic: step-2-authentication
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.311Z
estimatedTokens: 1405
keywords: [Step, Authentication, action, API-based, integration, authenticating, requests, Salesforce, org, Bulk, API, 2.0, different, Access, Token]
---

# Step 2: Authentication

> The first action in an API-based integration is authenticating requests with your
  Salesforce org. Bulk API 2.0 and Bulk API use different authentication methods.

# Step 2: Authentication

The first action in an API-based integration is authenticating requests with your Salesforce org. Bulk API 2.0 and Bulk API use different authentication methods.

Bulk API 2.0 is a REST-based API that supports all OAuth 2.0 flows supported by other Salesforce REST APIs. Bulk API 2.0 requires an access token (also known as a “bearer token”) for authentication. This topic, and the remainder of this Quick Start, describe getting an access token and using it to make Bulk API 2.0 requests with cURL.

In contrast, Bulk API uses a session ID obtained with an X-SFDC-Session header fetched with SOAP API’s login() call. For an example, see [Step 1: Log In Using the SOAP API](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_quickstart_login.htm "The Bulk API doesn't provide a login operation, so you must use SOAP API to log in.").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_asynch)

#### Note

These examples use an access token. Any API call that requires a session ID doesn’t work with these instructions.

While it’s possible to create and authenticate against your own [connected app](https://help.salesforce.com/s/articleView?id=xcloud.connected_app_create.htm&type=5&language=en_US), Salesforce CLI is used in these Quick Start examples for convenience. Effectively, Salesforce CLI is a connected app with which you can authenticate and requires no work to configure.

The examples in this Quick Start use the cURL tool to send HTTP requests that access, create, and manipulate resources in Salesforce. If you use a different tool to send requests, you can use the same elements from the cURL examples to send requests. Although these instructions describe a scenario with a Developer org, they work in the same way with any type of Salesforce org. The cURL tool is pre-installed on many Linux and macOS systems. Windows users can download a version at [curl.se](https://curl.se/). When using HTTPS on Windows, ensure that your system meets the cURL requirements for SSL.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_asynch)

#### Note

cURL is an open-source tool and isn’t supported by Salesforce.

## Get an Access Token with Salesforce CLI

Use the access token (also known as a “bearer token”) that you get from Salesforce CLI to authenticate cURL requests.

1.  Install or update Salesforce CLI.
    1.  If you already have Salesforce CLI installed, update it using the instructions in [Update Salesforce CLI](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_setup.meta/sfdx_setup/sfdx_setup_update_cli.htm).
    2.  If you need to [Install Salesforce CLI](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli.htm), install the latest version for your operating system.
    3.  [Verify Your Installation](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli.htm#sfdx_setup_install_cli_verify).
2.  Log in to your Developer org with Salesforce CLI.

    ```

    ```

    A browser opens to https://login.salesforce.com.

    To log in to a sandbox, append the \--instance-url flag and specify your sandbox URL:

    ```

    ```

3.  In the browser, log in to your Developer org or sandbox with your user’s credentials.
4.  In the browser, click **Allow** to allow access.

    At the command line, you see a similar confirmation message.

    ```

    ```

5.  At the command line, get the access token by viewing authentication information about your org.

    ```

    ```

    For example:

    ```

    ```

    Example command output:

    ```

    ```

    In the command output, make note of the long Access Token string and the Instance Url string. You need both to make cURL requests.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_asynch)

    #### Note

    To get a new token after your access token expires, repeat this step of viewing your authentication information.


## Optional Salesforce CLI Shortcuts

After you’ve authenticated successfully, try out these optional shortcuts in your cURL workflow to streamline future authentication with the Salesforce CLI.

**List My Orgs**

```

```

Lists all the orgs that you’ve created or authenticated to.

**Open My Org**

```

```

Opens the specified org (identified by username or alias) in your browser. Because you’ve successfully authenticated with this org previously using the org login web Salesforce CLI command, it’s not required to provide your credentials again.

**Display the Access Token for My Org**

```

```

Output includes your access token, client ID, connected status, org ID, instance URL, username, and alias, if applicable.

**Set an Alias for My Username**

For convenience, create an alias for your username so that you don’t have to enter the entire Salesforce string. For example, instead of

```

```

Create an alias like

```

```

To set the alias in this example, run

```

```

**Use These Commands in a Script**

Use the CLI’s JSON output by invoking the \--json flag. Requesting JSON output provides a consistent output format, which is ideal for running scripts. Without the \--json flag, the CLI can change the output format.

**See Also**

-   [Salesforce CLI Setup Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm)
-   [Salesforce CLI Command Reference](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_unified.htm)

## Code Examples

```
sf org login web
```

```
sf org login web --instance-url https://MyDomainName--SandboxName.sandbox.my.salesforce.com
```

```
Successfully authorized juliet.capulet@empathetic-wolf-g5qddtr.com with org ID 00D5fORGIDEXAMPLE
```

```
sf org display --target-org <username>
```

```
sf org display --target-org juliet.capulet@empathetic-wolf-g5qddtr.com
```

## Related Topics

- Step 1: Log In Using the SOAP API (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_quickstart_login.htm)
