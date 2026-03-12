---
title: "Data Types in AJAX Toolkit"
domain: ajax
topic: data-types-in-ajax-toolkit
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:56.583Z
estimatedTokens: 284
keywords: [Data, AJAX, Toolkit, strings, needed, convert, appropriate, datatype, functions, supplied]
---

# Data Types in AJAX Toolkit

> The AJAX Toolkit returns all data as strings. If needed, you can convert the data into an
  appropriate datatype by using one of the functions supplied with the returned object.

# Data Types in AJAX Toolkit

The AJAX Toolkit returns all data as strings. If needed, you can convert the data into an appropriate datatype by using one of the functions supplied with the returned object.

-   getDate maps dates to JavaScript Date.
-   getDateTime maps dateTime values to JavaScript Date.
-   getInt maps integer values to JavaScript Int.
-   getFloat maps float values to JavaScript Float.
-   getBoolean maps boolean values to JavaScript Boolean.
-   getArray retrieves arrays of values.
-   getBase64Binary returns the decoded value of a Base64 binary encoded string. This is typically used for working with documents and attachments. See [Working with Base64 Binary Encoded Strings](atlas.en-us.ajax.meta/ajax/sforce_api_ajax_base64issue.htm "When working with Base64 encoded binary documents, access the document directly using the Id, rather than decoding Base64 in JavaScript.") for more information.

If you request a field whose value is null in a query, the returned value will be null. If you do not request a field, whether the value is null or not, the value is not returned, and is therefore undefined.

## Related Topics

- Working with Base64 Binary Encoded Strings (atlas.en-us.ajax.meta/ajax/sforce_api_ajax_base64issue.htm)
