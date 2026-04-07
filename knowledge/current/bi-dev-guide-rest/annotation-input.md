---
title: "Annotation Input"
domain: bi-dev-guide-rest
topic: annotation-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:36:54.551Z
estimatedTokens: 229
keywords: [Annotation, Analytics]
---

> An Analytics annotation.

# Annotation Input

An Analytics annotation.

Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| anchor | String | The anchor of the annotation. | Optional | 37.0 |
| asset | Asset​Reference​Input | The referenced asset of the annotation. | Required | 37.0 |
| feed​Element | Asset​Reference​Input | The referenced feed element of the annotation. | Required | 37.0 |
| resolved | Boolean | Indicates whether the state of the annotation is resolved or not. | Optional | 37.0 |

#### See Also

-   [Annotations List Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_annotations.htm "Returns a list of annotations and creates an annotation.")

-   [Annotation Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_annotations_id.htm "Returns an asset's annotations and updates an annotation.")

## Related Topics

- Asset​Reference​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_asset_reference_input.htm)
- Annotations List Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_annotations.htm)
- Annotation Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_annotations_id.htm)
