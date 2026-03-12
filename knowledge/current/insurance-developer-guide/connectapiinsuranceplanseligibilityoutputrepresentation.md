---
title: "ConnectApi.InsurancePlansEligibilityOutputRepresentation"
domain: insurance-developer-guide
topic: connectapiinsuranceplanseligibilityoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.603Z
estimatedTokens: 180
keywords: [Output, representation, employee, plan, eligibility, check]
---

# ConnectApi.InsurancePlansEligibilityOutputRepresentation

> Output representation for the employee plan eligibility check.

# ConnectApi.InsurancePlansEligibilityOutputRepresentation

Output representation for the employee plan eligibility check.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| contextId | String | ID of the context that's used for the eligibility check. | 65.0 |
| errors | List<ConnectApi.InsuranceErrorRepresentation> | List of errors that occurred during the eligibility check. | 65.0 |
| isSuccess | Boolean | Indicates whether the API operation is successful (true) or not (false). | 65.0 |
| memberId | String | ID of the group census member. | 65.0 |
| planEligibilityDetails | ConnectApi.EligiblePlanDetailsOutputRepresentation | Details of the plan eligibility check. | 65.0 |

## Related Topics

- ConnectApi.InsuranceErrorRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_error.htm)
- ConnectApi.EligiblePlanDetailsOutputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_eligible_plan_details.htm)
