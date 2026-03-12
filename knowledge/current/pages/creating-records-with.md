---
title: "Creating Records with"
domain: pages
topic: creating-records-with
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:24.106Z
estimatedTokens: 652
keywords: [Creating, Records, record, calling, Remote, Objects, model, instance]
---

# Creating Records with

> Create a record by calling create() on a Remote
        Objects model instance.

# Creating Records with

Create a record by calling create() on a Remote Objects model instance.

create() accepts two arguments, both optional.

```

```

The field\_values block enables you to define and create a record in one statement. Set field values as you do when you create a model, using a JSON string. For example, the following two calls to create() are equivalent.

```

```

create() doesn’t return a result directly. The callback function enables you to handle the server response asynchronously.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

All server operations that use Remote Objects are performed asynchronously. Any code that depends on the request being completed, including handling returned results, must be placed in the callback function.

Your callback function can accept up to three arguments.

```

```

See [Callback Functions Callback Functions](atlas.en-us.pages.meta/pages/pages_remote_objects_callback_functions.htm "Remote Objects sends all requests to the Salesforce service asynchronously. Your code handles responses to Remote Objects operations in a callback function that you provide. Callback functions handle updating the page with the results of the operation and errors that are returned.") for details about writing Remote Objects callback functions.

The Id field is set on the Remote Object as part of a successful create() call. You can access this field in your callback function.

```

```

Note the use of the log() function; it’s the equivalent of toString() for Remote Objects.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

For clarity, this example uses a global variable, ct, which isn’t a best practice. See [Callback Functions Callback Functions](atlas.en-us.pages.meta/pages/pages_remote_objects_callback_functions.htm "Remote Objects sends all requests to the Salesforce service asynchronously. Your code handles responses to Remote Objects operations in a callback function that you provide. Callback functions handle updating the page with the results of the operation and errors that are returned.") for better techniques.

#### See Also

-   [Callback Functions Callback Functions](atlas.en-us.pages.meta/pages/pages_remote_objects_callback_functions.htm "Remote Objects sends all requests to the Salesforce service asynchronously. Your code handles responses to Remote Objects operations in a callback function that you provide. Callback functions handle updating the page with the results of the operation and errors that are returned.")

## Code Examples

```
RemoteObjectModel.create({field_values}, callback_function)
```

```
var ctDetails = { FirstName: 'Marc', LastName: 'Benioff' };

// Call create() on an existing Contact model, with no arguments
var ct = new RemoteObjectModel.Contact(ctDetails);
ct.create();

// Call create() on an empty Contact model, passing in field values
var ct = new RemoteObjectModel.Contact();
ct.create(ctDetails);
```

```
function callback(Error error, Array results, Object event) { // ... }
```

```
var ctDetails = { FirstName: 'Marc', LastName: 'Benioff' };
var ct = new RemoteObjectModel.Contact();
ct.create(ctDetails, function(err) {
    if(err) { 
        console.log(err);
        alert(err.message);
    }
    else {
        // this is the contact
        console.log(ct.log());     // Dump contact to log
        console.log(ct.get('Id')); // Id is set when create completes
    }
});
```

## Related Topics

- Callback Functions Callback Functions (atlas.en-us.pages.meta/pages/pages_remote_objects_callback_functions.htm)
