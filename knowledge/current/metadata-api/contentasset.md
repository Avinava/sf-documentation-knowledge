---
title: "ContentAsset"
domain: metadata-api
topic: contentasset
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:51.255Z
keywords: [ContentAsset, Important, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, ContentAssetRelationships, ContentAssetLink, ContentAssetVersions, ContentAssetVersion, Declarative, Metadata, Sample, Definition, Wildcard]
---

# ContentAsset

# ContentAsset

Represents the metadata for creating an asset file. Asset files enable a Salesforce file to be used for org setup and configuration purposes. This type extends the MetadataWithContent metadata type and inherits its content and fullName fields.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## File Suffix and Directory Location

ContentAsset components have the suffix .asset and are stored in the contentassets folder.

## Version

ContentAsset components are available in API version 38.0 and later.

## Special Access Rules

The system prevents metadata retrieval if the total size of the asset’s file content exceeds 30 MB. All pre-existing limits for packaging apply to asset files.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| format | ContentAssetFormat (enumeration of type string) | Describes the format of the asset file. Valid values are:Original—A single asset file version.ZippedVersions—Contains multiple versions of the asset file. |
| isVisibleByExternalUsers | boolean | Indicates whether unauthenticated users can see the asset file (true) or not (false). If not specified, the default value is false. This field is available in API version 44.0 and later. |
| language | string | Required. The language of the asset file label. |
| masterLabel | string | Required. The label for the asset file record, which displays in Setup. |
| originNetwork | string | For deploys, the name of the Experience Cloud site the file is assigned upon creation. For retrievals, the name of the Experience Cloud site the file is assigned to appears in the field value. If null, the file wasn’t assigned to an Experience Cloud site. |
| relationships | ContentAssetRelationships | The list of ContentAssetLinks that describe whether the asset file can be shared with the org. |
| versions | ContentAssetVersions | Required. Captures basic information about the file version included the asset metadata. Typically the file has only one version. |

## ContentAssetRelationships

Represents the relationships between an asset file and the locations it's linked with.

| Field Name | Field Type | Description |
| --- | --- | --- |
| emailTemplate | ContentAsset[] | An array of email templates the content asset is related to. This field is available in API version 51.0 and later. |
| insightsApplication | ContentAsset[] | An array of the insights applications that use the content asset. This field is available in API version 39.0 and later. |
| network | ContentAsset[] | An array of networks that use the content asset. This field is available in API version 39.0 and later. |
| organization | ContentAsset[] | Stores information about sharing the asset file with the org. Maps to ContentDocumentLink. This field is available in API version 39.0 and later. |
| workspace | ContentAsset[] | An array of workspaces and libraries that own or share the content asset. This field is available in API version 39.0 and later. |

## ContentAssetLink

Represents a relationship link for an asset file, and includes details about the level of access for the link.

| Field Name | Field Type | Description |
| --- | --- | --- |
| access | ContentAssetAccess (enumeration of type string) | Required. The permission granted to the user of the shared file, determined by the permission the user already has. Valid values are:VIEWERCOLLABORATORINFERRED |
| isManagingWorkspace | boolean | Indicates whether the content asset resides in the workspace or not. When true, the content asset resides in the workspace. If not specified, the default value is false. This field is available in API version 39.0 and later. |
| name | string | Reserved for future use. |

## ContentAssetVersions

Represents information about all file versions included in the asset metadata.

| Field Name | Field Type | Description |
| --- | --- | --- |
| version | ContentAssetVersion[] | A list of file versions for the asset. |

## ContentAssetVersion

Represents information about one file version included in the asset metadata.

| Field Name | Field Type | Description |
| --- | --- | --- |
| number | string | Required. The version number. This field is based on, or sets, the ContentVersion. |
| pathOnClient | string | Required. Describes the original filename of the file. This field maps to ContentVersion.PathOnClient. It provides the data for the ContentVersion Title field. |
| zipEntry | string | If the asset file has more than one version, format is ZippedVersions. In this case, zipEntry is the name of the file within the zip. If the asset file has only one version, this field is empty. |

## Declarative Metadata Sample Definition

The following is an example of a ContentAsset component.

```

```

For assets that include just one version, the format field can be omitted or specified with the value as Original. File assets with more than one version have versions wrapped in a zip file.

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").