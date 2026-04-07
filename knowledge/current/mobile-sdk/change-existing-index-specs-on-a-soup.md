---
title: "Change Existing Index Specs on a Soup"
domain: mobile-sdk
topic: change-existing-index-specs-on-a-soup
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:31.821Z
estimatedTokens: 781
keywords: [Change, Index, Specs, Soup, call, applicable, alteration, Changing, External, Storage, Hybrid, Apps, Android, Native, iOS]
---

# Change Existing Index Specs on a Soup

> To change existing index specs, call the applicable soup
  alteration method.

# Change Existing Index Specs on a Soup

To change existing index specs, call the applicable soup alteration method.

Keep these important performance tips in mind when reindexing data:

-   The reIndexData argument is optional, because reindexing can be expensive. When reIndexData is set to false, expect your throughput to be faster by an order of magnitude.
-   Altering a soup that already contains data can degrade your app’s performance. Setting reIndexData to true worsens the performance hit.
-   As a performance guideline, expect the alterSoup() operation to take one second per 1000 records when reIndexData is set to true. Individual performance varies according to device capabilities, the size of the elements, and the number of indexes.
-   alterSoup() and reindexSoup() perform better for conversion to, or creation of, JSON1 index specs than for other index spec types.
-   Insert performance tends to be faster with JSON1 index specs.
-   Database size is smaller with JSON1 index specs.
-   Query performance is typically unaffected by JSON1 index specs.
-   Other SmartStore operations must wait for the soup alteration to complete.
-   If the operation is interrupted—for example, if the user exits the application—the operation automatically resumes when the application reopens the SmartStore database.

## Changing Index Specs with External Storage

If you’ve registered a soup to use the external storage feature, use the alterSoup methods described in [Alter a Soup with External Storage](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_altersoup_external.htm).

## Hybrid Apps

In hybrid apps, call:

```

```

In addition to success and error callbacks, this function takes the following arguments:

| Parameter Name | Argument Description |
| --- | --- |
| soupName | String. Pass in the name of the soup. |
| indexSpecs | Array. Pass in the set of index entries in the index specification. |
| reIndexData | Boolean. Indicate whether you want the function to re-index the soup after replacing the index specifications. |

The success callback supports a single parameter that contains the soup name. For example:

```

```

The following example demonstrates a simple soup alteration. To start, the developer defines a soup that’s indexed on name and address fields, and then upserts an agent record.

```

```

When time and experience show that users really wanted to query their agents by "agentNumber" rather than address, the developer decides to drop the index on address and add an index on agentNumber.

```

```

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

If the developer sets the reIndexData parameter to false, a query on agentNumber does not find the already inserted entry (”James Bond”). However, you can query that record by name. To support queries by agentNumber, you’d first have to call navigator.smartstore.reIndexSoup("myAgents", \["agentNumber"\])

## Android Native Apps

In an Android native app, call:

```

```

## iOS Native Apps

Objective-C:

```

```

In Swift, use the Objective-C method.

## Code Examples

```
navigator.smartstore.alterSoup(soupName, indexSpecs, reIndexData, 
    successCallback, errorCallback)
```

```
function(soupName) { alert("Soup " + soupName + 
    " was successfully altered"); }
```

```
navigator.smartstore.registerSoup("myAgents", 
    [{path:'name', type:'string'}, 
     {path:'address', type:'string'}]);
navigator.smartstore.upsertSoupEntries("myAgents", 
    [{name:'James Bond', 
      address:'1 market st', 
      agentNumber:"007"}]);
```

```
navigator.smartstore.alterSoup("myAgents", [{path:'name',type:'string'}, {path:'agentNumber', type:'string'}], true);
```

```apex
public void alterSoup(String soupName, IndexSpec [] indexSpecs, boolean reIndexData) throws JSONException
```

## Related Topics

- Alter a Soup with External Storage (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_altersoup_external.htm)
