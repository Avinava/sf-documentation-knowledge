---
title: "Aggregation for Salesforce Connect Custom Adapters"
domain: apex-guide
topic: aggregation-for-salesforce-connect-custom-adapters
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.770Z
keywords: [Aggregation, Salesforce, Connect, Custom, Adapters, See]
---

# Aggregation for Salesforce Connect Custom Adapters

# Aggregation for Salesforce Connect Custom Adapters

If you receive a COUNT() query, the selected column has the value QueryAggregation.COUNT in its aggregation property. The selected column is provided in the columnsSelected property on the tableSelection for the DataSource.QueryContext.

The following example illustrates how to apply the value of the aggregation property to handle COUNT() queries.

```

```

An aggregate query can still have filters, so your query method can be implemented like the following example to support basic aggregation queries, with or without filters.

```

```

#### See Also

-   [*Apex Reference Guide*: QueryContext Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_DataSource_QueryContext.htm "Apex Reference Guide: QueryContext Class - HTML (New Window)")
    
-   [Create a Sample DataSource.Connection Class Class](atlas.en-us.apexcode.meta/apexcode/apex_connector_start_connection_class.htm "First, create a DataSource.Connection class to enable Salesforce to obtain the external system’s schema and to handle queries and searches of the external data.")