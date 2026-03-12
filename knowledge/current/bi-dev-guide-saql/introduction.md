---
title: "Introduction"
domain: bi-dev-guide-saql
topic: introduction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.682Z
estimatedTokens: 360
keywords: [Introduction, actions, take, Analytics, result, SAQL, queries, Every, lens, dashboard, explorer, action, generates, executes, query]
---

# Introduction

> Most actions you take in Analytics result in one or more SAQL queries. Every lens,
        dashboard, and explorer action generates and executes a SAQL query to build the data needed
        for the visualization.

# Introduction

Most actions you take in Analytics result in one or more SAQL queries. Every lens, dashboard, and explorer action generates and executes a SAQL query to build the data needed for the visualization.

Analytics evaluates queries, widgets, and layouts to render a dashboard. Behind every widget is a SAQL query which is sent the query engine for execution. The resulting data is passed to the charting library, which renders it using corresponding widget definitions. SAQL is influenced by the Apache Pig Latin (pigql) syntax, but their implementations differ, and they are not compatible.

How the components fit together ![Diagram showing stylized relationship between client/server components](/docs/resources/img/en-us/260.0?doc_id=images%2Fwave_saql_perf_query_journey1.png&folder=bi_dev_guide_saql)

Developers can write SAQL to access Analytics data, either via the Analytics REST API, or by creating and editing SAQL queries contained in the dashboard JSON.

A SAQL query loads an input dataset, operates on it, and outputs a results dataset. Each SAQL statement has an input stream, an operation, and an output stream. Statements can span multiple lines and must end with a semicolon. Each query line is assigned to a named stream. A named stream can be used as input to any subsequent statement in the same query. The only exception to this rule is the last line in a query, which you don’t need to assign explicitly.
