---
title: "Use Built-In Mobile Tools and Features"
domain: mobile-offline
topic: use-built-in-mobile-tools-and-features
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:57.203Z
estimatedTokens: 1056
keywords: [Built-In, Mobile, Tools, Features, write, code, users, devices, configure, environment, mobile-ready]
---

# Use Built-In Mobile Tools and Features

> Before you write code for your users on mobile devices, configure your environment and
    use built-in mobile-ready tools and features.

# Use Built-In Mobile Tools and Features

Before you write code for your users on mobile devices, configure your environment and use built-in mobile-ready tools and features.

To develop Lightning web components that are optimized for mobile, follow these prerequisites and processes.

-   [Set up your development environment](https://developer.salesforce.com/docs/platform/lwc/guide/install-setup-develop.html "HTML (New Window)")

    We recommend setting up the VS Code editor and the Salesforce DX tools for an end-to-end development experience. You’ll also want to set up a local development server and other tools that can help with mobile development.

-   [Install the mobile extensions plug-in for VS Code](https://developer.salesforce.com/docs/platform/lwc/guide/mobile-extensions.html "HTML (New Window)")

    Inspect and preview your components on virtual mobile devices before you deploy them to mobile users.

-   [Install SLDS Linter](https://www.lightningdesignsystem.com/2e1ef8501/p/012d73-slds-linter)

    SLDS Linter is the latest code analysis tool that helps to prepare your components for use in SLDS 2. SLDS Linter analyzes your code against SLDS 2 rules. It offers suggestions on how to improve your code and make it more future-proof. SLDS Linter can also automatically fix your code and apply those suggestions in bulk across your repository.


After you create a Lightning web component:

-   [Validate the component in mobile preview environments](https://developer.salesforce.com/docs/platform/lwc/guide/mobile-extensions-preview-options.html "HTML (New Window)")

    The preceding list of prerequisites prepares your environment for mobile previews, which helps you validate your visual changes and other basic mobile behavior.

-   [Configure your component for Lightning App Builder](https://developer.salesforce.com/docs/platform/lwc/guide/use-config-for-app-builder.html "HTML (New Window)")

    Configuring your component for Lightning App Builder allows an admin or business user to use the component when they create or customize Lightning app pages and record pages. Alternatively, you can [surface your Lightning web component via a custom tab](https://developer.salesforce.com/docs/platform/lwc/guide/use-config-custom-tab.html "HTML (New Window)") instead.

-   [Create a Lightning app page and add the component to your mobile navigation](https://trailhead.salesforce.com/en/modules/lightning_app_builder/units/lightning_app_builder_apphome "HTML (New Window)")

    Enable your components for Lightning App Builder to allow admins to create Lightning pages with your components. Lightning app pages and record pages are supported for mobile experiences, such as the [Salesforce mobile app](https://help.salesforce.com/articleView?id=salesforce_app.htm&language=en_US "HTML (New Window)") and [custom mobile apps](https://developer.salesforce.com/docs/atlas.en-us.mobile_sdk.meta/mobile_sdk/intro.htm "HTML (New Window)"). If you surface your component in a custom tab instead, make it available to the mobile app via [App Manager](https://developer.salesforce.com/docs/platform/lwc/guide/use-config-custom-tab-lex.html "HTML (New Window)") or [Salesforce Navigation](https://help.salesforce.com/articleView?id=salesforce_app_customize_nav_menu.htm&language=en_US "HTML (New Window)") in Setup.


-   **[Validate Your Base Component References](atlas.en-us.mobile_offline.meta/mobile_offline/ux_extensions_base_component_validation.htm)**
    Base components help you develop apps quickly. However, not all base components are designed for mobile environments. SLDS Linter or SLDS Validator for VS Code can help you determine the mobile readiness of the base components you use.
-   **[Use Mobile Validation with Salesforce Lightning Design System](atlas.en-us.mobile_offline.meta/mobile_offline/ux_extensions_slds_validation.htm)**
    SLDS Linter and SLDS Validator check your code for SLDS mobile guidelines adherence as you type. If they find a potential issue, both tools provide a warning with suggested improvements. These warnings apply to HTML and CSS code. SLDS Linter also automatically fixes your code and applies those suggestions in bulk across your repository.

## Related Topics

- Validate Your Base Component References (atlas.en-us.mobile_offline.meta/mobile_offline/ux_extensions_base_component_validation.htm)
- Use Mobile Validation with Salesforce Lightning Design System (atlas.en-us.mobile_offline.meta/mobile_offline/ux_extensions_slds_validation.htm)
