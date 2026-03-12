---
title: "Post-Chat Code Sample"
domain: live-agent-dev
topic: post-chat-code-sample
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:50.222Z
estimatedTokens: 885
keywords: [Post-Chat, Code, Sample, Test, preview, how, pages, work, agents, customers]
---

# Post-Chat Code Sample

> Test and preview how post-chat pages work for your agents and customers using this code
      sample.

# Post-Chat Code Sample

Test and preview how post-chat pages work for your agents and customers using this code sample.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=live_agent_dev)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

You can customize your post-chat page by including the variables you want to be displayed.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=live_agent_dev)

#### Note

If the post-chat page is hosted on a site that requires an active session, long-running chats can lead to session timeout. If the customer is on the post-chat page and is redirected to a login page, the post-chat context variables are lost.

| Possible Variables | Description |
| --- | --- |
| requestTime | The timestamp when the system received the chat request. |
| startTime | The timestamp when the agent accepted the chat. |
| deploymentId | The ID of the deployment. |
| buttonId | The Id of the button that originated the chat. |
| chatKey | The unique chat key. |
| lastVisitedPage | The last visited page value sent to the agent. |
| originalReferrer | The first page the customer visited containing the deployment code. |
| latitude | Geo location latitude of the chat visitor. |
| longitude | Geo location longitude of the chat visitor. |
| city | Geo location city of the chat visitor. |
| region | Geo location region of the chat visitor. |
| country | Geo location country of the chat visitor. |
| organization | Salesforce organization ID that hosted the chat. |
| disconnectedBy | Reason for ending the chat. Possible values:agent - the agent terminated the chatclient - the chat visitor terminated the chaterror - the system encountered an error that disconnected the chatclientIdleTimeout - the chat visitor didn’t answer within the allotted time (must have Idle Timeout configured)agentsUnavailable - there are no agents available to receive the chat or there is no room in the queue |
| windowLanguage | Language of the window as configured in the chat button. |
| chatDetails | A JSON representation of the chat data. |
| transcript | A plain text copy of the transcript. |
| attachedRecords | A list of IDs attached to the chat session in JSON array format. |
| error | Description of any errors that occurred during the chat. |

This code sample creates a post-chat page that includes basic information about the chat.

```

```

This code results in the following post-chat page for the agent:

![Post-chat page](/docs/resources/img/en-us/260.0?doc_id=images%2Fpost_chat_200.PNG&folder=live_agent_dev)

This message shows if the chat is abandoned:

![Post-chat when chat is abandoned](/docs/resources/img/en-us/260.0?doc_id=images%2Fpost_chat_abandoned.PNG&folder=live_agent_dev)

## Code Examples

```
<apex:page showHeader='false'>
      <div id='details'>
      <!-- This will present all the post chat parameters available to this page -->
            <h1>Post Chat Page</h1>   
            <p>  
            <!-- These variables are passed to the post-chat page and can be used to customize your post-chat experience -->
                  Request Time:  <apex:outputText id='c_rt' value='{!$CurrentPage.parameters.requestTime}' /><br/>
                  Start Time:  <apex:outputText id='c_st' value='{!$CurrentPage.parameters.startTime}' /><br/>
                  Deployment Id: <apex:outputText value='{!$CurrentPage.parameters.deploymentId}' /><br/>
                  Button Id: <apex:outputText value='{!$CurrentPage.parameters.buttonId}' /><br/>
                  Chat Key: <apex:outputText value='{!$CurrentPage.parameters.chatKey}' /><br />
                  Last Visited Page: <apex:outputText value='{!$CurrentPage.parameters.lastVisitedPage}' /><br/>
                  Original Referrer: <apex:outputText value='{!$CurrentPage.parameters.originalReferrer}' /><br/>
                  <!-- When the GeoLocation is not available this will appear as Unknown -->
                  Latitude: <apex:outputText value='{!$CurrentPage.parameters.latitude}' /><br/>   
                  Longitude: <apex:outputText value='{!$CurrentPage.parameters.longitude}' /><br/>
                  City: <apex:outputText value='{!$CurrentPage.parameters.city}' /><br/>
                  Region: <apex:outputText value='{!$CurrentPage.parameters.region}' /><br/>
                  Country: <apex:outputText value='{!$CurrentPage.parameters.country}' /><br/>
                  <!-- End of GeoLocation information -->
                  Organization: <apex:outputText value='{!$CurrentPage.parameters.organization}' /><br/>
                  Disconnected By: <apex:outputText value='{!$CurrentPage.parameters.disconnectedBy}' /><br/>
                  Window Language: <apex:outputText value='{!$CurrentPage.parameters.windowLanguage}' /><br/>
                  Chat Details: <apex:outputText value='{!$CurrentPage.parameters.chatDetails}' /><br />
                  Transcript: <apex:outputText value='{!$CurrentPage.parameters.transcript}' /><br/>     
                  Attached Records : <apex:outputText value='{!$CurrentPage.parameters.attachedRecords}' /><br />
                  Error: <apex:outputText value='{!$CurrentPage.parameters.error}' /><br />
            </p>
      </div>
      <hr/>
      <!-- Message to show if chat is abandoned -->
      <div id='abandoned' style='display: none;'>
          We are sorry you decided to leave the chat. Feel free to initiate a new session.
      </div>
      <!-- Code to decide if we show the abandoned block or the full data -->
      <script type='text/javascript'>
            var requestTime = '{!$CurrentPage.parameters.requestTime}';
            var startTime = '{!$CurrentPage.parameters.startTime}';
            // when startTime doesn't have a value, it means the chat never started
            if (!startTime) {
                  document.getElementById('details').style.display = 'none';
                  document.getElementById('abandoned').style.display = 'block';
            }
      </script>

</apex:page>
```
