---
title: "Create an External Client App"
domain: metadata-api
topic: create-an-external-client-app
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:53.485Z
keywords: [Create, External, Client, App, client, apps, enable, third-party, applications, integrate, Salesforce, APIs, security, protocols., Important]
---

# Create an External Client App

> External client apps enable third-party applications to integrate with Salesforce
      using APIs and security protocols.

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