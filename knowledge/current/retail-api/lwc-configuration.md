---
title: "LWC Configuration"
domain: retail-api
topic: lwc-configuration
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:37.055Z
estimatedTokens: 563
keywords: [LWC, Configuration, order, access, TPM, promotion, data, layer, tpm-promotion, service, component, hook, state, able, extract]
---

# LWC Configuration

> In order to access the TPM promotion data in LWC layer, the tpm-promotion service component is used. Use the tpm-promotion component to
        hook into the promotion state and be able to extract data from the promotion (through
        events) and push new data to the promotion (through methods).

# LWC Configuration

In order to access the TPM promotion data in LWC layer, the tpm-promotion service component is used. Use the tpm-promotion component to hook into the promotion state and be able to extract data from the promotion (through events) and push new data to the promotion (through methods).

tpm-promotion component

```

```

If your org has [Lightning Web Security](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.security_lwsec_intro) enabled, the runtimeNamespace property on the metadata file isn’t required.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=retail_api)

#### Note

Lightning web security is a feature that must be tested before enabling. [LWC Security](https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.security_lwsec_when)

When setting the runtimeNamespace property in the metadata file, your component cannot use modules from the ‘@salesforce’ package (any import whose route starts with @salesforce).

## Troubleshooting

-   Question: When my component runs, I get the error **Scoped imports are not allowed when runtime namespace is specified**.

    Answer: This error appears when trying to use “@salesforce” modules in your component. When specifying a runtimeNamespace in the metadata file, your component cannot access “@salesforce” resources. To perform APEX calls and other actions that require those modules, use the tpmGenericUtils modules available functions.

-   Question: When my component runs, I get the error **Attempting to reference cross-namespace module**

    Error scenarios

    -   Your component does not have the **runtimeNamespace** property set up on it metadata file. To fix it, add the **runtimeNamespace** property with the namespace **cgcloud** to your component.
    -   Your component includes other custom components that do not have the **runtimeNamespace** property in their metadata. Add the **runtimeNamespace** property with the namespace **cgcloud** to the included components (also to the included components of the included ones). All the components used by another component with a **runtimeNamespace** defined must have the **runtimeNamespace** property in their metadata.

## Code Examples

```
<!-- YourComponent.html -->
<template>
    <!-- Include the component in your markup -->
    <cgcloud-tpm-promotion 
        data-id="fwk" 
        promotion-id={recordId}
        <!-- Define event handlers for the data you need on your component -->
        oneditmodechange={onEditModeChange}
    ></cgcloud-tpm-promotion>
    
    <!-- Sample button -->
    <lightning-button variant="neutral" label="Toggle Edit Mode" onclick={handleEditModeClick}></lightning-button>
</template>

<!-- YourComponent.js -->
import { api, LightningElement } from 'lwc';

export default class YourComponent extends LightningElement {
    @api
    recordId; // Record id is used to initialize the tpm-promotion component
    
    onEditModeChange(event) {
        // This event is called every time the Edit mode changes
        // for the promotion
        this.editMode = event.detail.value;
    }
    
    handleEditModeClick() {
        // You can push changes/alter the state of the promotion
        // by calling the component methods
        // State changes will be notified to all the components of the page
        this.template.querySelector('cgcloud-tpm-promotion')
            .setEditMode(!this.editMode);
    }
}<!-- YourComponent.js-meta.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>55.0</apiVersion>
    <isExposed>true</isExposed>
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
    <runtimeNamespace>cgcloud</runtimeNamespace>
</LightningComponentBundle>
```
