---
title: "HTTP Properties Functions"
domain: mc-programmatic-content
topic: http-properties-functions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:28.184Z
estimatedTokens: 570
keywords: [HTTP, Functions, retrieve, various, platform, application, client, browser, passes, server, interaction, regarding, session, Additional]
---

# HTTP Properties Functions

> You can use the Request object to retrieve various types of HTTP Request object properties and platform application values. The client browser passes this information to the server during an HTTP interaction, so this object contains information regarding the browser and session. These methods return

# HTTP Properties Functions

You can use the Request object to retrieve various types of HTTP Request object properties and platform application values. The client browser passes this information to the server during an HTTP interaction, so this object contains information regarding the browser and session. These methods return a null value when no HTTP Request object exists or if the given value does not exist in the header object.

## Additional Properties

Use the properties listed below as part of your calls. Each property returns a specific value associated with the Request object. If no valid Request object exists, the property returns a null or false value as applicable:

-   Browser
    -   Returns the following metadata regarding the browser from the Request object as a JSON object:
        -   Platform
        -   Browser
        -   Version
        -   Major Version Number
        -   Minor Version Number
        -   {"Platform":"WinNT","Browser":"Firefox","Version":"9.0","MajorVersion":"9","MinorVersion":".0"}
-   ClientIP
    -   Returns the IP address of the requesting client as a string value
-   HasSSL
    -   Returns a Boolean value indicating whether the current Request object could support SSL (HTTPS) usage, even if not currently using SSL
-   IsSSL
    -   Returns a Boolean value indicating whether the current Request object used an SSL (HTTPS) connection
-   Method
    -   Returns the method associated with the Request object in a web context (such as GET or POST) in a string value
-   QueryString
    -   Returns the full query string for the Request object as a string value
-   ReferrerURL
    -   Returns the URL of the referring web address in a web context in a string value
-   RequestURL
    -   Returns the full URL of the Request object as a string value
-   UserAgent
    -   Returns the name of the browser associated with the Request object as a string value

## Example

This call redirects the browser from an HTTP to an HTTPS call if possible, as indicated by the IsSSL and HasSSL properties in the If clause of the call:

```
<script runat=server>
     if(!Platform.Request.IsSSL && Platform.Request.HasSSL)
          Plaform.Response.Redirect('https' + Platform.Request.RequestURL.substring(4), true);
</script>
```
