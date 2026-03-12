---
title: "Engagement Signal Parameter Input"
domain: chatterapi
topic: engagement-signal-parameter-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.576Z
estimatedTokens: 166
keywords: [Engagement, Signal, Input, definition]
---

# Engagement Signal Parameter Input

> Parameter definition used in Engagement Signal input.

# Engagement Signal Parameter Input

Parameter definition used in Engagement Signal input.

## Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| name | String | The name of the parameter. | Required | 63.0 |
| label | String | The label of the parameter. | Required | 63.0 |
| field | Field Input | A field on the content object DMO or its related DMO. | Required | 63.0 |
| operator | Engagement Signal Filter Operator Enum | Filter operator for the parameter. The value can beEQUALS | Required | 63.0 |
| required | Boolean | Whether a value is required for this parameter. | Required | 63.0 |

## Related Topics

- Field Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_engagement_signal_field_input.htm)
