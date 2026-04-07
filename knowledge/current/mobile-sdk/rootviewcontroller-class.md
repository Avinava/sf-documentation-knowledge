---
title: "RootViewController Class"
domain: mobile-sdk
topic: rootviewcontroller-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:26.272Z
estimatedTokens: 790
keywords: [RootViewController, root, view, controller, displays, app, presents, Objective-C, apps, bottom, stack, Mobile, SDK, template, project, appropriately, Design, Swift, Implementation]
---

> A root view controller displays the first custom view that your app presents. In
            Objective-C apps, this view is the one at the bottom, or root, of your view stack. For
            the Mobile SDK
            Objective-C template project, Mobile SDK
            appropriately names its root

# RootViewController Class

A root view controller displays the first custom view that your app presents. In Objective-C apps, this view is the one at the bottom, or root, of your view stack. For the Mobile SDK Objective-C template project, Mobile SDK appropriately names its root view controller class RootViewController. This class sets up a mechanism for your app’s interactions with the Salesforce REST API. Regardless of how you define your root view controller, you can reuse the template app’s code for retrieving Salesforce data through REST APIs.

## RootViewController Design

As the sole custom view controller in a basic Mobile SDK app, the RootViewController class covers only the bare essentials. Its two primary tasks are:

-   Use Salesforce REST APIs to query Salesforce data
-   Display the Salesforce data in a table

This app retrieves Salesforce data by issuing an asynchronous REST request in the form of a SOQL query. In this case, the query is a simple SELECT statement that gets the Name field from up to 10 Contact records. The app displays the query results in a static read-only table. Mobile SDK leverages the current user’s authenticated credentials to form and send the REST request.

## Swift Implementation

Beginning in Mobile SDK 9.0, the Swift template app no longer defines a RootViewController class. Instead, it uses SwiftUI views and models with Combine extensions to accomplish the same goals, as described in [Native Swift Template](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_native_swiftui_template.htm).

## Objective-C Implementation

In Objective-C, the RootViewController class inherits UITableViewController and implements the SFRestDelegate protocol. The action begins with an override of the viewDidLoad method of UIViewController:

```

```

After calling the superclass method and setting the view’s title, the app creates and sends its REST request. Notice that the requestForQuery and send:delegate: messages are sent to a singleton shared instance of the SFRestAPI class. You use this singleton object for all REST requests.

After the apps sends the REST request, Salesforce responds by passing status messages and, hopefully, data to the delegate listed in the send:delegate: message. In this case, the delegate is the RootViewController object itself:

```

```

For handling REST responses, the Objective-C RootViewController uses the SFRestDelegate protocol instead of the sendRestRequest:failBlock:completeBlock: block method. The response arrives in one of the SFRestDelegate callback methods. For successful requests, the code handles Salesforce data in the request:didSucceed:rawResponse: callback:

```

```

As the use of the id data type suggests, this code handles JSON responses in generic Objective-C terms. It addresses the jsonResponse object as an instance of NSDictionary and treats its records as an NSArray object. Because RootViewController implements UITableViewController, it’s simple to populate the table in the view with extracted records.

#### See Also

-   [Handling REST Responses](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_rest_apis_SFRestDelegate.htm)

## Code Examples

```
- (void)viewDidLoad
{
    [super viewDidLoad];
    self.title = @"Mobile SDK Sample App";
    
    SFRestRequest *request =
        [[SFRestAPI sharedInstance] 
            requestForQuery:@"SELECT Name FROM Contact LIMIT 10" 
                 apiVersion:kSFRestDefaultAPIVersion];
    [[SFRestAPI sharedInstance] send:request delegate:self];
}
```

```
[[SFRestAPI sharedInstance] send:request delegate:self];
```

```
- (void)request:(SFRestRequest *)request 
     didSucceed:(id)jsonResponse 
    rawResponse:(NSURLResponse *)rawResponse {

    NSArray *records = jsonResponse[@"records"];
    [SFLogger d:[self class]
         format:@"request:didLoadResponse: #records: %lu", 
             (unsigned long)records.count];
    self.dataRows = records;
    dispatch_async(dispatch_get_main_queue(), ^{
        [self.tableView reloadData];
    });
}
```

## Related Topics

- Native Swift Template (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_native_swiftui_template.htm)
- Handling REST Responses (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/ios_rest_apis_SFRestDelegate.htm)
