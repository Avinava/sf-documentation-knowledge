---
title: "Custom File Download Examples"
domain: apex-guide
topic: custom-file-download-examples
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:33.951Z
estimatedTokens: 416
keywords: [Custom, File, Download, Examples, Apex, customize, behavior, files, upon, attempted, download., examples, assume, only, file, being, downloaded., download, customization, API]
---

# Custom File Download Examples

> You can use Apex to customize the behavior of files upon attempted download. These
        examples assume that only one file is being downloaded. File download customization is
        available in API version 39.0 and later.

# Custom File Download Examples

You can use Apex to customize the behavior of files upon attempted download. These examples assume that only one file is being downloaded. File download customization is available in API version 39.0 and later.

## Example

This example demonstrates a system that requires downloads to go through IRM control for some users. For a Modify All Data (MAD) user who’s allowed to download files, and whose user ID is 005xx:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

To refer to a MAD user profile, you can use UserInfo.getProfileId() instead of UserInfo.getUserId().

In this example, IRMControl is a Visualforce page created for displaying a link to download a file from the IRM system. You need a controller for this page that calls your IRM system. As it’s processing the file, it gives an endpoint to download the file when it’s controlled. Your IRM system uses the sObject API to get the VersionData of this ContentVersion. Therefore, the IRM system needs the VersionID and must retrieve the VersionData using the MAD user.

Your IRM system is at http://irmsystem and is expecting the VersionID as a query parameter. The IRM system returns a JSON response with the download endpoint in a downloadEndpoint value.

```

```

## Example

The following example creates a class that implements the ContentDownloadHandlerFactory interface and returns a download handler that prevents downloading a file to a mobile device.

```

```

## Example

You can also prevent downloading a file from a mobile device and require that a file must go through IRM control.

```

```

## Code Examples

```apex
// Allow customization of the content Download experience
public class ContentDownloadHandlerFactoryImpl implements Sfc.ContentDownloadHandlerFactory {

public Sfc.ContentDownloadHandler getContentDownloadHandler(List<ID> ids, Sfc.ContentDownloadContext context) {
    Sfc.ContentDownloadHandler contentDownloadHandler = new Sfc.ContentDownloadHandler();

    if(UserInfo.getUserId() == '005xx') {
        contentDownloadHandler.isDownloadAllowed = true;
        return contentDownloadHandler;
    }
    
    contentDownloadHandler.isDownloadAllowed = false;
    contentDownloadHandler.downloadErrorMessage = 'This file needs to be IRM controlled. You're not allowed to download it';
    contentDownloadHandler.redirectUrl ='/apex/IRMControl?Id='+ids.get(0);
    return contentDownloadHandler;
}
}
```

```apex
public class IRMController {
    
private String downloadEndpoint;
    
public IRMController() {
    downloadEndpoint = '';
}
    
public void applyIrmControl() {
    String versionId = ApexPages.currentPage().getParameters().get('id');
    Http h = new Http();

    //Instantiate a new HTTP request, specify the method (GET) as well as the endpoint
    HttpRequest req = new HttpRequest();
    req.setEndpoint('http://irmsystem?versionId=' + versionId);
    req.setMethod('GET');

    // Send the request, and retrieve a response
    HttpResponse r = h.send(req);
    JSONParser parser = JSON.createParser(r.getBody());
      while (parser.nextToken() != null) {
        if ((parser.getCurrentToken() == JSONToken.FIELD_NAME) &&
            (parser.getText() == 'downloadEndpoint')) {
                parser.nextToken();
                downloadEndpoint = parser.getText();
                break;
        }
    }
}
    
public String getDownloadEndpoint() {
    return downloadEndpoint;
}
    
}
```

```apex
// Allow customization of the content Download experience
public class ContentDownloadHandlerFactoryImpl implements Sfc.ContentDownloadHandlerFactory {

public Sfc.ContentDownloadHandler getContentDownloadHandler(List<ID> ids, Sfc.ContentDownloadContext context) {
    Sfc.ContentDownloadHandler contentDownloadHandler = new Sfc.ContentDownloadHandler();
    
    if(context == Sfc.ContentDownloadContext.MOBILE) {
        contentDownloadHandler.isDownloadAllowed = false;
        contentDownloadHandler.downloadErrorMessage = 'Downloading a file from a mobile device isn't allowed.';
        return contentDownloadHandler;
    }
    contentDownloadHandler.isDownloadAllowed = true;
    return contentDownloadHandler;
}
```

```apex
// Allow customization of the content Download experience
public class ContentDownloadHandlerFactoryImpl implements Sfc.ContentDownloadHandlerFactory {

public Sfc.ContentDownloadHandler getContentDownloadHandler(List<ID> ids, Sfc.ContentDownloadContext context) {
    Sfc.ContentDownloadHandler contentDownloadHandler = new Sfc.ContentDownloadHandler();

    if(UserInfo.getUserId() == '005xx000001SvogAAC') {
        contentDownloadHandler.isDownloadAllowed = true;
        return contentDownloadHandler;
    }
    if(context == Sfc.ContentDownloadContext.MOBILE) {
        contentDownloadHandler.isDownloadAllowed = false;
        contentDownloadHandler.downloadErrorMessage = 'Downloading a file from a mobile device isn't allowed.';
        return contentDownloadHandler;
    }
    
    contentDownloadHandler.isDownloadAllowed = false;
    contentDownloadHandler.downloadErrorMessage = 'This file needs to be IRM controlled. You're not allowed to download it';
    contentDownloadHandler.redirectUrl ='/apex/IRMControl?Id='+id.get(0);
    return contentDownloadHandler;
}
}
```
