---
title: "Using the Mock"
domain: mobile-sdk
topic: using-the-mock
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:26.964Z
estimatedTokens: 835
keywords: [Authentication, Mock, facilitate, developing, testing, code, SmartStore, running, outside, container, emulated, Same-Origin, Policies]
---

> To facilitate developing and testing code that makes use of the SmartStore while running outside the
  container, you can use an emulated SmartStore.

# Using the Mock

To facilitate developing and testing code that makes use of the SmartStore while running outside the container, you can use an emulated SmartStore.

MockSmartStore is a JavaScript implementation of SmartStore that stores data in local storage (or optionally just in memory).

In the external/shared/test directory, you’ll find the following files:

-   MockCordova.js—A minimal implementation of Cordova functions intended only for testing plug-ins outside the container. Intercepts Cordova plug-in calls.
-   MockSmartStore.js—A JavaScript implementation of SmartStore intended only for development and testing outside the container. Also intercepts SmartStore Cordova plug-in calls and handles them using a MockSmartStore.

When you’re developing an application using SmartStore, make the following changes to test your app outside the container:

-   Include MockCordova.js instead of cordova.js.
-   Include MockSmartStore.js.

To see a MockSmartStore example, check out test/test.html in the [github.com/forcedotcom/SalesforceMobileSDK-Shared](https://github.com/forcedotcom/SalesforceMobileSDK-Shared "HTML (New Window)") repo.

## Same-Origin Policies

Same-origin policy permits scripts running on pages originating from the same site to access each other’s methods and properties with no specific restrictions; it also blocks access to most methods and properties across pages on different sites. Same-origin policy restrictions are not an issue when your code runs inside the container, because the container disables same-origin policy in the webview. However, if you call a remote API, you need to worry about same-origin policy restrictions.

Fortunately, browsers offer ways to turn off same-origin policy, and you can research how to do that with your particular browser. If you want to make XHR calls against Salesforce Platform from JavaScript files loaded from the local file system, you should start your browser with same-origin policy disabled. The following article describes how to disable same-origin policy on several popular browsers: [Getting Around Same-Origin Policy in Web Browsers](http://romkey.com/2011/04/23/getting-around-same-origin-policy-in-web-browsers).

## Authentication

For authentication with MockSmartStore, you will need to capture access tokens and refresh tokens from a real session and hand code them in your JavaScript app. You’ll also need these tokens to initialize the force.js JavaScript toolkit.

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

-   MockSmartStore doesn’t encrypt data and is not meant to be used in production applications.
-   MockSmartStore currently supports the following forms of Smart SQL queries:

    -   SELECT...WHERE.... For example:

        ```

        ```

    -   SELECT...WHERE...ORDER BY.... For example:

        ```

        ```

    -   SELECT count(\*) FROM {soupName}

    MockSmartStore doesn’t directly support the simpler types of Smart SQL statements that are handled by the build\*QuerySpec() functions. Instead, use the query spec function that suits your purpose.


#### See Also

-   [Retrieving Data from a Soup](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_query.htm "SmartStore provides a set of helper methods that build query strings for you.")

## Code Examples

```
SELECT {soupName:selectField} FROM {soupName} WHERE {soupName:whereField} IN (values)
```

```
SELECT {soupName:_soup} FROM {soupName} WHERE {soupName:whereField} LIKE 'value' ORDER BY LOWER({soupName:orderByField})
```

## Related Topics

- Retrieving Data from a Soup (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_query.htm)
