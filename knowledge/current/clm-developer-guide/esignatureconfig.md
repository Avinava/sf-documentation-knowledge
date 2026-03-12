---
title: "ESignatureConfig"
domain: clm-developer-guide
topic: esignatureconfig
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:22.613Z
estimatedTokens: 537
keywords: [ESignatureConfig, settings, integrating, external, eSignature, providers, Parent, File, Suffix, Directory, Location, Version, Special, Access, Rules, API, version, 56.0, later, Calls]
---

# ESignatureConfig

> Represents the settings for integrating with external eSignature
			providers.

# ESignatureConfig

Represents the settings for integrating with external eSignature providers.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=clm_developer_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the Metadata metadata type and inherits its fullName field.

## File Suffix and Directory Location

ESignatureConfig components have the suffix .eSignatureConfig and are stored in the eSignatureConfigs folder.

## Version

ESignatureConfig components are available in API version 54.0 and later.

## Special Access Rules

## Fields

| Field Name | Description |
| --- | --- |
| configType | Field TypeConfigType (enumeration of type string)DescriptionRequired.Indicates the configured setting.Possible values are:AnchorStringCalloutTimeoutEnvelopesLastPollDateSignerRolesSyncFileSizeLimit |
| configValue | Field TypestringDescriptionRequired.Indicates the value of the configured setting. |
| description | Field TypestringDescriptionThe description for the configuration setting. |
| groupType | Field TypeConfigGroup (enumeration of type string)DescriptionThe description for the configuration setting.Possible values are:AnchorTabSettingCalloutConfigurationSetupEnvelopeEnvelopeObjectLimits |
| masterLabel | Field TypestringDescriptionRequired.Indicates the name of the setting. |
| vendor | Field TypeVendor (enumeration of type string)DescriptionRequired.The provider type to which the configuration setting belongs. Currently only DocuSign is supported. |

## Declarative Metadata Sample Definition

The following is an example of an ESignatureConfig component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see Deploying and Retrieving Metadata with the Zip File.

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<ESignatureConfig xmlns="http://soap.sforce.com/2006/04/metadata">
    <configType>AnchorString</configType>
    <groupType>AnchorTabSetting</groupType>
    <configValue>12345</configValue>
    <masterLabel>DocuSignAnchorString</masterLabel>
    <vendor>DocuSign</vendor>
    <description>testdescription</description>
</ESignatureConfig>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>ESignatureConfig</name>
    </types>
    <version>54.0</version>
</Package>
```
