---
title: "Custom Minimized Component Code Samples"
domain: snapins-web-dev
topic: custom-minimized-component-code-samples
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:19.373Z
estimatedTokens: 337
keywords: [Custom, Minimized, Component, Code, Samples, sample, examples, controller, helper, embedded, Aura, CSS]
---

# Custom Minimized Component Code Samples

> The following code sample contains examples of the component, controller, and helper
		code for a custom minimized embedded component using Aura.

# Custom Minimized Component Code Samples

The following code sample contains examples of the component, controller, and helper code for a custom minimized embedded component using Aura.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=snapins_web_dev)

#### Important

The legacy chat product is in maintenance-only mode, and we won't continue to build new features. You can continue to use it, but we no longer recommend that you implement new chat channels. Instead, you can modernize your customer communication with [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US). Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time.

This component:

-   Uses Aura to create an ui:button component, and binds the button click to maximize the embedded component
-   Uses an initialize function that registers the generic event handler for minimized events that updates the message depending on the event name
-   Includes optional CSS styling

## Component Code

```

```

## Controller Code

```

```

## Helper Code

```

```

## CSS Code

```

```

## Code Examples

```
<aura:component implements="lightningsnapin:minimizedUI" description="Custom Minimized UI">
    <aura:handler name="init" value="{!this}" action="{!c.onInit}"/>
    <aura:attribute name="message" type="String" default="Chat with us!"/>
    
	<!-- For registering our minimized event handler and maximizing -->
	<lightningsnapin:minimizedAPI aura:id="minimizedAPI"/>

	<button class="minimizedContainer"
		onclick="{!c.handleMaximize}"
		aura:id="minimizedContainer">
        <div class="messageContent">
            {!v.message}
        </div>
	</button>    
</aura:component>
```

```
({
	onInit: function(cmp, evt, hlp) {
        // Register the generic event handler for all the minimized events
        cmp.find("minimizedAPI").registerEventHandler( hlp.minimizedEventHandler.bind(hlp, cmp));
	},
    
    handleMaximize: function(cmp, evt, hlp) {
        cmp.find("minimizedAPI").maximize();
    }
})
```

```
({
	minimizedEventHandler: function(cmp, eventName, eventData) {
        switch(eventName) {
			case "prechatState":
				this.onPrechatState(cmp, eventData);
				break;
			case "offlineSupportState":
				this.onOfflineSupportState(cmp, eventData);
				break;
			case "waitingState":
				this.onWaitingState(cmp, eventData);
				break;
			case "queueUpdate":
				this.onQueueUpdate(cmp, eventData);
				break;
			case "waitingEndedState":
				this.onWaitingEndedState(cmp, eventData);
				break;
			case "chatState":
				this.onChatState(cmp, eventData);
				break;
			case "chatTimeoutUpdate":
				this.onChatTimeoutUpdate(cmp, eventData);
				break;
			case "chatUnreadMessage":
				this.onChatUnreadMessage(cmp, eventData);
				break;
			case "chatTransferringState":
				this.onChatTransferringState(cmp, eventData);
				break;
			case "chatEndedState":
				this.onChatEndedState(cmp, eventData);
				break;
			case "reconnectingState":
				this.onReconnectingState(cmp, eventData);
				break;
			case "postchatState":
				this.onPostchatState(cmp, eventData);
				break;
			default:
				throw new Error("Received unexpected minimized event '" + eventName + "'.");
		}
	},

	/**
	 * "prechatState" event handler. This fires when pre-chat state is initialized.
	 *
	 * @param {Aura.Component} cmp - This component.
	 * @param {Object} eventData - The data associated with the event. Always contains a "label" property.
	 */
	onPrechatState: function(cmp, eventData) {
		this.setMinimizedContent(cmp, eventData.label);
	},

	/**
	 * "offlineSupportState" event handler. This fires when offline support state is initialized.
	 *
	 * @param {Aura.Component} cmp - This component.
	 * @param {Object} eventData - The data associated with the event. Always contains a "label" property.
	 */
	onOfflineSupportState: function(cmp, eventData) {
		this.setMinimizedContent(cmp, eventData.label);
	},

	/**
	 * "waitingState" and "queueUpdate" are fired when EITHER
	 * 1) waiting state is initialized, either with a new session or via page navigation or refresh, OR
	 * 2) the visitor was previously in reconnecting, and they've regained connection.
	 *
	 * Only one of "waitingState" and "queueUpdate" is ever fired - never both.
	 * - "waitingState" is fired if EITHER queue position is DISABLED, OR snippet version under 5.0.
	 * - "queueUpdate" is fired if queue position is ENABLED, AND snippet version is 5.0 or later.
	 */

	/**
	 * "waitingState" event handler. See above doc.
	 *
	 * @param {Aura.Component} cmp - This component.
	 * @param {Object} eventData - The data associated with the event. Always contains a "label" property.
	 */
	onWaitingState: function(cmp, eventData) {
		this.setMinimizedContent(cmp, eventData.label);
	},

	/**
	 * "queueUpdate" event handler. See above doc.
	 *
	 * @param {Aura.Component} cmp - This component.
	 * @param {Object} eventData - Event data. For this event, this contains label and queuePosition.
	 */
	onQueueUpdate: function(cmp, eventData) {
		this.setMinimizedContent(cmp, eventData.label + " " + eventData.queuePosition);
	},

	/**
	 * "waitingEndedState" event handler. This fires in waiting state when the chat request fails.
	 *
	 * @param {SampleCustomMinimizedUI.SampleCustomMinimizedUIComponent} cmp - This component.
	 * @param {Object} eventData - Event data. For this event, this contains label and reason. We don't use reason though.
	 */
	onWaitingEndedState: function(cmp, eventData) {
		this.setMinimizedContent(cmp, eventData.label);
	},

	/**
	 * "chatState" event handler. This fires when EITHER
	 * 1) chat state is initialized, either with a new session or via page navigation or refresh, OR
	 * 2) the visitor was previously in chat transfer, and they've been connected to a new agent, OR
	 * 3) the visitor was previously in reconnecting, and they've regained connection.
	 *
	 * @param {Aura.Component} cmp - This component.
	 * @param {Object} eventData - The data associated with the event. Always contains a "label" property.
	 */
	onChatState: function(cmp, eventData) {
		this.setMinimizedContent(cmp, eventData.label);
	},

	/**
	 * "chatTimeoutUpdate" event handler. This fires when the visitor idle timeout has started.
	 *
	 * @param {Aura.Component} cmp - This component.
	 * @param {Object} eventData - Event data. For this event, this contains label and timeoutSecondsRemaining.
	 */
	onChatTimeoutUpdate: function(cmp, eventData) {
		this.setMinimizedContent(cmp, eventData.label);
	},

	/**
	 * "chatUnreadMessage" event handler. This fires when the agent sends a message but the visitor hasn't seen it
	 * yet, either because they are scrolled up in the chat message area, or because the widget is minimized.
	 *
	 * @param {Aura.Component} cmp - This component.
	 * @param {Object} eventData - Event data. For this event, this contains label and unreadMessageCount.
	 */
	onChatUnreadMessage: function(cmp, eventData) {
		this.setMinimizedContent(cmp, eventData.label);
	},

	/**
	 * "chatTransferringState" event handler. This fires when a chat transfer has been initiated.
	 *
	 * @param {Aura.Component} cmp - This component.
	 * @param {Object} eventData - The data associated with the event. Always contains a "label" property.
	 */
	onChatTransferringState: function(cmp, eventData) {
		this.setMinimizedContent(cmp, eventData.label);
	},

	/**
	 * "chatEndedState" event handler. This fires in chat state when the chat ends for any reason.
	 *
	 * @param {Aura.Component} cmp - This component.
	 * @param {Object} eventData - Event data. For this event, this contains label and reason.
	 */
	onChatEndedState: function(cmp, eventData) {
		this.setMinimizedContent(cmp, eventData.label);
	},

	/**
	 * "reconnectingState" event handler. This fires in both waiting and chat state when the visitor loses connection.
	 *
	 * @param {Aura.Component} cmp - This component.
	 * @param {Object} eventData - The data associated with the event. Always contains a "label" property.
	 */
	onReconnectingState: function(cmp, eventData) {
		this.setMinimizedContent(cmp, eventData.label);
	},

	/**
	 * "postchatState" event handler. This fires when the visitor enters post chat by clicking "Give Feedback".
	 *
	 * @param {Aura.Component} cmp - This component.
	 * @param {Object} eventData - The data associated with the event. Always contains a "label" property.
	 */
	onPostchatState: function(cmp, eventData) {
		this.setMinimizedContent(cmp, eventData.label);
	},

	/**
	 * Update the contents of the sample minimized component.
	 *
	 * @param {Aura.Component} cmp - This component.
	 * @param {String} message - The text to display.
	 */
	setMinimizedContent: function(cmp, message) {
		cmp.set("v.message", message);
	}
});
```

```
.THIS {
	position: fixed;
	left: auto;
	bottom: 0;
	right: 12px;
	margin: 0;
 	min-width: 12em;
	max-width: 14em;
	height: 46px;
	width: 192px;
	max-height: 100%;
	border-radius: 8px 8px 0 0;
	text-align: center;
	text-decoration: none;
	display: flex;
	flex-direction: center;
justify-content: center;
box-shadow: none;
	pointer-events: all;
	overflow: hidden;
	background-color: rgb(0, 112, 210);
	font-size: 16px;
}

.THIS.minimizedContainer:focus,
.THIS.minimizedContainer:hover {
color: rgb(255, 255, 255);
text-decoration: underline;
outline: none;
background-color: rgb(0, 95, 178);
box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.5);
}

.THIS .messageContent {
	display: block;
	padding: 0 8px;
	height: 100%;
	color: rgb(255, 255, 255);
}
```
