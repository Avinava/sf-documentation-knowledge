---
title: "Offline Management"
domain: mobile-sdk
topic: offline-management
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:31.699Z
estimatedTokens: 703
keywords: [Offline, Management]
---

# Offline Management

# Offline Management

Salesforce Mobile SDK provides two modules that help you store and synchronize data for offline use:

-   SmartStore is an offline storage solution that saves encrypted Salesforce data to the device. It is built on SqlLite and uses SqlCipher to encrypt customer data. SmartStore can handle flexible, evolving data models. Unlike a traditional database, it allows records with varying shapes. Apps that use SmartStore define custom indexed tables, known as “soups”, to organize and manage their data. To populate soups, you use Mobile SDK APIs to request data from Salesforce endpoints, and then call SmartStore methods to upsert the returned records. SmartStore provides its own query language, Smart SQL, for retrieving data from the store. SmartStore also supports full text search and is available on native, hybrid, and React Native platforms.
-   Mobile Sync provides a mechanism for easily synchronizing Salesforce records in the cloud with local records in SmartStore. Mobile Sync APIs call the Salesforce API on your behalf to retrieve or upsert Salesforce data and populate your SmartStore soups. When it’s time to upsert records to Salesforce, Mobile Sync gives you fine-grained control over the sync process. Mobile Sync uses SmartStore as its default data store.

For example, let’s say a sales agent on customer visits is traveling through areas with low internet connectivity. Your mobile app can:

-   Use Mobile SDK REST APIs or the Mobile Sync reSync() method to preload customer data from the Salesforce cloud into SmartStore.
-   During travel, save edits and updates to local SmartStore soups, regardless of the device’s connection status.
-   When the device comes back online, or at predetermined intervals, use Mobile Sync APIs to sync data between the local store and the Salesforce cloud.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=mobile_sdk)

#### Important

SmartSync Data Framework has been renamed “Mobile SDK Mobile Sync”. Accordingly, all code uses of “SmartSync” in the SDK have changed to “MobileSync”, and module names have changed as well. To upgrade from Mobile SDK 7.3 or earlier, update your existing projects to reflect these changes.

The name “SmartStore” does not change.

-   **[Using to Access Salesforce Objects to Access Salesforce Objects](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_intro.htm)**

-   **[Validating Configuration Files](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_config_validator.htm)**
    When you’re writing formally structured text files, schema validation is useful at any level. For SmartStore and Mobile Sync configuration files, schema validation is especially welcome for complex configurations that handle related records.

## Related Topics

- Using to Access Salesforce Objects to Access Salesforce Objects (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_intro.htm)
- Validating Configuration Files (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_config_validator.htm)
