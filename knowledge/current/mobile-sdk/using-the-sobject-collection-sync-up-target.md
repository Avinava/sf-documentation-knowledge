---
title: "Using the sObject Collection Sync Up Target"
domain: mobile-sdk
topic: using-the-sobject-collection-sync-up-target
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:25.788Z
estimatedTokens: 529
keywords: [sObject, Collection, Sync, Target, best, performance, large, operations, Mobile, SDK, 10.1, introduced, iOS, Native, Android, Hybrid, React, Config, Files]
---

> For the very best performance in large sync up operations, Mobile SDK 10.1 introduced an
  sObject collection sync up target.

# Using the sObject Collection Sync Up Target

For the very best performance in large sync up operations, Mobile SDK 10.1 introduced an sObject collection sync up target.

| iOS Native | Android Native |
| --- | --- |
| SwiftCollectionSyncUpTargetObjective-CSFCollectionSyncUpTarget | CollectionSyncUpTarget |

This target enhances the standard sync up target behavior by using the Salesforce sObject Collections API. This API sends local records to the server in batches of up to 200 records. This target can be up to five times faster than the Batch sync up target, and up to 10 times faster than the standard single record sync up target.

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

Actual performance can vary depending on specific records, sObjects, and network conditions.

## iOS Native

**Objective-C**

```

```

## Android Native

```

```

## Hybrid and React Native

Existing sync up targets in hybrid and React Native apps automatically use the sObject collection sync up target.

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

This behavior replaces the automatic use of the Batch sync up target. The new sObject collection target is backwards compatible, and should result in improved performance without requiring any changes to your code.

To use a different sync up target implementation such as the legacy SyncUpTarget class, specify that class in the “androidImpl” or “iOSImpl” setting.

## Usage in Sync Config Files

By default, sync up targets defined in sync config files use sObject Collection APIs. For example, the following sync configuration creates an sObject Collection sync up target.

```

```

## See Also

-   [Invoking the Sync Up Method with a Custom Target](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_native_up_target_invoke.htm)
-   [“sObject Collections” in *REST API Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_composite_sobjects_collections.htm "HTML (New Window)")

## Code Examples

```
SFCollectionSyncUpTarget* target = [[SFCollectionSyncUpTarget alloc] init];
// or
SFCollectionSyncUpTarget* target = 
    [[SFCollectionSyncUpTarget alloc] initWithCreateFieldlist:createList 
                                              updateFieldlist:updateList];

[syncManager syncUpWithTarget:target 
                      options:options 
                     soupName:soupName 
                  updateBlock:updateBlock];
```

```
CollectionSyncUpTarget target = new CollectionSyncUpTarget();
// or
CollectionSyncUpTarget target = new CollectionSyncUpTarget(createFieldlist, updateFieldlist);

syncManager.syncUp(target, options, soupName, callback);
```

```
{
  "syncs": [
    {
      "syncName": "syncUpContacts",
      "syncType": "syncUp",
      "soupName": "contacts",
      "target": 
          {"createFieldlist":
              ["FirstName", 
               "LastName", 
               "Title", 
               "MobilePhone", 
               "Email", 
               "Department", 
               "HomePhone"]
          },
      "options": 
          {"fieldlist":
              ["Id", 
               "FirstName", 
               "LastName", 
               "Title", 
               "MobilePhone", 
               "Email", 
               "Department", 
               "HomePhone"], 
           "mergeMode":"LEAVE_IF_CHANGED"
          }
      }
   ]
}
```

## Related Topics

- Invoking the Sync Up Method with a Custom Target (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_native_up_target_invoke.htm)
