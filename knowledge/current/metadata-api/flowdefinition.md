---
title: "FlowDefinition"
domain: metadata-api
topic: flowdefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:52.731Z
keywords: [FlowDefinition, Important, Declarative, Metadata, File, Suffix, Directory, Location, Version, Wildcard, Support, Manifest]
---

# FlowDefinition

# FlowDefinition

Represents the flow definition’s description and active flow version number.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

In API version 44.0, we recommend upgrading your flows to flow metadata file names without version numbers and discontinue using the FlowDefinition object to activate or deactivate a flow. Then use the Flow object to activate or deactivate a flow. For more information, see [Upgrade Flow Files to API Version 44.0](atlas.en-us.api_meta.meta/api_meta/meta_visual_workflow.htm#md_flow_upgrade).

If you deploy with flow definitions, the active version numbers in the flow definitions override the status fields in the flows. For example, the active version number in the flow definition is version 3, and the latest version of the flow is version 4 with the status field as Active. After you deploy your flow, the active version is version 3.

## Declarative Metadata File Suffix and Directory Location

FlowDefinitions are stored in the flowDefinitions directory of the corresponding package directory. The file name matches the flow definition's unique full name, and the extension is .flowDefinition.

## Version

[FlowDefinition](#meta_flowdefinition "Represents the flow definition’s description and active flow version number.") is available in API version 34.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| activeVersionNumber | int | The version number of the active flow. |
| apiVersion | int | Reserved for internal use. |
| description | string | Description of the flow definition. |
| masterLabel | string | Label for the flow definition. In managed packages, this field inherits the flow’s active version name. To change this label from a subscriber’s org, edit the packaged flow name. |

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").