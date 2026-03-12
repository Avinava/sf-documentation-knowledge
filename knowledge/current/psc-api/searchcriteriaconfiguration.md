---
title: "SearchCriteriaConfiguration"
domain: psc-api
topic: searchcriteriaconfiguration
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:32.326Z
estimatedTokens: 1259
keywords: [SearchCriteriaConfiguration, Retrieve, deploy, view, search, criteria, configurations, criteria-based, filter, Parent, File, Suffix, Directory, Location, Version, configuration, searchable, group, basis, aggregation]
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

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<SearchCriteriaConfiguration xmlns="http://soap.sforce.com/2006/04/metadata">
    <actionList>Create_Product_Request</actionList>
    <additionalSearchCriteria>{&quot;rangeWithinFilters&quot;:[{&quot;field&quot;:&quot;ManufactureDate&quot;}]}</additionalSearchCriteria>
    <aggrCriteriaFieldset>
        <fullName>AggregCriteriaSearchCriteriaConfig</fullName>
        <availableFields>
            <field>Name</field>
            <isRequired>false</isRequired>
        </availableFields>
        <availableFields>
            <field>SerialNumber</field>
            <isRequired>false</isRequired>
        </availableFields>
        <availableFields>
            <field>StockKeepingUnit</field>
            <isRequired>false</isRequired>
        </availableFields>
        <description>SelectedGroupByColumns</description>
        <displayedFields>
            <field>Name</field>
            <isRequired>false</isRequired>
        </displayedFields>
        <displayedFields>
            <field>SerialNumber</field>
            <isRequired>false</isRequired>
        </displayedFields>
        <displayedFields>
            <field>StockKeepingUnit</field>
            <isRequired>false</isRequired>
        </displayedFields>
        <label>SelectedGroupByColumns</label>
    </aggrCriteriaFieldset>
    <configurationType>DefaultSearch</configurationType>
    <description>This configuration is for the search criteria settings.</description>
    <filterType>GROUPING_AND_AGGREGATION</filterType>
    <isActive>true</isActive>
    <isSingleFieldSort>true</isSingleFieldSort>
    <masterLabel>SearchCriteriaConfig</masterLabel>
    <resultDisplayFormat>CARD</resultDisplayFormat>
    <resultFlexCard>ReviewNotes</resultFlexCard>
    <searchCriteriaFieldset>
        <fullName>SearchCriteriaSearchCriteriaConfig</fullName>
        <availableFields>
            <field>RootAssetId</field>
            <isRequired>false</isRequired>
        </availableFields>
        <availableFields>
            <field>AccountId</field>
            <isRequired>false</isRequired>
        </availableFields>
        <availableFields>
            <field>Id</field>
            <isRequired>false</isRequired>
        </availableFields>
        <availableFields>
            <field>Product2Id</field>
            <isRequired>false</isRequired>
        </availableFields>
        <description>SelectedSearchFields</description>
        <displayedFields>
            <field>RootAssetId</field>
            <isRequired>false</isRequired>
        </displayedFields>
        <displayedFields>
            <field>AccountId</field>
            <isRequired>false</isRequired>
        </displayedFields>
        <displayedFields>
            <field>Id</field>
            <isRequired>false</isRequired>
        </displayedFields>
        <displayedFields>
            <field>Product2Id</field>
            <isRequired>false</isRequired>
        </displayedFields>
        <label>SelectedSearchFields</label>
    </searchCriteriaFieldset>
    <searchableObjDataSyncInfo>AssetSearch</searchableObjDataSyncInfo>
    <searchableObject>Asset</searchableObject>
    <sortingCriteriaFieldset>
        <fullName>SortinCriteriaSearchCriteriaConfig</fullName>
        <availableFields>
            <field>AccountId</field>
            <isRequired>false</isRequired>
        </availableFields>
        <availableFields>
            <field>Id</field>
            <isRequired>false</isRequired>
        </availableFields>
        <availableFields>
            <field>Name</field>
            <isRequired>false</isRequired>
        </availableFields>
        <availableFields>
            <field>Product2Id</field>
            <isRequired>false</isRequired>
        </availableFields>
        <availableFields>
            <field>StockKeepingUnit</field>
            <isRequired>false</isRequired>
        </availableFields>
        <description>SelectedSortByColumns</description>
        <displayedFields>
            <field>AccountId</field>
            <isRequired>false</isRequired>
        </displayedFields>
        <displayedFields>
            <field>Id</field>
            <isRequired>false</isRequired>
        </displayedFields>
        <displayedFields>
            <field>Name</field>
            <isRequired>false</isRequired>
        </displayedFields>
        <displayedFields>
            <field>Product2Id</field>
            <isRequired>false</isRequired>
        </displayedFields>
        <displayedFields>
            <field>StockKeepingUnit</field>
            <isRequired>false</isRequired>
        </displayedFields>
        <label>SelectedSortByColumns</label>
    </sortingCriteriaFieldset>
</SearchCriteriaConfiguration>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>SearchCriteriaConfiguration</name>
    </types>
    <version>66.0</version>
</Package>
```
