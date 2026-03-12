---
title: "Track Preferences and Activation Metrics with Subscriber-to-LMO Feature Parameters"
domain: pkg1-dev
topic: track-preferences-and-activation-metrics-with-subscriber-to-lmo-feature-paramete
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:25.364Z
estimatedTokens: 400
keywords: [Track, Preferences, Activation, Metrics, Subscriber-to-LMO, Feature, subscriber’s, org, assigned, end, sent, LMO, collect, Apex, code]
---

# Track Preferences and Activation Metrics with Subscriber-to-LMO Feature Parameters

> Use subscriber-to-LMO feature parameters to track feature activation in your
    subscriber’s org. Parameter values are assigned on the subscriber’s end and then sent to your
    LMO. To collect the values, update the feature parameters in your subscriber’s org using Apex
    code. Check with your legal team before obtaining activation metrics from your customers. Use
    activation metrics to collect only aggregated data regarding feature activation.

# Track Preferences and Activation Metrics with Subscriber-to-LMO Feature Parameters

Use subscriber-to-LMO feature parameters to track feature activation in your subscriber’s org. Parameter values are assigned on the subscriber’s end and then sent to your LMO. To collect the values, update the feature parameters in your subscriber’s org using Apex code. Check with your legal team before obtaining activation metrics from your customers. Use activation metrics to collect only aggregated data regarding feature activation.

-   System.FeatureManagement.setPackageBooleanValue('YourBooleanFeatureParameter', booleanValue);
-   System.FeatureManagement.setPackageDateValue('YourDateFeatureParameter', datetimeValue);
-   System.FeatureManagement.setPackageIntegerValue('YourIntegerFeatureParameter', integerValue);

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=pkg1_dev)

#### Warning

The Value\_\_c field on subscriber-to-LMO feature parameters is editable in your LMO. But don’t change it. The changes don’t propagate to your subscriber’s org, so your values will be out of sync.

You can view the value of a subscriber-to-LMO feature parameter from the [Subscriber Support Console](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/lma_subscriber_support_overview.htm).

#### See Also

-   [*Apex Reference Guide*: FeatureManagement Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_class_System_FeatureManagement.htm "Apex Reference Guide: FeatureManagement Class - HTML (New Window)")
