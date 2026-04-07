---
title: "Refreshing  Pods Pods"
domain: mobile-sdk
topic: refreshing-pods-pods
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:26.412Z
estimatedTokens: 138
keywords: [Refreshing, Pods, CocoaPods, caches, repos, stored, locally, machine, pod, repo, sync, forceios, manually]
---

> CocoaPods caches its pods in repos stored locally on your machine. If the pod repo gets
  out of sync with forceios, you can manually update it.

# Refreshing Pods Pods

CocoaPods caches its pods in repos stored locally on your machine. If the pod repo gets out of sync with forceios, you can manually update it.

When forceios creates a native app, it prints a list of installed pods and their versions. For example:

```

```

You can compare these versions to your forceios version by typing:

```

```

If the reported pod versions are older than your forceios version, run the following commands in the Terminal window:

```

```

After setup completes, recreate your app with forceios create.

## Code Examples

```
Installing SalesforceSDKCore (8.0.0)
Installing SalesforceAnalytics (8.0.0)
Installing SmartStore (8.0.0)
Installing MobileSync (8.0.0)
```

```
pod repo remove forcedotcom
pod setup
```
