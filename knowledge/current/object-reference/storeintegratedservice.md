---
title: "StoreIntegratedService"
domain: object-reference
topic: storeintegratedservice
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:17.475Z
estimatedTokens: 416
keywords: [StoreIntegratedService, association, integration, store, API, version, 49.0, later, Calls, Special, Access, Rules]
---

# StoreIntegratedService

> Represents an association between an integration and a store. This object
    is available in API version 49.0 and later.

# StoreIntegratedService

Represents an association between an integration and a store. This object is available in API version 49.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

The StoreIntegratedService object is available only if the B2B Commerce license is enabled.

## Fields

| Field | Details |
| --- | --- |
| Integration | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The integration ID.Possible values are:If the integration is a RegisteredExternalService:The ID of the RegisteredExternalService OR[ServiceProviderType]__[DeveloperName]ServiceProviderType: Price, Inventory, Tax, or ShipmentDeveloperName of RegisteredExternalServiceIf the integration is a PaymentGateway:The ID of the PaymentGatewayIf the integration is a Flow:[ServiceProviderType]__[NamespacePrefix]__[ApiName]If NamespacePrefix is null, it’s [ServiceProviderType]__[ApiName]ServiceProviderType: FlowApiName and NamespacePrefix of FlowDefinitionViewIf the integration is the Salesforce Standard pricing:[ServiceProviderType]__B2B_STOREFRONT__StandardPricingServiceProviderType: Price |
| ServiceProviderType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The type of integration service provider.Possible values are:FlowInventoryPaymentPricePromotions (this value is available in API version 53.0 and later)ShipmentTax |
| StoreId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The unique ID for the store. |
