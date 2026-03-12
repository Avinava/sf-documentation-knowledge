---
title: "Form Verification Display Record Details"
domain: omnistudio
topic: form-verification-display-record-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:48.960Z
estimatedTokens: 135
keywords: [Form, Verification, Display, Record, Output, representation]
---

# Form Verification Display Record Details

> Output representation of form verification display record details
      response.

# Form Verification Display Record Details

Output representation of form verification display record details response.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| displayRecordId | String | ID of the record that's shown to the user after identity verification is successful. | Small, 58.0 | 58.0 |
| displayRecordName | String | Name of the record that's shown to the user after identity verification is successful. | Small, 58.0 | 58.0 |

## Code Examples

```
“displayRecordDetails”: {
	“displayRecordId”: “001axxxxxxx”,
	“displayRecordName”: “SomeReferenceRecord”
  }
```
