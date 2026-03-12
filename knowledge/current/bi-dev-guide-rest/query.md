---
title: "Query"
domain: bi-dev-guide-rest
topic: query
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.506Z
estimatedTokens: 226
keywords: [Query, written, SAQL, compact, form]
---

# Query

> A query written in SAQL or compact form.

# Query

A query written in SAQL or compact form.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| aggregate​Filters | Object | The query aggregate filters. | Small, 48.0 | 48.0 |
| column​Groups | Object | The query column groups. | Small, 56.0 | 56.0 |
| column​Totals | Object | The query column totals. | Small, 56.0 | 56.0 |
| limit | Object | The query limit. | Small, 48.0 | 48.0 |
| orders | Object | The query orders. | Small, 48.0 | 48.0 |
| query | String | The SAQL query text. | Small, 36.0 | 36.0 |
| row​Totals | Object | The query row totals. | Small, 56.0 | 56.0 |
| source​Filters | Compact​Form​Filter | The query source filters. | Small, 48.0 | 48.0 |
| sources | Compact​Form​Source | The query sources. | Small, 48.9 | 48.0 |
| version | Double | The version of this query. | Small, 36.0 | 36.0 |

## Related Topics

- Compact​Form​Filter (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_compact_form_filter.htm)
- Compact​Form​Source (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_compact_form_source.htm)
