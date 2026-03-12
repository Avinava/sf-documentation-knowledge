---
title: "Document Process Input"
domain: psc-api
topic: document-process-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:31.626Z
estimatedTokens: 447
keywords: [Document, Process, Input, representation, content, received, record, Salesforce]
---

# Document Process Input

> Input representation of the content document or received document
   record to create or update a Salesforce object record.

# Document Process Input

Input representation of the content document or received document record to create or update a Salesforce object record.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additionalFields | Map<String, Object> | List of additional fields that you want to create or update in the target object and which are not present in the Intelligent Document Reader field mappings. | Optional | 55.0 |
| attachDocument | Boolean | Indicates whether to automatically create the DocumentChecklistItem (DCI) and ContentDocumentLink records to link the document to the target object (true) or not (false).Default value is false. | Optional | 55.0 |
| documentTypeId | String | ID of the document type for the document checklist item. | Optional | 55.0 |
| fieldsWithout​ConflictList | Fields Without Conflict Input[] | List of fields that must not have any conflicts for the record creation or update process. | Optional | 55.0 |
| ignoreFieldValue​Conflict | Boolean | Indicates whether to ignore conflicts in OCR (true) or not (false).Default value is false. | Optional | 55.0 |
| linkedObjectId | String | ID of the linked object record. | Optional | 55.0 |
| objectApiName | String | API name of the target object in which you want to create or update a record. | Optional | 55.0 |
| overrideConfidence​ScoreThreshold | Integer | Conflict confidence score threshold value for the extracted value.NoteThe value of this field overrides the confidence score threshold value set on the user interface. | Optional | 55.0 |
| recordTypeId | String | ID of the record type of the target object. | Optional | 55.0 |
| templateApiName | String | API name of the document template to retrieve. | Optional | 59.0 |

## Related Topics

- Fields Without Conflict Input (atlas.en-us.psc_api.meta/psc_api/intelligent_document_reader_connect_requests_fields_without_conflict.htm)
