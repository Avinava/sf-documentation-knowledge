---
title: "Template Input"
domain: clm-developer-guide
topic: template-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:22.187Z
estimatedTokens: 193
keywords: [Template, Input, representation, contract, document]
---

# Template Input

> Input representation to get contract document related
            details.

# Template Input

Input representation to get contract document related details.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| external​Review​Type | String | Type of external review. Possible values are:OnlineMicrosoft365OfflineMicrosoftWord | Optional | 60.0 |
| isExternal​Review​Import | Boolean | Indicates whether the checkout is for an external review import (true) or not (false). | Optional | 59.0 |
| pdf​Document​Id | String | ID for Contract PDF document. | Optional | 56.0 |
| templateId | String | Template ID with key prefix 2dt used to generate document. | Required | 56.0 |
| word​Document​Id | String | ID for Contract word document. | Optional | 56.0 |

## Code Examples

```
{
  "templateId": "2dtxx000000004rAAA",
  "isExternalReviewImport": false,
  "externalReviewType": "OnlineMicrosoft365"
}
```
