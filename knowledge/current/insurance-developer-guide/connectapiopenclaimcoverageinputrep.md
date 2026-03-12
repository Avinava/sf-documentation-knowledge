---
title: "ConnectApi.OpenClaimCoverageInputRep"
domain: insurance-developer-guide
topic: connectapiopenclaimcoverageinputrep
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.315Z
estimatedTokens: 359
keywords: [ConnectApi.OpenClaimCoverageInputRep, Input, representation, open, claim, coverage, action]
---

# ConnectApi.OpenClaimCoverageInputRep

> Input representation for the open claim coverage action.

# ConnectApi.OpenClaimCoverageInputRep

Input representation for the open claim coverage action.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additionalFields | List<ConnectApi.ClaimAdditionalFieldInputRep> | Additional standard or custom fields to open the claim coverage. | Optional | 65.0 |
| claimId | String | ID of the claim record. | Required | 65.0 |
| claimItemId | String | ID of the claim item. | Required | 65.0 |
| claimParticipantId | String | ID of the claim participant that's associated with the claim coverage. | Required | 65.0 |
| currencyIsoCode | String | Currency ISO code for reserve adjustments. | Optional | 65.0 |
| expenseReserveAmount | Double | Amount that's reserved to cover potential expenses while handling the claim, such as administrative or legal costs. | Optional | 65.0 |
| insurancePolicyAssetId | String | ID of the asset covered by the insurance policy that's associated with the claim coverage. | Optional | 65.0 |
| insurancePolicyCoverageId | String | ID of the insurance policy coverage. | Optional | 65.0 |
| lossReserveAmount | Double | Amount that's reserved to cover a potential payment for a loss. | Optional | 65.0 |
| name | String | Name of the claim coverage. | Optional | 65.0 |
| reserveProcessingMode | String | Determines how financial reserves are handled when a claim coverage is created. | Optional | 65.0 |

## Related Topics

- ConnectApi.ClaimAdditionalFieldInputRep (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_claim_additional_field_input_re.htm)
