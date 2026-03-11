---
title: "PardotSettings"
domain: metadata-api
topic: pardotsettings
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:53.889Z
keywords: [PardotSettings, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# PardotSettings

# PardotSettings

Represents Marketing Cloud Account Engagement settings in your Salesforce org. Account Engagement, formerly known as Pardot, is a B2B marketing automation solution that helps you create meaningful connections, generate more pipeline, and close more deals. Use these settings to configure how Account Engagement collects and displays data.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

This object is stored in a file named Pardot.Settings in the settings folder of the corresponding package directory. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

PardotSettings is available in API version 47.0 and later.

## Special Access Rules

This metadata type is available only to orgs with Account Engagement.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| cdpEnablementStatus | string | The status of the enablement in Data 360 for the account engagement business unit. |
| enableAeDataConnector | boolean | Enable the Account Engagement Data 360 Connector for creating Account Engagement Data Streams. |
| enableAIOptimizedSendTime | boolean | Enable Einstein Send Time Optimization for sending Account Engagement emails. |
| enableB2bmaAppEnabled | boolean | Deprecated. |
| enableEngagementHistoryDashboards | boolean | Enable the Engagement History Dashboard and allow related Account Engagement data to be shared to campaign records in Salesforce by setting this value to true. The default value is false. If enableEnagementHistoryDashboards is disabled after being enabled, the Engagement History Dashboard is removed, but engagement data continues to be retained and updated. |
| enableEnhancedProspectCustomFieldsSync | boolean | Enable Object Sync to enhance with B2B Marketing Analytics or B2B Marketing Analytics Plus by setting this property to true. The default value is false. Available in API version 52.0 and later. |
| enablePardotAppV1Enabled | boolean | Enable the Account Engagement Lightning App by setting this property to true. The default value is false. |
| enablePardotEnabled | boolean | Deprecated. |
| enablePardotObjectSync | boolean | Deprecated. |
| enableProspectActivityDataset | boolean | Enable the Prospect and Activity Dataset for B2B Marketing Automation apps by setting this property to true. When enableProspectActivityDataset is true, the datasets take some time to populate. Depending on how much data and the type of licenses you have, enabling this preference can impact the account’s row limit for Analytics.If enableProspectActivityDataset is disabled after being enabled:The data that makes up the datasets is deleted.The Prospect and Activity Dataset in existing B2B Marketing Automation apps stops getting updates.The dataset isn’t available to add to new apps.When apps are reconfigured, the dataset is deleted.Requires that enableEnagementHistoryDashboards is set to true. |
| PardotEngageFreqSetting | boolean | Enable Einstein Engagement Frequency for sending Account Engagement emails. |

## Declarative Metadata Sample Definition

The following is an example of a PardotSettings component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").