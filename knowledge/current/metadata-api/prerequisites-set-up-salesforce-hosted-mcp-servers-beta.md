---
title: "Prerequisites: Set Up Salesforce Hosted MCP Servers (Beta)"
domain: metadata-api
topic: prerequisites-set-up-salesforce-hosted-mcp-servers-beta
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:40.583Z
estimatedTokens: 960
keywords: [Prerequisites, Salesforce, Hosted, MCP, Servers, Beta, API, Context, server, Enable, External, Client, App, Log, Target]
---

# Prerequisites: Set Up Salesforce Hosted MCP Servers (Beta)

> The Salesforce API Context MCP server is one of many Salesforce Hosted MCP Servers. To
    use the Salesforce API Context MCP server, you must first set up the Salesforce Hosted MCP
    Server.

# Prerequisites: Set Up Salesforce Hosted MCP Servers (Beta)

The Salesforce API Context MCP server is one of many Salesforce Hosted MCP Servers. To use the Salesforce API Context MCP server, you must first set up the Salesforce Hosted MCP Server.

## Enable the Beta

To enable this beta, follow these steps as an admin user with the Customize Application permission.

1.  From Setup, in the Quick Find box, enter User Interface, and then select **User Interface**.
2.  On the User Interface page, select **Enable MCP Service (Beta)**, click **Save**.
3.  (Optional) To enable the Salesforce Hosted MCP Servers beta in a scratch org, first create the org with the SalesforceHostedMCP feature. See [Scratch Org Features](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

Selecting **Enable MCP Service (Beta)** asserts that you accept the Beta Services Terms provided at the [Agreements and Terms](https://www.salesforce.com/company/legal/agreements).

## Create an External Client App

External client apps enable third-party applications to integrate with Salesforce using APIs and security protocols.

In this Quick Start, we provide the steps to use Cursor as your MCP client. Cursor is an AI-driven coding editor that supports MCP. To use Cursor as your MCP client, you must install Node.js. After installing Node.js, confirm that your installation was successful by running the commands node -v and npm -v from the command line.

1.  From Setup, in the Quick Find box, enter external client, and then select **External Client App Manager**.
2.  Click **New External Client App**.
3.  Fill out the Basic Information section.
4.  Expand the section labeled **API (Enable OAuth Settings)** and click the **Enable OAuth** checkbox.
5.  In Callback URL, enter [http://localhost:8080/oauth/callback](http://localhost:8080/oauth/callback).

    For other clients, consult the provider’s documentation for the callback URL.

6.  In OAuth Scopes, add the **Manage user data via APIs (api)**, **Access the Salesforce API Platform (sfap\_api)** and **Perform requests at any time (refresh\_token, offline\_access)** scopes. If you’re using prompt templates, add the **Access Einstein GPT services (einstein\_gpt\_api)** scope.
7.  Under Security:
    1.  Select **Issue JSON Web Token (JWT)-based access tokens for named users**.
    2.  Select **Require Proof Key for Code Exchange (PKCE) extension for Supported Authorization Flows**.
    3.  Deselect all other options.
8.  Click **Create**.
9.  Click **Settings**, then click **Consumer Key and Secret** under OAuth Settings to get the consumer key.

    Store the consumer key for later use.


![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Check the Salesforce [mcp-hosted](https://github.com/forcedotcom/mcp-hosted) repository for the latest updates on the Salesforce Hosted MCP Servers beta.

## Log Into Your Target Org

When you configure your MCP client and initiate its authentication, it will open a web browser to authenticate into your org via OAuth. To prepare for this, additional steps are sometimes needed for the authentication to succeed. Since the MCP spec doesn't have special provisions for systems like Salesforce with multiple tenants, we recommend the following steps:

1.  Log out of all other Salesforce orgs.
2.  Using your default browser, log into the org that you want to access from your MCP client.

    This should be the org in which you created the External Client App in the previous section.

3.  Keep the browser open, since the MCP client will open a new tab in that browser window in a later step.
