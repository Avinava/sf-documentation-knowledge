---
title: "Managing Requests"
domain: mobile-sdk
topic: managing-requests
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:30.560Z
estimatedTokens: 219
keywords: [Managing, Requests, SalesforceNetwork, library, iOS, two, primary, objects, SFNetworkEngine, SFNetworkOperation, SFRestRequest, internally, uses, server, call]
---

# Managing Requests

> The SalesforceNetwork library for iOS defines two primary
         objects, SFNetworkEngine and SFNetworkOperation. SFRestRequest internally uses a SFNetworkOperation object to make each server call.

# Managing Requests

The SalesforceNetwork library for iOS defines two primary objects, SFNetworkEngine and SFNetworkOperation. SFRestRequest internally uses a SFNetworkOperation object to make each server call.

If you’d like to access the SFNetworkOperation object for any request, you have two options.

-   The following methods return SFNetworkOperation\*:
    -   \[SFRestRequest send:\]

    -   \[SFRestAPI send:delegate:\]

-   SFRestRequest objects include a networkOperation object of type SFNetworkOperation\*.

To cancel pending REST requests, you also have two options.

-   SFRestRequest provides a new method that cancels the request:

    ```

    ```

-   And SFRestAPI has a method that cancels all requests currently running:

    ```

    ```


## Examples of Canceling Requests

To cancel all requests:

```

```

To cancel a single request:

```

```

## Code Examples

```
- (void) cancel;
```

```
- (void)cancelAllRequests;
```

```
[[SFRestAPI sharedInstance] cancelAllRequests];
```

```
SFRestRequest *request = [[SFRestAPI sharedInstance] requestForOwnedFilesList:nil page:0];
[[SFRestAPI sharedInstance] send:request delegate:self];
...
// User taps Cancel Request button while waiting for the response
-(void) cancelRequest:(SFRestRequest *) request {
   [request cancel];
}
```
