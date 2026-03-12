---
title: "Callback Functions Callback Functions"
domain: pages
topic: callback-functions-callback-functions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:24.065Z
estimatedTokens: 744
keywords: [Callback, Functions, Remote, Objects, requests, Salesforce, service, asynchronously, code, handles, responses, operations, function, provide, handle]
---

# Callback Functions Callback Functions

> Remote Objects sends all requests to the Salesforce service asynchronously. Your code
        handles responses to Remote Objects operations in a callback function that you provide.
        Callback functions handle updating the page with the results of the operation and errors
        that are returned.

# Callback Functions Callback Functions

Remote Objects sends all requests to the Salesforce service asynchronously. Your code handles responses to Remote Objects operations in a callback function that you provide. Callback functions handle updating the page with the results of the operation and errors that are returned.

Callback functions are a standard technique in JavaScript for handling events and asynchronous operations. Remote Objects uses this pattern to handle the response of its asynchronous operations. When you invoke a Remote Objects operation, you provide the parameters of the operation and, optionally, a callback function. Your JavaScript code continues uninterrupted after you invoke the operation. When the remote operation is completed and results are returned, your callback function is invoked and receives the results of the operation.

Remote Objects callback functions can be written to receive up to three arguments.

```

```

| Name | Type | Description |
| --- | --- | --- |
| error | JavaScript Error object | A standard JavaScript Error object. If the operation succeeded, error is null. Use error.message to retrieve the reason for a failure. |
| results | JavaScript array | An array that contains the results of the operation. If the operation was a retrieve(), the results are instances of the appropriate Remote Objects. Otherwise, the array contains strings that represent the Ids of affected records. |
| event | JavaScript object | A JavaScript object that provides the details of the JavaScript remoting event transporting the Remote Objects operation. |

Most callback functions check for errors and then take an action with the results. The event object is typically used only in debugging and sophisticated error management.

## Example

Here’s a straightforward callback function, which handles the results of a retrieve() operation.

```

```

In this sample, getAllContacts() calls retrieve() and passes an anonymous function as the callback. The callback function checks for errors and then uses jQuery to iterate through the array of result records, adding them to the page. Some details are omitted to focus on the callback structure. See [An Example of Using with jQuery Mobile with jQuery Mobile](atlas.en-us.pages.meta/pages/pages_remote_objects_example_extended.htm "Visualforce Remote Objects is designed to “blend” well with JavaScript frameworks. This extended but simple example shows how to use Remote Objects with jQuery Mobile to view a list of contacts and to add, edit, and delete them.") for the complete page source code.

#### See Also

-   [An Example of Using with jQuery Mobile with jQuery Mobile](atlas.en-us.pages.meta/pages/pages_remote_objects_example_extended.htm "Visualforce Remote Objects is designed to “blend” well with JavaScript frameworks. This extended but simple example shows how to use Remote Objects with jQuery Mobile to view a list of contacts and to add, edit, and delete them.")

## Code Examples

```
function callback(Error error, Array results, Object event) { // ... }
```

```
function getAllContacts() {
    $j.mobile.showPageLoadingMsg();
    
    var c = new RemoteObjectModel.Contact();
    c.retrieve({ limit: 100 }, function (err, records) { 
        // Handle errors
        if (err) { 
            displayError(err); 
        } else {
            // Add the results to the page
            var list = $j(Config.Selectors.list).empty();
            $j.each(records, function() {
                var newLink = $j('<a>'+this.get('FirstName')+' '+this.get('LastName')+'</a>');
                newLink.appendTo(list).wrap('<li></li>');
            });
            
            $j.mobile.hidePageLoadingMsg();
            list.listview('refresh');
        }
    });
}
```

## Related Topics

- An Example of Using with jQuery Mobile with jQuery Mobile (atlas.en-us.pages.meta/pages/pages_remote_objects_example_extended.htm)
