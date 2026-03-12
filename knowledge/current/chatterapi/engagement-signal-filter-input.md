---
title: "Engagement Signal Filter Input"
domain: chatterapi
topic: engagement-signal-filter-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.556Z
estimatedTokens: 150
keywords: [Engagement, Signal, Filter, Input, group]
---

# Engagement Signal Filter Input

> Filter used within an Engagement Signal filter group.

# Engagement Signal Filter Input

Filter used within an Engagement Signal filter group.

## Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| action | Engagement Signal Filter Action Enum | Filter action. The value can beINCLUDESEXCLUDES | Required | 63.0 |
| operator | Engagement Signal Filter Operator Enum | Comparison operator. The value can beEQUALS | Required | 63.0 |
| field | Field Input | A field on the content object DMO or its related DMO. | Required | 63.0 |
| values | String[] | List of values. | Required | 63.0 |

## Related Topics

- Field Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_engagement_signal_field_input.htm)
