---
title: "NFCService Example"
domain: mobile-offline
topic: nfcservice-example
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:57.139Z
estimatedTokens: 125
keywords: [NFCService, Here’s, basic, Lightning, web, component, uses, parse, text, data, image]
---

# NFCService Example

> Here’s a basic example of a Lightning web component that uses NFCService to parse text
    data from an image.

# NFCService Example

Here’s a basic example of a Lightning web component that uses NFCService to parse text data from an image.

The component’s HTML template is minimal, with a display view that includes three buttons, one each for read, erase, and write operations.

```

```

This example uses NFCService to select the NFC operation to be performed, performs the operation, and displays a success message when completed successfully. An error message is returned when there’s an error.

```

```

## Code Examples

```
<template>
  <lightning-card title="NFC Service Demo" icon-name="custom:phone_portrait">
    <div class="slds-var-m-around_medium">
      Choose an action to perform on an NFC tag:<br><br>

      <lightning-button
        variant="brand"
        label="Read" 
        title="Read the content of an NFC tag"
        onclick={handleReadClick}>
      </lightning-button>
      <lightning-button
        variant="brand"
        label="Erase" 
        title="Erase the content of an NFC tag"
        onclick={handleEraseClick} 
        class="slds-var-m-left_x-small">
      </lightning-button>
      <lightning-button
        variant="brand"
        label="Write" 
        title="Write sample content to an NFC tag"
        onclick={handleWriteClick} 
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
import { getNfcService } from 'lightning/mobileCapabilities';

export default class NimbusPluginNfcService extends LightningElement {
    status;
    nfcService;

    connectedCallback() {
      this.nfcService = getNfcService();
    }

    handleReadClick() {
      if(this.nfcService.isAvailable()) {
        const options = {
          "instructionText": "Hold your phone near the tag to read.",
          "successText": "Tag read successfully!"
        };
        this.nfcService.read(options)
          .then((result) => {
            // Do something with the result
            this.status = JSON.stringify(result, undefined, 2);
          })
          .catch((error) => {
            // Handle errors
            this.status = 'Error code: ' + error.code + '
Error message: ' + error.message;
          });
      } else {
        // service not available
        this.status = 'Problem initiating NFC service. Are you using a mobile device?';
      }
    }

    handleEraseClick() {
      if(this.nfcService.isAvailable()) {
        const options = {
          "instructionText": "Hold your phone near the tag to erase.",
          "successText": "Tag erased successfully!"
        };
        this.nfcService.erase(options)
          .then(() => {
            this.status = "Tag erased successfully!";
          })
          .catch((error) => {
            // Handle errors
            this.status = 'Error code: ' + error.code + '
Error message: ' + error.message;
          });
      } else {
        // service not available
        this.status = 'Problem initiating NFC service. Are you using a mobile device?';
      }
    }

    async handleWriteClick() {
      if(this.nfcService.isAvailable()) {
        const options = {
          "instructionText": "Hold your phone near the tag to write.",
          "successText": "Tag written successfully!"
        };
        const payload = await this.createWritePayload();
        this.nfcService.write(payload, options)
          .then(() => {
            this.status = "Tag written successfully!";
          })
          .catch((error) => {
            // Handle errors
            this.status = 'Error code: ' + error.code + '
Error message: ' + error.message;
          });
      } else {
        // service not available
        this.status = 'Problem initiating NFC service. Are you using a mobile device?';
      }
    }

    async createWritePayload() {
      // Here we demonstrate how you can write several records to an NFC tag.
      // Consider the scenario where you want to write the content of a business card
      // to an NFC tag. The content can be broken down into a number of text and uri records.
      const nameRecord = await this.nfcService.createTextRecord({text: "John Smith", langId: "en"});
      const phone1Record = await this.nfcService.createTextRecord({text: "(123) 456-7890 Office", langId: "en"});
      const phone2Record = await this.nfcService.createTextRecord({text: "(321) 654-0987 Direct", langId: "en"});
      const emailRecord = await this.nfcService.createUriRecord("mailto:john.smith@email.com");
      const addressRecord = await this.nfcService.createTextRecord({text: "584 South Paris Hill Ave., Lancaster, CA 93535", langId: "en"});
      const websiteRecord = await this.nfcService.createUriRecord("https://www.mycompany.com");
      return [nameRecord, phone1Record, phone2Record, emailRecord, addressRecord, websiteRecord];
    }
}
```
