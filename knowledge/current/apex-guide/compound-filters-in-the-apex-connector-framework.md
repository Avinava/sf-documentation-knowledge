---
title: "Compound Filters in the Apex Connector Framework"
domain: apex-guide
topic: compound-filters-in-the-apex-connector-framework
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:33.028Z
estimatedTokens: 199
keywords: [Compound, Filters, Apex, Connector, Framework, child, stored, subfilters]
---

# Compound Filters in the Apex Connector Framework

> Filters can have child filters, which are stored in the subfilters property.

# Compound Filters in the Apex Connector Framework

Filters can have child filters, which are stored in the subfilters property.

If a filter has children, the filter type must be one of the following.

| Filter Type | Description |
| --- | --- |
| AND_ | We return all rows that match all of the subfilters. |
| OR_ | We return all rows that match any of the subfilters. |
| NOT_ | The filter reverses how its child filter evaluates rows. Filters of this type can have only one subfilter. |

This code example illustrates how to deal with compound filters.

```

```

#### See Also

-   [*Apex Reference Guide*: Filter Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_DataSource_Filter.htm "Apex Reference Guide: Filter Class - HTML (New Window)")

## Code Examples

```apex
override global DataSource.TableResult query(DataSource.QueryContext context) {
    // Call out to an external data source and retrieve a set of records.
    // We should attempt to get as much information as possible about the 
    // query from the QueryContext, to minimize the number of records 
    // that we return.
    List<Map<String,Object>> rows = retrieveData(context);
    
    // This only filters the results. Anything in the query that we don’t 
    // currently support, such as aggregation or sorting, is ignored.
    return DataSource.TableResult.get(context, postFilterRecords(
        context.tableSelection.filter, rows));
}

private List<Map<String,Object>> retrieveData(DataSource.QueryContext context) {
    // Call out to an external data source. Form the callout so that
    // it filters as much as possible on the remote site,
    // based on the parameters in the QueryContext.
    return ...;
}

private List<Map<String,Object>> postFilterRecords(
    DataSource.Filter filter, List<Map<String,Object>> rows) {
    if (filter == null) {
        return rows;
    }
    DataSource.FilterType type = filter.type;
    List<Map<String,Object>> retainedRows = new List<Map<String,Object>>();
    if (type == DataSource.FilterType.NOT_) {
        // We expect one Filter in the subfilters.
        DataSource.Filter subfilter = filter.subfilters.get(0);
        for (Map<String,Object> row : rows) {
            if (!evaluate(filter, row)) {
                retainedRows.add(row);
            }
        }
        return retainedRows;
    } else if (type == DataSource.FilterType.AND_) {
        // For each filter, find all matches; anything that matches ALL filters 
        // is returned.
        retainedRows = rows;
        for (DataSource.Filter subfilter : filter.subfilters) {
            retainedRows = postFilterRecords(subfilter, retainedRows);
        }
        return retainedRows;
    } else if (type == DataSource.FilterType.OR_) {
        // For each filter, find all matches. Anything that matches 
        // at least one filter is returned.
        for (DataSource.Filter subfilter : filter.subfilters) {
            List<Map<String,Object>> matchedRows = postFilterRecords(
                subfilter, rows);
            retainedRows.addAll(matchedRows);
        }
        return retainedRows;
    } else {
        // Find all matches for this filter in our collection of records.
        for (Map<String,Object> row : rows) {
            if (evaluate(filter, row)) {
                retainedRows.add(row);
            }
        }
        return retainedRows;
    }
}

private Boolean evaluate(DataSource.Filter filter, Map<String,Object> row) {
    if (filter.type == DataSource.FilterType.EQUALS) {
        String columnName = filter.columnName;
        Object expectedValue = filter.columnValue;
        Object foundValue = row.get(columnName);
        return expectedValue.equals(foundValue);
    } else {
        // Throw an exception; implementing other filter types is left
        // as an exercise for the reader.
        throwException('Unexpected filter type: ' + filter.type);
    }
    return false;
}
```
