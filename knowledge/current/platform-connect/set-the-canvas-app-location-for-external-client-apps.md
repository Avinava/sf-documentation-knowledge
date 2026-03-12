---
title: "Set the Canvas App Location for External Client Apps"
domain: platform-connect
topic: set-the-canvas-app-location-for-external-client-apps
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:27.614Z
estimatedTokens: 829
keywords: [Canvas, App, Location, External, Client, Apps, Specify, display, user, Salesforce, via]
---

# Set the Canvas App Location for External Client Apps

> Specify where your canvas app can display to a user in Salesforce via an external client
  app.

# Set the Canvas App Location for External Client Apps

Specify where your canvas app can display to a user in Salesforce via an external client app.

1.  In Lightning Experience, from Setup, search for External Client App in the Quick Find box, then select **External Client App Manager**.
2.  In the related list, click the dropdown arrow for the app you just created and then click **Edit Settings.**
3.  In the Canvas Apps Settings section, in the Locations field, select where the canvas app can appear to the user. For this example, select **Lightning Component**.

    -   **Chatter Feed**—The canvas app appears in the feed. If this option is selected, you must create a CanvasPost feed item and ensure that the current user has access to the canvas app.
    -   **Layouts and Mobile Cards**—The canvas app can appear on a page layout or a mobile card. If this option is selected, you choose where the canvas app appears by adding it to the page layout.
    -   **Lightning Component**—The canvas app appears on your custom Lightning component [using the force:canvasApp component](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_aura_code_example.htm "The following examples show how to reference a <force:canvasApp> component using applicationName, developerName, and namespacePrefix.").
    -   **Mobile Nav**—The canvas app is accessible from the mobile app navigation menu.
    -   **Publisher**—The canvas app appears in the Chatter publisher and action bar. If this option is selected, you must also create a canvas custom action and add it to the global publisher layout or to an object’s page layout.
    -   **Visualforce Page**—The canvas app can appear on a Visualforce page . If you add an <apex:canvasApp> component to expose a canvas app on a Visualforce page, be sure to select this location for the canvas app; otherwise, you’ll receive an error.

4.  Click **Save**.
5.  Embed the canvas app in a Lightning component.

    1.  [Open the Developer Console.](https://help.salesforce.com/s/articleView?id=platform.code_dev_console_opening.htm&language=en_US)
    2.  Click **File** | **New** | **Lightning Component**.
    3.  Enter myCanvasApp in the Name field.

    1.  Copy and paste this code.

        ```

        ```

        To verify the developerName value of your canvas app, in Setup, go to **External Client App Manager** and click on your app name. Then click the **Settings** tab and verify the **API Name**.

    2.  In the controller file, copy and paste this code.

        ```

        ```

        Save your changes.

6.  Display the Lightning component on a record.
    1.  Navigate to the record page you want to customize, for example, a contact record page.
    2.  Click the gear icon and select **Edit Page.**
    3.  Find the myCanvasApp custom component and drag it to where you want it on the Lightning page. Save your changes.
    4.  Activate the page. Click **Assign as Org Default**, and then click **Next**.

Your canvas app is now displayed on contact record pages.

#### See Also

-   [Lightning Component Code Examples](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_aura_code_example.htm "The following examples show how to reference a <force:canvasApp> component using applicationName, developerName, and namespacePrefix.")

## Code Examples

```apex
<!-- myCanvasApp.cmp -->
<aura:component implements="flexipage:availableForRecordHome,force:hasRecordId" access="global" >
    <aura:attribute name="canvasParameters" type="string" />
    <aura:handler name="init" value="{!this}" action="{!c.doInit}"/>

    <aura:if isTrue="{!v.canvasParameters}">
        <force:canvasApp developerName="Hello_World" 
            height="400px" width="750px"
            parameters="{!v.canvasParameters}"/>
    </aura:if>
</aura:component>
```

```
({
    doInit : function(cmp, evt, helper) {
        var recordId = cmp.get("v.recordId");
        cmp.set("v.canvasParameters", JSON.stringify({
            recordId: recordId
        }));
    }
})
```

## Related Topics

- using the force:canvasApp
        component (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_aura_code_example.htm)
- Lightning Component Code Examples (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_aura_code_example.htm)
