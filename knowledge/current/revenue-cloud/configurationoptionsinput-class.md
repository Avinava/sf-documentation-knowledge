---
title: "ConfigurationOptionsInput Class"
domain: revenue-cloud
topic: configurationoptionsinput-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:06.303Z
estimatedTokens: 1682
namespace: RevSalesTrxn
keywords: [ConfigurationOptionsInput, configuration, options, input, product, configurator, Usage, addDefaultConfiguration, executeConfigurationRules, validateAmendRenewCancel, validateProductCatalog, equals, obj, hashCode, toString, Converts]
---

# ConfigurationOptionsInput Class

> Contains methods and properties to set the configuration options for the input to the
    product configurator.

**Namespace:** `RevSalesTrxn`

# ConfigurationOptionsInput Class

Contains methods and properties to set the configuration options for the input to the product configurator.

## Namespace

[RevSalesTrxn](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_RevSalesTrxn.htm "Create a sales transaction, such as a quote or an order, with integrated pricing and configuration. Additionally, update an order or a quote, and insert and delete order or quote line items to calculate the estimated tax.")

## Usage

This class holds the required details of the product configuration input. Set the class properties to enable default configuration, execution of configuration rules, and validation of the product catalog. Use these class properties as an input to the [PlaceSalesTransactionExecutor](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSalesTrxn_PlaceSalesTransactionExecutor.htm#apex_class_RevSalesTrxn_PlaceSalesTransactionExecutor "Contains methods to place a sales transaction with details of the graph request, pricing preferences, and configuration options.") class method.

## Example

```

```

-   **[ConfigurationOptionsInput Properties](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSalesTrxn_ConfigurationOptionsInput.htm#apex_RevSalesTrxn_ConfigurationOptionsInput_properties)**
    Set the ConfigurationOptionsInput class properties to add default configuration, execute configuration rules, and validate the product catalog.
-   **[ConfigurationOptionsInput Methods](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSalesTrxn_ConfigurationOptionsInput.htm#apex_RevSalesTrxn_ConfigurationOptionsInput_methods)**
    Learn more about the methods available with the ConfigurationOptionsInput class.

## ConfigurationOptionsInput Properties

Set the ConfigurationOptionsInput class properties to add default configuration, execute configuration rules, and validate the product catalog.

The ConfigurationOptionsInput class includes these properties.

-   **[addDefaultConfiguration](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSalesTrxn_ConfigurationOptionsInput.htm#apex_RevSalesTrxn_ConfigurationOptionsInput_addDefaultConfiguration)**
    Sets the default product configuration, such as bundle and product attributes, for a quote request.
-   **[executeConfigurationRules](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSalesTrxn_ConfigurationOptionsInput.htm#apex_RevSalesTrxn_ConfigurationOptionsInput_executeConfigurationRules)**
    Sets the requirement for a quote to adhere to the configuration rules.
-   **[validateAmendRenewCancel](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSalesTrxn_ConfigurationOptionsInput.htm#apex_RevSalesTrxn_ConfigurationOptionsInput_validateAmendRenewCancel)**
    Sets the requirement to run validations related to amend, renew, or cancel processes.
-   **[validateProductCatalog](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSalesTrxn_ConfigurationOptionsInput.htm#apex_RevSalesTrxn_ConfigurationOptionsInput_validateProductCatalog)**
    Sets the requirement to validate a quote against the product catalog.

### addDefaultConfiguration

Sets the default product configuration, such as bundle and product attributes, for a quote request.

#### Signature

public Boolean addDefaultConfiguration {get; set;}

#### Property Value

Type: Boolean

Indicates whether to automatically add default configuration to the order (true) or not (false).

### executeConfigurationRules

Sets the requirement for a quote to adhere to the configuration rules.

#### Signature

public Boolean executeConfigurationRules {get; set;}

#### Property Value

Type: Boolean

Indicates whether the order must adhere to configuration rules during processing (true) or bypass them (false).

### validateAmendRenewCancel

Sets the requirement to run validations related to amend, renew, or cancel processes.

#### Signature

public Boolean validateAmendRenewCancel {get; set;}

#### Property Value

Type: Boolean

Indicates whether to run validations related to amend, renew, or cancel processes (true) or not (false).

### validateProductCatalog

Sets the requirement to validate a quote against the product catalog.

#### Signature

public Boolean validateProductCatalog {get; set;}

#### Property Value

Type: Boolean

Indicates whether the quote must be validated against the product catalog (true) or not (false).

## ConfigurationOptionsInput Methods

Learn more about the methods available with the ConfigurationOptionsInput class.

The ConfigurationOptionsInput class includes these methods.

-   **[equals(obj)](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSalesTrxn_ConfigurationOptionsInput.htm#apex_RevSalesTrxn_ConfigurationOptionsInput_equals)**
    Determines the equality of external objects in a list. This method is dynamic and is based on the equals() method in Java.
-   **[hashCode()](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSalesTrxn_ConfigurationOptionsInput.htm#apex_RevSalesTrxn_ConfigurationOptionsInput_hashCode)**
    Determines the uniqueness of the external object records in a list.
-   **[toString()](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSalesTrxn_ConfigurationOptionsInput.htm#apex_RevSalesTrxn_ConfigurationOptionsInput_toString)**
    Converts a value to a string.

### equals(obj)

Determines the equality of external objects in a list. This method is dynamic and is based on the equals() method in Java.

#### Signature

public Boolean equals(Object obj)

#### Parameters

obj

Type: Object

Reference object that’s used to compare with the class object.

#### Return Value

Type: Boolean

Indicates if the class object is same as the reference object (true) or not (false).

### hashCode()

Determines the uniqueness of the external object records in a list.

#### Signature

public Integer hashCode()

#### Return Value

Type: Integer

Integer hash code that represents the value of the object. Equal objects as per the equals() method must return the same hash code.

### toString()

Converts a value to a string.

#### Signature

public String toString()

#### Return Value

Type: String

## Code Examples

```
RevSalesTrxn.GraphRequest graph = new RevSalesTrxn.GraphRequest('test', listOfRecords);
    RevSalesTrxn.PricingPreferenceEnum pricingPrefEnum = RevSalesTrxn.PricingPreferenceEnum.SYSTEM;
    RevSalesTrxn.ConfigurationExecutionEnum configurationExecutionEnum = RevSalesTrxn.ConfigurationExecutionEnum.SYSTEM;
    RevSalesTrxn.ConfigurationOptionsInput cInput = new RevSalesTrxn.ConfigurationOptionsInput();
    cInput.addDefaultConfiguration = true;
    cInput.executeConfigurationRules = true;
    cInput.validateAmendRenewCancel = true;
    cInput.validateProductCatalog = true;
        //Place Sales Transaction API Call
     RevSalesTrxn.PlaceSalesTransactionResponse resp = PlaceQuote.PlaceSalesTransactionExecutor.execute(graph,pricingPrefEnum,configurationExecutionEnum,cInput,null);
```

```
CommerceOrders.ConfigurationOptionsInput configurationInput = new CommerceOrders.ConfigurationOptionsInput();
configurationInput.validateProductCatalog = true;
configurationInput.validateAmendRenewCancel = true;
configurationInput.executeConfigurationRules = true;
configurationInput.addDefaultConfiguration = true;

CommerceOrders.GraphRequest graph = new CommerceOrders.GraphRequest('testGraph', recordNodes);
CommerceOrders.PlaceOrderResult result = CommerceOrders.PlaceOrderExecutor.execute(graph, pricingPreference, configurationPreference, configurationInput);
```

```
PlaceQuote.GraphRequest graph = new PlaceQuote.GraphRequest('test',listOfRecords);
    PlaceQuote.PricingPreferenceEnum pricingPreference = PlaceQuote.PricingPreferenceEnum.System;
    PlaceQuote.ConfigurationInputEnum configurationPreference = PlaceQuote.ConfigurationInputEnum.RunAndAllowErrors;
    PlaceQuote.ConfigurationOptionsInput cInput = new PlaceQuote.ConfigurationOptionsInput();
    cInput.addDefaultConfiguration = true;
    cInput.executeConfigurationRules = true;
    cInput.validateAmendRenewCancel = true;
    cInput.validateProductCatalog = true;
        //Place Quote Call
     PlaceQuote.PlaceQuoteResponse resp = PlaceQuote.PlaceQuoteRLMApexProcessor.execute(pricingPreference,graph,configurationPreference,cInput);
```

## Related Topics

- RevSalesTrxn (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_namespace_RevSalesTrxn.htm)
- PlaceSalesTransactionExecutor (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSalesTrxn_PlaceSalesTransactionExecutor.htm)
- ConfigurationOptionsInput Properties (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSalesTrxn_ConfigurationOptionsInput.htm)
- ConfigurationOptionsInput Methods (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSalesTrxn_ConfigurationOptionsInput.htm)
- addDefaultConfiguration (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSalesTrxn_ConfigurationOptionsInput.htm)
- executeConfigurationRules (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSalesTrxn_ConfigurationOptionsInput.htm)
- validateAmendRenewCancel (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSalesTrxn_ConfigurationOptionsInput.htm)
- validateProductCatalog (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSalesTrxn_ConfigurationOptionsInput.htm)
- equals(obj) (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSalesTrxn_ConfigurationOptionsInput.htm)
- hashCode() (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/apex_class_RevSalesTrxn_ConfigurationOptionsInput.htm)
