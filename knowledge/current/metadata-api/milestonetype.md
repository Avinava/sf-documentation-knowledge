---
title: "MilestoneType"
domain: metadata-api
topic: milestonetype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:53.560Z
keywords: [MilestoneType, File, Suffix, Directory, Location, Version, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# MilestoneType

# MilestoneType

Represents the name and description of a milestone, which you can use in an entitlement process to track important steps in cases.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

Milestone types are stored in the milestoneTypes directory of the corresponding package directory. The extension is .milestoneType.

## Version

[MilestoneType](#meta_milestonetype "Represents the name and description of a milestone, which you can use in an entitlement process to track important steps in cases.") is available in API version 27.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| description | string | The description of the milestone. |
| RecurrenceType | MilestoneTypeRecurrenceType (enumeration of type string) | The type of recurrence for the milestone. Available in API version 29.0 and later. Valid values are:none—Specifies no recurrence for the milestone. The milestone occurs only one time until the entitlement process exits.recursIndependently—Specifies independent recurrence for the milestone.recursChained—Specifies sequential recurrence for the milestone. |

## Declarative Metadata Sample Definition

Here’s a sample milestone type.

```

```

And, here’s the sample package.xml file that references the MilestoneType component definition:

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").