---
title: "ListViewChart"
domain: sfFieldRef
topic: listviewchart
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:02.414Z
estimatedTokens: 429
keywords: [ListViewChart, graphical, chart, that’s, Salesforce, Android, iOS, mobile, web, views, aggregates, data, filtered, view, currently]
---

# ListViewChart

> Represents a graphical chart that’s displayed on
    Salesforce for Android, iOS, and mobile web list views. The chart aggregates data that is
    filtered based on the list view that’s currently displayed.
  This object is available in API version 33.0 and later and is accessible by portal
  users.

# ListViewChart

Represents a graphical chart that’s displayed on Salesforce for Android, iOS, and mobile web list views. The chart aggregates data that is filtered based on the list view that’s currently displayed. This object is available in API version 33.0 and later and is accessible by portal users.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ListViewChart](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_listviewchart.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AggregateField | Custom Field Definition ID | picklist |  | 255 |  |  |
| AggregateType | Aggregate Type | picklist |  | 255 |  |  |
| ChartType | Chart Type | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DeveloperName | API Name | string |  | 80 |  |  |
| GroupingField | Custom Field Definition ID | picklist |  | 255 |  |  |
| Id | List View Chart ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Label | string |  | 80 |  |  |
| OwnerId | User ID | reference |  | 18 |  |  |
| SobjectType | Custom Object Definition ID | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
