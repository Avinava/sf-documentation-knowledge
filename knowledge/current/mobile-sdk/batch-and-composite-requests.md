---
title: "Batch and Composite Requests"
domain: mobile-sdk
topic: batch-and-composite-requests
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:25.051Z
estimatedTokens: 537
keywords: [Batch, Composite, Requests, APIs, pose, challenges, because, they, handle, multiple, call, Mobile, SDK, classes, take, pain, building, configuring, complex, Swift, extensions, reduce, Classes]
---

> Batch and composite APIs pose special challenges, because they handle multiple requests
  in a single call. In Swift, Mobile SDK extensions
  reduce the pain of building and configuring these complex requests.

# Batch and Composite Requests

Batch and composite APIs pose special challenges, because they handle multiple requests in a single call. In Swift, Mobile SDK extensions reduce the pain of building and configuring these complex requests.

## Batch and Composite Request Classes

Swift

-   ```

    ```

-   ```

    ```

-   ```

    ```

-   ```

    ```

-   ```

    ```

-   ```

    ```


Objective-C

-   ```

    ```

-   ```

    ```

-   ```

    ```

-   ```

    ```

-   ```

    ```

-   ```

    ```


These classes make it easy to create batch and composite requests. To use them:

1.  Create a builder instance. For batch requests, you can optionally set haltOnError property to true:

    ```

    ```

    For composite requests, you can optionally set the allOrNone rollback property to true.

    ```

    ```

2.  As you create REST requests, add them to the builder object.

    ```

    ```

    With composite requests, you also provide a reference ID as described in the *REST API Developer Guide*. You can add a base RestRequest object and specify the reference ID explicitly:

    ```

    ```

    or add a CompositeSubRequest object, which is a RestRequest object that stores the reference ID internally:

    ```

    ```

3.  When you’re ready, call the builder object’s build method—buildBatchRequest(\_:) or buildCompositeRequest(\_:). For example:

    ```

    ```

    Each build method returns a specialized BatchRestRequest or CompositeRestRequest object. You can send these objects through the shared RestClient instance.

    ![Tip](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_tip.png&folder=mobile_sdk)

    #### Tip

    To use an older API version as the default argument, pass a literal string in the format “v42.0”.

4.  Responses to batch and composite requests arrive as instances of the response class (BatchResponse or CompositeResponse).

## See Also

-   [“Batch” in *REST API Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/requests_composite_batch.htm "HTML (New Window)")
-   [“Composite” in *REST API Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_composite_composite.htm "HTML (New Window)")

## Code Examples

```
BatchRequest
CompositeRequest
```

```
BatchRequestBuilder
CompositeRequestBuilder
```

```
BatchResponse
CompositeRequestBuilder
```

```
val builder = BatchRequest.BatchRequestBuilder()
// Optional; defaults to false
builder.setHaltOnError(true)
```

```
BatchRequest.BatchRequestBuilder builder = 
    new BatchRequest.BatchRequestBuilder();
// Optional; defaults to false
builder.setHaltOnError(true);
```
