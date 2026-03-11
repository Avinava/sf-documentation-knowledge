---
title: "ZIP Support"
domain: apex-guide
topic: zip-support
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:47.795Z
keywords: [ZIP, Support, See]
---

# ZIP Support

# ZIP Support

Take advantage of a native Apex Zip library to create and extract ZIP archive files by using the class methods in the Compression namespace.

You can compress multiple attachments or documents into an Apex blob that contains the ZIP archive. You can also specify the data to be extracted from the zip archive, without uncompressing the entire ZIP archive. To optimize compression, you can specify a compression method and compression level.

This example code extracts a JSON translation file from a callout response containing a ZIP archive by getting and extracting the specified entry from the ZIP archive.

HttpRequest request = new HttpRequest(); request.setEndpoint('callout:My\_Named\_Credential/translationService'); request.setMethod('POST'); // Set request payload to translate... HttpResponse response = new Http().send(request); Blob translationZip = response.getBodyAsBlob(); ZipReader reader = new ZipReader(translationZip); ZipEntry frTranslation = reader.getEntry('translations/fr.json'); Blob frTranslationData = reader.extractEntry(frTranslation);

#### See Also

-   [*Apex Reference Guide*: Compression NameSpace](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_namespace_Compression.htm "Apex Reference Guide: Compression NameSpace - HTML (New Window)")