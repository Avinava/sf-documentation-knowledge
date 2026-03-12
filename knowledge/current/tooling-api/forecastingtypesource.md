---
title: "ForecastingTypeSource"
domain: tooling-api
topic: forecastingtypesource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:45.768Z
estimatedTokens: 686
keywords: [ForecastingTypeSource, Represents, mapping, forecasting, source, definition, forecast, type., API, version, 52.0, later., Important, Supported, SOAP, Calls, REST, Fields]
---

# ForecastingTypeSource

> Represents the mapping of a forecasting source definition to a forecast
         type. This object is available in API version 52.0 and later.

# ForecastingTypeSource

Represents the mapping of a forecasting source definition to a forecast type. This object is available in API version 52.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_tooling)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve()

## Supported REST API Methods

DELETE, GET, HEAD, POST, Query

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe developer name of the forecasting source definition. |
| ForecastingSourceDefinitionId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the forecasting source definition.This is a relationship field.Relationship NameForecastingSourceDefinitionRelationship TypeLookupRefers ToForecastingSourceDefinition |
| ForecastingTypeId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the forecast type. Can be linked only to forecast types created in Summer ’21 and later.This is a relationship field.Relationship NameForecastingTypeRelationship TypeLookupRefers ToForecastingType |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the forecasting type source. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionThe language of the forecasting type source. |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionRequired. The controlling label for this forecasting type source. |
| Metadata | TypeForecastingTypeSourcePropertiesCreate, Nillable, UpdateDescriptionThe metadata of the forecasting source definition. |
| ParentSourceDefinitionId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionFor forecast types not based on the Opportunity object and not based on a custom measure, this value represents the ID of the parent ForecastingSourceDefinition of the linked ForecastingSourceDefinition.This is a relationship field.Relationship NameParentSourceDefinitionRelationship TypeLookupRefers ToForecastingSourceDefinition |
| RelationField | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionRepresents the field that links the source objects of the parent ForecastingSourceDefinition to the child ForecastingSourceDefinition.Possible values are:OpportunityLineItem.OpportunityIdOpportunityLineItem.Product2Id |
| SourceGroup | TypeintPropertiesFilter, Group, SortDescriptionRequired. Represents a grouping of forecast type source definitions. |
