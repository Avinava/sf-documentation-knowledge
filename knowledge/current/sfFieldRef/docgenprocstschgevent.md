---
title: "DocGenProcStsChgEvent"
domain: sfFieldRef
topic: docgenprocstschgevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:56.335Z
estimatedTokens: 266
keywords: [DocGenProcStsChgEvent, change, status, document, generation, API, version, 62.0, later]
---

# DocGenProcStsChgEvent

> Represents the change in status of a document generation request. This
      object is available in API version 62.0 and later.

# DocGenProcStsChgEvent

Represents the change in status of a document generation request. This object is available in API version 62.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see DocGenProcStsChgEvent in the Salesforce Contracts Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DocGenProcessIdentifier | Document Generation Process Identifier | string |  | 18 |  |  |
| Error | Error | string |  | 255 |  |  |
| EventUuid | Event Uuid | string |  | 36 |  |  |
| PdfDocumentIdentifier | PDF Document Identifier | string |  | 18 |  |  |
| ReferenceObject | Reference Object | string |  | 18 |  |  |
| ReplayId | Replay ID | string |  | 1000 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| WordDocumentIdentifier | Word Document Identifier | string |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
