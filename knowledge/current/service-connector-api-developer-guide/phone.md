---
title: "Phone"
domain: service-connector-api-developer-guide
topic: phone
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:45.573Z
estimatedTokens: 189
keywords: [Phone, Objects]
---

# Phone

> Represents information about a phone.

# Phone

Represents information about a phone.

## Constructor

new Phone(param)

## Objects Where Used

-   [AgentConfigResult](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_agentconfigresult.htm "Represents the result when getting rep phone configuration information.")

## Parameters

| Field | Details |
| --- | --- |
| param | TypeobjectDescriptionParameters associated with a phone. |
| param.type | TypestringDescriptionThe type of phone. Phone type value can be "SOFT_PHONE" or "DESK_PHONE". |
| param.number | TypestringDescriptionThe phone number associated with this phone. This value is optional when the type is SOFT_PHONE and mandatory when the type is DESK_PHONE. |

## Related Topics

- AgentConfigResult (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_agentconfigresult.htm)
