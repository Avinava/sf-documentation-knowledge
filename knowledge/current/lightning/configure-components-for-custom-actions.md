---
title: "Configure Components for Custom Actions"
domain: lightning
topic: configure-components-for-custom-actions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.466Z
estimatedTokens: 914
keywords: [Configure, Components, Custom, Actions, Add, force, lightningQuickAction, lightningQuickActionWithoutHeader, Aura, component, enable, action, Lightning, Experience, Salesforce]
---

# Configure Components for Custom Actions

> Add the force:lightningQuickAction or force:lightningQuickActionWithoutHeader interface to an Aura component to
            enable it to be used as a custom action in Lightning Experience or the Salesforce mobile
            app. You can use components that implement one of these interfaces as object-specific or
            global actions in both Lightning Experience and the Salesforce mobile
        app.

# Configure Components for Custom Actions

Add the force:lightningQuickAction or force:lightningQuickActionWithoutHeader interface to an Aura component to enable it to be used as a custom action in Lightning Experience or the Salesforce mobile app. You can use components that implement one of these interfaces as object-specific or global actions in both Lightning Experience and the Salesforce mobile app.

When used as actions, components that implement the force:lightningQuickAction interface display in a panel with standard action controls, such as a **Cancel** button. These components can display and implement their own controls in the body of the panel, but can’t affect the standard controls. It should nevertheless be prepared to handle events from the standard controls.

If instead you want complete control over the user interface, use the force:lightningQuickActionWithoutHeader interface. Components that implement force:lightningQuickActionWithoutHeader display in a panel without additional controls and are expected to provide a complete user interface for the action.

These interfaces are mutually exclusive. That is, components can implement either the force:lightningQuickAction interface or the force:lightningQuickActionWithoutHeader interface, but not both. This should make sense; a component can’t both present standard user interface elements and *not* present standard user interface elements.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

For your Aura component to work as a custom action, you must set a default value for each component attribute marked as required.

## Example Component

Here’s an example of a component that can be used for a custom action, which you can name whatever you want—perhaps “Quick Add”. (A component and an action that uses it don’t need to have matching names.) This component quickly adds two numbers together.

```

```

The component markup simply presents two input fields, and an **Add** button.

The component’s controller does all the real work.

```

```

Retrieving the two numbers entered by the user is straightforward, though a more robust component would check for valid inputs, and so on. The interesting part of this example is what happens to the numbers and how the custom action resolves.

The results of the add calculation are displayed in a “toast,” which is a status message that appears at the top of the page. The toast is created by firing the force:showToast event. A toast isn’t the only way you could display the results, nor are actions the only use for toasts. It’s just a handy way to show a message at the top of the screen in Lightning Experience or the Salesforce mobile app.

What’s interesting about using a toast here, though, is what happens afterward. The clickAdd controller action fires the force:closeQuickAction event, which dismisses the action panel. But, even though the action panel is closed, the toast still displays. The force:closeQuickAction event is handled by the action panel, which closes. The force:showToast event is handled by the one.app container, so it doesn’t need the panel to work.

#### See Also

-   [Configure Components for Record-Specific Actions](atlas.en-us.lightning.meta/lightning/components_using_lex_s1_config_action_recordid.htm "Add the force:hasRecordId interface to an Aura component to enable the component to be assigned the ID of the current record. The current record ID is useful if the component is used on a Lightning record page, as an object-specific custom action or action override in Lightning Experience or the Salesforce app, and so on.")

## Code Examples

```
<!--quickAdd.cmp-->
<aura:component implements="force:lightningQuickAction">

    <!-- Very simple addition -->

    <lightning:input type="number" name="myNumber" aura:id="num1" label="Number 1"/> +
    <lightning:input type="number" name="myNumber" aura:id="num2" label="Number 2"/>

    <br/>
    <lightning:button label="Add" onclick="{!c.clickAdd}"/>

</aura:component>
```

```
/*quickAddController.js*/
({
    clickAdd: function(component, event, helper) {

        // Get the values from the form
        var n1 = component.find("num1").get("v.value");
        var n2 = component.find("num2").get("v.value");

        // Display the total in a "toast" status message
        var resultsToast = $A.get("e.force:showToast");
        resultsToast.setParams({
            "title": "Quick Add: " + n1 + " + " + n2,
            "message": "The total is: " + (n1 + n2) + "."
        });
        resultsToast.fire();

        // Close the action panel
        var dismissActionPanel = $A.get("e.force:closeQuickAction");
        dismissActionPanel.fire();
    }

})
```

## Related Topics

- Configure Components for Record-Specific Actions (atlas.en-us.lightning.meta/lightning/components_using_lex_s1_config_action_recordid.htm)
