---
title: "lightning:omniChannel﻿ConnectionError"
domain: service-cloud
topic: lightningomnichannel-connectionerror
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:55.370Z
estimatedTokens: 97
keywords: [lightning, omniChannel, ConnectionError, network, connection, issue, occurred]
---

# lightning:omniChannel﻿ConnectionError

> Indicates that a network connection issue
            occurred.

# lightning:omniChannel﻿ConnectionError

Indicates that a network connection issue occurred.

## Response

| Name | Type | Description |
| --- | --- | --- |
| error | object | The network connection error message. |

## Example

This example prints a line to the browser’s developer console when a network connection error occurs.

Component code:

```

```

Controller code:

```

```

## Code Examples

```apex
<aura:component implements="flexipage:availableForAllPageTypes" access="global" >
    <lightning:omniToolkitAPI aura:id="omniToolkit" />  
    <aura:handler event="lightning:omniChannelConnectionError" action="{! c.onConnectionError }"/>
</aura:component>
```

```
({
    onConnectionError : function(component, event, helper) {
        console.log("Network Connection Error.");
        var error = event.getParam('error');
        console.log(error);
    }, 
})
```
