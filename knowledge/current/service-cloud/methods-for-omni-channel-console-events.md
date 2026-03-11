---
title: "Methods for Omni-Channel Console Events"
domain: service-cloud
topic: methods-for-omni-channel-console-events
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.515Z
keywords: [Methods, Omni-Channel, Console, Events, channel]
---

# Methods for Omni-Channel Console Events

# Methods for Omni-Channel Console Events

JavaScript can be executed when certain types of events occur in a console, such as when a user closes a tab. In addition to the standard methods for console events, there are a few events that are specific to Omni-Channel. These events apply to Salesforce Classic only.

## Omni-Channel Console Events

| Event | Description | Payload |
| --- | --- | --- |
| sforce.console.ConsoleEvent.​PRESENCE.LOGIN_SUCCESS | Fired when an Omni-Channel user logs into Omni-Channel successfully.Available in API version 32.0 or later. | statusId—the ID of the agent’s current presence status. |
| sforce.console.ConsoleEvent.​PRESENCE.STATUS_CHANGED | Fired when a user changes his or her presence status.Available in API version 32.0 or later. | statusId—the ID of the agent’s current presence status.channels—channelJSON string of channel objects.statusName—the name of the agent’s current presence status.statusApiName—the API name of the agent’s current presence status. |
| sforce.console.ConsoleEvent.​PRESENCE.LOGOUT | Fired when a user logs out of Salesforce.Available in API version 32.0 or later. | None |
| sforce.console.ConsoleEvent.​PRESENCE.WORK_ASSIGNED | Fired when a user is assigned a new work item.Available in API version 32.0 or later. | workItemId—the ID of the object that’s routed through Omni-Channel. This object becomes a work assignment with a workId when it’s assigned to an agent.workId—the ID of a work assignment that’s routed to an agent. |
| sforce.console.ConsoleEvent.​PRESENCE.WORK_ACCEPTED | Fired when a user accepts a work assignment, or when a work assignment is automatically accepted.Available in API version 32.0 or later. | workItemId—the ID of the object that’s routed through Omni-Channel. This object becomes a work assignment with a workId when it’s assigned to an agent.workId—the ID of a work assignment that’s routed to an agent. |
| sforce.console.ConsoleEvent.​PRESENCE.WORK_DECLINED | Fired when a user declines a work assignment.Available in API version 32.0 or later. | workItemId—the ID of the object that’s routed through Omni-Channel. This object becomes a work assignment with a workId when it’s assigned to an agent.workId—the ID of a work assignment that’s routed to an agent. |
| sforce.console.ConsoleEvent.​PRESENCE.WORK_CLOSED | Fired when the status of an AgentWork object is changed to Closed.Available in API version 32.0 or later. | workItemId—the ID of the object that’s routed through Omni-Channel. This object becomes a work assignment with a workId when it’s assigned to an agent.workId—the ID of a work assignment that’s routed to an agent. |
| sforce.console.ConsoleEvent. PRESENCE.WORKLOAD_CHANGED | Fired when an agent’s workload changes. This includes receiving new work items, declining work items, and closing items in the console. It’s also fired when there’s a change to an agent’s capacity or Presence Configuration or when the agent goes offline in the Omni-Channel widget. | ConfiguredCapacity—the configured capacity for the agent.PreviousWorkload—the agent’s workload before the change.NewWorkload—the agent’s new workload after the change. |

## channel

The channel object contains the following functions:

| Name | Type | Description |
| --- | --- | --- |
| channelId | String | Retrieves the ID of a service channel that’s associated with a presence status. |
| developerName | String | Retrieves the developer name of the the service channel that’s associated with the channelId. |