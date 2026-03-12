---
title: "Best Practices for Using GraphQL in LWC Offline"
domain: mobile-offline
topic: best-practices-for-using-graphql-in-lwc-offline
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:56.993Z
estimatedTokens: 697
keywords: [Best, Practices, GraphQL, LWC, Offline, There, number, aware, offline-ready, components, apps, Provide, Query, Variables, via]
---

# Best Practices for Using GraphQL in LWC Offline

> There are a number of best practices to be aware of when using GraphQL in your
  offline-ready components and apps.

# Best Practices for Using GraphQL in LWC Offline

There are a number of best practices to be aware of when using GraphQL in your offline-ready components and apps.

To work with Offline GraphQL, use the [lightning/uiGraphQLApi module](https://developer.salesforce.com/docs/platform/lwc/guide/reference-lightning-graphql-api.html). The lightning/graphql module doesn't currently support offline use cases.

In addition to the general best practices detailed in [GraphQL Wire Adapter Best Practices](https://developer.salesforce.com/docs/platform/graphql/guide/graphql-wire-lwc-best.html "HTML (New Window)"), we want to call your attention to two specific practices that are especially important for the Offline GraphQL implementation.

## Provide Query and Variables via Getter Function

To make the results of a GraphQL query primable, you must use a specific structure in your code. This structure is specifically required for the GQL query to be discovered and processed by the static analyzer used by the priming subsystem. Do not inline the query with your wire adapter function definition.

For example, this code results in a query that can be analyzed and primed:

```

```

In contrast, this example behaves the same as the preceding code, as long as you’re online, but does not result in the wire adapter results being primed. If the required data and metadata isn’t primed by some other mechanism, it won’t function while you’re offline.

```

```

## Delay Query Execution

This best practice is closely related to using getters to provide the GQL query string and variables, and uses the same code structures. It’s similarly essential to maximizing the completeness of priming activities performed by the mobile app prior to going offline. The details are described in [Delay Query Execution](https://developer.salesforce.com/docs/platform/graphql/guide/graphql-wire-lwc-best.html#delay-query-execution "HTML (New Window)") in the GraphQL API Developer Guide.

## Query Only the Data You Need

You can write a query that satisfies your data needs and gives you exactly what you asked for, nothing more and nothing less. Writing a brief query that satisfies your data requirements makes the return result predictable, while ensuring that your query remains performant.

See [Query Only the Data You Need](https://developer.salesforce.com/docs/platform/graphql/guide/graphql-wire-lwc-best.html#query-only-the-data-you-need "HTML (New Window)") in the GraphQL API Developer Guide for an example on how to use pagination to avoid loading a large number of records in a single query.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=mobile_offline)

#### Important

In the code example, totalCount isn’t supported for mobile use cases.

## Code Examples

```
// BEST PRACTICE
// This GQL query can be primed
@wire(graphql, {
  query: '$myQuery',
  variables: '$myVariables'
}) 
wiredData;

get myQuery() {
   return gql`query getSomeAccount($recordId: ID) {
              uiapi { query { Account(...) { } } }`; 
}
get myVariables() { return { recordId: '...' } }
```

```
// ANTI-PATTERN
// This inline GQL query cannot be primed
@wire(graphql, {
  query: gql`query getSomeAccount($recordId: ID) {
             uiapi { query { Account(...) { } } }`,
  variables: {recordId: '...'}
}) 
wiredData;
```
