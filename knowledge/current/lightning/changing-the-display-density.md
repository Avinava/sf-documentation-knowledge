---
title: "Changing the Display Density"
domain: lightning
topic: changing-the-display-density
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:48.701Z
estimatedTokens: 1096
keywords: [Changing, Display, Density, Lightning, Experience, setting, determines, how, densely, content, labels, located, controlled, org, Setup]
---

# Changing the Display Density

> In Lightning Experience, the display density setting determines how densely content
        is displayed and where field labels are located. Display density is controlled for the org
        in Setup, and users can also set display density to their liking from their profile
        menu.

# Changing the Display Density

In Lightning Experience, the display density setting determines how densely content is displayed and where field labels are located. Display density is controlled for the org in Setup, and users can also set display density to their liking from their profile menu.

An org’s comfy setting places the labels on the top of fields and adds more space between page elements. Contrastingly, compact is a denser view with labels on the same line as the fields and less space between lines. The cozy setting resembles compact, but with more space between lines.

You can design your form to respect the display density setting, or set the form density to override the display density setting. Overriding display density gives you more control over the label location, but doesn’t affect spacing. In addition, you can set individual fields in your form to use variants that change the label location for the field.

## Use the Org’s Default Display Density in a Form

lightning:recordEditForm, lightning:recordViewForm, and lightning:recordForm adapt to your org's display density by default or when you set density="auto".

```

```

## Override the Org’s Display Density

To override the org's display density, specify density="compact" or density="comfy". The cozy value isn’t supported on the density attribute. If an org's display density is set to cozy, labels and fields are on the same line by default.

The following table lists the org’s display density settings and how they relate to the form density on lightning:recordEditForm, lightning:recordViewForm, and lightning:recordForm.

| Org Display Density | Form Density | Field Label Alignment |
| --- | --- | --- |
| Comfy | auto (default) or comfy | Labels are above fields |
|  | compact | Labels and fields are on the same line |
| Cozy | auto (default) or compact | Labels and fields are on the same line |
|  | comfy | Labels are above fields |
| Compact | auto (default) or compact | Labels and fields are on the same line |
|  | comfy | Labels are above fields |

## Reduce Space Between the Label and Field

When the form density is compact, the labels and fields can appear too far apart for a single column form in a larger region. To reduce the space between the label and field when the form uses compact density, use the slds-form-element\_1-col class on lightning:inputField or lightning:outputField.

```

```

## Set Label Variants on Form Fields

You can set a variant on lightning:inputField if you want specific fields to have a label and field alignment that’s different than that used by the form. A variant overrides the display density for that field.

lightning:inputField supports these variants: standard (default), label-hidden, label-inline, and label-stacked.

This example displays two input fields with inline labels, while the rest of the fields have labels displayed on top of fields due to the comfy form density.

```

```

lightning:outputField supports these variants: standard (default) and label-hidden.

This example displays output field values without labels when the form density is comfy. Hidden labels are available to assistive technology.

```

```

Additionally, to reduce the space between the label and field when the label variant is label-inline, use the slds-form-element\_1-col class on lightning:inputField.

## Usage Considerations

Admins can set the default display density for the org on the Density Settings setup page. Users can choose their own display density at any time. Admins can’t override a user’s display density setting. The org’s default display setting depends on the Salesforce edition. Density changes don’t apply to Salesforce Classic, Experience Builder sites, or the Salesforce mobile app. For more information, see [Configure User Interface Settings](https://help.salesforce.com/articleView?id=customize_ui_settings.htm&language=en_US "HTML (New Window)").

#### See Also

-   [*Component Library*: lightning:recordEditForm](https://developer.salesforce.com/docs/component-library/bundle/lightning:recordEditForm/documentation "Component Library: lightning:recordEditForm - HTML (New Window)")

-   [*Component Library*: lightning:recordViewForm](https://developer.salesforce.com/docs/component-library/bundle/lightning:recordViewForm/documentation "Component Library: lightning:recordViewForm - HTML (New Window)")

## Code Examples

```
<lightning:card iconName="standard:contact" title="recordEditForm">
    <div class="slds-p-horizontal_small">
        <!-- Replace the recordId with your own -->
        <lightning:recordEditForm recordId="003RM0000066Y82YAE"
                                  objectApiName="Contact"
                                  density="auto">
            <lightning:messages />
            <lightning:inputField fieldName="FirstName" />
            <lightning:inputField fieldName="LastName" />
            <lightning:inputField fieldName="Email" /> 
            <lightning:inputField fieldName="Phone" /> 
            
        </lightning:recordEditForm>
    </div>
</lightning:card>
```

```
<lightning:card iconName="standard:contact" title="recordEditForm">
    <div class="slds-p-horizontal_small">
        <!-- Replace the recordId with your own -->
        <lightning:recordEditForm recordId="003RM0000066Y82YAE"
                                  objectApiName="Contact"
                                  density="compact">
            <lightning:messages />
            <lightning:inputField fieldName="FirstName" class="slds-form-element_1-col"/>
            <lightning:inputField fieldName="LastName" class="slds-form-element_1-col"/>
            <lightning:inputField fieldName="Email" class="slds-form-element_1-col"/> 
            <lightning:inputField fieldName="Phone" class="slds-form-element_1-col"/> 
            
        </lightning:recordEditForm>
    </div>
</lightning:card>
```

```
<lightning:card iconName="standard:contact" title="recordEditForm">
    <div class="slds-p-horizontal_small">
        <!-- Replace the recordId with your own -->
        <lightning:recordEditForm recordId="003RM0000066Y82YAE"
                                  objectApiName="Contact"
                                  density="comfy">
            <lightning:messages/>
            <lightning:inputField fieldName="FirstName" variant="label-inline"/>
            <lightning:inputField fieldName="LastName" variant="label-inline"/>
            <lightning:inputField fieldName="Email"/>
            <lightning:inputField fieldName="Phone"/>
        </lightning:recordEditForm>
    </div>
</lightning:card>
```

```
<lightning:card iconName="standard:contact" title="recordViewForm">
    <div class="slds-p-horizontal_small">
        <!-- Replace the recordId with your own -->
        <lightning:recordViewForm recordId="003RM0000066Y82YAE"
                                  objectApiName="Contact"
                                  density="comfy">
            <lightning:messages />
            <lightning:outputField fieldName="FirstName" variant="label-hidden"/>
            <lightning:outputField fieldName="LastName" variant="label-hidden"/>
            <lightning:outputField fieldName="Email" variant="label-hidden"/> 
            <lightning:outputField fieldName="Phone" variant="label-hidden"/> 
        </lightning:recordViewForm>
    </div>
</lightning:card>
```
