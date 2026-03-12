---
title: "Use the PaymentsService API"
domain: mobile-offline
topic: use-the-paymentsservice-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:57.165Z
estimatedTokens: 652
keywords: [PaymentsService, API, develop, LWC, Payments, Service, plug-in, features, Plugin, accessing, device’s, native, Tap, Pay, functionality]
---

# Use the PaymentsService API

> To develop an LWC with the Payments Service plug-in features, use the Payments Plugin
        API as your method for accessing a device’s native Tap to Pay functionality.

# Use the PaymentsService API

To develop an LWC with the Payments Service plug-in features, use the Payments Plugin API as your method for accessing a device’s native Tap to Pay functionality.

1.  Import PaymentsService to make the PaymentsService API functions available to your code.
2.  Test to make sure PaymentsService is available before you call payment functions.
3.  Use the payment functions to start collecting payments.

## Add PaymentsService to a Lightning Web Component

In your component’s JavaScript file, import PaymentsService using the standard JavaScript import statement. Specifically, import the getPaymenntsService() factory function from the lightning/mobileCapabilities module, like so:

```

```

After it’s imported into your component, use the factory function to get an instance of PaymentsService. With your PaymentsService instance, use the utility functions and constants to verify availability. Then use the feature functions to perform the associated functionality.

## Test PaymentsService Availability

PaymentsService depends on physical device hardware and platform features. A component that uses PaymentsService renders without errors on a desktop computer or in a mobile browser, but PaymentsService functions fail. To avoid these errors, test if PaymentsService functionality is available before you use it.

```

```

## Start PaymentsService to Collect Payments

The PaymentsService exposes two API endpoints. The first one is getSupportedPaymentMethods that returns a list of available payment methods for the current device running. The second API method is called collectPayment.

Start by checking which payment methods are available, and then call the collect payment method to collect the payment using one of the available methods.

```

```

Considerations:

-   Calling getSupportedPaymentMethods or collectPayment requires passing in an options object.
-   The options object has some required fields and missing those fields results in the Payments plugin not working properly. See the PaymentsService API for the required fields.

#### See Also

-   [*Lightning Web Components Developer Guide:* PaymentsService API](https://developer.salesforce.com/docs/platform/lwc/guide/reference-lightning-paymentsservice.html "Lightning Web Components Developer Guide: PaymentsService
    API - HTML (New Window)")

-   [PaymentsService Example](atlas.en-us.mobile_offline.meta/mobile_offline/use_paymentsservice_example.htm "Here’s a basic example of a Lightning web component minimal HTML template that includes a button that initiates collecting payment.")

## Code Examples

```
import { getPaymentsService } from 'lightning/mobileCapabilities';
```

```
handleCheckCollectPaymentServiceClick(event) {
    const myPaymentsService = getPaymentsService();
    if(myPaymentsService.isAvailable()) {
	 // Perform next operations
  } else {
	// Payments Service isn’t available, or consuming app hasn’t implemented it
	// Not running on hardware with TTP functionality, etc.
	// Handle with message, error, beep, and so on
  }
}
```

```
handleGetSupportedMethodsClicked(event) {
	if (this.myPaymentsService != null && this.myPaymentsService.isAvailable()) {
	let supportedMethodsOptions = {
		countryIsoCode: "USD", 
		merchantAccountId: "8zbxxxxxxxxxxx"
	}
this.myPaymentsService.getSupportedPaymentMethods(supportedMethodsOptions).then((supportedMethodsResult) => { 
if (supportedMethods.contains("TAP_TO_PAY")) {
		let collectPaymentOptions = {
		amount: "350.50", 
		paymentMethod: "TAP_TO_PAY"
		currencyIsoCode: "USD", 
		merchantAccountId: "8zbxxxxxxxxxxx",
		merchantName: "My Service",
		payerAccountId: "001xxxxxxxxxx", 
		sourceObjectIds: ["xxxxxxxxxxx", "xxxxxxxxxxx"]
	}
this.myPaymentsService.collectPayment(collectPaymentOptions).then((collectPaymentResult) => {
let paymentStatus = collectPaymentResult.status;
	// handle status. "success" status will reflect a successful payment collect
}).catch((collectPaymentError) => {
if (collectPaymentError.code !== 'USER_DISMISSED') {
// handle error case
}
})


}
}).catch((error) => {
	console.log(error);
});
}
}
```

## Related Topics

- PaymentsService Example (atlas.en-us.mobile_offline.meta/mobile_offline/use_paymentsservice_example.htm)
