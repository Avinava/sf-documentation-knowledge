---
title: "Retrieve a Soup’s Index Specs"
domain: mobile-sdk
topic: retrieve-a-soups-index-specs
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:27.069Z
estimatedTokens: 145
keywords: [Retrieve, Soup’s, Index, Specs, want, examine, display, specifications, soup, call, applicable, retrieval, Hybrid, Apps, Android, iOS]
---

> If you want to examine or display the index specifications for
    a soup, call the applicable index specs retrieval method.

# Retrieve a Soup’s Index Specs

If you want to examine or display the index specifications for a soup, call the applicable index specs retrieval method.

## Hybrid Apps

In hybrid apps, call:

```

```

In addition to the success and error callback functions, this function takes a single argument, soupName, which is the name of the soup. For example:

```

```

The success callback supports a single parameter that contains the array of index specs. For example:

```

```

## Android Apps

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
getSoupIndexSpecs()
```

```
navigator.smartstore.getSoupIndexSpecs(soupName, successCallback, 
    errorCallback)
```

```
function(indexSpecs) { alert("Soup " + soupName + 
    " has the following indexes:" + JSON.stringify(indexSpecs); }
```

```apex
public IndexSpec [] getSoupIndexSpecs ( String soupName )
```

```
- (NSArray*)indicesForSoup:(NSString*)soupName
```
