---
title: "Working with Base64 Binary Encoded Strings"
domain: ajax
topic: working-with-base64-binary-encoded-strings
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:56.565Z
estimatedTokens: 256
keywords: [Working, Base64, Binary, Encoded, Strings, documents, access, document, directly, rather, decoding, JavaScript]
---

# Working with Base64 Binary Encoded Strings

> When working with Base64 encoded binary documents, access the document directly using
    the Id, rather than decoding Base64 in JavaScript.

# Working with Base64 Binary Encoded Strings

When working with Base64 encoded binary documents, access the document directly using the Id, rather than decoding Base64 in JavaScript.

Base64 encoding and decoding is very slow in JavaScript. Also, encoding and decoding does not work correctly for binary or multibyte strings. We do not recommend that you manipulate Base64 binary encoded strings with the AJAX Toolkit. However, if you want to read a document with Base64 binary encoding, you can use the API to query for the Id of the document and then download it directly from the server.

The following example demonstrates how to query for the document Id and then download it from the server.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=ajax)

#### Note

This example uses the JavaScript toolkit Dojo, which you’ll need to upload as a static resource, reference from a CDN, or otherwise provide. For more information, see [http://dojotoolkit.org/](http://dojotoolkit.org/).

## Code Examples

```
<html>
<head>
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/dojo/1.10.4/dojo/dojo.js"></script>
<script src="/soap/ajax/66.0/connection.js"></script>

<script>
function setup() {
  var document_ta = document.getElementById("document-ta");

  sforce.connection.query("select name, id from document limit 1",
    {onSuccess : querySuccess,
     onFailure : function(error, doc_ta) {
        doc_ta.value = "Oops something went wrong: " + error;
     },
     source: document_ta});
}

function querySuccess(result, doc_ta) {
  var records = result.getArray("records");

  if (records.length == 1) {
    dojo.io.bind({
      url: "/servlet/servlet.FileDownload?file=" + records[0].Id,
      load: loadDocument});
  } else {
    doc_ta.value = "no records found";
  }
}

function loadDocument(type, data, event) {
  var document_ta = document.getElementById("document-ta");
  document_ta.value = data;
}

</script>
</head>

<body onload="setup()">
<textarea id="document-ta" cols="80" rows="20">
</textarea>
</body>
</html>
```
