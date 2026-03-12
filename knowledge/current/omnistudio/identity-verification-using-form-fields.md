---
title: "Identity Verification Using Form Fields"
domain: omnistudio
topic: identity-verification-using-form-fields
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:48.247Z
estimatedTokens: 249
keywords: [Identity, Verification, Form, Verify, representative, customer, inputs, submitted]
---

# Identity Verification Using Form Fields

> Verify the identity of a representative or customer by using the
      inputs submitted through form fields.

# Identity Verification Using Form Fields

Verify the identity of a representative or customer by using the inputs submitted through form fields.

Resource

```

```

Resource Example

```

```

Available version

58.0

Requires Chatter

No

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| developerName | String | Developer name of the identity verification process detail. | Required | 58.0 |  |
| formVerificationFieldList | Identity Verf Form Field Input[] | Details of the required and optional verification fields and values. | Required | 58.0 |
| selectedRecordId | String | Record ID of the selected customer or representative. | Required | 58.0 |

Response body for POST

[Form Verification](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_form_verification.htm "Output representation of form verification responses.")

## Code Examples

```
connect/identity-verification/input-verification
```

```
https://yourInstance.salesforce.com/services/data/v66.0connect/identity-verification/input-verification
```

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

## Related Topics

- Identity Verf Form Field Input[] (atlas.en-us.industries_reference.meta/industries_reference/connect_requests_form_verification_field_input.htm)
- Form
              Verification (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_form_verification.htm)
