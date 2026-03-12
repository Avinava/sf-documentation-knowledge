---
title: "ConnectApi.InsurancePlanRatingRepresentation"
domain: insurance-developer-guide
topic: connectapiinsuranceplanratingrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.600Z
estimatedTokens: 189
keywords: [Output, representation, pricing, results, individual, plan]
---

# ConnectApi.InsurancePlanRatingRepresentation

> Output representation of pricing results for an individual plan.

# ConnectApi.InsurancePlanRatingRepresentation

Output representation of pricing results for an individual plan.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| contributions | ConnectApi.InsuranceContributionRepresentation | Contribution details for the plan, if applicable. | 65.0 |
| coverages | List<ConnectApi.InsuranceCoverageRatingRepresentation> | Coverage details for the plan. | 65.0 |
| errors | List<ConnectApi.InsuranceErrorRepresentation> | Error details. | 65.0 |
| id | String | ID of the plan. | 65.0 |
| proratedRates | ConnectApi.InsuranceObjectMapRepresentation | Prorated rates for the plan. | 65.0 |
| rates | ConnectApi.InsuranceObjectMapRepresentation | Rate details for the plan. | 65.0 |

## Related Topics

- ConnectApi.InsuranceContributionRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_contribution.htm)
- ConnectApi.InsuranceCoverageRatingRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_coverage_rating.htm)
- ConnectApi.InsuranceErrorRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_error.htm)
- ConnectApi.InsuranceObjectMapRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_object_map.htm)
