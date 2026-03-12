---
title: "Events for Omni-Channel"
domain: service-cloud
topic: events-for-omni-channel
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:55.935Z
estimatedTokens: 656
keywords: [Events, Omni-Channel, JavaScript, executed, certain, occur, console, user, closes, tab, There, few, specific, apply, Lightning]
---

# Events for Omni-Channel

> JavaScript can be executed when certain types of events occur in a console, such as
    when a user closes a tab. There are a few events that are specific to Omni-Channel. These events
    apply to Lightning Experience only.

# Events for Omni-Channel

JavaScript can be executed when certain types of events occur in a console, such as when a user closes a tab. There are a few events that are specific to Omni-Channel. These events apply to Lightning Experience only.

-   **[lightning:omniChannel﻿ConnectionError](atlas.en-us.api_console.meta/api_console/sforce_api_console_events_omnichannelconnectionerror.htm)**
    Indicates that a network connection issue occurred.
-   **[lightning:omniChannelLoginSuccess](atlas.en-us.api_console.meta/api_console/sforce_api_console_events_omnichannelloginsuccess.htm)**
    Indicates that an agent has been logged into Omni-Channel successfully.
-   **[lightning:omniChannelStatusChanged](atlas.en-us.api_console.meta/api_console/sforce_api_console_events_omnichannelstatuschanged.htm)**
    Indicates that an agent has changed his or her presence status in Omni-Channel.
-   **[lightning:omniChannelLogout](atlas.en-us.api_console.meta/api_console/sforce_api_console_events_omnichannellogout.htm)**
    Indicates that an agent has logged out of Omni-Channel.
-   **[lightning:omniChannelWorkAssigned](atlas.en-us.api_console.meta/api_console/sforce_api_console_events_omnichannelworkassigned.htm)**
    Indicates that an agent has been assigned a new work item.
-   **[lightning:omniChannelWorkAccepted](atlas.en-us.api_console.meta/api_console/sforce_api_console_events_omnichannelworkaccepted.htm)**
    Indicates that an agent has accepted a work assignment, or that a work assignment has been automatically accepted.
-   **[lightning:omniChannelWorkDeclined](atlas.en-us.api_console.meta/api_console/sforce_api_console_events_omnichannelworkdeclined.htm)**
    Indicates that an agent has declined a work assignment.
-   **[lightning:omniChannelWorkClosed](atlas.en-us.api_console.meta/api_console/sforce_api_console_events_omnichannelworkclosed.htm)**
    Indicates that the status of an AgentWork object is changed to Closed.
-   **[lightning:omniChannelWorkFlagUpdated](atlas.en-us.api_console.meta/api_console/sforce_api_console_events_omniChannelWorkFlagUpdated.htm)**
    Indicates that an agent’s work item flag has been raised or lowered.
-   **[lightning:omniChannelWorkloadChanged](atlas.en-us.api_console.meta/api_console/sforce_api_console_events_omnichannelworkloadchanged.htm)**
    Indicates that an agent’s workload has changed. This includes receiving new work items, declining work items, and closing items in the console. It also indicates that there has been a change to an agent’s capacity or presence configuration, or that the agent has gone offline in the Omni-Channel utility.

## Related Topics

- lightning:omniChannel﻿ConnectionError (atlas.en-us.api_console.meta/api_console/sforce_api_console_events_omnichannelconnectionerror.htm)
- lightning:omniChannelLoginSuccess (atlas.en-us.api_console.meta/api_console/sforce_api_console_events_omnichannelloginsuccess.htm)
- lightning:omniChannelStatusChanged (atlas.en-us.api_console.meta/api_console/sforce_api_console_events_omnichannelstatuschanged.htm)
- lightning:omniChannelLogout (atlas.en-us.api_console.meta/api_console/sforce_api_console_events_omnichannellogout.htm)
- lightning:omniChannelWorkAssigned (atlas.en-us.api_console.meta/api_console/sforce_api_console_events_omnichannelworkassigned.htm)
- lightning:omniChannelWorkAccepted (atlas.en-us.api_console.meta/api_console/sforce_api_console_events_omnichannelworkaccepted.htm)
- lightning:omniChannelWorkDeclined (atlas.en-us.api_console.meta/api_console/sforce_api_console_events_omnichannelworkdeclined.htm)
- lightning:omniChannelWorkClosed (atlas.en-us.api_console.meta/api_console/sforce_api_console_events_omnichannelworkclosed.htm)
- lightning:omniChannelWorkFlagUpdated (atlas.en-us.api_console.meta/api_console/sforce_api_console_events_omniChannelWorkFlagUpdated.htm)
- lightning:omniChannelWorkloadChanged (atlas.en-us.api_console.meta/api_console/sforce_api_console_events_omnichannelworkloadchanged.htm)
