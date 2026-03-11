---
title: "FlowCategory"
domain: metadata-api
topic: flowcategory
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:52.728Z
keywords: [FlowCategory, Important, File, Suffix, Directory, Location, Version, Fields, FlowCategoryItems, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# FlowCategory

# FlowCategory

Represents a list of flows that are grouped by category. Flows aren’t added directly to a Lightning Bolt Solution. Instead, add the category the flows are in to the Lightning Bolt Solution. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## File Suffix and Directory Location

FlowCategory components have the suffix .flowCategory and are stored in the flowCategories folder.

## Version

FlowCategory components are available in API version 43.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| description | string | The description of this flow category. |
| flowCategoryItems | FlowCategoryItems[] | The list of flows in this flow category. |
| masterLabel | string | Required. The label for this flow category, which appears in Setup. |

## FlowCategoryItems

Represents the list of flows in a flow category.

| Field Name | Field Type | Description |
| --- | --- | --- |
| flow | string | Required. The name of the flow. |

## Declarative Metadata Sample Definition

The following is an example of a FlowCategory component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").