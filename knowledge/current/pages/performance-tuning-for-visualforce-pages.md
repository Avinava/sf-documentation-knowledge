---
title: "Performance Tuning for Visualforce Pages"
domain: pages
topic: performance-tuning-for-visualforce-pages
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:24.573Z
estimatedTokens: 337
keywords: [Performance, Tuning, Visualforce, Pages, aspect, mobile, caching, mechanism, help, tune, Resources]
---

# Performance Tuning for Visualforce Pages

> Performance is an important aspect of mobile Visualforce pages. Visualforce has a
    caching mechanism to help you tune the performance of your pages.

# Performance Tuning for Visualforce Pages

Performance is an important aspect of mobile Visualforce pages. Visualforce has a caching mechanism to help you tune the performance of your pages.

To enable caching for a page, use this statement:

```

```

The parameters for page caching are:

| Attribute | Description |
| --- | --- |
| cache | Boolean value that specifies whether the browser should cache the page. If not specified, defaults to false. |
| expires | Integer value that specifies the period of cache in seconds. |

For more information, see [Force.com Sites Best Practices](https://developer.salesforce.com/page/Force.com_Sites_Best_Practices) on Developerforce

## More Resources

Here are some more resources to help you tune the performance of your Salesforce apps:

-   [Inside the Force.com Query Optimizer](https://developer.salesforce.com/page/Webinar:_Inside_the_Force.com_Query_Optimizer_%282013-Apr%29#!) (webinar)
-   [Maximizing the Performance of Force.com SOQL, Reports, and List Views](http://blogs.developerforce.com/engineering/2013/07/maximizing-the-performance-of-force-com-soql-reports-and-list-views.html) (blog post)
-   [Force.com SOQL Best Practices: Nulls and Formula Fields](https://developer.salesforce.com/blogs/engineering/2013/02/force-com-soql-best-practices-nulls-and-formula-fields.html) (blog post)

## Code Examples

```
<apex:page cache="true" expires="600">
```
