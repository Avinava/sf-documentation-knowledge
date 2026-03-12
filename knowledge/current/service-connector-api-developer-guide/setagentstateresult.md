---
title: "SetAgentStateResult"
domain: service-connector-api-developer-guide
topic: setagentstateresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:45.607Z
estimatedTokens: 207
keywords: [SetAgentStateResult, setAgentStatus, whether, status, succeeded, follow-up, sync, Amazon, Connect]
---

# SetAgentStateResult

> Return value for setAgentStatus; indicates whether the status update succeeded and
        whether a follow-up sync is required. Used with Amazon Connect.

# SetAgentStateResult

Return value for setAgentStatus; indicates whether the status update succeeded and whether a follow-up sync is required. Used with Amazon Connect.

## Signature

SetAgentStateResult

## Fields

| Field | Details |
| --- | --- |
| success | TypebooleanDescriptionIndicates whether the status change request succeeded.RequiredYes |
| isStatusSyncNeeded | TypebooleanDescriptionIf true, Salesforce needs to perform a follow-up sync because the vendor’s agent state couldn’t be changed immediately (for example, the agent is on a call).RequiredNo (defaults to true) |

This object extends [GenericResult](atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_genericresult.htm "Represents a generic result type for a Connector API function.").

## Related Topics

- GenericResult (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_genericresult.htm)
