---
title: "RegisteredExternalService"
domain: metadata-api
topic: registeredexternalservice
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:42.289Z
estimatedTokens: 1074
keywords: [RegisteredExternalService, Represents, registered, external, service, which, provides, extension, integration., Parent, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, Declarative]
---

# RegisteredExternalService

> Represents a registered external service, which provides
			an extension or integration.

# RegisteredExternalService

Represents a registered external service, which provides an extension or integration.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

RegisteredExternalService components have the suffix .registeredExternalService and are stored in the registeredExternalServices folder.

## Version

RegisteredExternalService components are available in API version 49.0 and later.

## Special Access Rules

This metadata type is available only if the B2B Commerce or D2C Commerce license is enabled.

## Fields

| Field Name | Description |
| --- | --- |
| configUrl | Field TypestringDescriptionLink to the configuration page for the integration. |
| description | Field TypestringDescriptionDescription of the external service provider.This field is available in API version 59.0 and later. |
| documentationUrl | Field TypestringDescriptionLink to documentation for the registered external service. |
| extensionPointName | Field TypeExtensionPointName (enumeration of type string)DescriptionThis field is available in API version 55.0 and later. Name of an extension point.Possible values are:Commerce_Domain_BuyerGroup_EvaluationService—Available in API version 65.0 and later.Commerce_Domain_Cart_CalculateCommerce_Domain_Checkout_CreateOrderCommerce_Domain_Inventory_CartCalculatorCommerce_Domain_Inventory_ServiceCommerce_Domain_OrderManagement_ProductCommerce_Domain_Pricing_CartCalculatorCommerce_Domain_Pricing_ServiceCommerce_Domain_Promotions_CartCalculatorCommerce_Domain_Promotions_ShippingCalculatorCommerce_Domain_Shipping_CartCalculatorCommerce_Domain_Shipping_SplitShipmentCommerce_Domain_Tax_CartCalculatorCommerce_Domain_Tax_ServiceCommerce_Endpoint_Account_AddressCommerce_Endpoint_Account_AddressesCommerce_Endpoint_Cart_Item—Available in API version 62.0 and later.Commerce_Endpoint_Cart_ItemCollection—Available in API version 62.0 and later.Commerce_Endpoint_Catalog_ProductCommerce_Endpoint_Catalog_ProductsCommerce_Endpoint_Search_ProductSearchCommerce_Endpoint_Gift_Wraps—Available in API version 65.0 and later.Commerce_Endpoint_Search_ProductsCommerce_Endpoint_Search_ProductsByCategory |
| externalServiceProvider | Field TypestringDescriptionRequired. The ID of an Apex class functioning as a provider. The Apex class can either implement one of the following interfaces:sfdc_checkout.CartInventoryValidationsfdc_checkout.CartPriceCalculationssfdc_checkout.CartShippingChargessfdc_checkout.CartTaxCalculationsor the Apex class can extend one of the base classes for an extension. See Available Extensions. |
| externalServiceProviderType | Field TypeRegistryProviderType (enumeration of type string)DescriptionRequired. The type of external service provider. For an extension, you set the type to Extension, and you specify an extensionPointName. For example, for a Pricing Cart Calculator extension, you specify Commerce_Domain_Pricing_CartCalculator as the extensionPointName. For an integration, you set the type to one of the other possible values, such as Price, and you omit extensionPointName.Possible values are:Extension (this value is available in API version 55.0 and later)InventoryPricePromotions (this value is available in API version 53.0 and later)ShipmentTax |
| iconUri | Field TypestringDescriptionURI of icon for the extension provider.This field is available in API version 59.0 and later. |
| isApplication | Field TypebooleanDescriptionIndicates if the extension provider is contained within a managed package.The default value is false.This field is available in API version 59.0 and later. |
| isProtected | Field TypebooleanDescriptionAn auto-generated value that doesn’t impact the behavior of the metadata type.The default value is false. |
| masterLabel | Field TypestringDescriptionRequired. The primary label for the RegisteredExternalService. |

## Declarative Metadata Sample Definition

The following is an example of a RegisteredExternalService component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<RegisteredExternalService xmlns="http://soap.sforce.com/2006/04/metadata">
    <externalServiceProvider>TaxSample</externalServiceProvider>
    <externalServiceProviderType>Tax</externalServiceProviderType>
    <documentationUrl>http://sample.com/doc</documentationUrl>
    <configUrl>http://sample.com/config</configUrl>
    <masterLabel>TaxService</masterLabel>
    <isProtected>false</isProtected>
</RegisteredExternalService>
```

```
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>TaxSample</members>
        <name>ApexClass</name>
    </types>
    <types>
        <members>TaxService</members>
        <name>RegisteredExternalService</name>
    </types>
    <version>60.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
