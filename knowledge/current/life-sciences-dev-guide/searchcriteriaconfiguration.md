---
title: "SearchCriteriaConfiguration"
domain: life-sciences-dev-guide
topic: searchcriteriaconfiguration
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:47.813Z
estimatedTokens: 1330
keywords: [SearchCriteriaConfiguration, configuration, searchable, group, basis, search, aggregation, sort, result, display, API, version, 58.0, later, SOAP]
---

# SearchCriteriaConfiguration

> Represents the configuration details of searchable field sets such as the
         group of fields used as the basis for search, aggregation, sort, and result display.
      This object is available in API version 58.0 and later.

# SearchCriteriaConfiguration

Represents the configuration details of searchable field sets such as the group of fields used as the basis for search, aggregation, sort, and result display. This object is available in API version 58.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

Automotive and Criteria-Based Search and Filter must be enabled.

## Fields

| Field | Details |
| --- | --- |
| ActionList | TypetextareaPropertiesNillableDescriptionThe list of actions that can be launched for a search result.Available in API version 59.0 and later. |
| AdditionalSearchCriteria | TypestringPropertiesNillableDescriptionThe additional configuration attributes used in criteria-based search.Available in API version 63.0 and later. |
| AggrCriteriaFieldsetId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe set of fields in the searchable object that can be used as aggregation criteria.This field is a relationship field.Relationship NameAggrCriteriaFieldsetRelationship TypeLookupRefers ToFieldSet |
| ConfigurationType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the type of search criteira configuration. Available in API version 63.0 and later.Possible values are:CLINICAL_TRAIL_SEARCHDEFAULT_SEARCH |
| Description | TypetextareaPropertiesFilter, Group, Nillable, SortDescriptionThe description of a search criteria configuration record. Maximum length allowed is 255 characters. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe developer name of the record. |
| DistanceCriteria | TypetextareaPropertiesNillableDescriptionA JSON string that stores the distance configuration attributes used in criteria-based search. |
| FilterType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the type of filter criteria to use for criteria-based search and filter.Possible values are:GROUPING_AND_AGGREGATIONMULTIPLE_FIELDS |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the associated metadata object in Metadata API. Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the search criteria configuration is active (true) or not (false).The default value is false. |
| IsSingleFieldSort | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the search results are sorted based on a single field (true) or not (false). Available in API version 63.0 and later.The default value is false. |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionMaster label for SearchCriteriaConfiguration. This internal label doesn’t get translated. |
| Metadata | TypecomplexvaluePropertiesCreate, Nillable, UpdateDescriptionMetadata that defines search criteria configurations. Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| ResultDisplayFormat | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the display format of search results.Possible values are:CARDLIST |
| ResultFieldsetId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe set of fields in the searchable object that can be used as search result columns.This field is a relationship field.Relationship NameResultFieldsetRelationship TypeLookupRefers ToFieldSet |
| ResultFlexCard | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the OmniStudio FlexCard used to display search results as cards. |
| SearchCriteriaFieldsetId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe set of fields in the searchable object that can be used for querying data.This field is a relationship field.Relationship NameSearchCriteriaFieldsetRelationship TypeLookupRefers ToFieldSet |
| SearchableObjDataSyncInfoId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe object that stores data sync information about the searchable object, such as whether the data sync job is active or not, and when the last data sync job was run.This field is a relationship field.Relationship NameSearchableObjDataSyncInfoRelationship TypeLookupRefers ToSearchableObjDataSyncInfo |
| SearchableObject | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe object that can be used for criteria-based search and filter.Possible values are:VehicleSearchableField—This value is applicable for Automotive Cloud. |
| SortingCriteriaFieldsetId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe set of fields in the searchable object that can be used as sort criteria for search results.This field is a relationship field.Relationship NameSortingCriteriaFieldsetRelationship TypeLookupRefers ToFieldSet |
