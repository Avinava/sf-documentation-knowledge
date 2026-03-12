---
title: "ConnectApi.InsuranceUpdateMemberPlansOutputRepresentation"
domain: insurance-developer-guide
topic: connectapiinsuranceupdatememberplansoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.614Z
estimatedTokens: 176
keywords: [Output, representation, member, plan, process]
---

# ConnectApi.InsuranceUpdateMemberPlansOutputRepresentation

> Output representation for the member plan update process.

# ConnectApi.InsuranceUpdateMemberPlansOutputRepresentation

Output representation for the member plan update process.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| errors | List<ConnectApi.InsuranceErrorRepresentation> | List of errors that occurred during the update. | 65.0 |
| failedPlans | List<String> | List of plan IDs that failed to be added or deleted. | 65.0 |
| isSuccess | Boolean | Indicates whether the overall operation is successful (true) or not (false). | 65.0 |
| memberId | String | ID of the group census member. | 65.0 |
| updatedMemberPlans | List<String> | List of IDs for the member plan records that are successfully updated. | 65.0 |

## Related Topics

- ConnectApi.InsuranceErrorRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_error.htm)
