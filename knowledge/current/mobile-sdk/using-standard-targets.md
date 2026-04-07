---
title: "Using Standard Targets"
domain: mobile-sdk
topic: using-standard-targets
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:30.326Z
estimatedTokens: 802
keywords: [Standard, Targets, Mobile, Sync, ready-to-use, target, classes, several, Salesforce, implicitly, configuration, files, directly, code]
---

# Using Standard Targets

> Mobile Sync provides ready-to-use target classes for several standard
   Salesforce request types. You can use these targets implicitly through configuration files, or
   directly through code.

# Using Standard Targets

Mobile Sync provides ready-to-use target classes for several standard Salesforce request types. You can use these targets implicitly through configuration files, or directly through code.

Supported standard types include:

-   Layout
-   Metadata
-   MRU
-   SOQL query
-   SOSL query
-   Refresh
-   Batch
-   Briefcase
-   sObject Collections

-   **[Using the MRU Sync Down Target](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_sync_down_target_mru.htm)**
    To retrieve the most recently viewed records for a specific Salesforce object in your org, use the MRU sync down target.
-   **[Using the SOQL Sync Down Target](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_sync_down_target_soql.htm)**
    If you can define a SOQL query that selects everything required for a business need, the SOQL target is your simplest sync down option. This target takes a SOQL query and optional supporting arguments.
-   **[Using the SOSL Sync Down Target](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_sync_down_target_sosl.htm)**

-   **[Using the Briefcase Sync Down Target](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_sync_down_target_briefcase.htm)**
    If your org uses Briefcases for your mobile users, the Briefcase sync down target was introduced in Mobile SDK 10.1. This sync target is an efficient way to load many records at a time. Sync is constrained to the records included in all Briefcases assigned to the current user and made accessible in the mobile client’s Connected App. You can limit the sync target to specific objects and fields included in those Briefcases. This target takes an array of BriefcaseObjectInfo objects, which include sObject type, fields, and the soup to add them to.
-   **[Syncing Metadata and Layouts](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_native_metadata_layout_down.htm)**
    Mobile SDK 6.2 introduces new API features that simplify object discovery and presentation. These features harness the power of Mobile Sync to access Salesforce object metadata and layouts. Mobile SDK automatically stores the data in predefined soups for offline use and structured data models for easy querying.
-   **[Using the Refresh Sync Down Target](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_refresh_target.htm)**
    Many apps download records, cache all of them, and then let users edit them from the SmartStore cache when connectivity drops. Local “offline” work is quick and efficient—a great user experience—but, when connectivity resumes, it's important to refresh the cached records with server updates.
-   **[Using the Batch Sync Up Target](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_native_batch_up_target.htm)**
    To enhance performance in large sync up operations, Mobile SDK 7.1 introduces a batch sync up target.
-   **[Using the sObject Collection Sync Up Target](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_sync_up_target_sobject.htm)**
    For the very best performance in large sync up operations, Mobile SDK 10.1 introduced an sObject collection sync up target.

## Related Topics

- Using the MRU Sync Down Target (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_sync_down_target_mru.htm)
- Using the SOQL Sync Down Target (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_sync_down_target_soql.htm)
- Using the SOSL Sync Down Target (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_sync_down_target_sosl.htm)
- Using the Briefcase Sync Down Target (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_sync_down_target_briefcase.htm)
- Syncing Metadata and Layouts (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_native_metadata_layout_down.htm)
- Using the Refresh Sync Down Target (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_refresh_target.htm)
- Using the Batch Sync Up Target (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_native_batch_up_target.htm)
- Using the sObject Collection Sync Up Target (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_sync_up_target_sobject.htm)
