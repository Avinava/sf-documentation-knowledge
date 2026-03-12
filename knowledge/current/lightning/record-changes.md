---
title: "Record Changes"
domain: lightning
topic: record-changes
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:48.725Z
estimatedTokens: 378
keywords: [Record, Changes, perform, advanced, tasks, force, recordData, handle, recordUpdated, event, loaded, updated, deleted, applying, different]
---

# Record Changes

> To perform more advanced tasks using force:recordData when the record changes, handle the recordUpdated event. You can handle record loaded, updated, and deleted changes,
    applying different actions to each change type.

# Record Changes

To perform more advanced tasks using force:recordData when the record changes, handle the recordUpdated event. You can handle record loaded, updated, and deleted changes, applying different actions to each change type.

If a component performs logic that’s specific to the record data, it must run that logic again when the record changes. A common example is a business process in which the actions that apply to a record change depending on the record’s values. For example, different actions apply to opportunities at different stages of the sales cycle.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Lightning Data Service notifies listeners about data changes only if the changed fields are the same as in the listener’s fields or layout.

## Example

Declare that your component handles the recordUpdated event. To improve performance, we recommend using the fields attribute to query only the fields you need. Use layoutType only if you want the administrator, not the component, to control the fields that are provisioned. The component must handle receiving every field that is assigned to the layout for the context user.

```

```

Implement an action handler that handles the change.

```

```

When loading a record in edit mode, the record isn’t automatically updated to prevent edits currently in progress from being overwritten. To update the record, use the reloadRecord method in the action handler.

```

```

```

```

## Code Examples

```
<force:recordData aura:id="forceRecord"
    recordId="{!v.recordId}" 
    fields="Name,Title,Email"
    targetRecord="{!v._record}"
    targetFields="{!v.simpleRecord}"
    targetError="{!v._error}"
    recordUpdated="{!c.recordUpdated}" />
```

```
({
  recordUpdated: function(component, event, helper) {

    var changeType = event.getParams().changeType;

    if (changeType === "ERROR") { /* handle error; do this first! */ }
    else if (changeType === "LOADED") { /* handle record load */ }
    else if (changeType === "REMOVED") { /* handle record removal */ }
    else if (changeType === "CHANGED") { /* handle record change */ }
})
```

```
<force:recordData aura:id="forceRecord"
    recordId="{!v.recordId}" 
    fields="Name,Title,Email"
    targetRecord="{!v._record}"
    targetFields="{!v.simpleRecord}"
    targetError="{!v._error}"
    mode="EDIT"
    recordUpdated="{!c.recordUpdated}" />
```

```
({
  recordUpdated : function(component, event, helper) {

    var changeType = event.getParams().changeType;

    if (changeType === "ERROR") { /* handle error; do this first! */ }
    else if (changeType === "LOADED") { /* handle record load */ }
    else if (changeType === "REMOVED") { /* handle record removal */ }
    else if (changeType === "CHANGED") { 
      /* handle record change; reloadRecord will cause you to lose your current record, including any changes you’ve made */ 
      component.find("forceRecord").reloadRecord();}
    }
})
```
