---
title: "Using Salesforce REST APIs with Mobile SDK"
domain: mobile-sdk
topic: using-salesforce-rest-apis-with-mobile-sdk
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:30.997Z
estimatedTokens: 289
keywords: [Salesforce, REST, APIs, Mobile, SDK, iOS, requests, performed, asynchronously, Responses, successful, arrive, app, Array, Dictionary]
---

# Using Salesforce REST APIs with Mobile SDK

> In Mobile SDK for iOS,
      all REST requests are performed asynchronously. Responses for successful REST requests arrive
      in your app as Array or Dictionary objects. If a request fails, the response contains an Error object.

# Using Salesforce REST APIs with Mobile SDK

The Salesforce API provides services for accessing Salesforce objects through REST endpoints. Mobile SDK supports these services by providing REST classes that

-   Implement factory methods that create REST request objects for you.
-   Send authenticated requests, based on your configuration, to Salesforce.
-   Intercept the server’s response and return it to your app as a Swift or Objective-C object.

In Mobile SDK for iOS, all REST requests are performed asynchronously. Responses for successful REST requests arrive in your app as Array or Dictionary objects. If a request fails, the response contains an Error object.

## See Also

-   [Supported REST Services](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_rest_apis_supported.htm)
-   For an overview of all Salesforce APIs, see [Which API Do I Use?](https://help.salesforce.com/articleView?id=integrate_what_is_api.htm&language=en_US "HTML (New Window)") in Salesforce Help.
-   For information on Salesforce API request and response formats, see [REST API](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/).

## Related Topics

- Supported REST Services (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_rest_apis_supported.htm)
