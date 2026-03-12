---
title: "Use the Lightning  Message Service Bridge"
domain: voice-pt-developer-guide
topic: use-the-lightning-message-service-bridge
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:21.939Z
estimatedTokens: 954
keywords: [Lightning, Message, Service, Bridge, component, enable, communication, telephony, system, components, Aura, Web, LWC, Configure, Contact]
---

# Use the Lightning  Message Service Bridge

> Use the Lightning Message Service Bridge component to enable communication between the
    telephony system and other Lightning components.

# Use the Lightning Message Service Bridge

Use the Lightning Message Service Bridge component to enable communication between the telephony system and other Lightning components.

To use the Lightning Message Service (LMS) channel in your contact center, create a Lightning component using Aura or a [Lightning Web Component](https://developer.salesforce.com/docs/component-library/documentation/en/lwc) that serves as the bridge component. This component supports communication between the connector and other Lightning components on the page.

## Using Aura

-   It must implement the Aura interface service\_cloud\_voice:messageBridge.
-   It must reference the LMS channel you defined with namespace.
-   It must implement the publishMessage method to publish connector messages to the channel.
-   It must call the handleMessage [Action handler](https://developer.salesforce.com/docs/atlas.en-us.260.0.lightning.meta/lightning/ref_attr_types_aura_action.htm) to send messages to the connector.
-   It must not have any UI markups.

.cmp example:

```

```

Controller.js sample:

```

```

## Using Lightning Web Components (LWC)

-   There’s no interface equivalent in LWC.
-   It must reference the LMS channel you defined without a namespace.
-   It must expose the publishMessage API to publish messages to the channel.
-   It must expose a [handleMessage](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.reactivity_public) attribute and use that as a callback to send messages to the connector.
-   It must not have any UI markups.

.js example:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=voice_pt_developer_guide)

#### Note

-   To avoid echo, a source property is inserted during message publishing. When a message from the connector is published to the channel, it’s filtered out and not sent back. The source property may not be needed if the communication is one-way.
-   The connector starts receiving messages sent from the message bridge after the connector is fully initialized.

## Configure the Contact Center to Use the Message Bridge Component

After creating the component, configure the contact center to use it.

**Using the ConversationVendorInfo setup entity (for Production)**: In a production environment, specify the message bridge component’s fully qualified name in the ConversationVendorInfo record from the same managed package that has the actual Lightning component. When a Salesforce admin imports an XML file to create a contact center, it references the ConversationVendorInfo to read the message bridge component name and configure the contact center custom settings automatically.

**Using CallCenter Metadata API (for Local Testing)**: Add the message bridge component FQN to the contact center’s custom settings for testing. This can be done using the[CallCenter Metadata type](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_callcenter.htm). Set the **messageBridgeComponentFqn** value in the Metadata file to the fully qualified name of your bridge component. For an example:

```

```

## Test Your Bridge Component

You can test the bridge component using the Messages section of the Voice Call Simulator. To learn more, see [Test Your Implementation with the Voice Call Simulator](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_test_implementation.htm "The Voice Call Simulator component helps you get comfortable with Service Cloud Voice. As you set up Service Cloud Voice, use the simulator to walk through a variety of call scenarios.").

## Limitations

See [Lightning Message Service Limitations](https://developer.salesforce.com/docs/atlas.en-us.260.0.lightning.meta/lightning/message_channel_considerations.htm).

## Code Examples

```
<aura:component implements="service_cloud_voice:messageBridge">
  <lightning:messageChannel type="{your_namespace}__{LMS_channel_name}__c" aura:id="sampleMessageChannel" onMessage="{!c.handleMessage}"/>
</aura:component>
```

```
({
    publishMessage : function(component, event, helper) {
        var message = event.getParam('arguments').message;
        component.find('sampleMessageChannel').publish({ source : 'CONNECTOR', payload:message});
    },
    
    handleMessage: function(cmp, message, helper) { 
        var messageWrapper = message.getParams();
        if(messageWrapper.source != 'CONNECTOR') {
            cmp.get("v.handleMessage")(messageWrapper.payload);
        }
    }
})
```

```
import { LightningElement, track, wire, api } from 'lwc';
import { publish, subscribe, APPLICATION_SCOPE, MessageContext } from 'lightning/messageService';
import SAMPLEMC from "@salesforce/messageChannel/{LMS_channel_name}__c";

export default class Lms_LWC extends LightningElement {
    @wire(MessageContext)
    messageContext;

    @api handleMessage;
     
    constructor() {
        super();
    }

    connectedCallback() {
        subscribe(this.messageContext, 
            SAMPLEMC, 
            (message) => {
                if(message.source != 'CONNECTOR'){
                    this.handleMessage(message.payload);
                }
            },
            {scope: APPLICATION_SCOPE}
        );
    }

    @api
    publishMessage(message) {
        publish(this.messageContext, SAMPLEMC,  { source : 'CONNECTOR', payload:message});
    }
}
```

```
<?xml version="1.0" encoding="UTF-8"?>
<CallCenter xmlns="http://soap.sforce.com/2006/04/metadata">
...
  <customSettings>{&quot;messageBridgeComponentFqn&quot;:&quot;xtelephony:lwcBridge&quot;,&quot;reqTimeout&quot;:&quot;5000&quot;,&quot;reqCallCenterType&quot;:&quot;SCVBYOT&quot;,*scvVendorLoginUrl&quot;:&quot;https://YOUR_SERVER_LOGIN_URL&quot;*,&quot;reqStandbyUrl&quot;:&quot;https://domain:port/softphone&quot;,&quot;reqSoftphoneHeight&quot;:&quot;300&quot;,&quot;reqUseApi&quot;:&quot;true&quot;,&quot;reqSoftphoneWidth&quot;:&quot;500&quot;,&quot;reqSalesforceCompatibilityMode&quot;:&quot;Lightning&quot;}</customSettings>
...
</CallCenter>
```

## Related Topics

- Test Your Implementation with the Voice Call Simulator (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_test_implementation.htm)
