---
title: "Open Claim Coverage Action"
domain: insurance-developer-guide
topic: open-claim-coverage-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.667Z
estimatedTokens: 176
keywords: [Open, Claim, Coverage, Action, REST, HTTP, Inputs, Outputs]
---

# Open Claim Coverage Action

> Open a claim coverage.

# Open Claim Coverage Action

Open a claim coverage.

This action is available in API version 65.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/openClaimCoverage

Formats

JSON

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| openClaimCoverageInputRep | TypeApex-definedDescriptionRequired.An Apex ConnectApi.OpenClaimCoverageInputRep record that contains the details of the claim coverage to be opened. |

## Outputs

| Output | Details |
| --- | --- |
| coverageId | TypestringDescriptionID of the claim coverage that's opened. |

## Example

Sample Request

```

```

Sample Response

```

```

## Code Examples

```
{
  "inputs": [
    {
      "openClaimCoverageInputRep": {
        "claimParticipantId": "0kaxx000000001dEAA",
        "claimItemId": "0koxx000000001dEAA",
        "insurancePolicyAssetId": "02ixx0000004l5sAAA",
        "insurancePolicyCoverageId": "0cvxx000000AbCdEfG",
        "reserveProcessingMode": "Manual",
        "currencyIsoCode": "USD",
        "lossReserveAmount": 5000,
        "expenseReserveAmount": 750.5,
        "additionalFields": {
          "RequireInspection": true,
          "CoverageSubtype": "Collision-Standard"
        }
      }
    }
  ]
}
```

```
[
  {
    "actionName": "openClaimCoverage",
    "errors": null,
    "invocationId": null,
    "isSuccess": true,
    "outcome": null,
    "outputValues": {
      "coverageId": "1ccS70000004oVfIAI"
    },
    "sortOrder": -1,
    "version": 1
  }
]
```

## Related Topics

- ConnectApi.OpenClaimCoverageInputRep (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_open_claim_coverage_input_re.htm)
