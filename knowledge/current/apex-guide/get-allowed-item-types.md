---
title: "Get Allowed Item Types"
domain: apex-guide
topic: get-allowed-item-types
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:34.330Z
estimatedTokens: 126
keywords: [Get, Allowed, Item, Types, Call, get, allowed, item, types.]
---

# Get Allowed Item Types

> Call a method to get allowed item types.

# Get Allowed Item Types

Call a method to get allowed item types.

Call [getAllowedItemTypes(repositoryId, repositoryFolderId, filter)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getAllowedItemTypes_2) with a filter of FilesOnly to get the first ConnectApi.ContentHubItemTypeSummary.id of a file. The context user can create allowed files in a repository folder in the external system.

```

```

## Code Examples

```apex
final ConnectApi.ContentHubAllowedItemTypeCollection allowedItemTypesColl = ConnectApi.ContentHub.getAllowedItemTypes(repositoryId, repositoryFolderId, ConnectApi.ContentHubItemType.FilesOnly);
final List<ConnectApi.ContentHubItemTypeSummary> allowedItemTypes = allowedItemTypesColl.allowedItemTypes;
string allowedFileItemTypeId = null;
if(allowedItemTypes.size() > 0){
   ConnectApi.ContentHubItemTypeSummary allowedItemTypeSummary = allowedItemTypes.get(0);
   allowedFileItemTypeId = allowedItemTypeSummary.id;
}
```
