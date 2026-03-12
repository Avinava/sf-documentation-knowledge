---
title: "CalcMatrixColumnRange"
domain: sfFieldRef
topic: calcmatrixcolumnrange
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:50.875Z
estimatedTokens: 311
keywords: [CalcMatrixColumnRange, decision, matrix, column, number, range, text, API, version, 59.0, later]
---

# CalcMatrixColumnRange

> Represents information about a value in a decision matrix column when
         the column is of the type number range or text range. This object is available in API
      version 59.0 and later.

# CalcMatrixColumnRange

Represents information about a value in a decision matrix column when the column is of the type number range or text range. This object is available in API version 59.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see CalcMatrixColumnRange in the Lookup Tables Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CalculationMatrixColumnId | Decision Matrix Column ID | reference |  | 18 |  |  |
| CalculationMatrixVersionId | Decision Matrix Version ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Decision Matrix Column Range ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| Occurrence | Occurrence | int | 9 |  |  |  |
| RangeStartValue | Range Start Value | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
