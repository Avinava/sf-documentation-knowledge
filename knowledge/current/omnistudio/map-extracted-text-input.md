---
title: "Map Extracted Text Input"
domain: omnistudio
topic: map-extracted-text-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:47.513Z
estimatedTokens: 220
keywords: [Map, Extracted, Text, Input, representation, OCR, document, scan, result, template, mapping]
---

# Map Extracted Text Input

> Input representation of the OCR document scan result and template
   that are required for mapping.

# Map Extracted Text Input

Input representation of the OCR document scan result and template that are required for mapping.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| isExactMatch | Boolean | Indicates whether the mapping between values and target field must be returned only when the key matches in both the document and template (true) or not (false).Default value is true. | Optional | 55.0 |
| scanResultId | String | The ID of the OCR document scan result. The scan result contains the contents of a document after optical character recognition (OCR) processing. | Required | 55.0 |
| templateId | String | The ID of the OCR template. This represents the details of the mapping between a document and a Salesforce object using Intelligent Document Reader. | Required | 55.0 |

## Code Examples

```
{
   "scanResultId" : "0ixS7000000001TIAQ",
   "templateId" : "48tS70000004C9DIAU"
}
```
