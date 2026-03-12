---
title: "Code Examples for Document Builder"
domain: field-service
topic: code-examples-for-document-builder
apiVersion: 67.0
release: summer-26-v67
docType: example
lastCollected: 2026-03-12T05:14:55.496Z
estimatedTokens: 385
keywords: [Code, Examples, Document, Builder, Build, custom, components, Lightning, web, LWCs, Important, Text, Images]
---

# Code Examples for Document Builder

> Build custom components for Document Builder with Lightning web components
  (LWCs).

# Code Examples for Document Builder

Build custom components for Document Builder with Lightning web components (LWCs).

With custom components, the sky’s the limit, but these code samples can get you started on your own Document Builder customization journey.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=field_service_dev)

#### Important

For custom LWCs to appear on mobile document preview, you must include this code in your js-meta.xml file: <supportedFormFactor type="Small" />

## Static Text

The header and medium header base components come with color and padding configuration. This code creates a medium header component.

```

```

## Static Images

Here’s some sample code to create custom static images. This code creates a Static Image component.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=field_service_dev)

#### Important

Don’t use static resources, as they aren’t supported offline and are deprecated. Only use ContentAsset in your LWC. See [Using Assets in LWC](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.create_content_assets), [How to Create Assets](https://help.salesforce.com/s/articleView?id=experience.admin_files_asset_files_create.htm&type=5&language=en_US), and [Viewing and Editing Assets](https://help.salesforce.com/s/articleView?id=experience.files_asset_files_edit_view.htm&type=5&language=en_US).

```

```

This code uses SFDX to deploy contentAssets.

```

```

## Code Examples

```
// Below is the code for the HTML block:
<template>
   <h2 class="slds-text-heading_medium" style={inlineStyle}>{text}</h2>
</template>

// Below is the code for the javascript block:
import { LightningElement, api } from "lwc";

export default class MediumHeaderText extends LightningElement {
   @api text;
   @api colorhex;
   @api topPadding;
   @api leftPadding;
   @api rightPadding;
   @api bottomPadding;

   get inlineStyle() {
       return `color:#${this.colorhex};
padding:${this.topPadding}px ${this.rightPadding}px ${this.bottomPadding}px ${this.leftPadding}px`;
   }
}

// Below is the extensible markup language block
<?xml version="1.0" encoding="UTF-8" ?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
   <apiVersion>57.0</apiVersion>
   <isExposed>true</isExposed>
   <targets>
       <target>lightning__ServiceDocument</target>
   </targets>
   <targetConfigs>
       <targetConfig targets="lightning__ServiceDocument">
           <supportedFormFactors>
               <supportedFormFactor type="Large" />
           </supportedFormFactors>

           <property name="text" type="string" default="A medium header" />
           <property name="colorhex" type="string" default="1B3971" />
           <property name="topPadding" type="string" default="0" />
           <property name="rightPadding" type="string" default="0" />
           <property name="leftPadding" type="string" default="0" />
           <property name="bottomPadding" type="string" default="0" />
       </targetConfig>
   </targetConfigs>

</LightningComponentBundle>
```

```
// Below is the HTML block
<template>
   <div>
       <div class="image" style={inlineStyle}>
           <img src={salesforceUrl} />
       </div>
   </div>
</template>

// Below is the JavaScript block
import { LightningElement, api } from "lwc";
import SALESFORCE_LOGO from "@salesforce/contentAssetUrl/salesforce";

export default class DemoSalesforceLogo extends LightningElement {
   @api width;
   @api height;

   // Expose the static resource URL for use in the template
   get salesforceUrl() {
       return SALESFORCE_LOGO;
   }

   get inlineStyle() {
       return `width: ${this.width}px;height: ${this.height}px`;
   }
}

// Below is the Extensible Markup Language block
<?xml version="1.0" encoding="UTF-8" ?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
   <apiVersion>54.0</apiVersion>
   <isExposed>true</isExposed>
   <targets>
       <target>lightning__ServiceDocument</target>
   </targets>
   <targetConfigs>
       <targetConfig targets="lightning__ServiceDocument">
           <supportedFormFactors>
               <supportedFormFactor type="Large" />
               <supportedFormFactor type="Small" />
           </supportedFormFactors>

           <property name="width" type="integer" />
           <property name="height" type="integer" />
       </targetConfig>
   </targetConfigs>

</LightningComponentBundle>
```

```
// Below is the XML block:
<?xml version="1.0" encoding="UTF-8" ?>
<ContentAsset xmlns="http://soap.sforce.com/2006/04/metadata">
   <isVisibleByExternalUsers>true</isVisibleByExternalUsers>
   <language>en_US</language>
   <masterLabel>salesforce</masterLabel>
   <relationships>
       <organization>
           <access>VIEWER</access>
       </organization>
       <workspace>
           <access>INFERRED</access>
           <isManagingWorkspace>true</isManagingWorkspace>
           <name>sfdc_asset_company_assets</name>
       </workspace>
   </relationships>
   <versions>
       <version>
           <number>1</number>
           <pathOnClient>salesforce.png</pathOnClient>
       </version>
   </versions>
</ContentAsset>
```
