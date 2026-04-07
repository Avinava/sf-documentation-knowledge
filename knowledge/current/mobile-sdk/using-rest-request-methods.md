---
title: "Using REST Request Methods"
domain: mobile-sdk
topic: using-rest-request-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:26.520Z
estimatedTokens: 368
keywords: [REST, Salesforce, offers, product-specific, APIs, relationship, Platform, Mobile, SDK, resources, configure, send, requests, cases, RestRequest, directly, instead, relying]
---

> Salesforce offers some product-specific REST APIs that have no relationship to Salesforce
            Platform APIs. You can use Mobile SDK resources to configure and send
            such requests. For these cases, you create and configure your RestRequest object directly, instead of relying on
   

# Using REST Request Methods

Salesforce offers some product-specific REST APIs that have no relationship to Salesforce Platform APIs. You can use Mobile SDK resources to configure and send such requests. For these cases, you create and configure your RestRequest object directly, instead of relying on factory methods.

To send a non-SOQL and non-SOSL REST request using RestClient:

1.  Create an instance of RestRequest.
2.  Set the properties you need on the RestRequest object.
3.  Call send on the RestClient object, passing in the RestRequest object you created as the first parameter.

    The following example performs a GET operation to obtain all items in a specific Chatter feed.

    ```

    ```

4.  To perform a request with parameters, wrap your parameter string using SFJsonUtils.object(fromJSONString:), and assign it to the queryParams property of RestRequest. To send a custom request, create a Dictionary object and use the setCustomRequestBodyData(\_:contentType:) method of RestRequest.

    The following example uses a custom request body to add a comment to a Chatter feed.

    ```

    ```

5.  To set an HTTP header for your request, use the setHeaderValue(\_:forHeaderName:) method. This method can help you when you’re displaying Chatter feeds, which come pre-encoded for HTML display. To avoid displaying unwanted escape sequences in Chatter comments, set the X-Chatter-Entity-Encoding header of your request to “false”:

    ```

    ```

## Code Examples

```
let request = RestRequest(method: .GET, serviceHostType: .instance,
    path: "/v42.0/chatter/feeds/user-profile/me/feed-elements", 
    queryParams: nil)
RestClient.shared.send(request: request { [weak self] (result) in
    switch result {
        case .success(let response):
            // do something with response
        case .failure(let error):
            SalesforceLogger.d(RootViewController.self, message:"Error invoking: \(request) , \(error)")
    } 
}
```

```
let dataString = "{"body" : {"messageSegments" : [{"type" : "Text", " +
    ""text" : "Some Comment"}]}, "feedElementType":"FeedItem", " +
    ""subjectId":"me"}"

if let data = dataString.data(using: .utf8) {
    
    let request = RestRequest(method: .POST, serviceHostType: .instance, 
        path: "/v42.0/chatter/feed-elements", queryParams: nil) 
    request.setCustomRequestBodyData(data, contentType: "application/json")
    
    RestClient.shared.send(request: request { [weak self] (result) in
        switch result {
            case .success(let response):
                // do something with response
            case .failure(let error):
                SalesforceLogger.d(RootViewController.self, message:"Error invoking: \(request) , \(error)")
        } 
    }
}
```

```
...
request.setHeaderValue("false", forHeaderName:"X-Chatter-Entity-Encoding")
```
