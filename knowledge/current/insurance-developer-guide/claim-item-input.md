---
title: "Claim Item Input"
domain: insurance-developer-guide
topic: claim-item-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.679Z
estimatedTokens: 338
keywords: [Claim, Item, Input, representation]
---

# Claim Item Input

> Input representation for a claim item.

# Claim Item Input

Input representation for a claim item.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| action | String | Action to perform on the record, such as create, update, and delete.Supported only for Claims (PATCH) requests that add, update, or remove a claim item. | Required to update claim item | 65.0 |
| additional​Fields | Object | Additional standard or custom fields for the claim item. | Optional | 65.0 |
| attributes | Claim Attribute Input[] | Attributes of the claim item. | Optional | 65.0 |
| category | String | Category of the claim item. | Required | 65.0 |
| instanceKey | String | Unique identifier of the claim item. | Optional | 65.0 |
| insurancePolicy​CoverageId | String | ID of the insurance policy coverage that applies to the claim item. | Optional | 65.0 |
| insuredItemId | String | ID of the insured item that's involved in the claim. | Optional | 65.0 |
| name | String | Name of the claim item. | Optional | 65.0 |
| participant​InstanceKey | String | Unique identifier that's used to link a claim item to a specific participant. | Optional | 65.0 |
| productCode | String | Product code of the claim item product. | Required | 65.0 |
| relatedObjects | Claim Related Object Input[] | Related claim item records. | Optional | 65.0 |

## Related Topics

- Claim Attribute Input[] (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_claim_attribute_input.htm)
- Claim Related Object Input[] (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_claim_related_object_input.htm)
