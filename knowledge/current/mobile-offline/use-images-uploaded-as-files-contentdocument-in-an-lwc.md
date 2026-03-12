---
title: "Use Images Uploaded as Files (ContentDocument) in an
  LWC"
domain: mobile-offline
topic: use-images-uploaded-as-files-contentdocument-in-an-lwc
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:57.057Z
estimatedTokens: 798
keywords: [Images, Uploaded, Files, ContentDocument, LWC, general, mechanism, upload, binary, Salesforce, org, associated, specific, record, ideal]
---

# Use Images Uploaded as Files (ContentDocument) in an
  LWC

> Files are a general mechanism to upload and make binary files, such as images, available
  in your Salesforce org. Files can be associated with a specific record, which makes them ideal for
  product photos, images captured during a service call or other transaction, and otherwise adding
  images to business activities that you track in Salesforce.

# Use Images Uploaded as Files (ContentDocument) in an LWC

Files are a general mechanism to upload and make binary files, such as images, available in your Salesforce org. Files can be associated with a specific record, which makes them ideal for product photos, images captured during a service call or other transaction, and otherwise adding images to business activities that you track in Salesforce.

Files have a complex representation in Salesforce, using multiple standard objects to store the file itself and information about it, including ownership, access controls, and multiple versions of that file. ContentDocument is the primary object and, for the purposes of displaying images in your LWCs, you can reference the binary data of a file through a relationship that is the same for any uploaded file.

The critical elements of an offline-ready implementation are:

-   Access the URL of the File’s current version through the @salesforce/schema/ContentDocument.LatestPublishedVersion.VersionDataUrl related field.
-   Provide the image URL via a getter function that parses the record data of the current version.
-   Use the getter function for the src attribute of an img tag in your HTML template.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=mobile_offline)

#### Important

While there are other methods for referencing images in an LWC, the preceding elements are required for **offline** image access to function. The Komaci static analyzer looks for this specific pattern when determining images to prime. Additionally, your getter function must be **statically** analyzable. If its result can only be determined at runtime, the image can’t be primed.

## Example

The following example is simple, and uses a hard-coded ContentDocument record ID, but it illustrates the details. You can also access named renditions (thumbnails) of the image by adding a thumb parameter to the URL.

```

```

With the image URL provided by the getter functions in the preceding component JavaScript, referencing the images in the HTML template is just like referencing any image in HTML. Use it in the src attribute of an HTML img tag.

```

```

This feature works in LWC Offline beginning in Spring ’23, which is API version 57.0. Be sure to set that minimum API version for any component that references images while offline.

```

```

#### See Also

-   [*User Interface API Developer Guide:* Upload Files](https://developer.salesforce.com/docs/atlas.en-us.260.0.uiapi.meta/uiapi/ui_api_features_records_content_document.htm "User Interface API Developer Guide: Upload Files - HTML (New Window)")

-   [*Salesforce Object Reference Guide:* ContentDocument](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_contentdocument.htm "Salesforce Object Reference Guide: ContentDocument - HTML (New Window)")

-   [*Salesforce Object Reference Guide:* ContentVersion](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_contentversion.htm "Salesforce Object Reference Guide: ContentVersion - HTML (New Window)")

## Code Examples

```
// imageFromContentDocument.js
import { LightningElement, wire } from 'lwc';
import { getFieldValue, getRecord } from 'lightning/uiRecordApi';
import IMAGE_URL_FIELD from 
    '@salesforce/schema/ContentDocument.LatestPublishedVersion.VersionDataUrl';

export default class ImageFromContentDocument extends LightningElement {

    @wire(getRecord, {recordId: '069RO0000003FMoYAM', fields: [IMAGE_URL_FIELD] })
    contentDocImage;

    get imageUrl() {
        return ( ! this.contentDocImage) ? '' : 
            getFieldValue(this.contentDocImage.data, IMAGE_URL_FIELD);
    }

    get resizedImageUrl() {
        return ( ! this.contentDocImage) ? '' : 
            getFieldValue(this.contentDocImage.data, IMAGE_URL_FIELD) + 
            '?thumb=THUMB240BY180';
    }
}
```

```
<!-- imageFromContentDocument.html -->
<template>
    <lightning-card>Display an image from 
        ContentDocument {imageUrl}</lightning-card>

    <template if:true={contentDocImage}>
        <img src={imageUrl}/>
    </template>

    <lightning-card>Display a resized image from ContentDocument
        {resizedImageUrl}</lightning-card>

    <template if:true={contentDocImage}>
        <img src={resizedImageUrl}/>
    </template>

</template>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<!-- imageFromContentDocument-meta.xml -->
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>57.0</apiVersion>
    <isExposed>true</isExposed>
    <targets>
        <target>lightning__RecordPage</target>
        <target>lightning__AppPage</target>
        <target>lightning__RecordAction</target>
        <target>lightning__GlobalAction</target>
    </targets>
    <targetConfigs>
        <targetConfig targets="lightning__RecordAction,lightning__GlobalAction">
            <actionType>ScreenAction</actionType>
        </targetConfig>
    </targetConfigs>  
</LightningComponentBundle>
```
