---
title: "Template Detail"
domain: omnistudio
topic: template-detail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:49.454Z
estimatedTokens: 269
keywords: [Template, Detail, Output, representation, OCR]
---

# Template Detail

> Output representation of details of the OCR template.

# Template Detail

Output representation of details of the OCR template.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| documentTypeId | String | ID of the document type associated with the OCR template. | Small, 55.0 | 55.0 |
| name | String | Name of the OCR template. | Small, 55.0 | 55.0 |
| ocrSampleDocuments | OCR Sample Document[] | List of OCR sample documents associated with the OCR template.NoteThis is a sample document or a document type that's used as a reference while extracting and mapping information from a customer form. | Small, 55.0 | 55.0 |
| ocrTargetObjectFieldMappings | OCR Target Object Field Mapping[] | List of OCR target object field mappings in the OCR template.NoteSpecifies how information from a form field is mapped to fields in an object. | Small, 55.0 | 55.0 |
| ocrTargetObjects | OCR Target Object[] | List of OCR target objects associated with the OCR template. | Small, 55.0 | 55.0 |
| ocrTemplateId | String | ID of the OCR template. | Small, 55.0 | 55.0 |

## Related Topics

- OCR Sample Document (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_ocr_sample_documen.htm)
- OCR Target Object Field Mapping (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_ocr_target_object_field_mappin.htm)
- OCR Target Object (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_ocr_target_objec.htm)
- OCR Sample Document (atlas.en-us.industries_reference.meta/industries_reference/intelligent_document_reader_connect_responses_ocr_sample_document.htm)
- OCR Target Object Field Mapping (atlas.en-us.industries_reference.meta/industries_reference/intelligent_document_reader_connect_responses_ocr_target_object_field_mapping.htm)
- OCR Target Object (atlas.en-us.industries_reference.meta/industries_reference/intelligent_document_reader_connect_responses_ocr_target_object.htm)
