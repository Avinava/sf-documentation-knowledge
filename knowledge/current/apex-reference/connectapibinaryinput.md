---
title: "ConnectApi.BinaryInput"
domain: apex-reference
topic: connectapibinaryinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.825Z
keywords: [ConnectApi.BinaryInput, See]
---

# ConnectApi.BinaryInput

# ConnectApi.BinaryInput

Create a ConnectApi.BinaryInput object to attach files to feed items and comments, to add repository files, to create managed content, and to replace managed content variants.

The constructor is:

```

```

The constructor takes these arguments:

| Argument | Type | Description | Available Version |
| --- | --- | --- | --- |
| blob | Blob | Contents of the file to be used for input | 28.0 |
| contentType | String | MIME type description of the content, such as image/jpg | 28.0 |
| filename | String | File name with the file extension, such as UserPhoto.jpg | 28.0 |

#### See Also

-   [Post a Feed Element with a New File (Binary) Attachment](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectapi_examples_post_feed_element_binary.htm "Post a Feed Element with a New File (Binary) Attachment - HTML (New Window)")
    
-   [Post a Comment with a New File](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectapi_examples_post_comment_feed_element_3.htm "Post a Comment with a New File - HTML (New Window)")
    
-   [ConnectApi.BatchInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_batch.htm "Construct a set of inputs to be passed into a method at the same time.")