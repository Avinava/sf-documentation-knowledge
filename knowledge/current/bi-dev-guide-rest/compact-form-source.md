---
title: "Compact Form Source"
domain: bi-dev-guide-rest
topic: compact-form-source
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.061Z
estimatedTokens: 197
keywords: [Compact, Form, Source, query]
---

# Compact Form Source

> A compact form source for a query.

# Compact Form Source

A compact form source for a query.

## Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| cogroup​Type | Connect​Wave​Compact​Form​Cogroup​Type​Enum | The join type of the compact form. Valid values are:AntiInnerLeftOuterRightSemi | Small, 48.0 | 48.0 |
| columns | Compact​Form​Column[] | A list of the compact form source columns. | Small, 48.0 | 48.0 |
| filters | Object | The compact form source column filters. | Small, 52.0 | 52.0 |
| groups | Object | The compact form source groups. | Small, 48.0 | 48.0 |
| joins | Compact​Form​Join[] | A list of the compact form source joins. | Small, 58.0 | 58.0 |
| name | String | The compact form source name. | Small, 48.0 | 48.0 |

## Related Topics

- Compact​Form​Column (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_compact_form_column.htm)
- Compact​Form​Join (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_compact_form_join.htm)
