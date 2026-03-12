---
title: "ConnectApi.CreateClaimOutputRepresentation"
domain: insurance-developer-guide
topic: connectapicreateclaimoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.431Z
estimatedTokens: 119
keywords: [Output, representation, claim, operation]
---

# ConnectApi.CreateClaimOutputRepresentation

> Output representation for a create or update claim operation.

# ConnectApi.CreateClaimOutputRepresentation

Output representation for a create or update claim operation.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| claimId | String | ID of the created or updated claim. | 65.0 |
| errors | List<ConnectApi.ErrorDetail> | Details of the errors that are associated with the API request. | 65.0 |
| isSuccess | Boolean | Indicates whether the operation is successful (true) or not (false). | 65.0 |

## Related Topics

- ConnectApi.ErrorDetail (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_error_detail.htm)
