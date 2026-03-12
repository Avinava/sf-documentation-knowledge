---
title: "OCR Templates (GET)"
domain: omnistudio
topic: ocr-templates-get
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:48.137Z
estimatedTokens: 236
keywords: [OCR, Templates, Retrieve, active]
---

# OCR Templates (GET)

> Retrieve a list of active OCR templates.

# OCR Templates (GET)

Retrieve a list of active OCR templates. You can also fetch the OCR templates by document type and target object that are associated with the OCR templates.

Resource

```

```

Examples

```

```

```

```

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
| documentTypeId | String | ID of the document type associated with the OCR template. | Optional | 55.0 |
| targetObjects | String | List of the target object names associated with the OCR template. You can also specify a target object with record type. | Optional | 55.0 |

Response body for GET

[Template Collection Output](atlas.en-us.industries_reference.meta/industries_reference/intelligent_document_reader_connect_responses_template_collection_output.htm "Output representation of a collection of OCR templates.")

## Code Examples

```
/connect/form-reader/ocrTemplates
```

```
https://yourInstance.salesforce.com/services/data/vXX.X/connect
/form-reader/ocrTemplates?documentTypeId=OdeRM00000000Dj
```

```
https://yourInstance.salesforce.com/services/data/vXX.X/connect
/form-reader/ocrTemplates?targetObjects=Account,BusinessMilestone
```

```
https://yourInstance.salesforce.com/services/data/vXX.X/connect
/form-reader/ocrTemplates?documentTypeId=OdeRM00000000Dj&targetObjects=Account.AccountRecordType1
```

## Related Topics

- Template Collection Output (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_template_collection_output.htm)
- Template Collection Output (atlas.en-us.industries_reference.meta/industries_reference/intelligent_document_reader_connect_responses_template_collection_output.htm)
