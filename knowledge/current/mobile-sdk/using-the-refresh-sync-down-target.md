---
title: "Using the Refresh Sync Down Target"
domain: mobile-sdk
topic: using-the-refresh-sync-down-target
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:25.694Z
estimatedTokens: 311
keywords: [Refresh, Sync, Down, Target, apps, download, records, cache, let, users, edit, SmartStore, connectivity, drops, Local, “offline”, work, quick, efficient—a, great, user, experience—but, resumes, it's, cached, server, updates, APIs]
---

> Many apps download records, cache all of them, and then let users edit them from the SmartStore cache when connectivity drops.
  Local “offline” work is quick and efficient—a great user experience—but, when
  connectivity resumes, it's important to refresh the cached records with server updates.

# Using the Refresh Sync Down Target

Many apps download records, cache all of them, and then let users edit them from the SmartStore cache when connectivity drops. Local “offline” work is quick and efficient—a great user experience—but, when connectivity resumes, it's important to refresh the cached records with server updates.

To maximize performance and efficiency, Mobile SDK provides a refresh sync down target. The refresh target supports a single call that doesn't require preparatory coding. You create an instance of the target with a soup name, an object type, and a list of fields. You then pass the target instance to a sync down method. The refresh target gathers IDs of the pertinent soup records, queries the server for the current field values, and then refreshes the soup.

## Refresh Target APIs

The refresh sync down target is available on iOS and Android for native, React native, and hybrid apps.

**iOS**

*Class*:

| Swift | Objective-C |
| --- | --- |
| RefreshSyncDownTarget | SFRefreshSyncDownTarget |

*Factory method*:

Swift

```

```

Here's an example:

```

```

Objective-C

```

```

**Android**

*Class*:

```

```

*Constructor*:

```

```

**JavaScript (Hybrid, React Native)**

*Function*:

```

```

## Code Examples

```
RefreshSyncDownTarget.newSyncTarget(soupName:objectType:fieldList:)
```

```
let refreshTarget = RefreshSyncDownTarget.newSyncTarget("MySoup", objectType: "Contact", fieldList: ["Id","Name"])
```

```
+ (SFRefreshSyncDownTarget*) newSyncTarget:(NSString*)soupName objectType:(NSString*)objectType fieldlist:(NSArray*)fieldlist
```

```
com.salesforce.androidsdk.mobilesync.util.RefreshSyncDownTarget
```

```apex
public RefreshSyncDownTarget(List<String> fieldlist, 
    String objectType, String soupName)
```
