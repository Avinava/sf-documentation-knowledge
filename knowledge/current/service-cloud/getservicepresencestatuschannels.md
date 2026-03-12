---
title: "getServicePresenceStatusChannels"
domain: service-cloud
topic: getservicepresencestatuschannels
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:55.608Z
estimatedTokens: 236
keywords: [getServicePresenceStatusChannels, Retrieves, service, channels, associated, Omni-Channel, user’s, current, presence, status, API, versions, 32.0, later, Arguments]
---

# getServicePresenceStatusChannels

> Retrieves the service channels that are associated with an Omni-Channel user’s current presence status. Available in API versions 32.0 and later.

# getServicePresenceStatusChannels

Retrieves the service channels that are associated with an Omni-Channel user’s current presence status. Available in API versions 32.0 and later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| callback | function | JavaScript method to call when the channels associated with a presence status are retrieved. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| success | Boolean | true if retrieving the current presence status channels was successful; false if the retrieving the current presence status channels wasn’t successful. |
| channels | JSON string of channel objects | Returns the IDs and API names of the channels associated with the presence status. |

## Code Examples

```
sforce.console.presence.getServicePresenceStatusChannels(callback:function)
```

```
<apex:page>
    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <a href="#" onClick="testGetChannels();return false;">
        Get Channels Associated with a Presence Status
    </a>

    <script type="text/javascript">
        function testGetChannels() {
            //These values are for example purposes only.
            sforce.console.presence.getServicePresenceStatusChannels(function(result) {
                if (result.success) {
                    alert('Retrieved Service Presence Status Channels successfully');
                    var channels = JSON.parse(result.channels);
                    //For example purposes, just retrieve the first channel
                    alert('First channel ID is: ' + channels[0].channelId);
                    alert('First channel developer name is: ' + channels[0].developerName);
                } else {
                    alert('Get Service Presence Status Channels failed');
                }
            });
        }
    </script>
</apex:page>
```
