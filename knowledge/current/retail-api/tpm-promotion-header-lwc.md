---
title: "TPM Promotion Header LWC"
domain: retail-api
topic: tpm-promotion-header-lwc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:41.106Z
estimatedTokens: 528
keywords: [TPM, Promotion, LWC, tpm-promotion-header-component, service, component, access, layer, part, managed, package]
---

# TPM Promotion Header LWC

> The tpm-promotion-header-component service
        component provides access to the TPM promotion header in the LWC layer. This component is
        part of the TPM managed package.

# TPM Promotion Header LWC

The tpm-promotion-header-component service component provides access to the TPM promotion header in the LWC layer. This component is part of the TPM managed package.

This component is a wrapper for accessing the entire promotion header. You can customize a specific section of the header (LWC slot)—without changing the default behavior of the other sections—through a slot-specific promotion header LWC. Customizable promotion header slots are:

-   icon: A 32x32 pixel image.
-   breadcrumbs: A component to display the page breadcrumbs.
-   title: The promotion title
-   subtitle: The promotion subtitle
-   navigation: A group of button icons.
-   left-buttons: The action buttons and components that are anchored to the left of the header toolbar.
-   right-buttons: The action buttons and components that are anchored to the right of the header toolbar.
-   fullheight-buttons: The buttons that span the complete height of the header.

For information on slot-specific promotion header LWCs, see [TPM Promotion Header Slot LWCs](atlas.en-us.retail_api.meta/retail_api/tpm_promotion_header_slot_lwcs_reference.htm "The slot-specific LWCs related to the promotion header provide access to various promotion header sections in the LWC layer.").

## Example

Here’s an example of a custom promotion header component with the default behavior.

```

```

Here’s an example of a custom promotion header component with TPM default behavior:

```

```

Here’s an example of a custom promotion header component with a custom promotion title and custom button.

```

```

If your org has [Lightning Web Security](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.security_lwsec_intro) enabled, the runtimeNamespace property on the metadata file isn’t required.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=retail_api)

#### Note

Lightning web security is a feature that must be tested before enabling. [LWC Security](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.security_lwsec_when)

## Code Examples

```
<!-- MyHeader.html -->
<template>
   <cgcloud-tpm-promotion-header-component
        promotion-id={recordId}>
   </cgcloud-tpm-promotion-header-component>
</template>



<!-- MyHeader.js -->
import { LightningElement, api } from 'lwc';

export default class SamplePromotionHeaderCustom extends LightningElement {
    @api recordId;
}

<!-- MyHeader.js-meta.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>59.0</apiVersion>
    <isExposed>true</isExposed>
    <masterLabel>SAMPLE: Custom Promotion Header Component</masterLabel>
    <targets>
        <target>lightning__RecordPage</target>
    </targets>
    <targetConfigs>
        <targetConfig targets="lightning__RecordPage">
            <objects>
                <object>cgcloud__Promotion__c</object>
            </objects>
        </targetConfig>
    </targetConfigs>
    <!-- This property is required if LWS is Disabled -->
    <runtimeNamespace>cgcloud</runtimeNamespace>
</LightningComponentBundle>
```

```
<!-- MyHeader.html -->
<template>
  <cgcloud-tpm-promotion-header-component promotion-id={recordId}>
    <!-- Icon Slot -->
    <cgcloud-tpm-promotion-header-icon slot="icon"></cgcloud-tpm-promotion-header-icon>

    <!-- Breadcrumbs -->
    <div slot="breadcrumbs" style="display: flex">
      <cgcloud-tpm-promotion-header-breadcrumbs
        promotion-id={recordId}
      ></cgcloud-tpm-promotion-header-breadcrumbs>
    </div>

    <!-- Title -->
    <div slot="title" style="display: flex">
      <cgcloud-tpm-promotion-header-slogan
        promotion-id={recordId}
      ></cgcloud-tpm-promotion-header-slogan>
    </div>

    <!-- Subtitle -->
    <div slot="subtitle" style="display: flex">
      <cgcloud-tpm-promotion-header-subtitle
        promotion-id={recordId}
      ></cgcloud-tpm-promotion-header-subtitle>
    </div>

    <!-- Navigation -->
    <lightning-button-group slot="navigation">
      <cgcloud-tpm-promotion-header-promotion-planning-button
        promotion-id={recordId}
        group-order="first"
      ></cgcloud-tpm-promotion-header-promotion-planning-button>
      <cgcloud-tpm-promotion-header-promotion-pl-button
        promotion-id={recordId}
        group-order="last"
      ></cgcloud-tpm-promotion-header-promotion-pl-button>
    </lightning-button-group>

    <!-- Left anchor buttons -->
    <div slot="left-buttons" style="display: flex">
      <cgcloud-tpm-promotion-header-edit-mode-button
        promotion-id={recordId}
      ></cgcloud-tpm-promotion-header-edit-mode-button>
      <cgcloud-tpm-promotion-header-add-tactic-button
        promotion-id={recordId}
      ></cgcloud-tpm-promotion-header-add-tactic-button>
      <cgcloud-tpm-promotion-header-duplicate-tactic-button
        promotion-id={recordId}
      ></cgcloud-tpm-promotion-header-duplicate-tactic-button>
      <cgcloud-tpm-promotion-header-delete-tactic-button
        promotion-id={recordId}
      ></cgcloud-tpm-promotion-header-delete-tactic-button>
      <cgcloud-tpm-promotion-header-predict-uplift-button
        promotion-id={recordId}
      ></cgcloud-tpm-promotion-header-predict-uplift-button>
    </div>

    <!-- Right anchor buttons -->
    <div slot="right-buttons">
      <cgcloud-tpm-promotion-header-kpi-validations
        promotion-id={recordId}
      ></cgcloud-tpm-promotion-header-kpi-validations>
      <cgcloud-tpm-promotion-header-push-area
        promotion-id={recordId}
      ></cgcloud-tpm-promotion-header-push-area>
      <cgcloud-tpm-promotion-header-cancel-button
        promotion-id={recordId}
      ></cgcloud-tpm-promotion-header-cancel-button>
      <cgcloud-tpm-promotion-header-save-and-refresh-button
        promotion-id={recordId}
      ></cgcloud-tpm-promotion-header-save-and-refresh-button>
      <cgcloud-tpm-promotion-header-done-button
        promotion-id={recordId}
      ></cgcloud-tpm-promotion-header-done-button>
      <cgcloud-tpm-promotion-header-pl-filter-button
        promotion-id={recordId}
      ></cgcloud-tpm-promotion-header-pl-filter-button>
    </div>

    <!-- Full Height buttons -->
    <div slot="fullheight-buttons">
      <cgcloud-tpm-promotion-header-scenario-planning-button
        promotion-id={recordId}
      ></cgcloud-tpm-promotion-header-scenario-planning-button>
      <cgcloud-tpm-promotion-header-attachments-button
        promotion-id={recordId}
      ></cgcloud-tpm-promotion-header-attachments-button>
    </div>
  </cgcloud-tpm-promotion-header-component>
</template>

<!-- MyHeader.js -->
import { LightningElement, api } from 'lwc';

export default class SamplePromotionHeaderCustom extends LightningElement {
    @api recordId;
}

<!-- MyHeader.js-meta.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>59.0</apiVersion>
    <isExposed>true</isExposed>
    <masterLabel>SAMPLE: Custom Promotion Header Component</masterLabel>
    <targets>
        <target>lightning__RecordPage</target>
    </targets>
    <targetConfigs>
        <targetConfig targets="lightning__RecordPage">
            <objects>
                <object>cgcloud__Promotion__c</object>
            </objects>
        </targetConfig>
    </targetConfigs>
    <!-- This property is required if LWS is Disabled -->
    <runtimeNamespace>cgcloud</runtimeNamespace>
</LightningComponentBundle>
```

```
<!-- MyHeader.html -->
<template>
  <cgcloud-tpm-promotion-header-component promotion-id={recordId}>
    
    <!-- Non specified slots will use default implementation>

    <!-- Title -->
    <div slot="title" style="display: flex">
      <h1>{myTitle}</h1>
    </div>

    <!-- Left anchor buttons, we keep default buttons and add a new one -->
    <div slot="left-buttons" style="display: flex">
      <cgcloud-tpm-promotion-header-edit-mode-button
        promotion-id={recordId}
      ></cgcloud-tpm-promotion-header-edit-mode-button>
      <cgcloud-tpm-promotion-header-add-tactic-button
        promotion-id={recordId}
      ></cgcloud-tpm-promotion-header-add-tactic-button>
      <cgcloud-tpm-promotion-header-duplicate-tactic-button
        promotion-id={recordId}
      ></cgcloud-tpm-promotion-header-duplicate-tactic-button>
      <cgcloud-tpm-promotion-header-delete-tactic-button
        promotion-id={recordId}
      ></cgcloud-tpm-promotion-header-delete-tactic-button>
      <cgcloud-tpm-promotion-header-predict-uplift-button
        promotion-id={recordId}
      ></cgcloud-tpm-promotion-header-predict-uplift-button>
      <lightning-button label="Button" variant="brand" onclick={onButtonClick}></lightning-button>
    </div>
  </cgcloud-tpm-promotion-header-component>
</template>
<!-- MyHeader.js -->
import { LightningElement, api } from 'lwc';

export default class SamplePromotionHeaderCustom extends LightningElement {
    @api recordId;
    
    myTitle = 'Hello World!';
    
    onButtonClick() {
        alert('Hello World!');
    }
}

<!-- MyHeader.js-meta.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>59.0</apiVersion>
    <isExposed>true</isExposed>
    <masterLabel>SAMPLE: Custom Promotion Header Component</masterLabel>
    <targets>
        <target>lightning__RecordPage</target>
    </targets>
    <targetConfigs>
        <targetConfig targets="lightning__RecordPage">
            <objects>
                <object>cgcloud__Promotion__c</object>
            </objects>
        </targetConfig>
    </targetConfigs>
    <!-- This property is required if LWS is Disabled -->
    <runtimeNamespace>cgcloud</runtimeNamespace>
</LightningComponentBundle>
```

## Related Topics

- TPM Promotion Header Slot LWCs (atlas.en-us.retail_api.meta/retail_api/tpm_promotion_header_slot_lwcs_reference.htm)
