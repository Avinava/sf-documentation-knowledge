---
title: "Unsupported Record Collection"
domain: bi-dev-guide-rest
topic: unsupported-record-collection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.697Z
estimatedTokens: 157
keywords: [Unsupported, Record, Collection, specific, records, sharing, inheritance]
---

# Unsupported Record Collection

> The collection of specific records that unsupported for sharing inheritance.

# Unsupported Record Collection

The collection of specific records that unsupported for sharing inheritance.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| count | Integer | The count of records not covered by sharing inheritance. This value may not match the length of the values collection. | Supplemental, 50.0 | 50.0 |
| values | Unsupported​Record[] | The collection of specific records that are unsupported for sharing inheritance. The collection length may be shorter than the count due to limiting for the API. | Small, 50.0 | 50.0 |

## Related Topics

- Unsupported​Record (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_unsupported_record.htm)
