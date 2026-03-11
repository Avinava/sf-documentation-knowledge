---
title: "Compound Filters in the Apex Connector Framework"
domain: apex-guide
topic: compound-filters-in-the-apex-connector-framework
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:43:46.853Z
keywords: [Compound, Filters, Apex, Connector, Framework, See]
---

# Compound Filters in the Apex Connector Framework

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