---
title: "Renew Insurance Policies Action"
domain: insurance-developer-guide
topic: renew-insurance-policies-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:38.701Z
estimatedTokens: 216
keywords: [Renew, Insurance, Policies, Action, Process, renewal, bulk, REST, HTTP, Inputs, Outputs]
---

# Renew Insurance Policies Action

> Process the renewal of insurance policies in bulk.

# Renew Insurance Policies Action

Process the renewal of insurance policies in bulk.

This action is available in API version 64.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/renewInsurancePolicies

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearertoken

## Inputs

| Input | Details |
| --- | --- |
| renewInsurance​Policies​IAInputRep | TypeApex-definedDescriptionRequired. A collection of Apex input records that contain details of the insurance policies to be renewed. See ConnectApi.RenewInsurancePoliciesIAInputRep for the list of input parameters. |

## Outputs

No output representation as it's an async invocable action, which publishes the request to a queue for processing.

## Example

POST

This example shows a sample request for the Renew Insurance Policies action.

```

```

## Code Examples

```
{
    "inputs": [
        {
            "RenewInsurancePoliciesIAInputRep": {
                "policyId": "0YTIU000000xUi14AE",
                "jobIdentifier": "testJob368",
                "executeConfigurationRules": true,
                "executeQualificationRules": true,
                "issueQuote": false,
                "sameTenure": true
                "priceBookId": "01sxx0000005pyfAAA",
                "productSellingModel": "One Time",
                "flowAPINameWithNamespace":"abc",
                "fieldSetIds" : {
                   "policyFieldSetId":"0YTIU000000xUi14AE",
                   "assetFieldSetId" : "0YTIU000000xUi14AE",
                   "participantFieldSetId" : "0YTIU000000xUi14AE",
                   "coverageFieldSetId" : "0YTIU000000xUi14AE",
                }
            }
        }
    ]
}
```

## Related Topics

- ConnectApi.RenewInsurancePoliciesIAInputRep (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/apex_connectapi_input_renew_ins_policy_async_i_a_input_re.htm)
