---
title: "Example: Serving the Appropriate Javascript Libraries"
domain: mobile-sdk
topic: example-serving-the-appropriate-javascript-libraries
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:26.068Z
estimatedTokens: 546
keywords: [Serving, Appropriate, Javascript, Libraries, ship, client, uses, Salesforce, Mobile, SDK, 1.3, add, files, ZIP, file]
---

> For example, if you ship a client that uses Salesforce
 Mobile SDK v. 1.3, add these files to your ZIP file:

# Example: Serving the Appropriate Javascript Libraries

To provide the correct version of Javascript libraries, create a separate bundle for each Salesforce Mobile SDK version you use. Then, provide Apex code on the server that downloads the required version.

1.  For each Salesforce Mobile SDK version that your application supports, do the following.

    1.  Create a ZIP file containing the Javascript libraries from the intended SDK version.
    2.  Upload the ZIP file to your org as a static resource.

    For example, if you ship a client that uses Salesforce Mobile SDK v. 1.3, add these files to your ZIP file:

    -   cordova.force.js
    -   SalesforceOAuthPlugin.js
    -   bootconfig.js
    -   cordova-1.8.1.js, which you should rename as cordova.js

    ![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

    #### Note

    In your bundle, it’s permissible to rename the Cordova Javascript library as cordova.js (or PhoneGap.js if you’re packaging a version that uses a PhoneGap-*x.x*.js library.)

2.  Create an Apex controller that determines which bundle to use. In your controller code, parse the user agent string to find which version the client is using.

    1.  In your org, from Setup, click **Develop** | **Apex Class**.
    2.  Create a new Apex controller named SDKLibController with the following definition.

        ```

        ```


3.  Create a Visualforce page for each library in the bundle, and use that page to redirect the client to that library.

    For example, for the SalesforceOAuthPlugin library:

    1.  In your org, from Setup, enter Visualforce Pages in the Quick Find box, then select **Visualforce Pages**.
    2.  Create a new page called “SalesforceOAuthPlugin” with the following definition.

        ```

        ```

    3.  Reference the VisualForce page in a <script> tag in your HTML code. Be sure to point to the page you created in step 3b. For example:

        ```

        ```

        ![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

        #### Note

        Provide a separate <script> tag for each library in your bundle.

## Code Examples

```apex
public class SDKLibController {
  public String getSDKLib() {
    String userAgent = 
      ApexPages.currentPage().
        getHeaders().get('User-Agent');

    if (userAgent.contains('SalesforceMobileSDK/1.3')) {
      return 'sdklib13';
    }
    // Add if statements for other SalesforceSDK versions 
    // for which you provide library bundles.
  }
}
```

```
<apex:page controller="SDKLibController" 
  action="{!URLFor($Resource[SDKLib], 
 'SalesforceOAuthPlugin.js')}">
</apex:page>
```

```
<script type="text/javascript" 
  src="/apex/SalesforceOAuthPlugin" />
```
