---
title: "API Access in Group and Professional Editions"
domain: packagingGuide
topic: api-access-in-group-and-professional-editions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:20.770Z
estimatedTokens: 914
keywords: [API, Access, Group, Professional, Editions, isn't, normally, Edition, orgs, However, app, passes, security, review, you’re]
---

# API Access in Group and Professional Editions

> API access isn't normally supported in Group and Professional Edition orgs. However,
    after your app passes the security review, you’re eligible to use some APIs for building
    composite applications.

# API Access in Group and Professional Editions

API access isn't normally supported in Group and Professional Edition orgs. However, after your app passes the security review, you’re eligible to use some APIs for building composite applications.

-   Currently, the standard Data SOAP and REST APIs are supported for Group and Professional Edition apps. Metadata API is supported in Professional Edition apps. To request API access, follow the instructions in [Request an API Token for Your Solution](atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_request_api_token.htm "An API token is required for an AppExchange solution to authenticate and authorize API requests. You can request an API token for your managed package after it passes the AppExchange security review."). You can also contact Salesforce to allowlist a connected app to use REST API in Group and Professional Edition orgs.
-   Other APIs, such as the Bulk API 2.0 and Apex methods exposed as SOAP web services, remain unavailable.
-   You can enable REST-based web services by using connected app consumer allowlisting.
-   You can enable SOAP-based web services, including Metadata API, by using an API token called a client ID. Append the client ID to your SOAP headers in integration calls. With this special key, your app can make calls to Group and Professional Edition orgs for Data API and Professional Edition orgs for Metadata API, even if the customer doesn't have API access.

The client ID has these properties.

-   You can't use the client ID with the AJAX Toolkit in custom JavaScript, S-controls, or anywhere in your app where its value is exposed to the end customer.
-   For development purposes, GE and PE orgs created via the Environment Hub already have Metadata API and SOAP API (Data API) enabled. You can then develop and test your app before the security review. After your app passes security review and you obtain an API token, test your app again to make sure that it’s working correctly.
-   The client ID grants Group and Professional Edition access to SOAP API, and Professional Edition access to Metadata API. With Metadata API, you can dynamically create various components that you typically create in Setup. For instance, you can create a custom field dynamically in a Professional Edition org with the API token.

This table shows which APIs are accessible when using Group Edition (GE) and Professional Edition (PE) with specific methods of access.

| API | Access to GE and PE |
| --- | --- |
| Web Services (SOAP) | Yes, with token |
| Apex methods exposed as web services (SOAP) | No |
| Web services (REST) | Yes, with connected app consumer allowlisting |
| Apex methods exposed as web services (REST) | Yes, with connected app consumer allowlisting |
| Connect REST API | Yes |
| Metadata API | Yes, with token |
| Bulk API 2.0 | No |
| Data Loader tool (uses SOAP web services) | No, can’t set the token |

-   **[Accessing REST API in Group and Professional Editions](atlas.en-us.packagingGuide.meta/packagingGuide/dev_packages_rest_api_access.htm)**
    The Lightning Platform REST API provides you with a powerful, convenient, and simple API for interacting with Lightning Platform. As a qualified partner, you can request that we enable your application for REST API calls to GE or PE orgs.
-   **[Request an API Token for Your Solution](atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_request_api_token.htm)**
    An API token is required for an AppExchange solution to authenticate and authorize API requests. You can request an API token for your managed package after it passes the AppExchange security review.

## Related Topics

- Request an API Token for Your Solution (atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_request_api_token.htm)
- Accessing REST API in Group and Professional Editions (atlas.en-us.packagingGuide.meta/packagingGuide/dev_packages_rest_api_access.htm)
