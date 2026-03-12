---
title: "Methods for Omni-Channel"
domain: service-cloud
topic: methods-for-omni-channel
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:56.236Z
estimatedTokens: 869
keywords: [Omni-Channel, comprehensive, customer, service, solution, lets, call, center, route, any, incoming, work, item—including, cases, chats]
---

# Methods for Omni-Channel

> Omni-Channel is a comprehensive customer service solution that lets your call center route
      any type of incoming work item—including cases, chats, phone calls, or leads—to
      the most qualified, available agents in your organization. Omni-Channel provides a
      customizable customer servic

# Methods for Omni-Channel

Omni-Channel is a comprehensive customer service solution that lets your call center route any type of incoming work item—including cases, chats, phone calls, or leads—to the most qualified, available agents in your organization. Omni-Channel provides a customizable customer service solution that integrates seamlessly into the Salesforce console and benefits your customers and support agents.

For more information on Omni-Channel, see Set Up Omni-Channel.

-   **[acceptAgentWork](atlas.en-us.api_console.meta/api_console/sforce_api_console_acceptagentwork.htm)**
    Accepts a work item that’s assigned to an agent. Available in API versions 32.0 and later.
-   **[closeAgentWork](atlas.en-us.api_console.meta/api_console/sforce_api_console_closeagentwork.htm)**
    Changes the status of a work item to “Closed” and removes it from the list of work items in the Omni-Channel widget. Available in API versions 32.0 and later.
-   **[declineAgentWork](atlas.en-us.api_console.meta/api_console/sforce_api_console_declineagentwork.htm)**
    Declines a work item that’s assigned to an agent. Available in API versions 32.0 and later.
-   **[getAgentWorks](atlas.en-us.api_console.meta/api_console/sforce_api_console_getagentworks.htm)**
    Returns a list of work items that are currently assigned to an agent and open in the agent’s workspace. Available in API versions 32.0 and later.
-   **[getAgentWorkload](atlas.en-us.api_console.meta/api_console/sforce_api_console_getAgentWorkload.htm)**
    In API version 35.0 and later, we can retrieve an agent’s currently assigned workload. Use this method for rerouting work to available agents.
-   **[getServicePresenceStatusChannels](atlas.en-us.api_console.meta/api_console/sforce_api_console_getservicepresencestatuschannels.htm)**
    Retrieves the service channels that are associated with an Omni-Channel user’s current presence status. Available in API versions 32.0 and later.
-   **[getServicePresenceStatusId](atlas.en-us.api_console.meta/api_console/sforce_api_console_getservicepresencestatusid.htm)**
    Retrieves an agent’s current presence status. Available in API versions 32.0 and later.
-   **[login](atlas.en-us.api_console.meta/api_console/sforce_api_console_login.htm)**
    Logs an agent into Omni-Channel with a specific presence status. You also can use this method to reconnect to Omni-Channel after a connection error. Available in API versions 32.0 and later.
-   **[logout](atlas.en-us.api_console.meta/api_console/sforce_api_console_logout.htm)**
    Logs an agent out of Omni-Channel. Available in API versions 32.0 and later.
-   **[setServicePresenceStatus](atlas.en-us.api_console.meta/api_console/sforce_api_console_setservicepresencestatus.htm)**
    Sets an agent's presence status to a status with a particular ID. In API version 35.0 and later, we log the user into presence if that user is not already logged in, so you don’t have to make additional calls. You also can use this method to reconnect to Omni-Channel after a connection error.
-   **[Methods for Omni-Channel Console Events](atlas.en-us.api_console.meta/api_console/sforce_api_console_omnichannel_methods_events.htm)**
    JavaScript can be executed when certain types of events occur in a console, such as when a user closes a tab. In addition to the standard methods for console events, there are a few events that are specific to Omni-Channel. These events apply to Salesforce Classic only.

## Related Topics

- acceptAgentWork (atlas.en-us.api_console.meta/api_console/sforce_api_console_acceptagentwork.htm)
- closeAgentWork (atlas.en-us.api_console.meta/api_console/sforce_api_console_closeagentwork.htm)
- declineAgentWork (atlas.en-us.api_console.meta/api_console/sforce_api_console_declineagentwork.htm)
- getAgentWorks (atlas.en-us.api_console.meta/api_console/sforce_api_console_getagentworks.htm)
- getAgentWorkload (atlas.en-us.api_console.meta/api_console/sforce_api_console_getAgentWorkload.htm)
- getServicePresenceStatusChannels (atlas.en-us.api_console.meta/api_console/sforce_api_console_getservicepresencestatuschannels.htm)
- getServicePresenceStatusId (atlas.en-us.api_console.meta/api_console/sforce_api_console_getservicepresencestatusid.htm)
- login (atlas.en-us.api_console.meta/api_console/sforce_api_console_login.htm)
- logout (atlas.en-us.api_console.meta/api_console/sforce_api_console_logout.htm)
- setServicePresenceStatus (atlas.en-us.api_console.meta/api_console/sforce_api_console_setservicepresencestatus.htm)
