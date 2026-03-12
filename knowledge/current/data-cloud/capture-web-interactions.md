---
title: "Capture Web Interactions"
domain: data-cloud
topic: capture-web-interactions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:13.439Z
estimatedTokens: 1391
namespace: SalesforceInteractions
keywords: [Capture, Web, Interactions, Salesforce, SDK, extensible, data, collection, framework, track, different, user, website, send, build]
---

# Capture Web Interactions

> Salesforce Interactions SDK is an extensible data capture and collection framework that
    you can use to track different user interactions on your website and send that information to
    Salesforce. This information can then be used to build behavior profiles for web visitors,
    audience segmentation, or Salesforce integrations.

**Namespace:** `SalesforceInteractions`

# Capture Web Interactions

Salesforce Interactions SDK is an extensible data capture and collection framework that you can use to track different user interactions on your website and send that information to Salesforce. This information can then be used to build behavior profiles for web visitors, audience segmentation, or Salesforce integrations.

The SDK consists of a base SDK and product-specific modules for [Data Cloud](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_salesforce_cdp_module_of_the_salesforce_web_sdk.htm "The Data Cloud Module of the Salesforce Interactions SDK is an extension that adds features to the SDK. You can convert the Event Structure into a compatible format for ingestion by Data Cloud and authenticate and deliver events over HTTP to a Data Cloud Web Connector.") and [Marketing Cloud Personalization](https://developer.salesforce.com/docs/marketing/personalization/guide/web-integration.html#personalization-module-of-the-salesforce-interactions-sdk). The SDK uses a unified event data model shared across both modules. This unified data model allows for capturing and integrating key business objects and user and behavioral data through event capture in a consistent format across Data Cloud and Personalization. The unified data model also enables you to use a single SDK to integrate with either Data Cloud, Personalization, or both together.

Salesforce Interactions SDK uses the SalesforceInteractions namespace, which encapsulates all of the SDK’s components. To learn more about the SDK, see [Salesforce Interactions SDK](https://help.salesforce.com/s/articleView?id=sf.c360_a_salesforce_web_sdk.htm&language=en_US) on Salesforce Help. For information about setting up the Salesforce Interactions SDK in Data Cloud, see [Set Up the Salesforce Interactions SDK](https://help.salesforce.com/s/articleView?id=sf.c360_a_set_up_of_salesforce_web_sdk.htm&language=en_US).

Salesforce Interactions SDK provides:

-   Tracking of customer interactions
-   Identity and cookie management for anonymous and named identity tracking
-   Consent management integration hooks
-   Configuration-driven instrumentation with sitemaps
-   Integration hooks for adding custom functionality

## Requirements

Your website customers need a browser capable of running ES6-compatible code.

## Tracking User Interactions

The sendEvent API call is how you capture interactions and collect associated data from a website customer. An interaction event has a named identifier, like View Catalog Object, required values, like catalogObject or order, and tracked user-defined values. For example, here’s a View Catalog Object event:

```

```

Salesforce Interactions SDK also comes with ready to use event data models to use across Salesforce.

## Identity and Cookie Management

Salesforce Interactions SDK supports anonymous and named identity tracking using first-party cookies or by being passed identity information from the website. Cookies are prefixed with \_sfid and end with a string of characters unique to the domain to which the cookie belongs. You can customize cookie and identity behavior either through configuration or through calling the [Identity](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_identity.htm "The Salesforce Interactions SDK supports identification of new and returning customer using the first-party cookie _sfid_${domainHash}. Also, the domainHash is produced by running the website’s domain through a hashing function.") APIs in Salesforce Interactions SDK.

## Consent Management

Not all website visitors and customers consent to cookie tracking. To support consent management, Salesforce Interactions SDK is designed to send events only if a customer has consented to tracking. When consent is revoked, the Web SDK captures this preference and then immediately stops emitting events. For example, this method passes consent into Salesforce Interactions SDK.

```

```

Capturing customer consent can be handled either through configuration or through calling the [Consent](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_consent.htm "The Salesforce Interactions SDK has been designed to respect user privacy and doesn’t store or transmit data collected until it has been granted consent. If your site has existing consent management features, those features must integrate with the SDK to signal when the user has given consent to track.") API in Salesforce Interactions SDK.

## Sitemap

Salesforce Interactions SDK Sitemap is a configuration-driven integration layer that executes within and is deployed with the Web SDK. A Sitemap is developed to integrate with a specific site using the API provided by the Web SDK that maps key business objects to interaction events.

-   **[Event Specifications](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_event_specifications.htm)**
    Event specifications for Salesforce Interactions SDK.
-   **[API Reference](atlas.en-us.252.0.c360a_api.meta/c360a_api/c36a_api_api_reference.htm)**
    This section provides guidance around references provided with the Salesforce Interactions Web SDK.
-   **[Data Cloud Module of the Salesforce Interactions SDK](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_salesforce_cdp_module_of_the_salesforce_web_sdk.htm)**
    The Data Cloud Module of the Salesforce Interactions SDK is an extension that adds features to the SDK. You can convert the Event Structure into a compatible format for ingestion by Data Cloud and authenticate and deliver events over HTTP to a Data Cloud Web Connector.

## Code Examples

```
SalesforceInteractions.sendEvent({
    interaction : {
        name : "View Catalog Object",
        catalogObject: { 
          type : "Product", 
          id : "65e4e737",
          attributes: {
            description: "Shoes"
          }
        }
    }
})
```

```
SalesforceInteractions.init({
  consents: [{
    provider: 'ExampleProvider',
    purpose: 'Tracking',
    status: 'Opt In'
  }]
})
```

## Related Topics

- Data
        Cloud (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_salesforce_cdp_module_of_the_salesforce_web_sdk.htm)
- Identity (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_identity.htm)
- Consent (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_consent.htm)
- Event Specifications (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_event_specifications.htm)
- API Reference (atlas.en-us.252.0.c360a_api.meta/c360a_api/c36a_api_api_reference.htm)
- Data Cloud Module of the Salesforce Interactions SDK (atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_salesforce_cdp_module_of_the_salesforce_web_sdk.htm)
