---
title: "ProcessFlowMigration"
domain: metadata-api
topic: processflowmigration
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:54.049Z
keywords: [ProcessFlowMigration, Important, Parent, Type, Version, Special, Access, Rules, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest, File]
---

# ProcessFlowMigration

# ProcessFlowMigration

Represents a process's migrated criteria and the resulting migrated flow.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/metadata.htm) metadata type and inherits its fullName field.

## Version

ProcessFlowMigration components are available in API version 58.0 and later.

## Special Access Rules

## Fields

| Field Name | Description |
| --- | --- |
| destinationFlowDefinition | Field TypestringDescriptionRequired. The ID of the resulting migrated flow. |
| destinationFlowVersion | Field TypestringDescriptionRequired. The version ID of the migrated flow. |
| developerName | Field TypestringDescriptionRequired. The unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. |
| masterLabel | Field TypestringDescriptionRequired. The label for the ProcessFlowMigration. |
| migratedCriteriaLabel | Field TypestringDescriptionThe label of the criteria that was migrated. |
| migratedCriteriaName | Field TypestringDescriptionThe name of the criteria that was migrated. |
| processVersion | Field TypestringDescriptionRequired. The version ID of the originating process. |

## Declarative Metadata Sample Definition

The following is an example of a ProcessFlowMigration component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/file_based_zip_file.htm).