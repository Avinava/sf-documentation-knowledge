---
title: "Remove a Soup"
domain: mobile-sdk
topic: remove-a-soup
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:31.845Z
estimatedTokens: 94
keywords: [Remove, Soup, Removing, deletes, user, signs, soups, deleted, automatically, occasions, want, call, applicable, removal, Hybrid]
---

# Remove a Soup

> Removing a soup deletes it. When a user signs out, all soups are
  deleted automatically. For other occasions in which you want to delete a soup, call the applicable
  soup removal method.

# Remove a Soup

Removing a soup deletes it. When a user signs out, all soups are deleted automatically. For other occasions in which you want to delete a soup, call the applicable soup removal method.

## Hybrid Apps

In hybrid apps, call:

```

```

## Android Apps

In Android apps, call:

```

```

## iOS Apps

Objective-C:

```

```

Swift:

```

```

Example:

```

```

## Code Examples

```
navigator.smartstore.removeSoup(soupName,successCallback,errorCallback);
```

```apex
public void dropSoup ( String soupName )
```

```
- (void)removeSoup:(NSString*)soupName
```

```
func removeSoup(soupName: String) -> Void
```

```
store.removeSoup(soupName: soupName)
```
