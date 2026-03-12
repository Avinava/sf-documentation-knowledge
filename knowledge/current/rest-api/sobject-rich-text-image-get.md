---
title: "sObject Rich Text Image Get"
domain: rest-api
topic: sobject-rich-text-image-get
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:35.947Z
estimatedTokens: 497
keywords: [sObject, Rich, Text, Image, data, specific, area, record, uploaded]
---

# sObject Rich Text Image Get

> Gets the specified image data from a specific rich text area
   field in a given record. To get an image, you must have a record with an image uploaded to a
  rich text area field.

# sObject Rich Text Image Get

Gets the specified image data from a specific rich text area field in a given record. To get an image, you must have a record with an image uploaded to a rich text area field.

## Syntax

URI

/services/data/vXX.X/sobjects/sObject/id/richTextImageFields/fieldName/contentReferenceId

Formats

Binary data

HTTP Method

GET

Authentication

Authorization: Bearer token

Parameters

| Parameter | Description |
| --- | --- |
| sObjectName | Indicates the name of the standard object of the record. |
| id | The ID of the object. |
| fieldName | The name of the rich text area field. |
| contentReferenceId | The reference ID that uniquely identifies an image within a rich text area field.You can obtain the reference by retrieving information for the object. The description shows the contents of the rich text area field. For example:{    "attributes" : {       "type" : "Lead",       "url" : "/services/data/v66.0/sobjects/Lead/00QRM000003ZfDb2AK"    },    "Id" : "00QRM000003ZfDb2AK",    ...    "ContactPhoto__c" :     "Sarah Loehr and her two dogs.    <img alt="Sarah Loehr."     src="https://MyDomainName.file.force.com/servlet/rtaImage?    eid=00QRM000003ZfDb&amp;    feoid=00NRM000001E73j&amp;    refid=0EMRM00000002Ip"></img>" }The refid parameter of the image (0EMRM00000002Ip in this example) is the contentReferenceId. |

## Example

For an example of retrieving the blob data from a rich text area field, see [Get an Image from a Rich Text Area Field](atlas.en-us.api_rest.meta/api_rest/dome_sobject_rich_text_image_retrieve.htm "Use the *** resource to retrieve an image from a rich text area field. In this example, we retrieve an image from a custom rich text field of a Lead record called LeadPhotoRichText__c. We assume that an image has already been uploaded to this field.").

#### See Also

-   [Object Reference for the Salesforce Platform](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/)

## Code Examples

```
{
   "attributes" : {
      "type" : "Lead",
      "url" : "/services/data/v66.0/sobjects/Lead/00QRM000003ZfDb2AK"
   },
   "Id" : "00QRM000003ZfDb2AK",
   ...
   "ContactPhoto__c" : 
   "Sarah Loehr and her two dogs.
   <img alt="Sarah Loehr." 
   src="https://MyDomainName.file.force.com/servlet/rtaImage?
   eid=00QRM000003ZfDb&amp;
   feoid=00NRM000001E73j&amp;
   refid=0EMRM00000002Ip"></img>"
}
```

## Related Topics

- retrieving information for the object (atlas.en-us.api_rest.meta/api_rest/resources_sobject_retrieve.htm)
- Get an Image from a Rich Text Area Field (atlas.en-us.api_rest.meta/api_rest/dome_sobject_rich_text_image_retrieve.htm)
