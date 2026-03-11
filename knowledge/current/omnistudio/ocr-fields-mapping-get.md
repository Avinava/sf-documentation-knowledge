---
title: "OCR Fields Mapping (GET)"
domain: omnistudio
topic: ocr-fields-mapping-get
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:10.369Z
keywords: [OCR, Fields, Mapping, GET]
---

# OCR Fields Mapping (GET)

# OCR Fields Mapping (GET)

Retrieve mapping between the values of the keys extracted from the document with respect to an OCR template.

Resource

```

```

Example

```

```

Available version

55.0

Requires Chatter

No

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| isExactMatch | Boolean | Indicates whether the mapping between values and target field must be returned only when the key matches in both the document and template. | Optional | 55.0 |

Response body for GET

[Form Reader Map Output](atlas.en-us.industries_reference.meta/industries_reference/intelligent_document_reader_connect_responses_document_reader_map_output.htm "Output representation of the mappings of the extracted text.")