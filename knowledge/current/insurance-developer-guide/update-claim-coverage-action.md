---
title: "Update Claim Coverage Action"
domain: insurance-developer-guide
topic: update-claim-coverage-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.741Z
estimatedTokens: 179
keywords: [Claim, Coverage, Action, REST, HTTP, Inputs, Outputs]
---

# Update Claim Coverage Action

> Update a claim coverage.

# Update Claim Coverage Action

Update a claim coverage.

This action is available in API version 65.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/updateClaimCoverage

Formats

JSON

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| updateClaimCoverageInputRep | TypeApex-definedDescriptionRequired.An Apex ConnectApi.UpdateClaimCoverageInputRep record that contains the details of the claim coverage to be updated. |

## Outputs

| Output | Details |
| --- | --- |
| coverageId | TypestringDescriptionID of the claim coverage that's updated. |

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
      "updateClaimCoverageInputRep": {
        "claimId": "0Z1S70000004oVfIAI",
        "coverageId": "1ccS70000004oVfIAI",
        "expenseReserveAmount": 500,
        "lossReserveAmount": 2000,
        "additionalFields": {
          "Status": "Approved"
        }
      }
    }
  ]
}
```

```
[
  {
    "actionName": "updateClaimCoverage",
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

- ConnectApi.UpdateClaimCoverageInputRep (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_update_claim_coverage_input_re.htm)
