---
title: "AgentWork"
domain: service-connector-api-developer-guide
topic: agentwork
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:45.482Z
estimatedTokens: 217
keywords: [AgentWork, record, Functions]
---

# AgentWork

> Represents information about the AgentWork
        record.

# AgentWork

Represents information about the AgentWork record.

## Constructor

new AgentWork(param)

## Functions Where Used

-   [onAgentWork()](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_onagentwork.htm "Send non-Voice related AgentWork events to the partner contact center.")

## Parameters

| Field | Details |
| --- | --- |
| param | TypeobjectDescriptionThe parameters associated with the AgentWork record. |
| param.workItemId | TypestringDescriptionThe unique ID of the associated MessagingSession record. |
| param.workId | TypestringDescriptionThe unique ID of the AgentWork record. |
| param.workEvent | TypeenumDescriptionThe type of AgentWork event. Possible event type values from WORK_EVENT include: ACCEPTED, ASSIGNED, CLOSED, COMPLETED, DECLINED, PAUSED, and UNPAUSED. |

## Related Topics

- onAgentWork() (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_onagentwork.htm)
