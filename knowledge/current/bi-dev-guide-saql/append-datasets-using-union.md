---
title: "Append Datasets using union"
domain: bi-dev-guide-saql
topic: append-datasets-using-union
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.304Z
estimatedTokens: 391
keywords: [Append, Datasets, union, data, two, streams, stream, structure]
---

# Append Datasets using union

> You can append data from two or more data streams into a single data stream using
                  union. The data streams must have the same
            field names and structure.

# Append Datasets using union

You can append data from two or more data streams into a single data stream using union. The data streams must have the same field names and structure.

To use union, first load the dataset and then use foreach to do the projection. Repeat the process with another dataset. If the two resulting data streams have an identical structure, you can append them using union.

Let’s say that you have two opportunity datasets from different regions that you brought together using the Salesforce mulit-org connector. You want to add these datasets together to look at your pipeline as a whole.

The OppsRegion1 data stream contains these fields.

![Diagram showing the first dataset.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_saql_union_ds1.png&folder=bi_dev_guide_saql)

The OppsRegion2 data stream contains these fields.

![Diagram showing the second dataset.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_saql_union_ds2.png&folder=bi_dev_guide_saql)

Use union to combine the two data streams.

```

```

The resulting data stream contains both sets of data.

![Diagram showing the combined datasets.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_saql_union_bothds.png&folder=bi_dev_guide_saql)

#### See Also

-   [union](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_union.htm "Combines multiple result sets into one result set. The result sets must have the same field names and structure. You can use a different dataset to create each result set, or you can use the same dataset.")

## Code Examples

```
ops1 = load "OppsRegion1";

ops1 = foreach ops1 generate 'Account_Owner', 'Account_Type', 'Amount';

ops2 = load  "OppsRegion2";
ops2 = foreach ops2 generate 'Account_Owner', 'Account_Type', 'Amount';

-- ops1 and ops2 have the same structure, so we can use union
opps_total = union ops1, ops2;
```

## Related Topics

- union (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_union.htm)
