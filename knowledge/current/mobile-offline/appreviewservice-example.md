---
title: "AppReviewService Example"
domain: mobile-offline
topic: appreviewservice-example
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:56.769Z
estimatedTokens: 138
keywords: [AppReviewService, Here’s, minimal, Lightning, web, component, uses, app, review]
---

# AppReviewService Example

> Here’s a minimal but complete example of a Lightning web component that uses
        AppReviewService to request an app review.

# AppReviewService Example

Here’s a minimal but complete example of a Lightning web component that uses AppReviewService to request an app review.

The component’s HTML template contains a button to request an app review.

```

```

Each phase of the app review request writes a console message.

```

```

#### See Also

-   [Use the AppReviewService API](atlas.en-us.mobile_offline.meta/mobile_offline/use_appreviewservice_in_a_lightning_component.htm "To develop a Lightning web component with app review features, use the AppReviewService API.")

## Code Examples

```
<!-- appReviewFeedbackServiceExample.html -->
<template>
    <lightning-card title="App Review Feedback" icon-name="custom:custom14">
        <div class="slds-var-m-around_medium">
            <div>Hello, {name}!</div>
            <div class="slds-var-m-top_x-small">
                <lightning-button label="Request App Review" value="Action" onclick={handleBeginClick}></lightning-button>
            </div>
        </div>
    </lightning-card>
</template>
```

```
// appReviewServiceExample.js
import { LightningElement, wire } from 'lwc';
import { getAppReviewService } from 'lightning/mobileCapabilities';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import Id from '@salesforce/user/Id';
import NAME_FIELD from '@salesforce/schema/User.Name';
const fields = [NAME_FIELD];
const userName = getFieldValue(this.user.data, NAME_FIELD)

export default class AppReviewFeedbackService extends LightningElement {
    userId = Id;
    user;

    @wire(getRecord, { recordId: '$userId', fields })
    user;

    get name() {
        return userName || "Guest User";
    }

    handleBeginClick(event) {
        const myAppReviewService = getAppReviewService();
        if (myAppReviewService.isAvailable()) {
            myAppReviewService.requestAppReview(null)
                .then(() => {
                    // Do something with success response
                    console.log("App review request complete successfully");
                })
                .catch((error) => {
                    // Handle cancellation and scanning errors here
                    console.error(error);
                });
        }
        else {
            // Handle with message, error, beep, and so on
            console.error("App Review service not available");
        }
    }
}
```

## Related Topics

- Use the AppReviewService API (atlas.en-us.mobile_offline.meta/mobile_offline/use_appreviewservice_in_a_lightning_component.htm)
