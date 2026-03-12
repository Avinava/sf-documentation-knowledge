---
title: "Package the Connected App for Canvas"
domain: platform-connect
topic: package-the-connected-app-for-canvas
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:27.581Z
estimatedTokens: 656
keywords: [Package, Connected, App, Canvas, created, tested, Previewer, deployed, Heroku, you’re, ready, distribute]
---

# Package the Connected App for Canvas

> After you created the canvas app, tested it in the Canvas App Previewer, and deployed it
  to Heroku, you’re ready to package and distribute it.

# Package the Connected App for Canvas

After you created the canvas app, tested it in the Canvas App Previewer, and deployed it to Heroku, you’re ready to package and distribute it.

Packaging is the first step in making your canvas app available for installation in another org. For more information about packaging a connected app for your canvas integration, see [Use Managed Packages to Develop Your AppExchange Solution](https://developer.salesforce.com/docs/atlas.en-us.260.0.packagingGuide.meta/packagingGuide/managed_packaging_intro.htm "PDF (New Window)").

1.  In Salesforce, from Setup, enter Packaging in the Quick Find box, then select **Package Manager** and click **New**.

    ![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=platform_connect)

    #### Tip

    To package your canvas app for installation in other orgs, you must create a namespace prefix. A namespace prefix can be defined only in a Developer Edition org. For more information, see [Register a Namespace for a First-Generation Managed Package](https://developer.salesforce.com/docs/atlas.en-us.pkg1_dev.meta/pkg1_dev/register_namespace_prefix.htm).

2.  Set the Package Name to Hello World Package and accept the defaults for the other fields.
3.  Select Managed to make the package the managed package for the org.
4.  A prompt appears stating you’re allowed only one managed package. Click **OK**.
5.  Click **Save**.
6.  The package is empty, so click **Add**.
7.  In the Component Type field, select Connected App.
8.  Select the checkbox next to the Hello World app and click **Add To Package**. The Package Detail screen appears. From Setup, enter Packages in the Quick Find box, then select **Packages** to see the new managed package.

Now you’re ready to upload the package you created and get the installation link. Use the installation link to install your canvas app in another org.

#### See Also

-   [Package an External Client App](https://help.salesforce.com/s/articleView?id=xcloud.configure_packageable_external_client_apps.htm&language=en_US "Package an External Client App - HTML (New Window)")

-   [Upload the Canvas Connected App Package](atlas.en-us.platform_connect.meta/platform_connect/quick_start_publish_canvas_app.htm "Now that you packaged the canvas app, you’re ready to upload the package.")

-   [Distributing Your CanvasLifecycleHandler Class](atlas.en-us.platform_connect.meta/platform_connect/canvas_distributing_your_canvaslifecyclehandler.htm "If you package and distribute your canvas app, make sure to include your CanvasLifecycleHandler class in your package.")

## Related Topics

- Upload the Canvas Connected App Package (atlas.en-us.platform_connect.meta/platform_connect/quick_start_publish_canvas_app.htm)
- Distributing Your CanvasLifecycleHandler Class (atlas.en-us.platform_connect.meta/platform_connect/canvas_distributing_your_canvaslifecyclehandler.htm)
