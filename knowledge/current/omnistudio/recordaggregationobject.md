---
title: "RecordAggregationObject"
domain: omnistudio
topic: recordaggregationobject
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:53.340Z
estimatedTokens: 683
keywords: [RecordAggregationObject, record, aggegation, join, sequence, API, version, 59.0, later, SOAP, Calls, REST, Special, Access, Rules]
---

# RecordAggregationObject

> Represents an object in the record aggegation join sequence.
      This object is available in API version 59.0 and later.

# RecordAggregationObject

Represents an object in the record aggegation join sequence. This object is available in API version 59.0 and later.

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
| AssociatedObject | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe API name of the object associated with this record aggregation object. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe developer name of the record aggregation object. Can contain only underscores and alphanumeric characters and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. |
| FilterLogic | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLogical sequence in which the record aggregation object filters associated with this record aggregation object are applied to the associated object's records. If you define two or more record aggregation object filters, but don’t specify the sequence in which to apply the filters, the filters are applied by using a logical AND expression.Available in API version 60.0 and later. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the record aggregation object.Possible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionLabel for the record aggregation object. |
| RecordAggregationDefinitionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe record aggregation definition with which this record aggregation object is associated.This field is a relationship field.Relationship NameRecordAggregationDefinitionRelationship TypeLookupRefers ToRecordAggregationDefinition |
