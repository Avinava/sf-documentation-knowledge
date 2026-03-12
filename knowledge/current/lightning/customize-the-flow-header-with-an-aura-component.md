---
title: "Customize the Flow Header with an Aura Component"
domain: lightning
topic: customize-the-flow-header-with-an-aura-component
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:48.214Z
estimatedTokens: 483
keywords: [Customize, Flow, Aura, Component, replace, screenHelpText, lightning, availableForFlowScreens]
---

# Customize the Flow Header with an Aura Component

> To replace the flow header with an Aura component, use the screenHelpText parameter from the lightning:availableForFlowScreens
                interface.

# Customize the Flow Header with an Aura Component

To replace the flow header with an Aura component, use the screenHelpText parameter from the lightning:availableForFlowScreens interface.

By default, the flow header includes the title of the flow that's running and a button, where users can access screen-level help.

## Example

Instead of displaying the flow title and the help button, this component (c:flowHeader) displays the company logo and the help button. The help text appears in a tooltip when the user hovers, instead of in a modal when the user clicks.

![A custom flow header](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Faura%2Fimages%2Fflow_customheader.png&folder=lightning)

****c:flowHeader** Component**

Since the component implements lightning:availableForFlowScreens, it has access to the screenHelpText attribute, which contains the screen's help text if it has any.

```

```

#### See Also

-   [Customize the Flow Footer with an Aura Component](atlas.en-us.lightning.meta/lightning/components_config_for_flow_screens_replace_footer.htm "To replace the flow footer with an Aura component, use the parameters that the lightning:availableForFlowScreens interface provides. The availableActions array lists which actions are available for the screen, and the navigateFlow action lets you invoke one of the available actions.")

-   [Dynamically Update a Flow Screen with an Aura Component](atlas.en-us.lightning.meta/lightning/components_config_for_flow_screens_replace_form.htm "To conditionally display a field on your screen, build an Aura component that uses aura:if to check when parts of the component should appear.")

-   [*Component Library*: lightning:availableForFlowScreens Interface](https://developer.salesforce.com/docs/component-library/bundle/lightning:availableForFlowScreens/documentation "Component Library: lightning:availableForFlowScreens
    Interface - HTML (New Window)")

## Code Examples

```apex
<aura:component access="global" implements="lightning:availableForFlowScreens">

   <div class="slds-p-top_medium slds-clearfix">
      <div class="slds-float_left">
         <!-- Display company logo --> 
         <h2><img src="{!$Resource.Logo}" alt="A.W. Computing logo"/></h2>
      </div>
      <div class="slds-float_right" style="position:relative;">
         <aura:if isTrue="{!v.screenHelpText ne null}">
            <!-- If the screen has help text, display an info icon in the header.
                 On hover, display the screen's help text -->
            <lightning:helptext content="{!v.screenHelpText}" />
         </aura:if>
      </div>
   </div>
</aura:component>
```

## Related Topics

- Customize the Flow Footer with an Aura Component (atlas.en-us.lightning.meta/lightning/components_config_for_flow_screens_replace_footer.htm)
- Dynamically Update a Flow Screen with an Aura Component (atlas.en-us.lightning.meta/lightning/components_config_for_flow_screens_replace_form.htm)
