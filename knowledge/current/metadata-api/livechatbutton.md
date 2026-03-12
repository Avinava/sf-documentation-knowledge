---
title: "LiveChatButton"
domain: metadata-api
topic: livechatbutton
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:40.933Z
estimatedTokens: 2079
keywords: [LiveChatButton, Represents, Chat, deployment’s, settings, button, customers, click, chat, agent, window, such, label, appears, pre-chat, form, before, begins., extends, Metadata]
---

# LiveChatButton

> Represents a Chat deployment’s settings for
            the button that customers click to chat with an agent and the chat window, such as the
            label that appears on the button and the pre-chat form that appears before a chat
            begins. This type extends the Metadata metadata type and inherits its 
        fullName field.

# LiveChatButton

Represents a Chat deployment’s settings for the button that customers click to chat with an agent and the chat window, such as the label that appears on the button and the pre-chat form that appears before a chat begins. This type extends the Metadata metadata type and inherits its fullName field.

Chats routed with Omni-Channel aren’t supported in the Metadata API.

## File Suffix and Directory Location

[LiveChatButton](#livechatbutton "Represents a Chat deployment’s settings for the button that customers click to chat with an agent and the chat window, such as the label that appears on the button and the pre-chat form that appears before a chat begins. This type extends the Metadata metadata type and inherits its fullName field.") configurations are stored in the <developer\_name>.liveChatButton file in the liveChatButtons directory.

## Version

[LiveChatButton](#livechatbutton "Represents a Chat deployment’s settings for the button that customers click to chat with an agent and the chat window, such as the label that appears on the button and the pre-chat form that appears before a chat begins. This type extends the Metadata metadata type and inherits its fullName field.") is available in API version 28.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| animation | LiveChatButtonPresentation (enumeration of type string) | The type of animation for a chat invitation. Valid values are:SlideFadeAppearCustom |
| autoGreeting | string | The customized greeting message that the customer receives when an agent accepts a chat request from the chat button or invitation.Available in API version 29.0 and later. |
| chasitorIdleTimeout | int | Specifies the amount of idle time before the chat times out. The idle time starts being counted after the agent sends the last chat message. Available in API version 35.0 and later. |
| chasitorIdleTimeoutWarning | int | Specifies the amount of idle time before a warning appears. The idle time starts being counted after the agent sends the last chat message. Available in API version 35.0 and later. |
| chatPage | string | Specifies the page that hosts your chat if that page differs from the Chat window. |
| customAgentName | string | The agent’s name as it appears to customers in the chat window.Available in API version 29.0 and later. |
| deployments | LiveChatButtonDeployments | Specifies the deployments associated with the button. |
| enableQueue | boolean | Indicates whether queuing is enabled (true) or not (false). |
| inviteEndPosition | LiveChatButtonInviteEndPosition (enumeration of type string) | The end position of the chat invitation. Valid values include:TopLeftTopTopRightLeftCenterRightBottomLeftBottomBottomRight |
| inviteImage | string | The custom button graphic that appears for the invitation. |
| inviteStartPosition | LiveChatButtonInviteStartPosition (enumeration of type string) | The start position of the chat invitation. Valid values include:TopLeftTopLeftTopTopTopRightTopTopRightTopRightRightRightBottomRightRightBottomRightBottomRightBottomBottomBottomLeftBottomBottomLeftBottomLeftLeftLeftTopLeftLeft |
| isActive | boolean | Specifies whether the chat button or invitation is active. |
| label | string | Specifies the text that appears on the button. |
| numberOfReroutingAttempts | int | Specifies the number of times a chat request can be rerouted to available agents if all agents reject the chat request. Available in API version 30.0 and later. |
| offlineImage | string | Specifies the image that appears on the button when no agents are available to chat. |
| onlineImage | string | Specifies the image that appears on the button when agents are available to chat. |
| optionsCustomRoutingIsEnabled | boolean | Indicates whether custom routing is enabled for incoming chat requests (true) or not (false). Available in API version 30.0 and later. |
| optionsHasChasitorIdleTimeout | boolean | Indicates whether the visitor idle timeout feature is enabled. Available in API version 35.0 and later. |
| optionsHasInviteAfterAccept | boolean | Indicates whether a new chat invitation triggers after a customer accepts a previous chat invitation (true) or not (false). |
| optionsHasInviteAfterReject | boolean | Indicates whether a new chat invitation triggers after a customer rejects a previous chat invitation (true) or not (false). |
| optionsHasRerouteDeclinedRequest | boolean | Indicates whether a chat request, which has been rejected by all available agents, is rerouted to available agents again (true) or not (false). Available in API version 30.0 and later. |
| optionsIsAutoAccept | boolean | Indicates whether a chat request is automatically accepted by the agent it’s assigned to (true) or not (false). For chat buttons and automated chat invitations with routingType set to MostAvailable or LeastActive. Available in API version 30.0 and later. |
| optionsIsInviteAutoRemove | boolean | Indicates whether a chat invitation is set to automatically disappear from a customer’s screen after a certain amount of time (true) or not (false). |
| overallQueueLength | int | Specifies the maximum number of chat requests that are allowed to queue. |
| perAgentQueueLength | int | Specifies the number of chat requests that are allowed to queue for an agent with the required skills. |
| postChatPage | string | Specifies the name of the post-chat form to which customers are routed when the chat ends. |
| postChatUrl | string | Specifies the URL of the post-chat form to which customers are routed when the chat ends. |
| preChatFormPage | string | Specifies the name of the pre-chat form to which customers are routed before a chat begins. |
| preChatFormUrl | string | Specifies the URL of the pre-chat form to which customers are routed when the chat begins. |
| pushTimeOut | int | Specifies the number of seconds an agent has to answer an incoming chat request before the request is routed to another agent. |
| routingType | LiveChatButtonRoutingType (enumeration of type string) | Specifies how incoming chats are routed to agents when a customer pushes a button. Valid values are:ChoiceLeastActiveMostAvailable |
| site | string | Specifies the Salesforce site that hosts your custom chat button images or custom chat page.You must have the CustomDomain permission enabled in your organization before you can use a Salesforce site with Chat. |
| skills | LiveChatButtonSkills | Specifies the skills associated with the button. When a customer clicks the button to chat, they’re automatically routed to agents with those skills. |
| timeToRemoveInvite | int | Specifies how long the invitation is displayed (in seconds) to customers before it disappears. |
| type | LiveChatButtonType (enumeration of type string) | Required. The chat button type. Valid values are:StandardInvite |
| windowLanguage | Language | Specifies the language preferences for the chat window associated with the button. |

## LiveChatButtonSkills

Represents the skills associated with a chat button or invitation.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| skill | string | Specifies the name of the skill. |

## LiveChatButtonDeployments

Represents the deployments associated with a chat button or invitation.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| deployment | string | Specifies the name of the deployment. |

## Declarative Metadata Sample Definition

Here’s a sample of a liveChatButton file.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

If you update your chat button through the Metadata API, be sure to update all Web pages that use the same chat button code.

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<LiveChatButton xmlns="http://soap.sforce.com/2006/04/metadata">
    <deployments/>
    <enableQueue>false</enableQueue>
    <isActive>true</isActive>
    <label>CustomerSupportButton</label>
    <optionsCustomRoutingIsEnabled>false</optionsCustomRoutingIsEnabled>
    <optionsHasChasitorIdleTimeout>false</optionsHasChasitorIdleTimeout>
    <optionsHasInviteAfterAccept>false</optionsHasInviteAfterAccept>
    <optionsHasInviteAfterReject>false</optionsHasInviteAfterReject>
    <optionsHasRerouteDeclinedRequest>false</optionsHasRerouteDeclinedRequest>
    <optionsIsAutoAccept>false</optionsIsAutoAccept>
    <optionsIsInviteAutoRemove>false</optionsIsInviteAutoRemove>
    <postChatUrl>https://help.salesforce.com</postChatUrl>
    <routingType>Choice</routingType>
    <skills>
        <skill>Chat</skill>
    </skills>
    <type>Standard</type>
</LiveChatButton>
```

## Related Topics

- enumeration (atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm)
- Language (atlas.en-us.api_meta.meta/api_meta/meta_translations.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
