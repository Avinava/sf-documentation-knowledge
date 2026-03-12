---
title: "Data Aggregation"
domain: salesforce-large-data-volumes-bp
topic: data-aggregation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:41.979Z
estimatedTokens: 164
keywords: [Data, Aggregation, customer, needed, aggregate, monthly, yearly, metrics, standard, reports, customer’s, were, stored, custom, objects]
---

# Data Aggregation

> The customer needed to aggregate monthly and yearly metrics using standard reports. The
    customer’s monthly and yearly details were stored in custom objects with four million and
    nine million records, respectively. The reports were aggregating across millions of records
    across the two obj

# Data Aggregation

## Situation

The customer needed to aggregate monthly and yearly metrics using standard reports. The customer’s monthly and yearly details were stored in custom objects with four million and nine million records, respectively. The reports were aggregating across millions of records across the two objects, and performance was less than optimal.

## Solution

The solution was to create an aggregation custom object that summarized the monthly and yearly values into the required format for the required reports. The reports were then executed from the aggregated custom object. The summarization object was populated using batch Apex.
