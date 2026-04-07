---
title: "Salesforce Contracts Objects"
domain: revenue-cloud
topic: salesforce-contracts-objects
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:35:47.108Z
estimatedTokens: 141
keywords: [Salesforce, Contracts, deployment, sequence, API, lookup, Revenue, Cloud]
---

> This table provides the deployment sequence, object types, API names, and lookup fields
    for Salesforce Contracts in Revenue Cloud.

# Salesforce Contracts Objects

This table provides the deployment sequence, object types, API names, and lookup fields for Salesforce Contracts in Revenue Cloud.

| Object Use Type | Object Name | Object API | Deployment Sequence | Lookup Fields (Foreign Keys) |
| --- | --- | --- | --- | --- |
| Metadata | Clause Category Configuration | ClauseCatgConfiguration | 1 | None |
| Configuration | Document Clause Set | DocumentClauseSet | 2 | ClauseCatgConfiguration |
| Configuration | Document Clause | DocumentClause | 3 | DocumentClauseSet, ContentDocument |
