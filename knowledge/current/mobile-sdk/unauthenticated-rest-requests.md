---
title: "Unauthenticated REST Requests"
domain: mobile-sdk
topic: unauthenticated-rest-requests
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:29.693Z
estimatedTokens: 201
keywords: [Unauthenticated, REST, Requests, certain, cases, applications, calls, user, becomes, authenticated, application, access, services, outside, Salesforce, Mobile, SDK, apps, secure, endpoints]
---

# Unauthenticated REST Requests

> Most REST requests from Mobile SDK apps go to
      secure Salesforce endpoints
      on behalf of an authenticated Salesforce customer. For
      these cases, Mobile SDK handles
      authentication for the app by embedding the current user’s OAuth token in the request and
      automatically refre

# Unauthenticated REST Requests

Most REST requests from Mobile SDK apps go to secure Salesforce endpoints on behalf of an authenticated Salesforce customer. For these cases, Mobile SDK handles authentication for the app by embedding the current user’s OAuth token in the request and automatically refreshing stale tokens.

Sometimes, however, Mobile SDK apps request network services without authentication. For example:

-   Before the user has logged in to Salesforce
-   Through an unauthenticated endpoint within Salesforce
-   Through an unauthenticated endpoint outside of Salesforce

Mobile SDK provides two versions of its REST client:

-   RestClient.shared—initialized with the current user’s credentials
-   RestClient.sharedGlobal—not initialized with a user

You can access authenticated and unauthenticated endpoints with the RestClient.shared instance. However, you can access only unauthenticated endpoints with the RestClient.sharedGlobal instance. How you access unauthenticated endpoints depends on whether the service is in the Salesforce domain.

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

Unauthenticated REST requests require a full path URL. Mobile SDK doesn’t prepend an instance URL to unauthenticated endpoints.

## Requesting Unauthenticated Salesforce Resources

An unauthenticated endpoint is one that doesn’t require an OAuth token. Few Lightning Platform APIs are unauthenticated, but other products or your own Apex endpoints might be. To configure a request for an unauthenticated Salesforce resource, set its requiresAuthentication property to false or NO.

**Swift**

```

```

**Objective-C**

```

```

## Requesting Unauthenticated External Resources

To support requests to unauthenticated external endpoints, Mobile SDK provides a shared global instance of its REST client. This REST client doesn't require OAuth authentication and is unaware of the concept of user. Native apps can use it to send custom unauthenticated requests to non-Salesforce endpoints before or after the user logs in to Salesforce.

Here’s how you access the shared global REST client:

**Swift:**

RestClient.sharedGlobal

**Objective-C:**

\[\[SFRestAPI sharedGlobalInstance\]

To call an external endpoint, use the RestRequest.customUrlRequest(with:baseURL:path:queryParams:) method.

**Swift**

```

```

**Objective-C**

```

```

After the customer authenticates with Salesforce, the app can switch to the authenticated REST client. You can call any endpoint through the authenticated instance, but you cannot call authenticated endpoints through the global instance.

## Requesting Unauthenticated Resources in Non-Native Apps

For non-native apps—hybrid and React Native—Mobile SDK does not support a REST client object. To access unauthenticated endpoints in non-native apps, call one of the following methods and pass false to its doesNotRequireAuthentication parameter:

**Swift**

```

```

**React Native**

```

```

## Code Examples

```apex
/**
* Method to create an unauthenticated RestClient asynchronously
* @param activityContext
* @param restClientCallback
*/    
public void getUnauthenticatedRestClient(Activity activityContext, RestClientCallback restClientCallback);
```

```apex
/**
* Method to create an unauthenticated RestClient.
* @return
*/
public RestClient peekUnauthenticatedRestClient();
```

```
val unauthenticatedRestClient = clientManager.peekUnauthenticatedRestClient()
val request = RestRequest(RestMethod.GET, 
    "https://api.spotify.com/v1/search?q=James%20Brown&type=artist", null)
val response = unauthenticatedRestClient.sendSync(request)
```

```
RestClient unauthenticatedRestClient = clientManager.peekUnauthenticatedRestClient();
RestRequest request = new RestRequest(RestMethod.GET, 
    "https://api.spotify.com/v1/search?q=James%20Brown&type=artist", null);        
RestResponse response = unauthenticatedRestClient.sendSync(request);
```

```
request.requiresAuthentication = false
```
