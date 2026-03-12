---
title: "OrgSettings"
domain: metadata-api
topic: orgsettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:41.586Z
estimatedTokens: 790
keywords: [OrgSettings, Represents, settings, org-wide, functionality, isn’t, associated, any, specific, feature.This, extends, Metadata, metadata, inherits, its, fullName, field., File, Suffix, Directory]
---

# OrgSettings

> Represents the settings for org-wide functionality that
      isn’t associated with any specific feature.This type extends the Metadata metadata type and inherits its
                        fullName field.

# OrgSettings

Represents the settings for org-wide functionality that isn’t associated with any specific feature.This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

A OrgSettings component file has the suffix .settings and is stored in the settings directory. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

OrgSettings components are available in API version 46.0 and later.

Before API version 51.0, the fields enableExtendedMailMerge and saveMailMergeDocsAsSalesforceDocs were found within OrgSettings components. In API version 51.0 and later, those fields are found within [MailMergeSettings](atlas.en-us.api_meta.meta/api_meta/meta_mailmergesettings.htm "Represents the settings for Extended Mail Merge functionality.").

## Fields

| Field Name | Field Type | Descriptions |
| --- | --- | --- |
|  |  |  |
| enableCustomerSuccessPortal | boolean | Indicates whether Customer Portal is enabled (true) or not (false). |
| enableManageSelfServiceUsers | boolean | Indicates whether mass management of self-service users is enabled through the Self-Service Portal (true) or not (false). |
| enableOrgFeedSentimentAnalysis | boolean | Indicates whether feed sentiment analysis is enabled for the org (true) or not (false). |

## Declarative Metadata Sample Definition

The following is an example of a OrgSettings component.

```

```

## Example Package Manifest

The following is an example package manifest used to deploy or retrieve the org settings metadata for an organization:

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<OrgSettings xmlns="http://soap.sforce.com/2006/04/metadata" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <enableCustomerSuccessPortal>false</enableCustomerSuccessPortal>
    <enableMakeDeploymentsMandatory>true</enableMakeDeploymentsMandatory>
    <enableManageSelfServiceUsers>false</enableManageSelfServiceUsers>
    <enableOrgFeedSentimentAnalysis>false</enableOrgFeedSentimentAnalysis>
    <enableRADeploymentAttributeOnly>true</enableRADeploymentAttributeOnly>
    <enableResetDivisionOnLogin xsi:nil="true"/>
</OrgSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>Org</members>
        <name>Settings</name>
    </types>
    <version>47.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- MailMergeSettings (atlas.en-us.api_meta.meta/api_meta/meta_mailmergesettings.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
