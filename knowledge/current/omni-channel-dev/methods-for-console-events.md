---
title: "Methods for Console Events"
domain: omni-channel-dev
topic: methods-for-console-events
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:20.007Z
estimatedTokens: 1361
keywords: [Console, Events, JavaScript, executed, certain, occur, user, closes, tab, addition, standard, there, few, specific, Omni-Channel]
---

# Methods for Console Events

> JavaScript can be executed when certain types of events occur in a console, such as
    when a user closes a tab. In addition to the standard methods for console events, there are a
    few events that are specific to Omni-Channel. These events apply to Salesforce Classic
    only.

# Methods for Console Events

JavaScript can be executed when certain types of events occur in a console, such as when a user closes a tab. In addition to the standard methods for console events, there are a few events that are specific to Omni-Channel. These events apply to Salesforce Classic only.

## Standard Console Events

| Event | Description | Payload |
| --- | --- | --- |
| sforce.console.ConsoleEvent.​OPEN_TAB | Fired when a primary tab or subtab is opened. Available in API version 30.0 or later. | id—the ID of the opened tabobjectId—the object ID of the opened tab, if available |
| sforce.console.ConsoleEvent.​CLOSE_TAB | Fired when a primary tab or subtab with a specified ID in the additionalParams argument is closed. Or, fired when a primary tab or subtab with no specified ID is closed. Available in API version 30.0 or later. | id—the ID of the closed tabobjectID—the object ID of the closed tab, if available |
| sforce.console.ConsoleEvent.​CONSOLE_LOGOUT | Delays the execution of logging out of a console when a user clicks Logout. When Logout is clicked:An overlay appears, which tells a user that logout is in progress.Callbacks are executed that have been registered by using sforce.console.ConsoleEvent.CONSOLE_LOGOUT.Console logout logic is executed.If the callback contains synchronous blocking code, the console logout code isn’t executed until the blocking code is executed. As a best practice, avoid synchronous blocking code or long code execution during logout.Available in API version 31.0 or later. | None |

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

The channel object contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| channelId | String | Retrieves the ID of a service channel that’s associated with a presence status. |
| developerName | String | Retrieves the developer name of the the service channel that’s associated with the channelId. |

## Methods for Console Events

| Method | Description |
| --- | --- |
| addEventListener() | Adds a listener for a custom event type or a standard event type when the event is fired. This method adds a listener for custom event types in API version 25.0 or later; it adds a listener for standard event types in API version 30.0 or later. |
| fireEvent() | Fires a custom event. This method is only available in API version 25.0 or later. |
| removeEventListener() | Removes a listener for a custom event type or a standard event type. This method removes a listener for custom event types in API version 25.0 or later; it removes a listener for standard event types in API version 30.0 or later. |
