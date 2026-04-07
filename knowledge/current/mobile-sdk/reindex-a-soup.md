---
title: "Reindex a Soup"
domain: mobile-sdk
topic: reindex-a-soup
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:31.836Z
estimatedTokens: 242
keywords: [Reindex, Soup, reindexing, previously, altered, data, later, want, sure, elements, properly, indexed, alterSoup, reindexSoup, perform]
---

# Reindex a Soup

> Use reindexing if you previously altered a soup without
  reindexing the data, but later you want to make sure all elements in the soup are properly
  indexed. Both alterSoup() and reindexSoup() perform better for conversion to, or creation of,
   JSON1 index specs than for other index spec types.

# Reindex a Soup

Use reindexing if you previously altered a soup without reindexing the data, but later you want to make sure all elements in the soup are properly indexed. Both alterSoup() and reindexSoup() perform better for conversion to, or creation of, JSON1 index specs than for other index spec types.

## Hybrid Apps

In hybrid apps, call:

```

```

In addition to the success and error callback functions, this function takes a single argument, soupName, which is the name of the soup. For example:this function takes additional arguments:

| Parameter Name | Argument Description |
| --- | --- |
| soupName | String. Pass in the name of the soup. |
| listOfPaths | Array. List of index paths on which you want to re-index. |

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

In Swift, use the Objective-C method.

## Code Examples

```
navigator.smartstore.reIndexSoup(soupName, listOfPaths, successCallback, errorCallback)
```

```
function(soupName) { alert("Soup " + soupName + 
    " was successfully re-indexed."); }
```

```apex
public void reIndexSoup(String soupName, String[] indexPaths, boolean handleTx)
```

```
- (BOOL) reIndexSoup:(NSString*)soupName 
      withIndexPaths:(NSArray*)indexPaths
```
