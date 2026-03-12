---
title: "Add a Canvas App to a Page Layout"
domain: platform-connect
topic: add-a-canvas-app-to-a-page-layout
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:27.208Z
estimatedTokens: 924
keywords: [Add, Canvas, App, Layout, Account]
---

# Add a Canvas App to a Page Layout

> Add a canvas app to the page layout for an Account.

# Add a Canvas App to a Page Layout

Add a canvas app to the page layout for an Account.

1.  To create a canvas app, follow the steps in [Create the App](atlas.en-us.platform_connect.meta/platform_connect/quick_start_simple_create_app.htm "Create the Heroku “hello world” app and the associated canvas app in Salesforce.").
2.  From Setup, enter Apps in the Quick Find box, then select **Manage Connected Apps**.
3.  In the Connected Apps list view, click **Edit** next to the app that you created.
4.  In the Canvas Apps Settings section, in the Locations field, select **Layouts and Mobile Cards**.
5.  Click **Save**.
6.  From Setup, click **Object Manager**, then select **Account**.
7.  On the Account object management page, click **Page Layouts**, then click **Account Layout**.

    ![Canvas App in the Page Layout Palette](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fplatform_connect%2Fimages%2Fcanvas_app_page_layout.png&folder=platform_connect)

    The Canvas Apps category is in the palette and the canvas app because you set the location of the canvas app to Layouts and Mobile Cards.

8.  Drag the canvas app element to where you want it to appear in the page layout, and then click **Save**.

    -   If you add the canvas app to any section other than the Mobile Cards section, the canvas app appears in the page layout in the full Salesforce site or in the record detail page in the Salesforce mobile app.
    -   If you add the canvas app to the Mobile Cards section, the canvas app appears only in the mobile card.

9.  To see your changes, click the **Accounts** tab, and then click an account.

You can modify additional properties of the canvas app in the page layout by clicking the wrench icon ![Wrench icon](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fplatform_connect%2Fimages%2Fwrench.jpg&folder=platform_connect).

-   Width (in pixels or %)—The width of the canvas app; defaults to 100%. Changes to the width of the canvas app appear in both the full Salesforce site and the Salesforce mobile app. However, canvas apps are displayed in a single-column layout, so we recommend that you leave the width at 100%.
-   Height (in pixels)—The height of the canvas app; defaults to 200 pixels. Changes to this field appear to the user for canvas apps that appear in both the full Salesforce site and the Salesforce mobile app.
-   Show scrollbars—Whether scrollbars are displayed on the canvas app iFrame. Changes to this field render for canvas apps that appear in the full Salesforce site but not for canvas apps that appear in the Salesforce mobile app.
-   Show label—Whether to display the page layout section label. Changes to this field appear to the user for canvas apps that appear in both the full Salesforce site and in the Salesforce mobile app.

#### See Also

-   [Canvas Apps in a Page Layout or a Mobile Card](atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_using_pl_intro.htm "You can add a canvas app to a page layout for any standard or custom object. For the Canvas Apps category to appear in the palette when you edit a page layout, you must set the canvas app location to Layouts and Mobile Cards when you create the canvas app in the Salesforce application.")

-   [Where Canvas Apps Appear in a Page Layout](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_in_pl_where_can_appear.htm "Depending on where you place the canvas app on the page layout, the canvas app might appear in the full Salesforce site or in the Salesforce mobile app.")

-   [*Salesforce Help*: Find Object Management Settings](https://help.salesforce.com/HTViewHelpDoc?id=extend_click_find_objectmgmt_parent.htm&language=en_US)

## Related Topics

- Create the App (atlas.en-us.platform_connect.meta/platform_connect/quick_start_simple_create_app.htm)
- Canvas Apps in a Page Layout or a Mobile Card (atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_using_pl_intro.htm)
- Where Canvas Apps Appear in a Page Layout (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_in_pl_where_can_appear.htm)
