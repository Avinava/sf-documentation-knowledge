---
title: "Using Lightning Web Components in Hybrid Apps"
domain: mobile-sdk
topic: using-lightning-web-components-in-hybrid-apps
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:30.767Z
estimatedTokens: 955
keywords: [Lightning, Web, Components, Hybrid, Apps, Salesforce, orgs, developers, admins, build, sophisticated, work, well, Mobile, SDK]
---

# Using Lightning Web Components in Hybrid Apps

> In Salesforce orgs, developers and admins use Lightning web components to build
  sophisticated web controls that work well with other Salesforce controls. Mobile SDK has long
  supported apps that run Visualforce pages in web views. However, until recently, technical hurdles
  made it difficult to run LWCs in those apps. In version 8.2, Mobile SDK introduces a solution to
  those hurdles: Developers can now host Lightning web components in custom hybrid remote
  applications.

# Using Lightning Web Components in Hybrid Apps

In Salesforce orgs, developers and admins use Lightning web components to build sophisticated web controls that work well with other Salesforce controls. Mobile SDK has long supported apps that run Visualforce pages in web views. However, until recently, technical hurdles made it difficult to run LWCs in those apps. In version 8.2, Mobile SDK introduces a solution to those hurdles: Developers can now host Lightning web components in custom hybrid remote applications.

Support for LWCs centers around a new template app and a new app type. The LWC template includes a Salesforce DX server that launches the components. You can find the HybridLwcTemplate template app at [the SalesforceMobileSDK-Templates GitHub repo](https://github.com/forcedotcom/SalesforceMobileSDK-Templates/tree/master/HybridLwcTemplate).

To create an LWC-enabled app, use the Mobile SDK forcehybrid tool specifying the hybrid\_lwc app type.

```

```

Your generated project includes a server folder that contains a Salesforce DX project. Before logging into your hybrid LWC app, deploy this project to your target org. For example, to deploy to a scratch org:

1.  If you specified an output directory for your project, cd to that directory.

    ```

    ```

2.  Create a scratch org.

    ```

    ```

3.  cd to your project’s server directory.

    ```

    ```

4.  Deploy the project’s source files to your scratch org.

    ```

    ```

5.  Create a password for your scratch org.

    ```

    ```

6.  Log in to your app on a virtual or physical device using the user name and password for the new scratch org.

In addition to the Mobile SDK native container app, a hybrid LWC app includes:

-   The root Lightning Web Component on a Visualforce page.
-   Javascript code for Cordova and Mobile SDK’s Cordova plug-ins.
-   An Apex class that determines whether to serve iOS or Android libraries.

## Interacting with Native Mobile SDK Features

Hybrid LWC apps can interact with the native container through the Mobile SDK Cordova plug-ins. Mobile SDK provides a mobilesdk object that you can pass as a property to any Lightning Web Component in your project. For example, to use mobilesdk in an LWC Javascript file, add the following annotation:

```

```

With the mobilesdk object, you can call Mobile SDK plug-in functionality. For example, you can make network calls, store data in SmartStore, and use MobileSync. To demonstrate, the template app uses mobilesdk in its ContactsList component to make a SOQL query. Here’s the pertinent code, from ContactsList.js.

```

```

## Other Considerations

-   You do most, if not all, of your development in the server/force-app/main/default/lwc/ directory.
-   Developing a LWC for your mobile app is nearly identical to developing for the desktop browser. Differences occur only if you use the mobilesdk object to access the native container.
-   To change the root component, update server/force-app/main/default/pages/<*app-name*\>.page accordingly.
-   Hybrid LWC apps use Lightning Out to run Lightning web components in a Visualforce page. For known limitations of this approach, see [Lightning Out Considerations and Limitations](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.lightning_out_considerations).

## See Also

-   [Use Components in Visualforce Pages](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/use_visualforcehttps://developer.salesforce.com/docs/component-library/documentation/en/lwc/use_visualforce "HTML (New Window)") (*Lightning Web Components Dev Guide*)
-   [Quick Start: Lightning Web Components](https://trailhead.salesforce.com/en/content/learn/projects/quick-start-lightning-web-components "HTML (New Window)") (Trailhead project)

## Code Examples

```
forcehybrid create
Enter the target platform(s) separated by commas (ios, android): ios,android
Enter your application type (hybrid_local or hybrid_remote or hybrid_lwc, 
    leave empty for hybrid_local): hybrid_lwc
Enter your application name: helloLwc
Enter your package name: com.acme.apps
Enter output directory for your app (leave empty for the current directory): 
    helloLwc
```

```
cd helloLwc
```

```
sf org create scratch --definition-file server/config/project-scratch-def.json --alias MyOrg
```

```
sf project deploy start --target-org MyOrg
```

```
sf org generate password --target-org MyOrg
```
