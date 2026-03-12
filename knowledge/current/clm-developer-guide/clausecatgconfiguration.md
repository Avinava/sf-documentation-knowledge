---
title: "ClauseCatgConfiguration"
domain: clm-developer-guide
topic: clausecatgconfiguration
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:22.569Z
estimatedTokens: 496
keywords: [ClauseCatgConfiguration, configuration, library, category, user, their, document, Parent, File, Suffix, Directory, Location, Version, Special, Access, clause, Calls, Rules, Associated, Objects]
---

# ClauseCatgConfiguration

> Represents the configuration about the library
			category that can be used by a user in their response document.

# ClauseCatgConfiguration

Represents the configuration about the library category that can be used by a user in their response document.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=clm_developer_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends Metadata metadata type and inherits fullName field.

## File Suffix and Directory Location

ClauseCatgConfiguration components have the suffix .clauseCatgConfiguration and are stored in the clauseCatgConfigurations folder.

## Version

ClauseCatgConfiguration components are available in API version 57.0 and later.

## Special Access Rules

ClauseManagementAddOn license is required.

## Fields

| Field Name | Description |
| --- | --- |
| description | Field TypestringDescriptionThe description about the clause category configuration. |
| isProtected | Field TypebooleanDescriptionAn auto-generated value that doesn’t currently impact the behavior of the metadata type. |
| masterLabel | Field TypestringDescriptionRequired.A user-friendly name for ClauseCatgConfiguration, which is defined when the ClauseCatgConfiguration is created. |
| usageType | Field TypeClmCategoryUsageType (enumeration of type string)DescriptionRequired.The usage type of the clause category configuration.Possible values are:ContractClauseCategoryDisclosureCategory |

## Declarative Metadata Sample Definition

The following is an example of a ClauseCatgConfiguration component.

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
<ClauseCatgConfiguration
	xmlns="http://soap.sforce.com/2006/04/metadata">
	<description>This is how to add description for Contract Clause Category</description>
	<usageType>ContractClauseCategory</usageType>
	<isProtected>false</isProtected>
	<masterLabel>Contract Clause Cat</masterLabel>
</ClauseCatgConfiguration>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package
	xmlns="http://soap.sforce.com/2006/04/metadata">
	<fullName>Pkg</fullName>
	<types>
		<members>DisclosureCategory</members>
		<members>ContractClauseCategory</members>
		<name>ClauseCatgConfiguration</name>
	</types>
	<version>57.0</version>
</Package>
```
