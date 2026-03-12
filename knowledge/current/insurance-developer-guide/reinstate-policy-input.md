---
title: "Reinstate Policy Input"
domain: insurance-developer-guide
topic: reinstate-policy-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.000Z
estimatedTokens: 311
keywords: [Reinstate, Policy, Input, representation, reinstating, insurance]
---

# Reinstate Policy Input

> Input representation for reinstating an insurance policy.

# Reinstate Policy Input

Input representation for reinstating an insurance policy.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additionalFields | Additional Fields Map Value[] | JSON structure that’s used to add custom or standard fields to the InsurancePolicy, InsurancePolicyAsset, InsurancePolicyCoverage, and InsurancePolicyParticipant objects. The values for additionalFields take precedence over the context or the insurancePolicy parameter. Address and Geolocation field types are not supported as additional fields. | Optional | 65.0 |
| effectiveDate | String | Date from the policy reinstatement becomes effective. This date must be within the policy term.For example, if the policy term is 2025-01-01 to 2025-12-31, and you set effectiveDate to 2025-03-01, the reinstatement applies starting March 1, 2025. | Optional | 65.0 |
| insurancePolicy | Insurance Policy Input | Details of the insurance policy. It contains fields and values from the Insurance Policy object. | Optional | 65.0 |
| transactionRecord | Insurance Policy Transaction Input | JSON structure that's used to override transaction information. | Optional | 65.0 |

## Code Examples

```
{
  "effectiveDate": "2025-09-15",
  "insurancePolicy": {
    "policyName": "Reinstate Auto Policy"
  },
  "transactionRecord": {
    "name": "Reinstatement Transaction"
  },
  "additionalFields": {
    "additionalFieldsList": [
      {
        "additionalFieldsMapValue": {
          "ReinstatementReason": "Payment Received"
        }
      }
    ]
  }
}
```

## Related Topics

- Additional Fields Map Value[] (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_additional_fields_map_value.htm)
- Insurance Policy Input (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_insurance_policy_input.htm)
- Insurance Policy Transaction Input (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_insurance_policy_transaction_input.htm)
