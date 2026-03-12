---
title: "Verify Policy Coverage Action"
domain: insurance-developer-guide
topic: verify-policy-coverage-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.767Z
estimatedTokens: 274
keywords: [Verify, Policy, Coverage, Action, whether, applicable, loss, date, under, insurance, eligible, coverages, processed, claims, REST]
---

# Verify Policy Coverage Action

> Verify whether a policy coverage is applicable for a specified loss date under an
  insurance policy, so that only eligible coverages are processed for claims.

# Verify Policy Coverage Action

Verify whether a policy coverage is applicable for a specified loss date under an insurance policy, so that only eligible coverages are processed for claims.

This action is available in API version 65.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/verifyPolicyCoverage

Formats

JSON

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| verifyPolicyCoverageInputRep | TypeApex-definedDescriptionRequired.An Apex ConnectApi.VerifyPolicyCoverageInputRep record that contains the details of a policy coverage whose applicability on a specified loss date under an insurance policy must be verified. |

## Outputs

| Output | Details |
| --- | --- |
| verifyPolicyCoverageOutputRep | TypeApex-definedDescriptionAn Apex ConnectApi.VerifyPolicyCoverageOutputRep record that contains the details of a policy coverage whose applicability on a specified loss date under an insurance policy is verified. |

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
      "verifyPolicyCoverageInputRep": {
        "coverageId": "1pcS70000004oVfIAI",
        "insuredAssetOrParticipantId": "0kaxx000000001dEAA",
        "lossDate": "2025-08-15",
        "policyId": "0YTx0000000001qEAA"
      }
    }
  ]
}
```

```
[
  {
    "actionName": "verifyPolicyCoverage",
    "errors": null,
    "invocationId": null,
    "isSuccess": true,
    "outcome": null,
    "outputValues": {
      "verifyPolicyCoverageOutputRep": {
        "errors": [],
        "isSuccess": true
      }
    },
    "sortOrder": -1,
    "version": 1
  }
]
```

## Related Topics

- ConnectApi.VerifyPolicyCoverageInputRep (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_verify_policy_coverage_input_re.htm)
- ConnectApi.VerifyPolicyCoverageOutputRep (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_verify_policy_coverage_output_re.htm)
