---
title: "ConnectApi.InsuranceMemberRatingDetailsRepresentation"
domain: insurance-developer-guide
topic: connectapiinsurancememberratingdetailsrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.579Z
estimatedTokens: 113
keywords: [Output, representation, rating, individual, member]
---

# ConnectApi.InsuranceMemberRatingDetailsRepresentation

> Output representation of rating details for an individual member.

# ConnectApi.InsuranceMemberRatingDetailsRepresentation

Output representation of rating details for an individual member.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| errors | List<ConnectApi.InsuranceErrorRepresentation> | List of error details. | 65.0 |
| memberId | String | ID of the member. | 65.0 |
| plans | List<ConnectApi.InsurancePlanRatingRepresentation> | Rating details for the plan. | 65.0 |

## Related Topics

- ConnectApi.InsuranceErrorRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_error.htm)
- ConnectApi.InsurancePlanRatingRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_plan_rating.htm)
