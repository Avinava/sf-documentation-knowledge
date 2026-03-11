---
title: "OpportunityScoreSettings"
domain: metadata-api
topic: opportunityscoresettings
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:53.825Z
keywords: [OpportunityScoreSettings, File, Suffix, Directory, Location, Version, Fields, Declarative, Metadata, Sample, Definition, Example, Package, Manifest, Wildcard, Support]
---

# OpportunityScoreSettings

# OpportunityScoreSettings

Represents an org’s Einstein Opportunity Scoring settings, such as whether or not Einstein Opportunity Scoring is enabled. Einstein Opportunity Scoring helps determine the likelihood of an opportunity being won. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

OpportunityScoreSettings values are stored in the OpportunityScore.settings file in the settings folder. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

OpportunityScoreSettings is available in API versions 49.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableOpportunityScoring | boolean | Indicates whether Einstein Opportunity Scoring is enabled (true) or not (false). The default value is false. |

## Declarative Metadata Sample Definition

The following is an example of the OpportunityScore.settings file:

```

```

## Example Package Manifest

The following is an example package manifest used to deploy or retrieve the OpportunityScore settings metadata:

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").