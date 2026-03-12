---
title: "AgentConfigResult"
domain: service-connector-api-developer-guide
topic: agentconfigresult
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:45.472Z
estimatedTokens: 239
keywords: [AgentConfigResult, result, getting, rep, phone, configuration, Functions, Objects, Referenced]
---

# AgentConfigResult

> Represents the result when getting rep phone
        configuration information.

# AgentConfigResult

Represents the result when getting rep phone configuration information.

## Constructor

new AgentConfigResult(param)

## Functions Where Used

-   [getAgentConfig()](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_getagentconfig.htm "Get configuration information for the rep.")

## Objects Referenced

-   [Phone](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_phone.htm "Represents information about a phone.")

## Parameters

| Field | Details |
| --- | --- |
| param | TypeobjectDescriptionThe agent (rep) config result. |
| param.phones | TypeArray<string>DescriptionOptional. Supported phone types. Phone type value can be "SOFT_PHONE" or "DESK_PHONE". |
| param.selectedPhone | TypePhoneDescriptionSelected phone object, which includes the type and number. |

## Example

```

```

## Code Examples

```
new AgentConfigResult({
    phones: ["SOFT_PHONE", "DESK_PHONE"],
    selectedPhone: new Phone("DESK_PHONE", “5554443333”)
})
```

## Related Topics

- getAgentConfig() (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_getagentconfig.htm)
- Phone (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_phone.htm)
