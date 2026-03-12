---
title: "Insurance Policy Limit Current Standings (POST)"
domain: insurance-developer-guide
topic: insurance-policy-limit-current-standings-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:40.037Z
estimatedTokens: 478
keywords: [Insurance, Policy, Limit, Current, Standings, POST, calculated, consumption, status, applicable, limits, API, retrieves, claim, coverage]
---

# Insurance Policy Limit Current Standings (POST)

> Get the calculated current standings (consumption status) for all applicable insurance
  policy limits. This API retrieves standings based on the policy, claim, claim coverage as well as
  policy coverage, insurance policy participant, and insurance policy asset.

# Insurance Policy Limit Current Standings (POST)

Get the calculated current standings (consumption status) for all applicable insurance policy limits. This API retrieves standings based on the policy, claim, claim coverage as well as policy coverage, insurance policy participant, and insurance policy asset.

This API accepts only one ID per request, either policyId or claimId.

Resource

```

```

Resource example

```

```

Available version

65.0

HTTP methods

POST

Request body for POST

JSON example

This example queries for standings at the entire policy level, using the viewOption parameter to get a summary, including pending amounts.

```

```

This example gets the specific limits that are impacted by a single claim, excluding pending amounts.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| claimCoverageId | String | ID of the claim coverage record. | Optional | 65.0 |
| claimId | String | ID of the claim. | Required to get the standings for a claim | 65.0 |
| options | Limit Standing Option Input | Options for the calculation. | Optional | 65.0 |
| policyAssetId | String | ID of the policy asset. | Optional | 65.0 |
| policy​CoverageId | String | ID of the policy coverage record. | Optional | 65.0 |
| policyId | String | ID of the insurance policy. | Required to get the standings for a policy | 65.0 |
| policy​ParticipantId | String | ID of the policy participant. | Optional | 65.0 |
| trackingDate | Date | Date on which the standing is calculated.The default value is the current system date. | Optional | 66.0 |

Response body for POST

[Insurance Policy Limit Current Standings Response](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_ins_policy_lmt_calc_standing.htm "Output representation for the current standings of the insurance policy limits.")

## Code Examples

```
/connect/insurance/policy-limit/calculate-standings
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/insurance/policy-limit/calculate-standings
```

```
{
  "policyId": "01t000000000000001",
  "claimId": null,
  "claimCoverageId": null,
  "policyParticipantId": null,
  "policyAssetId": null,
  "policyCoverageId": null,
  "trackingDate": "2025-10-19",
  "options": {
    "viewOption": "showAllPolicyCoverages",
    "shouldIncludePendingAmount": true
  }
}
```

```
{
  "policyId": null,
  "claimId": "01t000000000000001",
  "claimCoverageId": null,
  "policyParticipantId": null,
  "policyAssetId": null,
  "policyCoverageId": null,
  "trackingDate": "2025-10-19",
  "options": {
    "viewOption": "showOpenClaimPolicyCoverages",
    "shouldIncludePendingAmount": false
  }
}
```

## Related Topics

- Limit Standing Option Input (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_limit_standing_option_input.htm)
- Insurance Policy Limit
       Current Standings Response (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_ins_policy_lmt_calc_standing.htm)
