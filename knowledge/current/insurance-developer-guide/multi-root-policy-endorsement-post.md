---
title: "Multi-Root Policy Endorsement (POST)"
domain: insurance-developer-guide
topic: multi-root-policy-endorsement-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:40.211Z
estimatedTokens: 463
keywords: [Multi-Root, Policy, Endorsement, POST, Asynchronously, endorse, insurance, along, child, policies]
---

# Multi-Root Policy Endorsement (POST)

> Asynchronously endorse a multi-root insurance policy along with its
            child policies.

# Multi-Root Policy Endorsement (POST)

Asynchronously endorse a multi-root insurance policy along with its child policies.

Resource

```

```

Resource example

```

```

Available version

66.0

HTTP methods

POST

Path parameter for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| policyId | String | ID of the policy that must be endorsed along with its associated child policies. | Required | 66.0 |

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additionalFields | Additional Fields Map Value[] | JSON structure that’s used to add custom or standard fields to the InsurancePolicy, InsurancePolicyAsset, InsurancePolicyCoverage, and InsurancePolicyParticipant objects. The values for additionalFields take precedence over the context or the insurancePolicy JSON. This is applicable only for the endorsed policy version. Address and Geolocation field types are not supported as additional fields. | Optional | 63.0 |
| contextId | String | Context ID of the quote that’s used for endorsement. | Required | 63.0 |
| effectiveDate | String | Date from when the endorsed policy version is effective. | Required | 63.0 |
| insurancePolicy | Insurance Policy Input[] | JSON structure that overrides the name and policy number of the endorsed policy version. | Optional | 63.0 |
| transactionRecord | Insurance Policy Transaction Input[] | JSON structure that overrides the transaction information. | Optional | 63.0 |

Response body for POST

[Multi-Root Policy Asynchronous Response](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_policy_async.htm "Details of the multi-root policy that's processed asynchronously.")

## Code Examples

```
/connect/insurance/policies/policyId/multi-root/endorse
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/insurance/policies/0YTxx00000000WHGAY/multi-root/endorse
```

```
{
  "contextId": "54920265842e1b61496c38b7e2202f6f0aff8123ad2f19fe17ac68f7fc1c60b3",
  "effectiveDate": "2024-01-01",
  "insurancePolicy": {
    "policyName": "p2_endorse_name",
    "policyNumber": "p2_endorse_number"
  },
  "transactionRecord": {
    "name": "New Endorsement"
  },
  "additionalFields": {
    "additionalFieldsList": [
      {
        "additionalFieldsMapValue": {
          "instanceKey": "autoRoot",
          "fields": {
            "Checkbox__c": "true",
            "Currency__c": 123456,
            "Date__c": "2024-11-30",
            "DateTime__c": "2024-12-31T01:34:00.000Z",
            "Email__c": "testuser@sf.com"
          }
        }
      },
      {
        "additionalFieldsMapValue": {
          "instanceKey": "autoDriver",
          "fields": {
            "TextEncr__c": "233345675676",
            "Url__c": "https://thisistest.com",
            "Time__c": "12:05:00.000Z"
          }
        }
      }
    ]
  }
}
```

## Related Topics

- Additional Fields Map Value (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_additional_fields_map_value.htm)
- Insurance Policy Input (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_insurance_policy_input.htm)
- Insurance Policy Transaction Input (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_requests_insurance_policy_transaction_input.htm)
- Multi-Root Policy Asynchronous Response (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_policy_async.htm)
