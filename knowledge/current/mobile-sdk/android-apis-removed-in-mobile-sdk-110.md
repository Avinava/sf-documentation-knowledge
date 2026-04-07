---
title: "Android APIs Removed in Mobile SDK 11.0"
domain: mobile-sdk
topic: android-apis-removed-in-mobile-sdk-110
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:32.276Z
estimatedTokens: 215
keywords: [Android, APIs, Removed, Mobile, SDK, 11.0, show, objects, artifacts, were, 10.0, SoupSpec, AlterSoupLongOperation, SmartStore]
---

# Android APIs Removed in Mobile SDK 11.0

> These lists show Mobile SDK objects and
    artifacts for Android that were removed in Mobile SDK 10.0.

# Android APIs Removed in Mobile SDK 11.0

These lists show Mobile SDK objects and artifacts for Android that were removed in Mobile SDK 10.0.

Mobile SDK 10.0 for Android has removed the following APIs.

## SoupSpec

```

```

-   External storage and soup spec have been removed in 11.0.

## AlterSoupLongOperation

```

```

-   External storage and soup spec have been removed in 11.0. Use other constructor instead.

## SmartStore

```

```

-   External storage and soup spec have been removed in 11.0. Use registerSoup(String soupName, IndexSpec\[\] indexSpecs) instead.

```

```

-   External storage and soup spec have been removed in 11.0. Use alterSoup(String soupName, IndexSpec\[\] indexSpecs) instead.

```

```

-   External storage and soup spec have been removed in 11.0

```

```

-   External storage and soup spec have been removed in 11.0

## Code Examples

```apex
public class SoupSpec
```

```apex
public AlterSoupLongOperation(SmartStore store, String soupName, 
    SoupSpec newSoupSpec, IndexSpec[] newIndexSpecs, boolean reIndexData) 
    throws JSONException
```

```apex
public void registerSoupWithSpec(final SoupSpec soupSpec, 
    final IndexSpec[] indexSpecs)
```

```apex
public void alterSoup(String soupName, SoupSpec soupSpec, 
    IndexSpec[] indexSpecs, boolean reIndexData) 
    throws JSONException
```

```apex
public SoupSpec getSoupSpec(String soupName)
```
