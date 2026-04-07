---
title: "ExtractParameter"
domain: mc-apis
topic: extractparameter
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:21.795Z
estimatedTokens: 107
keywords: [ExtractParameter]
---

# ExtractParameter

# ExtractParameter

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| Name | xsd:string | Name of the object or property. |
| Value | xsd:string | Defines value to be used in filter or other object. In filters, the BETWEEN operator requires two Values. IN can handle multiple Values. All other operators require only one Value. isNull and isNotNull ignores any supplied values and don't return an error. |
