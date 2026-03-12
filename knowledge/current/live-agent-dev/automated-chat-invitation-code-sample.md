---
title: "Automated Chat Invitation Code Sample"
domain: live-agent-dev
topic: automated-chat-invitation-code-sample
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.038Z
estimatedTokens: 184
keywords: [Automated, Chat, Invitation, Code, Sample, Test, preview, how, invitations, work, website]
---

# Automated Chat Invitation Code Sample

> Test and preview how automated chat invitations can work
on your website using this code sample.

# Automated Chat Invitation Code Sample

Test and preview how automated chat invitations can work on your website using this code sample.

The following code is for an automated chat invitation that uses the addButtonEventHandler() method to display a customized invitation on a website. This invitation allows customers to start a chat with an agent when an agent with the correct skills is available to chat.

```

```

This code lets you pass data that’s available in JavaScript so it can be used in your invitation’s sending rules in Setup. This is an example of how your settings might look:

![Automated invitation sending rules in Setup](/docs/resources/img/en-us/260.0?doc_id=images%2FButtonRulesSetup.png&folder=live_agent_dev)

## Code Examples

```
<apex:page>

<!-- This section creates the div with the UI for chat invitation whose id is 573D01234567890 -->
<!-- For this usage, the "Animation" type of this invitation should be set to "Custom",
otherwise two invitations will appear (the Salesforce-provided one and this custom one). -->
<div id="liveagent_invite_button_573D01234567890" style="display: none; position: fixed; border: 2px solid darkblue; border-radius: 5px; background-color: lightblue; height: 100px; width: 200px;">
	<!-- Creates an "X" option to reject or close the invitation if it's offered  -->
	<div style="cursor: pointer; padding: 5px; right: 0px; position: absolute; color: darkred; font-weight: bold;" onclick="liveagent.rejectChat('573D01234567890')">X</div>
<!-- Provides the Start Chat option for the customer to accept or start the chat for the invitation  -->
<div style="cursor: pointer; top: 42px; left: 65px; position: absolute;font-weight: bold; font-size: 16px;" onclick="liveagent.startChat('573D01234567890')">Start Chat</div>
</div>

<!-- Chat Deployment Code that makes chat available -->
<script type='text/javascript' src='https://MyDomainName.my.salesforce-scrt.com/content/g/js/36.0/deployment.js'></script>

<script type='text/javascript'>
	// Creates the callback function used for the Chat invitation to present it or not based on availability and the customer's interaction with it 
	function buttonCallback(e) {
	
		// When the chat invitation is online (i.e. at least one available, skilled agent), display it at position top 200px and left 300px 		if (e == liveagent.BUTTON_EVENT.BUTTON_AVAILABLE) {
		document.getElementById('liveagent_invite_button_573D01234567890').style.display = '';
		document.getElementById('liveagent_invite_button_573D01234567890').style.left = '300px';
		document.getElementById('liveagent_invite_button_573D01234567890').style.top = '200px';
		}
		
		// When the chat invitation is offline, don't display it 
		if (e == liveagent.BUTTON_EVENT.BUTTON_UNAVAILABLE) {
		document.getElementById('liveagent_invite_button_573D01234567890').style.display = 'none';
		}
		
		// When the chat invitation is accepted, stop displaying it 		if (e == liveagent.BUTTON_EVENT.BUTTON_ACCEPTED) {
		document.getElementById('liveagent_invite_button_573D01234567890').style.display = 'none';
		}
		
		// When the chat invitation is rejected, stop displaying it 		if (e == liveagent.BUTTON_EVENT.BUTTON_REJECTED) {
		document.getElementById('liveagent_invite_button_573D01234567890').style.display = 'none';
		}
	}

	// Registers the function buttonCallback() above as the callback for the chat invitation whose id is 573D01234567890 	liveagent.addButtonEventHandler('573D01234567890', buttonCallback);

	// Let's say there is data available in JavaScript that you want to use in a custom sending rule.
	var shoppingCartValue = 123.45;
	// To pass this data so it can be used in Sending Rules in Salesforce setup, call setCustomVariable.
	liveagent.setCustomVariable('shoppingCartValue', shoppingCartValue);

	// Chat deployment code that initializes chat for the deployment whose id is 572D01234567890 and org is 00DD01234567890 
	liveagent.init('https://MyDomainName.my.salesforce-scrt.com/chat', '572D01234567890', '00DD01234567890');

	// Enable Chat advanced logging to be available through the Browser's Developer Console 
	liveagent.enableLogging();
</script>

</apex:page>
```
