---
title: "ActvPlatformFieldValue"
domain: metadata-api
topic: actvplatformfieldvalue
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:36.637Z
estimatedTokens: 561
keywords: [ActvPlatformFieldValue, Represents, field, values, ActivationPlatformFields., Important, Parent, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, Declarative, Metadata, Sample, Definition]
---

# ActvPlatformFieldValue

> Represents the field values for the
			ActivationPlatformFields.

# ActvPlatformFieldValue

Represents the field values for the ActivationPlatformFields.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

ActvPlatformFieldValue components have the suffix .actvPlatformFieldValue and are stored in the actvPlatformFieldValues folder.

## Version

ActvPlatformFieldValue components are available in API version 54.0 and later.

## Special Access Rules

## Fields

| Field Name | Description |
| --- | --- |
| activationPlatformField | Field TypestringDescriptionRequired.Reference to the ActivationPlatform metadata type. |
| isDefault | Field TypebooleanDescriptionRequired.Indicates whether the value is default (true) or not (false). The default is false. Picklist isn’t supported in API version 54.0 |
| masterLabel | Field TypestringDescriptionRequired.The name of the field. |
| value | Field TypestringDescriptionThe value of activationPlatformField. |

## Declarative Metadata Sample Definition

The following is an example of an ActvPlatformFieldValue component.

Field with no value:

```

```

Field with value:

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<ActvPlatformFieldValue xmlns="http://soap.sforce.com/2006/04/metadata">
    <activationPlatformField>AccountIdField</activationPlatformField>
    <isDefault>true</isDefault>
    <masterLabel>AccountIdValue</masterLabel>
    <value>null</value>
</ActvPlatformFieldValue>
```

```
<ActvPlatformFieldValue xmlns="http://soap.sforce.com/2006/04/metadata">
    <activationPlatformField>AccountIdField</activationPlatformField>
    <isDefault>true</isDefault>
    <masterLabel>AccountIdValue</masterLabel>
    <value>1234</value>
</ActvPlatformFieldValue>
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
    <types>
        <members>AccountIdValue</members>
        <name>ActvPlatformFieldValue</name>
    </types>
    <version>54.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip
					File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
