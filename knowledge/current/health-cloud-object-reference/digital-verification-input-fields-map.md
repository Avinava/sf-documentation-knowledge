---
title: "Digital Verification Input Fields Map"
domain: health-cloud-object-reference
topic: digital-verification-input-fields-map
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:32.933Z
estimatedTokens: 115
keywords: [Digital, Verification, Input, Map, representation, key-value, pairs, containing, updated]
---

# Digital Verification Input Fields Map

> Input representation of the key-value pairs containing the fields to be updated for the
    digital verification.

# Digital Verification Input Fields Map

Input representation of the key-value pairs containing the fields to be updated for the digital verification.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| digital​Verification​InputFields​Map | Map<String, String> | Specifies the map holding the digital verification record details to be modified. | Required | 60.0 |

## Code Examples

```
{
  "digitalVerificationInputFieldsMap": {
    "VerificationStatusCategory": "Completed",
    "Comment": "done successfully",
    "VerificationSite": "USA"
  }
}
```
