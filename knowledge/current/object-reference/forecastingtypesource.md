---
title: "ForecastingTypeSource"
domain: object-reference
topic: forecastingtypesource
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:10.756Z
estimatedTokens: 880
keywords: [ForecastingTypeSource, Maps, forecasting, source, definition, forecast, API, version, 52.0, later, Calls, Usage]
---

# ForecastingTypeSource

> Maps a forecasting source definition to a forecast type. This object is
    available in API version 52.0 and later.

# ForecastingTypeSource

Maps a forecasting source definition to a forecast type. This object is available in API version 52.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

The information in this topic applies only to forecast types created in Summer ’21 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe developer name of the forecasting type source.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| ForecastingSourceDefinitionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the forecasting source definition. This field is a relationship field.Relationship NameForecastingSourceDefinitionRelationship TypeLookupRefers ToForecastingSourceDefinition |
| ForecastingTypeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the forecast type. Can be linked only to forecast types created in Summer ’21 and later. This field is a relationship field.Relationship NameForecastingTypeRelationship TypeLookupRefers ToForecastingType |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionLanguage of the forecasting type source. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. Controlling label for this forecasting type source. |
| ParentSourceDefinitionId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionFor forecast types not based on the opportunity object and not based on a custom measure, this value represents the parent ForecastingSourceDefinition of the linked ForecastingSourceDefinition. This field is a relationship field.Opportunity Product is the parent of Opportunity.Opportunity Split is the parent of Opportunity.Line Item Schedule is the parent of Opportunity Product.Relationship NameParentSourceDefinitionRelationship TypeLookupRefers ToForecastingSourceDefinition |
| RelationField | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionRepresents the field linking the source objects of the parent ForecastingSourceDefinition to the child ForecastingSourceDefinition.Possible values are:OpportunityLineItem.OpportunityIdOpportunityLineItem.Product2IdOpportunityLineItemSchedule.OpportunityLineItemIdOpportunitySplit.OpportunityId |
| SourceGroup | TypeintPropertiesCreate, Filter, Group, SortDescriptionRequired. Represents a grouping of forecasting source definitions. |

## Usage

Use this object to define a forecast type’s structure. This junction object links ForecastingSourceDefinition to ForecastingType.

For an example, see [ForecastingSourceDefinition](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_forecastingsourcedefinition.htm "Represents the object, measure, date type, and hierarchy that a forecast uses to project sales. This object is available in API version 52.0 and later.").

## Related Topics

- ForecastingSourceDefinition (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_forecastingsourcedefinition.htm)
