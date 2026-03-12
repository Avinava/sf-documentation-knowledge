---
title: "Using Relationship Queries with the Partner WSDL"
domain: soql-sosl
topic: using-relationship-queries-with-the-partner-wsdl
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:19.591Z
estimatedTokens: 209
keywords: [Relationship, Queries, Partner, WSDL, doesn’t, contain, detailed, that’s, enterprise, SOQL, query, execute, describeSObjects, call, results]
---

# Using Relationship Queries with the Partner WSDL

> The partner WSDL doesn’t contain the detailed type information that’s available in the
    enterprise WSDL which you need for a relationship SOQL query. You must first execute a describeSObjects() call, and from the results, gather the
    information you need to create your relationship query:

# Using Relationship Queries with the Partner WSDL

The partner WSDL doesn’t contain the detailed type information that’s available in the enterprise WSDL which you need for a relationship SOQL query. You must first execute a describeSObjects() call, and from the results, gather the information you need to create your relationship query:

-   The relationshipName value for one-to-many relationships, for example, in an Account object, the relationship name for the asset child is Assets.
-   The reference fields available for the relevant object, for example, whoId, whatId, or ownerId on a Lead, Case, or custom object.

For an example of using the partner WSDL with relationship queries, see the [examples on developer.salesforce.com](https://developer.salesforce.com/page/RelationshipQuery "HTML (New Window)") (requires login).
