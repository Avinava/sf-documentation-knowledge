---
title: "RecordAggregationDefinition"
domain: omnistudio
topic: recordaggregationdefinition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:12.608Z
keywords: [RecordAggregationDefinition, Important, Supported, SOAP, API, Calls, REST, Methods, Special, Access, Rules, Fields]
---

# RecordAggregationDefinition

# RecordAggregationDefinition

Represents a data aggregation from one object to another object to which it is connected by other objects in the data model. This object is available in API version 59.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=industries_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

To access this object, you must have the Record Aggregation permission set license and the Record Aggregation Access permission.

## Fields

| Field | Details |
| --- | --- |
| AggregateFromObject | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionRequired.API name of the object from which data is aggregated. |
| AggregateToObject | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionRequired.API name of the object to which data is aggregated. |
| AggregationType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionRequired.Type of the data aggregation.Possible value is:Record |
| BatchProcessingDefinitionId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionData Processing Engine definition that aggregates data from one record to another.This field is a relationship field.Relationship NameBatchProcessingDefinitionRelationship TypeLookupRefers ToBatchCalcJobDefinition |
| Description | TypetextareaPropertiesFilter, Group, Nillable, SortDescriptionThe description for this record aggregation definition. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionUnqiue name for the RecordAggregationDefinition object.The unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Label is Record Type Name. This field is automatically generated, but you can supply your own value if you create the record using the API. |
| DisplayName | TypestringPropertiesFilter, Group, idLookup, SortDescriptionRequired.The name of the record aggregation definition that's displayed in the record page. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the associated RecordAggregationDefinition type in Metadata API.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe language of the record aggregation definition.Possible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionLabel for the record aggregation definition. |
| Metadata | TypeRecordAggregationDefinitionPropertiesCreate, Nillable, UpdateDescriptionThe RecordAggregationDefinition’s metadata. |
| Status | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionThe status of the record aggregation definition.Possible values are:ActiveDraftInactiveThe default value is Draft. |