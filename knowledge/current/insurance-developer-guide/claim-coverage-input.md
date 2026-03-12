---
title: "Claim Coverage Input"
domain: insurance-developer-guide
topic: claim-coverage-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.706Z
estimatedTokens: 348
keywords: [Claim, Coverage, Input, representation, creating]
---

# Claim Coverage Input

> Input representation for creating a claim coverage.

# Claim Coverage Input

Input representation for creating a claim coverage.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additionalFields | Object | Additional standard or custom fields to create or update the record. | Optional | 65.0 |
| claimItemId | String | ID of the claim item. | Required | 65.0 |
| claim​Participant​Id | String | ID of the claim participant that's associated with the claim coverage. | Required | 65.0 |
| currency​IsoCode | String | Currency ISO code for reserve adjustments. | Optional | 65.0 |
| expenseReserve​Amount | Double | Amount that's reserved to cover potential expenses while handling the claim, such as administrative or legal costs. | Optional | 65.0 |
| insurancePolicy​AssetId | String | ID of the asset covered by the insurance policy that's associated with the claim coverage. | Optional | 65.0 |
| insurancePolicy​CoverageId | String | ID of the insurance policy coverage. | Optional | 65.0 |
| lossReserveAmount | Double | Amount that's reserved to cover a potential payment for a loss. | Optional | 65.0 |
| name | String | Name of the claim coverage. | Optional | 65.0 |
| reserve​ProcessingMode | String | Specifies how financial reserves are managed when a claim coverage is created.The default value is CoverageReserve. | Optional | 65.0 |

## Code Examples

```
{
  "claimParticipantId": "0kaxx000000001dEAA",
  "claimItemId": "0koxx000000001dEAA",
  "insurancePolicyAssetId": "02ixx0000004l5sAAA",
  "insurancePolicyCoverageId": "0cvxx000000AbCdEfG",
  "reserveProcessingMode": "Manual",
  "currencyIsoCode": "USD",
  "lossReserveAmount": 5000.00,
  "expenseReserveAmount": 750.50,
  "additionalFields": {
    "RequireInspection": true,
    "CoverageSubtype": "Collision-Standard"
  }
}
```
