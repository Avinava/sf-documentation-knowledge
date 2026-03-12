---
title: "ConnectApi.ClaimItemOutputRepresentation"
domain: insurance-developer-guide
topic: connectapiclaimitemoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.401Z
estimatedTokens: 251
keywords: [Output, representation, claim, item]
---

# ConnectApi.ClaimItemOutputRepresentation

> Output representation for a claim item.

# ConnectApi.ClaimItemOutputRepresentation

Output representation for a claim item.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| additionalFields | Object | Additional fields of the claim item. | 65.0 |
| attributes | List<ConnectApi.ClaimAttributeOutputRepresentation> | Attributes of the claim item. | 65.0 |
| category | String | Category of the claim item. | 65.0 |
| id | String | ID of the claim item. | 65.0 |
| instanceKey | String | Unique instance key of the claim item. | 65.0 |
| insurancePolicyCoverageId | String | ID of the insurance policy coverage. | 65.0 |
| insuredItemId | String | ID of the insured item involved. | 65.0 |
| name | String | Name of the claim item. | 65.0 |
| participantInstanceKey | String | Instance key of the claim participant. | 65.0 |
| productCode | String | Product code of the claim item. | 65.0 |
| relatedObjects | List<ConnectApi.ClaimRelatedObjectOutputRepresentation> | Claim item related objects. | 65.0 |

## Related Topics

- ConnectApi.ClaimAttributeOutputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_claim_attribute_output.htm)
- ConnectApi.ClaimRelatedObjectOutputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_claim_related_object_output.htm)
