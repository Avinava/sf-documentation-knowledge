---
title: "EmbeddedServiceLiveAgent"
domain: metadata-api
topic: embeddedserviceliveagent
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:39.235Z
estimatedTokens: 1357
keywords: [EmbeddedServiceLiveAgent, Represents, setup, node, creating, embedded, chat, deployment., extends, Metadata, metadata, inherits, its, fullName, field., Important, File, Suffix, Directory, Location]
---

# EmbeddedServiceLiveAgent

> Represents a setup node for creating an
    embedded chat deployment. This type extends the Metadata metadata type and inherits its 
    fullName field.

# EmbeddedServiceLiveAgent

Represents a setup node for creating an embedded chat deployment. This type extends the Metadata metadata type and inherits its fullName field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## File Suffix and Directory Location

EmbeddedServiceLiveAgent components are stored in the developer\_name.EmbeddedServiceLiveAgent file in the EmbeddedServiceLiveAgent folder.

## Version

EmbeddedServiceLiveAgent is available in API version 38.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| avatarImg | string | Avatar image for this embedded chat deployment. |
| customPrechatComponent | string | The custom Lightning Component that’s used for the pre-chat page in this embedded chat deployment. |
| embeddedServiceConfig | string | Required. The name of the embedded service configuration node. |
| embeddedServiceQuickActions | EmbeddedServiceQuickAction | The quick action used by the pre-chat form. |
| enabled | boolean | Required. Indicates whether this embedded chat deployment is enabled (true). |
| fontSize | EmbeddedServiceFontSize (enumeration of type string) | Required. The font size for the text in the embedded chat window. One of the following values:SmallMediumLarge |
| headerBackgroundImg | string | Header background image for this embedded chat window. Removed in API version 49.0. |
| isOfflineCaseEnabled | boolean | Indicates whether offline support is enabled for this embedded chat deployment. Available in API version 43.0 and later. |
| isQueuePositionEnabled | boolean | Indicates whether queue position (displaying the chat visitor’s place in line while they wait for an agent) is enabled for this embedded chat deployment. Available in API version 43.0 and later. |
| liveAgentChatUrl | string | The rest endpoint for chats. |
| liveAgentContentUrl | string | The rest endpoint for cChat content. |
| liveChatButton | string | Required. Reference to a chat button created in Chat setup. |
| liveChatDeployment | string | Required. Reference to a deployment created in Chat setup. |
| masterLabel | string | Required. Name of the embedded chat deployment. |
| offlineCaseBackgroundImg | string | Offline support case form background image for this embedded chat window. Available in API version 43.0 and later. |
| prechatBackgroundImg | string | Pre-chat background image for this embedded chat window. |
| prechatEnabled | string | Required. Indicates whether the embedded chat pre-chat form is enabled for this deployment. |
| prechatJson | string | JSON object of all the fields of the selected pre-chat form in Chat setup. |
| scenario | EmbeddedServiceScenario (enumeration of type string) | Required. The scenario for the embedded chat window that determines which objects to relate to the chat. One of the following values:SalesServiceBasic |
| smallCompanyLogoImg | string | Company logo image for this embedded chat window. |
| waitingStateBackgroundImg | string | Chat waiting image for this embedded chat window. |

## EmbeddedServiceQuickAction

Returns a quick action that’s associated with an EmbeddedServiceLiveAgent setup. The quick action includes the pre-chat form fields that the embedded chat window displays and shows the order in which the fields are displayed.

| Field Name | Field Type | Description |
| --- | --- | --- |
| embeddedServiceLiveAgent | string | Reference to the embedded chat deployment. |
| order | int | Order in which this quick action appears in the embedded chat pre-chat form. |
| quickActionDefinition | string | Reference to a quick action. |
| quickActionType | EmbeddedServiceQuickActionType (enumeration of type string) | Quick action type. One of the following values:Prechat–Pre-chatOfflineCase–Offline support (Cases)Available in API version 43.0 and later. |

## Declarative Metadata Sample Definition

The following is an example of an EmbeddedServiceLiveAgent file.

```

```

## Usage

EmbeddedServiceLiveAgent represents a Chat configuration that is added to your web page. The EmbeddedServiceLiveAgent record contains a unique combination of a chat button and the Chat deployment that the administrator selects during setup.

To create an EmbeddedServiceLiveAgent record:

1.  Create a Chat Deployment record.
2.  Create a Chat Button record.
3.  Create an EmbeddedServiceConfig record.
4.  Set the fields for the Chat Deployment record, Chat Button record, and EmbeddedServiceConfig record as references on the EmbeddedServiceLiveAgent record.

Any changes you make to the image fields override what you’ve entered in Setup. We recommend setting your image URLs in Setup.

## Wildcard Support in the Manifest File

This metadata type doesn’t support the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<EmbeddedServiceLiveAgent xmlns="http://soap.sforce.com/2006/04/metadata">
    <avatarImg>https://google.com/avatar.png</avatarImg>
    <customPrechatComponent>auraCustomPrechat</customPrechatComponent>
    <embeddedServiceConfig>EswConfig001</embeddedServiceConfig>
    <embeddedServiceQuickActions>
        <embeddedServiceLiveAgent>EmbeddedServiceLiveAgent_Parent04Ixx0000000001EAA_15ec5bd2971</embeddedServiceLiveAgent>
        <order>1</order>
        <quickActionDefinition>Snapins_Contact_QuickAction_08hRM000000001h</quickActionDefinition>
    </embeddedServiceQuickActions>
    <embeddedServiceQuickActions>
        <embeddedServiceLiveAgent>EmbeddedServiceLiveAgent_Parent04Ixx0000000001EAA_15ec5bd2971</embeddedServiceLiveAgent>
        <order>1</order>
        <quickActionDefinition>Snapins_Case_OfflineCaseQuickAction_08hRM000000001h</quickActionDefinition>
        <quickActionType>OfflineCase</quickActionType>
    </embeddedServiceQuickActions>
    <embeddedServiceQuickActions>
        <embeddedServiceLiveAgent>EmbeddedServiceLiveAgent_Parent04Ixx0000000001EAA_15ec5bd2971</embeddedServiceLiveAgent>
        <order>2</order>
        <quickActionDefinition>Snapins_Case_QuickAction_08hRM000000001h</quickActionDefinition>
    </embeddedServiceQuickActions>
    <enabled>true</enabled>
    <fontSize>Medium</fontSize>
    <headerBackgroundImg>https://google.com/headerBackgroundImg.png</headerBackgroundIm>
    <isOfflineCaseEnabled>true</isOfflineCaseEnabled>
    <isQueuePositionEnabled>true</isQueuePositionEnabled>
    <liveChatButton>chatButton01</liveChatButton>
    <liveChatDeployment>liveAgentDeployment01</liveChatDeployment>
    <masterLabel>EmbeddedServiceLiveAgent_Parent04Ixx0000000001EAA_15ec5bd2971</masterLabel>
    <offlineCaseBackgroundImg>https://google.com/offlineCaseBackgroundImg.png</offlineCaseBackgroundImg>
    <prechatBackgroundImg>https://google.com/prechatBackgroundImg.png</prechatBackgroundImg>
    <prechatEnabled>true</prechatEnabled>
    <scenario>Service</scenario>
    <smallCompanyLogoImg>https://google.com/smallCompanyLogoImg.png</smallCompanyLogoImg>
    <waitingStateBackgroundImg>https://google.com/waitingImage.png</waitingStateBackgroundImg>
</EmbeddedServiceLiveAgent>
```

## Related Topics

- enumeration (atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
