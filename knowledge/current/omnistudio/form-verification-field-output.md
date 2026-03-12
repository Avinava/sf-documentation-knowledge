---
title: "Form Verification Field Output"
domain: omnistudio
topic: form-verification-field-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:50.277Z
estimatedTokens: 161
keywords: [Form, Verification, Field, Output, representation, form, verification, field, responses.]
---

# Form Verification Field Output

> Output representation of form verification field
    responses.

# Form Verification Field Output

Output representation of form verification field responses.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| developerName | String | Developer name of the identity verification process field. | Small, 58.0 | 58.0 |
| isVerified | Boolean | Indicates whether the input that isn't submitted through a form field is verified (true) or not (false). | Small, 58.0 | 58.0 |
| value | String | Input value of the field. The field values that fail verification are included in the representation. | Small, 58.0 | 58.0 |

## Code Examples

```
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
```
