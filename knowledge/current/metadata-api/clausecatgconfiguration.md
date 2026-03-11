---
title: "ClauseCatgConfiguration"
domain: metadata-api
topic: clausecatgconfiguration
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:51.127Z
keywords: [ClauseCatgConfiguration, Parent, Type, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# ClauseCatgConfiguration

# ClauseCatgConfiguration

Represents the configuration about the clause category that can be used to categorize your disclosure and compliance reports from standardized disclosure templates in a response document.

## Parent Type

This type extends the [Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/metadata.htm "HTML (New Window)") metadata type and inherits its fullName field.

## File Suffix and Directory Location

ClauseCatgConfiguration components have the suffix .clauseCatgConfiguration and are stored in the clauseCatgConfigurations folder.

## Version

ClauseCatgConfiguration components are available in API version 57.0 and later.

## Special Access Rules

The ClauseManagementAddOn license is required to access this object along with user access for the Clause Designer User permission set license.

## Fields

| Field Name | Description |
| --- | --- |
| description | Field TypestringDescriptionThe description about the clause category configuration. |
| isProtected | Field TypebooleanDescriptionAn auto-generated value that doesn’t impact the behavior of the metadata type. The default is false. |
| masterLabel | Field TypestringDescriptionRequired.A user-friendly name for ClauseCatgConfiguration, which is defined when the ClauseCatgConfiguration is created. |
| usageType | Field TypeClmCategoryUsageTypeDescriptionRequired.The usage type of the clause category configuration.Possible values are:ContractClauseCategoryDisclosureCategory |

## Declarative Metadata Sample Definition

The following is an example of a ClauseCatgConfiguration component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based_zip_file.htm "HTML (New Window)").