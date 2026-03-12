---
title: "ConnectApi.EligiblePlanDetailsOutputRepresentation"
domain: insurance-developer-guide
topic: connectapieligibleplandetailsoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.444Z
estimatedTokens: 126
keywords: [Output, representation, containing, eligible, plans]
---

# ConnectApi.EligiblePlanDetailsOutputRepresentation

> Output representation containing the details of eligible plans.

# ConnectApi.EligiblePlanDetailsOutputRepresentation

Output representation containing the details of eligible plans.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| messages | List<ConnectApi.InsuranceMessageOutputRepresentation> | List of informational or warning messages related to the eligibility results. | 65.0 |
| plans | List<ConnectApi.InsuranceGroupPlanOutputRepresentation> | List of the contract group plans that the member is eligible for. | 65.0 |

## Related Topics

- ConnectApi.InsuranceMessageOutputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_message_output.htm)
- ConnectApi.InsuranceGroupPlanOutputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_group_plan.htm)
