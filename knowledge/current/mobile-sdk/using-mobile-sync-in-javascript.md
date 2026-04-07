---
title: "Using Mobile Sync in
        JavaScript"
domain: mobile-sdk
topic: using-mobile-sync-in-javascript
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:30.498Z
estimatedTokens: 748
keywords: [Mobile, Sync, JavaScript, hybrid, app, import, files, <script>, tags, Implementing, Model, Collection]
---

# Using Mobile Sync in
        JavaScript

> To use Mobile Sync in a hybrid app, import
            these files with <script> tags:

# Using Mobile Sync in JavaScript

To use Mobile Sync in a hybrid app, import these files with <script> tags:

-   jquery-*x.x.x*.min.js (use the version in the dependencies/jquery/ directory of the [SalesforceMobileSDK-Shared](https://github.com/forcedotcom/SalesforceMobileSDK-Shared "HTML (New Window)") repository)
-   underscore-*x.x.x*.min.js (use the version in the dependencies/underscore/ directory of the [SalesforceMobileSDK-Shared](https://github.com/forcedotcom/SalesforceMobileSDK-Shared "HTML (New Window)") repository)
-   backbone-*x.x.x*.min.js (use the version in the dependencies/backbone/ directory of the [SalesforceMobileSDK-Shared](https://github.com/forcedotcom/SalesforceMobileSDK-Shared "HTML (New Window)") repository)
-   cordova.js
-   force.js
-   mobilesync.js

## Implementing a Model Object

To begin using Mobile Sync objects, define a model object to represent each SObject that you want to manipulate. The SObjects can be standard Salesforce objects or custom objects. For example, this code creates a model of the Account object that sets the two required properties—sobjectType and fieldlist—and defines a cacheMode() function.

```

```

Notice that the app.models.Account model object extends Force.SObject, which is defined in mobilesync.js. Also, the cacheMode() function queries a local offlineTracker object for the device's offline status. You can use the Cordova library to determine offline status at any particular moment.

Mobile Sync can perform a fetch or a save operation on the model. It uses the app’s cacheMode value to determine whether to perform an operation on the server or in the cache. Your cacheMode member can either be a simple string property or a function returning a string.

## Implementing a Model Collection

The model collection for this sample app extends Force.SObjectCollection.

```

```

This model collection uses an optional key that is the name of the account to be fetched from the collection. It also defines a config() function that determines what information is fetched. If the device is offline, the config() function builds a cache query statement. Otherwise, if no key is specified, it queries the most recently used record ("mru"). If the key is specified and the device is online, it builds a standard SOQL query that pulls records for which the name matches the key. The fetch operation on the Force.SObjectCollection prototype transparently uses the returned configuration to automatically fill the model collection with query records.

See [querySpec](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_using_storecache.htm#query_spec) for information on formatting a cache query.

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

These code examples are part of the Account Editor sample app. See [Account Editor Sample](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/samples_account_editor.htm) for a sample description.

## Code Examples

```
app.models.Account = Force.SObject.extend({
    sobjectType: "Account",
    fieldlist: ["Id", "Name", "Industry", "Phone"],

    cacheMode: function(method) {
        if (app.offlineTracker.get("offlineStatus") == "offline") {
            return "cache-only";
        }
        else {
            return (method == "read" ? 
                "cache-first" : "server-first");
        }
    }
});
```

```
// The AccountCollection Model
app.models.AccountCollection = Force.SObjectCollection.extend({
    model: app.models.Account,
    fieldlist: ["Id", "Name", "Industry", "Phone"],
    setCriteria: function(key) {
        this.key = key;
    },
    config: function() {
        // Offline: do a cache query
        if (app.offlineTracker.get("offlineStatus") == "offline") {
            return {type:"cache", cacheQuery:{queryType:"like", 
                indexPath:"Name", likeKey: this.key+"%", 
                order:"ascending"}};
        }
        // Online
        else {
            // First time: do a MRU query
            if (this.key == null) {
                return {type:"mru", sobjectType:"Account", 
                    fieldlist: this.fieldlist};
            }
            // Other times: do a SOQL query
            else {
                var soql = "SELECT " + this.fieldlist.join(",")  
                    + " FROM Account"
                    + " WHERE Name like '" + this.key + "%'";
                return {type:"soql", query:soql};
            }
        }
    }
});
```

## Related Topics

- querySpec (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_using_storecache.htm)
- Account Editor Sample (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/samples_account_editor.htm)
