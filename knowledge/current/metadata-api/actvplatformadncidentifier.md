---
title: "ActvPlatformAdncIdentifier"
domain: metadata-api
topic: actvplatformadncidentifier
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:36.441Z
estimatedTokens: 650
keywords: [ActvPlatformAdncIdentifier, identifiers, activated, Email, Phone, Mobile, Advertiser, MAID, Over-the-top, OTT, Parent, File, Suffix, Directory, Location]
---

# ActvPlatformAdncIdentifier

> Represents the information about the identifiers to be
			activated, such as Email, Phone, Mobile Advertiser (MAID) ID, and Over-the-top (OTT)
			ID.

# ActvPlatformAdncIdentifier

Represents the information about the identifiers to be activated, such as Email, Phone, Mobile Advertiser (MAID) ID, and Over-the-top (OTT) ID.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

ActvPlatformAdncIdentifier components have the suffix .actvPlatformAdncIdentifier and are stored in the actvPlatformAdncIdentifiers folder.

## Version

ActvPlatformAdncIdentifier components are available in API version 54.0 and later.

## Special Access Rules

There are no additional access requirements that are specific to this type.

## Fields

| Field Name | Description |
| --- | --- |
| activationPlatform | Field TypestringDescriptionRequired.Reference to the ActivationPlatform metadata type.Reference to ActivationPlatform. |
| identifierHashMethod | Field TypeActivationPlatformIdentifierHashMethod (enumeration of type string)DescriptionThe hash method of the identifier type. The supported hash method for Email and Phone is SHA256. The supported hash method for MAID and OTT is NONE. |
| identifierType | Field TypeActivationPlatformIdentifierType (enumeration of type string)DescriptionRequired.The type of identifier to be activated.Valid values are:EMAILMAIDOTTPHONE |
| masterLabel | Field TypestringDescriptionRequired.The name of the identifier. |

## Declarative Metadata Sample Definition

The following is an example of an ActvPlatformAdncIdentifier component.

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
<ActvPlatformAdncIdentifier xmlns="http://soap.sforce.com/2006/04/metadata">
    <activationPlatform>APlatform</activationPlatform>
    <identifierHashMethod>SHA256</identifierHashMethod>
    <identifierType>EMAIL</identifierType>
    <masterLabel>EmailIdentifier</masterLabel>
</ActvPlatformAdncIdentifier>
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
        <members>EmailIdentifier</members>
        <name>ActvPlatformAdncIdentifier</name>
    </types> 
    <version>54.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip
					File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
