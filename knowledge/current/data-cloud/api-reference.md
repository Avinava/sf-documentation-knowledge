---
title: "API Reference"
domain: data-cloud
topic: api-reference
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:17:44.091Z
keywords: [API, Reference]
---

# API Reference

# API Reference

This section provides guidance around references provided with the Salesforce Interactions Web SDK.

-   **[Initialization](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_initialization.htm)**  
    The recommended initialization flow for the Salesforce Interactions SDK follows a general pattern.
-   **[Data Collection](atlas.en-us.252.0.c360a_api.meta/c360a_api/c36a_api_data_collection.htm)**  
    Before the Salesforce Interactions SDK can begin capturing data, initialize the Salesforce Interactions SDK and gain the user’s consent to track the data.
-   **[Identity](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_identity.htm)**  
    The Salesforce Interactions SDK supports identification of new and returning customer using the first-party cookie \_sfid\_${domainHash}. Also, the domainHash is produced by running the website’s domain through a hashing function.
-   **[Consent](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_consent.htm)**  
    The Salesforce Interactions SDK has been designed to respect user privacy and doesn’t store or transmit data collected until it has been granted consent. If your site has existing consent management features, those features must integrate with the SDK to signal when the user has given consent to track.
-   **[Sitemap](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_sitemap.htm)**  
    Salesforce Interactions SDK Sitemap provides the ability to extract data during page navigation. Also, the sitemap can share data capture logic across multiple pages, and it can separate data capture logic from web page presentation logic.
-   **[Integrations](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_integration.htm)**  
    The Salesforce Interactions SDK features built-in CustomEvents that you can use to bind listeners to events that are specific to the Web SDK. Data that these events pass are in the detail properties of the event object passed to a listener’s callback function.
-   **[Debugging](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_debugging.htm)**  
    When configured, the Salesforce Interaction SDK can output messages to the browser console for debugging purposes. By default, the logger is configured with a log level of none. The logger used by the Web SDK wraps the standard browser console.log function and can be accessed at SalesforceInteractions.log.