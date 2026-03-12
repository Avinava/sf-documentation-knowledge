---
title: "ConnectApi.InsurancePlanOutputRepresentation"
domain: insurance-developer-guide
topic: connectapiinsuranceplanoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.594Z
estimatedTokens: 267
keywords: [Output, representation, insurance, plan]
---

# ConnectApi.InsurancePlanOutputRepresentation

> Output representation of an insurance plan.

# ConnectApi.InsurancePlanOutputRepresentation

Output representation of an insurance plan.

| Property Name | Type | Description | Available Version |  |
| --- | --- | --- | --- | --- |
| attributes | List<ConnectApi.InsuranceObjectMapRepresentation> | Attributes for the plan. | 65.0 | 65.0 |
| coverages | List<ConnectApi.InsurancePlanOutputRepresentation> | Coverages for the plan. | 65.0 | 65.0 |
| isOptional | Boolean | Indicates if the plan is optional for the group census member (true) or not (false). | Small, 65.0 | 65.0 |
| isPrimarySubscribed | Boolean | Indicates if the primary group census member is subscribed to the plan (true) or not (false). | Small, 65.0 | 65.0 |
| isSubscribed | Boolean | Indicates if the group census member is subscribed to the plan (true) or not (false). | Small, 65.0 | 65.0 |
| planDescription | String | Description of the contract group plan. | Small, 65.0 | 65.0 |
| planId | String | ID of the contract group plan. | Small, 65.0 | 65.0 |
| planName | String | Name of the contract group plan. | Small, 65.0 | 65.0 |

## Related Topics

- ConnectApi.InsuranceObjectMapRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_object_map.htm)
