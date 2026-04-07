---
title: "SObject Tree"
domain: mobile-sdk
topic: sobject-tree
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:32.197Z
estimatedTokens: 166
keywords: [SObject, Tree, Creates, trees, root, records, iOS, Android]
---

# SObject Tree

> Creates one or more sObject trees with root records of the specified object
        type.

# SObject Tree

Creates one or more sObject trees with root records of the specified object type.

## Parameters

-   API version (string, optional)
-   Object type (string)
-   Object trees (list or array of sObject tree objects)

## iOS

Swift

```

```

Objective-C

```

```

## Android

Kotlin

@Throws(JSONException::class) fun getRequestForSObjectTree(apiVersion: String?, objectType: String?, objectTrees: List<SObjectTree>): RestRequest

Java

```

```

## See Also

-   [“sObject Tree” in *REST API Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_composite_sobject_tree.htm "HTML (New Window)")

## Code Examples

```
RestClient.shared.request(forSObjectTree:objectTrees:apiVersion:)
```

```
- (SFRestRequest*) requestForSObjectTree:(NSString*)objectType 
                             objectTrees:(NSArray<SFSObjectTree*>*)objectTrees 
                              apiVersion:(nullable NSString *)apiVersion;
```

```apex
public static RestRequest getRequestForSObjectTree(String apiVersion, String objectType, List<SObjectTree> objectTrees) throws JSONException
```
