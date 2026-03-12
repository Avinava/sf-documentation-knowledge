---
title: "Add Aura Components as Custom Tabs in a Lightning Experience App"
domain: lightning
topic: add-aura-components-as-custom-tabs-in-a-lightning-experience-app
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:48.481Z
estimatedTokens: 487
keywords: [Add, Aura, Components, Custom, Tabs, Lightning, Experience, App, users, desktop, Salesforce, mobile, displaying, tab]
---

# Add Aura Components as Custom Tabs in a Lightning Experience App

> Make your Aura components available for Lightning Experience users on desktop and in
        the Salesforce mobile app by displaying them in a custom tab in a Lightning Experience
        app.

# Add Aura Components as Custom Tabs in a Lightning Experience App

Make your Aura components available for Lightning Experience users on desktop and in the Salesforce mobile app by displaying them in a custom tab in a Lightning Experience app.

Before you begin, ensure that your component is configured for custom tab usage. See [Configure Components for Custom Tabs](atlas.en-us.lightning.meta/lightning/components_using_lex_s1_config_tab.htm "Add the force:appHostable interface to an Aura component to allow it to be used as a custom tab in Lightning Experience, the Salesforce mobile app, and Salesforce mobile web.").

Follow these steps to include your component in a Lightning Experience app and make it available to desktop and mobile users in your org.

1.  Create a custom tab for the component.
    1.  From Setup, enter Tabs in the Quick Find box, then select **Tabs**.
    2.  Click **New** in the Lightning Component Tabs related list.
    3.  Select the Lightning component that you want to make available to users.
    4.  Enter a label to display on the tab.
    5.  Select the tab style and click **Next**.
    6.  When prompted to add the tab to profiles, accept the default and click **Save**.

        Your Lightning component is now available from the All Items section of the App Launcher on desktop, and the All Items navigation menu item in the Salesforce mobile app.

2.  Add your Lightning components to a Lightning app’s navigation.
    1.  From Setup, enter Apps in the Quick Find box, then select **App Manager**.
    2.  Edit an existing app or create a new app.
    3.  On the Navigation Items screen, select your Lightning component tab from the Available Items list and move it to the Selected Items list.
    4.  Save the app.
3.  To check your output, navigate to the App Launcher in Lightning Experience on desktop or in the Salesforce mobile app. Select the custom app to see the components that you added.

## Related Topics

- Configure Components for Custom Tabs (atlas.en-us.lightning.meta/lightning/components_using_lex_s1_config_tab.htm)
