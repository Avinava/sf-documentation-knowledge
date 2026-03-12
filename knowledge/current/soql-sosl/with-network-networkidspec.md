---
title: "WITH NETWORK NetworkIdSpec"
domain: soql-sosl
topic: with-network-networkidspec
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:19.962Z
estimatedTokens: 407
keywords: [NETWORK, NetworkIdSpec, search, Experience, Cloud, site, users, feeds, clause, SOSL, query, you’re, filtering, results, represented]
---

# WITH NETWORK NetworkIdSpec

> You can search for Experience Cloud site users and feeds by using the WITH NETWORK optional clause on a SOSL query. When you’re filtering
    search results by Experience Cloud site, each site is represented by a NetworkId.

# WITH NETWORK NetworkIdSpec

You can search for Experience Cloud site users and feeds by using the WITH NETWORK optional clause on a SOSL query. When you’re filtering search results by Experience Cloud site, each site is represented by a NetworkId.

You can use the following syntax.

-   WITH NETWORK IN (*’NetworkId1', ’NetworkId2', ...*) supports filtering by one or more Experience Cloud sites.
-   WITH NETWORK = *’NetworkId'* supports filtering by a single Experience Cloud site only.

For objects other than users and feeds, search results include matches across all Experience Cloud sites and internal company data, even if you use network filtering in your query.

-   You can run searches against multiple objects in the same Experience Cloud site.
-   You can’t run scoped and unscoped searches in the same query. For example, you can’t search users from an Experience Cloud site along with accounts from the entire org.

To filter search results for *groups* or *topics* by Experience Cloud site, use the WHERE clause with a NetworkId value. If you want to search for an internal org, use an all zero value for NetworkId.

## Example WITH NETWORK NetworkIdSpec Clauses

To search multiple Experience Cloud sites for users and feed items containing the string “test” and to sort feed items from the newest to the oldest:

```

```

To search the NetworkId for users and feed items containing the string “test” and to sort feed items from the newest to the oldest:

```

```

To search in an internal org for users and feed items containing the string “test” and to sort feed items from newest to oldest:

```

```

## Code Examples

```
FIND {test} RETURNING User (id),
                      FeedItem (id, ParentId WHERE CreatedDate = 
                                THIS_YEAR Order by CreatedDate DESC)
            WITH NETWORK IN ('NetworkId1', 'NetworkId2', 'NetworkId3')
```

```
FIND {test} RETURNING User (id),
                      FeedItem (id, ParentId WHERE CreatedDate = 
                                THIS_YEAR Order by CreatedDate DESC)
            WITH NETWORK = 'NetworkId'
```

```
FIND {test} RETURNING User (id),
                      FeedItem (id, ParentId WHERE CreatedDate = 
                                THIS_YEAR Order by CreatedDate DESC)
            WITH NETWORK = '00000000000000'
```
