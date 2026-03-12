---
title: "Configure External Client App Access"
domain: platform-connect
topic: configure-external-client-app-access
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:27.541Z
estimatedTokens: 922
keywords: [Configure, External, Client, App, Access, canvas, policies, profiles, corresponding]
---

# Configure External Client App Access

> To configure access to your canvas app, configure the policies and profiles for the
        corresponding external client app.

# Configure External Client App Access

To configure access to your canvas app, configure the policies and profiles for the corresponding external client app.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_connect)

#### Note

This task assumes that you completed the steps at [Use an External Client App](atlas.en-us.platform_connect.meta/platform_connect/quick_start_create_canvas_app_eca.htm "To create the canvas app in your org, configure the Canvas plugin for an external client app.").

1.  In Lightning Experience, from Setup, enter External Client Apps in the Quick Find box, then select **External Client App Manager**.
2.  In the External Client App list, click **Edit Policies** in the dropdown menu next to the Hello World app.
3.  In the App Policies section, select the **System Administrator** profile from the Available Profiles list and move the selection to the Selected Profiles list. Repeat this step for the profiles you want to select.

    In this example, we assume that your profile is System Administrator.

4.  In the OAuth Policies section, click the **Permitted Users** dropdown menu and select **Admin approved users are pre-authorized**. Click **OK** on the pop-up message that appears.

    We select **Admin approved users are pre-authorized** so users don’t see the canvas app until we give them permission. If we select **All users can self-authorize**, all users in the org can authorize the app after they sign in. Save your settings.

5.  From Setup, enter Canvas App Previewer in the Quick Find box, then select **Canvas App Previewer**. You can use the Canvas App Previewer to test your canvas app before you publish it.
6.  From the Canvas App Previewer list, click **Hello World**.

    The app launches, and the message Hello User.FullName appears. The canvas app works in this context because when you click the app name in the message previewer, the signed request is sent to the endpoint https://localhost:8443/examples/hello-world/index.jsp.

    After you configure access, make your canvas app available in a Lightning component. You can add the component to a Lightning record page so permitted users can use it there.

7.  Embed the canvas app in a Lightning component.

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

8.  Display the Lightning component on a record.
    1.  Navigate to the record page you want to customize, for example, a contact record page.
    2.  Click the gear icon and select **Edit Page.**
    3.  Find the myCanvasApp custom component and drag it to where you want it on the Lightning page. Save your changes.
    4.  Activate the page. Click **Assign as Org Default**, and then click **Next**.

Users with the profiles you selected in the App Policies section can now view and use the canvas app on contact record pages.

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

- Use an External Client App (atlas.en-us.platform_connect.meta/platform_connect/quick_start_create_canvas_app_eca.htm)
- Lightning Component Code Examples (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_aura_code_example.htm)
