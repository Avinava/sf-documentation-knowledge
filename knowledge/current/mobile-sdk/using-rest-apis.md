---
title: "Using REST APIs"
domain: mobile-sdk
topic: using-rest-apis
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:29.710Z
estimatedTokens: 1275
keywords: [REST, APIs, query, describe, data, Salesforce, org, Mobile, SDK, apps, call, honor, SOQL, SOSL, strings]
---

# Using REST APIs

> To query, describe, create, or update data from a Salesforce org, Mobile SDK apps call Salesforce REST APIs. Salesforce REST APIs honor SOQL and SOSL strings and can accept
			and return data in either JSON or XML format. Mobile SDK wraps standard
				Salesforce REST requests in methods that handle 

# Using REST APIs

To query, describe, create, or update data from a Salesforce org, Mobile SDK apps call Salesforce REST APIs. Salesforce REST APIs honor SOQL and SOSL strings and can accept and return data in either JSON or XML format. Mobile SDK wraps standard Salesforce REST requests in methods that handle the low-level HTTP configuration for you. For other Salesforce APIs, Mobile SDK provides methods for manually creating a custom request object and receiving the response. You can even use Mobile SDK REST API methods to make unauthenticated and external API calls.

Salesforce supports an ever-growing variety of REST APIs. For an overview of our offerings, see [Which API Do I Use?](https://help.salesforce.com/articleView?id=integrate_what_is_api.htm&language=en_US "HTML (New Window)") in Salesforce Help. For information on standard REST APIs, see [REST API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/).

## Coding REST Interactions

With Android native apps, you do minimal coding to access Salesforce data through REST calls. The classes in the com.salesforce.androidsdk.rest package initialize the communication channels and encapsulate low-level HTTP plumbing. These classes, all of which are implemented by Mobile SDK, include:

-   ClientManager—Serves as a factory for RestClient instances. It also handles account logins and handshakes with the Salesforce server.
-   RestClient—Handles protocol for sending REST API requests to the Salesforce server.

    Don’t directly create instances of RestClient. Instead, call the ClientManager.getRestClient() method.

-   RestRequest—Represents REST API requests formatted from the data you provide. Also serves as a factory for instances of itself.

    ![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=mobile_sdk)

    #### Important

    Don’t directly create instances of RestRequest. Instead, call an appropriate RestRequest static getter function such as RestRequest.getRequestForCreate().

-   RestResponse—Contains the response content in the requested format. The RestRequest class creates RestResponse instances and returns them to your app through your implementation of the RestClient.AsyncRequestCallback interface.

Here’s the basic procedure for using the REST classes on a UI thread:

1.  Create an instance of ClientManager.
    1.  Use the SalesforceSDKManager.getInstance().getAccountType() method to obtain the value to pass as the second argument of the ClientManager constructor.

    2.  For the LoginOptions parameter of the ClientManager constructor, call SalesforceSDKManager.getInstance().getLoginOptions().

2.  Implement the ClientManager.RestClientCallback interface.

3.  Call ClientManager.getRestClient() to obtain a RestClient instance, passing it an instance of your RestClientCallback implementation. The following code implements and instantiates RestClientCallback inline.

    Kotlin

    ```

    ```

    Java

    ```

    ```

4.  Call a static RestRequest() getter method to obtain the appropriate RestRequest object for your needs. For example, to get a description of a Salesforce object:

    ```

    ```

5.  Pass the RestRequest object you obtained in the previous step to RestClient.sendAsync() or RestClient.sendSync(). If you’re on a UI thread and therefore calling sendAsync():
    1.  Implement the ClientManager.AsyncRequestCallback interface.
    2.  Pass an instance of your implementation to the sendAsync() method.
    3.  Receive the formatted response through your ASyncRequestCallback.onSuccess() method. Before using the response, double-check that it’s valid by calling RestResponse.isSuccess().

The following code implements and instantiates AsyncRequestCallback inline.

Kotlin

```

```

Java

```

```

If you’re calling the sendSync() method from a service, use the same procedure with the following changes.

1.  To obtain a RestClient instance call ClientManager.peekRestClient() instead of ClientManager.getRestClient().

2.  Retrieve your formatted REST response from the sendSync() method’s return value.


## Checking REST Response Status

A REST response arriving at your app’s onSuccess() callback method indicates only that the network call didn’t fail. This high-level status doesn’t factor in app-level success or failure.

In Mobile SDK for Android, the RestResponse object wraps the underlying okHttp3.Response. To help you code more defensively, RestResponse provides the following convenience methods for inspecting response details.

public isSuccess()

public static boolean isSuccess(int statusCode)

Returns true if the HTTP response status code or the given code is between 200 and 299, indicating app-level success.

public int getStatusCode()

Returns the response status code.

public String getContentType()

Returns the content-type header, if found.

public Map<String, List<String>> getAllHeaders()

Returns all headers associated with this response.

public Response getRawResponse()

Returns the underlying okHttp3.Response object.

## Code Examples

```
val accountType = SalesforceSDKManager.getInstance().accountType

val loginOptions = SalesforceSDKManager.getInstance().loginOptions
// Get a rest client
ClientManager(this, accountType, loginOptions,
        SalesforceSDKManager.getInstance().shouldLogoutWhenTokenRevoked()).
            getRestClient(this, object : RestClientCallback() {
    fun authenticatedRestClient(client: RestClient?) {
        if (client == null) {
            SalesforceSDKManager.getInstance().logout(this@MainActivity)
            return
        }
        // Cache the returned client
        this@MainActivity.client = client
    }
}
)
```

```apex
String accountType = 
    SalesforceSDKManager.getInstance().getAccountType();
   
LoginOptions loginOptions = 
    SalesforceSDKManager.getInstance().getLoginOptions();
// Get a rest client
new ClientManager(this, accountType, loginOptions, 
   SalesforceSDKManager.getInstance().
   shouldLogoutWhenTokenRevoked()).
   getRestClient(this, new RestClientCallback() {
      @Override
      public void 
      authenticatedRestClient(RestClient client) {
         if (client == null) {
            SalesforceSDKManager.getInstance().
               logout(MyActivity.this);
            return;
         }
         // Cache the returned client
         MyActivity.this.client = client; 
      }   
   }
);
```

```
final RestRequest request = RestRequest.getRequestForDescribe(apiVersion, objectType);
```

```apex
private fun sendFromUIThread(restRequest: RestRequest) {
    client.sendAsync(restRequest, object : AsyncRequestCallback {
        private val start = System.nanoTime()
        override fun onSuccess(request: RestRequest, result: RestResponse) {
            // Consume before going back to main thread
            // Not required if you don't do main (UI) thread tasks here
            result.consumeQuietly()
            runOnUiThread {
                // Network component doesn’t report app layer status.
                // Use the Mobile SDK RestResponse.isSuccess() method to check
                // whether the REST request itself succeeded.
                if (result.isSuccess) {
                    try {
                        // Do something with the result
                    } catch (e: Exception) {
                        printException(e)
                    }

                    EventsObservable.get().notifyEvent(EventType.RenditionComplete)
                }
            }
        }

        override fun onError(exception: Exception) {
            printException(exception)
            EventsObservable.get().notifyEvent(EventType.RenditionComplete)
        }
    })
}
```

```apex
private void sendFromUIThread(RestRequest restRequest) {
    client.sendAsync(restRequest, new AsyncRequestCallback() {
        private long start = System.nanoTime(); 
        @Override
        public void onSuccess(RestRequest request, final RestResponse result) {
        	// Consume before going back to main thread
        	// Not required if you don't do main (UI) thread tasks here
        	result.consumeQuietly();
        	runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    // Network component doesn’t report app layer status.
                    // Use the Mobile SDK RestResponse.isSuccess() method to check  
                    // whether the REST request itself succeeded.
                    if (result.isSuccess()) {
                        try {
                            // Do something with the result
                        }
                        catch (Exception e) {
                            printException(e);
                        }
                        EventsObservable.get().notifyEvent(EventType.RenditionComplete);
                    }
                }
            });
        }
        @Override
        public void onError(Exception exception)
        {
            printException(exception);
            EventsObservable.get().notifyEvent(EventType.RenditionComplete); 
        }
    });
}
```
