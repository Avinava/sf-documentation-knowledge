---
title: "Form Verification Field"
domain: psc-api
topic: form-verification-field
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:30.116Z
estimatedTokens: 144
keywords: [Form, Verification, Input, representation, requests]
---

# Form Verification Field

> Input representation of form verification field
    requests.

# Form Verification Field

Input representation of form verification field requests.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| developerName | String | Developer name of the identity verification process field. | Required | 58.0 |
| isVerified | Boolean | Indicates whether the input that isn't submitted through a form field is verified (true) or not (false). The default value is false. | Optional | 58.0 |
| value | String | Input value of the field. | Required | 58.0 |

## Code Examples

```
{
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
```
