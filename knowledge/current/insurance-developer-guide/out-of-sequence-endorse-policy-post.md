---
title: "Out-of-Sequence Endorse Policy (POST)"
domain: insurance-developer-guide
topic: out-of-sequence-endorse-policy-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:40.278Z
estimatedTokens: 468
keywords: [Out-of-Sequence, Endorse, Policy, POST, endorsement, insurance]
---

# Out-of-Sequence Endorse Policy (POST)

> Create an out-of-sequence endorsement for an insurance
    policy.

# Out-of-Sequence Endorse Policy (POST)

Create an out-of-sequence endorsement for an insurance policy.

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
| policyId | String | ID of the insurance policy to create the out-of-sequence endorsement for. | Required | 65.0 |

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contextId | String | ID of the context that's used to create an endorsement policy version. | Required | 65.0 |
| effectiveDate | String | Date from which the out-of-sequence endorsement applies. This date must be within the policy term.For example, if the policy term is 2025-01-01 to 2025-12-31, and you set effectiveDate to 2025-03-01, the endorsement applies starting March 1, 2025, and the API re-rates the policy from 2025-03-01 forward. | Required | 65.0 |
| fieldSetIds | Additional Fields Field Set Input[] | Field set IDs of the additional fields that are associated with the insurance policy. | Optional | 65.0 |
| insurancePolicy | Insurance Policy Input[] | Details of the insurance policy to create the out-of-sequence endorsement for.It contains fields and values from the Insurance Policy object. | Optional | 65.0 |
| transactionRecord | Insurance Policy Transaction Input[] | JSON structure that's used to override transaction information. | Optional | 65.0 |

Response body for POST

[Out-Of-Sequence Endorse Policy](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_out_of_sequence_endorse_policy.htm "Output representation of the details for the out of sequence policy endorsement process.")

## Code Examples

```
/connect/insurance/policies/policyId/out-of-sequence-endorsement
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/insurance/policies/0YTxx0000000001GAA/out-of-sequence-endorsement
```

```
{
  "contextId": "0000000i18tq18g00291750179239892137c4250a82940e49987f6d97559b4de",
  "effectiveDate": "2025-03-05",
  "insurancePolicy": {
    "policyName": "Life Insurance",
    "policyNumber": "LI000aax8967245gj"
  },
  "fieldSetIds": {
    "policyFieldSetId": "0IXxx0000004CYqGAM",
    "assetFieldSetId": "0IXxx0000004CaSGAU",
    "participantFieldSetId": "0IXxx0000004CdgGAE",
    "coverageFieldSetId": "0IXxx0000004Cc4GAE"
  },
  "transactionRecord": {
    "name": "Custom OOSE transaction"
  }
}
```

## Related Topics

- Additional Fields Field Set Input (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_additional_fields_field_set_input.htm)
- Insurance Policy Input (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_insurance_policy_input.htm)
- Insurance Policy Transaction Input (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_insurance_policy_transaction_input.htm)
- Out-Of-Sequence Endorse Policy (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_out_of_sequence_endorse_policy.htm)
