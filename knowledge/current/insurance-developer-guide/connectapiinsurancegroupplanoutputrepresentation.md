---
title: "ConnectApi.InsuranceGroupPlanOutputRepresentation"
domain: insurance-developer-guide
topic: connectapiinsurancegroupplanoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.554Z
estimatedTokens: 180
keywords: [Output, representation, insurance, group, plan]
---

# ConnectApi.InsuranceGroupPlanOutputRepresentation

> Output representation of an insurance group plan.

# ConnectApi.InsuranceGroupPlanOutputRepresentation

Output representation of an insurance group plan.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| attributes | List<ConnectApi.InsuranceObjectMapRepresentation> | List of attributes for the contract group plan. | 65.0 |
| coverages | List<ConnectApi.InsuranceGroupPlanOutputRepresentation> | List of coverages for the plan. | 65.0 |
| isOptional | Boolean | Indicates whether the plan is optional (true) or not (false). | 65.0 |
| planId | String | ID of the contract group plan. | 65.0 |
| planName | String | Name of the contract group plan. | 65.0 |
| productCategory | String | Category of the contract group plan. | 65.0 |

## Related Topics

- ConnectApi.InsuranceObjectMapRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_object_map.htm)
