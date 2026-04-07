---
title: "UserMap"
domain: mc-apis
topic: usermap
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:21.032Z
estimatedTokens: 147
keywords: [UserMap]
---

# UserMap

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| AdditionalData | APIProperty[] | Reserved for future use. |
| ETAccountUser | AccountUser | Specifies the Marketing Cloud account user mapped to an external user. |
| Name | xsd:string | Name of the object or property. |
| Value | xsd:string | Defines value to be used in filter or other object. In filters, the BETWEEN operator requires two Values. IN can handle multiple Values. All other operators require only one Value. isNull and isNotNull ignores any supplied values and don't return an error. |
