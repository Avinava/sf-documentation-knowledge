---
title: "IndustriesLoyaltySettings"
domain: metadata-api
topic: industriesloyaltysettings
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:36.263Z
estimatedTokens: 2048
keywords: [IndustriesLoyaltySettings, settings, enable, capabilities, Loyalty, Management, File, Suffix, Directory, Location, Version, Declarative, Metadata, Sample, Definition]
---

# IndustriesLoyaltySettings

> Represents the settings to enable
      capabilities of Loyalty Management.

# IndustriesLoyaltySettings

Represents the settings to enable capabilities of Loyalty Management.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for more details.

## File Suffix and Directory Location

IndustriesLoyaltySettings values are stored in a single file named IndustriesLoyalty.settings in the settings folder. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

IndustriesLoyaltySettings components are available in API version 53.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableAutomaticMemberTierAssessmentSelection | boolean | Indicates whether the capability that automatically selects members as eligible for tier assessment when members’ qualifying points balance changes is enabled (true) or disabled (false) for your org. The default value is false. This field is available in API version 58.0 or later. |
| enableAutomaticVoucherCodeGeneration | boolean | Indicates whether the capability to automatically generate voucher codes is enabled (true) or not (false). This field is available in API version 57.0 and later. |
| enableConfigureClubs | boolean | Indicates whether the capability to create and manage clubs is enabled (true) or not (false). The default value is false. This field is available in API version 64.0 or later. |
| enableFixedTypeNQPAggregation | boolean | Indicates whether the capability to aggregate and expire fixed type non-qualifying points in batches is enabled (true) or disabled (false) for your org. The default value is true. This field is available in API version 54.0 or later. |
| enableLoyaltyApiAccessForExternalSiteUsers | boolean | Indicates whether the capability that allows customers to join and leave loyalty programs and allows members to join and opt out of promotions from Experience Cloud sites is enabled (true) or disabled (false) for your org. The default value is false. This field is available in API version 58.0 or later. |
| enableLoyaltyGenerativeAi | boolean | Indicates whether the Einstein AI capabilities of Loyalty Management are enabled (true) or not (false). The default value is false. This field is available in API version 62.0 or later. |
| enableLoyaltyRedeemedPointsExpirationInfoPref | boolean | Indicates whether the capability that automatically calculates and adds the expiration date of points credited back to members for canceled redemptions is enabled (true) or disabled (false) for your org. The default value is true. This field is available in API version 55.0 or later. |
| enableLoyaltyRulesVerifyCdpMemberSegment | boolean | Indicates whether the capability that allows:Loyalty program process rules to process transaction journals only when the loyalty program member is part of a Data Cloud segment associated with the rule's promotion is enabled (true) or disabled (false) for your org.The Promotion Eligibility component on Loyalty Program Member record page to categorize promotions based on whether the member belongs to the promotion’s campaign or Data Cloud segment is enabled (true) or disabled (false) for your org.The default value is false. This field is available in API version 55.0 or later. |
| enableLoyaltyServiceExcellence | boolean | Indicates whether Service Console for Loyalty Management is enabled (true) or disabled (false) for your org. The default value is false. This field is available in API version 57.0 or later. |
| enableNegativePointBalance | boolean | Indicates whether the capability that lets loyalty program members to hold negative point balances for non-qualifying currencies is enabled (true) or disabled (false) for your org. The default value is false. This field is available in API version 61.0 or later. |
| enableNonQualifyingPointsConsolidation | boolean | Indicates whether the capability to aggregate and expire fixed type non-qualifying points in real time is enabled (true) or disabled (false) for your org. The default value is true. This field is available in API version 58.0 or later. |
| enablePointsLifecycleTracking | boolean | Indicates whether the capability that allows the company to trace how members redeem their accrued fixed-model non-qualifying points is enabled (true) or disabled (false) for your org. The default value is false. This field is available in API version 62.0 or later. |
| enablePromSetupProcRuleStatusInheritDplymt | boolean | Indicates whether the capability, which allows Promotion Setup processes and rules to be deployed to target orgs in the same status as the source orgs when using the LoyaltyProgramSetup metadata type, is enabled (true) or disabled (false). The default value is false. This field is available in API version 62.0 or later. |
| enableQPRealTimePointBalance | boolean | Indicates whether the real time qualifying points balance update capability is enabled (true) or disabled (false) for your org. The default value is true. This field is available in API version 55.0 or later. |
| enableNQPRealTimePointBalance | boolean | Indicates whether the capability to update the non-qualifying point balance of members in real time is enabled (true) or disabled (false) for your org. The default value is true. |
| enableSegmentQueryApiMultipleDataSpace | boolean | Indicates whether the capability that allows Query API to verify the Data Cloud segments that customers are part of across multiple data spaces is enabled (true) or not (false). The default value is false. This field is available in API version 64.0 or later. |
| enableSegmentQueryByDataGraph | boolean | Indicates whether the capability, which uses Data Cloud data graphs to query for Data Cloud segments that customers are part of, is enabled (true) or disabled (false). The default value is false. This field is available in API version 62.0 or later. |
| enableTransferPointsToMemberGroupsRealtime | boolean | Indicates whether the capability that automates real-time transfer of a member's non-qualifying points to associated group is enabled (true) or not (false). The default value is false. This field is available in API version 64.0 or later. |
| enableUsePromPtyUsageForEngmtTrail | boolean | Indicates whether the capability that uses Promotion Party Usage records to store attributes for Engagement Trail promotions is enabled (true) or not (false). The default value is true. This field is available in API version 64.0 or later. |

## Declarative Metadata Sample Definition

The following is an example of a IndustriesLoyaltySettings component.

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
<IndustriesLoyaltySettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <enableNQPRealTimePointBalance>true</enableNQPRealTimePointBalance>
    <enableFixedTypeNQPAggregation>true</enableFixedTypeNQPAggregation>
    <enableQPRealTimePointBalance>true</enableQPRealTimePointBalance>
    <enableLoyaltyRulesVerifyCdpMemberSegment>false</enableLoyaltyRulesVerifyCdpMemberSegment>
    <enableLoyaltyRedeemedPointsExpirationInfoPref>true</enableLoyaltyRedeemedPointsExpirationInfoPref>
    <enableLoyaltyServiceExcellence>true</enableLoyaltyServiceExcellence>
    <enableAutomaticVoucherCodeGeneration>true</enableAutomaticVoucherCodeGeneration>
    <enableLoyaltyApiAccessForExternalSiteUsers>false</enableLoyaltyApiAccessForExternalSiteUsers>
    <enableAutomaticMemberTierAssessmentSelection>false</enableAutomaticMemberTierAssessmentSelection>
    <enableNonQualifyingPointsConsolidation>false</enableNonQualifyingPointsConsolidation>
    <enablePointsLifecycleTracking>false</enablePointsLifecycleTracking>
    <enableNegativePointBalance>false</enableNegativePointBalance>
    <enableSegmentQueryByDataGraph>false</enableSegmentQueryByDataGraph>
    <enablePromSetupProcRuleStatusInheritDplymt>false</enablePromSetupProcRuleStatusInheritDplymt>
    <enableLoyaltyGenerativeAi>false</enableLoyaltyGenerativeAi>
    <enableTransferPointsToMemberGroupsRealtime>false</enableTransferPointsToMemberGroupsRealtime>
    <enableUsePromPtyUsageForEngmtTrail>false</enableUsePromPtyUsageForEngmtTrail>
    <enableSegmentQueryApiMultipleDataSpace>true</enableSegmentQueryApiMultipleDataSpace>
    <enableConfigureClubs>true</enableConfigureClubs>
</IndustriesLoyaltySettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
  <types>
    <members>IndustriesLoyalty</members>
    <name>Settings</name>
  </types>
  <version>53.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
