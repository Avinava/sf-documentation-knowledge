---
title: "CareProviderSearchConfig"
domain: life-sciences-dev-guide
topic: careprovidersearchconfig
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:44.709Z
estimatedTokens: 418
keywords: [CareProviderSearchConfig, appear, care, provider, search, results, extends, Metadata, inherits, fullName, File, Suffix, Directory, Location, Version, specify, arbitrary, objects, source, made]
---

# CareProviderSearchConfig

> Represents fields that can appear in provider search results. Use this object
         to specify fields in arbitrary objects (source) that are made available in the search
         object (target). This object is available in API version 48.0 and later.

# CareProviderSearchConfig

Represents fields that can appear in provider search results. Use this object to specify fields in arbitrary objects (source) that are made available in the search object (target). This object is available in API version 48.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=life_sciences_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Label is Record Type Name. This field is automatically generated, but you can supply your own value if you create the record using the API.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may slow as a DeveloperName is generated for each record. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the associated CareProviderSearchConfig type in Metadata API. The full name can include a namespace prefix.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether this configuration is active.The default value is false. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe language of the CareProviderSearchConfig.Possible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| MappedObject | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionSpecifies the mapped objects where searches for providers are run.Possible values are:HealthcarePractitionerFacilityHealthcareProviderThe default value is HealthcareProvider. |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionLabel that identifies the CareProviderSearchConfig throughout the Salesforce user interface. |
| Metadata | TypecomplexvaluePropertiesCreate, Nillable, UpdateDescriptionThe CareProviderSearchConfig’s metadata.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| SourceField | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe API name of the field that is copied to the target object. |
| TargetField | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe API name of the field in the target object where data copied from SourceField is pasted. |

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<CareProviderSearchConfig xmlns="http://soap.sforce.com/2006/04/metadata">
    <sourceField>Test1__c</sourceField>
    <targetField>Test1__c</targetField>
    <mappedObject>HealthcareProvider</mappedObject>
    <isProtected>false</isProtected>
    <isActive>true</isActive>
    <masterLabel>testlabel</masterLabel>
</CareProviderSearchConfig>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>HealthcareProvider.Test1__c</members>
        <name>CustomField</name>
    </types>
    <types>
        <members>CareProviderSearchableField.Test1__c</members>
        <name>CustomField</name>
    </types>
    <types>
        <members>Test</members>
        <name>CareProviderSearchConfig</name>
    </types>
    <version>48.0</version>
</Package>
```

## Related Topics

- CareProviderSearchConfigChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
