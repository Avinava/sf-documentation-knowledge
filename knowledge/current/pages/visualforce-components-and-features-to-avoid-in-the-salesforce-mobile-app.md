---
title: "Visualforce Components and Features to Avoid in the Salesforce
            Mobile App"
domain: pages
topic: visualforce-components-and-features-to-avoid-in-the-salesforce-mobile-app
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:24.512Z
estimatedTokens: 483
keywords: [Visualforce, Components, Features, Avoid, Salesforce, Mobile, App, core, apex, function, normally, Unfortunately, doesn’t, mean, they’re]
---

# Visualforce Components and Features to Avoid in the Salesforce
            Mobile App

> Most core Visualforce components (those components in the apex namespace) function normally within the Salesforce
        mobile app. Unfortunately, that doesn’t mean they’re optimized for mobile, or that every
        feature works with the app. You can improve the mobile user experience of your Visualforce
        pages by following some straightforward rules.

# Visualforce Components and Features to Avoid in the Salesforce Mobile App

Most core Visualforce components (those components in the apex namespace) function normally within the Salesforce mobile app. Unfortunately, that doesn’t mean they’re optimized for mobile, or that every feature works with the app. You can improve the mobile user experience of your Visualforce pages by following some straightforward rules.

In general, avoid structural components, like <apex:pageBlock\> and child components, and other components that mimic the Salesforce look and feel, such as <apex:pageBlockTable\>. If you must use these components, set them to one column, using <apex:pageBlockSection columns="1"\>, instead of the default of two columns.

Avoid wide, non-wrapping components, especially <apex:detail\>, <apex:enhancedList\>, <apex:listViews\>, and <apex:relatedList\>, which are all unsupported. Keep device width in mind when creating tables with <apex:dataTable\>.

Avoid using <apex:inlineEditSupport\>. Inline editing is a user interface pattern that works well for mouse-based desktop apps, but it’s difficult to use on a touch-based device, especially on phones where the screen is small.

Using <apex:inputField\> is fine for fields that display as a basic input field, like text, email, and phone numbers, but avoid using it for field types that use an input widget, such as date and lookup fields.

Don’t use <apex:scontrol\>. sControls aren’t supported anywhere in the Salesforce mobile app.

PDF rendering, by setting renderAs="PDF" on <apex:page\>, isn’t supported for pages in the Salesforce mobile app.

-   **[Unsupported Visualforce Components](atlas.en-us.pages.meta/pages/vf_dev_best_practices_components_unsupported.htm)**
    Here’s a list of Visualforce components that aren’t supported in the Salesforce mobile app, and shouldn’t be used in Visualforce pages that will be used with the Salesforce mobile app.

## Related Topics

- Unsupported Visualforce Components (atlas.en-us.pages.meta/pages/vf_dev_best_practices_components_unsupported.htm)
