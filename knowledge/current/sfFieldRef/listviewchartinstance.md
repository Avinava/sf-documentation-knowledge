---
title: "ListViewChartInstance"
domain: sfFieldRef
topic: listviewchartinstance
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:02.421Z
estimatedTokens: 414
keywords: [ListViewChartInstance, Retrieves, metadata, standard, custom, charts, entity, context, view, API, versions, 34.0, later]
---

# ListViewChartInstance

> Retrieves metadata for all standard and custom charts for a given
			entity in context of a given list view. This object is
			available in API versions 34.0 and later.

# ListViewChartInstance

Retrieves metadata for all standard and custom charts for a given entity in context of a given list view. This object is available in API versions 34.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ListViewChartInstance](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_listviewchartinstance.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AggregateField | Aggregate Field | string |  | 255 |  |  |
| AggregateType | Aggregate Type | picklist |  | 255 |  |  |
| ChartType | TODO, use alias | picklist |  | 255 |  |  |
| DataQuery | SOQL Query for Chart Data | textarea |  | 1333 |  |  |
| DataQueryWithoutUserFilters | SOQL Query for Desktop Chart Data without S1 User Filters | textarea |  | 1333 |  |  |
| DeveloperName | API Name | string |  | 80 |  |  |
| ExternalId | ListView Chart Instance ID | string |  | 255 |  |  |
| GroupingField | Grouping Field | string |  | 255 |  |  |
| Id | List View Chart Instance ID | id |  | 18 |  |  |
| IsDeletable | Deletable | boolean |  |  |  |  |
| IsEditable | Editable | boolean |  |  |  |  |
| IsLastViewed | Last Viewed | boolean |  |  |  |  |
| Label | Label | string |  | 255 |  |  |
| ListViewChartId | List View Chart ID | reference |  | 18 |  |  |
| ListViewContextId | List View ID | reference |  | 18 |  |  |
| SourceEntity | Entity | string |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
