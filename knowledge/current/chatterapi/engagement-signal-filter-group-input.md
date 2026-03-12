---
title: "Engagement Signal Filter Group Input"
domain: chatterapi
topic: engagement-signal-filter-group-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.553Z
estimatedTokens: 118
keywords: [Engagement, Signal, Filter, Group, Input, filters, conjunctive, operator]
---

# Engagement Signal Filter Group Input

> A group of Engagement Signal filters with a conjunctive operator.

# Engagement Signal Filter Group Input

A group of Engagement Signal filters with a conjunctive operator.

## Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| conjunctiveOperator | Engagement Signal Filter Group Condition Enum | Operator to combine the filters in this group. The value can beANDOR | Required | 63.0 |
| filters | Engagement Signal Filter Input[] | List of filters. | Required | 63.0 |

## Related Topics

- Engagement Signal Filter Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_engagement_signal_filter_input.htm)
