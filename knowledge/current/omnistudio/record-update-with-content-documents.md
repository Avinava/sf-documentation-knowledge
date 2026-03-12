---
title: "Record Update with Content Documents"
domain: omnistudio
topic: record-update-with-content-documents
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:50.199Z
estimatedTokens: 564
keywords: [Record, Content, Documents, Salesforce, document]
---

# Record Update with Content Documents

> Update an existing record in a Salesforce object using a document
   based on a content document record.

# Record Update with Content Documents

Update an existing record in a Salesforce object using a document based on a content document record.

Resource

```

```

Resource Example

```

```

Available version

55.0

Requires Chatter

No

HTTP methods

PATCH

Request body for PATCH

Root XML tag

<DocumentProcessInput>

JSON example for PATCH

```

```

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

Response body for PATCH

[Document Process Output](atlas.en-us.industries_reference.meta/industries_reference/intelligent_document_reader_connect_responses_document_process_output.htm "Output representation of the document process creation or update request.")

## Code Examples

```
/connect/form-reader/contentDocuments/${contentDocumentId}/record/${targetRecordId}
```

```
https://yourInstance.salesforce.com/services/data/vXX.X/connect​/form-reader/contentDocuments/${contentDocumentId}/record/${targetRecordId}
```

```
{
  "documentTypeId": "0dexx0000000001",
  "overrideConfidenceScoreThreshold": 100,
  "ignoreFieldValueConflict": false,
  "attachDocument": true,
  "fieldsWithoutConflictList": {
    "noConflictFields": [
      {
        "field": "name"
      },
      {
        "field": "accountnumber"
      }
    ]
  }
  "templateApiName": "sample_template"
}
```

## Related Topics

- Fields Without Conflict Input (atlas.en-us.industries_reference.meta/industries_reference/intelligent_document_reader_connect_requests_fields_without_conflict.htm)
- Document Process
              Output (atlas.en-us.industries_reference.meta/industries_reference/intelligent_document_reader_connect_responses_document_process_output.htm)
