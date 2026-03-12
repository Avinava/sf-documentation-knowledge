---
title: "CRM Analytics Apex Query"
domain: bi-dev-guide-sdk
topic: crm-analytics-apex-query
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:06.861Z
estimatedTokens: 505
keywords: [CRM, Analytics, Apex, Query, data, any, Construct, well-formed, queries, builder]
---

# CRM Analytics Apex Query

> Query your data in CRM Analytics from any Apex class. Construct well-formed queries
  using the query builder.

# CRM Analytics Apex Query

Query your data in CRM Analytics from any Apex class. Construct well-formed queries using the query builder.

The Apex SDK query features include the executeQuery method and the Wave.QueryBuilder class.

ConnectApi.Wave.executeQuery

At its simplest, use the executeQuery function (exposed through the ConnectApi namespace) to pass a SAQL query from an Apex page to CRM Analytics, and get a response in the form of JSON. For example, this sample sends ‘your SAQL query’ to CRM Analytics.

```

```

Sending queries like this is useful, but relies on the developer coding well-formed SAQL queries. Wouldn’t it be great if a class constructed the queries for you?

Wave.QueryBuilder

The Wave.QueryBuilder class is the most convenient, preferred, and safest way to construct a SAQL query string for execution. It’s not an exhaustive implementation of all possible SAQL queries—so sometimes you must write your own—but it does cover the vast majority of use cases, including:

-   load dataset statement

-   foreach statement

-   group statement

-   order statement

-   limit statement

-   filter statement

-   functions such as min, max, count, avg, unique, as, sum

Use Wave.QueryBuilder and its associated classes, Wave.ProjectionNode and Wave.QueryNode, to incrementally build your SAQL statement. For example:

```

```

#### See Also

-   [CRM Analytics Apex Lens](atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_apex_lens.htm "Use the Lenses class to retrieve a collection of CRM Analytics lens assets and to describe a single lens asset.")

-   [CRM Analytics Apex QueryBuilder Examples](atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_apex_examples.htm "Build simple or complex SAQL queries using QueryBuilder.")

-   [CRM Analytics Apex Templates](atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_apex_templates.htm "Use the Templates class to retrieve a collection of CRM Analytics templates, describe a single template and template configuration.")

## Code Examples

```
String query = '[your SAQL query]';     
   ConnectApi.LiteralJson result =  ConnectApi.Wave.executeQuery(query);
   String response = result.json;
```

```
Wave.ProjectionNode[] projs = new Wave.ProjectionNode[]{
   Wave.QueryBuilder.get('State').alias('State'), 
   Wave.QueryBuilder.get('City').alias('City'), 
   Wave.QueryBuilder.get('Revenue').avg().alias('avg_Revenue'), 
   Wave.QueryBuilder.get('Revenue').sum().alias('sum_Revenue'),                                     
   Wave.QueryBuilder.count().alias('count')};
   ConnectApi.LiteralJson result = Wave.QueryBuilder.load('0FbD00000004DSzKAM', '0FcD00000004FEZKA2')
   .group(new String[]{'State', 'City'})
   .foreach(projs)
   .execute('q');
   String response = result.json;
```

## Related Topics

- CRM Analytics Apex Lens (atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_apex_lens.htm)
- CRM Analytics Apex QueryBuilder Examples (atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_apex_examples.htm)
- CRM Analytics Apex Templates (atlas.en-us.bi_dev_guide_sdk.meta/bi_dev_guide_sdk/bi_sdk_apex_templates.htm)
