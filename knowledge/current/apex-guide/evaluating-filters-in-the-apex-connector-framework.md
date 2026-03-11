---
title: "Evaluating Filters in the Apex Connector Framework"
domain: apex-guide
topic: evaluating-filters-in-the-apex-connector-framework
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.856Z
keywords: [Evaluating, Filters, Apex, Connector, Framework, See]
---

# Evaluating Filters in the Apex Connector Framework

# Evaluating Filters in the Apex Connector Framework

A filter evaluates to true for a row if that row matches the conditions that the filter describes.

For example, suppose that a DataSource.Filter has columnName set to meaningOfLife, columnValue set to 42, and type set to EQUALS. Any row in the remote table whose meaningOfLife column entry equals 42 is returned.

Suppose, instead, that the filter has type set to LESS\_THAN, columnValue set to 3, and columnName set to numericCol. We’d construct a DataSource.TableResult object that contains all the rows that have a numericCol value less than 3.

To improve performance, do all the filtering in the external system. You can, for example, translate the Filter object into a SQL or OData query, or map it to parameters on a SOAP query. If the external system returns a large set of data, and you do the filtering in your Apex code, you quickly exceed your governor limits.

If you can’t do all the filtering in the external system, do as much as possible there and return as little data as possible. Then filter the smaller collection of data in your Apex code.

#### See Also

-   [*Apex Reference Guide*: Filter Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_DataSource_Filter.htm "Apex Reference Guide: Filter Class - HTML (New Window)")