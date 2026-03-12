---
title: "ConnectApi.InsuranceGetMemberPlansOutputRepresentation"
domain: insurance-developer-guide
topic: connectapiinsurancegetmemberplansoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.543Z
estimatedTokens: 157
keywords: [Output, representation, eligible, plans, member]
---

# ConnectApi.InsuranceGetMemberPlansOutputRepresentation

> Output representation of eligible plans for a single member.

# ConnectApi.InsuranceGetMemberPlansOutputRepresentation

Output representation of eligible plans for a single member.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| error | ConnectApi.InsuranceErrorRepresentation | Error details that are associated with the API request. | 65.0 |
| memberId | String | ID of the group census member (primary or dependent). | 65.0 |
| plans | Map<String, ConnectApi.InsurancePlanListOutputRepresentation> | Map of eligible plans, where the key is the plan category, such as Medical and Dental, and the value is a list of plans in that category. | 65.0 |

## Related Topics

- ConnectApi.InsuranceErrorRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_error.htm)
- ConnectApi.InsurancePlanListOutputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_plan_list.htm)
