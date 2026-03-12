---
title: "DisclosureType"
domain: metadata-api
topic: disclosuretype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:38.625Z
estimatedTokens: 532
keywords: [DisclosureType, disclosures, individual, organization, associated, metadata, Parent, File, Suffix, Directory, Location, Version, Special, Access, Rules]
---

# DisclosureType

> Represents the types of disclosures that are done by an
			individual or an organization and the associated metadata.

# DisclosureType

Represents the types of disclosures that are done by an individual or an organization and the associated metadata.

## Parent Type

This type extends the [Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/metadata.htm "HTML (New Window)") metadata type and inherits its fullName field.

## File Suffix and Directory Location

DisclosureType components have the suffix .disclosureType and are stored in the disclosureTypes folder.

## Version

DisclosureType components are available in API version 57.0 and later.

## Special Access Rules

The DisclosureAndComplianceHubAddOn license is required to access this object along with user access for the Disclosure Compliance Hub permission set license.

## Fields

| Field Name | Description |
| --- | --- |
| description | Field TypestringDescriptionThe description about the disclosure type. |
| disclosureBodyLogo | Field TypestringDescriptionThe logo ID of the standard body to which an individual or a company is making a disclosure. |
| disclosureBodyUrl | Field TypestringDescriptionThe URL of the disclosure standard body. |
| disclosureCategory | Field TypestringDescriptionRequired.The name of the clause category that's used for disclosure. |
| isProtected | Field TypebooleanDescriptionAn auto-generated value that doesn’t impact the behavior of the metadata type. The default is false. |
| masterLabel | Field TypestringDescriptionRequired.A user-friendly name for DisclosureType, which is defined when the DisclosureType is created. |

## Declarative Metadata Sample Definition

The following is an example of a DisclosureType component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based_zip_file.htm "HTML (New Window)").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<DisclosureType
	xmlns="http://soap.sforce.com/2006/04/metadata">
	<description>This is ESG Disclosure Type</description>
	<disclosureBodyLogo>asdf</disclosureBodyLogo>
	<disclosureCategory>EnvSocGvnc</disclosureCategory>
	<disclosureBodyUrl>disclosure body url</disclosureBodyUrl>
	<isProtected>false</isProtected>
	<masterLabel>ESG</masterLabel>
</DisclosureType>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package
	xmlns="http://soap.sforce.com/2006/04/metadata">
	<fullName>Pkg</fullName>
	<types>
		<members>ESG</members>
		<name>DisclosureType</name>
	</types>
	<types>
		<name>StaticResource</name>
		<members>asdf</members>
	</types>
	<version>57.0</version>
</Package>
```
