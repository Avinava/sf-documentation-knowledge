---
title: "Two-Way Rep Status Syncing"
domain: voice-pt-developer-guide
topic: two-way-rep-status-syncing
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:21.953Z
estimatedTokens: 549
keywords: [Two-Way, Rep, Status, Syncing, presence, changed, Omni-Channel, widget, partner, connector, added, ability, change, passes, back]
---

# Two-Way Rep Status Syncing

> Rep status (that is, rep presence) can be changed from the Omni-Channel widget, which
        sends status information to the partner connector. We added the ability to change the rep
        status from the connector, which passes status information back to Salesforce.

# Two-Way Rep Status Syncing

Rep status (that is, rep presence) can be changed from the Omni-Channel widget, which sends status information to the partner connector. We added the ability to change the rep status from the connector, which passes status information back to Salesforce.

For example, a telephony partner system may have scheduled time breaks for the reps where they would want to change the rep status in Omni accordingly. If a rep is on a call, status change is ignored and doesn’t have any impact. In order to support complete two-way syncing of the status between Omni and the telephony system, the telephony system should persist a table with mapping between the Salesforce status ID and the partner status.

When the connector loads, the init() API is called, and the argument callCenterConfig contains a JSON field called userPresenceStatuses that can be parsed into a map of statusId: statusInfo. For example:

```

```

The statusId 0 is reserved for the Offline status. Other statusIDs represent Salesforce Omni-Channel presence statuses that are available for the user.

The statusInfo fields are:

-   statusName: The name of the status.
-   hasChannels: false indicates that the status is busy or offline. true indicates that it’s routable by a channel.
-   isOffline: true indicates that it’s an offline status (with statusId 0).
-   statusId: Salesforce status ID

In order to invoke the status change from the connector, call publishEvent() with the event SET\_AGENT\_STATUS and the required status ID. For example:

```

```

To change the status to offline:

```

```

See [setAgentStatus()](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_interface_setagentstatus.htm) for information on how to update the vendor rep status when the Omni-Channel status changes.

#### See Also

-   [*Service Cloud Connector API Reference*](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_api_overview.htm "Service Cloud Connector API Reference - HTML (New Window)")

## Code Examples

```
{
    "0": {
        "statusName": "Offline",
        "hasChannels": "false",
        "isOffline": "true",
        "statusId": "0"
    },
    "0N5xx0000004CSO": {
        "statusName": "Available",
        "hasChannels": "true",
        "isOffline": "false",
        "statusId": "0N5xx0000004CSO"
    },
    "0N5xx0000004D56": {
        "statusName": "Away",
        "hasChannels": "false",
        "isOffline": "false",
        "statusId": "0N5xx0000004D56"
    },
    "0N5xx0000004D3U": {
        "statusName": "Busy",
        "hasChannels": "false",
        "isOffline": "false",
        "statusId": "0N5xx0000004D3U"
    }
}
```

```
Const statusId = "0N5xx0000004D3U";
publishEvent({ eventType: "SET_AGENT_STATUS", payload: new AgentStatusInfo({ statusId }) });
```

```
Const offlineStatusId = "0";
publishEvent({ eventType: "SET_AGENT_STATUS", payload: new AgentStatusInfo({ statusId: offlineStatusId })});
```
