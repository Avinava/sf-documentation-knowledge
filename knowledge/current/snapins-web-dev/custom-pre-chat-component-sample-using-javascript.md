---
title: "Custom Pre-Chat Component Sample Using JavaScript"
domain: snapins-web-dev
topic: custom-pre-chat-component-sample-using-javascript
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:19.391Z
estimatedTokens: 464
keywords: [Custom, Pre-Chat, Component, Sample, JavaScript, code, examples, controller, helper, plain]
---

# Custom Pre-Chat Component Sample Using JavaScript

> The following code sample contains examples of the component, controller, and helper
		code for a custom pre-chat component using plain JavaScript.

# Custom Pre-Chat Component Sample Using JavaScript

The following code sample contains examples of the component, controller, and helper code for a custom pre-chat component using plain JavaScript.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=snapins_web_dev)

#### Important

The legacy chat product is in maintenance-only mode, and we won't continue to build new features. You can continue to use it, but we no longer recommend that you implement new chat channels. Instead, you can modernize your customer communication with [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US). Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time.

This component:

-   Uses Javascript to create an email input field
-   Uses minimal Aura to get pre-chat fields from Embedded Service setup in a render handler
-   Provides an example of getting pre-chat field values to pass to the startChat Aura method on lightningsnapin:prechatAPI

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=snapins_web_dev)

#### Important

This code sample is an example and doesn’t create a functioning pre-chat form on its own. You can use this sample as a starting point, but you must add more pre-chat fields and include your own styling.

## Component Code

```

```

## Controller Code

```

```

## Helper Code

```

```

The sample creates the following unstyled pre-chat form.![Preview of the unstyled pre-chat form using this code sample.](/docs/resources/img/en-us/260.0?doc_id=images%2FprechatJSsample.png&folder=snapins_web_dev)

## Code Examples

```
<aura:component 
	description="Sample pre-chat component that uses Aura only when absolutely necessary"
	implements="lightningsnapin:prechatUI">

	<!-- Contains methods for getting pre-chat fields, starting a chat, and validating fields -->
	<lightningsnapin:prechatAPI aura:id="prechatAPI"/>

	<!-- After this component has rendered, call the controller's onRender function -->
	<aura:handler name="render" value="{!this}" action="{!c.onRender}"/>

	<div class="prechatUI">
        Prechat Form
		<div class="prechatFields">
			<!-- Add pre-chat field HTML elements in the controller's onInit function -->
		</div>
		<button class="startChatButton" onclick="{!c.onStartButtonClick}">
			Start Chat
		</button>
	</div>

</aura:component>
```

```
({
	/**
	 * After this component has rendered, create an email input field
	 *
	 * @param component - This prechat UI component.
	 * @param event - The Aura event.
	 * @param helper - This component's helper.
	 */
	onRender: function(component, event, helper) {
		// Get array of pre-chat fields defined in Setup using the prechatAPI component
		var prechatFields = component.find("prechatAPI").getPrechatFields();
		// This example renders only the email field using the field info that comes back from prechatAPI getPrechatFields()
		var emailField = prechatFields.find(function(field) {
			return field.type === "inputEmail";
		});
		
		// Append an input element to the prechatForm div.
		helper.renderEmailField(emailField);
	},

	/**
	 * Handler for when the start chat button is clicked
	 *
	 * @param component - This prechat UI component.
	 * @param event - The Aura event.
	 * @param helper - This component's helper.
	 */
	onStartButtonClick: function(component, event, helper) {
		var prechatInfo = helper.createStartChatDataArray();
		
		if(component.find("prechatAPI").validateFields(prechatInfo).valid) {
			component.find("prechatAPI").startChat(prechatInfo);
		} else {
			// Show some error
		}
	}
});
```

```
({
	/**
	 * Create an HTML input element, set necessary attributes, add the element to the DOM
	 *
	 * @param emailField - Email pre-chat field object with attributes needed to render
	 */
	renderEmailField: function(emailField) {
		// Dynamically create input HTML element
		var input = document.createElement("input");
		
		// Set general attributes
		input.type = "email";
		input.class = emailField.label;
		input.placeholder = "Your email here.";
		
		// Set attributes required for starting a chat
		input.name = emailField.name;
		input.label = emailField.label;

		// Add email input to the DOM
		document.querySelector(".prechatFields").appendChild(input);
	},
    
	/**
	 * Create an array of data to pass to the prechatAPI component's startChat function
     */
	createStartChatDataArray: function() {
		var input = document.querySelector(".prechatFields").childNodes[0];
		var info = {
			name: input.name,
			label: input.label,
			value: input.value
		};

		return [info];
	}
});
```
