---
title: "FlowVariableView"
domain: object-reference
topic: flowvariableview
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:10.520Z
estimatedTokens: 503
keywords: [FlowVariableView, variable, flow, version, API, 46.0, later, Calls, Usage]
---

# FlowVariableView

> Represents a variable within the flow version. This object is
      available in API version 46.0 and later.

# FlowVariableView

Represents a variable within the flow version. This object is available in API version 46.0 and later.

## Supported Calls

describeSObjects(), query()

## Fields

| Field | Details |
| --- | --- |
| ApiName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe API name of the flow variable. |
| DataType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe data type of the flow variable. Valid values are:Apex—This value is available in API version 46.0 and later.BooleanCurrencyDateDateTime—This value is available in API version 30.0 and later.NumberMultipicklist—This value is available in API version 34.0 and later.Picklist—This value is available in API version 34.0 and later.StringsObject |
| Description | TypestringPropertiesFilter, Group, Nillable, SortDescriptionFlow variable information, specified by the org’s admin. |
| DurableId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe Id of the flow variable. |
| FlowVersionViewId | TypestringPropertiesFilter, Nillable, SortDescriptionThe Id of the flow version.This is a relationship field.Relationship NameFlowVersionViewRelationship TypeLookupRefers ToFlowVersionView |
| IsCollection | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether or not the flow variable is a collection of values. |
| IsInput | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicated whether or not the flow variable is available for input. |
| IsOutput | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether or not the flow variable is available for output. |
| ObjectType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionIf the data type is sObject, this field indicates which object. |

## Usage

Use this object to query information about flow variables. A query must be filtered by FlowVersionViewId to get results. Only variables with IsInput or IsOutput marked as true are visible.
