---
title: "Envelope Void Input"
domain: clm-developer-guide
topic: envelope-void-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:22.155Z
estimatedTokens: 102
keywords: [Envelope, Input]
---

# Envelope Void Input

> Input to get void envelope related details.

# Envelope Void Input

Input to get void envelope related details.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| senderEmail | String | Refers to the email of the user who initiated the voiding. | Optional | 56.0 |
| voidedReason | String | Reason for which the envelope is being voided. | Required | 56.0 |

## Code Examples

```
{
    "voidedReason": "",//required
    "senderEmail": ""
}
```
