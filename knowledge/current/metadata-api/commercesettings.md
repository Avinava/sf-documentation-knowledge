---
title: "CommerceSettings"
domain: metadata-api
topic: commercesettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:37.773Z
estimatedTokens: 1099
keywords: [CommerceSettings, Represents, settings, various, Commerce, features., Parent, Manifest, Access, File, Suffix, Directory, Location, Version, Special, Rules, Fields, Declarative, Metadata, Sample]
---

# CommerceSettings

> Represents settings for various Commerce features.

# CommerceSettings

Represents settings for various Commerce features.

## Parent Type and Manifest Access

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all the settings metadata types for the org are accessed using the “Settings” name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for more details.

## File Suffix and Directory Location

CommerceSettings values are stored in the Commerce.settings file in the settings folder. The .settings files are different from other named components, because there’s only one settings file for each settings component.

## Version

Commerce Settings are available in API version 50.0 and later.

## Special Access Rules

A B2B Commerce or D2C Commerce license and access to Commerce objects is required.

## Fields

| Field Name | Description |
| --- | --- |
| buyerGroupExtensibility | Field TypebooleanDescriptionIndicates whether Buyer Group Extensibility is enabled (true) or not (false). Available in API version 64.0 and later. |
| commerceAnalyticsEnabled | Field TypebooleanDescriptionIndicates whether Commerce Analytics is enabled (true) or not (false). |
| commerceAppEnabled | Field TypebooleanDescriptionIndicates whether Commerce App is enabled (true) or not (false). |
| commerceConciergeEnabled | Field TypebooleanDescriptionIndicates whether Commerce Concierge bots are enabled (true) or not (false). |
| commerceCopilotEcomEnabled | Field TypebooleanDescriptionIndicates whether Commerce Copilot is enabled (true) or not (false). |
| commerceDCSegmentEnabled | Field TypebooleanDescriptionIndicates whether the Data 360 segment integration is enabled (true) or not (false). |
| commerceDiscoveryExpansion | Field TypebooleanDescriptionIndicates whether the Commerce Discovery Expansion service is enabled (true) or not (false). |
| commerceEnabled | Field TypebooleanDescriptionIndicates whether Commerce is enabled (true) or not (false). |
| commerceNGPEnabled | Field TypebooleanDescriptionIndicates whether NGP (“Salesforce”) Pricing is enabled (true) or not (false). |
| commerceRLMSubs | Field TypebooleanDescriptionIndicates whether Commerce Revenue Lifecycle Management Subscriptions is enabled (true) or not (false). |
| generateInvPerSubscription | Field TypebooleanDescriptionIndicates whether a separate invoice is generated per subscription (true) or not (false). Available in API version 64.0 and later. |
| lowestUnitPriceTracking | Field TypebooleanDescriptionIndicates whether lowest unit price tracking (for EU customers) is enabled (true) or not (false). |
| messagingEngagementDataKit | Field TypebooleanDescriptionIndicates whether Message Engagement data kit is enabled (true) or not (false). Message Engagement data kit is a Data 360 data model object (DMO) for a user’s engagement with a marketing message. |

## Declarative Metadata Sample Definition

The following is an example of a CommerceSettings component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<CommerceSettings xmlns="http://soap.sforce.com/2006/04/metadata">
	<buyerGroupExtensibility>false</buyerGroupExtensibility>
	<commerceAnalyticsEnabled>false</commerceAnalyticsEnabled>
	<commerceAppEnabled>false</commerceAppEnabled>
	<commerceConciergeEnabled>false</commerceConciergeEnabled>
	<commerceCopilotEcomEnabled>false</commerceCopilotEcomEnabled>
	<commerceDCSegmentEnabled>false</commerceDCSegmentEnabled>
	<commerceDiscoveryExpansion>false</commerceDiscoveryExpansion>
	<commerceEnabled>false</commerceEnabled>
	<commerceNGPEnabled>false</commerceNGPEnabled>
	<commerceRLMSubs>false</commerceRLMSubs>
	<generateInvPerSubscription>false</generateInvPerSubscription>
	<lowestUnitPriceTracking>false</lowestUnitPriceTracking>
	<messagingEngagementDataKit>false</messagingEngagementDataKit>
</CommerceSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>Commerce</members>
        <name>Settings</name>
    </types>
    <version>64.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving Metadata with
					the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
