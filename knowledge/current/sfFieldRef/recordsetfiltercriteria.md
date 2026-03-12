---
title: "RecordsetFilterCriteria"
domain: sfFieldRef
topic: recordsetfiltercriteria
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:11.820Z
estimatedTokens: 529
keywords: [RecordsetFilterCriteria, filters, match, service, appointments, assets, criteria, recordset, filter, satisfy, matched, filtered, shifts, likewise, maintenance]
---

# RecordsetFilterCriteria

> Represents a set of filters that can be used to match service appointments or
      assets based on your criteria fields. For example, you can create recordset filter
    criteria so that only service appointments that satisfy the filter criteria are matched to the
    filtered shifts, and likewise only maintenance work rules that satisfy your criteria are matched
    to assets. This object is available in API version 50.0 and later. Assets and maintenance work
    rules are available in API version 52.0 and later.

# RecordsetFilterCriteria

Represents a set of filters that can be used to match service appointments or assets based on your criteria fields. For example, you can create recordset filter criteria so that only service appointments that satisfy the filter criteria are matched to the filtered shifts, and likewise only maintenance work rules that satisfy your criteria are matched to assets. This object is available in API version 50.0 and later. Assets and maintenance work rules are available in API version 52.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [RecordsetFilterCriteria](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_recordsetfiltercriteria.htm "HTML (New Window)") in the Field Service Developer Guide and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| CustomLogic | Custom Logic | string |  | 50 |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| FilteredObject | Filtered Object | picklist |  | 255 |  |  |
| Id | Recordset Filter Criteria ID | id |  | 18 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LogicalOperator | Logical Operator | picklist |  | 255 |  |  |
| Name | Recordset Filter Criteria Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| SourceObject | Source Object | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
