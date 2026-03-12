---
title: "Visibility Enum"
domain: apex-reference
topic: visibility-enum
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:29.586Z
estimatedTokens: 157
namespace: Cache.Visibility
keywords: [Visibility, Cache.Visibility, enumeration, Cache.Session, Cache.Org, indicate, whether, cached, visible, only, value’s, namespaces., Values]
---

# Visibility Enum

> Use the Cache.Visibility
      enumeration in the Cache.Session or Cache.Org methods to indicate whether a cached value is
      visible only in the value’s namespace or in all namespaces.

**Namespace:** `Cache.Visibility`

# Visibility Enum

Use the Cache.Visibility enumeration in the Cache.Session or Cache.Org methods to indicate whether a cached value is visible only in the value’s namespace or in all namespaces.

## Enum Values

The following are the values of the Cache.Visibility enum.

| Value | Description |
| --- | --- |
| ALL | The cached value is available to Apex code executing from any namespace. This is the default state. |
| NAMESPACE | The cached value is available to Apex code executing from the same namespace.If a key has the Visibility.NAMESPACE attribute, a get method initiated from a different namespace returns null. |
