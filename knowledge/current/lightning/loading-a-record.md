---
title: "Loading a Record"
domain: lightning
topic: loading-a-record
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.735Z
estimatedTokens: 1682
keywords: [Loading, Record, accomplished, entirely, markup, lightning, recordForm, custom, layout, recordViewForm, customization, form-based, components, allow, viewing]
---

# Loading a Record

> Loading a record can be accomplished entirely in markup using lightning:recordForm. If you need a custom layout, use
            lightning:recordViewForm. If you need more
        customization than the form-based components allow for viewing record data, use force:recordData.

# Loading a Record

Loading a record can be accomplished entirely in markup using lightning:recordForm. If you need a custom layout, use lightning:recordViewForm. If you need more customization than the form-based components allow for viewing record data, use force:recordData.

## Display a Record Using lightning:recordForm

To display a record using lightning:recordForm, provide the record ID and the object API name. Additionally, provide fields using either the fields or layoutType attribute. You can display a record in two modes using the mode attribute.

view

Loads the form using output fields with inline editing enabled. Editable fields have edit icons. If a user clicks an edit icon, editable fields in the form become editable, and the form displays Cancel and Save buttons. This is the default mode when a record ID is provided.

readonly

Loads the form with output fields only. The form doesn’t include edit icons or Cancel and Save buttons.

This example displays an account record in view mode using the compact layout, which includes fewer fields than the full layout. The columns attribute displays the record fields in two columns that are evenly sized. Update the record ID with your own.

```

```

To display the field values on a record page, implement the flexipage:availableForRecordHome and flexipage:hasRecordId. The component automatically inherits the record ID.

This example displays read-only values for the account’s Name and Industry fields. Add this example to an account record page.

```

```

If you provide both fields and layoutType attributes, the display order of the fields is not guaranteed. To specify the field order, use fields without the layoutType attribute. Alternatively, use the lightning:recordViewForm component as shown in the next section.

## Display a Record with a Custom Layout Using lightning:recordViewForm

To display a read-only record with a custom layout, use the lightning:recordViewForm component. To compose a form field, use lightning:outputField components, which maps to a Salesforce field by using the fieldName attribute. Including individual fields lets you style a custom layout using the Lightning Design System utility classes, such as the grid system.

```

```

If you require more customization when displaying a record than what lightning:recordForm and lightning:recordViewForm allow, consider using force:recordData.

## Display Record Data in a Custom User Interface Using force:recordData

force:recordData enables granular customization, including providing your own component to load data. To load a record using Lightning Data Service, add the force:recordData tag to your component and specify:

-   The ID of the record to load
-   A component attribute to assign the loaded record
-   A list of fields to load

To specify a list of fields to load, use the fields attribute. For example, fields="Name,BillingCity,BillingState".

Alternatively, you can specify a layout using the layoutType attribute. All fields on that layout are loaded for the record. The layout depends on the page layout assignment for the profile. For example, if a user using the Marketing User profile is assigned the default account layout, all fields on that layout are available to that user. Layouts are typically modified by administrators, so layoutType isn’t as flexible as fields when you want to request specific fields. Loading record data using layoutType allows your component to adapt to layout definitions. Valid values for layoutType are FULL and COMPACT.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

We recommend that you use the fields attribute instead of layoutType. Use layoutType only if you want the administrator, not the component, to control the fields that are provisioned. The component must handle receiving every field that is assigned to the layout for the context user.

To get a field from an object regardless of whether an admin has included it in a layout, use the fields attribute and request the field by name.

targetRecord is populated with the current record, containing the fields relevant to the requested layoutType or the fields listed in the fields attribute. targetFields is populated with a simplified view of the loaded record. For example, for the Name field, v.targetRecord.fields.Name.value is equivalent to v.targetFields.Name.

## Loading a Record

The following example illustrates the essentials of loading a record using force:recordData. This component can be added to a record home page in the Lightning App Builder, or as a custom action. The record ID is supplied by the implicit recordId attribute added by the force:hasRecordId interface.

ldsLoad.cmp

```

```

When you use the fields attribute, the targetFields attribute returns the record’s Id and SystemModstamp fields, in addition to the fields you requested. In this example, {!v.simpleRecord} returns:

```

```

ldsLoadController.js

```

```

When the record loads or updates, to access the record fields in the JavaScript controller, use the component.get("v.simpleRecord.fieldName") syntax.

force:recordData loads data asynchronously by design since it may go to the server to retrieve data. To track when the record is loaded or changed, use the recordUpdated event as shown in the previous example. Alternatively, you can place a change handler on the attribute provided to targetRecord or targetFields.

#### See Also

-   [*Component Library*: lightning:recordForm](https://developer.salesforce.com/docs/component-library/bundle/lightning:recordForm/documentation "Component Library: lightning:recordForm - HTML (New Window)")

-   [*Component Library*: lightning:recordViewForm](https://developer.salesforce.com/docs/component-library/bundle/lightning:recordViewForm/documentation "Component Library: lightning:recordViewForm - HTML (New Window)")

-   [Configure Components for Lightning Experience Record Pages](atlas.en-us.lightning.meta/lightning/components_config_for_app_builder_record_home.htm "After your component is set up to work on Lightning pages and in the Lightning App Builder, use these guidelines to configure the component so it works on record pages in Lightning Experience.")

-   [Configure Components for Record-Specific Actions](atlas.en-us.lightning.meta/lightning/components_using_lex_s1_config_action_recordid.htm "Add the force:hasRecordId interface to an Aura component to enable the component to be assigned the ID of the current record. The current record ID is useful if the component is used on a Lightning record page, as an object-specific custom action or action override in Lightning Experience or the Salesforce app, and so on.")

## Code Examples

```
<aura:component>
    <lightning:recordForm
        recordId="001XXXXXXXXXXXXXXX"
        objectApiName="Account"
        layoutType="Compact"
        columns="2"/>
</aura:component>
```

```
<aura:component implements="flexipage:availableForRecordHome,force:hasRecordId">
    <aura:attribute name="recordId" type="String" />
    <aura:attribute name="fields" type="String[]" default="['Name','Industry']" />
    <lightning:recordForm recordId="{!v.recordId}" 
                          objectApiName="Account"
                          mode="readonly"
                          fields="{!v.fields}" />
```

```
<aura:component>
    <lightning:recordViewForm recordId="001XXXXXXXXXXXXXXX" 
                              objectApiName="Account">
    <div class="slds-grid">
        <div class="slds-col slds-size_2-of-3">
            <lightning:outputField fieldName="Name" />
            <lightning:outputField fieldName="Phone" />
        </div>
        <div class="slds-col slds-size_1-of-3">
            <lightning:outputField fieldName="Industry" />
            <lightning:outputField fieldName="AnnualRevenue" />
        </div>
    </div>
</lightning:recordViewForm>
</aura:component>
```

```
<aura:component implements="flexipage:availableForRecordHome, force:lightningQuickActionWithoutHeader, force:hasRecordId">

    <aura:attribute name="record" type="Object"/>
    <aura:attribute name="simpleRecord" type="Object"/>
    <aura:attribute name="recordError" type="String"/>

    <force:recordData aura:id="recordLoader"
      fields="Name,BillingCity,BillingState,Industry"
      recordId="{!v.recordId}"
      targetFields="{!v.simpleRecord}"
      targetError="{!v.recordError}"
      recordUpdated="{!c.handleRecordUpdated}"
      />

    <!-- Display a lightning card with details about the record -->
    <div class="Record Details"> 
    <lightning:card iconName="standard:account" title="{!v.simpleRecord.Name}" >
        <div class="slds-p-horizontal--small">
            <p class="slds-text-heading--small">
                <lightning:formattedText title="Billing City" value="{!v.simpleRecord.BillingCity}" /></p>
            <p class="slds-text-heading--small">
                <lightning:formattedText title="Billing State" value="{!v.simpleRecord.BillingState}" /></p>
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
{
  "Id":"0011a0000000000000",
  "Name":"Salesforce",
  "SystemModstamp":"2020-06-14T23:44:43.000Z",
  "BillingCity":"San Franscisco",
  "BillingState":"CA",
  "Industry":"Technology"
}
```

## Related Topics

- Configure Components for Lightning Experience Record Pages (atlas.en-us.lightning.meta/lightning/components_config_for_app_builder_record_home.htm)
- Configure Components for Record-Specific Actions (atlas.en-us.lightning.meta/lightning/components_using_lex_s1_config_action_recordid.htm)
