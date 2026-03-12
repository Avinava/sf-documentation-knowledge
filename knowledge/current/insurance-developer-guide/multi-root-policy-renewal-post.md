---
title: "Multi-Root Policy Renewal (POST)"
domain: insurance-developer-guide
topic: multi-root-policy-renewal-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:40.216Z
estimatedTokens: 453
keywords: [Multi-Root, Policy, Renewal, POST, Asynchronously, renew, insurance, renewed, records, parent, associated, child, policies]
---

# Multi-Root Policy Renewal (POST)

> Asynchronously renew a multi-root insurance policy, create renewed
      records for the parent policy and the associated child policies.

# Multi-Root Policy Renewal (POST)

Asynchronously renew a multi-root insurance policy, create renewed records for the parent policy and the associated child policies.

Resource

```

```

Resource example

```

```

Path parameter for POST

| Parameter Name | Type | Description | Required or Optional |
| --- | --- | --- | --- |
| policyId | String | ID of the policy that must be renewed along with its associated child policies. | Required |

Available version

66.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additionalFields | Additional Fields Map Value[] | JSON structure that’s used to add custom or standard fields to the InsurancePolicy, InsurancePolicyAsset, InsurancePolicyCoverage, and InsurancePolicyParticipant objects. The values for additionalFields take precedence over the context or the insurancePolicy JSON. This is applicable only for the endorsed policy version. Address and Geolocation field types are not supported as additional fields. | Optional | 63.0 |
| contextId | String | Priced context ID of the policy or quote that's used to renew the policy. | Required | 63.0 |
| insurancePolicy | Insurance Policy Input[] | JSON structure that’s used to renew the policy. It contains fields and values from the Insurance Policy object. | Optional | 63.0 |
| transactionRecord | Insurance Policy Transaction Input[] | JSON structure that's used to override the transaction information. | Optional | 63.0 |

Response body for POST

[Multi-Root Policy Asynchronous Response](atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_policy_async.htm "Details of the multi-root policy that's processed asynchronously.")

## Code Examples

```
/connect/insurance/policies/policyId/multi-root/renew
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/insurance/policies/0YTxx00000000WHGAY/multi-root/renew
```

```
{
 "contextId": "54920265842e1b61496c38b7e2202f6f0aff8123ad2f19fe17ac68f7fc1c60b3",
 "insurancePolicy": {
   "policyName": "Demo Test Policy 9",
   "policyNumber": "test renew policy",
   "effectiveFromDate": "2025-03-15",
   "effectiveToDate": "2026-03-15"
 },
 "transactionRecord":{
   "name": "Renew Payment"
 },
"additionalFields":{
      "additionalFieldsList":[
         {
            "additionalFieldsMapValue":{
               "instanceKey":"autoRoot",
               "fields":{
                  "Checkbox__c":"true",
                  "Currency__c":123456,
                  "Date__c":"2024-11-30",
                  "DateTime__c":"2024-12-31T01:34:00.000Z",
                  "Email__c":"testuser@sf.com"
               }
            }
         }

  {
           "additionalFieldsMapValue":{
             "instanceKey":"autoDriver",
              "fields":{
                 "TextEncr__c":"233345675676",
                 "Url__c":"https://thisistest.com",
                  "Time__c":"12:05:00.000Z"
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
- Multi-Root Policy
                                                  Asynchronous Response (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_policy_async.htm)
