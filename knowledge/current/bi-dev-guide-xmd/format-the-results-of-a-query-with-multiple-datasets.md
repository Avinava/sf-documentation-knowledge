---
title: "Format the Results of a Query with Multiple Datasets"
domain: bi-dev-guide-xmd
topic: format-the-results-of-a-query-with-multiple-datasets
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:07.739Z
estimatedTokens: 227
keywords: [Results, Query, Multiple, Datasets, formatted, XMD, loaded, dataset]
---

# Format the Results of a Query with Multiple Datasets

> When a query has multiple datasets, the query results are formatted using the XMD of
    the first loaded dataset.

# Format the Results of a Query with Multiple Datasets

When a query has multiple datasets, the query results are formatted using the XMD of the first loaded dataset.

For example, the Quota dataset is loaded first so its XMD is used to format the projected columns Amount and Percent Attained.

```

```

However, the Quota dataset’s XMD doesn't contain the Amount field, so the projected amount is formatted as a number rather than as currency.

![table without formatting](/docs/resources/img/en-us/260.0?doc_id=help%2Fimages%2Fbi_dashboard_steps_multidataset_noxml.png&folder=bi_dev_guide_xmd)

The Opportunity dataset’s XMD contains an Amount field that is formatted as currency. To format the amount as currency, load the Opportunity dataset first.

![table with formatting](/docs/resources/img/en-us/260.0?doc_id=help%2Fimages%2Fbi_dashboard_steps_multidataset_xmlapplied.png&folder=bi_dev_guide_xmd)

## Code Examples

```
-- The Quota dataset's XMD is used because it is loaded first
quota = load "Quota";
ops = load "Opportunity";
q = cogroup ops by 'Owner.Name', quota by 'Employee';
q = foreach q generate quota.'Employee' as 'Account Owner', sum(ops.'Amount') as 'Amount', trunc(sum(ops.'Amount')/sum(quota.'Quota')*100,2) as 'Percent Attained';
```
