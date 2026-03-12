---
title: "Narrative Resource"
domain: bi-dev-guide-rest-sdd
topic: narrative-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:05.418Z
estimatedTokens: 171
keywords: [Narrative, Resource, data, Einstein, Discovery, story]
---

# Narrative Resource

> Returns the narrative data for an Einstein Discovery story.

# Narrative Resource

Returns the narrative data for an Einstein Discovery story.

Resource URL

```

```

Formats

JSON

Available Version

51.0

HTTP Methods

POST

Request body for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| narrative | Smart​Data​Discovery​Narrative​Input | The narrative to return data for. | Optional | 51.0 |

Response body for POST

[Smart Data Discovery Narrative Field Collection](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_narrative_field_collection.htm "A collection of narrative data for an Einstein Discovery story.")

## Code Examples

```
/smartdatadiscovery/narrative
```

## Related Topics

- Smart​Data​Discovery​Narrative​Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_narrative_input.htm)
- Smart Data Discovery Narrative Field Collection (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_narrative_field_collection.htm)
