---
title: "ConnectApi.InsurancePlansEligibilityPatchInputRepresentation"
domain: insurance-developer-guide
topic: connectapiinsuranceplanseligibilitypatchinputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.281Z
estimatedTokens: 167
keywords: [Input, representation, checking, plan, eligibility, updating, context]
---

# ConnectApi.InsurancePlansEligibilityPatchInputRepresentation

> Input representation for checking plan eligibility by updating an existing context.

# ConnectApi.InsurancePlansEligibilityPatchInputRepresentation

Input representation for checking plan eligibility by updating an existing context.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| addedPlans | List<ConnectApi.InsuranceGroupPlanInputRepresentation> | List of contract group plans to add to the eligibility check. | Optional | 65.0 |
| contextId | String | ID of the existing eligibility context to update. | Required | 65.0 |
| deletedPlans | List<ConnectApi.InsuranceGroupPlanInputRepresentation> | List of contract group plans to remove from the eligibility check. | Optional | 65.0 |

## Related Topics

- ConnectApi.InsuranceGroupPlanInputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_insurance_group_plan.htm)
