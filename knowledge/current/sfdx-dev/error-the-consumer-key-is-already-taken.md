---
title: "Error: The consumer key is already taken"
domain: sfdx-dev
topic: error-the-consumer-key-is-already-taken
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.709Z
estimatedTokens: 343
keywords: [Error, consumer, key, already, taken, Let’s, say, run, project, retrieve, start, org, you’ve, created, connected]
---

# Error: The consumer key is already taken

> Let’s say you run project retrieve start on an org
        in which you’ve created a connected app. When you try to deploy the retrieved source to a
        different org, the deploy fails with the error The consumer key
            is already taken. What happened?

# Error: The consumer key is already taken

Let’s say you run project retrieve start on an org in which you’ve created a connected app. When you try to deploy the retrieved source to a different org, the deploy fails with the error The consumer key is already taken. What happened?

Connected apps include a consumer key that a website or app uses to identify itself to Salesforce. Consumer keys must be unique across the entire Salesforce ecosystem. When you try to deploy the retrieved (and unchanged) source file associated with the connected app to a new org, the deploy fails due to duplicate consumer keys.

You have a few options to work around this problem.

-   Remove the connected app source file from your project before you deploy your source to the new org. As a result, the connected app isn’t created. The connected app source file is named something like force-app/main/default/connectedApps/MyConnApp.connectedApp-meta.xml.
-   Update the file for the connected app and change the value of the <consumerKey> element to a unique value. Here’s a snippet of a sample connected app file that shows the <consumerKey> element.

    ```

    ```


#### See Also

-   [*Salesforce Help*: Connected Apps](https://help.salesforce.com/s/articleView?id=xcloud.connected_app_overview.htm&type=5&language=en_US "Salesforce Help: Connected Apps - HTML (New Window)")

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<ConnectedApp xmlns="http://soap.sforce.com/2006/04/metadata">
    <contactEmail>john@doecompany.com</contactEmail>
    <contactPhone>5556789</contactPhone>
    <label>MyConnApp</label>
    <oauthConfig>
        <callbackUrl>http://localhost:1717/OauthRedirect</callbackUrl>
        <consumerKey>3MVG9PG9sFc71i9n55UWbx2</consumerKey>
        <isAdminApproved>false</isAdminApproved>
...
```
