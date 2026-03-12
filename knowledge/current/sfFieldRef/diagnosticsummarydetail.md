---
title: "DiagnosticSummaryDetail"
domain: sfFieldRef
topic: diagnosticsummarydetail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:56.096Z
estimatedTokens: 326
keywords: [DiagnosticSummaryDetail, additional, associated, document, reference-type, DiagnosticSummary, records, may, documents, authors, encounters, API, version, 52.0, later]
---

# DiagnosticSummaryDetail

> Represents additional information associated with document reference-type
         DiagnosticSummary records. This additional information may be related documents, authors,
         or related encounters. This object is available in API version 52.0 and later.

# DiagnosticSummaryDetail

Represents additional information associated with document reference-type DiagnosticSummary records. This additional information may be related documents, authors, or related encounters. This object is available in API version 52.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see DiagnosticSummaryDetail in the Salesforce Health Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DetailType | Detail Type | picklist |  | 255 |  |  |
| DiagnosticSummaryId | Diagnostic Summary ID | reference |  | 18 |  |  |
| Id | Diagnostic Summary Detail ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
