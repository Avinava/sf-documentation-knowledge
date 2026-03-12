---
title: "Retrieving Records with"
domain: pages
topic: retrieving-records-with
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:24.120Z
estimatedTokens: 613
keywords: [Retrieving, Records, Retrieve, calling, Remote, Objects, model, instance]
---

# Retrieving Records with

> Retrieve records by calling retrieve() on a
		Remote Objects model instance.

# Retrieving Records with

Retrieve records by calling retrieve() on a Remote Objects model instance.

retrieve() requires two arguments, one for query criteria and one for a callback handler.

```

```

criteria can be a Remote Objects query object or a function that returns one. The following two calls are equivalent.

```

```

See [Format and Options for Query Criteria Query Criteria](atlas.en-us.pages.meta/pages/pages_remote_objects_using_retrieve_query_object.htm "Remote Objects uses an object to specify criteria for retrieve() operations. Use this object to specify where, limit, and offset conditions for your queries.") for an explanation of the query object.

retrieve() doesn’t return a result directly. The callback function enables you to handle the server response asynchronously.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

All server operations that use Remote Objects are performed asynchronously. Any code that depends on the request being completed, including handling returned results, must be placed in the callback function.

Your callback function can accept up to three arguments.

```

```

See [Callback Functions Callback Functions](atlas.en-us.pages.meta/pages/pages_remote_objects_callback_functions.htm "Remote Objects sends all requests to the Salesforce service asynchronously. Your code handles responses to Remote Objects operations in a callback function that you provide. Callback functions handle updating the page with the results of the operation and errors that are returned.") for details about writing Remote Objects callback functions.

To retrieve records using dates, pass in the JavaScript date object to the query.

```

```

#### See Also

-   [Format and Options for Query Criteria Query Criteria](atlas.en-us.pages.meta/pages/pages_remote_objects_using_retrieve_query_object.htm "Remote Objects uses an object to specify criteria for retrieve() operations. Use this object to specify where, limit, and offset conditions for your queries.")

-   [Callback Functions Callback Functions](atlas.en-us.pages.meta/pages/pages_remote_objects_callback_functions.htm "Remote Objects sends all requests to the Salesforce service asynchronously. Your code handles responses to Remote Objects operations in a callback function that you provide. Callback functions handle updating the page with the results of the operation and errors that are returned.")

## Code Examples

```
RemoteObjectModel.retrieve({criteria}, callback_function)
```

```
var ct = new RemoteObjectModel();

// Empty callback functions for simplicity
ct.retrieve({where: {FirstName: {eq: 'Marc' }}}, function() {}); // query object

ct.retrieve(function(){
	return({where: {FirstName: {eq: 'Marc' }}});
}, function() {}); // function returning query object
```

```
function callback(Error error, Array results, Object event) { // ... }
```

```
var myDate = new Date('2017-01-20');
ct.retrieve({where: {CloseDate: {eq: myDate}}}, function() {});
```

## Related Topics

- Format and Options for Query Criteria Query Criteria (atlas.en-us.pages.meta/pages/pages_remote_objects_using_retrieve_query_object.htm)
- Callback Functions Callback Functions (atlas.en-us.pages.meta/pages/pages_remote_objects_callback_functions.htm)
