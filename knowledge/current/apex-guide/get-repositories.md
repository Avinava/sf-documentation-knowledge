---
title: "Get Repositories"
domain: apex-guide
topic: get-repositories
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:34.333Z
estimatedTokens: 86
keywords: [Repositories, Call]
---

# Get Repositories

> Call a method to get all repositories.

# Get Repositories

Call a method to get all repositories.

Call [getRepositories()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getRepositories_1) to get all repositories and get the first SharePoint online repository found.

```

```

## Code Examples

```
final string sharePointOnlineProviderType ='ContentHubSharepointOffice365';
final ConnectApi.ContentHubRepositoryCollection repositoryCollection = ConnectApi.ContentHub.getRepositories();
ConnectApi.ContentHubRepository sharePointOnlineRepository = null;
for(ConnectApi.ContentHubRepository repository : repositoryCollection.repositories){
   if(sharePointOnlineProviderType.equalsIgnoreCase(repository.providerType.type)){
      sharePointOnlineRepository = repository;
      break;
   }
}
```
