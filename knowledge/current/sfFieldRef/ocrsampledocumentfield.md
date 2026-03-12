---
title: "OcrSampleDocumentField"
domain: sfFieldRef
topic: ocrsampledocumentfield
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:05.100Z
estimatedTokens: 434
keywords: [OcrSampleDocumentField, document, whose, extracted, mapped, Salesforce]
---

# OcrSampleDocumentField

> Represents the details of the field in a document whose value is
      extracted and mapped to a Salesforce object field.

# OcrSampleDocumentField

Represents the details of the field in a document whose value is extracted and mapped to a Salesforce object field.

For more information, see OcrSampleDocumentField in the Salesforce Health Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CellColumnNumber | Cell Column Number | int | 9 |  |  |  |
| CellColumnSpanValue | Cell Column Span Value | int | 9 |  |  |  |
| CellRowNumber | Cell Row Number | int | 9 |  |  |  |
| CellRowSpanValue | Cell Row Span Value | int | 9 |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| FieldLabelMaxX | Field Label Max X Coordinate | double |  |  | 18 | 0 |
| FieldLabelMaxY | Field Label Max Y Coordinate | double |  |  | 18 | 0 |
| FieldLabelMinX | Field Label Min X Coordinate | double |  |  | 18 | 0 |
| FieldLabelMinY | Field Label Min Y Coordinate | double |  |  | 18 | 0 |
| Id | OCR Sample Document Field ID | id |  | 18 |  |  |
| IsAutoExtracted | Auto Extracted | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| ItemType | Item Type | picklist |  | 255 |  |  |
| KeyContent | Key Content | string |  | 255 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| OcrSampleDocumentId | OCR Sample Document ID | reference |  | 18 |  |  |
| OcrSampleDocumentPageId | OCR Sample Document Page ID | reference |  | 18 |  |  |
| OcrSampleDocumentPageItemId | Ocr Sample Document Page Item ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
