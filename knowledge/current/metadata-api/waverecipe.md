---
title: "WaveRecipe"
domain: metadata-api
topic: waverecipe
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:55.324Z
keywords: [WaveRecipe, Important, File, Suffix, Directory, Location, Version, Fields, Declarative, Metadata, Sample, Definition, Deleting, Component, Wildcard, Support, Manifest, Note]
---

# WaveRecipe

# WaveRecipe

Represents the WaveRecipe type in an Analytics application. A recipe is a saved set of steps to perform on a specific source dataset or connected data. This type extends the MetadataWithContent metadata type and inherits its content and fullName fields.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## File Suffix and Directory Location

WaveRecipe components have the suffix .wdpr and are stored in the wave folder.

## Version

WaveRecipe components are available in API version 41.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| application | string | The internal name of the application. |
| dataflow | string | Required. The dataflow ID for the Analytics recipe. |
| format | string | The format of the current recipe definition. Valid values are:R2 - recipes created with Data PrepR3 - recipes created with Data Prep (API version 49.0) |
| masterLabel | string | Required. The recipe name that appears in the user interface. |
| securityPredicate | string | A filter condition that defines row-level access to records in a recipe. |
| targetDatasetAlias | string | The name of the dataset the recipe saves data results into. |
| templateAssetSourceName | string | Links the recipe to the template used to create it. Null for assets not created from a template. |

## Declarative Metadata Sample Definition

The following is an example of a WaveRecipe component.

```

```

## Deleting a WaveRecipe Component

Use a simple destructiveChanges.xml file with only the WaveRecipe component declared. This deletes the WaveRecipe and any related WaveDataflow components. For more information, see [Delete Components from an Organization.](atlas.en-us.api_meta.meta/api_meta/meta_deploy_deleting_files.htm "To delete components, perform a deployment with the deploy() call by using a destructive changes manifest file that lists the components to remove from your organization. You can perform a deployment that only deletes components, or a deployment that deletes and adds components. In API version 33.0 and later, you can specify components to delete before and after other components are added or updated. In earlier API versions, if deletions and additions are specified for the same deployment, the deploy() call performs the deletions first.")

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

Use of the wildcard character doesn’t return the recipe’s associated dataflows.