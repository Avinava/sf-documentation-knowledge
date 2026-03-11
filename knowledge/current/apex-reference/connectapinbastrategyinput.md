---
title: "ConnectApi.NBAStrategyInput"
domain: apex-reference
topic: connectapinbastrategyinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.332Z
keywords: [ConnectApi.NBAStrategyInput]
---

# ConnectApi.NBAStrategyInput

# ConnectApi.NBAStrategyInput

A recommendation strategy.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contextRecordId | String | ID of the context record. For example, if the next best action is on a case detail page, the ID of the case. | Optional | 45.0 |
| maxResults | Integer | Maximum number of results. Valid values are from 1 to 25. The default is 3. | Optional | 45.0 |
| strategyContext | Map<String, String> | Variable and value mappings for the strategy. | Optional | 45.0 |
| debugTrace | Boolean | Specifies whether to return trace and debug information in the response (true) or not (false). If unspecified, the default is false. | Optional | 45.0 |