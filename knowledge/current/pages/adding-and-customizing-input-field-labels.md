---
title: "Adding and Customizing Input Field Labels"
domain: pages
topic: adding-and-customizing-input-field-labels
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:23.684Z
estimatedTokens: 502
keywords: [Adding, Customizing, Input, Labels, inside, <apex, pageBlockSection>, component, Visualforce, components, output, automatically, display, form, label]
---

# Adding and Customizing Input Field Labels

> When used inside of a <apex:pageBlockSection> component, Visualforce input components and some output components automatically display
a form label for the field. For components that map to standard or
custom object fields, the displayed label is the object field label
by default. To override the de

# Adding and Customizing Input Field Labels

When used inside of a <apex:pageBlockSection\> component, Visualforce input components and some output components automatically display a form label for the field. For components that map to standard or custom object fields, the displayed label is the object field label by default. To override the default value, and for components that aren’t mapped directly to object fields, you can set the label using the label attribute of the component. For example:

```

```

![Using the label attribute to customize form field labels.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fpages_input_field_labels.png&folder=pages)

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

For this page to display contact data, the ID of a valid contact record must be specified as a query parameter in the URL for the page. For example,

```

```

[Displaying Field Values with Visualforce](atlas.en-us.pages.meta/pages/pages_quick_start_display_field_values.htm) has more information about retrieving the ID of a record.

The label attribute may be a string, or an expression that evaluates to a string. If you set label to an empty string, the form label for that field will be suppressed.

The label attribute can be set on the following Visualforce components:

-   <apex:inputCheckbox\>
-   <apex:inputField\>
-   <apex:inputSecret\>
-   <apex:inputText\>
-   <apex:inputTextarea\>
-   <apex:outputField\>
-   <apex:outputText\>
-   <apex:selectCheckboxes\>
-   <apex:selectList\>
-   <apex:selectRadio\>

## Custom Labels and Error Messages

When set, the label attribute will be used for component-level error messages, for example, when a field is required or must be unique. Custom labels won't be used in custom error messages, and the default object field label will be used instead. If you set a label attribute to an empty string, the default object field label will be used in all error messages.

## Code Examples

```
<apex:page standardController="Contact">
    <apex:form>
        <apex:pageBlock title="Quick Edit: {!Contact.Name}">
            <apex:pageBlockSection title="Contact Details" columns="1">
                <apex:inputField value="{!Contact.Phone}"/>
                <apex:outputField value="{!Contact.MobilePhone}" 
                    label="Mobile #"/>
                <apex:inputText value="{!Contact.Email}" 
                    label="{!Contact.FirstName + '’s Email'}"/>
            </apex:pageBlockSection>
            <apex:pageBlockButtons >
                <apex:commandButton action="{!save}" value="Save"/>
            </apex:pageBlockButtons>
        </apex:pageBlock>
    </apex:form>
</apex:page>
```

```
https://MyDomain_login_URL/apex/myPage?id=003D000000Q513R
```

## Related Topics

- Displaying Field Values with Visualforce (atlas.en-us.pages.meta/pages/pages_quick_start_display_field_values.htm)
