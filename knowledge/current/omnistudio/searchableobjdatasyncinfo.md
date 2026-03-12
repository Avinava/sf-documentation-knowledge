---
title: "SearchableObjDataSyncInfo"
domain: omnistudio
topic: searchableobjdatasyncinfo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:51.216Z
estimatedTokens: 933
keywords: [SearchableObjDataSyncInfo, Retrieve, deploy, view, searchable, data, sync, criteria-based, search, filter, Parent, File, Suffix, Directory, Location, synchronization, frequency, status, date, time]
---

# SearchableObjDataSyncInfo

> Retrieve, deploy, update , create, and view searchable
			object data sync information for criteria-based search and filter.

# SearchableObjDataSyncInfo

Retrieve, deploy, update , create, and view searchable object data sync information for criteria-based search and filter.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=industries_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/metadata.htm "HTML (New Window)") metadata type and inherits its fullName field.

## File Suffix and Directory Location

SearchableObjDataSyncInfo components have the suffix SearchableObjDataSyncInfo.settings and are stored in the SearchableObjDataSyncInfo folder.

## Version

SearchableObjDataSyncInfo components are available in API version 58.0 and later.

## Special Access Rules

There are no additional access requirements that are specific to this type.

## Fields

| Field Name | Description |
| --- | --- |
| dataSyncActive | Field TypebooleanDescriptionIndicates whether the data synchronization operation for the search object is active (true) or not (false). This value does not indicate the status of a Data Processing Engine (DPE) definition, but instead indicates the system job that executes that DPE definition. |
| dataSyncJob | Field TypestringDescriptionThe data synchronization job that updates data in the searchable object at regular intervals. |
| description | Field TypestringDescriptionThe description of a searchable object data sync information record.NoteDescription length should not exceed 255 characters. |
| displayFieldSet | Field TypeFieldSetDescriptionThe fieldset that determines how fields are displayed in the filter panel. |
| lastDataSyncRunDate | Field TypestringDescriptionThe last date and time at which the data synchronization job ran. This field does not indicate the date and time when the Data Processing Engine (DPE) last ran, but rather it indicates when the system job that executes the DPE definition last ran. |
| lookupMappings | Field TypeObject MappingDescriptionThe mappings for inputObject to outputObject for lookup type fields. |
| masterLabel | Field TypestringDescriptionRequired.A user-friendly name for the use case definition, which is defined when the use case definition is created. |
| parsingFieldSet | Field TypeFieldSetDescriptionThe fieldset that determines how fields are parsed for criteria-based search and filter. |
| picklistMappings | Field TypeObject MappingDescriptionThe mappings for inputObject to outputObject for picklist type fields. |
| scheduleFrequencyInHours | Field TypestringDescriptionThe frequency at which the data synchronization job is run to refresh data in the searchable object. |
| searchableObject | Field TypestringDescriptionRequired.The object that's used for criteria-based search and filter. |
| typeAheadMappings | Field TypeObject MappingDescriptionThe mappings for inputObject to outputObject for type-ahead fields. Available in API version 63.0 and later. |

## Declarative Metadata Sample Definition

The following is an example of a SearchableObjDataSyncInfo component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based.htm "HTML (New Window)").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<SearchableObjDataSyncInfo xmlns="http://soap.sforce.com/2006/04/metadata">
    <dataSyncActive>false</dataSyncActive>
    <displayFieldSet>
        <fullName>DisplayAssetSearch</fullName>
        <availableFields>
            <alternativeDisplayFormat>Picklist</alternativeDisplayFormat>
            <field>Country</field>
            <isRequired>false</isRequired>
        </availableFields>
        <availableFields>
            <alternativeDisplayFormat>Picklist</alternativeDisplayFormat>
            <field>City</field>
            <isRequired>false</isRequired>
        </availableFields>
        <description>DisplayTypes</description>
        <displayedFields>
            <alternativeDisplayFormat>Picklist</alternativeDisplayFormat>
            <field>Country</field>
            <isRequired>false</isRequired>
        </displayedFields>
        <displayedFields>
            <alternativeDisplayFormat>Picklist</alternativeDisplayFormat>
            <field>City</field>
            <isRequired>false</isRequired>
        </displayedFields>
        <label>DisplayTypes</label>
    </displayFieldSet>
    <parsingFieldSet>
        <fullName>ParsingAssetSearch</fullName>
        <availableFields>
            <field>SerialNumber</field>
            <isRequired>false</isRequired>
        </availableFields>
        <description>ParsingTypes</description>
        <displayedFields>
            <field>SerialNumber</field>
            <isRequired>false</isRequired>
        </displayedFields>
        <label>ParsingTypes</label>
    </parsingFieldSet>
    <lookupMappings>
        <inputObject>Asset</inputObject>
        <mappingFields>
            <inputField>RootAssetId</inputField>
            <outputField>SerialNumber</outputField>
        </mappingFields>
        <outputObject>Asset</outputObject>
    </lookupMappings>
    <masterLabel>AssetSearch</masterLabel>
    <picklistMappings>
        <inputObject>Account</inputObject>
        <mappingFields>
            <inputField>AccountSource</inputField>
            <outputField>Name</outputField>
        </mappingFields>
        <outputObject>Asset</outputObject>
    </picklistMappings>
    <searchableObject>Asset</searchableObject>
    <typeAheadMappings>
        <inputObject>Product2</inputObject>
        <mappingFields>
            <inputField>ProductCode</inputField>
            <outputField>ProductCode</outputField>
        </mappingFields>
        <outputObject>Asset</outputObject>
    </typeAheadMappings>
</SearchableObjDataSyncInfo>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>SearchableObjDataSyncInfo</name>
    </types>
    <version>66.0</version>
</Package>
```
