---
title: "Use GraphQL While Mobile and Offline"
domain: mobile-offline
topic: use-graphql-while-mobile-and-offline
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:56.987Z
estimatedTokens: 925
keywords: [GraphQL, Mobile, Offline, often, shortened, GQL, flexible, powerful, query, language, accessing, record, data, think, modern]
---

# Use GraphQL While Mobile and Offline

> GraphQL, often shortened to GQL, is a flexible, powerful query language for accessing
  record and other data. You can think of GraphQL as a modern equivalent of SQL, the query language
  for relational databases.

# Use GraphQL While Mobile and Offline

GraphQL, often shortened to GQL, is a flexible, powerful query language for accessing record and other data. You can think of GraphQL as a modern equivalent of SQL, the query language for relational databases.

Developers like GraphQL for modern web applications because, in contrast to many REST and CRUD-oriented APIs, GraphQL allows for expressive queries, with features like filtering and scopes, ordering and aggregation, pagination, and relationship traversal to related records. A single query can retrieve many records, and even records of multiple types. Using fewer queries reduces the number of server requests required to load data, which can improve performance. A GQL query can specify precisely and only the fields required for a given component, reducing the amount of data that needs to be transmitted before a page can render.

Salesforce offers several different implementations of GraphQL for use in your apps. Each implementation has an intended context and purpose, and relevant use cases. Learning to use the appropriate implementation, or when you must use a **specific** implementation, is straightforward. See [Understand Salesforce GraphQL Implementations](atlas.en-us.mobile_offline.meta/mobile_offline/use_graphql_implementations.htm "Salesforce offers three different ways for LWC developers to use GraphQL in their components. Which one you select for your components will depend on the specific needs of your application.").

For mobile developers building apps that work while offline, however, there is only one implementation that matters: Offline GraphQL. The rest of this chapter provides details of using Offline GraphQL, including important considerations and limitations.

## Getting Started

-   The fastest way to get up to speed on GraphQL and learn how to use it with the Salesforce Platform is to read the [GraphQL API Developer Guide](https://developer.salesforce.com/docs/platform/graphql/guide "HTML (New Window)").
-   The fastest way to get up to speed on using GraphQL in Lightning web components is to read the [Use the GraphQL Wire Adapter](https://developer.salesforce.com/docs/platform/graphql/guide/graphql-wire-lwc-use.html "HTML (New Window)") chapter of the same developer guide. You’ll also want to refer to the [lightning/uiGraphQLApi Wire Adapters and Functions](https://developer.salesforce.com/docs/platform/lwc/guide/reference-lightning-graphql-api.html "HTML (New Window)") reference in the Lightning Web Components Developer Guide.
-   The fastest way to learn how to build offline-ready LWCs with GraphQL is to keep reading this chapter.



If you’re new to GraphQL, you should plan to read and absorb all of these resources, in the order listed.

-   **[Understand Salesforce GraphQL Implementations](atlas.en-us.mobile_offline.meta/mobile_offline/use_graphql_implementations.htm)**
    Salesforce offers three different ways for LWC developers to use GraphQL in their components. Which one you select for your components will depend on the specific needs of your application.
-   **[Feature Limitations of Offline GraphQL](atlas.en-us.mobile_offline.meta/mobile_offline/use_graphql_limitations.htm)**
    Offline GraphQL uses the same wire adapter mechanism as the standard (online only) LWC wire adapter for GraphQL. You don’t change any code to use Offline GraphQL, and your component can be used while online and offline.
-   **[Best Practices for Using GraphQL in LWC Offline](atlas.en-us.mobile_offline.meta/mobile_offline/use_graphql_best_practices_offline.htm)**
    There are a number of best practices to be aware of when using GraphQL in your offline-ready components and apps.

## Related Topics

- Understand Salesforce GraphQL
    Implementations (atlas.en-us.mobile_offline.meta/mobile_offline/use_graphql_implementations.htm)
- Understand Salesforce GraphQL Implementations (atlas.en-us.mobile_offline.meta/mobile_offline/use_graphql_implementations.htm)
- Feature Limitations of Offline GraphQL (atlas.en-us.mobile_offline.meta/mobile_offline/use_graphql_limitations.htm)
- Best Practices for Using GraphQL in LWC Offline (atlas.en-us.mobile_offline.meta/mobile_offline/use_graphql_best_practices_offline.htm)
