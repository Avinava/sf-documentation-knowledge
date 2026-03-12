---
title: "Use Images Uploaded as Static Resources"
domain: mobile-offline
topic: use-images-uploaded-as-static-resources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:57.063Z
estimatedTokens: 789
keywords: [Images, Uploaded, Resources, packaging, stylesheets, JavaScript, files, Lightning, web, components, Salesforce, customization, features]
---

# Use Images Uploaded as Static Resources

> Static resources are a method for packaging one or more images, stylesheets, or
  JavaScript files for use within Lightning web components, and other Salesforce customization
  features.

# Use Images Uploaded as Static Resources

Static resources are a method for packaging one or more images, stylesheets, or JavaScript files for use within Lightning web components, and other Salesforce customization features.

Referencing an image stored in a Static Resource is straightforward, and fully documented. We present only a simple example here. See [Access Static Resources](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.create_resources "HTML (New Window)") the Lightning Web Component Developer Guide for complete details.

The critical elements of an offline-ready implementation are:

-   Access the URL of the resource by importing it using the @salesforce/resourceUrl module.
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

LWC Offline doesn’t support archive static resources at this time. While you can upload each image as a separate static resource, we recommend that you use Content Assets, which do support archive files, for collections of related images. See [Use Images Uploaded as Asset Files](atlas.en-us.mobile_offline.meta/mobile_offline/use_images_from_contentasset.htm "Asset files are the modern alternative to static resources. Asset files are ideal for images that are used throughout your components and apps—for example, user interface elements like icons—or otherwise aren’t related to a specific record.").

With the image URL provided by the getter function in the preceding component JavaScript, referencing the image in the HTML template is just like referencing any image in HTML. Use it in the src attribute of an HTML img tag.

```

```

#### See Also

-   [*Salesforce Help:* Static Resources](https://help.salesforce.com/s/articleView?id=platform.pages_static_resources.htm&type=5&language=en_US "Salesforce Help: Static Resources - HTML (New Window)")

-   [*Lightning Web Components Developer Guide:* Access Static Resources](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.create_resources "Lightning Web Components Developer Guide: Access Static Resources - HTML (New Window)")

-   [*Lightning Web Components Developer Guide:* @salesforce/resourceUrlin @salesforce Modules](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.reference_salesforce_modules "Lightning Web Components Developer Guide:
    @salesforce/resourceUrlin @salesforce Modules - HTML (New Window)")

## Code Examples

```
// imageFromStaticResource.js
import { LightningElement } from 'lwc';
import TRAILHEAD_LOGO from '@salesforce/resourceUrl/trailhead_logo';

export default class ImageFromStaticResource extends LightningElement {
    get trailheadLogoUrl() {
        return TRAILHEAD_LOGO;
    }
}
```

```
<!-- imageFromStaticResource.html -->
<template>
    <lightning-card>
        Display an image directly from a static resource: {trailheadLogoUrl}
    </lightning-card>

    <template if:true={trailheadLogoUrl}>
        <img src={trailheadLogoUrl}/>
    </template>

</template>
```

## Related Topics

- Use Images Uploaded as Asset Files (atlas.en-us.mobile_offline.meta/mobile_offline/use_images_from_contentasset.htm)
