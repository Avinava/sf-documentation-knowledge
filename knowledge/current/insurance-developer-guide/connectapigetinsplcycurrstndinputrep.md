---
title: "ConnectApi.GetInsPlcyCurrStndInputRep"
domain: insurance-developer-guide
topic: connectapigetinsplcycurrstndinputrep
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.189Z
estimatedTokens: 264
keywords: [ConnectApi.GetInsPlcyCurrStndInputRep, Apex, record, needed, retrieve, consumed, limits, policy, claim]
---

# ConnectApi.GetInsPlcyCurrStndInputRep

> An Apex ConnectApi.GetInsPlcyLmtCurrStndInputRep record that contains the details needed to retrieve the consumed and available limits for the policy or claim.

# ConnectApi.GetInsPlcyCurrStndInputRep

An Apex ConnectApi.GetInsPlcyLmtCurrStndInputRep record that contains the details needed to retrieve the consumed and available limits for the policy or claim.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| claimCoverageId | String | ID of the claim coverage record. | Optional | 65.0 |
| claimId | String | ID of the claim for which you want to get the current standings. | Required to get the standings for a claim. | 65.0 |
| options | ConnectApi.IPLStandingCalcOptions | Options to include pending values and filter coverage. | Optional | 65.0 |
| policyAssetId | String | ID of the insurance policy asset. | Optional | 65.0 |
| policyCoverageId | String | ID of the policy coverage record. | Optional | 65.0 |
| policyId | String | ID of the insurance policy for which you want to get the current standings. | Required to get the standings for a policy. | 65.0 |
| policyParticipantId | String | ID of the policy participant. | Optional | 65.0 |

## Related Topics

- ConnectApi.IPLStandingCalcOptions (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_i_p_l_standing_calc_option.htm)
