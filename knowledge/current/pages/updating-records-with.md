---
title: "Updating Records with"
domain: pages
topic: updating-records-with
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:24.130Z
estimatedTokens: 512
keywords: [Updating, Records, calling, Remote, Objects, model, instance]
---

# Updating Records with

> Update records by calling update() on a Remote
        Objects model instance.

# Updating Records with

Update records by calling update() on a Remote Objects model instance.

update() accepts three arguments, all optional, and can update one or many records at the same time, depending on the arguments that you provide.

```

```

record\_ids is an array of strings, where the strings are the Ids of records to be updated. If this parameter is omitted, the Id that is set on the Remote Object instance is used. The simplest way to update a record is to call update() on itself.

```

```

More often, you might need to update a record in response to a form submission. Updating the record can be as simple as reading some form values, including the record’s Id, and passing the values to update(). For example:

```

```

Robust code includes a callback to handle errors. The following code accomplishes the same as the previous sample, altered to use an event handler and a callback function.

```

```

You can update many records at the same time, as long as the update to be performed is uniform, that is, the same for every record. For example, you might need to update a collection of checked items from a list, to change a status field to “Archived” or a current timestamp. To update records in one request, pass an array of Ids to update(). The fields to be updated can be set as part of the Remote Object model itself, but it’s safer to pass them directly to update(), like this:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

When you update multiple records this way, all of the records are updated in the same server-side transaction.

#### See Also

-   [Callback Functions Callback Functions](atlas.en-us.pages.meta/pages/pages_remote_objects_callback_functions.htm "Remote Objects sends all requests to the Salesforce service asynchronously. Your code handles responses to Remote Objects operations in a callback function that you provide. Callback functions handle updating the page with the results of the operation and errors that are returned.")

## Code Examples

```
RemoteObjectModel.update([record_ids], {field_values}, callback_function)
```

```
ctDetails = {FirstName: "Marc", LastName: "Benioff"};
ct = new RemoteObjectModel.Contact(ctDetails);
ct.create();

// Later, in response to a page event...
ct.set('Phone', '555-1212');
ct.update();
```

```
var record = new RemoteObjectModel.Contact();
record.update($j('#contactId').val(),
{
    FirstName: $j('#fName').val(),
    LastName: $j('#lName').val(),
    Phone: $j('#phone').val(),
    Notes: $j('#notes').val() 
});
```

```
// Handle the Save button
function updateContact(e){
    e.preventDefault();

    var record = new RemoteObjectModel.Contact({
        Id: $jQuery('#contactId').val(),
        FirstName: $jQuery('#fName').val(),
        LastName: $jQuery('#lName').val(),
        Phone: $jQuery('#phone').val(),
        Notes: $jQuery('#notes').val() 
    });
    record.update(updateCallback);
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
ct.update(
    ['003xxxxxxxxxxxxxxx', '003xxxxxxxxxxxxxxx'], 
    { FirstName: "George", LastName: "Foreman" },
    function(err, ids) {
        if (err) { 
            displayError(err); 
        } else {
            // Reload the contacts with current list
            getAllContacts();
            $jQuery('#status').html(ids.length + ' record(s) updated.');
            $jQuery.mobile.changePage('#listpage', {changeHash: true});
        }
});
```

## Related Topics

- Callback Functions Callback Functions (atlas.en-us.pages.meta/pages/pages_remote_objects_callback_functions.htm)
