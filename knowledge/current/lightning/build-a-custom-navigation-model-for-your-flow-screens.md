---
title: "Build a Custom Navigation Model for Your Flow Screens"
domain: lightning
topic: build-a-custom-navigation-model-for-your-flow-screens
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.199Z
estimatedTokens: 375
keywords: [Build, Custom, Navigation, Model, Flow, Screens, Since, Aura, components, access, screen’s, actions, fully, customize, how]
---

# Build a Custom Navigation Model for Your Flow Screens

> Since Aura components have access to a flow screen’s navigation actions, you
                can fully customize how the user moves between screens. For example, hide the
                default navigation buttons and have the flow move to the next screen when the user
                selects a choice.

# Build a Custom Navigation Model for Your Flow Screens

Since Aura components have access to a flow screen’s navigation actions, you can fully customize how the user moves between screens. For example, hide the default navigation buttons and have the flow move to the next screen when the user selects a choice.

## Example

This component (c:choiceNavigation) displays a script and a choice in the form of buttons.

![A flow screen that has no navigation buttons. Instead, the body of the screen has Yes and No buttons.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Faura%2Fimages%2Fflow_nonav.png&folder=lightning)

****c:choiceNavigation** Component**

```

```

****c:choiceNavigation** Design**

The design resource includes the scriptText attribute, so you can set the script from the flow.

```

```

****c:choiceNavigation** Style**

```

```

****c:choiceNavigation** Controller**

When the user clicks either of the buttons, the JavaScript controller calls navigateFlow(“NEXT”), which is the equivalent of the user clicking **Next**.

```

```

**defaultTokens.tokens**

The script in c:choiceNavigation uses tokens to stay in sync with the Salesforce Lightning Design System styles.

```

```

#### See Also

-   [*Component Library*: lightning:availableForFlowScreens Interface](https://developer.salesforce.com/docs/component-library/bundle/lightning:availableForFlowScreens/documentation "Component Library: lightning:availableForFlowScreens
    Interface - HTML (New Window)")

## Code Examples

```apex
<aura:component implements="lightning:availableForFlowScreens" access="global" >
   <!-- Get the script text from the flow -->    
   <aura:attribute name="scriptText" type="String" required="true" />
   <!-- Pass the value of the selected option back to the flow -->
   <aura:attribute name="value" type="String" />

   <!-- Display the script to guide the agent's call -->
   <div class="script-container">
      <div class="slds-card__header slds-grid slds-p-bottom_small slds-m-bottom_none">
         <div class="slds-media slds-media_center slds-has-flexi-truncate" >
            <div class="slds-media__figure slds-align-top">
               <h2><lightning:icon iconName="utility:quotation_marks"
                  title="Suggested script" /></h2>
            </div>
            <div class="slds-media__body">
               <ui:outputRichText class="script" value="{!v.scriptText}"/>
            </div>
         </div>
      </div>
   </div>
   <!-- Buttons for the agent to click, according to the customer’s response -->
   <div class="slds-p-top_large slds-p-bottom_large">
      <p><lightning:formattedText value="Customer Response" 
         class="slds-text-body_small" /></p>
      <lightning:buttongroup >
         <lightning:button label="Yes" aura:id="Participate_Yes" 
            variant="neutral" onclick="{!c.handleChange}"/>
         <lightning:button label="No" aura:id="Participate_No" 
            variant="neutral" onclick="{!c.handleChange}"/>
     </lightning:buttongroup>
   </div>
</aura:component>
```

```
<design:component>
   <design:attribute name="scriptText" label="Script Text" 
      description="What the agent should say to the customer" />
</design:component>
```

```
.THIS.script-container {
   border: t(borderWidthThick) solid t(colorBorderBrand);
   border-radius: t(borderRadiusMedium);
}

.THIS .script {
   font-size: 1.125rem; /*t(fontSizeTextLarge)*/
   font-weight: t(fontWeightRegular);
   line-height: t(lineHeightHeading);
}
```

```
({
   handleChange : function(component, event, helper) {
      // When an option is selected, navigate to the next screen
      var response = event.getSource().getLocalId();
      component.set("v.value", response);
      var navigate = component.get("v.navigateFlow");
      navigate("NEXT");
   }
})
```

```
<aura:tokens extends="force:base" >
</aura:tokens>
```
