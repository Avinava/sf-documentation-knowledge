---
title: "Deleting a Record"
domain: lightning
topic: deleting-a-record
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.691Z
estimatedTokens: 772
keywords: [Deleting, Record, Lightning, Data, Service, call, deleteRecord, force, recordData, component, pass, callback, function, invoked, operation]
---

# Deleting a Record

> To delete a record using Lightning Data Service, call deleteRecord on the force:recordData
        component, and pass in a callback function to be invoked after the delete operation
        completes. The form-based components, such as lightning:recordForm, don’t currently support deleting a record.

# Deleting a Record

To delete a record using Lightning Data Service, call deleteRecord on the force:recordData component, and pass in a callback function to be invoked after the delete operation completes. The form-based components, such as lightning:recordForm, don’t currently support deleting a record.

Delete operations with Lightning Data Service are straightforward. The force:recordData tag can include minimal details. If you don’t need any record data, set the fields attribute to just Id. If you know that the only operation is a delete, any mode can be used.

To perform the delete operation, call deleteRecord on the force:recordData component from the appropriate controller action handler. deleteRecord takes one argument, a callback function to be invoked when the operation completes. This callback function receives a SaveRecordResult as its only parameter. SaveRecordResult includes a state attribute that indicates success or error, and other details you can use to handle the result of the operation.

## Deleting a Record

The following example illustrates the essentials of deleting a record using Lightning Data Service. This component adds a **Delete Record** button to a record page, which deletes the record being displayed. The record ID is supplied by the implicit recordId attribute added by the force:hasRecordId interface.

ldsDelete.cmp

```

```

Notice that the force:recordData tag includes only the recordId and a nearly empty fields list—the absolute minimum required. If you want to display record values in the user interface, for example, as part of a confirmation message, define the force:recordData tag as you would for a load operation instead of this minimal delete example.

ldsDeleteController.js

```

```

When the record is deleted, navigate away from the record page. Otherwise, you see a “record not found” error when the component refreshes. Here the controller uses the objectApiName property in the SaveRecordResult provided to the callback function, and navigates to the object home page.

#### See Also

-   [SaveRecordResult](atlas.en-us.lightning.meta/lightning/data_service_saverecordresult.htm "Represents the result of a Lightning Data Service operation that makes a persistent change to record data.")

-   [Configure Components for Lightning Experience Record Pages](atlas.en-us.lightning.meta/lightning/components_config_for_app_builder_record_home.htm "After your component is set up to work on Lightning pages and in the Lightning App Builder, use these guidelines to configure the component so it works on record pages in Lightning Experience.")

-   [Configure Components for Record-Specific Actions](atlas.en-us.lightning.meta/lightning/components_using_lex_s1_config_action_recordid.htm "Add the force:hasRecordId interface to an Aura component to enable the component to be assigned the ID of the current record. The current record ID is useful if the component is used on a Lightning record page, as an object-specific custom action or action override in Lightning Experience or the Salesforce app, and so on.")

## Code Examples

```apex
<aura:component implements="flexipage:availableForRecordHome,force:hasRecordId">

    <aura:attribute name="recordError" type="String" access="private"/>
  
    <force:recordData aura:id="recordHandler"
        recordId="{!v.recordId}"
        fields="Id"
        targetError="{!v.recordError}"
        recordUpdated="{!c.handleRecordUpdated}" />
        
    <!-- Display the delete record form -->
    <div class="Delete Record">
        <lightning:card iconName="action:delete" title="Delete Record">
            <div class="slds-p-horizontal--small">
                <lightning:button label="Delete Record" variant="destructive" onclick="{!c.handleDeleteRecord}"/>
            </div>
        </lightning:card>
    </div>
        
    <!-- Display Lightning Data Service errors, if any -->
    <aura:if isTrue="{!not(empty(v.recordError))}">
        <div class="recordError">
            {!v.recordError}</div>
    </aura:if>
</aura:component>
```

```
({
    handleDeleteRecord: function(component, event, helper) {
        component.find("recordHandler").deleteRecord($A.getCallback(function(deleteResult) {
            // NOTE: If you want a specific behavior(an action or UI behavior) when this action is successful 
            // then handle that in a callback (generic logic when record is changed should be handled in recordUpdated event handler)
            if (deleteResult.state === "SUCCESS" || deleteResult.state === "DRAFT") {
                // record is deleted
                console.log("Record is deleted.");
            } else if (deleteResult.state === "INCOMPLETE") {
                console.log("User is offline, device doesn't support drafts.");
            } else if (deleteResult.state === "ERROR") {
                console.log('Problem deleting record, error: ' + JSON.stringify(deleteResult.error));
            } else {
                console.log('Unknown problem, state: ' + deleteResult.state + ', error: ' + JSON.stringify(deleteResult.error));
            }
        }));
    },

    /**
     * Control the component behavior here when record is changed (via any component)
     */
    handleRecordUpdated: function(component, event, helper) {
        var eventParams = event.getParams();
        if(eventParams.changeType === "CHANGED") {
           // record is changed
        } else if(eventParams.changeType === "LOADED") {
            // record is loaded in the cache
        } else if(eventParams.changeType === "REMOVED") {
            // record is deleted, show a toast UI message
            var resultsToast = $A.get("e.force:showToast");
            resultsToast.setParams({
                "title": "Deleted",
                "message": "The record was deleted."
            });
            resultsToast.fire();

        } else if(eventParams.changeType === "ERROR") {
            // there’s an error while loading, saving, or deleting the record
        }
    }
})
```

## Related Topics

- SaveRecordResult (atlas.en-us.lightning.meta/lightning/data_service_saverecordresult.htm)
- Configure Components for Lightning Experience Record Pages (atlas.en-us.lightning.meta/lightning/components_config_for_app_builder_record_home.htm)
- Configure Components for Record-Specific Actions (atlas.en-us.lightning.meta/lightning/components_using_lex_s1_config_action_recordid.htm)
