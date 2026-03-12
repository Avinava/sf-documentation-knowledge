---
title: "Document Process Output"
domain: omnistudio
topic: document-process-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:50.068Z
estimatedTokens: 290
keywords: [Document, Process, Output, representation, document, process, creation, update, request.]
---

# Document Process Output

> Output representation of the document process creation or update
      request.

# Document Process Output

Output representation of the document process creation or update request.

Response body example for POST

```

```

Response body example for PATCH

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| code | String | The code returned by the create or update API request. | Small, 55.0 | 55.0 |
| conflictFieldList | Document Conflict Field List | The list of fields in the target object that have conflicts. | Small, 55.0 | 55.0 |
| isSuccess | Boolean | Indicates whether the create or update request is successful (true) or not (false). | Small, 55.0 | 55.0 |
| message | String | The message of the create or update API request. | Small, 55.0 | 55.0 |
| objectFieldList | Object Field List | The list of fields that are created or updated in the target object record. | Small, 55.0 | 55.0 |
| ocrDocumentScan​ResultIdList | OCR Document Scan Result List | The list of the OCR document scan result record IDs. | Small, 55.0 | 55.0 |
| parentId | String | The ID of the target object in which the record is created or updated. | Small, 55.0 | 55.0 |

## Code Examples

```
{
  "isSuccess": true,
  "message": "Account record was created.",
  "objectFieldList": {
    "objectFieldList": [
      {
        "fieldName": "Name",
        "fieldValue": "Robert Weber"
      },
      {
        "fieldName": "AccountNumber",
        "fieldValue": "1962550079"
      }
    ]
  },
  "ocrDocumentScanResultIdList": {
    "ocrDocumentScanResultIdList": [
      {
        "resultId": "0ixxx00000002t3AAA"
      }
    ]
  },
  "parentId": "001xx000003GeGFAA0"
}
```

```
{
  "isSuccess": true,
  "message": "Account record was updated.",
  "objectFieldList": {
    "objectFieldList": [
      {
        "fieldName": "Id",
        "fieldValue": "001xx000003GeGFAA0"
      },
      {
        "fieldName": "Name",
        "fieldValue": "Robert Weber"
      },
      {
        "fieldName": "AccountNumber",
        "fieldValue": "1962550079"
      }
    ]
  },
  "ocrDocumentScanResultIdList": {
    "ocrDocumentScanResultIdList": [
      {
        "resultId": "0ixxx00000002t3AAA"
      }
    ]
  },
  "parentId": "001xx000003GeGFAA0"
}
```

## Related Topics

- Document Conflict Field List (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_document_conflict_field_list.htm)
- Object Field List (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_object_field_list.htm)
- OCR
                  Document Scan Result List (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_ocr_document_scan_result_id_list.htm)
- Document Conflict Field List (atlas.en-us.industries_reference.meta/industries_reference/intelligent_document_reader_connect_responses_document_conflict_field_list.htm)
- Object Field List (atlas.en-us.industries_reference.meta/industries_reference/intelligent_document_reader_connect_responses_object_field_list.htm)
- OCR Document Scan Result List (atlas.en-us.industries_reference.meta/industries_reference/intelligent_document_reader_connect_responses_ocr_document_scan_resut_id.htm)
