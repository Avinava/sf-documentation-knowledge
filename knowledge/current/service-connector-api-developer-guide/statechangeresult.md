---
title: "StateChangeResult"
domain: service-connector-api-developer-guide
topic: statechangeresult
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:45.622Z
estimatedTokens: 97
keywords: [StateChangeResult, Amazon, Connect, change, rep’s, vendor-side, state]
---

# StateChangeResult

> For Amazon Connect, represents a change in the rep’s vendor-side state.

# StateChangeResult

For Amazon Connect, represents a change in the rep’s vendor-side state.

## Signature

StateChangeResult

## Fields

| Field | Details |
| --- | --- |
| newVendorStateInfo | TypeAgentVendorStatusInfoDescriptionThe vendor state after the change.RequiredNo |
| oldVendorStateInfo | TypeAgentVendorStatusInfoDescriptionThe vendor state prior to the change.RequiredNo |

## Related Topics

- AgentVendorStatusInfo (atlas.en-us.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_objects_agentvendorstatusinfo.htm)
