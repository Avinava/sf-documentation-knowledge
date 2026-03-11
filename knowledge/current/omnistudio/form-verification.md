---
title: "Form Verification"
domain: omnistudio
topic: form-verification
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:09.519Z
keywords: [Form, Verification]
---

# Form Verification

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