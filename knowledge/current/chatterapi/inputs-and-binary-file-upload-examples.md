---
title: "Inputs and Binary File Upload Examples"
domain: chatterapi
topic: inputs-and-binary-file-upload-examples
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:21.813Z
estimatedTokens: 3055
keywords: [Inputs, Binary, File, Upload, Examples, HTTP, POST, PATCH, PUT, requests, uploading, files, Input, feed, element]
---

# Inputs and Binary File Upload Examples

> Make HTTP POST, PATCH, and PUT requests using inputs and learn more about uploading
    binary files.

# Inputs and Binary File Upload Examples

Make HTTP POST, PATCH, and PUT requests using inputs and learn more about uploading binary files.

## Using POST, PATCH, or PUT for Input

When you make a request using the HTTP POST, PATCH, and PUT methods, you can use request parameters or a request body. The request body can contain JSON or XML. If you pass resource-specific request parameters and a request body, the request parameters are ignored. Request parameters that aren’t specific to a resource, such as parameters in a bearer token URL and the \_HttpMethod parameter, are processed along with the request body. Use bearer token parameters as they are. Don’t add or remove parameters.

To submit a request using request parameters, use a Content-Type header field with the value application/x-www-form-urlencoded.

To submit a request using a request body, use one of these values in a Content-Type header field and in an Accept header field.

-   application/json
-   application/xml

## Uploading Binary Files

To upload a binary file up to 2 GB (including headers), up to 75 MB for an external repository, or up to 512 MB for bulk conversations, send it as a body part in a multipart/form-data request. You can send the text of a comment (but not a post) as a JSON or XML rich input body part in the same multipart/form-data request. Alternately, you can choose to send that information in request parameters. If you pass both a rich input request body and request parameters, the request parameters are ignored.

To upload multiple binary files in the same call, see [Batch Resource](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_batch.htm "Create a request body with a batch of up to 25 subrequests and send them to the server in a single request to improve your application’s performance. The response bodies and HTTP statuses for each subrequest in the batch are returned within a single response body. Each subrequest counts against rate limits.").

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=chatterapi)

#### Important

In version 36.0 and later, you can’t create a feed post and upload a binary file in the same request. [Upload files to Salesforce](#fileDataExample) first, and then use the file IDs to attach one or more files to a feed post.

To create a multipart/form-data request, in the head of the request, set the Content-Type HTTP header to multipart/form-data.

For information about HTTP headers, see [W3C Form content types](http://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.2), and [RFC 2388](http://tools.ietf.org/html/rfc2388), which defines the multipart/form-data internet media type.

This table describes the HTTP headers and parameters required in the rich input body part of a multipart/form-data request.

| HTTP Headers for Rich Input Body Part | Header Value and Parameters | Description |
| --- | --- | --- |
| Content-Disposition | form-data; name="json"form-data; name="xml" | The request body for a post or comment.For JSON, the value of name use "json".For XML, the value of name use "xml". |
| Content-Type | application/json; charset=UTF-8application/xml; charset=UTF-8 | The data format and character set of the request body.For JSON, the value must be application/json.For XML, the value must be application/xml. |

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=chatterapi)

#### Tip

Web browsers are typically incapable of making multipart requests when the non-binary parts, such as rich input bodies, have their own Content-Type. To work around this issue, specify a certain Content-Disposition name and Salesforce can read the Content-Type of the rich input part. (You don’t have to specify a Content-Type for the rich input body.)

This table describes the HTTP headers and parameters required in the rich input body part of a multipart/form-data request from a web browser.

| HTTP Headers for Rich Input Body Part from Web Browser | Header Value and Parameters | Description |
| --- | --- | --- |
| Content-Disposition | form-data; name="feedElement" | To post a feed element with a binary file (in version 35.0 and earlier), the value of name must be "feedElement". |
| form-data; name="comment" | To post a comment with a binary file, the value of name must be "comment". |
| form-data; name="photo" | To upload an employee, user, or group photo, the value of name must be "photo". |
| form-data; name="file" | To upload a file to the Files home or an external repository, the value of name must be "file". |
| form-data; name="folderItem" | To upload a file to a folder, the value of name must be "folderItem". |
| form-data; name="ManagedContentInputParam" | To upload a piece of managed content, the value of name must be "ManagedContentInputParam". |
| form-data; name="ManagedContentVariantInputParam" | To update a managed content variant, the value of name must be "ManagedContentVariantInputParam". |

This table describes the HTTP headers and parameters required in the binary upload body part of a multipart/form-data request.

| HTTP Headers for Binary Upload Body Part | Header Value and Parameters | Description |
| --- | --- | --- |
| Content-Disposition | form-data; name="feedElementFileUpload"; filename=string | To post a feed element with a binary file (in version 35.0 and earlier), the value of name must be "feedElementFileUpload".To post a comment with a binary file, the value of name must be "feedElementFileUpload". |
| form-data; name="fileUpload" filename=string | To upload a user or group photo, the value of name must be "fileUpload". |
| form-data; name="fileData" filename=string | To upload a file to the Files home or to upload a file to an external repository, the value of name must be "fileData".NoteSpecify a filename parameter and value. However, Salesforce uses the value of the title property of the File Input or the metadata of the Files Connect Item Input as the file name, not the value of the filename parameter. |
| form-data; name="audioFileData" filename=string | To upload an audio file, the value of name must be "audioFileData". If you specify this value, don’t specify recordingURL or name or the request will fail. |
| form-data; name="contentData" filename=string | To upload a piece of managed content or update a managed content variant, the value of name must be "contentData". |
| Content-Type | application/octet-stream; charset=ISO-8859-1 | The media type and character set of the binary file. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

Spacing and carriage returns and line feeds (CRLF) are important. For example, this line requires spaces: Content-Disposition: form-data; name="feedItemFileUpload"; title="2012\_q1\_review.ppt". If you used CRLF instead of spaces, you would receive an error.

## Post a feed element with a binary file (version 35.0 and earlier)

This example uses the [/chatter/feed-elements](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element.htm "Post feed elements and search all feed elements in an organization.") resource to post a new feed item (which is a type of feed element), upload a binary file, and attach it to the new feed item. This example uses cURL.

```

```

Here is the same example in a different format so you can see the request body parts.

```

```

## Post a batch of feed elements with binary files (version 35.0 and earlier)

This example uses the [/chatter/feed-elements/batch](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element_batch_post.htm "Post a batch of up to 500 feed elements.") resource to post a batch of feed elements, upload two binary files, and attach them to the feed elements in the batch. Include the information about the binary parts in the request body. This example uses cURL.

```

```

Here is the same example formatted to show the request body parts.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

The binary part names in the binaryPartNames properties must match the binary part names in the name properties of the binary request parts.

## Post a comment with a binary file

This example uses the [/chatter/feed-elements/feedElementId/capabilities/comments/items](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element_capability_comments_items.htm "Access comments for a feed element, or add a comment to a feed element.") resource to post a comment to a feed item and upload a binary attachment using cURL.

```

```

Here is the sample example formatted to see the request body parts.

```

```

## Post multiple comments with binary files

This example is a generic batch request to [/connect/batch](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_batch.htm "Create a request body with a batch of up to 25 subrequests and send them to the server in a single request to improve your application’s performance. The response bodies and HTTP statuses for each subrequest in the batch are returned within a single response body. Each subrequest counts against rate limits.") that contains two subrequests. Each subrequest comments on a feed item and uploads a binary file to the comment.

Include the request body of each subrequest in the richInput properties.

Also include information about the binary parts in the binaryPartName and binaryPartNameAlias properties.

Here is the cURL example.

```

```

Here is the multipart/form-data request body.

```

```

## Upload and crop a user photo

This example uses the [/connect/user-profiles/userId/photo](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_user_profiles_photo.htm "The user profile photo. Get, post, and crop the photo.") resource to upload a user profile photo and crop it using cURL.

```

```

Here is the same example formatted to see the request body parts.

```

```

## Upload a file to the Files home

This example uses the [/connect/files/users/userId](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_users_files_general.htm "Upload a file, including references to external files, to the Files home or get information about files a user owns. These files don’t include files shared with a user, files a user follows, or general organization files.") resource to upload a file to the Files home using cURL.

```

```

Here is the same example formatted to see the request body parts.

```

```

## Upload a file to an external repository

This example uses the [/connect/content-hub/repositories/repositoryId/folders/repositoryFolderId/items](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_content_hub_repository_folder_items.htm "Get information about the files and folders in a repository folder. Create a file in a repository folder.") resource to upload a file to an external repository using cURL.

```

```

Here is the same example formatted to see the request body parts.

```

```

## Upload an audio file

This example uses the [/voicecalls/voiceCallId/audio\_upload](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_voice_call_audio_upload.htm "Upload an audio recording of a voice call.") resource to upload an audio file using cURL.

```

```

## Upload an audio file from a third-party vendor

This example uses the [/voicecalls/voiceCallId/audio\_upload](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_voice_call_audio_upload.htm "Upload an audio recording of a voice call.") resource to upload an audio file using cURL.

```

```

## Upload a piece of managed content

This example uses the [/connect/cms/contents](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_cms_contents.htm "Create managed content.") resource to upload a piece of managed content. This resource is available only for enhanced CMS workspaces.

```

```

## Update a managed content variant

This example uses the [/connect/cms/contents/variants/variantId](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_cms_contents_variant.htm "Get, update, or delete a managed content variant.") resource to update a managed content variant. This resource is available only for enhanced CMS workspaces.

```

```

## Code Examples

```
curl -H "X-PrettyPrint: 1" -F 'json={ "body":{ "messageSegments":[ { "type":"Text", "text":"Please accept this receipt." } ] }, 
"capabilities":{ "content":{ "description":"Receipt for expenses", "title":"receipt.pdf" } }, "feedElementType":"FeedItem", "subjectId":"005RR000000DmOb" };
type=application/json' -F "feedElementFileUpload=@receipt.pdf;type=application/octet-stream"
 -X POST https://instance_name/services/data/v35.0/chatter/feed-elements 
-H 'Authorization: OAuth 00DRR0000000N0g!...' --insecure
```

```
POST /services/data/v35.0/chatter/feed-elements HTTP/1.1
Authorization: OAuth 00DRR0000000N0g!...
User-Agent: Jakarta Commons-HttpClient/3.0.1
Host: instance_name
Content-Length: 845
Content-Type: multipart/form-data; boundary=a7V4kRcFA8E79pivMuV2tukQ85cmNKeoEgJgq
Accept: application/json

--a7V4kRcFA8E79pivMuV2tukQ85cmNKeoEgJgq
Content-Disposition: form-data; name="json"
Content-Type: application/json; charset=UTF-8

{
   "body":{
      "messageSegments":[
         {
            "type":"Text",
            "text":"Please accept this receipt."
         }
      ]
   },
   "capabilities":{
      "content":{
         "description":"Receipt for expenses",
         "title":"receipt.pdf"
      }
   },
   "feedElementType":"FeedItem",
   "subjectId":"005RR000000DmOb"
}

--a7V4kRcFA8E79pivMuV2tukQ85cmNKeoEgJgq
Content-Disposition: form-data; name="feedElementFileUpload"; filename="receipt.pdf"
Content-Type: application/octet-stream; charset=ISO-8859-1

...contents of receipt.pdf...

--a7V4kRcFA8E79pivMuV2tukQ85cmNKeoEgJgq--
```

```
curl -H "X-PrettyPrint: 1" -F 'json={"inputs":[{"binaryPartNames":["bin1"], "richInput":{"subjectId":"me","body":{
"messageSegments":[{"type":"Text","text":"Please accept this receipt"}]},"capabilities": {"content" : {"description": "Receipt for expenses", "title":"receipt.pdf"}},"feedElementType":"FeedItem"}},
{"binaryPartNames":["bin2"],"richInput":{"subjectId":"me","body":{"messageSegments":[{"type":"Text","text":"Post Number 2"}]},
"capabilities": {"content" : {"description": "Receipt for expenses", "title":"receipt2.pdf"}},"feedElementType":"FeedItem"}}]};type=application/json' 
-F "bin1=@/Users/jsmith/Desktop/receipt.pdf;type=application/octet-stream" -F "bin2=@/Users/jsmith/Desktop/receipt2.pdf;type=application/octet-stream" 
-X POST https://instance_name/services/data/v35.0/chatter/feed-elements/batch 
-H 'Authorization: OAuth 00DD00000007HoR44QATPNzhzYEJBfU' --insecure
```

```
POST /services/data/v35.0/chatter/feed-elements/batch HTTP/1.1
Authorization: OAuth 00DRR0000000N0g!...
User-Agent: Jakarta Commons-HttpClient/3.0.1
Host: instance_name
Content-Length: 845
Content-Type: multipart/form-data; boundary=a7V4kRcFA8E79pivMuV2tukQ85cmNKeoEgJgq
Accept: application/json

--a7V4kRcFA8E79pivMuV2tukQ85cmNKeoEgJgq
Content-Disposition: form-data; name="json"
Content-Type: application/json; charset=UTF-8

{
  "inputs": [
    {
      "binaryPartNames": [
        "bin1"
      ],
      "richInput": {
        "subjectId": "me",
        "body": {
          "messageSegments": [
            {
              "type": "Text",
              "text": "Please accept this receipt"
            }
          ]
        },
        "capabilities": {
          "content": {
            "description": "Receipt for expenses",
            "title": "receipt.pdf"
          }
        },
        "feedElementType": "FeedItem"
      }
    },
    {
      "binaryPartNames": [
        "bin2"
      ],
      "richInput": {
        "subjectId": "me",
        "body": {
          "messageSegments": [
            {
              "type": "Text",
              "text": "Post Number 2"
            }
          ]
        },
        "capabilities": {
          "content": {
            "description": "Receipt for expenses",
            "title": "receipt2.pdf"
          }
        },
        "feedElementType": "FeedItem"
      }
    }
  ]
}

--a7V4kRcFA8E79pivMuV2tukQ85cmNKeoEgJgq
Content-Disposition: form-data; name="bin1"; filename="receipt.pdf"
Content-Type: application/octet-stream; charset=ISO-8859-1

...contents of receipt.pdf...


--a7V4kRcFA8E79pivMuV2tukQ85cmNKeoEgJgq
Content-Disposition: form-data; name="bin2"; filename="receipt2.pdf"
Content-Type: application/octet-stream; charset=ISO-8859-1

...contents of receipt2.pdf...

--a7V4kRcFA8E79pivMuV2tukQ85cmNKeoEgJgq--
```

```
curl -H "X-PrettyPrint: 1" -F 'json={ "body":{ "messageSegments":[ { "type":"Text", "text":"Here's another receipt." } ] }, "capabilities":{ "content":{ "title":"receipt2" } } };
type=application/json' -F "feedElementFileUpload=@receipt2.txt;type=application/octet-stream" 
-X POST https://instance_name/services/data/v66.0/chatter/feed-elements/0D5RR0000004Grx/capabilities/comments/items 
-H 'Authorization: OAuth 00DRR0000000N0g!ARoAQB...' --insecure
```

## Related Topics

- Batch Resource (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_batch.htm)
- File Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_file_input.htm)
- Files Connect Item Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_content_hub_item_input.htm)
- /chatter/feed-elements (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element.htm)
- /chatter/feed-elements/batch (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element_batch_post.htm)
- /chatter/feed-elements/feedElementId/capabilities/comments/items (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element_capability_comments_items.htm)
- /connect/batch (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_batch.htm)
- /connect/user-profiles/userId/photo (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_user_profiles_photo.htm)
- /connect/files/users/userId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_users_files_general.htm)
- /connect/content-hub/repositories/repositoryId/folders/repositoryFolderId/items (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_content_hub_repository_folder_items.htm)
