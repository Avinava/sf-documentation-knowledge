---
title: "ContextUseCaseMapping"
domain: clm-developer-guide
topic: contextusecasemapping
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:22.578Z
estimatedTokens: 1025
keywords: [ContextUseCaseMapping, setup, stores, configuration, context, service, Salesforce, Contracts, Parent, File, Suffix, Directory, Location, Version, Special, definition, mapping, definitions, invoke, APIs]
---

# ContextUseCaseMapping

> Represents the setup configuration details such as the context definition and
         mapping definitions used to invoke context service APIs. This object is available in
      API version 61.0 and later.

# ContextUseCaseMapping

Represents the setup configuration details such as the context definition and mapping definitions used to invoke context service APIs. This object is available in API version 61.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ContextDefinitionName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the context definition that stores the hydration and persistence mapping details. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe developer name of the record. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language associated with this record.Possible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe user interface label for context use case mapping. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |
| MappingName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the mapping that's associated with the MappingType. |
| MappingType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the mapping type used for context use case mapping.Possible values are:HydrationPersistenceThe default value is Hydration. |
| ReferenceObjectName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe standard or custom source object from which the context mapping is fetched. |
| TargetObjectCustomFieldName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the custom field in the target object that's used to link the target object with the reference object. |
| TargetObjectName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the standard or custom object to which context mapping from the reference object is pushed. |
| UseCaseType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the usage for which the context definition and mapping are defined.Possible values are:ContractCreationOrUpdation—Create Contract or Update ContractContractExtraction—Extract Contract DetailsThe default value is ContractCreationOrUpdation. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ContextUseCaseMappingChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[ContextUseCaseMappingFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm)

Feed tracking is available for the object.

[ContextUseCaseMappingHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[ContextUseCaseMappingOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[ContextUseCaseMappingShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<ContextUseCaseMapping xmlns="http://soap.sforce.com/2006/04/metadata">
    <contextDefinitionName>TestDefName</contextDefinitionName>
    <mappingName>TestMapName</mappingName>
    <mappingType>Hydration</mappingType>
    <masterLabel>TestMLabel</masterLabel>
    <referenceObjectName>Opportunity</referenceObjectName>
    <referenceObjectRecordType>TestOppRT</referenceObjectRecordType>
    <targetObjectCustomFieldName>SourceOpportunityId</targetObjectCustomFieldName>
    <targetObjectName>Contract</targetObjectName>
    <targetObjectRecordType>TestOppRT</targetObjectRecordType>
    <useCaseType>ContractCreationOrUpdation</useCaseType>
</ContextUseCaseMapping>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <fullName>TestPkg</fullName>
    <types>
        <members>Opportunity.TestSalesProcess</members>
        <name>BusinessProcess</name>
    </types>
    <types>
        <members>TestDName</members>
        <name>ContextUseCaseMapping</name>
    </types>
    <types>
        <members>Contract.ContractLifecycleManagement</members>
        <members>Opportunity.TestOppRT</members>
        <name>RecordType</name>
    </types>
    <version>66.0</version>
</Package>
```
