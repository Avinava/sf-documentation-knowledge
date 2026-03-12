---
title: "AnalyticsWorkspace"
domain: metadata-api
topic: analyticsworkspace
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:36.692Z
estimatedTokens: 884
keywords: [AnalyticsWorkspace, Tableau, workspace, Parent, File, Suffix, Directory, Location, Version, Limits, AnalyticsWorkspaceAsset, Declarative, Metadata, Sample, Definition]
---

# AnalyticsWorkspace

> Represents a Tableau Next workspace.

# AnalyticsWorkspace

Represents a Tableau Next workspace.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

AnalyticsWorkspace components have the suffix .analtyicsWorkspace and are stored in the analyticsWorkspaces folder.

## Version

AnalyticsWorkspace components are available in API version 64 and later.

## Limits

| Definition | Limit |
| --- | --- |
| The maximum number of AnalyticsWorkspace components in a single deploy operation. | 50 |
| The maximum number of AnalyticsWorkspace components in a single retrieve operation. | 100 |
| The maximum number of AnalyticsWorkspace components across all deploy operations in a 24-hour window. | 100 |
| The maximum number of AnalyticsWorkspace components across all retrieve operations in a 24-hour window. | 200 |

## Fields

| Field Name | Description |
| --- | --- |
| description | Field TypestringDescriptionThe workspace description. |
| masterLabel | Field TypestringDescriptionRequired.The name of the workspace. |
| workspaceAssetRelationships | Field TypeAnalyticsWorkspaceAsset[]DescriptionThe workspace assets associated with the workspace. A workspace has 1 or more assets. |

## AnalyticsWorkspaceAsset

Represents a Tableau Next analytics asset.

| Field Name | Description |
| --- | --- |
| asset | Field TypestringDescriptionRequired.The name of workspace asset |
| assetType | Field TypeAnalyticsWorkspaceAssetType (enumeration of type string)DescriptionRequired.The workspace asset typeValues are:AnalyticsDashboard (Tableau Next Dashboard)AnalyticsVisualization (Tableau Next Visualization)MktCalculatedInsightObject (Data 360 Calculated Insight Object)MktDataConnection (Data 360 Connection)MktDataLakeObject (Data 360 Data Lake Object)MktDataModelObject (Data 360 Data Model Object)SemanticModel (Semantic Model) |
| assetUsageType | Field TypeAnalyticsWorkspaceAssetUsageType (enumeration of type string)DescriptionRequired.The workspace asset usage type.Values are:CreatedReferenced |
| metadataSourceType | Field TypeAnalyticsWorkspaceAssetMetadataSourceType (enumeration of type string)DescriptionThe workspace asset metadata source type.Values are:PromotedReused |
| workspace | Field TypestringDescriptionRequired.The workspace the asset belongs to. |

## Declarative Metadata Sample Definition

The following is an example of an AnalyticsWorkspace component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
  <AnalyticsWorkspace xmlns="http://soap.sforce.com/2006/04/metadata">
  <description>An example for Analytics Workspace</description>
  <masterLabel>Analytics Workspace</masterLabel>
  <workspaceAssetRelationships>
  	  <asset>My Test Dashboard</asset>
  	  <assetType>AnalyticsDashboard</assetType>
  	  <assetUsageType>Created</assetUsageType>
  	  <metadataSourceType>Promoted</metadataSourceType>
  	  <workspace>Analytics Workspace</workspace>
  </workspaceAssetRelationships>
</AnalyticsWorkspace>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
  <types>
    <members>*</members>
    <name>AnalyticsWorkspace</name>
  </types>
  <version>64.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
