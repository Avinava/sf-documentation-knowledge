---
title: "Set Up Your Postman Collection"
domain: bi-dev-guide-rest
topic: set-up-your-postman-collection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.970Z
estimatedTokens: 574
keywords: [Postman, Collection, work, Salesforce, CRM, Analytics, Connect, API, Workspace, Fork, Authorize, Org]
---

# Set Up Your Postman Collection

> Set up Postman to work with the Salesforce CRM Analytics Connect API
    collection.

# Set Up Your Postman Collection

Set up Postman to work with the Salesforce CRM Analytics Connect API collection.

Create your Postman workspace, fork the collection, and authorize your org.

## Create a Postman Workspace

Configure the desktop Postman app if you haven’t already done so.

1.  Make sure that you previously downloaded and installed the [Postman Desktop App](https://www.postman.com/downloads/ "HTML (New Window)").
2.  Select the **Workspaces** menu.
3.  Select **Create Workspace**.
4.  Name your workspace, for example, SalesforceCRMACollection.
5.  For Visibility, set it to **Personal**.
6.  Click **Create Workspace**.

## Fork the Salesforce CRM Analytics API Collection

Fork the main collection for your own use.

1.  At the top of your Postman Desktop app, click **Search Postman**, click **Teams**, and enter Salesforce Developers in the search bar.
2.  Click **Salesforce Developers**, then click the **Salesforce Developers** tile.
3.  Hover over the Subscription Management collection, click the three dots, then click **Create a Fork**.
4.  Label the fork, choose the workspace, and click **Fork Collection**. Your workspace contains your fork of the CRM Analytics Connect API collection.

## Authorize your Org

Authorize your Salesforce Trailhead org for your forked collection.

1.  In your Postman workspace, select your forked Salesforce CRM Analytics Connect APIs collection.
2.  Select **No Environment.**
3.  Click the **Authorization** tab, and select **OAuth 2.0** as the type.
4.  At the bottom of the Authorization tab, click **Get New Access Token**.
5.  To let the Collection access your Trailhead Playground, click **Allow**. A success message appears briefly, and then you’re redirected to the Manage Access Tokens dialog.
6.  Verify that the instance\_url points to your Trailhead Playground.
7.  Copy the instance\_url, making sure to copy only the URL with no extra characters.
8.  Click **Use Token**.
9.  Select the **Variables** tab.
10.  In the \_endpoint row, CURRENT VALUE column, paste the instance\_url value that you copied previously.
11.  Set the Salesforce API version number in the version row, CURRENT VALUE column.
12.  Enter the URL that you run each request against in the baseURL row, CURRENT VALUE column.
13.  Save your work.
