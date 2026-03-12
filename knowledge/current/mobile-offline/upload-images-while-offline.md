---
title: "Upload Images While Offline"
domain: mobile-offline
topic: upload-images-while-offline
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:57.077Z
estimatedTokens: 578
keywords: [Upload, Images, Offline, files, Salesforce, mobile, client, photos, equipment, installed, service, call, there’s, Internet, device]
---

# Upload Images While Offline

> Upload files, such as images, to Salesforce, even when your mobile client is offline.
  For example, upload photos of equipment installed during a service call, even if there’s no
  Internet service available. Images upload when your mobile device regains network
  service.

# Upload Images While Offline

Upload files, such as images, to Salesforce, even when your mobile client is offline. For example, upload photos of equipment installed during a service call, even if there’s no Internet service available. Images upload when your mobile device regains network service.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=mobile_offline)

#### Important

This feature is available only in Salesforce mobile apps, such as Salesforce Mobile App Plus and Field Service Mobile. This feature depends on functionality built into these mobile apps. While LWCs that use this feature don’t emit errors when used on desktop, they don’t function as intended, either.

Your organization must purchase and license Salesforce Mobile App Plus in order to use this feature in the Salesforce mobile app. Contact your Salesforce sales rep for more information.

-   **[Understand File Uploads in Salesforce](atlas.en-us.mobile_offline.meta/mobile_offline/use_images_upload_file_representation.htm)**
    It’s simple to upload files and attach them to other records in the Salesforce user interface, but a great deal takes place behind the scenes. File uploads have a complex representation in Salesforce. This complexity makes it challenging to work with file uploads programmatically in LWC code, especially in a way that works while a mobile device is offline.
-   **[Image Upload Basics](atlas.en-us.mobile_offline.meta/mobile_offline/use_images_upload_basics.htm)**
    Uploading an image from an LWC using features supported offline is a two-step process. First, use createContentDocumentAndVersion to upload the image file. This adapter creates ContentDocument and ContentVersion records for the file upload. After the ContentDocument and ContentVersion exist, use createRecord to create the ContentDocumentLink record that relates the image upload to the record you want to attach it to.
-   **[Image Upload Example](atlas.en-us.mobile_offline.meta/mobile_offline/use_images_upload_while_offline_example.htm)**
    Here’s a quick example of uploading an image to Salesforce using the createContentDocumentAndVersion adapter. This technique works on mobile devices, whether they’re online or offline. This technique works only in Salesforce mobile apps.

## Related Topics

- Understand File Uploads in Salesforce (atlas.en-us.mobile_offline.meta/mobile_offline/use_images_upload_file_representation.htm)
- Image Upload Basics (atlas.en-us.mobile_offline.meta/mobile_offline/use_images_upload_basics.htm)
- Image Upload Example (atlas.en-us.mobile_offline.meta/mobile_offline/use_images_upload_while_offline_example.htm)
