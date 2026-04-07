---
title: "ConnectApi.PolicyAsyncRepresentation"
domain: insurance-developer-guide
topic: connectapipolicyasyncrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:50.137Z
estimatedTokens: 112
keywords: [ConnectApi.PolicyAsyncRepresentation, multi-root, policy, renewal, asynchronous, operations]
---

> Output representation for multi-root policy renewal asynchronous
        operations.

# ConnectApi.PolicyAsyncRepresentation

Output representation for multi-root policy renewal asynchronous operations.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| error | ConnectApi.ErrorOutput​Representation | List of errors that occurred during the processing of the API request. | 66.0 |
| jobIdentifier | String | ID of the asynchronous job that's generated to process the multi-root policy. | 66.0 |

## Related Topics

- ConnectApi.ErrorOutput​Representation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_error_output.htm)
