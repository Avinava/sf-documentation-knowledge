---
title: "SalesforceActivity, SalesforceListActivity,
 and SalesforceExpandableListActivity Classes"
domain: mobile-sdk
topic: salesforceactivity-salesforcelistactivity-and-salesforceexpandablelistactivity-c
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:24.907Z
estimatedTokens: 216
keywords: [SalesforceActivity, SalesforceListActivity, SalesforceExpandableListActivity, Classes, skeletal, base, native, SDK, activities, They, extend, android.app.Activity, android.app.ListActivity, android.app.ExpandableListActivity, respectively]
---

> SalesforceActivity, SalesforceListActivity, and SalesforceExpandableListActivity are the skeletal base classes for native SDK
   activities. They extend android.app.Activity, android.app.ListActivity, and android.app.ExpandableListActivity, respectively.

# SalesforceActivity, SalesforceListActivity, and SalesforceExpandableListActivity Classes

SalesforceActivity, SalesforceListActivity, and SalesforceExpandableListActivity are the skeletal base classes for native SDK activities. They extend android.app.Activity, android.app.ListActivity, and android.app.ExpandableListActivity, respectively.

Each of these activity classes contains a single abstract method:

```

```

This method overloads the Activity.onResume() method, which is also implemented by the class. The Mobile SDK superclass delegate, SalesforceActivityDelegate, calls your overload when it has created a RestClient instance. Use this method to cache the client that’s passed in, and then use that client to perform your REST requests. For example, in the Kotlin Mobile SDK template app, the MainActivity class uses the following code:

```

```

## Code Examples

```apex
public abstract void onResume(RestClient client);
```

```
override fun onResume(client: RestClient) {
    // Keeping reference to rest client
    this.client = client

    // Show everything
    findViewById<ViewGroup>(R.id.root).visibility = View.VISIBLE
}
```
