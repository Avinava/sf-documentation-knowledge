---
title: "Invoking the Sync Down Method with a Custom Target"
domain: mobile-sdk
topic: invoking-the-sync-down-method-with-a-custom-target
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:25.561Z
estimatedTokens: 208
keywords: [Invoking, Sync, Down, Target, supports, iOS, Android]
---

> The following example supports both iOS and
              Android:

# Invoking the Sync Down Method with a Custom Target

iOS:

Pass an instance of your custom SFSyncDownTarget class to the SFMobileSyncSyncManager sync down method:

Swift

```

```

Objective-C

```

```

Android:

Pass an instance of your custom SyncDownTarget class to the SyncManager sync down method:

```

```

Hybrid:

1.  Create a target object with the following property settings:

    -   Set type to "custom".
    -   Set at least one of the following properties:

        iOS (if supported):

        Set iOSImpl to the name of your iOS custom class.

        Android (if supported):

        Set androidImpl to the package-qualified name of your Android custom class.


    The following example supports both iOS and Android:

    ```

    ```

2.  Pass this target to the hybrid sync down method:

    ```

    ```

## Code Examples

```
func syncDown(target: SyncDownTarget, 
            soupName: String, 
            onUpdate: ()) -> SyncState
```

```
- (SFSyncState*) 
    syncDownWithTarget:(SFSyncDownTarget*)target 
              soupName:(NSString*)soupName 
           updateBlock:
              (SFSyncSyncManagerUpdateBlock)updateBlock;
```

```
SyncState syncDown(SyncDownTarget target, SyncOptions options, String soupName, SyncUpdateCallback callback);
```

```
var target = 
{type:"custom", 
 androidImpl:
 "com.salesforce.samples.notesync.ContentSoqlSyncDownTarget", 
 iOSImpl:"SFContentSoqlSyncDownTarget", 
 … 
};
```

```
cordova.require("com.salesforce.plugin.MobileSync").syncDown(target, …);
```
