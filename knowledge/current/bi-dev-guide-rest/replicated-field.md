---
title: "Replicated Field"
domain: bi-dev-guide-rest
topic: replicated-field
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.521Z
estimatedTokens: 228
keywords: [Replicated, Analytics, dataset, known, connected]
---

# Replicated Field

> A field for an Analytics replicated dataset, also known as a connected
  object.

# Replicated Field

A field for an Analytics replicated dataset, also known as a connected object.

Properties

ReplicatedField inherits properties from the abstract [AbstractField](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_abstract_field.htm "The base definition of a dataset field."). These base properties appear in ReplicatedField alongside the properties defined explicitly in the following table.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| skipped | Boolean | If set to true, this field isn’t synced, but the field metadata can still be stored and retrieved. | Small, 37.0 | 37.0 |

#### See Also

-   [Replicated Dataset Fields Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_replicateddatasets_id_fields.htm "Retrieves a list of fields for the specified connected object.")

## Related Topics

- AbstractField (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_abstract_field.htm)
- Replicated Dataset Fields Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_replicateddatasets_id_fields.htm)
