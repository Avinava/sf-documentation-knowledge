---
title: "Getting Started"
domain: data-cloud
topic: getting-started
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T10:04:55.087Z
keywords: [Getting, Started, Familiarize, Yourself, Data, Cloud, Set, Sources, Create, Connected, App, Important, Acquire, Access, Token, Note, Exchanging, Auto-Generated, Endpoints]
---

# Getting Started

# Getting Started

Use this section to understand the prerequisites required to get started with Data Cloud API libraries and SDKs.

## Familiarize Yourself with Data Cloud

Explore the [Data Cloud Online Help](https://help.salesforce.com/articleView?id=sf.customer360_a.htm&language=en_US), if you're unfamiliar with the application.

## Set Up Data Cloud

Before you can use Data Cloud APIs, you must configure the application. The steps for setting up the application are included within [*PDF Guide:* Data Cloud Implementation Overview Guide](https://resources.docs.salesforce.com/latest/latest/en-us/sfdc/pdf/customer360_a_impguide.pdf). If you’re using an existing instance, then confirm with your admin that your user profile has permissions to use Data Cloud APIs.

## Set Up Data Sources

After you create your Data Cloud instance, you can control the scope of data ingestion and activation from within the instance.

Set up your data sources by [creating an app connector](https://help.salesforce.com/articleView?id=c360_a_web_mobile_app_connector.htm&language=en_US) in the Data Cloud app. Configure data streams to ingest data for data mapping and segments.

## Create a Connected App

Set up a connected app to authenticate and request access to Data Cloud APIs. The connected app enables standard OAuth protocols for authentication and authorization. Follow the instructions in [*Salesforce Help* Create a Connected App](https://help.salesforce.com/articleView?id=sf.connected_app_create.htm&type=5&language=en_US), and configure the app as needed. In your connected app, make sure **Enable OAuth Settings** and necessary OAuth scopes are selected. The possible scopes are:

-   Perform ANSI SQL queries on Data Cloud data (cdp\_query\_api): The cdp\_query\_api scope allows ANSI SQL queries of Data Cloud data on behalf of the user.
-   Manage Data Cloud profile data (cdp\_profile\_api): The cdp\_profile\_api scope allows access to Data Cloud REST API data. Use this scope to manage profile records.
-   Perform requests at any time (refresh\_token): This scope allows a refresh token to be returned when the requesting client is eligible to receive one. With a refresh token, the app can interact with the user’s data while the user is offline.
-   Manage user data via APIs (api): This scope allows access to the current, logged-in user’s account using APIs, such as REST API and Bulk API 2.0.

![Important](/docs/resources/img/en-us/252.0?doc_id=images%2Ficon_note_important.png&folder=c360a_api)

#### Important

Your orgs must be provisioned with Data Cloud licenses and the users must be assigned to appropriate roles for having full access to objects in the Data Cloud. Refer to [User Roles and Permission Sets in Data Cloud](https://help.salesforce.com/s/articleView?id=sf.c360_a_userpermissions.htm&type=5&language=en_US) before setting up the Connected App.

## Acquire the Access Token

Send a request for acquiring the Salesforce access token. Here’s how the request is going to look like.

```

```

![Note](/docs/resources/img/en-us/252.0?doc_id=images%2Ficon_note.png&folder=c360a_api)

#### Note

Refer to [OAuth 2.0 JWT Bearer Flow for Server-to-Server Integration](https://help.salesforce.com/articleView?id=remoteaccess_oauth_jwt_flow.htm&language=en_US "HTML (New Window)") for creating a JWT assertion.

**Response Format**

```

```

Use the access token and instance\_url to get a Data Cloud token. The instance\_url is where you post to get a Data Cloud token.

## Exchanging Access Token for Data Cloud Token

Now that you've acquired the Salesforce access token, use this request to get the access token to invoke the APIs.

```

```

**Response Format**

```

```

You need three values from the response:

-   access\_token: The token used to access Data Cloud resources
-   instance\_url: The tenant-specific endpoint where Data Cloud API requests are sent
-   expires\_in: The number of seconds until the token expires and you must reauthenticate. Use this value as part of your access logic, so you can avoid having to repeat the access steps for each call.

## Auto-Generated Endpoints

The Data Cloud application assigns a unique, system-generated endpoint to each of your organizations.

After you've acquired your endpoints in Data Cloud, use them for your organization's API calls. No other Data Cloud customer can use your endpoint for their API requests.

You can only use your endpoint with the **c360a.salesforce.com** endpoint structure.