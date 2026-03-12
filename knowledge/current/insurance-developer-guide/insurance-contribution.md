---
title: "Insurance Contribution"
domain: insurance-developer-guide
topic: insurance-contribution
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.554Z
estimatedTokens: 150
keywords: [Insurance, Contribution, Output, representation, individual, rating]
---

# Insurance Contribution

> Output representation of contribution information in an individual rating.

# Insurance Contribution

Output representation of contribution information in an individual rating.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| employee​PremiumAmount | Double | Premium amount that's contributed by an employee. | Small, 65.0 | 65.0 |
| employer​PremiumAmount | Double | Premium amount that's contributed by an employer. | Small, 65.0 | 65.0 |
| errors | Insurance Error[] | Error details. | Small, 65.0 | 65.0 |
| groupClass​ContributionId | String | ID of the contribution record. | Small, 65.0 | 65.0 |

## Related Topics

- Insurance Error[] (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_insurance_error_output.htm)
