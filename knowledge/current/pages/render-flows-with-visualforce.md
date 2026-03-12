---
title: "Render Flows with Visualforce"
domain: pages
topic: render-flows-with-visualforce
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:23.622Z
estimatedTokens: 1131
keywords: [Render, Flows, Visualforce, standard, user, running, flow, can’t, customized, Builder, However, once, embed, Apex, code]
---

# Render Flows with Visualforce

> The standard user interface for running a flow can’t be customized by using 
  Flow Builder. However, once you embed a flow in a Visualforce page, you can use Apex code 
   and Visualforce markup to configure the flow at run time—such as to pass values between 
   the Visualforce page and the flow or to customize the look and feel of the flow at run time.

# Render Flows with Visualforce

The standard user interface for running a flow can’t be customized by using Flow Builder. However, once you embed a flow in a Visualforce page, you can use Apex code and Visualforce markup to configure the flow at run time—such as to pass values between the Visualforce page and the flow or to customize the look and feel of the flow at run time.

A flow is an application that collects, updates, edits, and creates Salesforce information.

The following topics demonstrate how to embed and configure flows in a Visualforce page.

-   **[Embed Flows in Visualforce Pages](atlas.en-us.pages.meta/pages/pages_flows_adding.htm)**
    To customize a flow’s look and feel or enhance its functionality, embed it in a Visualforce page. If your org has flows enabled for sites and portals, use the Visualforce page to deliver the flow to your Salesforce site, portal, or Experience Cloud site.
-   **[An Advanced Example of Using <flow:interview>](atlas.en-us.pages.meta/pages/pages_flows_advanced.htm)**
    The <flow:interview\> component is designed to make it easy to develop complex Visualforce interactions. You can access additional features in your flow by creating a custom controller. With custom controllers, you can build a page with multiple components that can interact with each other. Any flow within your organization can be individually referenced by its own Apex type, and the variables in the flow can be accessed as member variables.
-   **[Set Flow Variable Values from a Visualforce Page](atlas.en-us.pages.meta/pages/pages_flows_setting_values.htm)**
    After you embed your flow in a Visualforce page, set the initial values of variables, record variables, collection variables, and record collection variables through the <apex:param\> component.
-   **[Get Flow Variable Values to a Visualforce Page](atlas.en-us.pages.meta/pages/pages_flows_getting_values.htm)**
    Flow variable values can be displayed in a Visualforce page. Once you’ve embedded your flow in a Visualforce page, you can use Visualforce markup to get values for variables or record variables. To display values for a collection variable or a record collection variable, you can use Visualforce markup to get the individual values contained in the collection.
-   **[Control Whether Users Can Pause a Flow from a Visualforce Page](atlas.en-us.pages.meta/pages/pages_flows_pause.htm)**
    After you embed a flow in a Visualforce page with the <flow:interview\> component, consider whether you want to let users pause flows from that page. Set the allowShowPause attribute to false to prevent users from pausing.
-   **[Customize How Users Resume Paused Flow Interviews](atlas.en-us.pages.meta/pages/pages_flows_pausedid.htm)**
    By default, users can resume their paused interviews from the Paused Interviews component on their home page. If you want to customize how and where users can resume their interviews, use the pausedInterviewId attribute on the <flow:interview\> component.
-   **[Configure the finishLocation Attribute in a Flow Attribute in a Flow](atlas.en-us.pages.meta/pages/pages_flows_finishlocation.htm)**
    If finishLocation isn’t specified, users who click **Finish** start a new interview and see the first screen of the flow. You can shape what happens when a user clicks **Finish** on the final screen by using the URLFOR function, the $Page variable, or a controller.
-   **[Customize a Flow’s User Interface](atlas.en-us.pages.meta/pages/pages_flows_customize_runtime_ui.htm)**
    After you’ve embedded a flow in a Visualforce page, you can customize what the flow looks like at run time by applying custom styles using CSS. Using a combination of flow attributes and CSS classes, you can customize the individual parts of a flow, such as the button location, button style, background, and the look and feel of the screen labels.
-   **[Render Lightning Runtime for Flows in a Visualforce Page](atlas.en-us.pages.meta/pages/pages_flows_lightningruntime.htm)**
    By default, when you embed a flow in a Visualforce page, the flow renders in Classic runtime. Like its name suggests, Classic runtime looks and feels like regular Visualforce pages and the Salesforce Classic desktop experience. To render a flow in Lightning runtime, add the lightning:flow Aura component to your Visualforce page.

#### See Also

-   [*Salesforce Help*: Flow Builder](https://help.salesforce.com/articleView?id=flow.htm&language=en_US "Salesforce Help: Flow Builder - html (New Window)")

## Related Topics

- Embed Flows in Visualforce Pages (atlas.en-us.pages.meta/pages/pages_flows_adding.htm)
- An Advanced Example of Using <flow:interview> (atlas.en-us.pages.meta/pages/pages_flows_advanced.htm)
- Set Flow Variable Values from a Visualforce Page (atlas.en-us.pages.meta/pages/pages_flows_setting_values.htm)
- Get Flow Variable Values to a Visualforce Page (atlas.en-us.pages.meta/pages/pages_flows_getting_values.htm)
- Control Whether Users Can Pause a Flow from a Visualforce Page (atlas.en-us.pages.meta/pages/pages_flows_pause.htm)
- Customize How Users Resume Paused Flow Interviews (atlas.en-us.pages.meta/pages/pages_flows_pausedid.htm)
- Configure the finishLocation Attribute in a Flow Attribute in a Flow (atlas.en-us.pages.meta/pages/pages_flows_finishlocation.htm)
- Customize a Flow’s User Interface (atlas.en-us.pages.meta/pages/pages_flows_customize_runtime_ui.htm)
- Render Lightning Runtime for Flows in a Visualforce Page (atlas.en-us.pages.meta/pages/pages_flows_lightningruntime.htm)
