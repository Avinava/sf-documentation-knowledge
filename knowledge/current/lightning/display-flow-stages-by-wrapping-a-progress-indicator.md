---
title: "Display Flow Stages by Wrapping a Progress Indicator"
domain: lightning
topic: display-flow-stages-by-wrapping-a-progress-indicator
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:48.434Z
estimatedTokens: 712
keywords: [Display, Flow, Stages, Wrapping, Progress, Indicator, you’re, tracking, runtime, creating, custom, component, wraps, lightning, flow’s]
---

# Display Flow Stages by Wrapping a Progress Indicator

> If you’re tracking stages in your flow, display them at runtime by creating a
                custom component that wraps a progress indicator with the lightning:flow component. Use the progress
                indicator to display the flow’s active stages and current stage, and use the lightning:flow component to display the flow’s
                screens. To pass the flow’s active stages and current stage to the progress
                indicator, use the lightning:flow component's
                        onstatuschange action.

# Display Flow Stages by Wrapping a Progress Indicator

If you’re tracking stages in your flow, display them at runtime by creating a custom component that wraps a progress indicator with the lightning:flow component. Use the progress indicator to display the flow’s active stages and current stage, and use the lightning:flow component to display the flow’s screens. To pass the flow’s active stages and current stage to the progress indicator, use the lightning:flow component's onstatuschange action.

## Example

This c:flowStages\_global component uses lightning:progressindicator to display the flow’s stages and lightning:flow to display the flow.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

This example only applies to flows that have active stages.

![A component that displays a flow's stages above the flow.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Faura%2Fimages%2Fflow_stages_global.png&folder=lightning)

c:flowStages\_global Component

```

```

c:flowStages\_global Design

The design resource includes the flowName attribute, so you can specify which flow to start from Lightning App Builder.

```

```

c:flowStages\_global Style

```

```

c:flowStages\_global Controller

The controller uses the flowName attribute to determine which flow to start.

Each time a new screen loads, the onstatuschange action fires, giving the controller access to a handful of parameters about the flow. The currentStage and activeStages parameters return the labels and names of the relevant stages.

When onstatuschange fires in this component, it calls the controller's statusChange method. That method passes the flow's currentStage and activeStages parameters into the component's attributes. For each item in the activeStages attribute, the method adds a lightning:progressStep component to the component markup.

```

```

#### See Also

-   [*Salesforce Help:* Show Users Progress Through a Flow with Stages](https://help.salesforce.com/articleView?id=flow_build_stages.htm&language=en_US "Salesforce Help: Show Users Progress Through a Flow with
    Stages - HTML (New Window)")

-   [Display Flow Stages with an Aura Component](atlas.en-us.lightning.meta/lightning/components_using_flow_stages.htm "If you’ve added stages to your flow, display them to flow users with an Aura component, such as lightning:progressindicator.")

-   [*Aura Component Reference*: Progress Indicator](https://developer.salesforce.com/docs/component-library/bundle/lightning:progressIndicator/documentation "Aura Component Reference: Progress
    Indicator - HTML (New Window)")

-   [*Component Library*: lightning:flow Component](https://developer.salesforce.com/docs/component-library/bundle/lightning:flow/documentation "Component Library: lightning:flow Component - HTML (New Window)")

## Code Examples

```apex
<aura:component implements="flexipage:availableForAllPageTypes" access="global" >
   <aura:attribute name="currentStage" type="Object"/>
   <aura:attribute name="activeStages" type="Object[]"/>
   <!-- Get flow name from the Lightning App Builder -->
   <aura:attribute name="flowName" type="String"/>

   <aura:handler name="init" value="{!this}" action="{!c.init}"/>
   <article class="slds-card">
      <lightning:progressIndicator aura:id="progressIndicator" 
         currentStep="{!v.currentStage.name}" type="path"/>
        <lightning:flow aura:id="flow" onstatuschange="{!c.statusChange}"/>
   </article>
</aura:component>
```

```
<design:component>
   <design:attribute name="flowName" label="Flow Name"/> 
</design:component>
```

```
.THIS .slds-path__nav { margin-right: 0; }
.THIS .slds-path__item:only-child { border-radius: 15rem; }
```

```
({
   init : function(component, event, helper) {
      var flow = component.find("flow");
      flow.startFlow(component.get("v.flowName"));
   },

   // When each screen loads ... 
   statusChange : function(component, event, helper) {
      // don't do anything if the flow doesn't have active stages
      if (!event.getParam("currentStage") || !event.getParam("activeStages")) {
          return;
      }
      // Pass $Flow.ActiveStages into the activeStages attribute
      // and $Flow.CurrentStage into the currentStage attribute
      component.set("v.currentStage", event.getParam("currentStage"));
      component.set("v.activeStages", event.getParam("activeStages"));
      
      var progressIndicator = component.find("progressIndicator");
      var body = [];
      
      for(let stage of component.get("v.activeStages")) {
         // For each stage in activeStages...
         $A.createComponent(
            "lightning:progressStep",
            {
               // Create a progress step where label is the 
               // stage label and value is the stage name
               "aura:id": "step_" + stage.name,
               "label": stage.label,
               "value": stage.name
            },
            function(newProgressStep, status, errorMessage) {
               //Add the new step to the progress array
               if (status === "SUCCESS") {
               body.push(newProgressStep);
               }
               else if (status === "INCOMPLETE") {
                  // Show offline error
                  console.log("No response from server or client is offline.")
               }
               else if (status === "ERROR") {
                  // Show error message
                  console.log("Error: " + errorMessage);
               }
            }
         );
      }
      progressIndicator.set("v.body", body);
   }
})
```

## Related Topics

- Display Flow Stages with an Aura Component (atlas.en-us.lightning.meta/lightning/components_using_flow_stages.htm)
