---
title: "Accessing REST API in Group and Professional Editions"
domain: packagingGuide
topic: accessing-rest-api-in-group-and-professional-editions
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:20.802Z
estimatedTokens: 635
keywords: [Accessing, REST, API, Group, Professional, Editions, Lightning, Platform, powerful, convenient, simple, interacting, qualified, partner, enable]
---

# Accessing REST API in Group and Professional Editions

> The Lightning Platform REST API provides you with a powerful, convenient, and simple
          API for interacting with Lightning Platform. As a qualified partner, you can request that
          we enable your application for REST API calls to GE or PE orgs.

# Accessing REST API in Group and Professional Editions

The Lightning Platform REST API provides you with a powerful, convenient, and simple API for interacting with Lightning Platform. As a qualified partner, you can request that we enable your application for REST API calls to GE or PE orgs.

To get access to REST API, you must meet these conditions.

-   Access to the Partner Community. If you’re new, learn about and join one of the ISV Partner Programs.
-   Pass the security review. All applications enrolled in the AppExchange or OEM Program must go through a periodic security review.
-   Access to Salesforce Developer Edition. If you don’t already have access to a DE org, you can get the Partner Developer Edition from the Environment Hub.

To request a REST API token:

1.  Create a connected app from your DE org. Log in to your Salesforce org with your developer account. From Setup, in the Quick Find box, enter Apps, and then select **Apps**. In the Connected Apps section, click **New**.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=packagingGuide)

    #### Note

    We strongly recommend that you work in an org that you plan to use for a long time, such as the one where you build your managed package or your Trialforce management org (TMO).

2.  Enter the information requested, and click **Save**. Saving your app gives you the Consumer Key and Consumer Secret that the app uses to communicate with Salesforce.
3.  Log a support case in the [Salesforce Partner Community](https://partners.salesforce.com "HTML (New Window)"). For product, specify **Partner Programs & Benefits**. For topic, specify **ISV Technology Request**. Provide your DE Org ID and the credentials for your connected app.

We evaluate your request and enable the appropriate permission. You receive a case notification from us. Wait 24 hours to make sure that the permission is activated. Your client\_id (or Consumer Key) and client\_secret (or Consumer Secret) are checked against the information that you submit via the case during the OAuth authentication. If it matches, the system allows you to communicate with GE and PE editions.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=packagingGuide)

#### Note

-   This permission is intended solely for REST API. It doesn’t enable your application to use SOAP API, Bulk API, or Metadata API for GE and PE editions.
-   This permission is applied only to your application. We don’t turn on the API in the GE and PE org.
