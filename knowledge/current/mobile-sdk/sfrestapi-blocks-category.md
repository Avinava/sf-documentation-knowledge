---
title: "SFRestAPI (Blocks) Category"
domain: mobile-sdk
topic: sfrestapi-blocks-category
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:26.441Z
estimatedTokens: 1061
keywords: [SFRestAPI, Blocks, Category, receiving, handling, REST, API, responses, inline, code, instead, delegate, alternative, Objective-C, approach, lets, send, handle, asynchronous, call]
---

> For receiving and handling REST API responses, you can use inline code blocks instead
    of a delegate class. This alternative Objective-C approach lets you send a request and handle
    its asynchronous response in a single method call.

# SFRestAPI (Blocks) Category

For receiving and handling REST API responses, you can use inline code blocks instead of a delegate class. This alternative Objective-C approach lets you send a request and handle its asynchronous response in a single method call.

Mobile SDK for native iOS provides block methods for single requests, composite requests, and batch requests. When you use these methods, you provide block arguments to handle success and failure responses. Mobile SDK forwards the asynchronous response to your success or failure block according to the response’s network status.

Block methods and associated typedefs are defined in the [SFRestAPI (Blocks)](https://github.com/forcedotcom/SalesforceMobileSDK-iOS/blob/master/libs/SalesforceSDKCore/SalesforceSDKCore/Classes/RestAPI/SFRestAPI%2BBlocks.h) category as follows:

```

```

Each send method requires two blocks:

Failure Block

A failure block can receive timeout, cancellation, or error failures.

-   Block type:

    ```

    ```

-   Response type: NSError

Success Block

Block type and response type depend on the request type as follows:

Single Request

-   Response type: NSArray or NSData object, depending on the data returned.
-   Block types (use the appropriate template for your request’s return type):

    ```

    ```


Composite Request

-   Block type:

    ```

    ```

-   Response type: [SFSDKCompositeResponse](https://github.com/forcedotcom/SalesforceMobileSDK-iOS/blob/master/libs/SalesforceSDKCore/SalesforceSDKCore/Classes/RestAPI/SFSDKCompositeResponse.h)

Batch Request

-   Block type:

    ```

    ```

-   Response type: [SFSDKBatchResponse](https://github.com/forcedotcom/SalesforceMobileSDK-iOS/blob/master/libs/SalesforceSDKCore/SalesforceSDKCore/Classes/RestAPI/SFSDKBatchResponse.h)

## Send a Request Using Blocks

To send a request using a block method:

1.  Create the SFRestRequest object that fits your needs.
    -   For a single request:
        -   Create your SFRestRequest object by calling the appropriate [SFRestAPI factory method](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_api.htm "The RestRequest class provides factory and extension methods that wrap Salesforce API calls. These methods use request parameters that you provide to construct the network call.").
        -   Send your request. The following example handles any request that returns an NSDictionary response:

            ```

            ```

    -   For batch and composite requests:
        1.  For each subrequest, create an SFRestRequest object by calling an appropriate factory method.
        2.  To create the SFRestRequest object that you send to Salesforce, pass an array of your subrequest objects to the batch or composite factory method. See [SFRestAPI.h](https://github.com/forcedotcom/SalesforceMobileSDK-iOS/blob/master/libs/SalesforceSDKCore/SalesforceSDKCore/Classes/RestAPI/SFRestAPI.h) for more information.

            ```

            ```

2.  Design your success block to handle the expected data.
3.  Design your failure block to handle the issue gracefully.
4.  Pass the SFRestRequest object you created in step 1, and your success and failure blocks, to the appropriate send block method.

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

-   For Swift, Mobile SDK refines the Objective-C block methods to funnel the REST response into a single Swift completion closure. See [Handling REST Responses](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_rest_apis_SFRestDelegate.htm).
-   In Objective-C, judicious use of blocks and delegates can help fine-tune your app’s readability and ease of maintenance. Ideal conditions for using blocks often correspond to those that mandate inline functions in C++ or anonymous functions in Java. Ultimately, you make a judgment call based on your own requirements.

#### See Also

-   [Batch and Composite Requests](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_rest_apis_batch_composite.htm "Batch and composite APIs pose special challenges, because they handle multiple requests in a single call. In Swift, Mobile SDK extensions reduce the pain of building and configuring these complex requests.")

## Code Examples

```
// Sends a single request you've already built, using blocks to return status. 
- (void) sendRequest:(SFRestRequest *)request 
        failureBlock:(SFRestRequestFailBlock)failureBlock 
        successBlock:(SFRestResponseBlock)successBlock 
        NS_REFINED_FOR_SWIFT;

// Sends a composite request you've already built, using blocks to return status.
- (void) sendCompositeRequest:(SFSDKCompositeRequest *)request 
                 failureBlock:(SFRestRequestFailBlock)failureBlock 
                 successBlock:(SFRestCompositeResponseBlock)successBlock 
                 NS_REFINED_FOR_SWIFT;

// Sends a batch request you've already built, using blocks to return status.
- (void) sendBatchRequest:(SFSDKBatchRequest *)request 
             failureBlock:(SFRestRequestFailBlock)failureBlock 
             successBlock:(SFRestBatchResponseBlock)successBlock 
             NS_REFINED_FOR_SWIFT;
```

```
typedef void (^SFRestRequestFailBlock) (id _Nullable response, 
    NSError * _Nullable e, NSURLResponse * _Nullable rawResponse) 
    NS_SWIFT_NAME(RestRequestFailBlock);
```

```
typedef void (^SFRestDictionaryResponseBlock) (NSDictionary * _Nullable dict, 
    NSURLResponse * _Nullable rawResponse) 
    NS_SWIFT_NAME(RestDictionaryResponseBlock); 

// Use this block when you request API versions
typedef void (^SFRestArrayResponseBlock) (NSArray * _Nullable arr, 
    NSURLResponse * _Nullable rawResponse) 
    NS_SWIFT_NAME(RestArrayResponseBlock);
```

```
typedef void (^SFRestCompositeResponseBlock) (SFSDKCompositeResponse *response, 
    NSURLResponse * _Nullable rawResponse) 
    NS_SWIFT_NAME(RestCompositeResponseBlock);
```

```
typedef void (^SFRestBatchResponseBlock) (SFSDKBatchResponse *response, 
    NSURLResponse * _Nullable rawResponse) NS_SWIFT_NAME(RestBatchResponseBlock);
```

## Related Topics

- SFRestAPI factory method (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ref_rest_api.htm)
- Handling REST Responses (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_rest_apis_SFRestDelegate.htm)
- Batch and Composite Requests (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_rest_apis_batch_composite.htm)
