---
title: "Error Using the Salesforce Mobile SDK with the"
domain: service-sdk-android
topic: error-using-the-salesforce-mobile-sdk-with-the
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:32.595Z
estimatedTokens: 108
keywords: [Error, Salesforce, Mobile, SDK, you're, trying, build, Service, Chat, project, explicitly, embeds, exclude, two, maven]
---

# Error Using the Salesforce Mobile SDK with the

> If you're trying to build a Service Chat SDK project that explicitly embeds the
    Salesforce Mobile SDK, exclude these two maven dependencies to prevent conflicts.

# Error Using the Salesforce Mobile SDK with the

If you're trying to build a Service Chat SDK project that explicitly embeds the Salesforce Mobile SDK, exclude these two maven dependencies to prevent conflicts.

When building an app with both SDKs, you may encounter an error such as this error:

```

```

Or this error:

```

```

To solve the problem, exclude the problematic dependencies from your build.gradle file.

```

```

## Code Examples

```
Error: more than one library with package name 'com.salesforce.androidsdk.analytics'
```

```
Duplicate zip entry [classes.jar:com/salesforce/androidsdk/smartstore/app/SmartStoreSDKManager.class]
```

```
compile('com.salesforce.service:servicesdk:224.2.6')
{
    exclude group: 'com.salesforce.mobilesdk', module: 'SmartStore'
    exclude group: 'com.salesforce.mobilesdk', module: 'SalesforceSDK'
}
```
