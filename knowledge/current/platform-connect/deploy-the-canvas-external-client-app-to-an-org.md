---
title: "Deploy the Canvas External Client App to an Org"
domain: platform-connect
topic: deploy-the-canvas-external-client-app-to-an-org
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:27.563Z
estimatedTokens: 686
keywords: [Deploy, Canvas, External, Client, App, Org, retrieve, integration, Metadata, API, plugin, own, settings, files, policies]
---

# Deploy the Canvas External Client App to an Org

> Deploy and retrieve your Canvas integration for the external client app with Metadata
    API. The Canvas plugin has its own settings files and policies file.

# Deploy the Canvas External Client App to an Org

Deploy and retrieve your Canvas integration for the external client app with Metadata API. The Canvas plugin has its own settings files and policies file.

Before you can deploy or retrieve an external client app, [set up an SFDX project](https://help.salesforce.com/s/articleView?id=xcloud.configure_sfdx_for_external_client_apps.htm&language=en_US).

If you [created the Canvas external client app](atlas.en-us.platform_connect.meta/platform_connect/quick_start_create_canvas_app_eca.htm "To create the canvas app in your org, configure the Canvas plugin for an external client app.") in Salesforce Setup, you can retrieve the app using Metadata API to configure the policies and then deploy your changes to your org.

1.  Retrieve your Canvas plugin files:

    ```

    ```

2.  Make your changes in the .js-meta.xml file for the Canvas plugin. For example, to update the Canvas URL and location options, update the canvasUrl and canvasLocationOptions fields in the .ecaCanvas-meta.xml file that's located in the force-app/main/default/extlClntAppCanvasSettings folder of your SFDX project.
3.  Save the metadata files with your changes.
4.  Deploy your Canvas plugin files:

    ```

    ```

5.  Verify your changes in the External Client App Manager page in Setup.
    1.  In External Client App Manager, click the name of your external client app.
    2.  Go to the Settings tab and then expand the **Canvas App Settings** section.
    3.  Check that the **Canvas App URL** and **Locations** fields show your changes.

The Canvas plugin files include the metadata for the external client app, the Canvas settings, policies, and OAuth settings. This table lists the name of the source file with its type and path, where API\_Name corresponds to the API Name for the external client app.
| Name | Metadata Type | Sample Path |
| --- | --- | --- |
| API_Name | ExternalClientApplication | force-app/main/default/externalClientApps/API_Name.eca-meta.xml |
| API_Name_canvasSettings | ExtlClntAppCanvasSettings | force-app/main/default/extlClntAppCanvasSettings/API_Name_canvasSettings.ecaCanvas-meta.xml |
| API_Name_plcy | ExtlClntAppConfigurablePolicies | force-app/main/default/extlClntAppPolicies/API_Name_plcy.ecaPlcy-meta.xml |
| API_Name_glbloauth | ExtlClntAppGlobalOauthSettings | force-app/main/default/extlClntAppGlobalOauthSets/API_Name_glbloauth.ecaGlblOauth-meta.xml |
| API_Name_oauth | ExtlClntAppOauthSettings | force-app/main/default/extlClntAppOauthSettings/API_Name_oauth.ecaOauth-meta.xml |

#### See Also

-   [External Client Apps Creation with Metadata API](https://help.salesforce.com/s/articleView?id=xcloud.meta_external_client_apps_creation.htm&language=en_US)

## Code Examples

```
sf project retrieve start --manifest package.xml --target-org user@example.com
```

```
sf project deploy start --manifest package.xml --target-org user@example.com
```

## Related Topics

- created the Canvas external client app (atlas.en-us.platform_connect.meta/platform_connect/quick_start_create_canvas_app_eca.htm)
