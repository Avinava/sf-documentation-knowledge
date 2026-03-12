---
title: "Configure Product Bundles"
domain: cpq-plugins
topic: configure-product-bundles
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:23.905Z
estimatedTokens: 605
keywords: [Configure, Product, Bundles, optionConfigurations, nest, four, levels, deep, including, top-level, Enable, Nested, Work, Anywhere, Software]
---

# Configure Product Bundles

> Use the optionConfigurations parameter to create product bundles.
  You can nest bundles up to four levels deep, including the top-level product.

# Configure Product Bundles

Use the optionConfigurations parameter to create product bundles. You can nest bundles up to four levels deep, including the top-level product.

| Available in: Salesforce CPQ Winter ’16 and later |
| --- |


## Enable Nested Bundles

1.  From Setup, enter Installed Packages, and then select Installed Packages.
2.  Find the Salesforce CPQ package and click **Configure**.
3.  Navigate to the **Additional Settings** tab and select **Nested Bundles for External Configurator.**.
4.  Click **Save**.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=cpq_plugins)

#### Note

This setting can’t be disabled.

## Create Nested Bundles

Use the optionConfigurations parameter to define a nested product in a bundle.

## Create a Work Anywhere Software Bundle

For example, suppose that a sales rep quotes a Work Anywhere software product. The Work Anywhere product can include VPN access as a nested option. The VPN access can include the Ultra High-Speed option, and the Ultra HighSpeed option can include the Ad Blocker:

```

```

Use the following payload to configure the Work Anywhere bundle .

```

```

## Considerations for Nested Bundles

Consider the following when configuring nested bundles with the external configurator.

-   You can configure up to four levels of nested bundles, including the top-level product. If you reconfigure a bundle containing five levels, only four levels are sent to the external configurator. Deselect the fifth level by deselecting the top-level product.
-   We don't support the auto property with bundles, so users can't return to the Salesforce CPQ configurator and continue configuring the product. Instead, users are redirected back to the quote line editor.
-   Default configurations aren’t supported. When returning the payload, you must explicitly select each nested option, even for reconfiguration payloads.
-   Nested bundles are assumed configured. Nested bundles with the product’s Configuration Type set to Required are considered configured if they’re part of the payload.
-   Min/Max options aren’t supported with the external configurator. Min/Max options are directed to the Salesforce CPQ configurator. Attempting to set min/max options with the external configurator can result in errors.
-   Duplicate dynamic options are supported. That is, you can add the same option to a bundle multiple times.

## Code Examples

```
Work Anywhere
    VPN Access
        Ultra High Speed
           Ad Blocker
```

```
{
  "quote": {},
  "product": {
    "configuredProductId": "<Product2 Id>"  // ID of the WorkAnywhere Product,
    "lineItemId": null,
    "lineKey": null,
    "configurationAttributes": {
      "SBQQ__UnitPrice__c": null,
      "attributes": {
        "type": "SBQQ__ProductOption__c"
      }
    },
    "optionConfigurations": {
      "Other Options": [
        {
          "optionId": "<SBQQ__ProductOption__c Id>",
          "selected": true,
          "ProductName": "VPN Access",
          "Quantity": 1,
          "configurationData": {},
          "readOnly": {},
          "optionConfigurations": {
            "Other Options": [
              {
                "optionId": "<SBQQ__ProductOption__c Id>",
                "selected": true,
                "ProductName": "Ultra High Speed",
                "Quantity": 1,
                "configurationData": {},
                "readOnly": {},
                "optionConfigurations": {
                  "Other Options": [
                    {
                      "optionId": "<SBQQ__ProductOption__c Id>",
                      "selected": true,
                      "ProductName": "Ad Blocker",
                      "Quantity": 1,
                      "configurationData": {},
                      "readOnly": {}
                    }
                  ]
                }
              }
            ]
          }
        }
      ]
    },
    "configurationData": {}
  },
  "products": [],
  "readOnly": {},
  "redirect": {
    "save": true
  }
}
```
