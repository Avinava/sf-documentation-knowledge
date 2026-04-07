---
title: "Clear a Soup"
domain: mobile-sdk
topic: clear-a-soup
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:27.052Z
estimatedTokens: 90
keywords: [Clear, Soup, remove, entries, call, clearing, Hybrid, Apps, Android, iOS]
---

> To remove all entries from a soup, call the soup clearing
    method.

# Clear a Soup

To remove all entries from a soup, call the soup clearing method.

## Hybrid Apps

In hybrid apps, call:

```

```

The success callback supports a single parameter that contains the soup name. For example:

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
navigator.smartstore.clearSoup(soupName, successCallback, errorCallback)
```

```
function(soupName) { alert("Soup " + soupName + " was successfully emptied."); }
```

```apex
public void clearSoup ( String soupName )
```

```
- (void)clearSoup:(NSString*)soupName;
```

```
func clearSoup(soupName:) -> Void
```
