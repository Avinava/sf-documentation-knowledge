---
title: "RegisteredExternalService"
domain: tooling-api
topic: registeredexternalservice
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:46.632Z
estimatedTokens: 1685
keywords: [RegisteredExternalService, Represents, registered, external, service, used, provide, extension, integration., API, version, 49.0, later., Important, Supported, SOAP, Calls, REST, Special, Access]
---

# RegisteredExternalService

> Represents a registered external service used to provide an extension or
         integration. This object is available in API version 49.0 and later.

# RegisteredExternalService

Represents a registered external service used to provide an extension or integration. This object is available in API version 49.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_tooling)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

The RegisteredExternalService object is available only if the B2B Commerce or D2C Commerce license is enabled.

## Fields

| Field | Details |
| --- | --- |
| ConfigUrl | TypeurlPropertiesFilter, Nillable, SortDescriptionLink to the configuration page for the integration. |
| Description | TypestringPropertiesFilter, Group, Nillable, SortDescriptionDescription of the external service provider.This field is available in API version 59.0 and later. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| DocumentationUrl | TypeurlPropertiesFilter, Nillable, SortDescriptionLink to documentation for the registered external service. |
| ExtensionPointName | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThis field is available in API version 55.0 and later. Name of an extension point.Possible values are:Commerce_Domain_Cart_CalculateCommerce_Domain_Checkout_CreateOrderCommerce_Domain_Inventory_CartCalculatorCommerce_Domain_Inventory_ServiceCommerce_Domain_OrderManagement_ProductCommerce_Domain_Pricing_CartCalculatorCommerce_Domain_Pricing_ServiceCommerce_Domain_Promotions_CartCalculatorCommerce_Domain_Promotions_ShippingCalculatorCommerce_Domain_Shipping_CartCalculatorCommerce_Domain_Shipping_SplitShipmentCommerce_Domain_Tax_CartCalculatorCommerce_Domain_Tax_ServiceCommerce_Endpoint_Account_AddressCommerce_Endpoint_Account_AddressesCommerce_Endpoint_Cart_ItemCommerce_Endpoint_Cart_ItemCollectionCommerce_Endpoint_Catalog_ProductCommerce_Endpoint_Catalog_ProductsCommerce_Endpoint_Search_ProductSearchCommerce_Endpoint_Search_ProductsCommerce_Endpoint_Search_ProductsByCategory |
| ExternalServiceProviderId | TypereferencePropertiesFilter, Group, SortDescriptionRequired. The ID of an Apex class functioning as a provider. The Apex class can either implement one of the following interfaces:sfdc_checkout.CartInventoryValidationsfdc_checkout.CartPriceCalculationssfdc_checkout.CartShippingChargessfdc_checkout.CartTaxCalculationsor the Apex class can extend one of the base classes for an extension. See Available Extensions.This field is a relationship field.Relationship NameExternalServiceProviderRelationship TypeLookupRefers ToApexClass |
| ExternalServiceProviderType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of external service provider. For an extension, you set the type to Extension, and you specify an extensionPointName. For example, for a Pricing Cart Calculator extension, you specify Commerce_Domain_Pricing_CartCalculator as the extensionPointName. For an integration, you set the type to one of the other possible values, such as Price, and you omit extensionPointName.Possible values are:Extension (this value is available in API version 55.0 and later)InventoryPricePromotions (this value is available in API version 53.0 and later)ShipmentTax |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the associated RegisteredExternalService in the Metadata API. The full name can include a namespace prefix. |
| IconUri | TypeurlPropertiesFilter, Nillable, SortDescriptionURI of icon for the extension provider.This field is available in API version 59.0 and later. |
| IsApplication | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates if the extension provider is contained within a managed package.The default value is false.This field is available in API version 59.0 and later. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe language of the RegisteredExternalService.Possible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionLabel for the RegisteredExternalService. |
| Metadata | Typehttps://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/meta_flexipage.htmPropertiesCreate, Nillable, UpdateDescriptionThe metadata for the RegisteredExternalService. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that aren’t Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |
