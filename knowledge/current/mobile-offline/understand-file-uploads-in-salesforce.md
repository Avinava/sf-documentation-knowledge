---
title: "Understand File Uploads in Salesforce"
domain: mobile-offline
topic: understand-file-uploads-in-salesforce
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:57.073Z
estimatedTokens: 1185
keywords: [Understand, File, Uploads, Salesforce, It’s, simple, upload, files, attach, records, user, great, deal, place, behind]
---

# Understand File Uploads in Salesforce

> It’s simple to upload files and attach them to other records in the Salesforce user
  interface, but a great deal takes place behind the scenes. File uploads have a complex
  representation in Salesforce. This complexity makes it challenging to work with file uploads
  programmatically in LWC code, especially in a way that works while a mobile device is
  offline.

# Understand File Uploads in Salesforce

It’s simple to upload files and attach them to other records in the Salesforce user interface, but a great deal takes place behind the scenes. File uploads have a complex representation in Salesforce. This complexity makes it challenging to work with file uploads programmatically in LWC code, especially in a way that works while a mobile device is offline.

For the purposes of thinking about uploading files from an LWC, we can simplify the representation to four related objects.

![Entity-Relationship diagram (ERD) for ContentDocument, ContentVersion, and other file upload entities.](/docs/resources/img/en-us/260.0?doc_id=images%2Fuse_file_upload_representation.png&folder=mobile_offline)

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=mobile_offline)

#### Warning

This diagram oversimplifies file uploads in Salesforce. It omits ownership, sharing, and other features supported by additional objects and APIs. For more details, including available fields and usage notes, start with [ContentDocument](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_contentdocument.htm), [ContentVersion](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_contentversion.htm), and [ContentDocumentLink](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_contentdocumentlink.htm) in the Salesforce Object Reference.

An uploaded, attached, or generated file is represented primarily by the ContentDocument object. However, this object holds no file data. Instead, versions of an uploaded file are stored as ContentVersion objects. With this structure, you can update a file by uploading a new version. Each upload creates another ContentVersion record, and this record is where the binary file data for the upload is stored.

That record represents the file. To associate an uploaded file to another record—for example, to attach photos of a vehicle to a car rental agreement record—the ContentDocumentLink object is used to link the two records together. A ContentDocumentLink object represents the relationship between a ContentDocument and any other record. Associate an uploaded file with any number of other records by creating the appropriate ContentDocumentLink records that join them.

When online, the LWC code for creating a file upload, while non-trivial, is straightforward, using standard Lightning Data Service (LDS) adapters like createRecord.

Supporting offline uploads from mobile clients is more challenging. Not only is it hard to manage the various relationships between records, but there’s also the challenge of holding binary file data in an offline store for later upload. To manage these technical issues, use the dedicated, mobile-specific file upload adapter: createContentDocumentAndVersion.

Supported file sizes for uploads are dependent on device memory, and large file sizes can cause compatibility issues. Keeping file upload sizes (especially images) under 100 MB maximizes compatibility.

Any supported file type can be uploaded, however only draft images can be viewed in the context of an LWC.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=mobile_offline)

#### Note

Check with environment-dependent file viewing mechanisms, such as the native capabilities within the Salesforce Field Service Mobile App or Salesforce Mobile App Plus.

## LWC Image and File Caching

Generally, mobile LWCs try to respect HTTP Cache-Control headers regarding how long an image or file is considered fresh or not stale. When an image or file is considered fresh, it’s served immediately from the cache and no attempts are made to fetch a new copy.

After the cache expires, images or files remain available to be served. However, we do attempt to fetch a fresh copy in the background.

If there's a zero or no cache control setting, we enforce a minimum of one minute cache time. This helps prevent excessively fetching images as the user navigates quickly in and out of LWCs. Excessively fetching images or files can lead to heavy network usage and LWC performance issues.

We suggest using design patterns like how [Content Documents](http://developer.salesforce.com/docs/atlas.en-us.254.0.object_reference.meta/object_reference/sforce_api_objects_contentdocument.htm) are handled. This means each version of the image or file has its own unique URL. Likewise, we caution against designing with static URLs that point to some dynamically changed images or files. Avoid requiring any explicit cache-busting mechanism.
