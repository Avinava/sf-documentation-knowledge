---
title: "CRM Analytics Apex QueryBuilder Examples"
domain: bi-dev-guide-sdk
topic: crm-analytics-apex-querybuilder-examples
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.855Z
estimatedTokens: 367
keywords: [CRM, Analytics, Apex, QueryBuilder, Examples, Build, simple, complex, SAQL, queries]
---

# CRM Analytics Apex QueryBuilder Examples

> Build simple or complex SAQL queries using QueryBuilder.

# CRM Analytics Apex QueryBuilder Examples

Build simple or complex SAQL queries using QueryBuilder.

QueryBuilder is the core of the CRM Analytics Apex feature set, so let’s take a closer look.

1\. Here’s a simple count query:

```

```

Output:

```

```

2\. Query selecting specific attributes and using aliases.

```

```

Output:

```

```

3\. Query using a filter condition.

```

```

Output:

```

```

4\. Query with a limit statement.

```

```

Output:

```

```

5\. Query with an order statement.

```

```

Output:

```

```

6\. Query with a union statement.

```

```

Output:

```

```

7\. Executing the query to get the result set via Query Builder.

```

```

8\. Example of grouping by a specific dataset attribute.

```

```

Output:

```

```

#### See Also

-   [CRM Analytics Apex Lens](atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_apex_lens.htm "Use the Lenses class to retrieve a collection of CRM Analytics lens assets and to describe a single lens asset.")

-   [CRM Analytics Apex Query](atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_apex_query.htm "Query your data in CRM Analytics from any Apex class. Construct well-formed queries using the query builder.")

-   [CRM Analytics Apex Templates](atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_apex_templates.htm "Use the Templates class to retrieve a collection of CRM Analytics templates, describe a single template and template configuration.")

## Code Examples

```
Wave.ProjectionNode[] projs = new Wave.ProjectionNode[]{Wave.QueryBuilder.count().alias('c')};
String query = Wave.QueryBuilder.load('datasetId', 'datasetVersionId').group().foreach(projs).build('q');
```

```
q = load "datasetId/datasetVersionId";
q = group q by all;
q = foreach q generate count as c;
```

```
Wave.ProjectionNode[] projs = new Wave.ProjectionNode[]{Wave.QueryBuilder.get('Name'), Wave.QueryBuilder.get('AnnualRevenue').alias('Revenue')};
String query = Wave.QueryBuilder.load('datasetId','datasetVersionId').foreach(projs).build('q');
```

```
q = load "datasetId/datasetVersionId";
q = foreach q generate Name,AnnualRevenue as Revenue;
```

```
Wave.ProjectionNode[] projs = new Wave.ProjectionNode[]{Wave.QueryBuilder.get('Name'), Wave.QueryBuilder.get('AnnualRevenue').alias('Revenue')};
String query = Wave.QueryBuilder.load('datasetId','datasetVersionId').foreach(projs).filter('Name != \'My Name\'').build('q');
```

## Related Topics

- CRM Analytics Apex Lens (atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_apex_lens.htm)
- CRM Analytics Apex Query (atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_apex_query.htm)
- CRM Analytics Apex Templates (atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_apex_templates.htm)
