---
title: "Visitor Attributes Input"
domain: life-sciences-dev-guide
topic: visitor-attributes-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:42.456Z
estimatedTokens: 135
keywords: [Visitor, Attributes, Input, representation]
---

# Visitor Attributes Input

> Input representation of the visitor attributes.

# Visitor Attributes Input

Input representation of the visitor attributes. For example, for a medical device visit, visitor can be the sales representative and the clinical specialist.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| primary | Boolean | Indicates whether a service resource is the primary resource (true) or not (false) for a visit. | Required | 55.0 |
| user | String | ID of the assigned service resource. | Required | 55.0 |

## Code Examples

```
"visitor": [
  {
    "user": "005xx000001X7fNAAS",
    "primaryVisitor": true
  }
]
```
