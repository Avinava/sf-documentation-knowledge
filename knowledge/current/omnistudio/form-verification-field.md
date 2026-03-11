---
title: "Form Verification Field"
domain: omnistudio
topic: form-verification-field
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:08.313Z
keywords: [Form, Verification, Field]
---

# Form Verification Field

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