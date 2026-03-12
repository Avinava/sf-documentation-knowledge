---
title: "External Configurator Parameters"
domain: cpq-plugins
topic: external-configurator-parameters
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.909Z
estimatedTokens: 756
keywords: [External, Configurator, Salesforce, CPQ, passes, configuration, custom, JSON, Modify]
---

# External Configurator Parameters

> Salesforce CPQ passes configuration information to your custom configurator in JSON
  format. Modify the  and return the information to Salesforce CPQ.

# External Configurator Parameters

Salesforce CPQ passes configuration information to your custom configurator in JSON format. Modify the and return the information to Salesforce CPQ.

| Available in: Salesforce CPQ Winter ’16 and later |
| --- |


The following parameters are required unless otherwise indicated.

quote

Object. The SBQQ\_\_Quote\_\_c record.

product

Object. The product being configured.

configuredProductId

String. Read-only. The ID of the Product2 record.

lineItemId

String. Read-only. The ID of the corresponding quote line. Populated on reconfigure when the quote line is saved.

lineKey

Number. Read-only. Salesforce CPQ uses this field to identify the corresponding quote line for this product.

configurationAttributes

Object. Required, but can be empty. If you use configuration attributes, this parameter contains the attribute field values.

optionConfigurations

Object. Indicates the options for a nested bundle.

optionId

String. Required for static options. The ID of the SBQQ\_\_ProductOption\_\_c record.

productId

String. Required for dynamic options. The ID of the SBQQ\_\_Product2\_\_c record. Available in API version 57.0 and later.

selected

Boolean. Required for static options but optional for dynamic options. true if the product option is selected; otherwise false.

ProductName

String. Read-only. Name of the product.

Quantity

Number. The line item’s quantity.

configurationData

Object. Required, but can be empty. Use this parameter to set editable SBQQ\_\_ProductOption\_\_c fields, which can be used with rules or twin field mapping.

readOnly

Object. The quote line that corresponds to the selected option. Salesforce CPQ populates this field on reconfigure requests.

index

Number. Required when the SBQQ\_\_ProductFeature\_\_c record’s Option Selection Method field is Add. When you add the same product to a feature multiple time, use this parameter to uniquely identify each instance of the same product.

optionConfigurations

Object. Available when Nested Bundles for External Configurator is enabled. Available in API version 56.0 and later. Use this object to include options for a nested bundle

configurationData

Object. Required, but can be empty. Field - value pair that sets twin field values on the quote line for the product being configured.

products

Array. Optional. Use this parameter to clone the product that is being configured.

readOnly

Object. The quote line that corresponds to the product being configured. Salesforce CPQ populates this field on reconfigure requests.

redirect

Object. Contains properties that specify the save and redirect behavior.

save

Boolean. To save the configuration, set this parameter to true. To cancel the configuration, set this value to false.

auto

Boolean. To redirect the user to the quote line editor, set this value to true. To redirect the user to the CPQ Configurator, set this value to false. This parameter isn’t available when Nested Bundles for External Configurator is enabled.
