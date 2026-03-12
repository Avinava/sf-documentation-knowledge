---
title: "DgtAssetMgmtPrvdLghtCpnt"
domain: metadata-api
topic: dgtassetmgmtprvdlghtcpnt
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:38.520Z
estimatedTokens: 734
keywords: [DgtAssetMgmtPrvdLghtCpnt, Lightning, web, component, configurations, external, content, providers, digital, asset, management, DAM, systems, metadata, integration]
---

# DgtAssetMgmtPrvdLghtCpnt

> Represents the Lightning web component configurations for
      external content providers, such as digital asset management (DAM) systems. This metadata type
      enables the integration of external content systems with Salesforce CMS using custom Lightning
      web components.

# DgtAssetMgmtPrvdLghtCpnt

Represents the Lightning web component configurations for external content providers, such as digital asset management (DAM) systems. This metadata type enables the integration of external content systems with Salesforce CMS using custom Lightning web components.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/metadata.htm) metadata type and inherits its fullName field.

## File Suffix and Directory Location

DgtAssetMgmtPrvdLghtCpnt components have the suffix .dgtAssetMgmtPrvdLghtCpnt and are stored in the dgtAssetMgmtPrvdLghtCpnts folder.

## Version

DgtAssetMgmtPrvdLghtCpnt components are available in API version 65.0 and later.

## Special Access Rules

There are no additional access requirements that are specific to this type.

## Fields

| Field Name | Description |
| --- | --- |
| dgtAssetMgmtProvider | Field TypestringDescriptionRequired. References the external content provider, represented by the DgtAssetMgmtProvider type, that this Lightning web component configuration supports. |
| lightningComponentBundle | Field TypestringDescriptionReferences the Lightning web component, represented by the LightningComponentBundle type, that implements the user interface for the external content provider in Salesforce CMS.The LightningComponentBundle must be deployed and available before you reference it. |
| masterLabel | Field TypestringDescriptionRequired. Specifies the display name of the Lightning web component configuration as it appears in the UI. |
| type | Field TypeDgtAssetMgmtPrvdLghtCpntType (enumeration of type string)DescriptionRequired. Specifies the type of external content provider Lightning web component that’s being configured. Possible values are:DIGITAL_ASSET_MANAGER: Represents a component that provides full management capabilities for external content providers, including browsing, searching, and selecting.NONE: Represents an undefined or default provider type. Indicates that no specific provider type is assigned. |

## Declarative Metadata Sample Definition

The following is an example of a DgtAssetMgmtPrvdLghtCpnt component.

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
<DgtAssetMgmtPrvdLghtCpnt xmlns="http://soap.sforce.com/2006/04/metadata">
    <dgtAssetMgmtProvider>External Content Provider</dgtAssetMgmtProvider>
    <lightningComponentBundle>myLightningComponentBundle</lightningComponentBundle>
    <masterLabel>myComponent</masterLabel>
    <type>DIGITAL_ASSET_MANAGER</type>
</DgtAssetMgmtPrvdLghtCpnt>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>DgtAssetMgmtPrvdLghtCpnt</name>
    </types>
    <version>65.0</version>
</Package>
```

## Related Topics

- DgtAssetMgmtProvider (atlas.en-us.api_meta.meta/api_meta/meta_dgtassetmgmtprovider.htm)
- LightningComponentBundle (atlas.en-us.api_meta.meta/api_meta/meta_lightningcomponentbundle.htm)
