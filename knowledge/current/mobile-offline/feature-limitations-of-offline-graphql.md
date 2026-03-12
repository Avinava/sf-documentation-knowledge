---
title: "Feature Limitations of Offline GraphQL"
domain: mobile-offline
topic: feature-limitations-of-offline-graphql
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:57.016Z
estimatedTokens: 1745
keywords: [Feature, Limitations, Offline, GraphQL, uses, wire, adapter, mechanism, standard, online, LWC, don’t, change, any, code]
---

# Feature Limitations of Offline GraphQL

> Offline GraphQL uses the same wire adapter mechanism as the standard (online only) LWC
    wire adapter for GraphQL. You don’t change any code to use Offline GraphQL, and your component
    can be used while online and offline.

# Feature Limitations of Offline GraphQL

Offline GraphQL uses the same wire adapter mechanism as the standard (online only) LWC wire adapter for GraphQL. You don’t change any code to use Offline GraphQL, and your component can be used while online and offline.

While using different code isn’t necessary, you must restrict the GraphQL features that you use in your queries. The Offline GraphQL wire adapter supports a subset of the features supported by the standard LWC wire adapter.

To use Offline GraphQL, import the [lightning/uiGraphQLApi module](https://developer.salesforce.com/docs/platform/lwc/guide/reference-lightning-graphql-api.html) in your JavaScript file. Newer features, such as optional fields and dynamic query construction, are not supported. The lightning/graphql module doesn't currently support offline use cases.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=mobile_offline)

#### Note

This subset grows in every release. A delay is typical in new features, and some features can’t be supported while disconnected from Salesforce service.

Let’s get to the largest disappointments first. These major features don’t work while offline.

-   🚫 Aggregate queries
-   🚫 Mutations (data modification)

These major features are partially supported.

-   ⚠️ Pagination
    -   Pagination is supported on top-level record queries, but not on nested child queries.

Where these features are required for your component or app to function, you must build them yourself, or use other data access mechanisms besides GraphQL.

## Data Access (Record Queries)

For “normal” data access, read-only queries that retrieve record data, most features are supported. These features are supported, but with some limitations.

-   Most [scalar field operators](https://developer.salesforce.com/docs/platform/graphql/guide/filter-fields.html "HTML (New Window)") are supported.
    -    ✅ Boolean operators and, not, and or are supported when the nested predicates (subclauses) use supported features.
    -   ⚠️ Geolocation and other compound fields have limited support. Location-based filtering isn’t supported.
    -   ⚠️ Sometimes picklist and multi-picklist results don’t exactly match results from the online implementation, particularly if null values are included in the predicate.
    -   ⚠️ Relative date filtering is based on the device locale, not the org locale setting.
-    ✅ DisplayValue for records and displayValue for fields are both supported.
-    ✅ first argument to limit query result size is supported.
    -   🚫 While first isn’t a pagination feature, it’s often used with pagination features that aren’t supported.
-   ⚠️ scope argument:
    -    ✅ MINE is supported for all entities.
    -    ✅ ASSIGNEDTOME is supported for ServiceAppointment.
    -    🚫 No other scopes are supported by Offline GraphQL.
-    ✅ orderBy
    -   ⚠️ Ordering is supported, but it can have a negative impact on performance. Keep in mind where the sorting takes place, that is, your phone. Keep your sort criteria simple, and don’t sort more records than necessary.
    -   ⚠️ Ordering results by a picklist field sorts by the picklist label, rather than the order of the picklist values defined in Setup.
-    ✅ Relationships and related record access:
    -   [Parent-to-child relationships](https://developer.salesforce.com/docs/platform/graphql/guide/filter-parent.html#parent-to-child-relationships "HTML (New Window)") are supported.
    -   [Child-to-parent relationships](https://developer.salesforce.com/docs/platform/graphql/guide/filter-parent.html#parent-to-child-relationships "HTML (New Window)") are supported.
    -   [Polymorphic relationship fields](https://developer.salesforce.com/docs/platform/graphql/guide/filter-polymorphic.html "HTML (New Window)") such as Owner are supported.

These features aren’t supported at this time.

-    🚫 Compound fields such as Account.ShippingAddress aren’t supported in selections, predicates, or orderBy clauses.
-    🚫 [Semi-join and anti-join filters](https://developer.salesforce.com/docs/platform/graphql/guide/filter-joins.html "HTML (New Window)") such as inq and ninq aren’t supported.
-    🚫 in and nin operators aren’t supported for Date and Date/Time fields.
-    🚫 Location-based filters aren’t supported.
-    🚫 Fiscal date literals aren’t supported in filters.
-    🚫 Relative date ranges such as “last 30 days” aren’t supported in filters.

## Metadata

Necessary object metadata, such as custom objects, fields, and layouts, is automatically loaded and cached during priming and online activity. With GraphQL, you can manually query for metadata when the occasion calls for it. When offline, there are some limitations.

-   ⚠️ Metadata fetched through GraphQL is cached separately from metadata fetched through the getObjectInfo wire adapter. Sometimes they’re not perfectly in sync.
-   ⚠️ Related list metadata can work, but it’s not supported at this time.

## Other Feature Considerations

-   Record query pagination:
    -   ⚠️ The after argument to paginate results is supported on top-level record queries. However, the after argument to paginate results for nested child relationship queries isn’t supported.
    -   🚫 Cursor field selections aren’t supported.
-   ⚠️ GraphQL query performance can be suboptimal on complex queries that filter or order by non-indexed fields.
-   ⚠️ Queries that reference offline-created (draft) records in the predicate, directly in the query or indirectly through variables, return locally cached results only. The query doesn’t make a network request to the server.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=mobile_offline)

#### Important

[Metaschema directives in GraphQL queries were deprecated in Summer ’23.](https://help.salesforce.com/s/articleView?id=release-notes.rn_lwc_modules.htm&release=244&type=5&language=en_US) However, if your GraphQL query fails prefetch in the Salesforce mobile app, Salesforce Field Service, or Mobile Offline, you must continue to use metaschema directives in your GraphQL query for [referential integrity](https://developer.salesforce.com/docs/platform/graphql/guide/graphql-wire-lwc-namespace.html#referential-integrity) and [offline priming](https://help.salesforce.com/s/articleView?id=service.mfs_offline_parent.htm&type=5&language=en_US) functionality. See *Known Issue:* [GraphQL query fails prefetch with an "Unknown Field" warning](https://issues.salesforce.com/issue/a028c00000xGGwE/graphql-query-fails-prefetch-with-an-unknown-field-warning "HTML (New Window)").

#### See Also

-   [Understand Salesforce GraphQL Implementations](atlas.en-us.mobile_offline.meta/mobile_offline/use_graphql_implementations.htm "Salesforce offers three different ways for LWC developers to use GraphQL in their components. Which one you select for your components will depend on the specific needs of your application.")

## Related Topics

- Understand Salesforce GraphQL Implementations (atlas.en-us.mobile_offline.meta/mobile_offline/use_graphql_implementations.htm)
