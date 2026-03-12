---
title: "Sample Code for Using Lightning Message Service with Open CTI"
domain: api-cti
topic: sample-code-for-using-lightning-message-service-with-open-cti
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.941Z
estimatedTokens: 1227
namespace: SAMPLEMC
keywords: [Sample, Code, Lightning, Message, Service, Open, CTI, API, communicate, softphone, displays, three, buttons, subscribe, publish]
---

# Sample Code for Using Lightning Message Service with Open CTI

> You can use the Lightning Message Service API to communicate with an Open CTI softphone.
  This example displays three buttons that subscribe, publish, and remove a message channel servicedev1_SampleMC__c.

**Namespace:** `SAMPLEMC`

# Sample Code for Using Lightning Message Service with Open CTI

You can use the Lightning Message Service API to communicate with an Open CTI softphone. This example displays three buttons that subscribe, publish, and remove a message channel servicedev1\_SampleMC\_\_c.

To use Open CTI, you must reference either opencti.js or opencti\_min.js version 47.0 on your softphone adapter page. If you don't have these files, your Salesforce representative can provide them.

In the <head\> of the HTML file, include the filepath for opencti\_min.js.

First, define a variable for the name of your message channel in the JavaScript section of your code. Here, we assign the message channel string SAMPLEMC\_c to the variable SAMPLEMC.

Next, create the variable SAMPLEMC\_SUBSCRIPTION to hold the subscription object and assign it a null value.

The subscribeToSampleMC() method first checks whether the subscription variable is empty. If the method is empty, it calls the sforce.opencti.subscribe() method.

The sforce.opencti.subscribe() method has three parameters:

channelName

The name of the message channel.

listener

The listener function that’s invoked when a message is sent on the message channel.

callback

The function that receives the subscription object. Assign this value to a variable such as SAMPLEMC\_SUBSCRIPTION.

The subscribeToSampleMC() method sets the <span\> tag in the HTML to true.

Similarly, the unsubscribeToSampleMC() method checks whether there is a subscription object. If so, it calls sforce.opencti.unsubscribe(). The method sforce.opencti.unsubscribe() has two parameters:

subscription

The subscription object that you want to unsubscribe from.

callback

The function that handles the success or error output.

The unsubscribeToSampleMC() method sets the <span\> tag in the HTML to false.

The publishSampleMC() method is passed the message content that we want to publish. A message is a serialized JSON object. You can pass data such as strings, numbers, objects, and Boolean values. A message cannot contain functions and symbols.

In this example, the message contains three strings:

-   Name of the sender, “LightningMessageService\_OpenCTI\_TestPage”
-   Type of message, “SampleMC”
-   Time when the message was sent

The publishSampleMC() method calls sforce.opencti.publish() method, which takes three parameters:

channelName

The name of the message channel to publish to.

message

The message to publish as a serialized JSON object.

callback

The function that handles the success or error output.

The HTML markup displays the message channel’s name, indicates whether the channel is subscribed, and shows buttons to subscribe, unsubscribe, and publish on the channel. When clicked, these buttons call the respective subscribeToSampleMC(), unsubscribeToSampleMC(), and publishSampleMC() functions. The text area with the id set to opencti\_testMessageTextArea shows the message text.

## Example

```

```

## Use Message Channels Created Within Your Org

Here’s an example that shows how to use a Lightning Message Channel developed within your org.

```

```

Here, a custom Lightning Message Channel is referenced by its name SAMPLEMC\_\_c. The syntax refers to a custom instance of the LightningMessageChannel metadata type. The \_\_c suffix indicates that it’s a custom, but note that it is not a custom object. For more information, see [Create a Message Channel](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/message_channel_publish.htm).

If your org has a namespace, don’t include it in your message channel name. For example, if your org’s namespace is MyNamespace, then the message channel name remains SAMPLEMC\_\_c.

## Use Message Channels Created Outside Your Org

To use Lightning Message Channels from packages created by developers outside of your org, reference them with the syntax Namespace\_name\_\_c. For example, if SAMPLEMC was not local to your org and came from a package with the namespace SamplePackageNamespace, the syntax would be SamplePackageNamespace\_SAMPLEMC\_c.

#### See Also

-   [Lightning Message Service Methods for Lightning Experience](atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_methods_lms.htm)

-   [*Lightning Aura Components Developer Guide: Communicating Across the DOM with Lightning Message Service*](https://developer.salesforce.com/docs/atlas.en-us.260.0.lightning.meta/lightning/message_channel_intro.htm "
    Lightning Aura Components Developer Guide: Communicating Across the DOM with Lightning
    Message Service
    - HTML (New Window)")

-   [*Visualforce Developer Guide: Communicating Across the DOM with Lightning Message Service*](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/message_channel_intro.htm "
    Visualforce Developer Guide: Communicating Across the DOM with Lightning Message
    Service
    - HTML (New Window)")

## Code Examples

```
<html>
	<head>
	<script type="text/javascript" src="https://domain:port/support/api/47.0/lightning/opencti_min.js"></script>
	<script type="text/javascript">
		<script type="text/javascript">
		var SAMPLEMC = "SAMPLEMC__c";
		var SAMPLEMC_SUBSCRIPTION = null;

		function subscribeToSampleMC() {
			if (!SAMPLEMC_SUBSCRIPTION) {
				sforce.opencti.subscribe({channelName: SAMPLEMC, listener: onPublishMessage, callback: subscribeSampleMCCallback});
				let mcSubscribedToggle = document.querySelector("#opencti_mcSubscribedToggle");
				mcSubscribedToggle.innerHTML = "true";
			}
		}

		function unsubscribeToSampleMC() {
			if (SAMPLEMC_SUBSCRIPTION) {
				sforce.opencti.unsubscribe({subscription: SAMPLEMC_SUBSCRIPTION, callback: lightningMessageServiceCallback});
				let mcSubscribedToggle = document.querySelector("#opencti_mcSubscribedToggle");
				mcSubscribedToggle.innerHTML = "false";
				SAMPLEMC_SUBSCRIPTION = null;
			}
		}

		function publishSampleMC() {
			const message = {
				from: "LightningMessageService_OpenCTI_TestPage",
				type: "SampleMC",
				time: new Date().toLocaleTimeString()
			};

			sforce.opencti.publish({channelName: SAMPLEMC, message: message, callback: lightningMessageServiceCallback});
		}

		function lightningMessageServiceCallback(result) {
			if (result.success) {
				console.log(result.returnValue);
			} else {
				console.log(result.errors);
			}
		}

		function subscribeSampleMCCallback(result) {
			if (result.success) {
				SAMPLEMC_SUBSCRIPTION = result.subscription;
			} else {
				console.log(result.errors);
			}
		}

		function onPublishMessage(message) {
			var textArea = document.querySelector("#opencti_testMessageTextArea");
			textArea.innerHTML = message ? JSON.stringify(message, null, '\t') : 'no message payload';
		}
	</script>
	</head>
	<body>
		<div>
			<p>MessageChannel: SampleMC</p>
			<p>Subscribed: <span id="opencti_mcSubscribedToggle">false</span></p>
			<br/>
			<input value="Subscribe" type="button" onclick="subscribeToSampleMC()"/>
			<input value="Unsubscribe" type="button" onclick="unsubscribeToSampleMC()"/>
			<input value="Publish" type="button" onclick="publishSampleMC()"/>
			<br/>
			<p>Received message:</p>
			<textarea id="opencti_testMessageTextArea" class="opencti_testMessageTextArea" rows="10" style="disabled:true;resize:none;width:100%;"/>
		</div>
	</body>
</html>
```

```
<apex:page>
    <script>
        var SAMPLEMC = "SAMPLEMC__c";
    </script>
</apex:page>
```

## Related Topics

- Lightning Message Service Methods for Lightning Experience (atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_methods_lms.htm)
