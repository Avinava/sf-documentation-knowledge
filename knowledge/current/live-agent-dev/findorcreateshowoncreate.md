---
title: "findOrCreate.showOnCreate"
domain: live-agent-dev
topic: findorcreateshowoncreate
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:50.081Z
estimatedTokens: 109
keywords: [findOrCreate.showOnCreate, automatically, open, record, subtab, Salesforce, console, Usage]
---

# findOrCreate.showOnCreate

> Use the findOrCreate.showOnCreate method to find
    or create a record and automatically open it in a subtab in the Salesforce console.

# findOrCreate.showOnCreate

Use the findOrCreate.showOnCreate method to find or create a record and automatically open it in a subtab in the Salesforce console.

## Usage

Opens the record you created using the findOrCreate.map.doCreate and findOrCreate.map.doFind Pre-Chat API methods automatically in a subtab in the to the Salesforce console.

Available in API versions 29.0 and later.

## Syntax

<input type= "hidden" name= "liveagent.prechat.findorcreate.showOnCreate: **String** entityName" value= "**Boolean** show" />

## Parameters

| Name | Type | Description | Available Versions |
| --- | --- | --- | --- |
| entityName | String | The type of record to search for or create when an agent accepts a chat with a customer—for example, a contact record. | Available in API versions 29.0 and later. |
| show | Boolean | Specifies whether to display the record you created in a subtab in the Salesforce console (true) or not (false). | Available in API versions 29.0 and later. |
