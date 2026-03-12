---
title: "ConnectApi.BatchInput"
domain: apex-reference
topic: connectapibatchinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:24.663Z
estimatedTokens: 324
keywords: [ConnectApi.BatchInput, Construct, inputs, passed, time]
---

# ConnectApi.BatchInput

> Construct a set of inputs to be passed into a method at the same
      time.

# ConnectApi.BatchInput

Construct a set of inputs to be passed into a method at the same time.

Use this constructor when there isn’t a binary input:

```

```

Use this constructor to pass one binary input:

```

```

Use this constructor to pass multiple binary inputs:

```

```

The constructors takes these parameters:

| Argument | Type | Description | Available Version |
| --- | --- | --- | --- |
| input | Object | An individual input object to be used in the batch operation. For example, for postFeedElementBatch(), this should be ConnectApi.FeedElementInput. | 32.0 |
| binary | ConnectApi.BinaryInput | A binary file to associate with the input object. | 32.0 |
| binaries | List<ConnectApi.BinaryInput> | A list of binary files to associate with the input object. | 32.0 |

#### See Also

-   [Post a Batch of Feed Elements](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectapi_examples_post_feed_element_batch.htm "Post a Batch of Feed Elements - HTML (New Window)")

-   [Post a Batch of Feed Elements with a New (Binary) File](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectapi_examples_post_feed_element_batch_binary.htm "Post a Batch of Feed Elements with a New (Binary) File - HTML (New Window)")

## Code Examples

```
ConnectApi.BatchInput(Object input)
```

```
ConnectApi.BatchInput(Object input, ConnectApi.BinaryInput binary)
```

```apex
ConnectApi.BatchInput(Object input, List<ConnectApi.BinaryInput> binaries)
```

## Related Topics

- ConnectApi.BinaryInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_binary.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
