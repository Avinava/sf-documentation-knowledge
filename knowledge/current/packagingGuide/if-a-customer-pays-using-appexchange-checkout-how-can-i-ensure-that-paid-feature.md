---
title: "If a customer pays using AppExchange Checkout, how can I ensure that paid features are
      immediately accessible?"
domain: packagingGuide
topic: if-a-customer-pays-using-appexchange-checkout-how-can-i-ensure-that-paid-feature
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:20.314Z
estimatedTokens: 235
keywords: [customer, pays, AppExchange, Checkout, how, ensure, paid, features, immediately, accessible, purchase, license, records, Management, App]
---

# If a customer pays using AppExchange Checkout, how can I ensure that paid features are
      immediately accessible?

> When a customer makes a purchase using Checkout, the license records in the License
      Management App are updated, but feature parameters aren’t. To update feature parameters that
      you've created, define an Apex trigger in your License Management Org (LMO). Have the trigger
      fire when the license record is updated. In your trigger code, update the LMO-to-subscriber
      feature parameter.

# If a customer pays using AppExchange Checkout, how can I ensure that paid features are immediately accessible?

When a customer makes a purchase using Checkout, the license records in the License Management App are updated, but feature parameters aren’t. To update feature parameters that you've created, define an Apex trigger in your License Management Org (LMO). Have the trigger fire when the license record is updated. In your trigger code, update the LMO-to-subscriber feature parameter.

#### See Also

-   [Apex Triggers](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_triggers.htm "Apex Triggers - HTML (New Window)")

-   [Use LMO-to-Subscriber Feature Parameters to Enable and Disable Features](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/fma_lmo_to_subscriber.htm "Use LMO-to-Subscriber Feature Parameters to Enable and Disable Features - HTML (New Window)")
