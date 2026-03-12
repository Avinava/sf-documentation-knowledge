---
title: "getServicePresenceStatusChannels for Lightning Experience for Lightning Experience"
domain: service-cloud
topic: getservicepresencestatuschannels-for-lightning-experience-for-lightning-experien
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:57.795Z
estimatedTokens: 138
keywords: [getServicePresenceStatusChannels, Lightning, Experience, Retrieves, service, channels, associated, Omni-Channel, user’s, current, presence, status., Sample, Code, Response]
---

# getServicePresenceStatusChannels for Lightning Experience for Lightning Experience

> Retrieves the service channels that are associated with an Omni-Channel user’s
        current presence status.

# getServicePresenceStatusChannels for Lightning Experience for Lightning Experience

Retrieves the service channels that are associated with an Omni-Channel user’s current presence status.

## Sample Code

Component code:

```

```

Controller code:

```

```

## Response

This method returns a promise that, upon success, resolves to an array of channel objects, containing the following fields.

| Name | Type | Description |
| --- | --- | --- |
| channelId | String | The ID of the channel. |
| developerName | String | The name of the channel. |

## Code Examples

```apex
<aura:component implements="flexipage:availableForAllPageTypes" access="global" >
    <lightning:omniToolkitAPI aura:id="omniToolkit" />
    <lightning:button label="Get Status Channels" onclick="{! c.getStatusChannels }" /> 
</aura:component>
```

```
({
    getStatusChannels: function(cmp, evt, hlp) {
        var omniAPI = cmp.find("omniToolkit");
        omniAPI.getServicePresenceStatusChannels().then(function(result) {
            var channels = JSON.parse(result.channels);
            //For example purposes, just retrieve the first channel
            console.log('First channel ID is: ' + channels[0].channelId);
            console.log('First channel developer name is: ' + channels[0].developerName);
        }).catch(function(error) {
            console.log(error);
        });
    }
})
```
