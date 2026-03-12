---
title: "Data Cloud Reference Guide"
domain: data-cloud
topic: data-cloud-reference-guide
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:12.364Z
estimatedTokens: 1221
keywords: [Data, Cloud, Reference, Guide, Salesforce, provides, programmatic, access, information, simple, robust, secure, RESTful, APIs., integrate, web, mobile, applications, SDKs., Integrate]
---

# Data Cloud Reference Guide

> Salesforce provides programmatic access to Data Cloud information using
    simple, robust, and secure RESTful APIs. You can also integrate your web and mobile applications
    using Data Cloud SDKs.

# Data Cloud Reference Guide

Salesforce provides programmatic access to Data Cloud information using simple, robust, and secure RESTful APIs. You can also integrate your web and mobile applications using Data Cloud SDKs.

For information about Data Cloud architecture and the app development process, see [Data Cloud Developer Guide](https://developer.salesforce.com/docs/platform/data-cloud-dev/guide/get-started.html).

## Integrate and Extend Your Data Cloud Applications

Use the RESTful APIs to:

-   Ingest external datasets and maintain them in Data Cloud.
-   Extend Data Cloud and build your own custom integrations to support your business needs better.
-   Clean, enrich, and augment the Data Cloud data.

You can make most of the API calls from within the Data Cloud application interface, or you can call these methods externally using an auto-generated endpoint. To refer to the documentation of individual APIs and understand their utility in more detail, click the links at the end of the document.

With the Data Cloud [Web interactions SDK](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_salesforce_interactions_web_sdk.htm "Salesforce Interactions SDK is an extensible data capture and collection framework that you can use to track different user interactions on your website and send that information to Salesforce. This information can then be used to build behavior profiles for web visitors, audience segmentation, or Salesforce integrations.") and [Mobile SDK](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk.htm "Data Cloud Module for the Engagement Mobile SDK makes it possible for you to integrate your mobile applications with Data Cloud. This integration allows you to capture rich behavioral and demographic data from customers, and app lifecycle and screen navigation events. Events collected by Data Cloud create a unified profile of a customer to enable hyper-personalized engagement across multiple clouds, including Marketing, Commerce, and Service."), you can integrate your web or mobile applications with Data Cloud to capture customer events and engagements.

## Supported Salesforce Editions and API Limits

To use Data Cloud APIs, your org must use Enterprise Edition, Corporate Edition, or Developer Edition. If you’re an existing Salesforce customer and want to upgrade, contact your account executive.

API rate limits are enforced using:

-   Daily requests
-   Concurrent requests

The limits vary depending on the Salesforce Editions. Refer to these links for individual API-specific limits.

-   [API Limits for Profile, Query, and Calculated Insights](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_limits.htm "There are three distinct classes of APIs used to extract data from Data Cloud (formerly Customer Data Platform): Profile, Query, and Calculated Insights.")
-   [Ingest Bulk and Streaming API Limits](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_get_started.htm "Before using Ingestion API in Data Cloud, complete the prerequisites, set up authentication, and know the limits that apply to bulk ingestion and streaming ingestion.")

For guidance on the overall limits, see [Data Cloud Limits and Guidelines](https://help.salesforce.com/s/articleView?id=sf.c360_a_limits_and_guidelines.htm&type=5&language=en_US).

-   **[Getting Started](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_getting_started_with_cdp.htm)**
    Use this section to understand the prerequisites required to get started with Data Cloud API libraries and SDKs.
-   **[Additional Developer Resources for Data Cloud](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_coreapi_resources.htm)**
    In addition to the resources documented in this guide, there are additional Salesforce REST API resources and metadata types to use when you work with Data Cloud.
-   **[Data Cloud Extensibility Readiness Matrix](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_isv_readiness_data.htm)**
    The table lists the Data Cloud configuration elements that you can deploy. To deploy Data Cloud features, first add them to a data kit, and then add that data kit to a package.
-   **[API End-of-Life Policy](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_eol.htm)**
    See which REST API versions are supported, unsupported, or unavailable.

#### See Also

-   [Data Cloud Limits and Guidelines](https://help.salesforce.com/apex/HTViewHelpDoc?id=c360_a_limits_and_guidelines.htm&language=en_US "Guidelines define best practice recommendations to optimize your adoption of Data Cloud for best performance. Limits are boundaries beyond which features are unavailable, performance is throttled, or usage billing charges are applied. Since Data Cloud is built to scale, some limits can be adjusted to meet your business needs. Work with your account executive to find a solution that meets your goals.")

## Related Topics

- Web interactions SDK (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_salesforce_interactions_web_sdk.htm)
- Mobile SDK (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_engagement_mobile_sdk.htm)
- API Limits for Profile, Query, and Calculated Insights (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_limits.htm)
- Ingest Bulk and Streaming API Limits (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_get_started.htm)
- Getting Started (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_getting_started_with_cdp.htm)
- Additional Developer Resources for Data Cloud (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_coreapi_resources.htm)
- Data Cloud Extensibility Readiness Matrix (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_isv_readiness_data.htm)
- API End-of-Life Policy (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_eol.htm)
