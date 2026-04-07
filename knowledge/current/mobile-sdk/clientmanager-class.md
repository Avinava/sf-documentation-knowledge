---
title: "ClientManager Class"
domain: mobile-sdk
topic: clientmanager-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:29.478Z
estimatedTokens: 155
keywords: [ClientManager, works, Android, AccountManager, manage, user, accounts, importantly, apps, access, RestClient, instances, two]
---

# ClientManager Class

> ClientManager works with the
Android AccountManager class
to manage user accounts. More importantly for apps, it provides access
to RestClient instances through
two methods:

# ClientManager Class

ClientManager works with the Android AccountManager class to manage user accounts. More importantly for apps, it provides access to RestClient instances through two methods:

-   getRestClient()
-   peekRestClient()

The getRestClient() method asynchronously creates a RestClient instance for querying Salesforce data. Asynchronous in this case means that this method is intended for use on UI threads. The peekRestClient() method creates a RestClient instance synchronously, for use in non-UI contexts.

Once you get the RestClient instance, you can use it to send REST API calls to Salesforce.
