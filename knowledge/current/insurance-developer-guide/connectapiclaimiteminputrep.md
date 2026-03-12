---
title: "ConnectApi.ClaimItemInputRep"
domain: insurance-developer-guide
topic: connectapiclaimiteminputrep
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.117Z
estimatedTokens: 330
keywords: [ConnectApi.ClaimItemInputRep, Invocable, action, input, representation, claim, item]
---

# ConnectApi.ClaimItemInputRep

> Invocable action input representation for claim item.

# ConnectApi.ClaimItemInputRep

Invocable action input representation for claim item.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| action | String | Action to perform on the record, such as add, update, or delete. | Optional | 65.0 |
| additionalFields | List<ConnectApi.ClaimAdditionalFieldInputRep> | Additional fields for the claim item. | Optional | 65.0 |
| attributes | List<ConnectApi.ClaimAttributeInputRep> | Attributes that are assigned to claim item. | Optional | 65.0 |
| category | String | Category of claim item. | Optional | 65.0 |
| instanceKey | String | Unique identifier for claim item. | Optional | 65.0 |
| insurancePolicyCoverageId | String | ID of the insurance policy coverage that applies to the claim item. | Optional | 65.0 |
| insuredItemId | String | ID of the insured item that's involved in the claim. | Optional | 65.0 |
| name | String | Name of the claim item. | Optional | 65.0 |
| participantInstanceKey | String | Unique identifier that's used to link a claim item to a specific participant. | Optional | 65.0 |
| productCode | String | Product code of the claim item product. | Optional | 65.0 |
| relatedObjects | List<ConnectApi.ClaimItemRelatedObjectInputRep> | Related claim item records. | Optional | 65.0 |

## Related Topics

- ConnectApi.ClaimAdditionalFieldInputRep (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_claim_additional_field_input_re.htm)
- ConnectApi.ClaimAttributeInputRep (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_claim_attribute_input_re.htm)
- ConnectApi.ClaimItemRelatedObjectInputRep (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_claim_item_related_object_input_re.htm)
