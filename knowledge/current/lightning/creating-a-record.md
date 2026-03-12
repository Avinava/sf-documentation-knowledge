---
title: "Creating a Record"
domain: lightning
topic: creating-a-record
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:48.684Z
estimatedTokens: 2564
keywords: [Creating, Record, simplest, way, form, users, lightning, recordForm, want, customize, layout, preload, custom, recordEditForm, customization]
---

# Creating a Record

> The simplest way to create a form that enables users create a record is to use lightning:recordForm. If you want to customize the form
        layout or preload custom values, use lightning:recordEditForm. If you need more customization than the form-based
        components allow, use force:recordData.

# Creating a Record

The simplest way to create a form that enables users create a record is to use lightning:recordForm. If you want to customize the form layout or preload custom values, use lightning:recordEditForm. If you need more customization than the form-based components allow, use force:recordData.

## Create a Record using lightning:recordForm

To create a record using lightning:recordForm, leave out the recordId attribute.

This example displays a form that creates an account record with a list of fields. The Cancel and Save buttons are displayed at the bottom of the form.

```

```

When the record saves successfully, the fields display pencil icons to denote that inline editing is available. This view is displayed until you refresh or reload the page. Then the form redisplays the record fields without data, ready to create a new record.

Alternatively, use the Full layout type, which loads all fields from the full layout to display a form that creates a record. The columns attribute displays the record fields in two columns that are evenly sized.

```

```

## Customize Error Handling in lightning:recordForm

When an error is encountered during save, lightning:recordForm displays an error message at the top of the form. You can provide additional error handling using the onerror event handler.

This example displays a toast message when an error is returned.

```

```

To return the error message, use event.getParam("message").

```

```

To customize the form behavior when a record saves successfully, use the onsuccess event handler.

If you want to provide a custom layout or load custom field values when the form displays, use the lightning:recordEditForm component as shown in the next section.

## Create a Record with a Custom Layout Using lightning:recordEditForm

To provide a custom layout for your form fields, use the lightning:recordEditForm component.

Pass in the fields to lightning:inputField, which displays an input control based on the record field type.

This example creates a custom layout using the Grid utility classes in Lightning Design System.

```

```

When a server error is encountered,lightning:recordEditForm displays an error message above the form fields. To enable automatic error handling, include the lightning:messages component. Alternatively, provide your own error handling using the onerror event handler.

Another feature that lightning:recordEditForm provides that’s not available with lightning:recordForm is preset custom field values, as shown in the next section.

## Prepopulate Field Values

To provide a custom field value when the form displays, use the value attribute on lightning:inputField. If you're providing a record ID, the value returned by the record on load does not override this custom value.

Alternatively, set the field value using this syntax.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

For more information, see [lightning:recordEditForm](https://developer.salesforce.com/docs/component-library/bundle/lightning:recordEditForm/documentation).

If you require more customization when creating a record than what lightning:recordForm and lightning:recordEditForm allow, consider using force:recordData.

## Create a Record via a Custom User Interface Using force:recordData

To create a record using force:recordData, leave out the recordId attribute. Load a record template by calling the getNewRecord function on force:recordData. Finally, apply values to the new record, and save the record by calling the saveRecord function on force:recordData.

1.  Call getNewRecord to create an empty record from a record template. You can use this record as the backing store for a form or otherwise have its values set to data intended to be saved.
2.  Call saveRecord to commit the record. This is described in [Editing a Record](atlas.en-us.lightning.meta/lightning/data_service_save_record.htm#data_service_save_record "The simplest way to create a form that enables you to edit a record is to use the lightning:recordForm component. If you want to customize the form layout or preload custom values, use lightning:recordEditForm. If you want to customize a form more than the form-based components allow, use force:recordData.").

## Create an Empty Record from a Record Template

To create an empty record from a record template, you can’t set a recordId on the force:recordData tag. Without a recordId, Lightning Data Service doesn’t load an existing record.

In your component’s init or another handler, call the getNewRecord on force:recordData. getNewRecord takes the following arguments.

| Attribute Name | Type | Description |
| --- | --- | --- |
| objectApiName | String | The object API name for the new record. |
| recordTypeId | String | The 18 character ID of the record type for the new record.If not specified, the default record type for the object is used, as defined in the user’s profile. |
| skipCache | Boolean | Whether to load the record template from the server instead of the client-side Lightning Data Service cache. Defaults to false. |
| callback | Function | A function invoked after the empty record is created. This function receives no arguments. |

getNewRecord doesn’t return a result. It simply prepares an empty record and assigns it to the targetRecord attribute.

## Creating a Record

The following example illustrates the essentials of creating a record using Lightning Data Service. This example is intended to be added to an account record Lightning page.

ldsCreate.cmp

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

To improve performance, we recommend using the fields attribute to query only the fields you need. Use layoutType only if you want the administrator, not the component, to control the fields that are provisioned. The component must handle receiving every field that is assigned to the layout for the context user.

This component doesn’t set the recordId attribute of force:recordData. This tells Lightning Data Service to expect a new record. Here, that’s created in the component’s init handler.

ldsCreateController.js

```

```

The doInit init handler calls getNewRecord() on the force:recordData component, passing in a simple callback handler. This call returns a [Record](https://developer.salesforce.com/docs/atlas.en-us.260.0.uiapi.meta/uiapi/ui_api_responses_record.htm "HTML (New Window)") object to create an empty contact record, which is used by the contact form in the component’s markup.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

The callback passed to getNewRecord() must be wrapped in $A.getCallback() to ensure correct access context when the callback is invoked. If the callback is passed in without being wrapped in $A.getCallback(), any attempt to access private attributes of your component results in access check failures.

Even if you’re not accessing private attributes, it’s a best practice to always wrap the callback function for getNewRecord() in $A.getCallback(). Never mix (contexts), never worry.

The handleSaveContact handler is called when the **Save Contact** button is clicked. It’s a straightforward application of saving the contact, as described in [Editing a Record](atlas.en-us.lightning.meta/lightning/data_service_save_record.htm#data_service_save_record "The simplest way to create a form that enables you to edit a record is to use the lightning:recordForm component. If you want to customize the form layout or preload custom values, use lightning:recordEditForm. If you want to customize a form more than the form-based components allow, use force:recordData."), and then updating the user interface.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

The helper function, validateContactForm, isn’t shown. It simply validates the form values. For an example of this validation, see [Lightning Action Examples](atlas.en-us.lightning.meta/lightning/data_service_example.htm#data_service_example "Here are some examples that use the base components to create a Quick Contact action panel.").

#### See Also

-   [*Component Library*: lightning:recordForm](https://developer.salesforce.com/docs/component-library/bundle/lightning:recordForm/documentation "Component Library: lightning:recordForm - HTML (New Window)")

-   [*Component Library*: lightning:recordEditForm](https://developer.salesforce.com/docs/component-library/bundle/lightning:recordEditForm/documentation "Component Library: lightning:recordEditForm - HTML (New Window)")

-   [Editing a Record](atlas.en-us.lightning.meta/lightning/data_service_save_record.htm "The simplest way to create a form that enables you to edit a record is to use the lightning:recordForm component. If you want to customize the form layout or preload custom values, use lightning:recordEditForm. If you want to customize a form more than the form-based components allow, use force:recordData.")

-   [Configure Components for Lightning Experience Record Pages](atlas.en-us.lightning.meta/lightning/components_config_for_app_builder_record_home.htm "After your component is set up to work on Lightning pages and in the Lightning App Builder, use these guidelines to configure the component so it works on record pages in Lightning Experience.")

-   [Configure Components for Record-Specific Actions](atlas.en-us.lightning.meta/lightning/components_using_lex_s1_config_action_recordid.htm "Add the force:hasRecordId interface to an Aura component to enable the component to be assigned the ID of the current record. The current record ID is useful if the component is used on a Lightning record page, as an object-specific custom action or action override in Lightning Experience or the Salesforce app, and so on.")

-   [Controlling Access](atlas.en-us.lightning.meta/lightning/access_intro.htm "The framework enables you to control access to your applications, attributes, components, events, interfaces, and methods via the access system attribute. The access system attribute indicates whether the resource can be used outside of its own namespace.")

## Code Examples

```
<aura:component>
    <aura:attribute name="fields"
                    type="String[]"
                    default="['Name', 'Industry']"/>
    <lightning:recordForm objectApiName="Account"
                          fields="{!v.fields}"/>
</aura:component>
```

```
<aura:component>
    <lightning:recordForm objectApiName="Account"
                          layoutType="Full"
                          columns="2"/>
</aura:component>
```

```
<aura:component>
    <aura:attribute name="fields"
                    type="String[]"
                    default="['Name', 'Industry']"/>

    <!-- Displays toast notifications -->
    <lightning:notificationsLibrary aura:id="notifLib" />
    <lightning:recordForm
        objectApiName="Account"
        fields="{!v.fields}"
        onerror="{!c.handleError}"/>
</aura:component>
```

```
({
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
<aura:component>
    <lightning:recordEditForm objectApiName="Account">
        <lightning:messages />
            <div class="slds-grid">
                <div class="slds-col slds-size_2-of-3">
                    <lightning:inputField fieldName="Name"/>
                </div>
                <div class="slds-col slds-size_1-of-3">
                    <lightning:inputField fieldName="Industry"/>
                </div>
            </div>
        <lightning:button class="slds-m-top_small" type="submit" label="Create new" />
    </lightning:recordEditForm>
</aura:component>
```

## Related Topics

- Editing a Record (atlas.en-us.lightning.meta/lightning/data_service_save_record.htm)
- Lightning Action Examples (atlas.en-us.lightning.meta/lightning/data_service_example.htm)
- Configure Components for Lightning Experience Record Pages (atlas.en-us.lightning.meta/lightning/components_config_for_app_builder_record_home.htm)
- Configure Components for Record-Specific Actions (atlas.en-us.lightning.meta/lightning/components_using_lex_s1_config_action_recordid.htm)
- Controlling Access (atlas.en-us.lightning.meta/lightning/access_intro.htm)
