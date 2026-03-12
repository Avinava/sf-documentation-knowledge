---
title: "Streaming Parameters Input"
domain: salesforce-recipes-api
topic: streaming-parameters-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:42.506Z
estimatedTokens: 125
keywords: [Streaming, Input, loading, data]
---

# Streaming Parameters Input

> The streaming parameters for loading data.

# Streaming Parameters Input

The streaming parameters for loading data.

## Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| output​Mode | Output​Mode​Enum | The output mode. Valid values are:AppendCompleteUpdate | Required | 57.0 |
| trigger​Interval​Sec | Integer | The trigger interval in seconds. | Required | 57.0 |
| trigger​Type | Trigger​Type​Enum | The trigger type. Valid values are:Fixed | Required | 55.0 |
