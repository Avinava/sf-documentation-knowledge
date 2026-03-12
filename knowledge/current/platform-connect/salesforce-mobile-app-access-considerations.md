---
title: "Salesforce Mobile App Access Considerations"
domain: platform-connect
topic: salesforce-mobile-app-access-considerations
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:27.380Z
estimatedTokens: 980
keywords: [Salesforce, Mobile, App, Access, Considerations, Keep, mind, modifying, canvas, appears]
---

# Salesforce Mobile App Access Considerations

> Keep these considerations in mind when modifying a canvas app that appears in the
            Salesforce mobile app.

# Salesforce Mobile App Access Considerations

Keep these considerations in mind when modifying a canvas app that appears in the Salesforce mobile app.

By necessity, the Salesforce mobile app layout is different than the full Salesforce site layout that you’re used to. Remember the following when creating a canvas app for use in the Salesforce mobile app.

-   Because canvas apps are designed to display your third-party application inside of Salesforce, the device must have access to your canvas app URL. If your app is only accessible behind a firewall, the mobile device must be behind the firewall, too. If users don’t have access to the canvas URL, they receive an error—possibly a 404 or 500 error.
-   When accessing your canvas app as an action, if the canvas app uses the “What are you working on” header, the header is fixed at the top of the page and your canvas app scroll area falls below the header text box.
-   The canvas app link and description in the feed might display fewer characters than what is displayed in the full Salesforce site.
-   Depending on the device you use, the feed screen can change if the device is rotated. Your canvas app should support rotation if possible. Use the orientation event to handle changes in device orientation.
-   The heights used in the Salesforce mobile app and the full Salesforce site are different. Use the Dimensions object in the signed request to render your actions correctly in the publisher.
-   In the action menu, long action labels might be truncated.
-   The feed layout is different than that of the full Salesforce site. Instead of an app opening in the feed, a page opens that displays the canvas app on the entire screen. To return to the Salesforce mobile app, tap ![The back arrow.](/docs/resources/img/en-us/260.0?doc_id=mobile_help%2Fsfdc_one%2Fimages%2Fsfdc1_back_arrow.png&folder=platform_connect).
-   When you view the action bar or Feed, the default Canvas puzzle icon displays for canvas apps. You can override this default action icon with an image you provide.
-   When a canvas app appears as an option in the navigation menu, the default Canvas puzzle icon is used. You can customize the icon in the connected app settings of your canvas app.
-   Canvas apps aren’t available when the user accesses Salesforce offline.

#### See Also

-   [Canvas in the Salesforce Mobile App](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_in_salesforce1.htm)

-   [Salesforce Mobile App Context Considerations](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_salesforce1_context_considerations.htm "Keep these considerations in mind when you display a canvas app inside of the Salesforce mobile app.")

-   [Salesforce Mobile App Custom Icons](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_salesforce1_icon_considerations.htm "Custom icons help distinguish your app in the Salesforce mobile app. If you don’t customize the icon for your app, you’ll get the default puzzle-piece icon.")

-   [Dimensions](atlas.en-us.platform_connect.meta/platform_connect/dimensions_object.htm)

-   [Handling Orientation Changes in Your Canvas App](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_orientation_code_example.htm)

-   [Alternatives to Cookies for User Tracking](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_iframe_considerations.htm "When creating websites and applications, the HTML <iframe> element lets you display third-party content within the current page window. As modern browsers have increased privacy for end users, the iframe structure is becoming more scrutinized and restricted. Third-party applications exposed as Canvas apps are surfaced in the Salesforce user interface via an iframe. To avoid problems loading your Canvas apps in Salesforce, design applications that don’t rely on cookies, session storage, or local storage to track users.")

## Related Topics

- Canvas in the Salesforce Mobile App (atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_in_salesforce1.htm)
- Salesforce Mobile App Context Considerations (atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_salesforce1_context_considerations.htm)
- Salesforce Mobile App Custom Icons (atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_salesforce1_icon_considerations.htm)
- Dimensions (atlas.en-us.platform_connect.meta/platform_connect/dimensions_object.htm)
- Handling Orientation Changes in Your Canvas App (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_orientation_code_example.htm)
- Alternatives to Cookies for User Tracking (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_iframe_considerations.htm)
