---
title: "Get Insurance Policy Current Standings Action"
domain: insurance-developer-guide
topic: get-insurance-policy-current-standings-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.635Z
estimatedTokens: 235
keywords: [Insurance, Policy, Current, Standings, Action, REST, HTTP, Inputs, Outputs]
---

# Get Insurance Policy Current Standings Action

> Get the current standings of the insurance policy.

# Get Insurance Policy Current Standings Action

Get the current standings of the insurance policy.

This action is available in API version 65.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/getInsPolicyCurrentStandings

Formats

JSON

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| getInsPlcyCurrStndInputRep | TypeApex-definedDescriptionRequired.An Apex ConnectApi.GetInsPlcyCurrStndInputRep record that contains the details to retrieve the consumed and available limits for the policy or claim. |

## Outputs

| Output | Details |
| --- | --- |
| getInsPlcyCurrStndOutputRep | TypeApex-definedDescriptionAn Apex ConnectApi.GetInsPlcyCurrStndOutputRep record that contains the details of the consumed and available limits that are retrieved for the policy claim. |

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
      "getInsPlcyCurrStndInputRep": {
        "policyId": "01t000000000000001",
        "claimId": null,
        "policyParticipantId": null,
        "policyAssetId": null,
        "policyCoverageId": null,
        "claimCoverageId": null,
        "options": {
          "viewOption": "showAllPolicyCoverages",
          "shouldIncludePendingAmount": true
        }
      }
    }
  ]
}
```

```
[
  {
    "actionName": "getInsPolicyCurrentStandings",
    "errors": null,
    "invocationId": null,
    "isSuccess": true,
    "outcome": null,
    "outputValues": {
      "getInsPlcyCurrStndOutputRep": [
        {
          "iplStandingCalcOutputNodes": [
            {
              "amounts": {
                "initialAmount": 500,
                "pendingAmount": 25,
                "predictedRemainingAmount": 325,
                "remainingAmount": 350,
                "totalUsedAmount": 150
              },
              "coverageInfo": {
                "claimCoverageId": "1TDSG0000007HU84AM",
                "claimId": "0cYSG000000UYlq2AG",
                "policyAssetId": "0cYSG000000UYzt2XY",
                "policyCoverageId": "0cYSG000000UYlq2AG",
                "policyParticipantId": "sdfbdsf976sff",
                "subCoverageName": "auto-parts"
              },
              "limitAttributes": {
                "applicableAction": [
                  "PaymentAttempted"
                ],
                "durationType": "PolicyTerm",
                "category": "LimitCurrency",
                "policyLimitStandingKey": "PolicyCover LimitCurrency"
              },
              "mappedScopes": {
                "parentMappedScopeId": "a0MS70000004oVfIAI",
                "prodtAttrMappedScopeId": "a0MS70000004oVgIAI"
              },
              "values": {
                "initialValue": 10000,
                "pendingValue": 500,
                "predictedRemainingValue": 8000,
                "remainingValue": 8500,
                "totalUsedValue": 1500
              }
            }
          ]
        }
      ]
    },
    "sortOrder": -1,
    "version": 1
  }
]
```

## Related Topics

- ConnectApi.GetInsPlcyCurrStndInputRep (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_get_ins_plcy_curr_stnd_input_re.htm)
- ConnectApi.GetInsPlcyCurrStndOutputRep (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_output_get_ins_plcy_curr_stnd_output_re.htm)
