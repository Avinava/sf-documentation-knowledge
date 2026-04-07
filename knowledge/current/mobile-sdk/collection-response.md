---
title: "Collection Response"
domain: mobile-sdk
topic: collection-response
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:27.273Z
estimatedTokens: 279
keywords: [Collection, Handles, responses, Mobile, SDK, requests]
---

> Handles responses for all Mobile SDK Collection requests.

# Collection Response

Handles responses for all Mobile SDK Collection requests.

**Properties:**

-   Sub-responses (array)
-   Sub-response properties:
    -   Object ID (string)
    -   Success (Boolean)
    -   Errors (array)
    -   JSON (dictionary)

iOS

Swift, Objective-C

Swift

Response handling:

```

```

Objective-C

Response handling:

```

```

Android

Kotlin

Response handling:

```

```

Java

Response handling:

```

```

## See Also

-   [SFSDKCollectionResponse.h](https://github.com/forcedotcom/SalesforceMobileSDK-iOS/blob/dev/libs/SalesforceSDKCore/SalesforceSDKCore/Classes/RestAPI/SFSDKCollectionResponse.h) in the SalesforceMobileSDK-iOS repo.
-   [CollectionResponse.java](https://github.com/forcedotcom/SalesforceMobileSDK-Android/blob/dev/libs/SalesforceSDK/src/com/salesforce/androidsdk/rest/CollectionResponse.java "HTML (New Window)") in the SalesforceMobileSDK-Android repo.
-   [“sObject Collections” in *REST API Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_composite_sobjects_collections.htm "HTML (New Window)")

## Code Examples

```
let parsedResponse = CollectionResponse(try response.asJson() as! [Any])
let objId = parsedResponse.subResponses[0].objectId  // String; can be nil
let success = parsedResponse.subResponses[0].success // Boolean
let errors = parsedResponse.subResponses[0].errors   // Array of CollectionErrorResponse objects with 
                                                     // status code, message and fields
```

```
SFSDKCollectionResponse* parsedResponse = [[SFSDKCollectionResponse alloc] 
    initWith:response];
parsedResponse.subResponses[0].objectId
parsedResponse.subResponses[0].success
parsedResponse.subResponses[0].errors // NSArray<SFSDKCollectionErrorResponse*> with status
                                            // code, message and fields
```

```
val parsedResponse = CollectionResponse(response.asJSONArray())
val objId = parsedResponse.subResponses[0].id         // a string or null
val success = parsedResponse.subResponses[0].success  // a boolean 
val errors = parsedResponse.subResponses[0].errors    // a CollectionSubResponse.ErrorResponse object
                                                      // with status code, message and fields
```

```apex
CollectionResponse parsedResponse = 
    new CollectionResponse(response.asJSONArray());
String objId = parsedResponse.subResponses.get(0).id; // can be null
Boolean success = 
    parsedResponse.subResponses.get(0).success; 
List<CollectionResponse.ErrorResponse> errors = 
    parsedResponse.subResponses.get(0).errors;
```
