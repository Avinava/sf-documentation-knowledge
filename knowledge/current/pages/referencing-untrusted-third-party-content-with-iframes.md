---
title: "Referencing Untrusted Third-Party Content with iframes"
domain: pages
topic: referencing-untrusted-third-party-content-with-iframes
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:24.146Z
estimatedTokens: 449
keywords: [Referencing, Untrusted, Third-Party, Content, iframes, It’s, good, idea, isolate, resources, downloaded, source, iframe, separate, Visualforce]
---

# Referencing Untrusted Third-Party Content with iframes

> It’s a good idea to isolate static resources downloaded from an untrusted source. You can
            use an iframe to separate third-party content from your Visualforce page to provide an
            extra layer of security and help you protect your assets.

# Referencing Untrusted Third-Party Content with iframes

It’s a good idea to isolate static resources downloaded from an untrusted source. You can use an iframe to separate third-party content from your Visualforce page to provide an extra layer of security and help you protect your assets.

To reference a static HTML file on a separate domain, use $IFrameResource.<resource\_name> as a merge field, where resource\_name is the name you specified when you uploaded the resource. For example:

```

```

The iframe tag injects JavaScript into both the parent document and the child iframe to establish a secure communication between the two elements. The parent document can have multiple iframes. Each uniquely named static resource lives in its own subdomain of force-user-content.com.

Access to an iframe is not authenticated, so any third-party content it contains can’t access a user’s session ID.

## Communicating with the iframe in the Parent Document

You can write JavaScript code in the parent document to communicate with the iframe.

-   To send a message to theiframe:

    ```

    ```

-   To receive messages from theiframe:

    ```

    ```

-   To catch an error from theiframe:

    ```

    ```


## Communicating with the Parent Document in the iframe

You can also communicate the other way from the iframe document.

-   To send a message to the parent document:

    ```

    ```

-   To set up a handler to receive messages from the parent document:

    ```

    ```

    To remove this handler:

    ```

    ```

-   To set up a handler for message errors from the parent document:

    ```

    ```

    To remove this handler:

    ```

    ```

-   To set up a handler for other types of errors:

    ```

    ```

    To remove this handler:

    ```

    ```

## Code Examples

```
<apex:iframe src="{!$IFrameResource.TestHtml}" id ="theiframe" width="500" height="500"/>
```

```
SfdcApp.iframe.sendMessage('theiframe', {
    key1: value1, 
    key2: value2
});
```

```
SfdcApp.iframe.addMessageHandler('theiframe', function(data) {
    if(data.key1) {
        …
    }
});
```

```
SfdcApp.iframe.addErrorHandler('theiframe', function(error) {
    console.log(error);
});
```

```
LCC.onlineSupport.sendMessage('containerUserMessage', {
    key1: value1, 
    key2: value2
});
```
