---
title: "ConnectApi.InsuranceDeleteMemberPlansOutputRepresentation"
domain: insurance-developer-guide
topic: connectapiinsurancedeletememberplansoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.534Z
estimatedTokens: 125
keywords: [Output, representation, member, plan, deletion, process]
---

# ConnectApi.InsuranceDeleteMemberPlansOutputRepresentation

> Output representation for the member plan deletion process.

# ConnectApi.InsuranceDeleteMemberPlansOutputRepresentation

Output representation for the member plan deletion process.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| errors | List<ConnectApi.InsuranceErrorRepresentation> | List of errors that occurred during the deletion process. | 65.0 |
| isSuccess | Boolean | Indicates whether the API executed successfully (true) or not (false). | 65.0 |
| memberId | String | ID of the group census member. | 65.0 |

## Related Topics

- ConnectApi.InsuranceErrorRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_error.htm)
