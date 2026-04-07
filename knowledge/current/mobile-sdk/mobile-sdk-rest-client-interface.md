---
title: "Mobile SDK REST Client Interface"
domain: mobile-sdk
topic: mobile-sdk-rest-client-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:31.130Z
estimatedTokens: 374
keywords: [Mobile, SDK, REST, Client, native, creating, formatting, sending, requests, Salesforce, service, responds, relays, asynchronous, either]
---

# Mobile SDK REST Client Interface

> This class defines the native interface for creating, formatting, and sending REST requests to
   the Salesforce service. When the service responds, this class relays the asynchronous response to
   either your implementation of the RestClientDelegate
   protocol or a callback block or closure that 

# Mobile SDK REST Client Interface

| Swift | Objective-C |
| --- | --- |
| RestClient | SFRestAPI |

This class defines the native interface for creating, formatting, and sending REST requests to the Salesforce service. When the service responds, this class relays the asynchronous response to either your implementation of the RestClientDelegate protocol or a callback block or closure that you define.

RestClient serves as a factory for RestRequest instances. It defines a request factory method for each supported Lightning Platform endpoint. Each factory method returns a RestRequest instance that is customized with your request parameter values.

SFRestAPI defines REST request factory methods in Objective-C without Swift renaming. To call these methods on the Swift RestClient object, use the autocomplete suggestions offered by the Xcode compiler. For example, type RestClient.shared.request in a Mobile SDK app, then choose from the list.

![Warning](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_warning.png&folder=mobile_sdk)

#### Warning

Because the Swift compiler determines method and parameter names heuristically, signatures can differ from their Objective-C equivalents.

## See Also

-   For a list of supported Salesforce Platform APIs, see [Supported REST Services](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_rest_apis_supported.htm)

-   [Creating REST Requests](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_rest_apis_manual_calls.htm)

## Related Topics

- Supported REST Services (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_rest_apis_supported.htm)
- Creating REST Requests (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_rest_apis_manual_calls.htm)
