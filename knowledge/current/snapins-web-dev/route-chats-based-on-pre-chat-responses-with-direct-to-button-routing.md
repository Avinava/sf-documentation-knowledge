---
title: "Route Chats Based on Pre-Chat Responses with Direct-to-Button Routing"
domain: snapins-web-dev
topic: route-chats-based-on-pre-chat-responses-with-direct-to-button-routing
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:19.354Z
estimatedTokens: 483
keywords: [Route, Chats, Pre-Chat, Responses, Direct-to-Button, Routing, chat, window, different, buttons, customer’s, any, upgrade, code, snippet]
---

# Route Chats Based on Pre-Chat Responses with Direct-to-Button Routing

> Set your chat window to route chats to different chat buttons based on the customer’s
        pre-chat response on any and all of your pre-chat fields. Available when you upgrade your
        code snippet to version 4.0.

# Route Chats Based on Pre-Chat Responses with Direct-to-Button Routing

Set your chat window to route chats to different chat buttons based on the customer’s pre-chat response on any and all of your pre-chat fields. Available when you upgrade your code snippet to version 4.0.

You can set a specific chat button for each option in a picklist or even for certain keywords in text fields. For example, if your customer can choose which product they own from a picklist and they select “Laptop,” you can send that chat request to a button that’s linked to the “Laptop” agent skill or Omni-Channel queue. Similarly, if your customer can describe their reason for requesting a chat in a text field, you can have it route to your “Laptop” agents if the customer enters “laptop” in that field.

If no agents are available for the button you’ve defined for a particular pre-chat field, the customer sees a dialog in the chat window to let them know that no one’s online.

The designated button ID must be from 15 to 18 characters and start with the correct prefix. If the button ID you provide doesn’t meet these requirements, the chat routes to your default button for the deployment. If the button ID you provide follows these requirements but doesn’t identify a button record in your org, the customer isn’t able to start the chat.

With a 4.0 or later snippet, the following is included and inactive.

```

```

After you’ve entered your function, remove the comment indicators to activate the function.

Let’s look at an example. Say that you want to route chats to a button with the ID 5733000000000Gq if the user selects “Other” from a picklist in the fourth pre-chat field. You would enter the following:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=snapins_web_dev)

#### Note

The language on a label is set only with the embedded\_svc.settings.language parameter, not the chat button.

## Code Examples

```
//embedded_svc.settings.directToButtonRouting = function(prechatFormData) {
// Dynamically changes the button ID based on what the visitor enters in the pre-chat form.
//Returns a valid button ID.
//};
```

```
embedded_svc.settings.directToButtonRouting = function(prechatFormData) {
	if (prechatFormData[3].value === "other")
		return "5733000000000Gq";
}
```
