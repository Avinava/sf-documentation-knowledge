---
title: "Salesforce Mobile App Custom Icons"
domain: platform-connect
topic: salesforce-mobile-app-custom-icons
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:27.386Z
estimatedTokens: 575
keywords: [Salesforce, Mobile, App, Custom, Icons, help, distinguish, don’t, customize, icon, you’ll, puzzle-piece]
---

# Salesforce Mobile App Custom Icons

> Custom icons help distinguish your app in the Salesforce mobile app. If you
        don’t customize the icon for your app, you’ll get the default puzzle-piece
        icon.

# Salesforce Mobile App Custom Icons

Custom icons help distinguish your app in the Salesforce mobile app. If you don’t customize the icon for your app, you’ll get the default puzzle-piece icon.

You can customize the icon that is used in the Salesforce navigation menu. You set this icon in the Icon URL entry in the Basic Information section of the connected app settings for your canvas app. From Setup, enter Apps in the Quick Find box, then select **Apps** and click **Edit** for your connected app. The icon URL must be a secure HTTPS URL that points to an icon image file. The image file must be in the GIF, JPG, or PNG file format. For the Salesforce navigation menu, the icon cannot be larger than 60 pixels high by 60 pixels wide.

The custom icon that is used in the Salesforce navigation menu is also used in the Chatter tab and the Canvas App Previewer. If your canvas app will be shown in the navigation menu, we recommend that you use a 60x60 pixel size icon and let Salesforce automatically resize the icon to the smaller size that is needed for the Chatter tab and the Canvas App Previewer.

You can also customize the icon that is used in the Salesforce action bar and action menu for a canvas app. The action bar uses the custom icon set for the action that accesses the canvas app, not the custom icon that is associated with the connected app. You set the action icons by uploading a static resource file for your custom icon and then using this static resource as the icon for the global action. The static resource icon file should be in the PNG format, with a size of 120 pixels high by 120 pixels wide. See “Custom Icon Guidelines and Best Practices” in the [Salesforce Mobile App Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.salesforce1.meta/salesforce1/salesforce1_guide_introduction.htm "HTML (New Window)") for more guidelines on custom action icons.

#### See Also

-   [Canvas in the Salesforce Mobile App](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_in_salesforce1.htm)

-   [Salesforce Mobile App Context Considerations](atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_salesforce1_context_considerations.htm "Keep these considerations in mind when you display a canvas app inside of the Salesforce mobile app.")

## Related Topics

- Canvas in the Salesforce Mobile App (atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_in_salesforce1.htm)
- Salesforce Mobile App Context Considerations (atlas.en-us.platform_connect.meta/platform_connect/canvas_apps_salesforce1_context_considerations.htm)
