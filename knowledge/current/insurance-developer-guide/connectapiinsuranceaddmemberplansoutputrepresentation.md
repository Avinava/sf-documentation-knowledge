---
title: "ConnectApi.InsuranceAddMemberPlansOutputRepresentation"
domain: insurance-developer-guide
topic: connectapiinsuranceaddmemberplansoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.506Z
estimatedTokens: 142
keywords: [Output, representation, adding, plans, member]
---

# ConnectApi.InsuranceAddMemberPlansOutputRepresentation

> Output representation for adding plans to a member.

# ConnectApi.InsuranceAddMemberPlansOutputRepresentation

Output representation for adding plans to a member.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| errors | List<ConnectApi.InsuranceErrorRepresentation> | List of errors that occurred while adding plans. | 64.0 |
| isSuccess | Boolean | Indicates whether the API executed successfully. | 64.0 |
| memberId | String | ID of the group census member. | 64.0 |
| memberPlans | List<String> | List of IDs for the member plan records that are successfully added. | 64.0 |

## Related Topics

- ConnectApi.InsuranceErrorRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_error.htm)
