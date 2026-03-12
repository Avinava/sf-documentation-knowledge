---
title: "Engagement Signal Parameter"
domain: chatterapi
topic: engagement-signal-parameter
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.440Z
estimatedTokens: 163
keywords: [Engagement, Signal, definition]
---

# Engagement Signal Parameter

> Parameter definition in an Engagement Signal.

# Engagement Signal Parameter

Parameter definition in an Engagement Signal.

## Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| name | String | The name of the parameter. | Small, 63.0 | 63.0 |
| label | String | The label of the parameter. | Small, 63.0 | 63.0 |
| field | Field | A field on the content object DMO or its related DMO. | Small, 63.0 | 63.0 |
| operator | Engagement Signal Filter Operator Enum | Filter operator for the parameter. | Small, 63.0 | 63.0 |
| required | Boolean | Whether a value is required for this parameter. | Small, 63.0 | 63.0 |

## Related Topics

- Field (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_engagement_signal_field.htm)
