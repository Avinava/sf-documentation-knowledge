---
title: "ConnectApi.InsuranceMemberRatingRepresentation"
domain: insurance-developer-guide
topic: connectapiinsurancememberratingrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.576Z
estimatedTokens: 127
keywords: [Output, representation, rating, results, individual, members]
---

# ConnectApi.InsuranceMemberRatingRepresentation

> Output representation of the rating results for individual members.

# ConnectApi.InsuranceMemberRatingRepresentation

Output representation of the rating results for individual members.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| errors | List<ConnectApi.InsuranceErrorRepresentation> | Error details. | 65.0 |
| id | String | A unique identifier for this rating representation. | 65.0 |
| pricingResults | List<ConnectApi.InsuranceMemberRatingDetailsRepresentation> | Details of pricing results from individual ratings. | 65.0 |

## Related Topics

- ConnectApi.InsuranceErrorRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_error.htm)
- ConnectApi.InsuranceMemberRatingDetailsRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_member_rating_details.htm)
