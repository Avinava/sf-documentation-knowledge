---
title: "Fallback Routing Code Sample"
domain: live-agent-dev
topic: fallback-routing-code-sample
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:50.178Z
estimatedTokens: 468
keywords: [Fallback, Routing, Code, Sample, Implement, rules, pre-chat, forms, visitors, chat, another, agent, isn’t]
---

# Fallback Routing Code Sample

> Implement fallback routing rules in pre-chat forms so visitors can chat with another
        agent with the specified agent isn’t available.

# Fallback Routing Code Sample

Implement fallback routing rules in pre-chat forms so visitors can chat with another agent with the specified agent isn’t available.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=live_agent_dev)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

This sample creates a pre-chat form with fallback routing rules enabled. This form:

-   Requests a visitor’s name and email address.
-   Displays that information in the chat log and in the chat request window.
-   Displays either a new or existing Contact record with the customer’s information in a new tab in the Salesforce console. The customer’s name and email address are used to find an existing record. If no existing record is found, a new record is created and populated with the customer’s information.
-   Displays a drop-down list that lets visitors choose a different Chat button through which to route their chat request.
-   Routes chats directly to a specific agent, or, if that agent is unavailable, routes those chats based on the button’s default routing rules.

```

```

## Code Examples

```
<apex:page showHeader="false">

<!-- This script takes the endpoint URL parameter passed from the deployment page
    and makes it the action for the form -->
<script type="text/javascript">
 
(function() {
    function handlePageLoad() {
        var endpointMatcher = new RegExp("[\\?\\&]endpoint=([^&#]*)");
        var domainMatcher = new RegExp("^(https?:\\/\\/(.+?\\.)?(salesforce|salesforceliveagent)\\.com(\\/[A-Za-z0-9\\-\\._~:\\/\\?#\[\\]@!$&'\\(\\)\*\\+,;\\=]*)?)");

        var endpointAttr = endpointMatcher.exec(document.location.search)[1];
        // if the endpoint domain is valid
        if (domainMatcher.test(decodeURIComponent(endpointAttr))) {
            document.getElementById('prechatForm').setAttribute('action',
                decodeURIComponent(endpointAttr.replace("javascript:", "")));
        } else {
            // invalid endpoint domain, set the action to empty
            console.error("invalid domain: " + endpointAttr);
            document.getElementById('prechatForm').setAttribute('action', "");
        }
    }
    if (window.addEventListener) {
        window.addEventListener('load', handlePageLoad, false);
    } else {
        window.attachEvent('onload', handlePageLoad, false);
    }
})();
</script>

<h1>Pre-chat Form</h1> 
<form method='post' id='prechatForm'> 
      Name: <input type='text' name='liveagent.prechat.name' id='prechat_field' /><br /> 
      Email Address: <input type='text' name='liveagent.prechat:Email' /><br /> 
      Department: <select name="liveagent.prechat.buttons"> 
          <!-- Values are LiveChatButton and/or User IDs. -->
          <option value="573D01234567890">Route through button 573D01234567890</option>
          <option value="005D01234567890">Route to agent 005D01234567890</option>
          <option value="005D01234567890_573D01234567890">Route to agent 005D01234567890 
          with Fallback to button 573D01234567890</option> 
      </select><br /> 
      <input type='submit' value='Request Chat' id='prechat_submit'/> 
</form>

</apex:page>
```
