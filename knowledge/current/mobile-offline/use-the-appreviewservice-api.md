---
title: "Use the AppReviewService API"
domain: mobile-offline
topic: use-the-appreviewservice-api
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:56.773Z
estimatedTokens: 606
keywords: [AppReviewService, API, develop, Lightning, web, component, app, review, features, Import, Test, Availability]
---

# Use the AppReviewService API

> To develop a Lightning web component with app review features, use the
        AppReviewService API.

# Use the AppReviewService API

To develop a Lightning web component with app review features, use the AppReviewService API.

1.  Import AppReviewService into your component definition to make the AppReviewService API functions available to your code.
2.  Test to make sure AppReviewService is available before you call app feedback functions.
3.  Use the app review functions to ask users app review related questions.

## Import AppReviewService into a Component

In your component’s JavaScript file, import AppReviewService using the standard JavaScript import statement. Specifically, import the [getAppReviewService()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-lightning-appreviewservice-factory.html "HTML (New Window)") factory function from the lightning/mobileCapabilities module, like so:

```

```

After it’s imported into your component, use the factory function to get an instance of AppReviewService. With your AppReviewService instance, use the utility functions and constants to verify availability. Use the app review related functions to perform app review operations.

## Test AppReviewService Availability

AppReviewService depends on physical device hardware and platform features. A component that uses AppReviewService renders without errors on a desktop computer or in a mobile browser, but app review functions fail. To avoid these errors, test if AppReviewService functionality is available before you use it.

```

```

## Request an App Review

It’s straightforward to create an app review feature using AppReviewService.

1.  Start a review request with requestAppReview().
2.  Handle the results of the app review request.

For example:

```

```

See [requestAppReview()](https://developer.salesforce.com/docs/platform/lwc/guide/reference-lightning-appreviewservice-requestappreview.html "HTML (New Window)") for more details about how to handle errors.

#### See Also

-   [*Lightning Web Components Developer Guide:* AppReviewService API](https://developer.salesforce.com/docs/platform/lwc/guide/reference-lightning-appreviewservice.html "Lightning Web Components Developer Guide: AppReviewService
    API - HTML (New Window)")

-   [AppReviewService Example](atlas.en-us.mobile_offline.meta/mobile_offline/use_appreviewservice_example.htm "Here’s a minimal but complete example of a Lightning web component that uses AppReviewService to request an app review.")

## Code Examples

```
import { getAppReviewService } from 'lightning/mobileCapabilities';
```

```
handleBeginClick(event) {
    const myAppReviewService = getAppReviewService();
    if(myAppReviewService.isAvailable()) {
        // Perform app review related operations
    }
    else {
        // AppReviewService not available        
        // Handle with message, error, beep, and so on
    }
}
```

```
myAppReviewService.requestAppReview(null)
.then(() => {
    // Do something with success response
    console.log("App review request complete successfully");
})
.catch((error) => {
    // Handle cancelation and scanning errors here
    console.error(error);
});
```

## Related Topics

- AppReviewService Example (atlas.en-us.mobile_offline.meta/mobile_offline/use_appreviewservice_example.htm)
