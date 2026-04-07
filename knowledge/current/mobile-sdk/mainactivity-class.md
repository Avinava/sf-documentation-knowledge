---
title: "MainActivity Class"
domain: mobile-sdk
topic: mainactivity-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:29.473Z
estimatedTokens: 1025
keywords: [MainActivity, Mobile, SDK, apps, main, activity, begins, immediately, user, logs, Once, running, launch, activities, turn]
---

# MainActivity Class

> In Mobile SDK apps, the
			main activity begins immediately after the user logs in. Once the main activity is
			running, it can launch other activities, which in turn can launch sub-activities. When
			the application exits, it does so by terminating the main activity. All other activities
			termi

# MainActivity Class

In Mobile SDK apps, the main activity begins immediately after the user logs in. Once the main activity is running, it can launch other activities, which in turn can launch sub-activities. When the application exits, it does so by terminating the main activity. All other activities terminate in a cascade from within the main activity.

The template app’s MainActivity class extends the abstract Mobile SDK activity class, com.salesforce.androidsdk.ui.SalesforceActivity. This superclass gives you free implementations of mandatory passcode and login protocols. If you use another base activity class instead, you’re responsible for implementing those protocols. MainActivity initializes the app's UI and implements its UI buttons.

The MainActivity UI includes a list view that can show the user's Salesforce Contacts or Accounts. When the user clicks one of these buttons, the MainActivity object performs a couple of basic queries to populate the view. For example, to fetch the user's Contacts from Salesforce, the onFetchContactsClick() message handler sends a simple SOQL query:

Kotlin

```

```

Java

```

```

Internally, the private sendRequest() method formulates a server request using the RestRequest class and the given SOQL string:

Kotlin

```

```

Java

```

```

This method uses an instance of the com.salesforce.androidsdk.rest.RestClient class, client, to process its SOQL query. The RestClient class relies on two helper classes—RestRequest and RestResponse—to send the query and process its result. The sendRequest() method calls RestClient.sendAsync() to process the SOQL query asynchronously.

To support the sendAsync() call, the sendRequest() method constructs an instance of com.salesforce.androidsdk.rest.RestRequest, passing it the API version and the SOQL query string. The resulting object is the first argument for sendAsync(). The second argument is a callback object. When sendAsync() has finished running the query, it sends the results to this callback object. If the query is successful, the callback object uses the query results to populate a UI list control. If the query fails, the callback object displays a toast popup to display the error message.

## Overriding the Default API Version

For Android, Mobile SDK core libraries define a hard-coded default API version. This value matches the Salesforce API version on the date of the current Mobile SDK release. You can override the default version in your app by setting api\_version in the strings.xml resource file.

If you override the default version, be careful when calling methods such as RestRequest.getRequestForQuery() that require an API version argument. It’s tempting to pass ApiVersionStrings.getVersionNumber(), but in some cases this call returns unexpected values. Here are some tips.

-   To return either your overridden version or the default value if no override exists, set the context argument to a valid subclass of Context. High-level subclasses include extensions of Activity, Service, and Application.
-   If you’re calling getVersionNumber() from a class that isn’t a Context subclass, you can pass SalesforceSDKManager.getInstance().getAppContext() as the context argument.
-   If you set the context argument to null, getVersionNumber() always returns the hard-coded default value.

## Using an Anonymous Class in Java

In the call to RestClient.sendAsync() the code instantiates a new AsyncRequestCallback object as its second argument. However, the AsyncRequestCallbackconstructor is followed by a code block that overrides a couple of methods: onSuccess() and onError(). If that code looks strange to you, take a moment to see what's happening. AsyncRequestCallback is defined as an interface, so it has no implementation. In order to instantiate it, the code implements the two AsyncRequestCallback methods inline to create an anonymous class object. This technique gives TemplateApp a sendAsync() implementation of its own that can never be called from another object and doesn't litter the API landscape with a group of specialized class names.

## Code Examples

```
@Throws(UnsupportedEncodingException::class)
@Suppress("UNUSED_PARAMETER")
fun onFetchContactsClick(v: View) {
    sendRequest("SELECT Name FROM Contact")
}
```

```apex
public void onFetchContactsClick(View v) throws UnsupportedEncodingException {
    sendRequest("SELECT Name FROM Contact");
}
```

```apex
@Throws(UnsupportedEncodingException::class)
private fun sendRequest(soql: String) {
    val restRequest = RestRequest.getRequestForQuery(ApiVersionStrings.getVersionNumber(this), soql)

    client!!.sendAsync(restRequest, object : AsyncRequestCallback {
        override fun onSuccess(request: RestRequest, result: RestResponse) {
            result.consumeQuietly() // consume before going back to main thread
            runOnUiThread {
                try {
                    listAdapter!!.clear()
                    val records = result.asJSONObject().getJSONArray("records")
                    for (i in 0..records.length() - 1) {
                        listAdapter!!.add(records.getJSONObject(i).getString("Name"))
                    }
                } catch (e: Exception) {
                    onError(e)
                }
            }
        }

        override fun onError(exception: Exception) {
            runOnUiThread {
                Toast.makeText(this@MainActivity,
                        this@MainActivity.getString(R.string.sf__generic_error, exception.toString()),
                        Toast.LENGTH_LONG).show()
            }
        }
    })
}
```

```apex
private void sendRequest(String soql) throws UnsupportedEncodingException
{
    RestRequest restRequest = 
        RestRequest.getRequestForQuery(
            getString(R.string.api_version), soql); 
    client.sendAsync(restRequest, new AsyncRequestCallback()
    {
        @Override
        public void onSuccess(RestRequest request,
            RestResponse result) {
            // Consume before going back to main thread
            result.consumeQuietly();
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    // Network component doesn’t report app layer status.
                    // Use the Mobile SDK RestResponse.isSuccess() method to check  
          	        // whether the REST request itself succeeded.
                    if (result.isSuccess()) {
                        try {
           	                listAdapter.clear();
		                    JSONArray records = 
	    	                    result.asJSONObject().getJSONArray("records");
                            for (int i = 0; i < records.length(); i++) {
                                listAdapter.add(
                                    records.getJSONObject(i).getString("Name"));
                            } 
                        } catch (Exception e) {
                            onError(e);
		          }
	    	  } 
                } 
            }); 
        }
        @Override
        public void onError(final Exception exception) {
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    Toast.makeText(MainActivity.this,
                        MainActivity.this.getString(R.string.sf__generic_error, exception.toString()),
                        Toast.LENGTH_LONG).show();
                }
            });
        }
    });
}
```
