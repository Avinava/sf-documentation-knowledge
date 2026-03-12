---
title: "lightning:omniChannelStatusChanged"
domain: service-cloud
topic: lightningomnichannelstatuschanged
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:57.252Z
estimatedTokens: 303
keywords: [lightning, omniChannelStatusChanged, Indicates, agent, changed, his, presence, status, Omni-Channel., Response, Example, channel]
---

# lightning:omniChannelStatusChanged

> Indicates that an agent has changed his or her
            presence status in Omni-Channel.

# lightning:omniChannelStatusChanged

Indicates that an agent has changed his or her presence status in Omni-Channel.

## Response

| Name | Type | Description |
| --- | --- | --- |
| statusId | string | The ID of the agent’s current presence status. |
| channels | string | JSON string of channel objects. |
| reason | string | The reason for the user's status change. Possible values are:OmniToolkitStatusChangeOmniPushTimeoutOmniDeclineWorkOmniManualStatusChangeOmniSupervisorStatusChangeOmniLoginStatusChange |
| statusName | string | The name of the agent’s current presence status. |
| statusApiName | string | The API name of the agent’s current presence status. |

## Example

This example prints status details to the browser’s developer console when an Omni-Channel user's presence status is changed.

Component code:

```

```

Controller code:

```

```

## channel

The channel object contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| channelId | string | Retrieves the ID of the service channel that’s associated with a presence status. |
| developerName | string | Retrieves the developer name of the service channel that’s associated with the channelId. |

## Code Examples

```apex
<aura:component implements="flexipage:availableForAllPageTypes" access="global" >
    <lightning:omniToolkitAPI aura:id="omniToolkit" />  
    <aura:handler event="lightning:omniChannelStatusChanged" action="{! c.onStatusChanged }"/>
</aura:component>
```

```
({
    onStatusChanged : function(component, event, helper) {
        console.log("Status changed.");
        var statusId = event.getParam('statusId');
        var channels = event.getParam('channels');
        var statusName = event.getParam('statusName');
        var statusApiName = event.getParam('statusApiName');
        console.log(statusId);
        console.log(channels);
        console.log(statusName);
        console.log(statusApiName);
    }, 
})
```
