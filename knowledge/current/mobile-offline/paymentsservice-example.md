---
title: "PaymentsService Example"
domain: mobile-offline
topic: paymentsservice-example
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:57.161Z
estimatedTokens: 140
keywords: [PaymentsService, Here’s, basic, Lightning, web, component, minimal, HTML, template, includes, button, initiates, collecting, payment]
---

# PaymentsService Example

> Here’s a basic example of a Lightning web component minimal HTML template that
        includes a button that initiates collecting payment.

# PaymentsService Example

Here’s a basic example of a Lightning web component minimal HTML template that includes a button that initiates collecting payment.

```

```

This example uses PaymentsService to let the user collect a payment.

```

```

#### See Also

-   [Use the PaymentsService API](atlas.en-us.mobile_offline.meta/mobile_offline/use_paymentsservice_in_a_lightning_component.htm "To develop an LWC with the Payments Service plug-in features, use the Payments Plugin API as your method for accessing a device’s native Tap to Pay functionality.")

## Code Examples

```
<template>
    <lightning-card title="Payment Processing">
        <div class="slds-m-around_medium">
            <lightning-button 
                label="Validate Supported Methods" 
                onclick={handleValidateMethods} 
                variant="neutral"
                class="slds-m-right_x-small">
            </lightning-button>
            <lightning-button 
                label="Collect Payment" 
                onclick={handleCollectPayment} 
                variant="brand">
            </lightning-button>
        </div>
<div class="slds-var-m-around_medium">
      <div if:true={spinnerEnabled} class="spinnerHolder">
        <lightning-spinner alternative-text="Processing" size="large"></lightning-spinner>
      </div>
      <lightning-formatted-rich-text value={paymentsServiceResponse}></lightning-formatted-rich-text>
    </div>
    </lightning-card>
</template>
```

```
import { LightningElement, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { getPaymentsService } from 'lightning/mobileCapabilities';


export default class PaymentsService extends LightningElement {
    myPaymentsService;
    paymentServiceUnavailable = false;
    tapToPayUnAvailable = true;
    
    paymentsServiceResponse = '';
    spinnerEnabled = false;
    amountValue = '150.00';
    currencyCodeValue = 'USD';
    paymentMethodValue = 'TAP_TO_PAY';
    merchantNameValue = 'Play Board';
    merchantAccountIdValue = '8zbXXXXXXXXXXXXX';
    payerAccountIdValue = '001XXXXXXXXXXXXX';
    sourceObjectIdValue = 'XXXXXXXXXXXXXXXX';


    showSpinner() { this.spinnerEnabled = true; }
    hideSpinner() { this.spinnerEnabled = false; }


    // When the component is initialized, determine whether to enable the buttons
    connectedCallback() {
        this.myPaymentsService = getPaymentsService();
        if (!this.myPaymentsService?.isAvailable()) {
            this.paymentServiceUnavailable = true;
            this.paymentsServiceResponse = 'Payments Service is unavailable.';
        }
    }


    processResult(result) {
		var confirmationId = JSON.stringify(result.guid, undefined, 2);
		var confirmationStatus = JSON.stringify(result.status, undefined, 2);
        this.paymentsServiceResponse = "Confirmation Status: " + confirmationStatus + ", Confirmation ID: " + confirmationId;
    }


    processError(error) {
        // The user canceled the operation
        if (error.code === 'USER_DISMISSED') {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Operation Canceled',
                    message: 'Operation canceled by the user.',
                    mode: 'sticky'
                })
            );
        } 
        else {
        // There was some other kind of error so inform the user we ran into something unexpected


            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Payments Service Error',
                    message: 'Message: ${error.message}
Code: ${error.code}',
                    variant: 'error',
                    mode: 'sticky'
                })
            );
        }
    }


    handleBeginSupportedMethodsClick() {
        let options = {
            'countryIsoCode': this.currencyCodeValue,
            'merchantAccountId': this.merchantAccountIdValue
        }


        this.paymentsServiceResponse = '';
        this.showSpinner();


        this.myPaymentsService.getSupportedPaymentMethods(options)
        .then((result) => {
			if (result.contains("TAP_TO_PAY")) {
            		this.tapToPayUnAvailable = false;
}
            
        })
        .catch((error) => {
            this.tapToPayUnAvailable = true;
        })
        .finally(() => this.hideSpinner());
    }


    handleBeginCollectPaymentClick() {
        
        let options = {
            'amount': Number(this.amountValue),
            'currencyIsoCode': this.currencyCodeValue,
            'paymentMethod': this.paymentMethodValue,
            'merchantName': this.merchantNameValue,
            'merchantAccountId': this.merchantAccountIdValue,
            'payerAccountId': this.payerAccountIdValue,
            'sourceObjectIds': [this.sourceObjectIdValue]
        }


        this.paymentsServiceResponse = '';
        this.showSpinner();
        
        this.myPaymentsService.collectPayment(options)
        .then((result) => this.processResult(result))
        .catch((error) => this.processError(error))
        .finally(() => this.hideSpinner());
    }
}
```

## Related Topics

- Use the PaymentsService API (atlas.en-us.mobile_offline.meta/mobile_offline/use_paymentsservice_in_a_lightning_component.htm)
