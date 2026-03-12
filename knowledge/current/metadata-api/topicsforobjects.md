---
title: "TopicsForObjects"
domain: metadata-api
topic: topicsforobjects
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:42.515Z
estimatedTokens: 425
keywords: [TopicsForObjects, ability, assign, topics, objects, remove, topic, assignments, File, Suffix, Directory, Location, Version, Declarative, Metadata]
---

# TopicsForObjects

> Represents the ability to assign topics to objects or
      to remove topic assignments.

# TopicsForObjects

Represents the ability to assign topics to objects or to remove topic assignments.

## File Suffix and Directory Location

TopicsForObjects components have the suffix .topicsForObjects and are stored in the topicsForObjects folder of the corresponding package directory.

## Version

TopicsForObjects components are available in API version 41.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableTopics | boolean | Required. When true, indicates whether users can assign topics or remove topic assignments. When false, users can’t assign or remove topics.Upon org creation, this value is true for the following objects:AccountAssetCampaignCaseContactContent DocumentContractEventLeadOpportunityOrderSolutionTaskFor all remaining standard objects and custom objects, the default is false. |
| entityApiName | string | Required. Indicates the object’s API name for enabling topics. |

## Declarative Metadata Sample Definition

The following is an example of a TopicsForObjects component.

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
<TopicsForObjects xmlns="http://soap.sforce.com/2006/04/metadata">
       <enableTopics>false</enableTopics>
       <entityApiName>Account</entityApiName>
</TopicsForObjects>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
<types>
<members>*</members>
<name>TopicsForObjects</name>
</types>
<version>41.0</version>
</Package>
```

## Related Topics

- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
