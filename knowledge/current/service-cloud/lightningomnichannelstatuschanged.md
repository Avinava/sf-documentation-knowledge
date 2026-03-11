---
title: "lightning:omniChannelStatusChanged"
domain: service-cloud
topic: lightningomnichannelstatuschanged
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:47:49.880Z
keywords: [lightning, omniChannelStatusChanged, Response, Example, channel]
---

# lightning:omniChannelStatusChanged

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