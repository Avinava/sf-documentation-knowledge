---
title: "PaymentGatewayProvider"
domain: object-reference
topic: paymentgatewayprovider
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:14.508Z
estimatedTokens: 736
keywords: [PaymentGatewayProvider, Setup, entity, payment, gateways, connection, gateway, Apex, adapter, API, version, 48.0, later, Calls, Special]
---

# PaymentGatewayProvider

> Setup entity for payment gateways. Defines the connection to a payment gateway
      Apex adapter. This object is available in API version 48.0 and later.

# PaymentGatewayProvider

Setup entity for payment gateways. Defines the connection to a payment gateway Apex adapter. This object is available in API version 48.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), query(), retrieve(), search(), update(), upsert()

## Special Access Rules

To access Salesforce Payments objects with the API, your org must have one or more of these licenses: Salesforce Payments, Salesforce Order Management, B2B Commerce, or D2C Commerce. Salesforce Payments objects are available only in Lightning Experience.

## Fields

| Field | Details |
| --- | --- |
| ApexAdapterId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of an APEX adapter class. The adapter interacts with your payment gateway to complete transactions. This field is unique within your organization.This field is a relationship field.Relationship NameApexAdapterRelationship TypeLookupRefers ToApexClass |
| Comments | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAdditional details about a record. Maximum of 1000 characters. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescription(Optional) An internal name you assign the adapter. For reference only.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| IdempotencySupported | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIf the same payment request is made in rapid succession, this field defines whether the Payments platform charges the customer or merchant’s card multiple times for the same transaction. This situation can occur when a user clicks a Pay button twice, or the gateway’s server goes down after fulfilling a payment request and the client immediately tries making another payment. If this field has a value of Yes, the Payments platform ignores identical payment requests made immediately after an original request.Different payment gateways have varying levels of idempotency support. When configuring a new payment gateway integration, plan accordingly.Possible values are:NoYes |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionCustomer language used for the payment gateway. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionUser-friendly name of the payment gateway provider. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionNamespace for the payment gateway platform. |
