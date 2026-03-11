---
title: "MailMergeSettings"
domain: metadata-api
topic: mailmergesettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:53.423Z
keywords: [MailMergeSettings, File, Suffix, Directory, Location, Version, Fields, Declarative, Metadata, Sample, Definition, Example, Package, Manifest, Wildcard, Support]
---

# MailMergeSettings

# MailMergeSettings

Represents the settings for Extended Mail Merge functionality.

## File Suffix and Directory Location

A MailMerge component file has the suffix MailMerge.settings and is stored in the settings directory.

## Version

MailMergeSettings components are available in API version 51.0 and later. Before API version 51.0, fields from MailMergeSettings were found within OrgSettings components.

## Fields

| Field Name | Field Type | Descriptions |
| --- | --- | --- |
|  |  |  |
| enableExtendedMailMerge | boolean | Indicates whether the Salesforce Classic product, Extended Mail Merge, is enabled (true) or not (false). Use Extended Mail Merge to generate Microsoft Word documents — such as form letters or address labels — from Salesforce records using Word document templates. Default value is false. |
| saveMailMergeDocsAsSalesforceDocs | boolean | Indicates whether mail-merged documents are saved to the My Personal Documents folder of the user who generated the mail merge. (true) or not (false). If (false), only documents over 3 MB are saved to the user’s documents folder. Smaller documents are emailed to the user. Default value is (false). |

## Declarative Metadata Sample Definition

The following is an example of a MailMergeSettings component.

```

```

## Example Package Manifest

The following is an example package manifest used to deploy or retrieve mail merge settings metadata for an organization:

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").