---
title: "addCustomDetail"
domain: live-agent-dev
topic: addcustomdetail
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.147Z
estimatedTokens: 246
keywords: [addCustomDetail, add, custom, chat, visitor, Usage]
---

# addCustomDetail

> Use the addCustomDetail method to add custom details for each chat visitor.

# addCustomDetail

Use the addCustomDetail method to add custom details for each chat visitor.

## Usage

Adds a new custom detail for the chat visitor. The Custom Detail is displayed to agents in the footer widget and in the Chat Details page in the Salesforce Console while the chat is active. Available in API versions 28.0 and later.

## Syntax

addCustomDetail(**String** label, **String** value, (optional) **Boolean** displayToAgent)

## Parameters

| Name | Type | Description | Available Versions |
| --- | --- | --- | --- |
| label | String | The label for the custom detail—for example, "Name". | Available in API versions 28.0 and later. |
| value | String | The value of the custom detail—for example, "John Doe". | Available in API versions 28.0 and later. |
| (Optional) displayToAgent | Boolean | Specifies whether to display the custom details that customers provide in a pre-chat form to the agent (true) or not (false). | Available in API versions 29.0 and later. |
