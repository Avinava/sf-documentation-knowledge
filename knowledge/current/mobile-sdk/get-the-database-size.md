---
title: "Get the Database Size"
domain: mobile-sdk
topic: get-the-database-size
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:27.056Z
estimatedTokens: 99
keywords: [Database, Size, query, amount, disk, space, consumed, call, Hybrid, Apps, Android, Native, iOS]
---

> To query the amount of disk space consumed by the database, call the
  database size method.

# Get the Database Size

To query the amount of disk space consumed by the database, call the database size method.

## Hybrid Apps

In hybrid apps, call:

```

```

The success callback supports a single parameter that contains the database size in bytes. For example:

```

```

## Android Native Apps

```

```

## iOS Native Apps

Objective-C:

```

```

In Swift, use the Objective-C method.

## Code Examples

```
navigator.smartstore.getDatabaseSize(successCallback, errorCallback)
```

```
function(dbSize) { alert("db file size is:" + dbSize + " bytes"); }
```

```apex
public int getDatabaseSize ()
```

```
- (long)getDatabaseSize
```
