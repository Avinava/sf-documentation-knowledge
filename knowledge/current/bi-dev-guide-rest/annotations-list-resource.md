---
title: "Annotations List Resource"
domain: bi-dev-guide-rest
topic: annotations-list-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.050Z
estimatedTokens: 236
keywords: [Annotations, Resource, creates, annotation]
---

# Annotations List Resource

> Returns a list of annotations and creates an
    annotation.

# Annotations List Resource

Returns a list of annotations and creates an annotation.

Resource URL

```

```

Formats

JSON

Available Version

37.0

HTTP Methods

GET POST

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| assetId | Id | The ID of the asset. | Required | 37.0 |

The following REST URL shows how to use the assetId parameter in the GET request.

```

```

Response body for GET

[Annotation Collection](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_annotation_collection.htm "A collection of annotations.")

Request body for POST

[Annotation Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_annotation_input.htm "An Analytics annotation.")

Response body for POST

[Annotation](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_annotation.htm "An Analytics annotation.")

## Code Examples

```
/wave/annotations
```

```
/wave/annotations?assetId=<id>
```

## Related Topics

- Annotation Collection (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_annotation_collection.htm)
- Annotation Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_annotation_input.htm)
- Annotation (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_annotation.htm)
