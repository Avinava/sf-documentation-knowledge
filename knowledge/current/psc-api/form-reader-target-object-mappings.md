---
title: "Form Reader Target Object Mappings"
domain: psc-api
topic: form-reader-target-object-mappings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:31.708Z
estimatedTokens: 170
keywords: [Form, Reader, Target, Mappings, Output, representation, text, extracted, document, Salesforce]
---

# Form Reader Target Object Mappings

> Output representation of the mappings between the text extracted by
   the document reader and the Salesforce object.

# Form Reader Target Object Mappings

Output representation of the mappings between the text extracted by the document reader and the Salesforce object.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| formReaderObject​FieldMapping | Form Reader Object Field Mapping[] | List of mappings between the extracted text values and the fields of the Salesforce object. | Small, 55.0 | 55.0 |
| targetObjectName | String | Name of the target object to which mappings are done. | Small, 55.0 | 55.0 |
| targetObject​RecordType | String | Developer name of the record type of the target object. | Small, 57.0 | 57.0 |

## Related Topics

- Form Reader Object Field Mapping (atlas.en-us.psc_api.meta/psc_api/intelligent_document_reader_connect_responses_document_reader_object_field_mapping.htm)
