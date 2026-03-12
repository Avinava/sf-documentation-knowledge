---
title: "Smart Data Discovery Field Mapping Analytics Dataset Field"
domain: bi-dev-guide-rest-sdd
topic: smart-data-discovery-field-mapping-analytics-dataset-field
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:05.776Z
estimatedTokens: 210
keywords: [Smart, Data, Discovery, Mapping, Analytics, Dataset, Einstein, mapped, source]
---

# Smart Data Discovery Field Mapping Analytics Dataset Field

> An Einstein Discovery field mapped from an analytics dataset source.

# Smart Data Discovery Field Mapping Analytics Dataset Field

An Einstein Discovery field mapped from an analytics dataset source.

Properties

Inherits properties from [Abstract​Smart​Data​Discovery​Field​Mapping​Source](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_abstract_smart_data_discovery_field_mapping_source.htm "The base Einstein Discovery field mapping source.").

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| sobject​Field​Join​Key | String | The sObject field name used as the join key. | Small, 48.0 | 48.0 |
| source | Asset​Reference | A source ID of the analytics dataset asset. | Small, 48.0 | 48.0 |
| source​Field​Join​Key | String | The source dataset field name used as the join key. | Small, 48.0 | 48.0 |

## Related Topics

- Abstract​Smart​Data​Discovery​Field​Mapping​Source (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_abstract_smart_data_discovery_field_mapping_source.htm)
- Asset​Reference (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_asset_reference.htm)
