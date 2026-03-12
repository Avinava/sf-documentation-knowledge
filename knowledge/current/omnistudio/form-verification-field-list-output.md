---
title: "Form Verification Field List Output"
domain: omnistudio
topic: form-verification-field-list-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:50.280Z
estimatedTokens: 106
keywords: [Form, Verification, Field, List, Output, representation, form, verification, field, list, responses.]
---

# Form Verification Field List Output

> Output representation of form verification field list
    responses.

# Form Verification Field List Output

Output representation of form verification field list responses.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| formVerificationFields | Identity Verf Form Field Output[] | Details, including verification results, of the required and optional verification fields. | Small, 58.0 | 58.0 |

## Code Examples

```
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
```

## Related Topics

- Identity Verf Form Field
                  Output[] (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_form_verification_field.htm)
