---
title: "RecordAlertCategory"
domain: metadata-api
topic: recordalertcategory
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:54.293Z
keywords: [RecordAlertCategory, Important, Parent, Type, File, Suffix, Directory, Location, Version, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# RecordAlertCategory

# RecordAlertCategory

Represents a category to group and present record alerts.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the Metadata metadata type and inherits its fullName field.

## File Suffix and Directory Location

RecordAlertCategory components have the suffix recordAlertCategory and are stored in the recordAlertCategories folder.

## Version

RecordAlertCategory components are available in API version 54.0 and later.

## Fields

| Field Name | Description |
| --- | --- |
| description | Field TypestringDescriptionThe description of the record alert category. |
| masterLabel | Field TypestringDescriptionRequired.The user-interface name of the record alert category. |
| severity | Field TypestringDescriptionIndicates the degree of impact that an alert in this category can have.Possible Education Cloud values are:HighLowMediumPossible Financial Service Cloud values are:ErrorInfoMinorWarning |

## Declarative Metadata Sample Definition

The following is an example of a RecordAlertCategory component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").