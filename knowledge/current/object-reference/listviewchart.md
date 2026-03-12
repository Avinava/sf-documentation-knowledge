---
title: "ListViewChart"
domain: object-reference
topic: listviewchart
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:12.290Z
estimatedTokens: 610
keywords: [ListViewChart, graphical, chart, that’s, Salesforce, Android, iOS, mobile, web, views, aggregates, data, filtered, view, currently]
---

# ListViewChart

> Represents a graphical chart that’s displayed on
    Salesforce for Android, iOS, and mobile web list views. The chart aggregates data that is
    filtered based on the list view that’s currently displayed.

# ListViewChart

Represents a graphical chart that’s displayed on Salesforce for Android, iOS, and mobile web list views. The chart aggregates data that is filtered based on the list view that’s currently displayed. This object is available in API version 33.0 and later and is accessible by portal users.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Name | Description |
| --- | --- |
| AggregateField | TypepicklistPropertiesCreate, Filter, Group, Nillable, Query, Restricted picklist, Retrieve, Sort, UpdateDescriptionThe field that’s used for calculating data on each group. AggregateField can’t be the same as GroupingField. |
| AggregateType | TypepicklistPropertiesCreate, Filter, Group, Query, Restricted picklist, Retrieve, Sort, UpdateDescriptionThe type of calculations to run on each group. The supported AggregateType values are Count, Sum, and Avg. |
| ChartType | TypepicklistPropertiesCreate, Filter, Group, Query, Restricted picklist,Retrieve, Sort, UpdateDescriptionThe type of chart to create. The supported chart types are horizontal bar chart, vertical bar chart, and donut chart. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Query, Retrieve, Sort, UpdateDescriptionThe fully qualified developer name of the chart.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| GroupingField | TypepicklistPropertiesCreate, Filter, Group, Nillable, Query, Restricted picklist, Retrieve, Sort, UpdateDescriptionThe field that’s used to divide the data into collections. The field must be supported by SOQL GROUP BY functionality. GroupingField can’t be the same as AggregateField. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the MasterLabel. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Query, Retrieve, Sort, UpdateDescriptionThe label for the chart. |
| OwnerId | TypereferencePropertiesCreate, Filter, Group, Query, Retrieve, Sort, UpdateDescriptionThe ID of the user who owns the chart.This is a relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToUser |
| SobjectType | TypepicklistPropertiesCreate, Filter, Group, Query, Restricted picklist, Retrieve, SortDescriptionThe API name of the sObject for the chart. |
