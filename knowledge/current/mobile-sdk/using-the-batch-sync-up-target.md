---
title: "Using the Batch Sync Up Target"
domain: mobile-sdk
topic: using-the-batch-sync-up-target
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:25.540Z
estimatedTokens: 332
keywords: [Batch, Sync, Target, enhance, performance, large, operations, Mobile, SDK, 7.1, introduces, iOS, Native, Android, Hybrid, React, Config, Files]
---

> To enhance performance in large sync up operations, Mobile SDK 7.1 introduces a
  batch sync up target.

# Using the Batch Sync Up Target

To enhance performance in large sync up operations, Mobile SDK 7.1 introduces a batch sync up target.

| iOS Native | Android Native |
| --- | --- |
| SwiftBatchSyncUpTargetObjective-CSFBatchSyncUpTarget | BatchSyncUpTarget |

This target enhances the standard sync up target behavior by calling the Salesforce composite API. The composite API sends local records to the server in batches of up to 25 records.

## iOS Native

**Swift**

```

```

**Objective-C**

```

```

## Android Native

```

```

## Hybrid and React Native

Existing sync up targets in hybrid and React Native apps automatically use the batch sync up target. To use a different sync up target implementation such as the legacy SyncUpTarget class, specify “androidImpl” or “iOSImpl”.

## Usage in Sync Config Files

By default, sync up targets defined in sync config files use batch APIs. For example, the following sync configuration creates a batch sync up target.

```

```

## See Also

-   [Invoking the Sync Up Method with a Custom Target](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_native_up_target_invoke.htm)
-   [“Composite” in *REST API Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_composite_composite.htm "HTML (New Window)")

## Code Examples

```
var target = BatchSyncUpTarget.init(createFieldList, updateFieldList)
let syncMgr = SyncManager.sharedInstance(store: self.store!)
syncMgr!.syncUp(target: target, options: options, soupName: soupName) {...}
```

```
SFBatchSyncUpTarget* target = [[SFBatchSyncUpTarget alloc] init];
// or
SFBatchSyncUpTarget* target = 
    [[SFBatchSyncUpTarget alloc] initWithCreateFieldlist:createList 
                                            updateFieldlist:updateList];
[syncManager syncUpWithTarget:target 
                      options:options 
                     soupName:soupName 
                  updateBlock:updateBlock];
```

```
BatchSyncUpTarget target = new BatchSyncUpTarget();
// or
BatchSyncUpTarget target = new BatchSyncUpTarget(createFieldlist, updateFieldlist);
syncManager.syncUp(target, options, soupName, callback);
```

```
{ "syncs": [ 
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
        "mergeMode":"LEAVE_IF_CHANGED"} 
    } 
]}
```

## Related Topics

- Invoking the Sync Up Method with a Custom Target (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_native_up_target_invoke.htm)
