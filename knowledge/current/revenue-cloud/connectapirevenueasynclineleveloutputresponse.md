---
title: "ConnectApi.RevenueAsyncLineLevelOutputResponse"
domain: revenue-cloud
topic: connectapirevenueasynclineleveloutputresponse
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:07.192Z
estimatedTokens: 209
keywords: [Output, representation, result, API, async, line, level, operations]
---

# ConnectApi.RevenueAsyncLineLevelOutputResponse

> Output representation of the result of the API request for the async line level
    operations.

# ConnectApi.RevenueAsyncLineLevelOutputResponse

Output representation of the result of the API request for the async line level operations.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| errors | List<ConnectApi.ErrorResponse> | Details of errors, if any. | 62.0 |
| referenceLineErrorResults | List<ConnectApi.ReferenceLineError> | List of errors grouped by the invoice line IDs if the API request fails. | 62.0 |
| referenceLineType | String | Reference type for the reference line entity in the referenceLineErrorResults property. | 62.0 |
| requestIdentifier | String | Unique identifier of the request. | 62.0 |
| statusURL | String | URL to track the status of the operation. | 62.0 |
| success | Boolean | Indicates whether the API request is successful (true) or not (false). | 62.0 |

## Related Topics

- ConnectApi.ReferenceLineError (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_connectapi_output_reference_line_error.htm)
