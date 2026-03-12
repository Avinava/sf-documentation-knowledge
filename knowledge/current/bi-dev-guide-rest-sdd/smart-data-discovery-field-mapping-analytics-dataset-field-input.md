---
title: "Smart Data Discovery Field Mapping Analytics Dataset Field Input"
domain: bi-dev-guide-rest-sdd
topic: smart-data-discovery-field-mapping-analytics-dataset-field-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:05.186Z
estimatedTokens: 216
keywords: [Smart, Data, Discovery, Mapping, Analytics, Dataset, Input, Einstein, mapped, source]
---

# Smart Data Discovery Field Mapping Analytics Dataset Field Input

> Input for an Einstein Discovery field mapped from an analytics dataset source.

# Smart Data Discovery Field Mapping Analytics Dataset Field Input

Input for an Einstein Discovery field mapped from an analytics dataset source.

Properties

Inherits properties from [Abstract​Smart​Data​Discovery​Field​Mapping​Source​Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_abstract_smart_data_discovery_field_mapping_source_input.htm "The base Einstein Discovery field mapping source input.").

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| sobject​Field​Join​Key | String | The sObject field name used as the join key. | Required | 48.0 |
| source | Asset​Reference​Input | A source ID of the analytics dataset asset. | Required | 48.0 |
| source​Field​Join​Key | String | The source dataset field name used as the join key. | Required | 48.0 |

## Related Topics

- Abstract​Smart​Data​Discovery​Field​Mapping​Source​Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_abstract_smart_data_discovery_field_mapping_source_input.htm)
- Asset​Reference​Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_asset_reference_input.htm)
