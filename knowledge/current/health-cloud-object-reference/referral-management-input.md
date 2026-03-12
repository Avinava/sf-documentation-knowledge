---
title: "Referral Management Input"
domain: health-cloud-object-reference
topic: referral-management-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:33.158Z
estimatedTokens: 340
keywords: [Referral, Management, Input, representation, patient]
---

# Referral Management Input

> Input representation of the request to create a patient
        referral.

# Referral Management Input

Input representation of the request to create a patient referral.

JSON example

Here’s an example request to create an existing patient referral.

```

```

Here’s an example request to create a new patient referral.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| patient | Record Fields Input[] | Account details of the patient being referred. | Required | 59.0 |
| performers | Record Fields Input[] | List of healthcare providers who perform the service.You can provide a maximum of 5 provider IDs in a request. | Optional | 59.0 |
| referral | Record Fields Input[] | Referral information. | Required | 59.0 |
| referralDetails | Referral Detail Input[] | Patient details, such as, insurance, and health condition. | Optional | 59.0 |
| referralNotes | String | Referral notes. | Optional | 59.0 |
| requester | Record Fields Input[] | Information about the provider requesting the service. A requester can be an Account, Asset, Healthcare Provider, or a CareRegisteredDevice object.If the requester is new, provide information to create an account. | Optional | 59.0 |
| shouldUseHighConfidenceMatch | Boolean | Indicates whether to match a duplicate record that has the highest matching confidence (true) or not (false). | Optional | 59.0 |

## Code Examples

```
{
  "patient": {
    "id": "005S7000001xLk1IAE"
  },
  "referralDetails": [
    {
      "detailType": "Insurance",
      "detailRecordType": "Member Plan",
      "fields": {
        "Name": "Aetna PPO",
        "MemberNumber": "2345678"
      }
    },
    {
      "detailType": "Insurance",
      "detailRecordType": "Member Plan",
      "detailRecordId": "0SqRM0000004F2z0AE"
    }
  ],
  "requester": {
    "id": "0cmS70000004CAuIAM"
  },
  "referralNotes": "This is an urgent request",
  "performers": [
    {
      "id": "0cmRM0000004nAgYAI"
    },
    {
      "id": "0cmRM0000004nAgDZc"
    }
  ],
  "referral": {
    "fields": {
      "PatientInstruction": "Need Appointment ASAP.",
      "Priority": "Urgent"
    }
  },
  "shouldUseHighConfidenceMatch": true
}
```

```
{
  "patient": {
    "fields": {
      "FirstName": "Joe",
      "LastName": "Clark",
      "Phone": "801XXXXX89"
    }
  },
  "referralDetails": [
    {
      "detailType": "Insurance",
      "detailRecordType": "Member Plan",
      "fields": {
        "Name": "Aetna PPO",
        "MemberNumber": "2345678"
      }
    },
    {
      "detailType": "Insurance",
      "detailRecordType": "Member Plan",
      "detailRecordId": "0SqRM0000004F2z0AE"
    },
    {
      "detailType": "Body Site",
      "detailRecordType": "Health Condition",
      "detailCodeId": "0hsRM000000043aYAA"
    },
    {
      "detailType": "Reason Reference",
      "detailRecordId": "0j4RM0000004MunYAE"
    }
  ],
  "requester": {
    "id": "0cmRM0000004nAgYAI"
  },
  "performers": [
    {
      "id": "0cmRM0000000l2JYAQ"
    },
    {
      "id": "0cmRM0000000tnoYAA"
    }
  ],
  "referralNotes": "This is an urgent request",
  "referral": {
    "fields": {
      "Priority": "Routine",
      "Status": "Draft",
      "Type": "Plan"
    }
  }
}
```

## Related Topics

- Record Fields Input (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_record_fields_input.htm)
- Referral Detail Input (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_referral_detail_input.htm)
