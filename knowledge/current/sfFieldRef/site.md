---
title: "Site"
domain: sfFieldRef
topic: site
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:14.113Z
estimatedTokens: 1094
keywords: [Site, website, integrated, org, API, version, 16.0, later]
---

# Site

> Represents a public website that is integrated with an org. This object is available in API version 16.0 and later.

# Site

Represents a public website that is integrated with an org. This object is available in API version 16.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [Site](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_site.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AdminId | User ID | reference |  | 18 |  |  |
| AnalyticsTrackingCode | Analytics Tracking Code | string |  | 40 |  |  |
| ClickjackProtectionLevel | Clickjack Protection Level | picklist |  | 40 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DailyBandwidthLimit | Daily Bandwidth Limit (MB) | int | 9 |  |  |  |
| DailyBandwidthUsed | Daily Bandwidth Used | int | 9 |  |  |  |
| DailyRequestTimeLimit | Daily Request Time Limit (min) | int | 9 |  |  |  |
| DailyRequestTimeUsed | Daily Request Time Used | int | 9 |  |  |  |
| Description | Site Description | textarea |  | 1000 |  |  |
| GuestRecordDefaultOwnerId | User ID | reference |  | 18 |  |  |
| GuestUserId | User ID | reference |  | 18 |  |  |
| Id | Site ID | id |  | 18 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Site Label | string |  | 255 |  |  |
| MonthlyPageViewsEntitlement | Monthly Page Views Allowed | int | 9 |  |  |  |
| Name | Site Name | string |  | 80 |  |  |
| OptionsAllowGuestPaymentsApi | Guest Access to the Payments API | boolean |  |  |  |  |
| OptionsAllowGuestSupportApi | Guest Access to the Support API | boolean |  |  |  |  |
| OptionsAllowHomePage | Enable Standard Home Page | boolean |  |  |  |  |
| OptionsAllowStandardAnswersPages | Enable Standard Answers Pages | boolean |  |  |  |  |
| OptionsAllowStandardIdeasPages | Enable Standard Ideas Pages | boolean |  |  |  |  |
| OptionsAllowStandardLookups | Enable Standard Search Pages | boolean |  |  |  |  |
| OptionsAllowStandardPortalPages | Allow Access to Standard Salesforce Pages | boolean |  |  |  |  |
| OptionsAllowStandardSearch | Enable Standard Lookup Pages | boolean |  |  |  |  |
| OptionsBrowserXssProtection | Enable Browser Cross Site Scripting Protection | boolean |  |  |  |  |
| OptionsCachePublicVfPagesInProxies | Cache public Visualforce pages | boolean |  |  |  |  |
| OptionsContentSniffingProtection | Enable Content Sniffing Protection | boolean |  |  |  |  |
| OptionsCookieConsent | Enforce Cookie Consent | boolean |  |  |  |  |
| OptionsEnableFeeds | Enable Feeds | boolean |  |  |  |  |
| OptionsHasStoredPathPrefix | HasStoredPathPrefix | boolean |  |  |  |  |
| OptionsIsSiteConsentBannerIntegrationEnabled | IsSiteConsentBannerIntegrationEnabled | boolean |  |  |  |  |
| OptionsIsSiteConsentBannerIntegrationMigrated | isSiteConsentBannerIntegrationMigrated | boolean |  |  |  |  |
| OptionsIsSiteDataCloudIntegrationEnabled | IsSiteDataCloudIntegrationEnabled | boolean |  |  |  |  |
| OptionsIsSiteDataCloudIntegrationMigrated | isSiteDataCloudIntegrationMigrated | boolean |  |  |  |  |
| OptionsIsSiteGAIntegrationEnabled | IsSiteGAIntegrationEnabled | boolean |  |  |  |  |
| OptionsIsSiteGAIntegrationMigrated | isSiteGAIntegrationMigrated | boolean |  |  |  |  |
| OptionsIsSiteGAIntegrationMigratedV2 | isSiteGAIntegrationMigratedV2 | boolean |  |  |  |  |
| OptionsIsSiteGRecaptchaIntegrationEnabled | IsSiteGRecaptchaIntegrationEnabled | boolean |  |  |  |  |
| OptionsIsSlashSRemovedSite | isSlashSRemovedSite | boolean |  |  |  |  |
| OptionsRedirectToCustomDomain | Redirect to custom domain | boolean |  |  |  |  |
| OptionsReferrerPolicyOriginWhenCrossOrigin | Referrer URL Protection | boolean |  |  |  |  |
| OptionsUseGuestUserLanguage | Use the guest user’s language for unauthenticated users | boolean |  |  |  |  |
| SiteType | Site Type | picklist |  | 40 |  |  |
| Status | Site Status | picklist |  | 40 |  |  |
| Subdomain | Site Subdomain Prefix | string |  | 80 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UrlPathPrefix | Default Web Address | string |  | 40 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
