---
title: "CallCoachingMediaProvider"
domain: metadata-api
topic: callcoachingmediaprovider
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:50.968Z
keywords: [CallCoachingMediaProvider, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# CallCoachingMediaProvider

# CallCoachingMediaProvider

Represents the CallCoachingMediaProvider configuration. Use CallCoachingMediaProvider to configure which providers of voice recordings that Einstein Conversation Insights can use. For example, Sales Dialer can provide voice recordings. Einstein Conversation Insights then stores and analyzes call recordings to surface insights and trends in customer conversations.This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

CallCoachingMediaProvider components have the suffix .callCoachingMediaProvider and are stored in the CallCoachingMediaProvider folder.

## Version

CallCoachingMediaProvider components are available in API version 49.0 and later.

## Special Access Rules

You must be a Sales Engagement customer to access this metadata type.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| isActive | boolean | Indicates whether the media provider can upload voice recordings (true) or not (false).Default value is false. |
| providerDescription | string | Description of the media provider. |
| providerName | string | Name of the media provider. |

## Declarative Metadata Sample Definition

The following is an example of a CallCoachingMediaProvider component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").