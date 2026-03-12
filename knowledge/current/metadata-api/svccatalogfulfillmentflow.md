---
title: "SvcCatalogFulfillmentFlow"
domain: metadata-api
topic: svccatalogfulfillmentflow
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:42.408Z
estimatedTokens: 986
keywords: [SvcCatalogFulfillmentFlow, flow, associated, specific, catalog, item, Service, File, Suffix, Directory, Location, Version, SvcCatalogFulfillFlowItem, Declarative, Metadata]
---

# SvcCatalogFulfillmentFlow

> Represents the flow associated with a specific catalog item in the Service
    Catalog.

# SvcCatalogFulfillmentFlow

Represents the flow associated with a specific catalog item in the Service Catalog.

## File Suffix and Directory Location

SvcCatalogFulfillmentFlow components have the suffix fulfillmentFlow and are stored in the svcCatalogFulfillmentFlows folder.

## Version

SvcCatalogFulfillmentFlows components are available in API version 53.0 and later.

## Fields

| Field Name | Description |
| --- | --- |
| description | Field TypestringDescriptionRequired. Free-text description of the fulfillment flow. |
| flow | Field TypestringDescriptionRequired. The name of the flow represented by this SvcCatalogFulfillmentFlow. |
| icon | Field TypestringDescriptionRepresents the details of an icon. |
| isProtected | Field TypebooleanDescriptionAn auto-generated value. This value currently has no impact. |
| items | Field TypeSvcCatalogFulfillFlowItem[]DescriptionThe list of variables in the flow that can accept a value as input. |
| masterLabel | Field TypestringDescriptionRequired. The primary label for the fulfillment flow record. |

## SvcCatalogFulfillFlowItem

Represents a variable in a fulfillment flow that can accept input. Describes what type of value it accepts.

| Field Name | Description |
| --- | --- |
| catalogInputVariable | Field TypestringDescriptionRequired.The FlowVariable the fulfillment flow property represents. |
| displayType | Field TypePropertyDisplayType (enumeration of type string)DescriptionThe display options available.Values are:CheckboxDate (available in API version 59.0 and later)DateTime (available in API version 59.0 and later)LookupNumberPicklistQueue (available in API version 57.0 and later)Text |
| fieldDefinition | Field TypestringDescriptionThe name of a field in the object provided in objectLookupDomain that specifies the value for this variable. If displayType is Picklist, this value must be the name of a picklist field. If displayType is Lookup and fieldLookupDomain is FieldDefinition, this value must be the name of a relationship field. |
| fieldLookupDomain | Field TypestringDescriptionThe name of a standard or custom object that specifies the domain of that lookup or picklist. This value is relevant only if displayType is Lookup or Picklist. |
| isAdditionalQuestionsInputVariable | Field TypebooleanDescriptionDetermines if this variable accepts input for all additional questions that were asked to a user. This value can only be true if the displayType for this item is Text. Only one item per SvcCatalogFulfillmentFlow component can set this attribute to true. |
| isRequired | Field TypebooleanDescriptionDetermines if the field is required for the related fulfillment flow to be executed. |
| lookupDomainFieldType | Field TypestringDescriptionThis value specifies the fields for the object specified by objectLookupDomain that are displayed in the Catalog Builder by type. This value is only relevant if displayType is Lookup and fieldLookupDomain is FieldDefinition. |
| masterLabel | Field TypestringDescriptionRequired.The primary label for the fulfillment flow record. |
| objectLookupDomain | Field TypestringDescriptionThe name of a custom or standard object. If displayType is Lookup or Picklist, this value filters the available options to a specific object. |

## Declarative Metadata Sample Definition

The following is an example of a SvcCatalogFulfillmentFlow component.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<SvcCatalogFulfillmentFlow xmlns="http://soap.sforce.com/2006/04/metadata">
    <description>Creates a Case record related to the Contact belonging to the current User. If this will be used by Users without related Contacts, provide an Account Id below. This Account Id will be used instead of a Contact.</description>
    <flow>Create_Case_by_Record_Type</flow>
    <isProtected>false</isProtected>
    <items>
        <catalogInputVariable>Input_RecordTypeApiName</catalogInputVariable>
        <displayType>Text</displayType>
        <isAdditionalQuestionsInputVariable>false</isAdditionalQuestionsInputVariable>
        <isRequired>true</isRequired>
        <masterLabel>Record Type Developer Name</masterLabel>
    </items>
    <items>
        <catalogInputVariable>Input_AccountId</catalogInputVariable>
        <displayType>Lookup</displayType>
        <fieldDefinition>AccountId</fieldDefinition>
        <fieldLookupDomain>Account</fieldLookupDomain>
        <isAdditionalQuestionsInputVariable>false</isAdditionalQuestionsInputVariable>
        <isRequired>false</isRequired>
        <masterLabel>(Optional) Related Account</masterLabel>
        <objectLookupDomain>Contact</objectLookupDomain>
    </items>
    <items>
        <catalogInputVariable>Input_Origin</catalogInputVariable>
        <displayType>Picklist</displayType>
        <fieldDefinition>Origin</fieldDefinition>
        <isAdditionalQuestionsInputVariable>false</isAdditionalQuestionsInputVariable>
        <isRequired>true</isRequired>
        <masterLabel>Case Origin</masterLabel>
        <objectLookupDomain>Case</objectLookupDomain>
    </items>
    <items>
        <catalogInputVariable>Input_Priority</catalogInputVariable>
        <displayType>Picklist</displayType>
        <fieldDefinition>Priority</fieldDefinition>
        <isAdditionalQuestionsInputVariable>false</isAdditionalQuestionsInputVariable>
        <isRequired>false</isRequired>
        <masterLabel>Case Priority</masterLabel>
        <objectLookupDomain>Case</objectLookupDomain>
    </items>
    <items>
        <catalogInputVariable>Input_Status</catalogInputVariable>
        <displayType>Picklist</displayType>
        <fieldDefinition>Status</fieldDefinition>
        <isAdditionalQuestionsInputVariable>false</isAdditionalQuestionsInputVariable>
        <isRequired>true</isRequired>
        <masterLabel>Case Status</masterLabel>
        <objectLookupDomain>Case</objectLookupDomain>
    </items>
    <items>
        <catalogInputVariable>Input_Subject</catalogInputVariable>
        <displayType>Text</displayType>
        <isAdditionalQuestionsInputVariable>false</isAdditionalQuestionsInputVariable>
        <isRequired>true</isRequired>
        <masterLabel>Case Subject</masterLabel>
    </items>
    <items>
        <catalogInputVariable>Input_Description</catalogInputVariable>
        <displayType>Text</displayType>
        <isAdditionalQuestionsInputVariable>true</isAdditionalQuestionsInputVariable>
        <isRequired>false</isRequired>
        <masterLabel>Case Description</masterLabel>
    </items>
    <masterLabel>Create Case by Record Type</masterLabel>
</SvcCatalogFulfillmentFlow>
```

## Related Topics

- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
