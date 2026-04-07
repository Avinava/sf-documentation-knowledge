---
title: "ImportDefinitionColumnBasedAction"
domain: mc-apis
topic: importdefinitioncolumnbasedaction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:17.597Z
estimatedTokens: 205
keywords: [ImportDefinitionColumnBasedAction, multiple, action, pairs, determine, take, column, depending, skip, add]
---

> The ImportDefinitionColumnBasedAction object contains multiple value and action pairs that determine the action to take in a column depending on the value in a field. For example, you can set this object to skip and not add a value of A, delete a value of B, and update a value of C.

# ImportDefinitionColumnBasedAction

The ImportDefinitionColumnBasedAction object contains multiple value and action pairs that determine the action to take in a column depending on the value in a field. For example, you can set this object to skip and not add a value of A, delete a value of B, and update a value of C.

## Properties

| Name | Data Type | Description |
| --- | --- | --- |
| Action | ImportDefinitionColumnBasedActionType | Defines the action to take for the specified object. Valid values include:CREATEDELETEUPDATE |
| Value | xsd:string | Defines value to be used in filter or other object. In filters, the BETWEEN operator requires two Values. IN can handle multiple Values. All other operators require only one Value. isNull and isNotNull ignores any supplied values and don't return an error. |
