---
title: "ConnectApi.InsuranceCoverageRatingRepresentation"
domain: insurance-developer-guide
topic: connectapiinsurancecoverageratingrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.528Z
estimatedTokens: 169
keywords: [Output, representation, pricing, results, individual, coverage]
---

# ConnectApi.InsuranceCoverageRatingRepresentation

> Output representation of pricing results for an individual coverage.

# ConnectApi.InsuranceCoverageRatingRepresentation

Output representation of pricing results for an individual coverage.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| contributions | ConnectApi.InsuranceContributionRepresentation | Contribution details for the coverage, if applicable. | 65.0 |
| coverageId | String | ID of the coverage. | 65.0 |
| errors | List<ConnectApi.InsuranceErrorRepresentation> | Error details. | 65.0 |
| proratedRates | ConnectApi.InsuranceObjectMapRepresentation | Prorated rates for the coverage. | 65.0 |
| rates | ConnectApi.InsuranceObjectMapRepresentation | Rate details for the coverage. | 65.0 |

## Related Topics

- ConnectApi.InsuranceContributionRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_contribution.htm)
- ConnectApi.InsuranceErrorRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_error.htm)
- ConnectApi.InsuranceObjectMapRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_object_map.htm)
