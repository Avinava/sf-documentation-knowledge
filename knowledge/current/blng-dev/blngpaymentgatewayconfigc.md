---
title: "blng__PaymentGatewayConfig__c"
domain: blng-dev
topic: blngpaymentgatewayconfigc
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:08.496Z
estimatedTokens: 301
keywords: [blng__PaymentGatewayConfig__c, configuration, integrating, Salesforce, Billing, payment, gateway, blng, _PaymentGatewayConfig, Calls]
---

# blng__PaymentGatewayConfig__c

> Represents the configuration for integrating Salesforce Billing with a
         payment gateway.

# blng\_\_PaymentGatewayConfig\_\_c

Represents the configuration for integrating Salesforce Billing with a payment gateway.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe three-letter ISO 4217 currency code associated with the invoice when multiple currencies are enabled. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The name of the payment gateway configuration. |
| SetupOwnerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the owner of the payment gateway configuration.This field is a polymorphic relationship field.Relationship NameSetupOwnerRefers ToOrganization, Profile, User |
| blng__ClassName__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe Apex class name that handles the integration with a specific payment gateway. |
