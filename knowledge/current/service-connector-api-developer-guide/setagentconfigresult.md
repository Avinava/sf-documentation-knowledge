---
title: "SetAgentConfigResult"
domain: service-connector-api-developer-guide
topic: setagentconfigresult
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:45.604Z
estimatedTokens: 181
keywords: [SetAgentConfigResult, result, setAgentConfig, function, Functions]
---

# SetAgentConfigResult

> Represents the result for the setAgentConfig() function.

# SetAgentConfigResult

Represents the result for the setAgentConfig() function.

## Constructor

new AgentConfigResult(param)

## Functions Where Used

[setAgentConfig](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_setagentconfig.htm "Set configuration information for the rep. Examples of when this method is called include when the Omni-Channel widget loads and when the user saves their Omni-Channel widget settings.")

## Parameters

| Field | Details |
| --- | --- |
| param | TypeobjectDescriptionParameter associated with the result. |
| param.success | TypebooleanDescriptionIndicates whether the function succeeded. |

## Example

```

```

## Code Examples

```
New AgentConfigResult({
success:true })
```

## Related Topics

- setAgentConfig (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_setagentconfig.htm)
