---
title: "ServiceProcess"
domain: omnistudio
topic: serviceprocess
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:11.160Z
keywords: [ServiceProcess, Parent, Type, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, ServiceProcessAttribute, ServiceProcessDependency, ServiceProcessItemGroup, Declarative, Metadata, Sample, Definition, Wildcard]
---

# ServiceProcess

# ServiceProcess

Represents a process created in Service Process Studio and its associated attributes.

## Parent Type

This type extends the Metadata metadata type and inherits its fullName field.

## File Suffix and Directory Location

ServiceProcess components have the suffix .serviceprocess and are stored in the .serviceprocess folder.

## Version

ServiceProcess components are available in API version 57.0 and later.

## Special Access Rules

Access to the ServiceProcess type requires the AccessToServiceProcess permission.

## Fields

| Field Name | Description |
| --- | --- |
| description | Field TypestringDescriptionA meaningful explanation of the service process. |
| processLabel | Field TypestringDescriptionRequired.A meaningful name for the service process. |
| serviceProcessAttributes | Field TypeServiceProcessAttribute[]DescriptionCustom attributes that store the data associated with the service process. |
| serviceProcessDependencies | Field TypeServiceProcessDependency[]DescriptionDependent components of the service process, such as OmniScripts or flows. |
| serviceProcessItemGroups | Field TypeServiceProcessItemGroup[]DescriptionGroups of related ServiceProcessAttribute records. |
| shortDescription | Field TypestringDescriptionA brief meaningful explanation of the service process. |
| usageType | Field TypeSvcCatalogItemUsageType (enumeration of type string)DescriptionRequired.The Cloud that uses this service process.Values are:CustomerServiceEmployeeFinancialServicesIndustry (available in version 58.0 and later) |

## ServiceProcessAttribute

A custom attribute that stores data associated with a service process. For example, a service process that reverses a fee can have a Fee Type attribute.

| Field Name | Description |
| --- | --- |
| attributeType | Field TypeSvcCtlgItemAttrAttributeType (enumeration of type string)DescriptionA Base attribute corresponds to a SvcCatalogRequest field, which is subject to field-level security. An Extended attribute is only a ServiceProcessAttribute object record, which isn't subject to field-level security.Values are:BaseExtendedThe default is Extended. |
| dataType | Field TypeSvcCatalogItemAttrDataType (enumeration of type string)DescriptionThe data type of the attribute.Values are:AttachmentCheckboxCurrencyDateDatetimeDisplayTextEmailIPAddressIntegerListOfAttachment(available in API version 65.0 and later)ListOfBooleanListOfDoubleListOfIntegerListOfMapsListOfStringLookupMapMultilineTextMultiSelectPicklist(available in API version 65.0 and later)NumberNumericScalePassword(available in API version 65.0 and later)PercentagePicklistQueueRadioButton(available in API version 65.0 and later)SingleCheckbox (available in API version 59.0 and later)SinglelineTextTextToggle (available in API version 59.0 and later)UrlThe default is Text.NoteSelecting Currency doesn't cause an error, but currency conversions aren't supported. |
| description | Field TypestringDescriptionA meaningful explanation of the attribute. |
| developerName | Field TypestringDescriptionRequired.A system name for the attribute. |
| fieldIdentifier | Field TypestringDescriptionFor a Base attribute, the Developer Name of the SvcCatalogRequest field. This field can be standard or custom. |
| groupApiName | Field TypestringDescriptionThe apiName of the ServiceProcessItemGroup to which this attribute belongs. |
| inputVariableValue | Field TypestringDescriptionThe default value of the attribute. |
| isRequired | Field TypebooleanDescriptionSpecifies whether the attribute is required. The default is false. |
| label | Field TypestringDescriptionRequired.A meaningful name for the attribute. |
| parentAttribute | Field TypestringDescriptionThe parent attribute of this attribute. For example, a Latitude attribute can have GeoLocation as a parent. |
| sortOrder | Field TypeintDescriptionThe position of the attribute in the payload relative to other attributes having no parent or the same parent. |

## ServiceProcessDependency

A dependent component of the service process, which can be a flow, an OmniScript, an Integration Definition, or a preprocessor Apex class.

| Field Name | Description |
| --- | --- |
| dependencyReference | Field TypestringDescriptionRequired.The Developer Name of the flow, OmniScript, Integration Definition, or preprocessor Apex class. |
| processStepName | Field TypeSvcCtlgItemDpndProcType (enumeration of type string)DescriptionName of the step in a service process.Values are:FulfillmentFlowIntegrationDefinitionPreprocessorRequestForm |
| type | Field TypeSvcCatalogItemDependencyType (enumeration of type string)DescriptionRequired.The type of dependent component.Values are:FlowDefinitionIntegrationProviderDefOmniScriptConfigPreprocessorApexClass |

## ServiceProcessItemGroup

A group of related ServiceProcessAttribute records.

| Field Name | Description |
| --- | --- |
| apiName | Field TypestringDescriptionRequired.The API Name of the group. |
| groupName | Field TypestringDescriptionRequired.The name of the group. |
| sortOrder | Field TypeintDescriptionRequired.The group display order. |

## Declarative Metadata Sample Definition

The following is an example of a ServiceProcess component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see Deploying and Retrieving Metadata with the Zip File.

## Usage Type

We recommend that you review these considerations before you retrieve or deploy service process metadata.

-   If you deploy metadata with the same name as the definition when your service process definition is active, you get an error message. Deactivate the service process definition and try again.
-   When your service process definition is inactive, consider these guidelines.
    -   If a service process definition contains service catalog requests and service catalog request extended attribute values and you deploy metadata with the same name as the definition, you get an error message. You can’t delete or change a service process that has service catalog requests with attribute values in it. Make sure that all records are deleted in service catalog requests and service catalog request extended attribute values before you deploy the metadata.
    -   If a service process definition contains service catalog requests but doesn’t contain service catalog request extended attribute values and you deploy the metadata with the same name, the deployment works as expected.
    -   If a service process definition doesn’t contain service catalog requests and you deploy the metadata with the same name, the deployment works as expected.