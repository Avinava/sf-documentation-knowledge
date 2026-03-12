---
title: "OCR Fields Mapping (GET)"
domain: psc-api
topic: ocr-fields-mapping-get
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:31.668Z
estimatedTokens: 199
keywords: [OCR, Mapping, Retrieve, keys, extracted, document, respect, template]
---

# OCR Fields Mapping (GET)

> Retrieve mapping between the values of the keys extracted from the
   document with respect to an OCR template.

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

[Form Reader Map Output](atlas.en-us.psc_api.meta/psc_api/intelligent_document_reader_connect_responses_document_reader_map_output.htm "Output representation of the mappings of the extracted text.")

## Code Examples

```
/connect/form-reader/contentDocuments/${contentDocumentId}/ocrTemplates/${ocrTemplateId}/targetObjectFieldMappings
```

```
https://yourInstance.salesforce.com/services/data/vXX.X/connect/form-reader/
contentDocuments/069RM0000001ex5YAA/ocrTemplates/48tRM0000004Ck9YAE/targetObjectFieldMappings
```

## Related Topics

- Form Reader Map Output (atlas.en-us.psc_api.meta/psc_api/intelligent_document_reader_connect_responses_document_reader_map_output.htm)
