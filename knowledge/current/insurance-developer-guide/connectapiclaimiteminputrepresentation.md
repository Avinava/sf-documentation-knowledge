---
title: "ConnectApi.ClaimItemInputRepresentation"
domain: insurance-developer-guide
topic: connectapiclaimiteminputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.112Z
estimatedTokens: 325
keywords: [ConnectApi.ClaimItemInputRepresentation, Input, representation, claim, items]
---

# ConnectApi.ClaimItemInputRepresentation

> Input representation for claim items.

# ConnectApi.ClaimItemInputRepresentation

Input representation for claim items.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| action | String | Action to perform on the record, such as create or update. | Optional | 65.0 |
| additionalFields | Object | Additional standard or custom fields for the claim item. | Optional | 65.0 |
| attributes | List<ConnectApi.ClaimAttributeInputRepresentation> | Attributes of the claim item. | Optional | 65.0 |
| category | String | Category of the claim item. | Optional | 65.0 |
| instanceKey | String | Unique identifier of the claim item. | Optional | 65.0 |
| insurancePolicy​CoverageId | String | ID of the insurance policy coverage that applies to the claim item. | Optional | 65.0 |
| insuredItemId | String | ID of the insured item that's involved in the claim. | Optional | 65.0 |
| name | String | Name of the claim item. | Optional | 65.0 |
| participantInstanceKey | String | Unique identifier that's used to link a claim item to a specific participant. | Optional | 65.0 |
| productCode | String | Product code of the claim item product. | Optional | 65.0 |
| relatedObjects | List<ConnectApi.ClaimRelatedObjectInputRepresentation> | Related claim item records. | Optional | 65.0 |

## Related Topics

- ConnectApi.ClaimAttributeInputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_claim_attribute.htm)
- ConnectApi.ClaimRelatedObjectInputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_claim_related_object.htm)
