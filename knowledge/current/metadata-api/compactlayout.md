---
title: "CompactLayout"
domain: metadata-api
topic: compactlayout
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:51.206Z
keywords: [CompactLayout, File, Suffix, Directory, Location, Version, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# CompactLayout

# CompactLayout

Represents the metadata associated with a compact layout. This type extends the Metadata metadata type and inherits its fullName field.

A compact layout displays a record’s key fields at a glance in the Salesforce mobile app, Lightning Experience, and in the Outlook and Gmail integrations.

Compact layouts support all field types except:

-   text area
-   long text area
-   rich text area
-   multi-select picklist

For more information on compact layouts, see [Compact Layouts](https://help.salesforce.com/s/articleView?id=platform.compact_layout_overview.htm&type=5&language=en_US "HTML (New Window)") in the Salesforce Help.

## File Suffix and Directory Location

Compact layouts are defined as part of the custom object, standard object, or external object definition. See [CustomObject](atlas.en-us.api_meta.meta/api_meta/customobject.htm "Represents a custom object that stores data unique to your org or an external object that maps to data stored outside your org.") for more information.

## Version

CompactLayout components are available in API version 29.0 and later. CompactLayout components are available for external objects in API version 42.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| fields | string | The fields assigned to the compact layout. Their order represents the prioritization given to them when defining the compact layout. |
| label | string | Label that represents the object throughout the Salesforce user interface. |

## Declarative Metadata Sample Definition

The following is an example of a CompactLayout component:

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

-   [← Previous](atlas.en-us.api_meta.meta/api_meta/meta_businessprocess.htm "BusinessProcess")
-   [Next →](atlas.en-us.api_meta.meta/api_meta/customfield.htm "CustomField")