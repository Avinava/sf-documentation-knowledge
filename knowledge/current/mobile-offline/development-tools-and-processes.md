---
title: "Development Tools and Processes"
domain: mobile-offline
topic: development-tools-and-processes
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:56.458Z
estimatedTokens: 1162
keywords: [Development, Tools, Processes, efficient, developer, experience, building, mobile, offline, LWCs]
---

# Development Tools and Processes

> Set up and use your development tools for the most efficient developer experience while
  building mobile and offline LWCs.

# Development Tools and Processes

Set up and use your development tools for the most efficient developer experience while building mobile and offline LWCs.

Developing LWCs and apps for use in Salesforce mobile apps uses all the same developer tools and processes that developing LWCs for desktop use. It also poses special challenges, especially in the areas of testing and debugging. This chapter describes a number of additional tools and processes designed specifically for developing mobile LWCs.

-   **[Understand the Mobile Development Cycle](atlas.en-us.mobile_offline.meta/mobile_offline/dx_understand_the_mobile_development_cycle.htm)**
    Learn the basics of the development cycle for mobile components, including the essential tasks and tools that you need to be productive while building LWCs for use on mobile devices.
-   **[Set Up Your Development Environment](atlas.en-us.mobile_offline.meta/mobile_offline/dx_set_up_dev_environment.htm)**
    Before you can create your first Lightning web component (LWC), or test a LWC in a mobile app, you must set up your development environment for mobile components.
-   **[Preview Lightning Web Components on Mobile](atlas.en-us.mobile_offline.meta/mobile_offline/dx_mobile_previews.htm)**
    When you’re developing Lightning web components, it’s important to inspect your components’ presentation not only on the desktop, but also on mobile devices. To preview your components on virtual mobile devices and see changes as you code, use Local Dev. You can also download and run virtual device builds of the Salesforce mobile app to preview how your components coexist with other components in Salesforce.
-   **[Validate Lightning Web Components for Offline Use](atlas.en-us.mobile_offline.meta/mobile_offline/dx_validate_lwc_offline.htm)**
    Use the Komaci Static Analyzer (or static analyzer for short) during component development to validate your Lightning web components for offline use. Using the static analyzer helps you ensure that code dependencies and data your component depends on can be primed when a network connection is available, making the component and its data available offline when the network has limited or no connectivity.
-   **[Develop Offline-Ready LWCs with the LWC Offline Test Harness](atlas.en-us.mobile_offline.meta/mobile_offline/dx_harness_app.htm)**
    The LWC Offline Test Harness (Test Harness, for short) is a lightweight testing, debugging, and inspection app. It enables developers to debug Lightning web components for use in their LWC Offline-based mobile apps. Use Test Harness to execute Quick Actions on selected SObjects from your Salesforce org, debug component JavaScript, and inspect drafts and draft queue behavior.
-   **[Debug Your Components with Virtual Device Builds](atlas.en-us.mobile_offline.meta/mobile_offline/dx_debug_mobile_components.htm)**
    To debug your components, connect your desktop browsers to the Salesforce mobile app running on your virtual devices. Then use Safari (iOS) or Chrome (Android) developer tools to view and interact with HTML markup, step through JavaScript code, and see console logging and error messages.
-   **[Customize the Offline Experience for the Salesforce Mobile App](atlas.en-us.mobile_offline.meta/mobile_offline/dx_onboard_wizard.htm)**
    Mobile Offline is an advanced runtime environment for Lightning web components. Available only for mobile devices, it replaces the standard Lightning components runtime and augments it with features designed specifically for mobile and offline use.
-   **[Use MCP Tools for Mobile LWC and Offline Development (Beta)](atlas.en-us.mobile_offline.meta/mobile_offline/dx_mobile_mcp_tools.htm)**
    The Mobile Model Context Protocol (MCP) tools, which include the Mobile Offline tools and the Mobile Native Capabilities tools, help developers create Lightning web components that adhere to Mobile Offline design patterns and integrate with device-native features.
-   **[Salesforce Mobile App Generation (Developer Preview)](atlas.en-us.mobile_offline.meta/mobile_offline/dx_mobile_mage.htm)**
    The Mobile App Generation Ecosystem (MAGE) is a suite of pro-code tools designed to automate the creation and editing of Salesforce native mobile applications. By using the Model Context Protocol (MCP), it currently allows developers to generate production-ready iOS and Android project scaffolds directly through a chat interface. This suite of tools bridges the gap between natural language requirements and complex mobile development configurations, specifically handling the Salesforce Mobile SDK and Agentforce Mobile SDK integrations.

## Related Topics

- Understand the Mobile Development Cycle (atlas.en-us.mobile_offline.meta/mobile_offline/dx_understand_the_mobile_development_cycle.htm)
- Set Up Your Development Environment (atlas.en-us.mobile_offline.meta/mobile_offline/dx_set_up_dev_environment.htm)
- Preview Lightning Web Components on Mobile (atlas.en-us.mobile_offline.meta/mobile_offline/dx_mobile_previews.htm)
- Validate Lightning Web Components for Offline Use (atlas.en-us.mobile_offline.meta/mobile_offline/dx_validate_lwc_offline.htm)
- Develop Offline-Ready LWCs with the LWC Offline Test Harness (atlas.en-us.mobile_offline.meta/mobile_offline/dx_harness_app.htm)
- Debug Your Components with Virtual Device Builds (atlas.en-us.mobile_offline.meta/mobile_offline/dx_debug_mobile_components.htm)
- Customize the Offline Experience for the Salesforce Mobile App (atlas.en-us.mobile_offline.meta/mobile_offline/dx_onboard_wizard.htm)
- Use MCP Tools for Mobile LWC and Offline Development (Beta) (atlas.en-us.mobile_offline.meta/mobile_offline/dx_mobile_mcp_tools.htm)
- Salesforce Mobile App Generation (Developer Preview) (atlas.en-us.mobile_offline.meta/mobile_offline/dx_mobile_mage.htm)
