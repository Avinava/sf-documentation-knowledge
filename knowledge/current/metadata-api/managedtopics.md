---
title: "ManagedTopics"
domain: metadata-api
topic: managedtopics
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:53.444Z
keywords: [ManagedTopics, Note, File, Suffix, Directory, Location, Version, Fields, ManagedTopic, Declarative, Metadata, Sample, Definition, Usage, Wildcard, Support, Manifest]
---

# ManagedTopics

# ManagedTopics

Represents navigational and featured topics managed in an Experience Cloud site.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

The related Experience Cloud site must exist before you deploy managed topics. (This occurs automatically when deploying an entire org.)

## File Suffix and Directory Location

Components have the suffix managedTopics and are stored in the managedTopics folder. In that folder, you find separate files for each Experience Cloud site (for example, SiteNameA.managedTopics and SiteNameB.managedTopics).

## Version

ManagedTopics components are available in API version 32.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| ManagedTopic | ManagedTopic | Represents a specific navigational or featured topic. |

## ManagedTopic

| Field Name | Field Type | Description |
| --- | --- | --- |
| name | string | The topic name. |
| managedTopicType | string | The topic type: “Navigational” or “Featured” |
| topicDescription | string | An optional description of topic contents. This field is accessible only via the API; there is no corollary in the user interface. |
| parentName | string | The name of a parent topic for which this topic is a child. Child topics are accessible from the subtopics section of the parent topic page and their feeds are added to the parent topic feed.Only navigational topics support parent-child relationships. |
| position | int | The placement of this topic relative to others of the same type. The results differ depending on topic type:For top-level navigational topics, position arranges the Topics menu in the Experience Cloud site.For child navigational topics, it arranges sibling topics in the subtopics section.For featured topics, it arranges topic thumbnail images on the Experience Cloud site home page.Enter a number between 0 and 24. (The maximum amount of navigational or featured topics is 25.) |

## Declarative Metadata Sample Definition

The following example retrieves or deploys managed topics for all sites:

```

```

The following example shows a package.xml file referencing the ManagedTopics component:

```

```

The following example shows the ManagedTopics component itself:

```

```

## Usage

Managed topic images that are uploaded in API version 50.0 and later are stored as asset files. To migrate managed topic images that are uploaded in API version 50.0 and later, use the ContentAsset metadata type. To migrate managed topic images that were uploaded in API version 49.0 and earlier, use the Document metadata type.

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").