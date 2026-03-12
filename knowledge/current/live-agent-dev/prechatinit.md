---
title: "preChatInit"
domain: live-agent-dev
topic: prechatinit
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.018Z
estimatedTokens: 452
keywords: [preChatInit, access, deployment, passed, chat, addCustomDetail, API, Usage, Responses, detailCallback]
---

# preChatInit

> Use the preChatInit method to access the deployment information that has been passed
        into the chat through the addCustomDetail Deployment API method.

# preChatInit

Use the preChatInit method to access the deployment information that has been passed into the chat through the addCustomDetail Deployment API method.

## Usage

Extracts chat deployment information, including Custom Details, for use with pre-chat. When you use preChatInit, include the prechat.js file in the same Apex page and with the same path as the deployment.js file.

Available in API versions 29.0 and later.

## Syntax

liveagent.details.preChatInit(**String** chatUrl, **function** detailCallback, (optional) **String** chatFormName)

## Parameters

| Name | Type | Description | Available Versions |
| --- | --- | --- | --- |
| chatUrl | String | The URL of the chat to retrieve custom details from. | Available in API versions 29.0 and later. |
| detailCallback | String | Name of the JavaScript function to call upon completion of the method. | Available in API versions 29.0 and later. |
| (Optional) chatFormName | String | The name of the HTML form tag for the pre-chat form to which to incorporate the custom details. | Available in API versions 29.0 and later. |

## Responses

| Name | Type | Description | Available Versions |
| --- | --- | --- | --- |
| details | Object | An object containing the deployment information included in the pre-chat form using the preChatInit method. | Available in API versions 29.0 and later. |

## detailCallback

The detailCallback method specifies the behavior that occurs after the preChatInit method returns the details object.

| Syntax | Parameters | Description | Available Versions |
| --- | --- | --- | --- |
| function myCallBack(details) { // Customer specific code } | details | Specifies the actions to occur after the custom details are retrieved using the preChatInit method. | Available in API versions 29.0 and later. |
