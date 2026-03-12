---
title: "Get a Repository"
domain: apex-guide
topic: get-a-repository
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:34.335Z
estimatedTokens: 72
keywords: [Repository, Call]
---

# Get a Repository

> Call a method to get a repository.

# Get a Repository

Call a method to get a repository.

Call [getRepository(repositoryId)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getRepository_1) to get a repository.

```

```

## Code Examples

```
final string repositoryId = '0XCxx0000000123GAA';
final ConnectApi.ContentHubRepository repository = ConnectApi.ContentHub.getRepository(repositoryId);
```
