---
title: "Invoking the Sync Up Method with a Custom Target"
domain: mobile-sdk
topic: invoking-the-sync-up-method-with-a-custom-target
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:25.650Z
estimatedTokens: 59
keywords: [Invoking, Sync, Target]
---

# Invoking the Sync Up Method with a Custom Target

iOS:

On a sync manager instance, call:

Swift

```

```

Here's an example:

```

```

Objective-C

```

```

Android:

On a SyncManager instance, call:

```

```

Hybrid:

```

```

## Code Examples

```
func syncUp(target: SyncUpTarget, 
             options: SyncOptions,
            soupName: String, 
            onUpdate: ()) -> SyncState
```

```
let syncState = syncManager.syncUp(target: target, options: options, 
    soupName: CONTACTS_SOUP, onUpdate: updateFunc)
```

```
- (SFSyncState*) 
    syncUpWithTarget:(SFSyncUpTarget*)target 
         syncOptions:(SFSyncOptions*)options
            soupName:(NSString*)soupName 
         updateBlock:
              (SFSyncSyncManagerUpdateBlock)updateBlock;
```

```
SyncState syncUp(SyncUpTarget target, 
    SyncOptions options, String soupName, 
    SyncUpdateCallback callback);
```

```
cordova.require("com.salesforce.plugin.mobilesync").
      syncUp(isGlobalStore, target, soupName, 
        options, successCB, errorCB);
cordova.require("com.salesforce.plugin.mobilesync").
      syncUp(storeConfig, target, soupName, 
        options, successCB, errorCB);
```
