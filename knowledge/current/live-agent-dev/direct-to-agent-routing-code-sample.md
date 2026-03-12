---
title: "Direct-to-Agent Routing Code Sample"
domain: live-agent-dev
topic: direct-to-agent-routing-code-sample
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:50.173Z
estimatedTokens: 176
keywords: [Direct-to-Agent, Routing, Code, Sample, Implement, Deployment, API]
---

# Direct-to-Agent Routing Code Sample

> Implement direct-to-agent routing using the Deployment API.

# Direct-to-Agent Routing Code Sample

Implement direct-to-agent routing using the Deployment API.

The following code sample shows you how to set up direct-to-agent so your agents can send visitors a “Chat with Me” link.

```

```

When you use this code sample with your org and call it ChatWithMe, agents can create a link that sends a chat request directly to them.

http://your.website/ChatWithMe?id=005D01234567890

You can make it even easier for agents to send a “chat with me” link by creating a Quick Text message that any agent can use:

http://your.website/ChatWithMe?id={!User\_ID}

The User ID spot in the link is automatically filled with the User ID of any agent who uses the Quick Text.

## Code Examples

```
<apex:page standardController="User" showHeader="false">
  <h1>Direct-to-Agent Chat with {!user.name}</h1>

  <!-- dta_online is displayed whenever the specific agent is available to chat. -->
  <div id="dta_online" style="display: none;">

    <!-- A valid button is required here even though it's direct-to-agent - some button settings still apply. -->
    <!-- {!left(user.id,15)} is needed to truncate an 18-char ID to the 15-char version that Chat uses. -->
    <a href="javascript://Chat" onclick="liveagent.startChat('573D01234567890', '{!left(user.id,15)}')">Chat with {!user.name}!</a>

  </div>

  <!-- dta_offline is displayed if the specific agent is unavailable. -->
  <div id="dta_offline" style="display: none;">

    <!-- button_online is displayed if any agents are available to chat for the button. -->
    <div id="button_online" style="display: none;">Sorry, {!user.name} is not available. If you&rsquo;d like, you can
      <a href="javascript://Chat" onclick="liveagent.startChat('573D01234567890')">start a chat with another agent</a>.
    </div>

    <!-- button_offline is displayed if no agents are available to chat for the button. -->
    <div id="button_offline" style="display: none;">Sorry, all agents (including {!user.name}) appear to be unavailable.</div>

  </div>

  <!-- Change the live agent pool to the correct one for your org. -->
  <script type='text/javascript' src='https://LiveAgentPool.salesforceliveagent.com/content/g/deployment.js'></script>

  <script type='text/javascript'>
    /* The following calls pass the user ID as the first argument and show whether the agent is online.*/
    liveagent.showWhenOnline('{!left(user.id,15)}', document.getElementById('dta_online'));
    liveagent.showWhenOffline('{!left(user.id,15)}', document.getElementById('dta_offline'));

    /* The following calls pass the button ID as the first argument and show whether 
    any agents are available to handle chats from the button. */
    liveagent.showWhenOnline('573D01234567890', document.getElementById('button_online'));
    liveagent.showWhenOffline('573D01234567890', document.getElementById('button_offline'));

    /* The live agent pool and these IDs are specific to your org, so replace these with your own. */
    liveagent.init('https://LiveAgentPool.salesforceliveagent.com/chat', '572D01234567890', '00DD01234567890');
  </script>
</apex:page>
```
