---
title: "setAgentStatus"
domain: service-connector-api-developer-guide
topic: setagentstatus
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:45.454Z
estimatedTokens: 185
keywords: [setAgentStatus, status, rep]
---

# setAgentStatus

> Set status information for the rep.

# setAgentStatus

Set status information for the rep.

## Signature

setAgentStatus(agentStatus, statusInfo, enqueueNextState) → Promise.<[GenericResult](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_genericresult.htm "Represents a generic result type for a Connector API function.")\>

## Parameters

| Field | Details |
| --- | --- |
| agentStatus | TypestringDescriptionThe rep status, as configured in Salesforce. |
| statusInfo | TypeobjectDescriptionAdditional information about the rep status. |
| enqueueNextState | TypebooleanDescriptionIndicates whether the state should be enqueued, which updates the rep's status after a call ends. Defaults to false. |

## Related Topics

- GenericResult (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_genericresult.htm)
