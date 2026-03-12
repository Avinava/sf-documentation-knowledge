---
title: "Create and Configure a Lightning Web Component"
domain: mobile-offline
topic: create-and-configure-a-lightning-web-component
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:56.723Z
estimatedTokens: 1925
keywords: [Configure, Lightning, Web, Component, you’ll, basic, named, demoLWCAction, displays, “Hello, World!”, message, screen, Deploy, Salesforce]
---

# Create and Configure a Lightning Web Component

> In this section, you’ll create a basic component named demoLWCAction that displays a “Hello World!” message on the screen.

# Create and Configure a Lightning Web Component

In this section, you’ll create a basic component named demoLWCAction that displays a “Hello World!” message on the screen.

If this is your first Lightning web component ever, you might be tempted to rush through this. Take your time, and make sure you understand what each of these steps accomplishes.

-   **[Create and Deploy a Lightning Web Component to Salesforce](atlas.en-us.mobile_offline.meta/mobile_offline/quickstart_lwc_action_create_lwc.htm#quickstart_lwc_action_create_lwc_and_deploy)**
    Create a simple Lightning web component, configure its metadata, and then deploy the component to your Salesforce org—all from within VS Code.
-   **[Verify the Component Was Deployed to Your Org](atlas.en-us.mobile_offline.meta/mobile_offline/quickstart_lwc_action_create_lwc.htm#quickstart_lwc_action_create_verify)**
    The simplest way to verify that a Lightning web component is available in your org is to view the list of components in Setup in Salesforce.
-   **[Create a Quick Action in Salesforce](atlas.en-us.mobile_offline.meta/mobile_offline/quickstart_lwc_action_create_lwc.htm#quickstart_lwc_action_create_quick_action)**
    To access your Lightning web component, you must assign your component to a new Quick Action, and then assign the Quick Action to a page layout in Salesforce. This configuration makes it visible in the Actions launcher in the mobile app.
-   **[Add the Quick Action to a Page Layout in Salesforce](atlas.en-us.mobile_offline.meta/mobile_offline/quickstart_lwc_action_create_lwc.htm#quickstart_lwc_action_create_add_to_layout)**
    Make a Lightning web component quick action available in the mobile app by adding it to the mobile actions section of a page layout.
-   **[Clear Cached Metadata](atlas.en-us.mobile_offline.meta/mobile_offline/quickstart_lwc_action_create_lwc.htm#quickstart_lwc_action_create_clear_caches)**
    To see changes to a Lightning web component as you develop, cached metadata must be cleared in the mobile app. Clear cached metadata every time new code is deployed to the org to see your changes.
-   **[Run the Quick Action in the Mobile App](atlas.en-us.mobile_offline.meta/mobile_offline/quickstart_lwc_action_create_lwc.htm#quickstart_lwc_action_create_run_action)**
    Let’s finally see that Lightning web component working in the Field Service mobile app.

## Create and Deploy a Lightning Web Component to Salesforce

Create a simple Lightning web component, configure its metadata, and then deploy the component to your Salesforce org—all from within VS Code.

1.  In the VS Code explorer, right-click the force-app/main/default/lwc folder and select **SFDX: Create Lightning Web Component**.
2.  Enter demoLWCAction as the name for the component and press Enter, and then press Enter again to save it to the default location.
3.  In the newly created demoLWCAction.html, replace the default code with the following, and then save the file:

    ```

    ```

4.  In the newly created demoLWCAction.js-meta.xml, replace the default code with the following and save the file:

    ```

    ```

5.  In the VS Code explorer, right-click the force-app/main/default/lwc/demoLWCAction folder and select **SFDX: Deploy Source to Org**.

## Verify the Component Was Deployed to Your Org

The simplest way to verify that a Lightning web component is available in your org is to view the list of components in Setup in Salesforce.

1.  From Setup, enter Lightning Components in the Quick Find Box and select **Lightning Components**.
2.  Scroll through the list of components to see demoLWCAction.

    ![List of Lightning components, with newly deployed component visible in list](/docs/resources/img/en-us/260.0?doc_id=images%2Fqs_sf_lightning_components_list.png&folder=mobile_offline)


## Create a Quick Action in Salesforce

To access your Lightning web component, you must assign your component to a new Quick Action, and then assign the Quick Action to a page layout in Salesforce. This configuration makes it visible in the Actions launcher in the mobile app.

For this example, the action is added to the Service Appointment object.

1.  From Setup, click **Object Manager**.
2.  In the Quick Find box, enter Service Appointment, and click **Service Appointment**.
3.  Click **Buttons, Links, Actions**.
4.  Click **New Action**.

    -   For **Action Type**, select **Lightning Web Component**.
    -   For **Lightning Web Components**, select **c:demoLWCAction**.
    -   For **Label**, enter My New Action. This label is how the action is displayed in the Actions launcher in the Field Service mobile app.

    ![Create a new action with an Action Type of Lightning Web Component, and your new component](/docs/resources/img/en-us/260.0?doc_id=images%2Fqs_sf_object_new_action.png&folder=mobile_offline)

5.  Click **Save**.
6.  Click **Service Appointment** next to **Object Name** to return to the Service Appointment object page.

## Add the Quick Action to a Page Layout in Salesforce

Make a Lightning web component quick action available in the mobile app by adding it to the mobile actions section of a page layout.

1.  From the Service Appointment object page, select **Page Layouts**.
2.  Click the layout assigned to your mobile user.
3.  Select **Mobile & Lightning Actions**.
4.  Drag **My New Action** to the **Salesforce Mobile and Lightning Experience Actions** section.
5.  Click **Save**.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=mobile_offline)

    #### Note

    Mobile quick actions are only added to the mobile layout. You can’t verify that mobile quick actions were successfully added to the correct page layout using the desktop experience.


## Clear Cached Metadata

To see changes to a Lightning web component as you develop, cached metadata must be cleared in the mobile app. Clear cached metadata every time new code is deployed to the org to see your changes.

1.  Launch the iOS Simulator or Android Emulator.
2.  Open the Field Service mobile app.
3.  Select the **Profile** tab in the navigation bar.
4.  Click ![Field Service app settings button with gear icon](/docs/resources/img/en-us/260.0?doc_id=images%2Fqs_app_icon_settings.png&folder=mobile_offline), then **Advanced Settings**, and then **Clear Cached Metadata**.
5.  On iOS devices, click **OK** in the confirmation dialog and then click **OK** again.
6.  On iOS, swipe away the app in the app switcher to close it, then reopen the app.
7.  To close and reopen on Android, in Field Service app settings click **Force Quit**, then reopen the app.

## Run the Quick Action in the Mobile App

Let’s finally see that Lightning web component working in the Field Service mobile app.

1.  Click the **Schedule** tab.
2.  Click any Service Appointment.

    If none are listed, create one and assign it to your mobile user as an example.

3.  Click the **Actions** drawer and drag it up.

    Your action is listed as an option.

    Android ![Actions menu on Android, with new LWC custom action](/docs/resources/img/en-us/260.0?doc_id=images%2Fqs_lwc_actions_menu_android.png&folder=mobile_offline)

    iOS ![Actions menu on iOS, with new LWC custom action](/docs/resources/img/en-us/260.0?doc_id=images%2Fqs_lwc_actions_menu_ios.png&folder=mobile_offline)

4.  Click **My New Action**.

    This opens the screen to your new custom Lightning web component.

    Android ![Custom LWC action on Android](/docs/resources/img/en-us/260.0?doc_id=images%2Fqs_lwc_action_android.png&folder=mobile_offline)

    iOS ![Custom LWC action on iOS](/docs/resources/img/en-us/260.0?doc_id=images%2Fqs_lwc_action_ios.png&folder=mobile_offline)

## Code Examples

```
<template>
    <p>Hello World!</p>
</template>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>56.0</apiVersion>
    <isExposed>true</isExposed>
    <targets>
       <target>lightning__RecordAction</target>
    </targets>
    <targetConfigs>
        <targetConfig targets="lightning__RecordAction">
            <actionType>ScreenAction</actionType>
        </targetConfig>
    </targetConfigs>
</LightningComponentBundle>
```

## Related Topics

- Create and Deploy a Lightning Web Component to Salesforce (atlas.en-us.mobile_offline.meta/mobile_offline/quickstart_lwc_action_create_lwc.htm)
- Verify the Component Was Deployed to Your Org (atlas.en-us.mobile_offline.meta/mobile_offline/quickstart_lwc_action_create_lwc.htm)
- Create a Quick Action in Salesforce (atlas.en-us.mobile_offline.meta/mobile_offline/quickstart_lwc_action_create_lwc.htm)
- Add the Quick Action to a Page Layout in Salesforce (atlas.en-us.mobile_offline.meta/mobile_offline/quickstart_lwc_action_create_lwc.htm)
- Clear Cached Metadata (atlas.en-us.mobile_offline.meta/mobile_offline/quickstart_lwc_action_create_lwc.htm)
- Run the Quick Action in the Mobile App (atlas.en-us.mobile_offline.meta/mobile_offline/quickstart_lwc_action_create_lwc.htm)
