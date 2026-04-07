---
title: "Removing Soup Elements"
domain: mobile-sdk
topic: removing-soup-elements
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:31.769Z
estimatedTokens: 555
keywords: [Removing, Soup, Elements, Traditionally, SmartStore, let, remove, specifying, array, element, IDs, usually, run, preliminary, query]
---

# Removing Soup Elements

> Traditionally, SmartStore methods let you remove soup
   elements by specifying an array of element IDs. To do so, you usually run a preliminary query to
   retrieve the candidate IDs, then call the method that performs the deletion. In Mobile SDK 4.2, SmartStore ups the game by adding a query
   option to its element deletion methods. With this option, you provide only a query, and SmartStore deletes all elements that
   satisfy that query. This approach delivers a performance boost because both the query and the
   deletion operation occur in a single call.

# Removing Soup Elements

Traditionally, SmartStore methods let you remove soup elements by specifying an array of element IDs. To do so, you usually run a preliminary query to retrieve the candidate IDs, then call the method that performs the deletion. In Mobile SDK 4.2, SmartStore ups the game by adding a query option to its element deletion methods. With this option, you provide only a query, and SmartStore deletes all elements that satisfy that query. This approach delivers a performance boost because both the query and the deletion operation occur in a single call.

## Hybrid Apps

In hybrid apps, you use the third parameter to pass either an ID array or a SmartStore query spec.

```

```

In addition to success and error callbacks, this function takes the following arguments:

| Parameter Name | Argument Description |
| --- | --- |
| isGlobalStore | (Optional) Boolean that indicates whether this operation occurs in a global or user-based SmartStore database. Defaults to false. |
| storeConfig | (Optional) StoreConfig object that specifies a store name and whether the store is global or user-based. |
| soupName | String. Pass in the name of the soup. |
| entryIdsOrQuerySpec | Array or QuerySpec object. Pass in the name of the soup. |

## Android Native Apps

Android native methods for removing entries give you the option of either handling the transaction yourself, or letting the method handle the transaction transparently. If you set the handleTx argument to false, you’re responsible for starting the transaction before the call and ending it afterwards. If you use the overload that doesn’t include handleTx, or if you set handleTx to false, Mobile SDK handles the transaction for you.

To remove entries by ID array in Android native apps, call either of the following methods:

```

```

To remove entries by query in Android native apps, call either of the following methods:

```

```

## iOS Native Apps

To remove entries by ID array in iOS native apps, call one of these methods:

Objective-C:

```

```

Swift:

```

```

Example:

```

```

To remove entries by query in iOS native apps, call one of these methods:

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
removeFromSoup([isGlobalStore, ]soupName, entryIdsOrQuerySpec, 
    successCB, errorCB)
removeFromSoup([storeConfig, ]soupName, entryIdsOrQuerySpec, 
    successCB, errorCB)
```

```apex
public void delete(String soupName, Long... soupEntryIds)
public void delete(String soupName, Long[] soupEntryIds, boolean handleTx)
```

```apex
public void deleteByQuery(String soupName, QuerySpec querySpec)
public void deleteByQuery(String soupName, QuerySpec querySpec, boolean handleTx)
```

```
- (void)removeEntries:(NSArray*)entryIds fromSoup:(NSString*)soupName error:(NSError **)error;
```

```apex
public func remove(entryIds: [Any], forSoupName: String) -> Void
```
