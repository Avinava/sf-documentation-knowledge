---
title: "Display Flow Stages with a Progress Indicator on the Flow
                Screen"
domain: lightning
topic: display-flow-stages-with-a-progress-indicator-on-the-flow-screen
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:48.220Z
estimatedTokens: 988
keywords: [Display, Flow, Stages, Progress, Indicator, Screen, track, runtime, adding, custom, component, flow’s, screens, displays, active]
---

# Display Flow Stages with a Progress Indicator on the Flow
                Screen

> If you track stages in your flow, display them at runtime by adding a custom
                component to the flow’s screens. Create a progress indicator component that displays
                the flow’s active stages and current stage, and make sure that it’s available for
                flow screens. When you add the component to each flow screen, pass the $Flow.ActiveStages and $Flow.CurrentStage global variables into the
                component’s attributes.

# Display Flow Stages with a Progress Indicator on the Flow Screen

If you track stages in your flow, display them at runtime by adding a custom component to the flow’s screens. Create a progress indicator component that displays the flow’s active stages and current stage, and make sure that it’s available for flow screens. When you add the component to each flow screen, pass the $Flow.ActiveStages and $Flow.CurrentStage global variables into the component’s attributes.

1.  Create the custom flowStages component.

    The flowStages component uses lightning:progressindicator to display the flow’s stages.

    ```

    ```

2.  Create the design resource for the flowStages component.

    The design resource includes the stages and currentStage attributes so that they’re available in Flow Builder.

    ```

    ```

3.  Create the CSS style resource for the flowStages component.

    ```

    ```

4.  Create the client-side controller for the flowStages component.

    For each item in the stages attribute, the init method adds a lightning:progressStep component to the flowStages component markup.

    ```

    ```

5.  Create a flow in Flow Builder.
    1.  From Setup, in the Quick Find box, enter Flows, and then select **Flows**. Then click **New Flow**.
    2.  Select **Start From Scratch**, and then click **Next**.
    3.  Select **Screen Flow** as the flow type, and then click **Create**.
6.  Configure the stages in your flow.
    1.  Click the Manager panel icon ![Manage panel icon](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Faura%2Fimages%2Ftoggle_panel_left_60.png&folder=lightning), and then click **New Resource**. Then select **Stage**.
    2.  Enter a label and order, and then specify whether the stage is active by default.

        If you select **Active by default**, the stage is added to {!$Flow.ActiveStages} when a flow interview starts.

7.  Configure the screen elements in your flow.
    1.  Click the Add Element icon ![Add Element icon](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Faura%2Fimages%2Fflow_autolayout_addnode_icon.png&folder=lightning) on the canvas.
    2.  Select the **Screen** interaction element.
    3.  To the screen, add the custom **flowStages** component. For Current Stage, enter {!$Flow.CurrentStage}. For Stages, enter {!$Flow.ActiveStages}. In the Advanced section, select **Manually Assign Variables**.
8.  Configure the assignment elements in your flow.
    1.  Between each screen element, click the Add Element icon ![Add Element icon](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Faura%2Fimages%2Fflow_autolayout_addnode_icon.png&folder=lightning) on the canvas.
    2.  Select the **Assignment** logic element.
    3.  Set the Current Stage variable equal to the following stage in the flow.

        For example, for the assignment element between the screens that contain the first and second stages, set the Current Stage equal to name\_of\_second\_stage.

9.  Save your flow.

![An example flow in Flow Builder that uses the custom flowStages component.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Faura%2Fimages%2Faura_flow_stages.png&folder=lightning)

#### See Also

-   [*Salesforce Help:* Show Users Progress Through a Flow with Stages](https://help.salesforce.com/articleView?id=flow_build_stages.htm&language=en_US "Salesforce Help: Show Users Progress Through a Flow with
    Stages - HTML (New Window)")

-   [Display Flow Stages with an Aura Component](atlas.en-us.lightning.meta/lightning/components_using_flow_stages.htm "If you’ve added stages to your flow, display them to flow users with an Aura component, such as lightning:progressindicator.")

-   [*Component Library*: lightning:availableForFlowScreens Interface](https://developer.salesforce.com/docs/component-library/bundle/lightning:availableForFlowScreens/documentation "Component Library: lightning:availableForFlowScreens
    Interface - HTML (New Window)")

## Code Examples

```
<aura:component implements="lightning:availableForFlowScreens">
    <!-- Attributes that store $Flow.ActiveStages and $Flow.CurrentStage -->
    <aura:attribute name="stages" type="String[]"/>
    <aura:attribute name="currentStage" type="String"/>
    <aura:handler name="init" value="{!this}" action="{!c.init}"/>
    <a href="#"/>
    <lightning:progressIndicator 
        aura:id="progressIndicator" 
        currentStep="{!v.currentStage}" 
        type="path"/>
</aura:component>
```

```
<design:component>
    <design:attribute name="stages" label="Stages" description="what stages are active"/>
    <design:attribute name="currentStage" label="Current Stage" description="the current stage"/>
</design:component>
```

```
.THIS .slds-path__nav { margin-right: 0; }
.THIS .slds-path__item:only-child { border-radius: 15rem; }
```

```
({
   init : function(component, event, helper) {
      var progressIndicator = component.find('progressIndicator');
      for (let step of component.get('v.stages')) {
         $A.createComponent(
            "lightning:progressStep",
            {
               "aura:id": "step_" + step,
               "label": step,
               "value": step
             },
             function(newProgressStep, status, errorMessage){
                // Add the new step to the progress array
                if (status === "SUCCESS") {
                   var body = progressIndicator.get("v.body");
                   body.push(newProgressStep);
                   progressIndicator.set("v.body", body);
                 }
                 else if (status === "INCOMPLETE") {
                    // Show offline error
                    console.log("No response from server, or client is offline.")
                  }
                  else if (status === "ERROR") {
                     // Show error message
                     console.log("Error: " + errorMessage);
                  }
              }
           );
       }
   }
})
```

## Related Topics

- Display Flow Stages with an Aura Component (atlas.en-us.lightning.meta/lightning/components_using_flow_stages.htm)
