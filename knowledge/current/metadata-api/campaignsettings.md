---
title: "CampaignSettings"
domain: metadata-api
topic: campaignsettings
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:37.296Z
estimatedTokens: 1174
keywords: [CampaignSettings, org’s, Campaign, Influence, Einstein, Attribution, Key, Accounts, member, settings, features, help, understand, how, campaigns]
---

# CampaignSettings

> Represents an org’s Campaign Influence,
			Einstein Attribution, Einstein Key Accounts, and campaign member settings. These
			features help you understand how your campaigns and accounts are affecting your
			opportunity pipeline.

# CampaignSettings

Represents an org’s Campaign Influence, Einstein Attribution, Einstein Key Accounts, and campaign member settings. These features help you understand how your campaigns and accounts are affecting your opportunity pipeline.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

CampaignSettings values are stored in the Campaign.settings file in the settings folder. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

CampaignSettings is available in API versions 48.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| aiAttributionTimeframe | int | Indicates the number of months between the opportunity creation date and an engagement activity, during which Einstein scans for influential campaigns. The value must be a multiple of three, up to 24. Available in API version 49.0 and later.This field supports Einstein Attribution. |
| enableAIAttribution | boolean | Indicates whether the Einstein Attribution feature is enabled (true) or not (false). The default value is false. Available in API version 49.0 and later. |
| enableAccountsAsCM | boolean | Indicates whether accounts can be used as campaign members (true) or not (false). The default value is false. Available in API version 51.0 and later. |
| enableAutoCampInfluenceDisabled | boolean | Indicates whether Salesforce creates Campaign Influence information (true) or not (false). enableCampaignInfluence2 must be false to use this setting.The default value is false. |
| enableB2bmaCampaignInfluence2 | boolean | Indicates whether your org can access campaign influence models from other systems, such as Pardot (true) or not (false). enableCampaignInfluence2 must be true to use this setting.The default value is false. |
| enableCampaignHistoryTrackEnabled | boolean | This read-only field is reserved for system use. |
| enableCampaignInfluence2 | boolean | Indicates whether Customizable Campaign Influence is enabled (true) or not (false). When true, Campaign Influence 1.0 is hidden from users and is no longer active.The default value is true. |
| enableCampaignMemberTWCF | boolean | This read-only field is reserved for system use. |
| enableEKAI | boolean | Indicates whether Einstein Key Accounts Identification is enabled (true) or not (false). The default value is false. Available in API version 53.0 and later. |
| enableOpportunityInfluence |  | Indicates whether Opportunity Influence campaign attribution is enabled (true) or not (false). When enabled, Opportunity Influence connects opportunity revenue to specific campaigns. The default value is false. Available with Marketing Cloud Growth and Advanced editions in API version 63.0 and higher. |
| enableSuppressNoValueCI2 | boolean | This read-only field is reserved for system use. |

## Declarative Metadata Sample Definition

The following is an example of the Campaign.settings file:

```

```

## Example Package Manifest

The following is an example package manifest used to deploy or retrieve the Campaign settings metadata:

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<CampaignSettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <enableCampaignInfluence2>true</enableCampaignInfluence2>
    <enableSuppressNoValueCI2>true</enableSuppressNoValueCI2>
    <enableCampaignHistoryTrackEnabled>true</enableCampaignHistoryTrackEnabled>
    <enableAutoCampInfluenceDisabled>true</enableAutoCampInfluenceDisabled>
    <enableCampaignMemberTWCF>true</enableCampaignMemberTWCF>
    <enableB2bmaCampaignInfluence2>true</enableB2bmaCampaignInfluence2>
    <enableAccountsAsCM>true</enableAccountsAsCM>
    <enableAIAttribution>true</enableAIAttribution>
    <aiAttributionTimeframe>9</aiAttributionTimeframe>
    <enableEKAI>true</enableEKAI>
</CampaignSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
	<types>
		<members>Campaign</members>
		<name>Settings</name>
	</types>
	<version>29.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
