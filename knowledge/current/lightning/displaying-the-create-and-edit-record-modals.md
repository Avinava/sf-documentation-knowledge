---
title: "Displaying the Create and Edit Record Modals"
domain: lightning
topic: displaying-the-create-and-edit-record-modals
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.739Z
estimatedTokens: 298
keywords: [Displaying, Edit, Record, Modals, take, advantage, built-in, events, display, let, records, via, Aura, component]
---

# Displaying the Create and Edit Record Modals

> You can take advantage of built-in events to display modals that let you create or edit
    records via an Aura component.

# Displaying the Create and Edit Record Modals

You can take advantage of built-in events to display modals that let you create or edit records via an Aura component.

The force:createRecord and force:editRecord events display a create record page and edit record page in a modal based on the default custom layout type for that object.

The following example contains a button that calls a client-side controller to display the edit record page. Add this example component to a record page to inherit the record ID via the force:hasRecordId interface.

```

```

The client-side controller fires the force:editRecord event, which displays the edit record page for a given record ID.

```

```

Firing this event on a record page is similar to clicking the default Edit button on a record page’s header. Records updated using the force:editRecord event are persisted automatically.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

If you don’t need the edit record page to display in a modal or if you need to specify a subset of fields, consider using Lightning Data Service via lightning:recordForm or lightning:recordEditForm instead.

## Code Examples

```
<aura:component implements="flexipage:availableForRecordHome,force:hasRecordId" >
    <aura:attribute name="recordId" type="String" />
    <lightning:button label="Edit Record" onclick="{!c.edit}"/>
</aura:component>
```

```
edit : function(component, event, helper) {
    var editRecordEvent = $A.get("e.force:editRecord");
    editRecordEvent.setParams({
        "recordId": component.get("v.recordId")
    });
    editRecordEvent.fire();
}
```
