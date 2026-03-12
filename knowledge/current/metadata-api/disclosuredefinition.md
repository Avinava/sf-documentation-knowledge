---
title: "DisclosureDefinition"
domain: metadata-api
topic: disclosuredefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:38.609Z
estimatedTokens: 493
keywords: [DisclosureDefinition, disclosure, publisher, vendor, created, implemented, report, Parent, File, Suffix, Directory, Location, Version, Special, Access]
---

# DisclosureDefinition

> Represents information that defines a disclosure type,
			such as details of the publisher or vendor who created or implemented the
		report.

# DisclosureDefinition

Represents information that defines a disclosure type, such as details of the publisher or vendor who created or implemented the report.

## Parent Type

This type extends the [Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/metadata.htm "HTML (New Window)") metadata type and inherits its fullName field.

## File Suffix and Directory Location

DisclosureDefinition components have the suffix .disclosureDefinition and are stored in the disclosureDefinitions folder.

## Version

DisclosureDefinition components are available in API version 57.0 and later.

## Special Access Rules

The DisclosureAndComplianceHubAddOn license is required to access this object along with user access for the Disclosure Compliance Hub permission set license.

## Fields

| Field Name | Description |
| --- | --- |
| description | Field TypestringDescriptionThe description about the disclosure definition. |
| disclosureType | Field TypestringDescriptionRequired.The API name of the disclosure type associated with this definition. |
| isProtected | Field TypebooleanDescriptionAn auto-generated value that doesn’t impact the behavior of the metadata type. The default is false. |
| masterLabel | Field TypestringDescriptionRequired.A user-friendly name for DisclosureDefinition, which is defined when the DisclosureDefinition is created. |

## Declarative Metadata Sample Definition

The following is an example of a DisclosureDefinition component.

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
<DisclosureDefinition
	xmlns="http://soap.sforce.com/2006/04/metadata">
	<description>This is GRI Disclosure Definition</description>
	<disclosureType>disclstype10</disclosureType>
	<isProtected>false</isProtected>
	<masterLabel>GRI</masterLabel>
</DisclosureDefinition>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package
	xmlns="http://soap.sforce.com/2006/04/metadata">
	<fullName>Pkg</fullName>
	<types>
		<members>GRI</members>
		<name>DisclosureDefinition</name>
	</types>
	<types>
		<members>dt12</members>
		<name>DisclosureType</name>
	</types>
	<version>57.0</version>
</Package>
```
