---
title: "Creating Apps"
domain: lightning
topic: creating-apps
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:47.990Z
estimatedTokens: 556
keywords: [Creating, Apps, Components, building, blocks, app, typical, workflow, put, pieces, together, new]
---

# Creating Apps

> Components are the building blocks of an app. This section shows you a typical workflow
  to put the pieces together to create a new app.

# Creating Apps

Components are the building blocks of an app. This section shows you a typical workflow to put the pieces together to create a new app.

First, you should decide whether you’re creating a component for a standalone app or for Salesforce apps, such as Lightning Experience or Salesforce for Android, iOS, and mobile web. Both components can access your Salesforce data, but only a component created for Lightning Experience or Salesforce for Android, iOS, and mobile web can automatically handle Salesforce events that take advantage of record create and edit pages, among other benefits.

The [Quick Start](atlas.en-us.lightning.meta/lightning/qs_intro.htm) walks you through creating components for a standalone app and components for Salesforce for Android, iOS, and mobile web to help you determine which one you need.

-   **[App Overview](atlas.en-us.lightning.meta/lightning/apps_overview.htm)**
    An app is a special top-level component whose markup is in a .app resource.
-   **[Designing App UI](atlas.en-us.lightning.meta/lightning/apps_layout_design.htm)**
    Design your app's UI by including markup in the .app resource. Each part of your UI corresponds to a component, which can in turn contain nested components. Compose components to create a sophisticated app.
-   **[Creating App Templates](atlas.en-us.lightning.meta/lightning/apps_template_overview.htm)**
    An app template bootstraps the loading of the framework and the app. Customize an app’s template by creating a component that extends the default aura:template template.
-   **[Using the AppCache](atlas.en-us.lightning.meta/lightning/appcache.htm)**
    AppCache support is deprecated. Browser vendors have deprecated AppCache, so we followed their lead. Remove the useAppcache attribute in the <aura:application> tag of your standalone apps (.app resources) to avoid cross-browser support issues due to deprecation by browser vendors.
-   **[Distributing Applications and Components](atlas.en-us.lightning.meta/lightning/apps_packaging.htm)**
    As an ISV or Salesforce partner, you can package and distribute applications and components to other Salesforce users and organizations, including those outside your company.

## Related Topics

- Quick Start (atlas.en-us.lightning.meta/lightning/qs_intro.htm)
- App Overview (atlas.en-us.lightning.meta/lightning/apps_overview.htm)
- Designing App UI (atlas.en-us.lightning.meta/lightning/apps_layout_design.htm)
- Creating App Templates (atlas.en-us.lightning.meta/lightning/apps_template_overview.htm)
- Using the AppCache (atlas.en-us.lightning.meta/lightning/appcache.htm)
- Distributing Applications and Components (atlas.en-us.lightning.meta/lightning/apps_packaging.htm)
