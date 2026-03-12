---
title: "Use Images Uploaded as Asset Files"
domain: mobile-offline
topic: use-images-uploaded-as-asset-files
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:57.047Z
estimatedTokens: 769
keywords: [Images, Uploaded, Asset, Files, modern, alternative, resources, ideal, throughout, components, apps—for, user, elements, icons—or, otherwise]
---

# Use Images Uploaded as Asset Files

> Asset files are the modern alternative to static resources. Asset files are ideal for
  images that are used throughout your components and apps—for example, user interface elements like
  icons—or otherwise aren’t related to a specific record.

# Use Images Uploaded as Asset Files

Asset files are the modern alternative to static resources. Asset files are ideal for images that are used throughout your components and apps—for example, user interface elements like icons—or otherwise aren’t related to a specific record.

Referencing an image stored in an Asset file is straightforward, and fully documented. We present only a simple example here. See [Access Content Asset Files](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.create_content_assets "HTML (New Window)") the Lightning Web Component Developer Guide for complete details.

The critical elements of an offline-ready implementation are:

-   Access the URL of the asset using the @salesforce/contentAssetUrl module.
-   Provide the image URL via a getter function.
-   Use the getter function for the src attribute of an img tag in your HTML template.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=mobile_offline)

#### Important

While there are other methods for referencing images in an LWC, the preceding elements are required for **offline** image access to function. The Komaci static analyzer looks for this specific pattern when determining images to prime. Additionally, your getter function must be **statically** analyzable. If its result can only be determined at runtime, the image can’t be primed.

## Example

```

```

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=mobile_offline)

#### Warning

The assetArchiveUrl function in the preceding example appends a pathinarchive query parameter and value, using a “&” separator. The “&” isn’t used in examples in the standard LWC documentation. The need for the “&” separator is inconsistent between desktop and mobile today, and we consider this discrepancy to be a software defect. For now, adding the “&” separator generally works on both desktop and mobile, even though it results in a double “&&” on desktop.

With the image URL provided by the getter functions in the preceding component JavaScript, referencing the images in the HTML template is just like referencing any image in HTML. Use it in the src attribute of an HTML img tag.

```

```

#### See Also

-   [*Salesforce Help:* Asset Files](https://help.salesforce.com/s/articleView?id=experience.admin_files_asset_files.htm&type=5&language=en_US "Salesforce Help: Asset Files - HTML (New Window)")

-   [*Lightning Web Components Developer Guide:* Access Content Asset Files](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.create_content_assets "Lightning Web Components Developer Guide: Access Content Asset
    Files - HTML (New Window)")

-   [*Lightning Web Components Developer Guide:* @salesforce/contentAssetUrlin @salesforce Modules](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.reference_salesforce_modules "Lightning Web Components Developer Guide:
    @salesforce/contentAssetUrlin @salesforce Modules - HTML (New Window)")

## Code Examples

```
// imageFromAssetFile.js
import { LightningElement } from 'lwc';
import ASSET_IMG from '@salesforce/contentAssetUrl/avatars-light-mode';
import ARCHIVE_IMG from '@salesforce/contentAssetUrl/branding-images';

export default class ImageFromAssetFile extends LightningElement {
    get assetUrl() {
        return ASSET_IMG;
    }

    get assetArchiveUrl() {
        return ARCHIVE_IMG + '&pathinarchive=images/logo-large.png';
    }
}
```

```
<!-- imageFromAssetFile.html -->
<template>
    <lightning-card>
        Display an image directly from an Asset file {assetUrl}
    </lightning-card>

    <template if:true={assetUrl}>
        <img src={assetUrl}/>
    </template>

    <lightning-card>
        Display an image from an archive Asset file {archUrl}
    </lightning-card>

    <template if:true={assetArchiveUrl}>
        <img src={assetArchiveUrl}/>
    </template>

</template>
```
