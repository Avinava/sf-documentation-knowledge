---
title: "Replicated Field Collection"
domain: bi-dev-guide-rest
topic: replicated-field-collection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.526Z
estimatedTokens: 195
keywords: [Replicated, Collection, Analytics, dataset, known, connected]
---

# Replicated Field Collection

> A collection of fields for an Analytics replicated dataset, also known as a connected
  object.

# Replicated Field Collection

A collection of fields for an Analytics replicated dataset, also known as a connected object.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| fields | Replicated​Field[] | A list of fields belonging to the connected object. | Small, 37.0 | 37.0 |
| replicatedDataset | Asset​Reference | A reference to the replicated dataset that the fields belong to. | Small, 53.0 | 53.0 |
| url | String | URL to get the collection. | Small, 37.0 | 37.0 |

#### See Also

-   [Replicated Dataset Fields Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_replicateddatasets_id_fields.htm "Retrieves a list of fields for the specified connected object.")

## Related Topics

- Replicated​Field (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_replicated_field.htm)
- Asset​Reference (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_asset_reference.htm)
- Replicated Dataset Fields Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_replicateddatasets_id_fields.htm)
