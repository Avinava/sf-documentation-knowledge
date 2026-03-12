---
title: "RecordsetFilterCriteriaRule"
domain: sfFieldRef
topic: recordsetfiltercriteriarule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:11.840Z
estimatedTokens: 565
keywords: [RecordsetFilterCriteriaRule, rule, designated, source, filters, filtered, target, associated, RecordsetFilterCriteria, API, version, 50.0, later]
---

# RecordsetFilterCriteriaRule

> Represents a rule using fields from the designated source object to create
      filters on the filtered, or target, object. RecordsetFilterCriteriaRule is associated
    with the RecordsetFilterCriteria object. This object is available in API version 50.0 and
    later.

# RecordsetFilterCriteriaRule

Represents a rule using fields from the designated source object to create filters on the filtered, or target, object. RecordsetFilterCriteriaRule is associated with the RecordsetFilterCriteria object. This object is available in API version 50.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [RecordsetFilterCriteriaRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_recordsetfiltercriteriarule.htm "HTML (New Window)") in the Field Service Developer Guide and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CriteriaField | Criteria Field | picklist |  | 255 |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| FirstOccurrence | First Occurrence | string |  | 255 |  |  |
| Frequency | Frequency | string |  | 255 |  |  |
| Id | Recordset Filter Criteria Rule ID | id |  | 18 |  |  |
| Index | Index | int | 9 |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastOccurrence | Last Occurrence | string |  | 255 |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| NextOccurrenceField | Next Occurrence Field | picklist |  | 255 |  |  |
| Operator | Operator | picklist |  | 255 |  |  |
| RecordsetFilterCriteriaId | Recordset Filter Criteria ID | reference |  | 18 |  |  |
| RecordsetFilterCriteriaRuleNumber | Recordset Filter Criteria Rule Number | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Type | Recordset Filter Criteria Type | picklist |  | 255 |  |  |
| UsageRateField | Usage Rate Field | picklist |  | 255 |  |  |
| UsageRateUnit | Usage Rate Unit | picklist |  | 255 |  |  |
| Value | Value | textarea |  | 256 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
