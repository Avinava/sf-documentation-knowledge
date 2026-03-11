---
title: "SiteDotCom"
domain: metadata-api
topic: sitedotcom
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:54.679Z
keywords: [SiteDotCom, Declarative, Metadata, File, Suffix, Directory, Location, Note, Version, Fields, Sample, Definition, Usage, Wildcard, Support, Manifest]
---

# SiteDotCom

# SiteDotCom

Represents a site for deployment.

SiteDotCom extends the [MetadataWithContent](atlas.en-us.api_meta.meta/api_meta/meta_metadatawithcontent.htm "MetadataWithContent is the base type for all metadata types that contain content, such as documents or email templates. It extends Metadata. You can’t edit this object.") type and inherits its fullName and content fields.

## Declarative Metadata File Suffix and Directory Location

SiteDotCom components are stored in the siteDotComSites directory of the corresponding package directory.

The file name for the metadata .xml file is \[sitename\]1.site-meta.xml. The file name for the site file is \[sitename\]1.site.

When a Lightning site is created, two sites are made behind the scenes: CustomSite (of type ChatterNetwork) and SiteDotComSite (of type ChatterNetworkPicasso). These sites are named, respectively, *<site\_name>* and *<site\_name>1*. The corresponding MDAPI file names are *<site\_name>.*site-meta.xml and *<site\_name>*1.site-meta.xml. 1 is appended to the SiteDotComSite type to keep the name unique from the corresponding CustomSite site.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

There is a file size limitation when using the Metadata API to deploy a site from sandbox to production. The assets in the .site file can't be larger than 40 MB. The site gets created, but the assets show in the new site as broken. To fix the assets, export the assets from the sandbox environment separately and then import them into your new site.

## Version

SiteDotCom components are available in API version 30.0 and later.

## Fields

| Field | Field Type | Description |
| --- | --- | --- |
| label | string | The name of the site that you’re deploying. |
| siteType | (enumeration of type string) | Required. Identifies whether the site is a ChatterNetworkPicasso site for Experience Cloud Sites, or a Siteforce site for Site.com sites. |

## Declarative Metadata Sample Definition

Here are two examples of a SiteDotCom XML definition.

```

```

## Usage

You can only deploy a .site file retrieved in Summer ’19 or later. Older files aren’t supported.

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").