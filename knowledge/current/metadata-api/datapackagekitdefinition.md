---
title: "DataPackageKitDefinition"
domain: metadata-api
topic: datapackagekitdefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:38.510Z
estimatedTokens: 872
keywords: [DataPackageKitDefinition, Represents, top-level, data, kit, container, definition., Content, objects, added, after, defined., Important, Parent, File, Suffix, Directory, Location, Version, Special]
---

# DataPackageKitDefinition

> Represents the top-level data kit container
      definition. Content objects can be added after the data kit is defined.

# DataPackageKitDefinition

Represents the top-level data kit container definition. Content objects can be added after the data kit is defined.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. Because changing terms in our code can break current implementations, we maintained this metadata type’s name.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

DataPackageKitDefinition components have the suffix .dataPackageKitDefinition and are stored in the dataPackageKitDefinitions folder.

## Version

DataPackageKitDefinition components are available in API version 53.0 and later.

## Special Access Rules

There are no additional access requirements that are specific to this type.

## Fields

| Field Name | Description |
| --- | --- |
| dataKitType | Field TypestringDescriptionThe type of data kit created. Available in API version 63.0 and later. Valid values are:DefaultSandbox |
| dataKitSource | Field TypestringDescriptionThe data source in the updated data kit. Available in API version 63.0 and later. |
| description | Field TypestringDescriptionThe description of the data kit. |
| developerName | Field TypestringDescriptionRequired. The name of the application. This name contain only underscores and alphanumeric characters and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. |
| isDeployed | Field TypebooleanDescriptionIndicates whether the data kit content is deployed. |
| isEnabled | Field TypebooleanDescriptionIndicates whether the data kit is enabled. |
| masterLabel | Field TypestringDescriptionRequired. Label that identifies the AI application throughout the Salesforce user interface. |
| useDeterministicNaming | Field TypebooleanDescriptionRequired. Indicates whether the data kit should use the deterministic naming feature. Available in API version 65.0 and later. Valid values are:TrueFalse |
| versionNumber | Field TypedoubleDescriptionAuto incremented version number. |
| dataSpaceDefinitionDevName | Field TypestringDescriptionData space name used to create the data kit. Available in API version 61.0 and later. |
| deploymentOrder | Field TypestringDescriptionDeployment order of components that are added to the data kit. Available in API version 61.0 and later. |

## Declarative Metadata Sample Definition

The following is an example of a DataPackageKitDefinition component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<DataPackageKitDefinition xmlns="http://soap.sforce.com/2006/04/metadata">
    <developerName>SalesforceCRM</developerName>
    <isDeployed>false</isDeployed>
    <isEnabled>false</isEnabled>
    <masterLabel>SalesforceCRM</masterLabel>
    <versionNumber>1.0</versionNumber>
</DataPackageKitDefinition>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <fullName>SalesforceDataKit</fullName>
    <types>
        <members>SalesforceCRM</members>
        <name>DataPackageKitDefinition</name>
    </types>
    <types>
        <members>Admin</members>
        <name>Profile</name>
    </types>
    <version>53.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
