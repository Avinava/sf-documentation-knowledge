---
title: "IndustriesReferralMarketingSettings"
domain: referral-marketing
topic: industriesreferralmarketingsettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:35.848Z
estimatedTokens: 544
keywords: [IndustriesReferralMarketingSettings, settings, enable, capabilities, Referral, Marketing, Parent, File, Suffix, Directory, Location, Version, Declarative, Metadata, Sample]
---

# IndustriesReferralMarketingSettings

> Represents the settings to enable
   capabilities of Referral Marketing.

# IndustriesReferralMarketingSettings

Represents the settings to enable capabilities of Referral Marketing.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See Settings for more details.

## Parent Type

This type extends the Metadata metadata type and inherits its fullName field.

## File Suffix and Directory Location

IndustriesReferralMarketingSettings values are stored in a single file named IndustriesReferralMarketing.settings in the settings folder. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

IndustriesReferralMarketingSettings components are available in API version 59.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableMarketingCloudIntegration | boolean | Indicates whether the capability to integrate Referral Marketing with Marketing Cloud is enabled (true) or not (false). The default value is false. This field is available in API version 59.0 and later. |

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=referral_marketing)

#### Tip

To enable the capability that uses Data Cloud data graphs to query for Data Cloud segments that customers belong to, see the enableSegmentQueryByDataGraph field of the [IndustriesLoyaltySettings metadata type](https://developer.salesforce.com/docs/atlas.en-us.260.0.loyalty.meta/loyalty/industriesloyaltysettings_metadata_api.htm) in the Loyalty Management Developer Guide.

## Declarative Metadata Sample Definition

The following is an example of a IndustriesReferralMarketingSettings component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see Settings. For information about using the manifest file, see Deploying and Retrieving Metadata with the Zip File.

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<IndustriesReferralMarketingSettings
	xmlns="http://soap.sforce.com/2006/04/metadata">
	<enableMarketingCloudIntegration>false</enableMarketingCloudIntegration>
</IndustriesReferralMarketing>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package
	xmlns="http://soap.sforce.com/2006/04/metadata">
	<types>
		<members>IndustriesReferralMarketing</members>
		<name>Settings</name>
	</types>
	<version>59.0</version>
</Package>
```
