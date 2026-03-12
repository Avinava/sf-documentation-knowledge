---
title: "Deployment API Code Sample"
domain: live-agent-dev
topic: deployment-api-code-sample
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.159Z
estimatedTokens: 911
keywords: [Deployment, API, Code, Sample, Test, preview, how, help, customize, deployments, Chat, Window, Cookies]
---

# Deployment API Code Sample

> Test and preview how the Deployment API can help you customize
your deployments.

# Deployment API Code Sample

Test and preview how the Deployment API can help you customize your deployments.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=live_agent_dev)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

## Chat Window

This code sample creates a chat window that uses the following Deployment API methods:

-   startChat
-   showWhenOnline
-   showWhenOffline
-   addCustomDetail
-   setName
-   map
-   setChatWindowWidth
-   setChatWindowHeight
-   doKnowledgeSearch

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=live_agent_dev)

#### Warning

Details added via the Deployment API are associated with the Visitor. When a chat is launched, the Chasitor is associated with the initial visitor. A subsequent request is a new Chasitor associated with the same visitor. To create details associated with only one Chasitor, the Prechat API must be used instead.

```

```

This code results in the following view for agents using the Console.

![Live Agent in the Console](/docs/resources/img/en-us/260.0?doc_id=images%2Flive_agent_console_deployment.png&folder=live_agent_dev)

The name of the customer (Jane Doe for this example) appears in the Console from setName (1). When you call addCustomDetail.doKnowledgeSearch, the search automatically appears in the Knowledge widget (2).

When the agent receives a chat, the set Custom Details appear in a hover window.

![Incoming chat with Custom Details hover.](/docs/resources/img/en-us/260.0?doc_id=images%2Fdeployment_sample_agent_incoming_chat.png&folder=live_agent_dev)

## Optional Cookies

You can use your consent manager to provide users the ability to opt in or opt out of optional cookies. If they choose to opt in you can pass true to the fourth parameter in liveagent.init() to enable tracking optional cookies. Otherwise, if they choose to opt out, pass false. Omitting the fourth parameter is the same as passing true.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=live_agent_dev)

#### Note

The ability to provide opt-out from optional cookies is supported in version 52.0 and later of the Deployment API.

```

```

If the user opts out, you can also call liveagent.disableOptionalCookies(). This deletes and stops tracking the optional cookies. This is the same as passing false to liveagent.init() except that it takes higher order of precedence than liveagent.init() with the value true. For example, if you call liveagent.disableOptionalCookies() first and then pass true to liveagent.init(), optional cookies are still disabled. Unlike liveagent.init(), liveagent.disableOptionalCookies() can also be called anytime after the page is loaded.

```

```

If the user opts back in to optional cookies after opting out, pass true to liveagent.init() on the next page load.

```

```

## Code Examples

```
<apex:page showHeader="false">
<style> body { margin: 25px 0 0 25px; } </style>

<h1>Welcome to Support</h1>
<br />
Thank you for your interest.
<br /><br />

<!-- START Button code, Replace this section with your Chat button code snippet -->
<a id="liveagent_button_online_573B0000000033Y" href="javascript://Chat" style="display: none;" onclick="liveagent.startChat('573B0000000033Y')">Chat Now</a>
<div id="liveagent_button_offline_573B0000000033Y" style="display: none;">Chat is currently unavailable</div>
<script type="text/javascript">
    if (!window._laq) { window._laq = []; }
    window._laq.push(function(){
        liveagent.showWhenOnline('573B0000000033Y', document.getElementById('liveagent_button_online_573B0000000033Y'));
        liveagent.showWhenOffline('573B0000000033Y', document.getElementById('liveagent_button_offline_573B0000000033Y'));
});</script>

<!-- END Button code -->

<!-- Chat Deployment Code, replace with your org's values -->
<script type='text/javascript' src='https://c.la.gus.salesforce.com/content/g/js/36.0/deployment.js'></script>

<!-- Deployment Code API examples -->
<script type='text/javascript'>
/* Adds a custom detail called Contact Email and sets it value to jane@doe.com */
liveagent.addCustomDetail('Contact E-mail', 'jane@doe.com');

/* Creates a custom detail called First Name and sets the value to Jane */
liveagent.addCustomDetail('First Name', 'Jane');

/* Creates a custom detail called Last Name and sets the value to Doe */
liveagent.addCustomDetail('Last Name', 'Doe');

/* Creates a custom detail called Phone Number and sets the value to 415-555-1212 */
liveagent.addCustomDetail('Phone Number', '415-555-1212');

/* An auto-query that searches Contacts whose Email field exactly matches 'jane@doe.com'. If no result is found, it will create a Contact record with the email, first name, last name, and phone number fields set to the custom detail values. */
liveagent.findOrCreate('Contact').map('Email','Contact E-mail',true,true,true).map('FirstName','First Name',false,false,true).map('LastName','Last Name',false,false,true).map('Phone','Phone Number',false,false,true);

/* The contact that's found or created will be saved or associated to the chat transcript. The contact will be opened for the agent in the Console and the case is linked to the contact record */
liveagent.findOrCreate('Contact').saveToTranscript('ContactId').showOnCreate().linkToEntity('Case','ContactId');

/* Creates a custom detail called Case Subject and sets the value to 'Refund policy for products' and will perform a knowledge search when the chat is accepted for the agent */
liveagent.addCustomDetail('Case Subject','Refund policy for products').doKnowledgeSearch();

/* Creates a custom detail called Case Status and sets the value to 'New' */
liveagent.addCustomDetail('Case Status','New');

/* This does a non-exact search on cases by the value of the 'Case Subject' custom detail If no results are found, it will create a case and set the case's subject and status.
The case that's found or created will be associated to the chat and the case will open in the Console for the agent when the chat is accepted */
liveagent.findOrCreate('Case').map('Subject','Case Subject',true,false,true).map('Status','Case Status',false,false,true).saveToTranscript('CaseId').showOnCreate();

/* Saves the custom detail to a custom field on LiveChatTranscript at the end of a chat.  Assumes a custom field called Company__c was added to the Live Chat Transcript object */
liveagent.addCustomDetail('Company', 'Acme').saveToTranscript('Company__c');

/* For internal or technical details that don't concern the agent, set showToAgent to false to hide them from the display. */
liveagent.addCustomDetail('VisitorHash', 'c6f440178d478e4326a1', false);

/* Sets the display name of the visitor in the agent console when engaged in a chat */
liveagent.setName('Jane Doe');

/* Sets the width of the chat window to 500px */
liveagent.setChatWindowWidth(500);

/* Sets the height of the chat window to 500px */
liveagent.setChatWindowHeight(500);

<!-- Chat Deployment Code to initialize, replace with your org's values -->
liveagent.init('https://d.la.gus.salesforce.com/chat', '572B000000003KL', '00DB00000000Rr8');
</script>
</apex:page>
```

```
/* Enable optional cookies*/
liveagent.init('https://d.la.gus.salesforce.com/chat', '572B000000003KL', '00DB00000000Rr8', true);
liveagent.init('https://d.la.gus.salesforce.com/chat', '572B000000003KL', '00DB00000000Rr8');

/* Disable optional cookies */
liveagent.init('https://d.la.gus.salesforce.com/chat', '572B000000003KL', '00DB00000000Rr8', false);
```

```
/* Disable optional cookies.*/
liveagent.disableOptionalCookies()
```

```
<apex:page showHeader="false">
<style> body { margin: 25px 0 0 25px; } </style>

...

<!-- Chat Deployment Code to initialize, replace with your org's values -->
/* To enable tracking optional cookies, pass `true` to the fourth parameter. To disable 
them, pass `false` to the fourth parameter or call liveagent.disableOptionalCookies().*/ 
liveagent.init('https://d.la.gus.salesforce.com/chat', '572B000000003KL', '00DB00000000Rr8',true);
</script>
</apex:page>
```
