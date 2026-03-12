---
title: "Upserting Records with"
domain: pages
topic: upserting-records-with
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:24.134Z
estimatedTokens: 577
keywords: [Upserting, Records, Save, record, calling, upsert, Remote, Objects, model, instance]
---

# Upserting Records with

> Save a record by calling upsert() on a Remote
  Objects model instance.

# Upserting Records with

Save a record by calling upsert() on a Remote Objects model instance.

upsert() is a convenience function that updates a record if it exists and creates it if it doesn’t. Behind the scenes upsert() delegates to create() or update(). Use upsert() to write functions for your page or application that aren’t affected by whether a record is from a new input form or an edit record page.

upsert() accepts two arguments, both optional.

```

```

The field\_values block enables you to set the values and save a record in one statement. Set field values as you do when you create a model, using a JSON string. For example, the following two calls to upsert() are equivalent.

```

```

In the preceding example, it’s not clear if the contact exists in the database or if it’s a new contact that’s coming from an input form. upsert() handles the details. If there’s an Id field set on the contact, the contact will be updated. If there’s no Id, a new contact is created.

upsert() doesn’t return a result directly. The callback function enables you to handle the server response asynchronously.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

All server operations that use Remote Objects are performed asynchronously. Any code that depends on the request being completed, including handling returned results, must be placed in the callback function.

Your callback function can accept up to three arguments.

```

```

See [Callback Functions Callback Functions](atlas.en-us.pages.meta/pages/pages_remote_objects_callback_functions.htm "Remote Objects sends all requests to the Salesforce service asynchronously. Your code handles responses to Remote Objects operations in a callback function that you provide. Callback functions handle updating the page with the results of the operation and errors that are returned.") for details about writing Remote Objects callback functions.

#### See Also

-   [Creating Records with](atlas.en-us.pages.meta/pages/pages_remote_objects_using_create.htm "Create a record by calling create() on a Remote Objects model instance.")

-   [Updating Records with](atlas.en-us.pages.meta/pages/pages_remote_objects_using_update.htm "Update records by calling update() on a Remote Objects model instance.")

## Code Examples

```
RemoteObjectModel.upsert({field_values}, callback_function)
```

```
// Call upsert() on a Contact model, with no arguments
// ct is a RemoteObjectModel.Contact that already has data
ct.set('Phone', '(415) 777-1212');
ct.upsert();

// Call upsert() on a Contact model, passing in field values
// ct is a RemoteObjectModel.Contact that already has data
ct.upsert({Phone: '(415) 777-1212'});
```

```
function callback(Error error, Array results, Object event) { // ... }
```

## Related Topics

- Callback Functions Callback Functions (atlas.en-us.pages.meta/pages/pages_remote_objects_callback_functions.htm)
- Creating Records with (atlas.en-us.pages.meta/pages/pages_remote_objects_using_create.htm)
- Updating Records with (atlas.en-us.pages.meta/pages/pages_remote_objects_using_update.htm)
