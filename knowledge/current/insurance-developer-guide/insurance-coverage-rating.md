---
title: "Insurance Coverage Rating"
domain: insurance-developer-guide
topic: insurance-coverage-rating
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.557Z
estimatedTokens: 164
keywords: [Insurance, Coverage, Rating, Output, representation, individual, coverage's, pricing, result]
---

# Insurance Coverage Rating

> Output representation of an individual coverage's pricing result.

# Insurance Coverage Rating

Output representation of an individual coverage's pricing result.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| contributions | Insurance Contribution | Contribution details for the coverage, if applicable. | Small, 65.0 | 65.0 |
| coverageId | String | ID of the coverage. | Small, 65.0 | 65.0 |
| errors | Insurance Error[] | Error details. | Small, 65.0 | 65.0 |
| proratedRates | Insurance Object Map | Prorated rates for the coverage. | Small, 65.0 | 65.0 |
| rates | Insurance Object Map | Rate details for the coverage. | Small, 65.0 | 65.0 |

## Related Topics

- Insurance Contribution (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_contribution_output.htm)
- Insurance Error[] (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_error_output.htm)
- Insurance Object Map (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_object_map_output.htm)
