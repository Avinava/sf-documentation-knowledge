---
title: "Create Custom Chat Events"
domain: snapins-web-dev
topic: create-custom-chat-events
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:19.329Z
estimatedTokens: 1814
keywords: [Custom, Chat, Events, let, own, communication, channel, customers, agent, console, send, receive, JavaScript, CSS, files]
---

# Create Custom Chat Events

> Custom chat events let you have your own communication channel with your customers using
  the agent console to send and receive your own chat events. Create custom events using your own
  JavaScript and CSS files.

# Create Custom Chat Events

Custom chat events let you have your own communication channel with your customers using the agent console to send and receive your own chat events. Create custom events using your own JavaScript and CSS files.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=snapins_web_dev)

#### Important

The legacy chat product is in maintenance-only mode, and we won't continue to build new features. You can continue to use it, but we no longer recommend that you implement new chat channels. Instead, you can modernize your customer communication with [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US). Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time.

To create your events, use the following.

-   sendCustomEvent()—Sends a custom event to the client-side chat window for a chat with a specific chat key.
-   onCustomEvent()—Registers a function to call when a custom event takes place during a chat.
-   [embedded\_svc.liveagentAPI.sendCustomEvent()](atlas.en-us.snapins_web_dev.meta/snapins_web_dev/snapins_web_custom_event_api.htm "There are three APIs that let you create custom chat events with Embedded Chat. Available using Embedded Service code snippet version 5.0 and later.")—Sends a custom event to the agent console of the agent who is currently chatting with a chat visitor.
-   [embedded\_svc.liveagentAPI.getCustomEvents()](atlas.en-us.snapins_web_dev.meta/snapins_web_dev/snapins_web_custom_event_api.htm "There are three APIs that let you create custom chat events with Embedded Chat. Available using Embedded Service code snippet version 5.0 and later.")—Retrieves a list of custom events from both the agent and chat visitor that are received during a chat session.
-   [embedded\_svc.liveagentAPI.addCustomEventListener()](atlas.en-us.snapins_web_dev.meta/snapins_web_dev/snapins_web_custom_event_api.htm "There are three APIs that let you create custom chat events with Embedded Chat. Available using Embedded Service code snippet version 5.0 and later.")—Registers a function to call when a custom event is received in the chat window.

You don’t have to add your own styling (our example doesn’t include any), but we recommend it.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=snapins_web_dev)

#### Note

We include two samples—one for sending an event from the agent to the customer, and one for sending an event from the customer to the agent. If you want to create both events for your chat window, combine them into one JavaScript file.

## Send an Event from an Agent to a Customer

The following example shows how you can create a custom event that’s sent from the agent to the customer. This example creates a link on a Visualforce page that, when clicked, sends an event to the customer.

1.  Create a Visualforce page to send an event from an agent to a customer.

    In this example, a custom event of type agent\_to\_customer\_event\_type is sent to the customer, with the data data from the agent.

    ```

    ```

2.  Provide a chat key using an external JavaScript file.

    In this example, the JavaScript file is called CustomEvents\_fromAgentToCustomer.js.

    ```

    ```

3.  Upload your file as a static resource in Salesforce. Give it a name that’s easy to remember and doesn’t include spaces.

    In this example, the static resource name for the JavaScript file is CustomEvents\_fromAgentToCustomer.

4.  Add your file to the Embedded Service code snippet (make sure you’re using version 5.0 or later).

    Enter the static resource name, not the file name.

    ```

    ```

5.  Add the Visualforce page to the console.

    From the console, add a tab and paste the URL of the preview page of the Visualforce page you are created in step 1.

6.  Test your new event.

    In this example, there’s a “Send an event from an agent to a customer” link in your Visualforce page. Reload your Visualforce page console tab and chat window, start a chat, and click the link in your Visualforce page console tab. The link triggers a call to sendEventFromAgentToCustomer() and sends the event to the customer.


## Send an Event from a Customer to an Agent

The following example shows how you can create a custom event that’s sent from the customer to the agent. This example creates an event listener that, when the customer’s chat message field matches “trigger”, sends an event to the agent.

1.  Create a Visualforce page to send an event from a customer to an agent.

    In this example, a custom event of type customer\_to\_agent\_event\_type is sent to the customer, with the data data from the customer.

    ```

    ```

2.  Provide a chat key using an external JavaScript file.

    In this example, the JavaScript file is called CustomEvents\_fromCustomerToAgent.js.

    ```

    ```

3.  Upload your file as a static resource in Salesforce. Give it a name that’s easy to remember and doesn’t include spaces.

    In this example, the static resource name for the JavaScript file is CustomEvents\_fromCustomerToAgent.

4.  Add your file to the Embedded Service code snippet (make sure you’re using version 5.0 or later).

    Enter the static resource name, not the file name.

    ```

    ```

5.  Add the Visualforce page to the console.

    From the console, add a tab and paste the URL of the preview page of the Visualforce page you created in step 1.

6.  Test your new event.

    Reload your Visualforce page and chat window, start a chat, and enter trigger in the chat message field as the customer. The event listener you created watches for changes in the chat message field, and the event is sent when the field matches trigger.

    By listening to onChatStateLoaded and onCustomScriptsLoaded events (added as part of the code snippet), you can determine when the scripts are loaded to send or receive custom events with the agent. These events will also include whether or not the scripts are loaded on the primary tab.


#### See Also

-   [Load Files for Custom Chat Events](atlas.en-us.snapins_web_dev.meta/snapins_web_dev/snapins_web_set_custom_events.htm "Load your own JavaScript and CSS files into Embedded Chat to handle and style custom chat events. Your scripts and styles are loaded only after the agent accepts the chat request.")

-   [Embedded Chat Custom Events](atlas.en-us.snapins_web_dev.meta/snapins_web_dev/snapins_web_custom_event_api.htm "There are three APIs that let you create custom chat events with Embedded Chat. Available using Embedded Service code snippet version 5.0 and later.")

-   [sendCustomEvent()](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_console.meta/api_console/sforce_api_console_sendCustomEvent.htm "sendCustomEvent() - HTML (New Window)")

-   [onCustomEvent()](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_console.meta/api_console/classic_api/methods/chat/sforce_api_console_onCustomEvent.htm "onCustomEvent() - HTML (New Window)")

## Code Examples

```
<apex:page>
	<apex:includeScript value="/support/console/42.0/integration.js" />

	<a href="#" onClick="sendEventFromAgentToCustomer();">Send an event from an agent to a customer</a>

	<script type="text/javascript">
		function sendEventFromAgentToCustomer() {
			var chatKey = undefined; // Provide a chat key here
			var eventType = "agent_to_customer_event_type";
			var eventData = "data from the agent";

			sforce.console.chat.sendCustomEvent(chatKey, eventType, eventData, function(result) {
				if (!result || !result.success) {
					console.log("Sending an event from an agent to a customer failed");
					return;
				}

				console.log("The customEvent (" + eventType + ") has been sent");
			});
		}
	</script>
</apex:page>
```

```
function customEventReceived(result) {
	var eventType;
	var eventData;

	if (!result || !result.success) {
		console.log("customEventReceived failed");
		return;
	}

	eventType = result.type;
	eventData = JSON.stringify(result.data);
	console.log("A custom event of type '" + eventType + "' has been received with the following data: " + eventData);
}

function wireUpCustomEventListeners() {
	embedded_svc.liveAgentAPI.addCustomEventListener("agent_to_customer_event_type", customEventReceived);
}

wireUpCustomEventListeners();
```

```
embedded_svc.settings.externalScripts = ["CustomEvents_fromAgentToCustomer"];
```

```
<apex:page>
	<apex:includeScript value="/support/console/42.0/integration.js" />
	
	<script type="text/javascript">
		function registerListeners() {
			var chatKey = undefined; // Provide a chat key here
			var eventType = "customer_to_agent_event_type";

			sforce.console.chat.onCustomEvent(chatKey, eventType, function(result) {
				if (!result || !result.success) {
					console.log("onCustomEvent (" + eventType
						+ ") was not successful");
					return;
				}

				console.log("A new custom event has been received of type "
					+ result.type + " and with data: " + result.data);
			});
		}

		registerListeners();
	</script>
</apex:page>
```

```
function wireTextChangeListner() {
	// Find the chasitor's chat input field
	var obj = document.getElementsByClassName('chasitorText');

	// Wire up the event listener
	obj[0].oninput = function() {
		switch(this.value) {
			// When the chasitor types "trigger", an event is fired to the agent
			case "trigger":	
				embedded_svc.liveAgentAPI.sendCustomEvent(
					"Customer_to_agent_event_type",
					"data from the customer");
				break;

			default:
				break;
		}
	};
}

wireTextChangeListner();
```

## Related Topics

- embedded_svc.liveagentAPI.sendCustomEvent() (atlas.en-us.snapins_web_dev.meta/snapins_web_dev/snapins_web_custom_event_api.htm)
- embedded_svc.liveagentAPI.getCustomEvents() (atlas.en-us.snapins_web_dev.meta/snapins_web_dev/snapins_web_custom_event_api.htm)
- embedded_svc.liveagentAPI.addCustomEventListener() (atlas.en-us.snapins_web_dev.meta/snapins_web_dev/snapins_web_custom_event_api.htm)
- Load Files for Custom Chat Events (atlas.en-us.snapins_web_dev.meta/snapins_web_dev/snapins_web_set_custom_events.htm)
- Embedded Chat Custom Events (atlas.en-us.snapins_web_dev.meta/snapins_web_dev/snapins_web_custom_event_api.htm)
