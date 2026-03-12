---
title: "Build Identity Verification Context Input"
domain: health-cloud-object-reference
topic: build-identity-verification-context-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:32.774Z
estimatedTokens: 117
keywords: [Build, Identity, Verification, Context, Input, representation, resource]
---

# Build Identity Verification Context Input

> Input representation of the Build Identity Verification Context
      resource.

# Build Identity Verification Context Input

Input representation of the Build Identity Verification Context resource.

Root XML tag

<buildVerificationContextInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| objectName | String | The API name of the caller’s object. | Optional | 54.0 |
| selectedRecordId | String | The record ID of the caller. | Optional | 54.0 |

## Code Examples

```
{
   "objectName":"Account",
   "selectedRecordId":"001xx000003GZeFAAW"
}
```
