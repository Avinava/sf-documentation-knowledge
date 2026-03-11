---
title: "Step Two: Set Up Authentication"
domain: rest-api
topic: step-two-set-up-authentication
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:44:25.128Z
keywords: [Step, Two, Set, Authentication, Get, Access, Token, Salesforce, CLI, Optional, Shortcuts, See]
---

# Step Two: Set Up Authentication

# Step Two: Set Up Authentication

To successfully send requests, REST API requires an access token obtained by authentication. Although you can create and authenticate against your own connected app, these Quick Start examples use Salesforce CLI for convenience. Salesforce CLI is a connected app that you can authenticate, and it requires no work to configure.

Complete these steps in your [Developer Edition org or development sandbox](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/quickstart_dev_org.htm).

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
    
    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)
    
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

-   [← Previous](atlas.en-us.api_rest.meta/api_rest/quickstart_dev_org.htm "Step One: Sign up for Salesforce Developer Edition")
-   [Next →](atlas.en-us.api_rest.meta/api_rest/quickstart_code.htm "Step Three: Walk Through the Sample Code")

#### See Also

-   [*Salesforce Help*: Authorize Apps with OAuth](https://help.salesforce.com/articleView?id=xcloud.remoteaccess_authenticate.htm&type=5&language=en_US "Salesforce Help: Authorize Apps with OAuth - HTML (New Window)")