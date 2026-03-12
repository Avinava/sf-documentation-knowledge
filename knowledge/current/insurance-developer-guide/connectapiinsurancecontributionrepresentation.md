---
title: "ConnectApi.InsuranceContributionRepresentation"
domain: insurance-developer-guide
topic: connectapiinsurancecontributionrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.525Z
estimatedTokens: 139
keywords: [Output, representation, contribution, individual, rating]
---

# ConnectApi.InsuranceContributionRepresentation

> Output representation of contribution information in individual rating.

# ConnectApi.InsuranceContributionRepresentation

Output representation of contribution information in individual rating.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| employeePremiumAmount | Double | Premium amount that's contributed by an employee. | 65.0 |
| employerPremiumAmount | Double | Premium amount that's contributed by an employer. | 65.0 |
| errors | List<ConnectApi.InsuranceErrorRepresentation> | Error details. | 65.0 |
| groupClassContributionId | String | ID of the contribution record. | 65.0 |

## Related Topics

- ConnectApi.InsuranceErrorRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_insurance_error.htm)
