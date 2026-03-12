---
title: "ActivationPlatformField"
domain: metadata-api
topic: activationplatformfield
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:36.417Z
estimatedTokens: 664
keywords: [ActivationPlatformField, ActivationPlatform, Parent, File, Suffix, Directory, Location, Version, Special, Access, Rules, Declarative, Metadata, Sample, Definition]
---

# ActivationPlatformField

> Represents the information about the fields used in
			ActivationPlatform.

# ActivationPlatformField

Represents the information about the fields used in ActivationPlatform.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

ActivationPlatformField components have the suffix .activationPlatformField and are stored in the activationPlatformFields folder.

## Version

ActivationPlatformField components are available in API version 54.0 and later.

## Special Access Rules

There are no additional access requirements that are specific to this type.

## Fields

| Field Name | Description |
| --- | --- |
| activationPlatform | Field TypestringDescriptionRequired.Reference to the ActivationPlatform metadata type. |
| helpText | Field TypestringDescriptionInformation about ActivationPlatformField. |
| isHidden | Field TypebooleanDescriptionRequired.Indicates whether ActivationPlatformField can be overridden by marketer (false) or not (true). The default is false. Field can’t be overridden by marketer when set to true. |
| isRequired | Field TypebooleanDescriptionRequired.Indicates whether this ActivationPlatformField is required (true) or not (false). The default is false. |
| masterLabel | Field TypestringDescriptionRequired.The name of the ActivationPlaformField. |
| type | Field TypeActivationPlatformFieldDataType (enumeration of type string)DescriptionRepresents the datatype of the field.Valid value is:Text |

## Declarative Metadata Sample Definition

The following is an example of an ActivationPlatformField component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<ActivationPlatformField xmlns="http://soap.sforce.com/2006/04/metadata">
    <activationPlatform>APlatform</activationPlatform>
    <isHidden>false</isHidden>
    <isRequired>true</isRequired>
    <masterLabel>AccountId</masterLabel>
</ActivationPlatformField>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <fullName>MyActivationPlatform</fullName>
    <types>
        <members>APlatform</members>
        <name>ActivationPlatform</name>
    </types>
    <types>
        <members>AccountIdField</members>
        <name>ActivationPlatformField</name>
    </types>
    <version>54.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip
					File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
