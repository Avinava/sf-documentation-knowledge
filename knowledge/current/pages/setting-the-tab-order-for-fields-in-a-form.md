---
title: "Setting the Tab Order for Fields in a Form"
domain: pages
topic: setting-the-tab-order-for-fields-in-a-form
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:23.688Z
estimatedTokens: 710
keywords: [Setting, Tab, Order, Form, Visualforce, forms, “natural, order”, tabbing, input, left-to-right, top-to-bottom, efficient, accessible, arrangement]
---

# Setting the Tab Order for Fields in a Form

> Visualforce forms have a
        “natural order” for tabbing through the input fields: left-to-right, top-to-bottom. For some
        forms, this might not be the most efficient or accessible arrangement. You can use the
            tabIndex and tabOrderHint attributes on input and other components in your page to change
        the tab order to anything you’d like.

# Setting the Tab Order for Fields in a Form

Visualforce forms have a “natural order” for tabbing through the input fields: left-to-right, top-to-bottom. For some forms, this might not be the most efficient or accessible arrangement. You can use the tabIndex and tabOrderHint attributes on input and other components in your page to change the tab order to anything you’d like.

Here is a simple example that uses the tabOrderHint attribute to control the tab order.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

Remember, for this page to display account data, the ID of a valid account record must be specified as a query parameter in the URL for the page. For example:

```

```

[Displaying Field Values with Visualforce](atlas.en-us.pages.meta/pages/pages_quick_start_display_field_values.htm) has more information about retrieving the ID of a record.

Notice that when you display this page and press TAB, the active field changes in the reverse order than you would normally expect.

## Using tabIndex and tabOrderHint

The tabOrderHint attribute is used as a hint when calculating the value to set for the tabindex value of the rendered HTML element or elements. It’s used to indicate the *relative* order in which the field is selected compared to other page components. This value must be an integer between 1 and 3276, or an expression which evaluates to an integer value in the same range. The tab order begins with component 1 being the first component selected when a user presses TAB.

The tabIndex attribute is used to directly set the tabindex value of the rendered HTML element. It’s an *absolute* index setting the order in which the field is selected, compared to other page components. This value must be an integer between 0 and 32767, or an expression which evaluates to an integer value in the same range. The tab order begins with component 0 being the first component selected when a user presses TAB.

The tabOrderHint attribute is available on only the <apex:inputField\> component. The tabIndex attribute can be set on the following Visualforce components.

-   <apex:commandButton\>
-   <apex:commandLink\>
-   <apex:inputCheckbox\>
-   <apex:inputFile\>
-   <apex:inputSecret\>
-   <apex:inputText\>
-   <apex:inputTextarea\>
-   <apex:outputLabel\>
-   <apex:outputLink\>
-   <apex:selectCheckboxes\>
-   <apex:selectList\>
-   <apex:selectRadio\>

When mixing <apex:inputField\> with components that use the tabIndex attribute to set the tab order, you can multiply the tabOrderHint by 10 to get the approximate equivalent value of the tabIndex for that field. Use this to manually calculate equivalent values to set the appropriate attribute on each of the components in such a way as to set the desired tab order for all elements on the page.

## Code Examples

```
<apex:page standardController="Account">
    <apex:form>
    <apex:pageBlock title="Edit Account: {!Account.Name}">
        <apex:pageBlockSection title="Account Details" columns="1">
            <apex:inputField value="{!Account.Name}" tabOrderHint="4"/>
            <apex:inputField value="{!Account.Website}" tabOrderHint="3"/>
            <apex:inputField value="{!Account.Industry}" tabOrderHint="2"/>
            <apex:inputField value="{!Account.AnnualRevenue}" tabOrderHint="1"/>
        </apex:pageBlockSection>
    </apex:pageBlock>
    </apex:form>
</apex:page>
```

```
https://MyDomain_login_URL/apex/myPage?id=001x000xxx3Jsxb
```

## Related Topics

- Displaying Field Values with Visualforce (atlas.en-us.pages.meta/pages/pages_quick_start_display_field_values.htm)
