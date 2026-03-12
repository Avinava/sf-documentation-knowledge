---
title: "Connect REST API Developer Guide"
domain: chatterapi
topic: connect-rest-api-developer-guide
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:21.853Z
estimatedTokens: 788
namespace: ConnectApi
keywords: [Connect, REST, API, Developer, Integrate, mobile, apps, intranet, sites, third-party, web, applications, Salesforce, Responses, localized]
---

# Connect REST API Developer Guide

> Integrate mobile apps, intranet sites, and third-party web applications with
                Salesforce using Connect REST API. Responses are localized, structured for
                presentation, and can be filtered to contain only what the app needs.

**Namespace:** `ConnectApi`

# Connect REST API Developer Guide

Integrate mobile apps, intranet sites, and third-party web applications with Salesforce using Connect REST API. Responses are localized, structured for presentation, and can be filtered to contain only what the app needs.

| Available in: All editions except Personal Edition. In addition, some features require Chatter to be enabled for the organization. |
| --- |


Connect REST API provides programmatic access to B2B Commerce, CMS managed content, Experience Cloud sites, files, notifications, topics, and more. Use Connect REST API to display Chatter feeds, users, and groups, especially in mobile applications.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

Many Connect REST API resource actions are exposed as static methods on Apex classes in the ConnectApi namespace. These classes are called Connect in Apex. Use [Connect in Apex](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_connect_api.htm) to create custom experiences in Salesforce. Connect in Apex is available in all organizations and editions that have Apex enabled.

-   **[Connect REST API Introduction](atlas.en-us.chatterapi.meta/chatterapi/intro_working_with_chatter_connect.htm)**
    Consider the Connect REST API architecture, rate limits, and how the resources, requests, and responses work.
-   **[Connect REST API Quick Start](atlas.en-us.chatterapi.meta/chatterapi/quickstart.htm)**
    Connect to Salesforce and authenticate, then make a request to Connect REST API and look at the response.
-   **[Connect REST API Features](atlas.en-us.chatterapi.meta/chatterapi/features.htm)**
    Find the resources to work with Connect REST API features.
-   **[Connect REST API Examples](atlas.en-us.chatterapi.meta/chatterapi/quickreference.htm)**
    Use Connect REST API examples to perform tasks.
-   **[Connect REST API Resources](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_overview.htm)**
    Connect REST API resources are sometimes called endpoints.
-   **[Chatter REST API Resources](atlas.en-us.chatterapi.meta/chatterapi/connect_chatter_resources_overview.htm)**
    These REST API resources require Chatter and can have different rate limit allocations.
-   **[Connect REST API Request Bodies](atlas.en-us.chatterapi.meta/chatterapi/connect_requests.htm)**
    To perform a POST, PATCH, or PUT request, pass query parameters or create a request body formatted in either XML or JSON. This chapter lists the request bodies. The query parameters are listed with each resource.
-   **[Connect REST API Response Bodies](atlas.en-us.chatterapi.meta/chatterapi/connect_responses.htm)**
    The successful execution of a request to a Connect REST API resource can return a response body in either JSON or XML format.
-   **[Connect REST API Appendices](atlas.en-us.chatterapi.meta/chatterapi/connect_appendices.htm)**
    Use these appendices when working with action link buttons, personalization audience criteria, or personalization targets. You can also find retired resources, request bodies, and response bodies here.

## Related Topics

- Connect REST API Introduction (atlas.en-us.chatterapi.meta/chatterapi/intro_working_with_chatter_connect.htm)
- Connect REST API Quick Start (atlas.en-us.chatterapi.meta/chatterapi/quickstart.htm)
- Connect REST API Features (atlas.en-us.chatterapi.meta/chatterapi/features.htm)
- Connect REST API Examples (atlas.en-us.chatterapi.meta/chatterapi/quickreference.htm)
- Connect REST API Resources (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_overview.htm)
- Chatter REST API Resources (atlas.en-us.chatterapi.meta/chatterapi/connect_chatter_resources_overview.htm)
- Connect REST API Request Bodies (atlas.en-us.chatterapi.meta/chatterapi/connect_requests.htm)
- Connect REST API Response Bodies (atlas.en-us.chatterapi.meta/chatterapi/connect_responses.htm)
- Connect REST API Appendices (atlas.en-us.chatterapi.meta/chatterapi/connect_appendices.htm)
