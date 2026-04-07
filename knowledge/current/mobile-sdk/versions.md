---
title: "Versions"
domain: mobile-sdk
topic: versions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:32.238Z
estimatedTokens: 99
keywords: [Versions, summary, Salesforce, API, version, currently, iOS, Android]
---

# Versions

> Gets summary information about each Salesforce API version currently
        available.

# Versions

Gets summary information about each Salesforce API version currently available.

## iOS

Swift

```

```

Objective-C

```

```

## Android

Kotlin

val requestForVersions: RestRequest

Java

```

```

## See Also

-   [“Versions” in *REST API Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_versions.htm "HTML (New Window)")

## Code Examples

```
RestClient.shared.requestForVersions()
```

```
- (SFRestRequest *)requestForVersions;
```

```apex
public static RestRequest getRequestForVersions()
```
