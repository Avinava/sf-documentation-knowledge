---
title: "QueryAggregation Enum"
domain: apex-reference
topic: queryaggregation-enum
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:42:40.355Z
keywords: [QueryAggregation, Enum, Usage, Values]
---

# QueryAggregation Enum

# QueryAggregation Enum

Specifies how to aggregate a column in a query.

## Usage

Used by the [aggregation](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_ColumnSelection.htm#apex_DataSource_ColumnSelection_aggregation "How to aggregate the column’s data.") property on the [DataSource.ColumnSelection](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_ColumnSelection.htm#apex_class_DataSource_ColumnSelection "Identifies the list of columns to return during a query or search.") class.

## Enum Values

The following are the values of the DataSource.QueryAggregation enum.

| Value | Description |
| --- | --- |
| AVG | Reserved for future use. |
| COUNT | Returns the number of rows that meet the query criteria. |
| MAX | Reserved for future use. |
| MIN | Reserved for future use. |
| NONE | No aggregation. |
| SUM | Reserved for future use. |