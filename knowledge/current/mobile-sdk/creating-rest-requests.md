---
title: "Creating REST Requests"
domain: mobile-sdk
topic: creating-rest-requests
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:26.500Z
estimatedTokens: 536
keywords: [Creating, REST, Requests, Mobile, SDK, API, supports, Salesforce, Lightning, Platform, RestClient, factory, RestRequest, instances, every, endpoint, obtain, customized, calling, appropriate, cli]
---

> The Mobile SDK REST API supports many types of Salesforce
      REST requests. For the Lightning Platform API, RestClient
      defines factory methods that return RestRequest instances
      for every supported endpoint. You obtain a customized RestRequest object by calling the appropriate REST cli

# Creating REST Requests

The Mobile SDK REST API supports many types of Salesforce REST requests. For the Lightning Platform API, RestClient defines factory methods that return RestRequest instances for every supported endpoint. You obtain a customized RestRequest object by calling the appropriate REST client factory method with your request parameters. Factory RestRequest objects are specialized for the indicated request type and configured with your input values.

Here’s an overview of how you can create REST requests.

-   For the Lightning Platform API, RestClient factory methods return preformatted RestRequest objects based on minimal data input.
-   (Objective-C only) SFRestAPI (Blocks) category methods let you define a REST request and send it in a single call. Block arguments, instead of a REST delegate object, handle REST responses.
-   SFRestAPI (Files) category methods create RestRequest instances that provide access to Salesforce file-based resources.
-   RestRequest methods support custom configurations for calling non-Lightning Platform and external APIs.
-   SFRestAPI (QueryBuilder) category methods save you from having to manually format your own queries or searches. These methods construct SOQL query and SOSL search strings based on your input.

## See Also

-   [Using REST Request Methods](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_rest_apis_using_methods.htm)
-   [Unauthenticated REST Requests](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_unauthenticated_rest_requests.htm)
-   [SFRestAPI (Blocks) Category](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_rest_apis_SFRestAPI_Block.htm "For receiving and handling REST API responses, you can use inline code blocks instead of a delegate class. This alternative Objective-C approach lets you send a request and handle its asynchronous response in a single method call.")
-   [SFRestAPI (QueryBuilder) Category](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_rest_apis_SFRestAPI_QueryBuilder.htm)
-   [SFRestAPI (Files) Category Category](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_rest_apis_SFRestAPI_Files.htm)

## Related Topics

- Using REST Request Methods (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_rest_apis_using_methods.htm)
- Unauthenticated REST Requests (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_unauthenticated_rest_requests.htm)
- SFRestAPI (Blocks) Category (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_rest_apis_SFRestAPI_Block.htm)
- SFRestAPI (QueryBuilder) Category (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_rest_apis_SFRestAPI_QueryBuilder.htm)
- SFRestAPI (Files) Category Category (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_rest_apis_SFRestAPI_Files.htm)
