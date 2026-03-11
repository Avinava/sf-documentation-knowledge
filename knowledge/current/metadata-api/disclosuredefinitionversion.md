---
title: "DisclosureDefinitionVersion"
domain: metadata-api
topic: disclosuredefinitionversion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:52.001Z
keywords: [DisclosureDefinitionVersion, Parent, Type, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# DisclosureDefinitionVersion

# DisclosureDefinitionVersion

Represents the version information about the disclosure definition.

## Parent Type

This type extends the [Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/metadata.htm "HTML (New Window)") metadata type and inherits its fullName field.

## File Suffix and Directory Location

DisclosureDefinitionVersion components have the suffix .disclosureDefinitionVersion and are stored in the disclosureDefinitionVersions folder.

## Version

DisclosureDefinitionVersion components are available in API version 57.0 and later.

## Special Access Rules

The DisclosureAndComplianceHubAddOn and OmniStudioDesignerAddon licenses are required to access this object along with user access for the Disclosure Compliance Hub and OmniStudio Admin permission set licenses.

## Fields

| Field Name | Description |
| --- | --- |
| authoring​Mode | Field TypeAuthoringMode (enumeration of type string)DescriptionSpecifies the authoring mode used to launch the disclosure authoring experience.Possible values are:Microsoft 365 WordOmniscript and Microsoft 365 WordOmniscript Form |
| description | Field TypestringDescriptionThe description about the disclosure definition version. |
| disclosureDef​CurrVer | Field TypestringDescriptionFor internal use only. |
| disclosureDefinition | Field TypestringDescriptionRequired.The API name of the disclosure definition associated with this version. |
| documentTemplate​GlobalKey | Field TypestringDescriptionThe document template global key associated with the DOCX template for the disclosure definition version. |
| isActive | Field TypebooleanDescriptionIndicates whether the disclosure definition version is an active version (true) or not (false).The default value is false. |
| isCurrentVersion | Field TypebooleanDescriptionIndicates whether this is the current version of the disclosure definition specified in the disclosureDefinition field (true) or not (false).The default value is false. |
| isProtected | Field TypebooleanDescriptionAn auto-generated value that doesn’t impact the behavior of the metadata type. The default is false. |
| masterLabel | Field TypestringDescriptionRequired.A user-friendly name for DisclosureDefinitionVersion, which is defined when the DisclosureDefinitionVersion is created. |
| omniScriptCnfgApiName | Field TypestringDescriptionThe API name of the Omniscript configuration that's associated with the disclosure definition version. This field is required only when authoringModeisn’t Microsoft 365 Word. |
| omniScriptConfiguration | Field TypestringDescriptionThe ID of the Omniscript configuration record.NoteThe value of this field is automatically populated using the API name of the OmniScript configuration specified in the omniScriptCnfgApiName field. |
| versionNumber | Field TypestringDescriptionRequired.The version of the disclosure definition published by the author. |

## Declarative Metadata Sample Definition

The following is an example of a DisclosureDefinitionVersion component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based_zip_file.htm "HTML (New Window)").