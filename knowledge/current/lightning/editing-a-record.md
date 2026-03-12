---
title: "Editing a Record"
domain: lightning
topic: editing-a-record
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:48.753Z
estimatedTokens: 2252
keywords: [Editing, Record, simplest, way, form, edit, lightning, recordForm, component, want, customize, layout, preload, custom, recordEditForm]
---

# Editing a Record

> The simplest way to create a form that enables you to edit a record is to use the
            lightning:recordForm component. If you want to
        customize the form layout or preload custom values, use lightning:recordEditForm. If you want to customize a form more than the
        form-based components allow, use force:recordData.

# Editing a Record

The simplest way to create a form that enables you to edit a record is to use the lightning:recordForm component. If you want to customize the form layout or preload custom values, use lightning:recordEditForm. If you want to customize a form more than the form-based components allow, use force:recordData.

## Edit a Record using lightning:recordForm

To edit a record using lightning:recordForm, provide the record ID and object API name. When you provide a record ID, view mode is the default mode of this component, which displays fields with edit icons. If you click an edit icon, all fields in the form become editable.

This example creates a form that lets users update fields on an account record when an edit icon is clicked. It displays the fields from the compact layout in two columns. Add this example component to an account record page. The component inherits the record ID via the force:hasRecordId interface.

```

```

When the record is saved successfully, all components that contain the updated field values are refreshed automatically.

Add mode="edit" to transform the form to one that displays input fields for editing. The form displays a Save button that updates the record, and a Cancel button that reverts changes.

```

```

## Customize Error Handling in lightning:recordForm

To customize the behavior when a record is saved successfully, use the onsuccess event handler. Errors are automatically handled and displayed. To customize them, use the onerror event handler.

```

```

A toast notification is displayed when a record is saved successfully or when an error is encountered during save.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

For more information, see [lightning:recordForm](https://developer.salesforce.com/docs/component-library/bundle/lightning:recordForm/documentation).

## Edit a Record with a Custom Layout Using lightning:recordEditForm

To provide a custom layout for your form fields, use the lightning:recordEditForm component.

Pass in the fields to lightning:inputField, which displays an input control based on the record field type.

This example displays a form with two fields using a custom layout. Add this example component to an account record page.

```

```

When a server error is encountered, lightning:recordEditForm displays an error message above the form fields using the lightning:messages component. Alternatively, provide your own error handling using the onerror event handler.

Another feature that lightning:recordEditForm provides that’s not available with lightning:recordForm is displaying the form with custom field values, as shown in the next section.

## Prepopulate Field Values

To provide a custom field value when the form displays, use the value attribute on lightning:inputField. If you're providing a record ID, the value returned by the record on load does not override this custom value.

Alternatively, set the field value using this syntax.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

For more information, see [lightning:recordEditForm](https://developer.salesforce.com/docs/component-library/bundle/lightning:recordEditForm/documentation).

If you require more customization when creating a record than what lightning:recordForm and lightning:recordEditForm allow, consider using force:recordData.

## Edit a Record via a Custom User Interface Using force:recordData

To edit and save a record using force:recordData, call saveRecord and pass in a callback function to be invoked after the save operation completes. The save operation is used in two cases.

-   To save changes to an existing record
-   To create and save a new record

To save changes to an existing record, load the record in EDIT mode and call saveRecord on the force:recordData component.

To save a new record, and thus create it, create the record from a record template, as described in [Creating a Record](atlas.en-us.lightning.meta/lightning/data_service_create_record.htm#data_service_create_record "The simplest way to create a form that enables users create a record is to use lightning:recordForm. If you want to customize the form layout or preload custom values, use lightning:recordEditForm. If you need more customization than the form-based components allow, use force:recordData."). Then call saveRecord on the force:recordData component.

## Load a Record in EDIT Mode

To load a record that might be updated, set the force:recordData tag’s mode attribute to “EDIT”. Other than explicitly setting the mode, loading a record for editing is the same as loading it for any other purpose.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

Since Lightning Data Service records are shared across multiple components, loading records provides the component with a copy of the record instead of a direct reference. If a component loads a record in VIEW mode, Lightning Data Service automatically overwrites that copy with a newer copy of the record when the record is changed. If a record is loaded in EDIT mode, the record is not updated when the record is changed. This prevents unsaved changes from appearing in components that reference the record while the record is being edited, and prevents any edits in progress from being overwritten. Notifications are still sent in both modes.

## Call saveRecord to Save Record Changes

To perform the save operation, call saveRecord on the force:recordData component from the appropriate controller action handler. The saveRecord method takes one argument—a callback function to be invoked when the operation completes. This callback function receives a SaveRecordResult as its only parameter. SaveRecordResult includes a state attribute that indicates success or error, and other details you can use to handle the result of the operation.

## Saving a Record

The following example illustrates the essentials of saving a record using Lightning Data Service. It’s intended for use on a record page. The record ID is supplied by the implicit recordId attribute added by the force:hasRecordId interface.

ldsSave.cmp

```

```

To improve performance, we recommend using the fields attribute to query only the fields you need. Use layoutType only if you expect to display or edit a large number of fields on the compact or full layout.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

To edit the constituent fields on compound fields, such as the FirstName and LastName fields in the Name compound field, create a separate lightning:input component for {!v.simpleRecord.FirstName} and {!v.simpleRecord.LastName}.

This component loads a record using force:recordData set to EDIT mode, and provides a form for editing record values. (In this simple example, just the record name field.)

ldsSaveController.js

```

```

The handleSaveRecord action here is a minimal version. There’s no form validation or real error handling. Whatever is entered in the form is attempted to be saved to the record.

If you are creating multiple instances of force:recordData on a page, provide your saveRecord and recordUpdated handlers accordingly. For example, if you have two instances of force:recordData that updates the same record, assign a different aura:id to each instance, such that saveRecord is called uniquely, and subsequently the recordUpdated handler.

#### See Also

-   [*Component Library*: lightning:recordForm](https://developer.salesforce.com/docs/component-library/bundle/lightning:recordForm/documentation "Component Library: lightning:recordForm - HTML (New Window)")

-   [*Component Library*: lightning:recordEditForm](https://developer.salesforce.com/docs/component-library/bundle/lightning:recordEditForm/documentation "Component Library: lightning:recordEditForm - HTML (New Window)")

-   [SaveRecordResult](atlas.en-us.lightning.meta/lightning/data_service_saverecordresult.htm "Represents the result of a Lightning Data Service operation that makes a persistent change to record data.")

-   [Configure Components for Lightning Experience Record Pages](atlas.en-us.lightning.meta/lightning/components_config_for_app_builder_record_home.htm "After your component is set up to work on Lightning pages and in the Lightning App Builder, use these guidelines to configure the component so it works on record pages in Lightning Experience.")

-   [Configure Components for Record-Specific Actions](atlas.en-us.lightning.meta/lightning/components_using_lex_s1_config_action_recordid.htm "Add the force:hasRecordId interface to an Aura component to enable the component to be assigned the ID of the current record. The current record ID is useful if the component is used on a Lightning record page, as an object-specific custom action or action override in Lightning Experience or the Salesforce app, and so on.")

## Code Examples

```
<aura:component implements="flexipage:availableForRecordHome, force:hasRecordId">
    <lightning:recordForm 
        recordId = "{!v.recordId}"
        objectApiName="Account"
        layoutType="Compact"
        columns="2" />
</aura:component>
```

```
<aura:component implements="flexipage:availableForRecordHome, force:hasRecordId">
    <lightning:recordForm
        recordId = "{!v.recordId}"
        objectApiName="Account"
        layoutType="Compact"
        mode="edit" />
</aura:component>
```

```
<aura:component implements="flexipage:availableForRecordHome, force:hasRecordId">

    <!-- Displays a toast notification -->
    <lightning:notificationsLibrary aura:id="notifLib" />
    <lightning:recordForm
        recordId = "{!v.recordId}"
        objectApiName="Account"
        layoutType="Compact"
        mode="edit" 
        onsuccess="{!c.handleSuccess}"
        onerror="{!c.handleError}"/>
</aura:component>
```

```
({
    handleSuccess: function (cmp, event, helper) {
        cmp.find('notifLib').showToast({
            "title": "Record updated!",
            "message": "The record "+ event.getParam("id") + " has been updated successfully.",
            "variant": "success"
        });
    },

    handleError: function (cmp, event, helper) {
        cmp.find('notifLib').showToast({
            "title": "Something has gone wrong!",
            "message": event.getParam("message"),
            "variant": "error"
        });
    }
})
```

```
<aura:component implements="flexipage:availableForRecordHome, force:hasRecordId">
    <lightning:recordEditForm 
        recordId="{!v.recordId}"
        objectApiName="Account">
        <lightning:messages />
            <div class="slds-grid">
                <div class="slds-col slds-size_1-of-2">
                    <lightning:inputField fieldName="Name"/>
                </div>
                <div class="slds-col slds-size_1-of-2">
                    <lightning:inputField fieldName="Industry"/>
                </div>
            </div>
        <lightning:button class="slds-m-top_small" type="submit" label="Create new" />
    </lightning:recordEditForm>
</aura:component>
```

## Related Topics

- Creating a Record (atlas.en-us.lightning.meta/lightning/data_service_create_record.htm)
- SaveRecordResult (atlas.en-us.lightning.meta/lightning/data_service_saverecordresult.htm)
- Configure Components for Lightning Experience Record Pages (atlas.en-us.lightning.meta/lightning/components_config_for_app_builder_record_home.htm)
- Configure Components for Record-Specific Actions (atlas.en-us.lightning.meta/lightning/components_using_lex_s1_config_action_recordid.htm)
