---
title: "Versioning and JavaScript Library Compatibility"
domain: mobile-sdk
topic: versioning-and-javascript-library-compatibility
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:26.158Z
estimatedTokens: 894
keywords: [Versioning, JavaScript, Library, Compatibility, hybrid, applications, client, code, interacts, native, Cordova, formerly, PhoneGap, SalesforceSDK, plug-ins, package, mobile, application, testing, assures, works, However, Finding, SDK, User, Agent, Detecting, sdkinfo, Plugin]
---

> In hybrid applications, client JavaScript code interacts with native code through Cordova
   (formerly PhoneGap) and SalesforceSDK plug-ins. When you package your JavaScript code with your
   mobile application, your testing assures that the code works with native code. However, if the
   JavaScript

# Versioning and JavaScript Library Compatibility

In hybrid applications, client JavaScript code interacts with native code through Cordova (formerly PhoneGap) and SalesforceSDK plug-ins. When you package your JavaScript code with your mobile application, your testing assures that the code works with native code. However, if the JavaScript code comes from the server—for example, when the application is written with VisualForce—harmful conflicts can occur. In such cases you must be careful to use JavaScript libraries from the version of Cordova that matches the Mobile SDK version you’re using.

For example, suppose you shipped an application with Mobile SDK 1.2, which uses PhoneGap 1.2. Later, you ship an update that uses Mobile SDK 1.3. The 1.3 version of the Mobile SDK uses Cordova 1.8.1 rather than PhoneGap 1.2. You must make sure that the JavaScript code in your updated application accesses native components only through the Cordova 1.8.1 and Mobile SDK 1.3 versions of the JavaScript libraries. Using mismatched JavaScript libraries can crash your application.

You can’t force your customers to upgrade their clients, so how can you prevent crashes? First, identify the version of the client. Then, you can either deny access to the application if the client is outdated (for example, with a "Please update to the latest version" warning), or, preferably, serve compatible JavaScript libraries.

The following table correlates Cordova and PhoneGap versions to Mobile SDK versions.

| Mobile SDK version | Cordova or PhoneGap version |
| --- | --- |
| 1.2 | PhoneGap 1.2 |
| 1.3 | Cordova 1.8.1 |
| 1.4 | Cordova 2.2 |
| 1.5 | Cordova 2.3 |
| 2.0 | Cordova 2.3 |
| 2.1 | Cordova 2.3 |
| 2.2 | Cordova 2.3 |
| 2.3 | Cordova 3.5 |
| 3.0 | Cordova 3.6 |
| 3.1 | Cordova 3.6 |
| 3.2 | Cordova 3.6 |
| 3.3 | Cordova 3.6 |
| 4.0 | Cordova 5.0.0 (for Android), 3.9.2 (for iOS) |
| 4.1 | Cordova 5.0.0 (for Android), 3.9.2 (for iOS) |
| 4.2 | Cordova 5.0.0 (for Android), 3.9.2 (for iOS) |
| 4.3 | Cordova 5.0.0 (for Android), 4.2.0 (for iOS) |

## Finding the Mobile SDK Version with the User Agent

You can leverage the user agent string to look up the Mobile SDK version. The user agent starts with SalesforceMobileSDK/<*version*\>. Once you obtain the user agent, you can parse the returned string to find the Mobile SDK version.

You can obtain the user agent on the server with the following Apex code:

```

```

On the client, you can do the same in JavaScript using the navigator object:

```

```

## Detecting the Mobile SDK Version with the sdkinfo Plugin

In JavaScript, you can also retrieve the Mobile SDK version and other information by using the sdkinfo plug-in. This plug-in, which is defined in the cordova.force.js file, offers one method:

```

```

This method returns an associative array that provides the following information:

| Member name | Description |
| --- | --- |
| sdkVersion | Version of the Salesforce Mobile SDK used to build to the container. For example: “1.4”. |
| appName | Name of the hybrid application. |
| appVersion | Version of the hybrid application. |
| forcePluginsAvailable | Array containing the names of Salesforce plug-ins installed in the container. For example: "com.salesforce.oauth", "com.salesforce.smartstore", and so on. |

The following code retrieves the information stored in the sdkinfo plug-in and displays it in alert boxes.

```

```

#### See Also

-   [Example: Serving the Appropriate Javascript Libraries](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/hybrid_example_serving_js_libs.htm)

## Code Examples

```
userAgent = ApexPages.currentPage().getHeaders().get('User-Agent');
```

```
userAgent = navigator.userAgent;
```

```
getInfo(callback)
```

```
var sdkinfo = cordova.require("com.salesforce.plugin.sdkinfo");
sdkinfo.getInfo(new function(info) {
    alert("sdkVersion->" + info.sdkVersion);
    alert("appName->" + info.appName);
    alert("appVersion->" + info.appVersion);
    alert("forcePluginsAvailable->" + 
        JSON.stringify(info.forcePluginsAvailable));
});
```

## Related Topics

- Example: Serving the Appropriate Javascript Libraries (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/hybrid_example_serving_js_libs.htm)
