---
title: "Respond to Location Filter Changes"
domain: workdotcom-dev-guide
topic: respond-to-location-filter-changes
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:22.317Z
estimatedTokens: 303
keywords: [Respond, Location, Filter, Changes, Custom, components, possible, provide, cohesive, Command, Center, user, experience]
---

# Respond to Location Filter Changes

> Custom components should respond to global filter changes if possible, to provide a
  cohesive Command Center user experience.

# Respond to Location Filter Changes

Custom components should respond to global filter changes if possible, to provide a cohesive Command Center user experience.

Components that must respond to global filter changes should subscribe to the Command Center standard Lightning Message Service channels. To reference a message channel, import it from the @salesforce/messageChannel scoped module. To use the Lightning Message Service APIs:

-   Import the following functions from lightning/messageService: subscribe, unsubscribe, MessageContext, and APPLICATION\_SCOPE.
-   Import COMMAND\_CENTER\_MSG\_CHANNEL from @salesforce/messageChannel/lightning\_\_CommandCenterMessageChannel.

The following example, from the sample app at [https://github.com/forcedotcom/WorkDotCom-Partners](https://github.com/forcedotcom/WorkDotCom-Partners), demonstrates subscribing and unsubscribing to the Command Center message channel and listening for events fired.

```

```

While Lightning Message Service allows any component to publish a message on any channel, the Command Center global filter component does not subscribe to any LMS channels, so it won’t receive any messages published by other Command Center components.

## Code Examples

```apex
import { LightningElement, wire, track } from 'lwc';
import { subscribe, MessageContext, unsubscribe, APPLICATION_SCOPE } from 'lightning/messageService';

/*** Message Channel ***/
import COMMAND_CENTER_MSG_CHANNEL from '@salesforce/messageChannel/lightning__CommandCenterMessageChannel';

export default class lwc_component extends LightningElement{
    @wire(MessageContext)
    messageContext;
    
    @track globalLocationName;
    @track globalLocationId;
    
    subscription;

    connectedCallback() {
        this.subscribeToChannel();
    }

    /**
     * Subscribe to Command Center Message Channel to listen to global filter changes
     */
    subscribeToChannel() {
        if (!this.subscription) {
            this.subscription = subscribe(this.messageContext, COMMAND_CENTER_MSG_CHANNEL, message => this.handleEvent(message), {
                scope: APPLICATION_SCOPE
            });
        }
    }

    /**
     * Any time global filter changes are captured get updated values
     * @param  {} message
     */
    handleEvent(message) {
        switch (message.EventType) {
            case 'CC_LOCATION_CHANGE': {
                /* This event returns two attributes within it's EventPayload (locationName & locationId) */
                this.globalLocationName = message.EventPayload.locationName;
                this.globalLocationId = message.EventPayload.locationId;
          
                break;
            }

            default: {
                break;
            }
        }
    }
    
    /**
     * If disconnected unsubscribe from Message Channel
     */
    disconnectedCallback() {
        if (this.subscription) {
            unsubscribe(this.subscription);
        }
    }
}
```
