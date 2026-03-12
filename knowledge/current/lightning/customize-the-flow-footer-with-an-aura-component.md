---
title: "Customize the Flow Footer with an Aura Component"
domain: lightning
topic: customize-the-flow-footer-with-an-aura-component
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:48.206Z
estimatedTokens: 1020
keywords: [Customize, Flow, Footer, Aura, Component, replace, lightning, availableForFlowScreens, availableActions, array, actions, screen, navigateFlow, action, lets]
---

# Customize the Flow Footer with an Aura Component

> To replace the flow footer with an Aura component, use the parameters that the
         lightning:availableForFlowScreens interface provides.
      The availableActions array lists which actions are
      available for the screen, and the navigateFlow action
      lets you invoke one of the available actions.

# Customize the Flow Footer with an Aura Component

To replace the flow footer with an Aura component, use the parameters that the lightning:availableForFlowScreens interface provides. The availableActions array lists which actions are available for the screen, and the navigateFlow action lets you invoke one of the available actions.

By default, the flow footer displays the available actions as standard buttons. Next and Finish use the brand variant style, and Previous and Pause use the neutral variant. Also, Pause floats left, while the rest of the buttons float right.

## Example

This component (c:flowFooter) customizes the default flow footer in two ways.

-   It swaps the Pause and Previous buttons, so that Previous floats to the left and Pause floats to the right with Next or Finish.
-   It changes the label for the Finish button to Done.

![A custom flow footer](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Faura%2Fimages%2Fflow_customfooter.png&folder=lightning)

****c:flowFooter** Component**

Since the component implements lightning:availableForFlowScreens, it has access to the availableActions attribute, which contains the valid actions for the screen. The declared attributes, like canPause and canBack, determine which buttons to display. Those attributes are set by the JavaScript controller when the component initializes.

```

```

****c:flowFooter** Controller**

The init function loops through the screen's available actions and determines which buttons the component should show. When the user clicks one of the buttons in the footer, the onButtonPressed function calls the navigateFlow action to perform that action.

```

```

## Control Screen Navigation from a Child Component

If you're using a child component to handle the screen's navigation, pass the availableActions attribute down from the parent component – the one that implements lightning:availableForFlowScreens. You can pass the available actions by setting the child component's attributes, but you can’t pass the action. Instead, use a custom event to send the selected action up to the parent component.

## Example

****c:navigateFlow** Event**

Create an event with an action attribute, so that you can pass the selected action into the event.

```

```

****c:flowFooter** Component**

In your component, before the handler:

-   Define an attribute to pass the screen's available actions from the parent component
-   Register an event to pass the navigateFlow action to the parent component

```

```

****c:flowFooter** Controller**

Since navigateFlow is only available in the parent component, the onButtonPressed function fails. Update the onButtonPressed function so that it fires navigateFlowEvent instead.

```

```

****c:flowParent** Component**

In the parent component's markup, pass availableActions into the child component's availableActions attribute and the handleNavigate function into the child component's navigateFlowEvent event.

```

```

****c:flowParent** Controller**

When navigateFlowEvent fires in the child component, the handleNavigate function calls the parent component’s navigateFlow action, using the action selected in the child component.

```

```

#### See Also

-   [Customize the Flow Header with an Aura Component](atlas.en-us.lightning.meta/lightning/components_config_for_flow_screens_replace_header.htm "To replace the flow header with an Aura component, use the screenHelpText parameter from the lightning:availableForFlowScreens interface.")

-   [Dynamically Update a Flow Screen with an Aura Component](atlas.en-us.lightning.meta/lightning/components_config_for_flow_screens_replace_form.htm "To conditionally display a field on your screen, build an Aura component that uses aura:if to check when parts of the component should appear.")

-   [*Component Library*: lightning:availableForFlowScreens Interface](https://developer.salesforce.com/docs/component-library/bundle/lightning:availableForFlowScreens/documentation "Component Library: lightning:availableForFlowScreens
    Interface - HTML (New Window)")

## Code Examples

```apex
<aura:component access="global" implements="lightning:availableForFlowScreens">
        
   <!-- Determine which actions are available -->
   <aura:attribute name="canPause" type="Boolean" />
   <aura:attribute name="canBack" type="Boolean" />
   <aura:attribute name="canNext" type="Boolean" />
   <aura:attribute name="canFinish" type="Boolean" />
   <aura:handler name="init" value="{!this}" action="{!c.init}" />
        
   <div aura:id="actionButtonBar" class="slds-clearfix slds-p-top_medium">
      <!-- If Previous is available, display to the left -->
      <div class="slds-float_left">
         <aura:if isTrue="{!v.canBack}">
            <lightning:button aura:id="BACK" label="Previous"
               variant="neutral" onclick="{!c.onButtonPressed}" />
         </aura:if>
      </div>
      <div class="slds-float_right">
         <!-- If Pause, Next, or Finish are available, display to the right -->
         <aura:if isTrue="{!v.canPause}">
            <lightning:button aura:id="PAUSE" label="Pause"
               variant="neutral" onclick="{!c.onButtonPressed}" />
         </aura:if>
         <aura:if isTrue="{!v.canNext}">
            <lightning:button aura:id="NEXT" label="Next" 
               variant="brand" onclick="{!c.onButtonPressed}" />
         </aura:if>
         <aura:if isTrue="{!v.canFinish}">
            <lightning:button aura:id="FINISH" label="Done"
               variant="brand" onclick="{!c.onButtonPressed}" />
         </aura:if>
      </div>
   </div>
</aura:component>
```

```
({
   init : function(cmp, event, helper) {
      // Figure out which buttons to display
      var availableActions = cmp.get('v.availableActions');
      for (var i = 0; i < availableActions.length; i++) {
         if (availableActions[i] == "PAUSE") {
            cmp.set("v.canPause", true);
         } else if (availableActions[i] == "BACK") {
            cmp.set("v.canBack", true);
         } else if (availableActions[i] == "NEXT") {
            cmp.set("v.canNext", true);
         } else if (availableActions[i] == "FINISH") {
            cmp.set("v.canFinish", true);
         }
      }
   },
        
   onButtonPressed: function(cmp, event, helper) {
      // Figure out which action was called
      var actionClicked = event.getSource().getLocalId();
      // Fire that action
      var navigate = cmp.get('v.navigateFlow');
      navigate(actionClicked);
   }
})
```

```
<aura:event type="APPLICATION" >
   <aura:attribute name="action" type="String"/>
</aura:event>
```

```
<aura:attribute name="availableActions" type="String[]" />
<aura:registerEvent name="navigateFlowEvent" type="c:navigateFlow"/>
```

```
onButtonPressed: function(cmp, event, helper) {
   // Figure out which action was called
   var actionClicked = event.getSource().getLocalId();

   // Call that action
   var navigate = cmp.getEvent("navigateFlowEvent");
   navigate.setParam("action", actionClicked);
   navigate.fire();
}
```

## Related Topics

- Customize the Flow Header with an Aura Component (atlas.en-us.lightning.meta/lightning/components_config_for_flow_screens_replace_header.htm)
- Dynamically Update a Flow Screen with an Aura Component (atlas.en-us.lightning.meta/lightning/components_config_for_flow_screens_replace_form.htm)
