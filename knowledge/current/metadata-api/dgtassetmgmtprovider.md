---
title: "DgtAssetMgmtProvider"
domain: metadata-api
topic: dgtassetmgmtprovider
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:38.513Z
estimatedTokens: 573
keywords: [DgtAssetMgmtProvider, external, content, providers, digital, asset, management, DAM, systems, integrate, Salesforce, CMS, combined, DgtAssetMgmtPrvdLghtCpnt, metadata]
---

# DgtAssetMgmtProvider

> Represents external content providers, such as digital asset
      management (DAM) systems, that integrate with Salesforce CMS. When combined with the
      DgtAssetMgmtPrvdLghtCpnt type, this metadata type enables organizations to configure external
      content systems as content providers within the Salesforce platform.

# DgtAssetMgmtProvider

Represents external content providers, such as digital asset management (DAM) systems, that integrate with Salesforce CMS. When combined with the DgtAssetMgmtPrvdLghtCpnt type, this metadata type enables organizations to configure external content systems as content providers within the Salesforce platform.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/metadata.htm) metadata type and inherits its fullName field.

## File Suffix and Directory Location

DgtAssetMgmtProvider components have the suffix .dgtAssetMgmtProvider and are stored in the dgtAssetMgmtProviders folder.

## Version

DgtAssetMgmtProvider components are available in API version 65.0 and later.

## Special Access Rules

There are no additional access requirements that are specific to this type.

## Fields

| Field Name | Description |
| --- | --- |
| icon | Field TypestringDescriptionStores a reference to the icon resource (typically a Lightning icon or custom image) that visually represents the external content provider in the user interface. |
| label | Field TypestringDescriptionRequired. Specifies the display label for the external content provider that users see when they select or view the provider. |
| masterLabel | Field TypestringDescriptionRequired. Specifies the primary identifier for the provider in metadata contexts and localization. |

## Declarative Metadata Sample Definition

The following is an example of a DgtAssetMgmtProvider component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based_zip_file.htm).

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<DgtAssetMgmtProvider xmlns="http://soap.sforce.com/2006/04/metadata">
    <icon>My icon</icon>
    <label>My text</label>
    <masterLabel>My text</masterLabel>
</DgtAssetMgmtProvider>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>DgtAssetMgmtProvider</name>
    </types>
    <version>65.0</version>
</Package>
```
