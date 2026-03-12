---
title: "Quick Actions"
domain: api-action
topic: quick-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.183Z
estimatedTokens: 373
keywords: [Quick, Actions, action, task, case, Invoke, object-specific, records, log, calls, REST, HTTP, Inputs]
---

# Quick Actions

> Use a quick action to create a task or a case. Invoke existing quick
   actions, both global and object-specific, to create records, update records, or log
  calls.

# Quick Actions

Use a quick action to create a task or a case. Invoke existing quick actions, both global and object-specific, to create records, update records, or log calls.

For more information about creating global quick actions, see [Create Global Quick Actions](https://help.salesforce.com/HTViewHelpDoc?id=creating_global_actions.htm&language=en_US "HTML (New Window)"), and for more information on object-specific quick actions, see [Create Object-Specific Quick Actions](https://help.salesforce.com/HTViewHelpDoc?id=creating_object_specific_actions.htm&language=en_US "HTML (New Window)"), in Salesforce Help.

This object is available in API version 32.0 and later.

## Supported REST HTTP Methods

URI

Get a list of quick actions:

/services/data/vXX.X/actions/custom/quickAction

Get a specific quick action:

/services/data/vXX.X/actions/custom/quickAction/quick\_action\_name

Formats

JSON, XML

HTTP Methods

GET, HEAD, POST

Authentication

Authorization: Bearer token

Notes

The only type of quick actions that can be invoked are create, update, and logACall.

## Inputs

All quick actions have the contextId input parameter. It’s a reference to the related record for the quick action. Other inputs vary according to the layout of the quick action. To determine inputs for a specific quick action, use the describe feature. For example, perform a GET with /services/data/vXX.X/actions/custom/quickAction/Task/deferTask to see the inputs for the quick action deferTask.
