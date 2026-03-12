---
title: "Using Components"
domain: lightning
topic: using-components
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:48.439Z
estimatedTokens: 1235
keywords: [Components, different, contexts, how]
---

# Using Components

> You can use components in many different contexts. This
                section shows you how.

# Using Components

You can use components in many different contexts. This section shows you how.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=lightning)

#### Important

Customizing Aura components isn't supported in Starter and Pro Suite Editions.

-   **[Aura Component Bundle Design Resources](atlas.en-us.lightning.meta/lightning/components_config_for_app_builder_design_files.htm)**
    Use a design resource to control which attributes are exposed to builder tools like the Lightning App Builder, Experience Builder, or Flow Builder. A design resource lives in the same folder as your .cmp resource, and describes the design-time behavior of the Aura component—information that visual tools need to display the component in a page or app.
-   **[Use Aura Components in Lightning Experience and the Salesforce Mobile App](atlas.en-us.lightning.meta/lightning/components_using_lex_s1.htm)**
    Customize and extend Lightning Experience and the Salesforce mobile app with Aura components. Launch components from tabs, apps, and actions.
-   **[Navigate Across Your Apps with Page References](atlas.en-us.lightning.meta/lightning/components_navigation.htm)**
    The pageReference JavaScript object represents a URL for a page. You can use a pageReference instead of parsing or creating a URL directly. This approach helps you avoid broken navigation if Salesforce changes URL formats in the future.
-   **[Get Your Aura Components Ready to Use on Lightning Pages](atlas.en-us.lightning.meta/lightning/components_config_for_app_builder_intro.htm)**
    Custom Aura components don’t work on Lightning pages or in the Lightning App Builder right out of the box. To use a custom component in either of these places, configure the component and its component bundle so that they’re compatible.
-   **[Use Aura Components in Experience Builder](atlas.en-us.lightning.meta/lightning/components_config_for_builder_intro.htm)**
    To use a custom Aura component in Experience Builder, you must configure the component and its component bundle so that they’re compatible.
-   **[Use Aura Components with Flows](atlas.en-us.lightning.meta/lightning/components_using_flow.htm)**
    Customize the look-and-feel and functionality of your flows by adding Lightning components to them. Or wrap a flow in an Aura component to configure the flow at runtime, such as to control how a paused flow is resumed.
-   **[Add Components to Apps](atlas.en-us.lightning.meta/lightning/apps_add_components.htm)**
    When you’re ready to add components to your app, first look at the built-in base components that Salesforce provides with the framework. You can also use these components by extending them or using composition to add them to custom components that you’re building.
-   **[Integrate Your Custom Apps into the Chatter Publisher](atlas.en-us.lightning.meta/lightning/components_integrate_customapps_to_publisher.htm)**
    Use the Chatter Rich Publisher Apps API to integrate your custom apps into the Chatter publisher. The Rich Publisher Apps API enables developers to attach any custom payload to a feed item. Rich Publisher Apps uses Lightning components for composition and rendering. We provide two Lightning interfaces and a Lightning event to assist with integration. You can package your apps and upload them to AppExchange. An Experience Builder site admin page provides a selector for choosing which five of your apps to add to the Chatter publisher for that site.
-   **[Using Background Utility Items](atlas.en-us.lightning.meta/lightning/sforce_api_console_js_lightning_background_utility_item.htm)**
    Implement the lightning:backgroundUtilityItem interface to create a component that fires and responds to events without rendering in the utility bar.
-   **[Use Lightning Components in Visualforce Pages](atlas.en-us.lightning.meta/lightning/components_visualforce.htm)**
    Add Aura components to your Visualforce pages to combine features that use both solutions. Implement new functionality using Aura components and then use it with existing Visualforce pages.
-   **[Use Aura and Lightning Web Components Outside of Salesforce with Lightning Out (Beta)](atlas.en-us.lightning.meta/lightning/lightning_out.htm)**
    To run components outside of Salesforce servers, use Lightning Out, a special type of standalone Aura app. Whether it’s a Node.js app running on Heroku or a department server inside the firewall, add your components as dependencies to a Lightning Out app. Then run the Lightning Out app wherever your users are.
-   **[Lightning Container](atlas.en-us.lightning.meta/lightning/container_overview.htm)**
    Upload an app developed with a third-party framework as a static resource, and host the content in an Aura component using lightning:container. Use lightning:container to use third-party frameworks like AngularJS or React within your Lightning pages.

## Related Topics

- Aura Component Bundle Design Resources (atlas.en-us.lightning.meta/lightning/components_config_for_app_builder_design_files.htm)
- Use Aura Components in Lightning Experience and the Salesforce Mobile App (atlas.en-us.lightning.meta/lightning/components_using_lex_s1.htm)
- Navigate Across Your Apps with Page References (atlas.en-us.lightning.meta/lightning/components_navigation.htm)
- Get Your Aura Components Ready to Use on Lightning Pages (atlas.en-us.lightning.meta/lightning/components_config_for_app_builder_intro.htm)
- Use Aura Components in Experience Builder (atlas.en-us.lightning.meta/lightning/components_config_for_builder_intro.htm)
- Use Aura Components with Flows (atlas.en-us.lightning.meta/lightning/components_using_flow.htm)
- Add Components to Apps (atlas.en-us.lightning.meta/lightning/apps_add_components.htm)
- Integrate Your Custom Apps into the Chatter Publisher (atlas.en-us.lightning.meta/lightning/components_integrate_customapps_to_publisher.htm)
- Using Background Utility Items (atlas.en-us.lightning.meta/lightning/sforce_api_console_js_lightning_background_utility_item.htm)
- Use Lightning Components in Visualforce Pages (atlas.en-us.lightning.meta/lightning/components_visualforce.htm)
