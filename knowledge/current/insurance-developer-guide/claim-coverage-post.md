---
title: "Claim Coverage (POST)"
domain: insurance-developer-guide
topic: claim-coverage-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:40.078Z
estimatedTokens: 484
keywords: [Claim, Coverage, POST, record]
---

# Claim Coverage (POST)

> Create a claim coverage record for the specified claim.

# Claim Coverage (POST)

Create a claim coverage record for the specified claim.

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

Path parameter for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| claimId | String | ID of the claim to create the coverages for. | Required | 65.0 |

Request body for POST

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

Response body for POST

[Claim Coverage](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_claim_coverage.htm "Output representation for a claim coverage.")

## Code Examples

```
/connect/claims/claimId/coverages
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/claims/0Zkxx000000001dEAA/coverages
```

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

## Related Topics

- Claim Coverage (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_claim_coverage.htm)
