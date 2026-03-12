---
title: "ConnectApi.InsPolicyLmtCurrentStandingsInputRep"
domain: insurance-developer-guide
topic: connectapiinspolicylmtcurrentstandingsinputrep
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.226Z
estimatedTokens: 226
keywords: [Input, representation, current, standings, insurance, policy, limits]
---

# ConnectApi.InsPolicyLmtCurrentStandingsInputRep

> Input representation for the current standings of the insurance policy limits.

# ConnectApi.InsPolicyLmtCurrentStandingsInputRep

Input representation for the current standings of the insurance policy limits.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| claimCoverageId | String | Unique ID of the Claim Coverage. | Optional | 65.0 |
| claimId | String | ID of the claim. | Optional | 65.0 |
| options | ConnectApi.LimitStandingOptionInputRepresentation | Options for the calculation. | Optional | 65.0 |
| policyAssetId | String | ID of the asset. | Optional | 65.0 |
| policyCoverageId | String | ID of the coverage. | Optional | 65.0 |
| policyId | String | ID of the insurance policy. | Optional | 65.0 |
| policyParticipantId | String | ID of the participant. | Optional | 65.0 |
| trackingDate | Date | Date on which the standing is calculated.The default value is the current system date. | Optional | 66.0 |

## Related Topics

- ConnectApi.LimitStandingOptionInputRepresentation (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_limit_standing_option.htm)
