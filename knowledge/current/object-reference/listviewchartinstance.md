---
title: "ListViewChartInstance"
domain: object-reference
topic: listviewchartinstance
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:12.301Z
estimatedTokens: 980
keywords: [ListViewChartInstance, Retrieves, metadata, standard, custom, charts, entity, context, view, API, versions, 34.0, later, Calls, Usage]
---

# ListViewChartInstance

> Retrieves metadata for all standard and custom charts for a given
			entity in context of a given list view. This object is
			available in API versions 34.0 and later.

# ListViewChartInstance

Retrieves metadata for all standard and custom charts for a given entity in context of a given list view. This object is available in API versions 34.0 and later.

## Supported Calls

describeSObjects(), query()

## Fields

| Field Name | Details |
| --- | --- |
| AggregateField | TypestringPropertiesFilter, Group, SortDescriptionThe field that’s used for calculating data on each group. AggregateField can’t be the same as GroupingField. |
| AggregateType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of calculations to run on each group. The supported AggregateType values are Count, Sum, and Avg. |
| ChartType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of chart to create. The supported chart types are horizontal bar chart, vertical bar chart, and donut chart. |
| DataQuery | TypetextareaPropertiesFilter, Nillable, SortDescriptionThe SOQL query that can be executed to fetch the data for drawing a chart. |
| DataQueryWithoutUserFilters | TypetextareaPropertiesFilter, Nillable, SortDescriptionThe SOQL query that can be executed to fetch the data for drawing a chart, without user filters.Available in API v43.0 and later. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionAPI name of the chart. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance slows down while Salesforce generates one for each record. |
| ExternalId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionReserved for future use. |
| GroupingField | TypestringPropertiesFilter, Group, SortDescriptionThe field that’s used to divide the data into collections. The field has to be supported by SOQL GROUP BY functionality. GroupingField can’t be the same as AggregateField. |
| IsDeletable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates if the chart can be deleted. |
| IsEditable | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates if the chart can be edited. Standard charts are not editable. |
| IsLastViewed | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates if a chart is the last viewed by a user. |
| Label | TypestringPropertiesFilter, Group, SortDescriptionThe display name of the chart. |
| ListViewChartId | TypereferencePropertiesFilter, Group, SortDescriptionID of the chart created by a user. For standard charts, this is null.This is a relationship field.Relationship NameListViewChartRelationship TypeLookupRefers ToListViewChart |
| ListViewContextId | TypereferencePropertiesFilter, Group, SortDescriptionID of the list view in context of which the chart is generated. Required to query ListViewChartInstance.This is a relationship field.Relationship NameListViewContextRelationship TypeLookupRefers ToListView |
| SourceEntity | TypestringPropertiesFilter, Group, SortDescriptionAPI name of the entity to which the chart is related. Required to query ListViewChartInstance. |

## Usage

Example 1. Retrieve all custom and standard charts for Account entity for All Accounts list view

```

```

Example 2. Retrieve metadata for a specific custom chart by ID for Account entity and All Accounts list view

```

```

Example 3. Retrieve metadata for a specific standard chart by its developer name for Account entity and All Accounts list view

```

```

## Code Examples

```
SELECT AggregateField, AggregateType, ChartType, DataQuery, DeveloperName, ExternalId, GroupingField, Id, IsDeletable, IsEditable, IsLastViewed, Label, ListViewChartId, ListViewContextId, SourceEntity FROM ListViewChartInstance WHERE SourceEntity=’Account’ and ListViewContextId=’00BR0000000U8Hr’
```

```
SELECT AggregateField, AggregateType, ChartType, DataQuery, DeveloperName, ExternalId, GroupingField, Id, IsDeletable, IsEditable, IsLastViewed, Label, ListViewChartId, ListViewContextId, SourceEntity FROM ListViewChartInstance WHERE SourceEntity=’Account’ and ListViewContextID=’00BR0000000U8Hr’ and ListViewChartId=’0DdR00000004CBxKAM’
```

```
SELECT AggregateField, AggregateType, ChartType, DataQuery, DeveloperName, ExternalId, GroupingField, Id, IsDeletable, IsEditable, IsLastViewed, Label, ListViewChartId, ListViewContextId, SourceEntity FROM ListViewChartInstance WHERE SourceEntity=’Account’ and ListViewContextID=’00BR0000000U8Hr’ and DeveloperName=’AccountsByIndustry’
```
