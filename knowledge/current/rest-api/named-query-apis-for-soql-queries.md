---
title: "Named Query APIs for SOQL Queries"
domain: rest-api
topic: named-query-apis-for-soql-queries
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:44:25.473Z
keywords: [Named, Query, APIs, SOQL, Queries, Note]
---

# Named Query APIs for SOQL Queries

# Named Query APIs for SOQL Queries

Use Named Query API to create custom Salesforce Object Query Language (SOQL) queries that you can expose in REST API calls. Decide what data you want to expose, then create Named Query APIs to return that data. You can create Named Query APIs in Setup or in Visual Studio Code (VS Code).

If you've enabled the beta to allow use of Named Query APIs as agent actions, you can create agent actions from Named Query APIs. To use Named Query APIs as agent actions, see the [Agentforce Developer Guide](https://developer.salesforce.com/docs/einstein/genai/guide/agent-namedquery.html).

If you've enabled the REST API OpenAPI Beta in your org, then you can download an OpenAPI document describing the REST API that the Named Query API is exposed on. See the OpenAPI beta documentation.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_rest)

#### Note

OpenAPI specification documents may not accurately represent Named Query APIs.