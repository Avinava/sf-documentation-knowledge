---
title: "CRM Analytics Asset Interactions"
domain: pkg2-dev
topic: crm-analytics-asset-interactions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:25.951Z
estimatedTokens: 520
keywords: [CRM, Analytics, Asset, Interactions, record, package, usage, log, custom_entity_type, AnalyticsDashboard, AnalyticsLens, AnalyticsRecipe, interaction, packaged, assets]
---

# CRM Analytics Asset Interactions

> Each record in your package usage log that has a custom_entity_type of AnalyticsDashboard, AnalyticsLens, or AnalyticsRecipe describes an interaction with your packaged CRM Analytics
  assets.

# CRM Analytics Asset Interactions

Each record in your package usage log that has a custom\_entity\_type of AnalyticsDashboard, AnalyticsLens, or AnalyticsRecipe describes an interaction with your packaged CRM Analytics assets.

| Available in: both Salesforce Classic and Lightning Experience |
| --- |
| Available in: Enterprise, Performance, Unlimited, and Developer Editions |


## Analytics Asset Runs

To analyze a run of your CRM Analytics asset, look for a log\_record\_type of AnalyticsAssetRun.

| Standard Data | Supplemental Data |
| --- | --- |
| none | none |

## Analytics Asset Views

To analyze a view of your CRM Analytics asset, look for a log\_record\_type of AnalyticsAssetView.

| Standard Data | Supplemental Data |
| --- | --- |
| none | none |

## Example

Let’s look at an example package usage log record and analyze the CRM Analytics asset interaction.

```

```

The packaged Analytics dashboard, ClaimsDashboard, was interacted with by a standard user from the subscriber org MyCustom Inc. Specifically, the user performed a view of ClaimsDashboard on 2022-11-22 at 6:19am UTC.

The key data in this analysis are:

| Question | Field | Value |
| --- | --- | --- |
| What | custom_entitycustom_entity_typepackage_version_idmanaged_package_namespace | ClaimsDashboardAnalyticsDashboard04txx0000004IdiAcme |
| Who | organization_iduser_id_token | 00Dxx0000006H2l005-9BwnBWYO5FMn4cZ1sLw7F3LmTpoe8M77GrZOZHL6xQk= |
| How | log_record_type | AnalyticsAssetView |
| When | timestamp_derived | 2022-11-22T06:19:49.820Z |

#### See Also

-   [Package Usage Logs Schema](atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_custom_object_logs.htm "Make informed development decisions based on package usage log data. Analyze adoption, user behavior, company information, and Lightning app and page usage data. Package usage logs list activity during a 24-hour period, between 12:00 AM and 11:59 PM UTC.")

-   [CRM Analytics Developer Center](https://developer.salesforce.com/developer-centers/crm-analytics "CRM Analytics Developer Center - HTML (New Window)")

## Code Examples

```
{
     "timestamp_derived": "2022-11-22T06:19:49.820Z",
     "log_record_type": "AnalyticsAssetView",
     "request_id":"4mbhvyfahFf83tlq2Z5aAk",
     "organization_id": "00Dxx0000006H2l",
     "organization_name": "MyCustomer Inc.",
     "organization_status": "Demo",
     "organization_edition": "Enterprise Edition",
     "organization_country_code": "IN",
     "organization_language_locale": "en_US",
     "organization_time_zone": "Australia/Sydney",
     "organization_instance": "GS0",
     "organization_type": "Production",
     "user_id_token": "005-9BwnBWYO5FMn4cZ1sLw7F3LmTpoe8M77GrZOZHL6xQk=",
     "user_type": "Standard",
     "package_id": "033xx0000004FqD",
     "package_version_id": "04txx0000004Idi",
     "managed_package_namespace": "Acme",
     "custom_entity": "ClaimsDashboard",
     "custom_entity_type": "AnalyticsDashboard",
     "session_key": "2l4YtFB/RmsRKVsS",
     "login_key": "fGV6RgVOH3ZCgl2v",
     "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/IP_ADDRESS_REMOVED Safari/537.36",
     "user_country_code": "US",
     "user_time_zone": "America/Los_Angeles"
}
```

## Related Topics

- Package Usage Logs Schema (atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_custom_object_logs.htm)
