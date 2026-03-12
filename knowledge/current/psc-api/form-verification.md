---
title: "Form Verification"
domain: psc-api
topic: form-verification
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:30.119Z
estimatedTokens: 146
keywords: [Form, Verification, Input, representation, requests, Output, responses]
---

# Form Verification

> Output representation of form verification responses.

# Form Verification

Output representation of form verification responses.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| developerName | String | Developer name of identity verification process detail. | Small, 58.0 | 58.0 |
| displayRecordDetails | Identity Verf Form Display Record | Name of the field that contains information about the record that's shown to the user after identity verification is successful. | Small, 58.0 | 58.0 |
| formVerificationFieldList | Identity Verf Form Field List Output | Required and optional verification fields, values, and results. | Small, 58.0 | 58.0 |
| isVerified | Boolean | Indicates whether the identity of the customer or representative is verified (true) or not (false). | Small, 58.0 | 58.0 |
| retryCount | Integer | For internal use only. | Small, 58.0 | 58.0 |
| selectedRecordId | String | Record ID of the selected customer or representative. | Small, 58.0 | 58.0 |
| status | Error Response | Status of the form verification API request. | Small, 58.0 | 58.0 |

## Code Examples

```
{
  "developerName": "SampleAccountSearch",
  "selectedRecordId": "001xx000003DGV3AAO",
  "formVerificationFieldList": {
  "formVerificationFields": [
    {
      "developerName": "SampleAccountName",
      "value": "Acme",
    },
    {
      "developerName": "SampleAccountNumber",
      "value": "123456",
      "isVerified":true
    },
    {
      "developerName": "SamplePhone",
      "value": "4158764524"
    },
    {
      "developerName": "SamplePostalCode",
      "value": "51605"
    }
  ]
  }
}
```

```
{
  "developerName": "SampleAccountSearch",
  "selectedRecordId": "001xx000003DGV3AAO",
  "isVerified": false,
  "formVerificationFieldList": {
    "formVerificationFields": [
    {
      "developerName": "SampleAccountName",
      "isVerified": true
    },
    {
      "developerName": "SampleAccountNumber",
      "isVerified": true
    },
    {
      "developerName": "SamplePhone",
      "value": "4158764524",
      "isVerified": false
    },
    {
      "developerName": "SamplePostalCode",
      "isVerified": true
    }
    ]
  },
  “displayRecordDetails”: {
	“displayRecordId”: “001axxxxxxx”,
	“displayRecordName”: “SomeReferenceRecord”
  },
 "status": {
    "code":201,
    "message": "Identity Verification is processed successfully."
  }
}
```

## Related Topics

- Identity Verf Form Field Input[] (atlas.en-us.psc_api.meta/psc_api/connect_requests_form_verification_field_input.htm)
- Identity Verf Form Display Record (atlas.en-us.psc_api.meta/psc_api/connect_responses_form_verification_display_record_details_outpu.htm)
- Identity Verf
                  Form Field List Output (atlas.en-us.psc_api.meta/psc_api/connect_responses_form_verification_field_list.htm)
