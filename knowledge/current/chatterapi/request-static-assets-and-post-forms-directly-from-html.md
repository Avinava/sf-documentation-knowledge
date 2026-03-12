---
title: "Request Static Assets and Post Forms Directly from HTML"
domain: chatterapi
topic: request-static-assets-and-post-forms-directly-from-html
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:21.824Z
estimatedTokens: 791
keywords: [Assets, Post, Forms, Directly, HTML, pages, aren’t, hosted, Salesforce, had, difficulty, displaying, user, group, images]
---

# Request Static Assets and Post Forms Directly from HTML

> HTML pages that aren’t hosted on Salesforce have
                        had difficulty displaying user and group images and posting file attachments
                        in forms. The reason is that URLs for these assets require authentication,
                        which is provided with a session cookie when pages are hosted on Salesforce.
                        Pages not hosted on Salesforce don't have access to the session cookie.
                        Also, it isn’t possible to pass an OAuth token from the HTML contexts
                                <img>, <a>, and <form>.

# Request Static Assets and Post Forms Directly from HTML

HTML pages that aren’t hosted on Salesforce have had difficulty displaying user and group images and posting file attachments in forms. The reason is that URLs for these assets require authentication, which is provided with a session cookie when pages are hosted on Salesforce. Pages not hosted on Salesforce don't have access to the session cookie. Also, it isn’t possible to pass an OAuth token from the HTML contexts <img\>, <a\>, and <form\>.

To solve this problem, request self-authenticating bearer token URLs. A bearer token URL is a Connect REST API resource with an appended bearer token that provides access to the resource. Use bearer token URLs as they are. Don’t add or remove parameters or you receive an error. Use bearer token URLs in <img\>, <a\>, and <form\> tags to do the following:

-   Request static Connect REST API assets such as Chatter user profile images, files, and file and dashboard previews.
-   Post form requests to Connect REST API when files are attached, for example, feed items or comments with a file attachment, or user profile photo updates.

To request static assets or post form requests, request a resource that returns a bearer token URL. Then request the resource using the bearer token URL.

1.  Request a resource with a response body property that contains a bearer token URL.

    -   Banner Photo—bannerPhotoUrl, url\*
    -   Comment Page—currentPageUrl\*
    -   Content Capability—downloadUrl, externalDocumentUrl, renditionUrl, repositoryFileUrl
    -   Feed—feedElementPostUrl\*, feedElementsUrl\*, feedItemsUrl\*
    -   Feed Item—photoUrl
    -   Feed Item Attachment: Content—downloadUrl, externalDocumentUrl, renditionUrl, repositoryFileUrl
    -   Feed Item Attachment: Dashboard—fullSizeImageUrl, thumbnailUrl
    -   File Detail—downloadUrl, externalDocumentUrl, renditionUrl, renditionUrl240By180, renditionUrl720By480, repositoryFileUrl
    -   File Preview URL—previewUrl
    -   File Summary—downloadUrl, externalDocumentUrl, renditionUrl, renditionUrl240By180, renditionUrl720By480, repositoryFileUrl
    -   File Summary Page—currentPageUrl\*
    -   Icon—url
    -   Mention Completion—photoUrl
    -   Message Segment: Inline Image—url\*
    -   Photo—largePhotoUrl, smallPhotoUrl, url\*
    -   Repository File Detail—downloadUrl
    -   Repository File Summary—downloadUrl

    \*Use to POST or PUT new items that include binary files: for example, a feed item or comment with a file attachment.

2.  Pass the X-Connect-Bearer-Urls request header with a value of true.

    ```

    ```

3.  Parse the bearer token URL from the response body. Use it in an HTML tag to request a static asset or to post a form request.

    Bearer token URLs have the following characteristics.

    -   The bearer token is good for the given URL only. Adding or reordering query parameters invalidates the URL.
    -   The bearer token has a time-to-live (TTL) of 20 minutes. If the token expires, request it again.
    -   The request to the bearer token URL authenticates as the user who requested the resource that returned the bearer token URL.

## Code Examples

```
X-Connect-Bearer-Urls: true
```
