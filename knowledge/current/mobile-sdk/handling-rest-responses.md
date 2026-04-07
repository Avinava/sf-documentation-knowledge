---
title: "Handling REST Responses"
domain: mobile-sdk
topic: handling-rest-responses
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:26.476Z
estimatedTokens: 1428
keywords: [Handling, REST, Responses, Currently, modern, efficient, approach, Combine, publisher, explained, Requests, Swift, Delegate, Protocol, Implementing]
---

> Currently, the most modern and efficient approach is to use a Combine publisher, as explained in Handling REST Requests.

# Handling REST Responses

At the Salesforce server, all REST responses originate as JSON strings. Mobile SDK wraps this raw response in an iOS object and passes it to the app’s handler. The response object’s type follows the raw JSON structure:

-   If the JSON root element is an object, the response is a Swift Dictionary.
-   If the JSON root element is an array, the response is a Swift Array.

Your app is responsible for extracting the requested payload data from the response object. If you’re not sure how the payload is structured, consult the [REST API Developer Guide reference documentation](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_list.htm).

Mobile SDK provides a variety of ways to handle REST responses, including:

-   (*Swift only*) Use a Combine publisher. The RestClient.shared.publisher sends a SOQL request and receive the asynchronous response in the future. You can then chain calls to parse the raw response and format it for your app’s use. See ContactForAccountModel.swift in the iOSNativeSwiftTemplate directory of the [Templates repo](https://github.com/forcedotcom/SalesforceMobileSDK-Templates).
-   (*Swift only*) In a trailing closure after the send(request:\_:) call. This approach is recommended for “vanilla” Mobile SDK apps in Swift.
-   (*Swift, Objective-C*) By implementing the Mobile SDK REST delegate protocol and passing its ID to the REST client’s send method. This approach is recommended for Objective-C apps.
-   (*Objective-C only*) By implementing success and error blocks within the send method, using methods from the SFRestApi (Blocks) category.

## Response Handling in Swift

Currently, the most modern and efficient approach is to use a Combine publisher, as explained in [Handling REST Requests](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_rest_apis_send_request.htm).

## Using the REST Delegate Protocol

| Swift | Objective-C |
| --- | --- |
| RestClientDelegate | SFRestDelegate |

The REST delegate protocol is typically used in Objective-C apps, where it offer better code clarity than the SFRestApi ( Blocks) methods. Although the delegate approach is also available in Swift, you can achieve the same result more efficiently and clearly with publishers or trailing closures.

A class that adopts the REST delegate protocol becomes a potential target for asynchronous REST responses from Salesforce. When you send a REST request, you can tell the REST API client to forward the response to a specific delegate instance. Upon receipt, Mobile SDK routes that response to the appropriate method on the delegate instance you specified.

The SFRestDelegate protocol declares four possible responses:

-   request:didLoadResponse:—Request was processed. The delegate receives the response in JSON format. This callback is the only one that indicates success.
-   request:didFailLoadWithError:—Request couldn’t be processed. The delegate receives an error message.
-   requestDidCancelLoad—Request was canceled due to some external factor, such as administrator intervention, a network glitch, or another unexpected event. The delegate receives no return value.
-   requestDidTimeout—The Salesforce server failed to respond in time. The delegate receives no return value.

The response arrives in a call to one of these delegate methods. Because you can’t predict the type of response, you’re required to implement all the methods. Responses in Swift and Objective-C delegates use the same method and parameter names.

## Implementing REST Delegate Methods

**Success Response**

| Swift | Objective-C |
| --- | --- |
| request(request:didLoadResponse:[rawResponse:]) | - (void)request:(SFRestRequest *)request didLoadResponse:(id)dataResponse rawResponse:(NSURLResponse *)rawResponse; |

The request:didLoadResponse: method is the only protocol method that handles a success condition, so place your code for handling Salesforce data in that method. For example:

```

```

If your method cannot infer the data type from the request, use introspection to determine the data type. For example:

```

```

You can address the response as an NSDictionary object and extract its records into an NSArray object. To do so, send the NSDictionary:objectForKey: message using the key “records”.

**Failed with Error Response**

| Swift | Objective-C |
| --- | --- |
| request(request:didFailLoadWithError:) | request:didFailLoadWithError: |

A call to the request:didFailLoadWithError: callback results from one of the following conditions:

-   If you use invalid request parameters, you get a kSFRestErrorDomain error code. For example, this error could indicate that you passed nil to requestForQuery:, or that you tried to update a non-existent object.
-   If an OAuth access token expires, the framework tries to obtain a new access token and, if successful, retries the query. If a request for a new access token or session ID fails, you get a kSFOAuthErrorDomain error code. For example, the access token expires, and the OAuth refresh token is invalid. This scenario rarely occurs.
-   If the low-level HTTP request fails, you get an kSFIdentityErrorTypeBadHttpResponse error code. For example, a Salesforce server becomes temporarily inaccessible.

**requestDidCancelLoad and requestDidTimeout Methods**

| Swift | Objective-C |
| --- | --- |
| requestDidCancelLoad(request:) | requestDidCancelLoad: |
| requestDidTimeout(request:) | requestDidTimeout: |

The “load canceled” and “request timed out” delegate methods are self-describing and don’t return an error code. You can choose to handle the result however you want: display an error message, write to the log, retry the request, and so on.

## Code Examples

```
- (void)request:(SFRestRequest *)request     
        didLoadResponse:(id)jsonResponse {
    NSArray *records = [jsonResponse objectForKey:@"records"];
    NSLog(@"request:didLoadResponse: #records: %d", records.count);
    self.dataRows = records;
    [self.tableView reloadData];
}
```

```
if ([jsonResponse isKindOfClass:[NSArray class]]) {
     // Handle an NSArray here. 
} else {
     // Handle an NSDictionary here.
}
```

## Related Topics

- Handling REST Requests (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_rest_apis_send_request.htm)
