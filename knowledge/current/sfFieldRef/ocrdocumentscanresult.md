---
title: "OcrDocumentScanResult"
domain: sfFieldRef
topic: ocrdocumentscanresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:05.074Z
estimatedTokens: 488
keywords: [OcrDocumentScanResult, contents, document, optical, character, recognition, OCR, processing]
---

# OcrDocumentScanResult

> Represents the contents of a document after optical character recognition (OCR) 
      processing.

# OcrDocumentScanResult

Represents the contents of a document after optical character recognition (OCR) processing.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see OcrDocumentScanResult in the Salesforce Health Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ContentDocumentId | ContentDocument ID | reference |  | 18 |  |  |
| ContentVersionId | ContentVersion ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DocumentRequestId | Received Document ID | reference |  | 18 |  |  |
| ErrorMessage | Error Message | textarea |  | 4000 |  |  |
| ExtractedItemData | Extracted Item Data | textarea |  | 131072 |  |  |
| ExtractedValues | Extracted Values | textarea |  | 131072 |  |  |
| ExtrctFileRefBody | Extracted File Reference Body | base64 |  |  |  |  |
| ExtrctFileRefContentType | Extracted File Reference Content Type | picklist |  | 255 |  |  |
| ExtrctFileRefLength | Extracted File Reference Length | int | 9 |  |  |  |
| ExtrctFileRefName | Extracted File Reference Name | string |  | 40 |  |  |
| Id | Ocr Document Scan Result ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OcrService | Ocr Service | picklist |  | 255 |  |  |
| OcrStatus | Ocr Status | picklist |  | 255 |  |  |
| PageNumber | Page Number | int | 9 |  |  |  |
| Rotation | Rotation | int | 9 |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
