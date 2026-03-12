---
title: "Deleting Records with"
domain: pages
topic: deleting-records-with
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:24.110Z
estimatedTokens: 449
keywords: [Deleting, Records, calling, del, Remote, Objects, model, instance]
---

# Deleting Records with

> Delete records by calling del() on a Remote
        Objects model instance.

# Deleting Records with

Delete records by calling del() on a Remote Objects model instance.

del() accepts two arguments, both optional, and can delete one or many records, depending on the arguments that you provide.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

Why del() instead of delete()? delete is a reserved word in JavaScript.

```

```

record\_ids is an array of strings, where the strings are the Ids of records to be deleted. If this parameter is omitted, the Id that is set on the Remote Object instance is used. The simplest way to delete a record is to call del() on itself.

```

```

More often, you might need to delete a record in response to a button click. Deleting the record is as simple as getting the record’s Id from the page and then passing the Id to del(). For example:

```

```

Robust code includes a callback to handle errors. The following code accomplishes the same as the previous sample, altered to use an event handler and a callback function.

```

```

To delete multiple records in one request—for example, checked items from a list—pass an array of Ids to del().

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

When you delete multiple records this way, all of the records are deleted in the same server-side transaction.

#### See Also

-   [Callback Functions Callback Functions](atlas.en-us.pages.meta/pages/pages_remote_objects_callback_functions.htm "Remote Objects sends all requests to the Salesforce service asynchronously. Your code handles responses to Remote Objects operations in a callback function that you provide. Callback functions handle updating the page with the results of the operation and errors that are returned.")

## Code Examples

```
RemoteObjectModel.del([record_ids], callback_function)
```

```
ctDetails = {FirstName: "Tobe", LastName: "Ornottobe"};
ct = new RemoteObjectModel.Contact(ctDetails);
ct.create();

// After some thought, and the async operation completes...
// It's not to be; delete the contact
ct.del();
```

```
var id = $jQuery('#contactId').val();
var ct = new RemoteObjectModel.Contact();
ct.del(id);
```

```
// Handle the delete button click
function deleteContact(e){
    e.preventDefault();
    var ct = new RemoteObjectModel.Contact();
    ct.del($jQuery('#contactId').val(), updateCallback);
}

// Callback to handle DML Remote Objects calls
function updateCallback(err, ids){
    if (err) { 
        displayError(err); 
    } else {
        // Reload the contacts with current list
        getAllContacts();
        $jQuery.mobile.changePage('#listpage', {changeHash: true});
    }
}
```

```
var ct = new RemoteObjectModel.Contact();
ct.del(['003xxxxxxxxxxxxxxx', '003xxxxxxxxxxxxxxx'], function(err, ids) {
    if (err) { 
        displayError(err); 
    } else {
        // Reload the contacts with current list
        getAllContacts();
        $jQuery('#status').html(ids.length + ' record(s) deleted.');
        $jQuery.mobile.changePage('#listpage', {changeHash: true});
    }
});
```

## Related Topics

- Callback Functions Callback Functions (atlas.en-us.pages.meta/pages/pages_remote_objects_callback_functions.htm)
