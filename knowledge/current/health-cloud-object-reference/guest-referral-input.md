---
title: "Guest Referral Input"
domain: health-cloud-object-reference
topic: guest-referral-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:33.080Z
estimatedTokens: 413
keywords: [Guest, Referral, Input, representation, patient, record, user’s]
---

# Guest Referral Input

> Input representation of the request to create a patient referral record based on a guest
    user’s input.

# Guest Referral Input

Input representation of the request to create a patient referral record based on a guest user’s input.

JSON example

Here’s an example request to create a patient referral from the OOTB web form filled by a guest user.

```

```

Here’s an example request to create a patient referral with the provided performers and requesters in the OOTB guest web form.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| captchaToken | Captcha Token Input | Google captcha verification token.Because the referral information comes from a web form, this API expects a captcha token for security reasons. The guest referral API calls the Google API to verify the provided captcha.A Google captcha token is valid only for 2 minutes. | Required | 60.0 |
| patient | Record Fields Input[] | Account details of the patient being referred. | Required | 60.0 |
| performer | Record Fields Input[] | List of healthcare providers who perform the service.You can provide a maximum of 5 provider IDs in a request. | Optional | 60.0 |
| referral | Record Fields Input[] | Referral information. | Required | 60.0 |
| referralDetails | Referral Detail Input[] | Patient details, such as, insurance, and health condition. | Optional | 60.0 |
| referralNotes | String | Referral notes. | Optional | 60.0 |
| requester | Record Fields Input[] | Information about the provider requesting the service. A requester can be an Account, Asset, Healthcare Provider, or a CareRegisteredDevice object.If the requester is new, provide information to create an account. | Optional | 60.0 |

## Code Examples

```
{
   "captchaToken":{
      "type":"ReCaptcha",
      "token":"09APYnBZUChiG3s985dvsz9eHvoAMIoa6lB0qeDvL-pZjNvZ3Qg9HgZVRo4rAxebgl_7H1ZqavwGwecshDuL0K1K9rfv0eI_dn7pqyGA",
      "siteKeyDeveloperName":"GoogleSiteKey"
   },
   "patient":{
      "fields":{
         "FirstName":"Charles",
         "LastName":"Green",
         "Phone":"8012345678"
      }
   },
   "referralDetails":[
      {
         "detailType":"Insurance",
         "detailRecordType":"Member Plan",
         "fields":{
            "Name":"Aetna PPO",
            "MemberNumber":"2345678"
         }
      },
      {
         "detailType":"Based On",
         "detailRecordType":"Health Condition",
         "fields":{
            "Condition Status":"Condition",
            "Diagnostic Status":"Status"
         }
      }
   ],
   "referralNotes":"This is an urgent request",
   "referral":{
      "fields":{
         "PatientInstruction":"Need Appointment ASAP.",
         "Priority":"Urgent"
      }
   }
}
```

```
{
   "captchaToken": {
        "type": "ReCaptcha",
        "token": "09APYnBZUChiG3s985dvsz9eHvoAMIoa6lB0qeDvL-pZjNvZ3Qg9HgZVRo4rAxebgl_7H1ZqavwGwecshDuL0K1K9rfv0eI_dn7pqyGA",
        "siteKeyDeveloperName": "GoogleSiteKey"
    },
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

- Captcha Token
                        Input (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_captcha_token_input.htm)
- Record Fields
                        Input (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_record_fields_input.htm)
- Referral Detail
                        Input (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/connect_requests_referral_detail_input.htm)
