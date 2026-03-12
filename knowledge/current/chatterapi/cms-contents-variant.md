---
title: "CMS Contents Variant"
domain: chatterapi
topic: cms-contents-variant
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.795Z
estimatedTokens: 422
keywords: [CMS, Contents, Variant, managed, content]
---

# CMS Contents Variant

> Get, update, or delete a managed content variant.

# CMS Contents Variant

Get, update, or delete a managed content variant.

Resource

```

```

Available version

54.0

HTTP methods

GET, PUT, DELETE

In version 56.0 and later, you can upload binary files. To upload a binary file, you must send it in a multipart/form-data request. For information about how to create the multipart/form-data message, see [Uploading Binary Files](atlas.en-us.chatterapi.meta/chatterapi/intro_input.htm#cc_upload_binary_files).

Request body for PUT

Root XML tag

<managedContentVariantUpdateInputRepresentation>

JSON example for version 60.0 and later

```

```

JSON example for version 54.0–59.0

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| apiName | String | API name of the managed content variant. | Optional | 63.0 |
| contentBody | Managed Content Body Input in version 60.0 and laterMap<String, Object> in version 54.0–59.0 | Body of the managed content variant. | Optional | 54.0 |
| title | String | Title of the managed content variant. | Optional | 54.0 |
| urlName | String | URL name of the managed content variant within the org. | Optional | 54.0 |

Response body for GET and PUT

[Managed Content Variant](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_variant.htm "Managed content variant.")

Response for DELETE

[204: Successful Delete](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.")

## Code Examples

```
/connect/cms/contents/variants/variantId
```

```
{
  "title":"Title of Document",
  "urlName":"test-url",
  "contentBody" : {
    "bannerImage": { 
      "source": { 
        "type": "imageReference", 
        "ref": { 
           "contentKey": "MCZOCY2AM5PFBADN5UDRB53TLXR4" 
        } 
      }
    },
    "excerpt":"this is test excerpt",
    "body":"&lt;p&gt;Test body&lt;/p&gt;"
  }
}
```

```
{
  "title": "My Updated Title",
  "urlName": "my_updated_url_name",
  "contentBody": {
     "bannerImage":"MCZOCY2AM5PFBADN5UDRB53TLXR4",
     "featuredEvent":"MCZOCY2AM5PFBADN5UDRB53TLXR4",
     "excerpt":"this is my updated excerpt",
     "body":"&lt;p&gt;Test updated body&lt;/p&gt;"
     }
}
```

## Related Topics

- Uploading Binary Files (atlas.en-us.chatterapi.meta/chatterapi/intro_input.htm)
- Managed Content Body Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_managed_content_body_input_rep.htm)
- Managed Content Variant (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_variant.htm)
- 204: Successful Delete (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
