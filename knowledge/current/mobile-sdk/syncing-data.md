---
title: "Syncing Data"
domain: mobile-sdk
topic: syncing-data
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:25.585Z
estimatedTokens: 971
keywords: [Syncing, native, Mobile, Sync, apps, manager, easily, device, Salesforce, server, “up”—from, server—or, “down”—from]
---

> In native Mobile Sync apps, you
            can use the sync manager to sync data easily between the device and the Salesforce server. The sync
            manager provides methods for syncing “up”—from the device to the server—or
            “down”—from the server to the device.

# Syncing Data

In native Mobile Sync apps, you can use the sync manager to sync data easily between the device and the Salesforce server. The sync manager provides methods for syncing “up”—from the device to the server—or “down”—from the server to the device.

All data requests in Mobile Sync apps are asynchronous. Asynchronous means that the sync method that you call returns the server response in a callback method or update block that you define.

Each sync up or sync down method returns a sync state object. This object contains the following information:

-   Sync operation ID. You can check the progress of the operation at any time by passing this ID to the sync manager’s getSyncStatus method.
-   Your sync parameters (soup name, target for sync down operations, options for sync up operations).
-   Type of operation (up or down).
-   Progress percentage (integer, 0–100).
-   Total number of records in the transaction.

-   **[Using the Sync Manager](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_native_sync_manager.htm)**

-   **[Using the Sync Manager with Global SmartStore](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_global_smartstore.htm)**

-   **[About Sync Statuses](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_sync_statuses.htm)**
    To enable full control over “in-flight” sync operations, Mobile SDK 7.1 adds a new status that indicates that the operation has been stopped.
-   **[Incremental Syncs with reSync](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_native_inc_sync.htm)**
    For sync up targets and SOQL-based sync down targets, you can incrementally update a pre-defined sync operation. Incremental reSync methods download or upload only new or updated records from the source. You can call reSync with either a sync ID or a sync name. If you call reSync for a sync configuration that has never been run, reSync knows to do a full sync.
-   **[Syncing Down](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_native_sync_down.htm)**

-   **[Syncing Up](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_native_sync_up.htm)**

-   **[Syncing Up by External ID](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_native_sync_up_external_id.htm)**
    Mobile SDK enhances its sync-up functionality by adding the ability to sync up by external ID. To use this feature, you specify an external ID field name in the sync up target definition. If a soup record is marked as locally created, updated, or deleted and has an external ID value, Mobile Sync syncs it up using upsert instead of create. If the record also has a valid Id value, however, Mobile Sync updates the indicated Salesforce record.
-   **[Stopping and Restarting Sync Operations](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_stop_start_sync_operations.htm)**
    Beginning in Mobile SDK 7.1, sync manager classes provide methods that allow apps to stop and restart syncs. Sometimes, a stopped sync is only paused and can later be restarted. In other cases, a stop request forces the sync operation to fail with no possibility of resuming. These new APIs support another Mobile SDK 7.1 enhancement: The ability to share data safely across multiple apps, or between an app and its extensions.
-   **[About Sync Task Errors](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_sync_task_errors.htm)**
    In Mobile SDK 7.1 and later, sync task methods return error information consistently across platforms.
-   **[Handling “Ghost” Records After Sync Down Operations](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_sync_ghosts.htm)**
    If you’re finding that sync down operations sometimes leave unwanted records in your SmartStore soups, you can use the cleanResyncGhosts API to get rid of them.

## Related Topics

- Using the Sync Manager (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_native_sync_manager.htm)
- Using the Sync Manager with Global SmartStore (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_global_smartstore.htm)
- About Sync Statuses (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_sync_statuses.htm)
- Incremental Syncs with reSync (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_native_inc_sync.htm)
- Syncing Down (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_native_sync_down.htm)
- Syncing Up (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_native_sync_up.htm)
- Syncing Up by External ID (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_native_sync_up_external_id.htm)
- Stopping and Restarting Sync Operations (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_stop_start_sync_operations.htm)
- About Sync Task Errors (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_sync_task_errors.htm)
- Handling “Ghost” Records After Sync Down Operations (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_sync_ghosts.htm)
