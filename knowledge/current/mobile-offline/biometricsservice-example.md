---
title: "BiometricsService Example"
domain: mobile-offline
topic: biometricsservice-example
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:56.873Z
estimatedTokens: 195
keywords: [BiometricsService, Here’s, basic, Lightning, web, component, uses, device’s, biometrics, capabilities, verify, device, ownership]
---

# BiometricsService Example

> Here’s a basic example of a Lightning web component that uses a device’s biometrics
        capabilities to verify device ownership.

# BiometricsService Example

Here’s a basic example of a Lightning web component that uses a device’s biometrics capabilities to verify device ownership.

The component’s HTML template is minimal, with a “Verify” button to initiate the biometrics check.

```

```

This example simply uses BiometricsService to prompt the user to complete a biometrics check. A status message is returned, indicating whether the check was successful or not.

```

```

#### See Also

-   [Use the BiometricsService API](atlas.en-us.mobile_offline.meta/mobile_offline/use_biometricsservice_in_a_lightning_component.htm "To develop a Lightning web component with biometrics-checking features, use the BiometricsService API as your method for accessing a device’s native biometrics functionality.")

## Code Examples

```apex
<template>
  <lightning-card title="Biometrics Service Demo" icon-name="custom:privately_shared">
    <div class="slds-var-m-around_medium">
      Use device biometrics capabilities to verify current user is indeed device owner:
      <lightning-button
        variant="brand"
        label="Verify" 
        title="Verify device ownership using biometrics"
        onclick={handleVerifyClick}
        class="slds-var-m-left_x-small">
      </lightning-button>
    </div>
    <div class="slds-var-m-around_medium">
      <lightning-formatted-text value={status}></lightning-formatted-text>
    </div>
  </lightning-card>    
</template>
```

```
import { LightningElement } from 'lwc';
import { getBiometricsService } from 'lightning/mobileCapabilities';

export default class NimbusPluginBiometricsService extends LightningElement {
    status;
    biometricsService;

    connectedCallback() {
      this.biometricsService = getBiometricsService();
    }

    handleVerifyClick() {
      if (this.biometricsService.isAvailable()) {
        const options = {
          permissionRequestBody: "Required to confirm device ownership.",
          additionalSupportedPolicies: ['PIN_CODE']
        };
        this.biometricsService.checkUserIsDeviceOwner(options)
          .then((result) => {
            // Do something with the result
            if (result === true) {
              this.status = "✔ Current user is device owner."
            } else {
              this.status = "𐄂 Current user is NOT device owner."
            }
          })
          .catch((error) => {
            // Handle errors
            this.status = 'Error code: ' + error.code + '
Error message: ' + error.message;
          });
      } else {
        // service not available
        this.status = 'Problem initiating Biometrics service. Are you using a mobile device?';
      }
    }
}
```

## Related Topics

- Use the BiometricsService API (atlas.en-us.mobile_offline.meta/mobile_offline/use_biometricsservice_in_a_lightning_component.htm)
