---
title: "PaymentGateway"
domain: object-reference
topic: paymentgateway
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:14.457Z
estimatedTokens: 1454
keywords: [PaymentGateway, Platform, connection, external, payment, gateway, API, version, 48.0, later, Calls, Special, Access, Rules]
---

# PaymentGateway

> Platform object that represents the connection to an external payment
      gateway. This object is available in API version 48.0 and later.

# PaymentGateway

Platform object that represents the connection to an external payment gateway. This object is available in API version 48.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

To access Salesforce Payments objects with the API, your org must have one or more of these licenses: Salesforce Payments, Salesforce Order Management, B2B Commerce, or D2C Commerce. Salesforce Payments objects are available only in Lightning Experience.

## Fields

| Field | Details |
| --- | --- |
| Comments | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAdmin-provided details about a record. Maximum of 1000 characters. |
| DefaultTapToPayLocation | TypestringPropertiesFilter, Group, Nillable, SortDescriptionStores the locationId of the location record created at Stripe. The Field Service app uses the location to process where tap-to-pay transactions are made. |
| ExternalReference | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionIdentifier of an external payment gateway. This field is unique within your organization. |
| GatewayMode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe operational mode of the payment gateway. This field determines the payment gateway’s ability to accept payments. For production orgs, the gateway must be in Live mode.Possible values are:Connected– Payment gateway is active but it can’t accept payments. This option is only valid in production orgs.Live– Payment gateway is active and can accept payments. This option is only valid in production orgs.Test –Payment gateway is active but not able to accept payments. This option is only valid in sandbox orgs, and the account can accept only test transactions. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it's possible this record is only referenced (LastReferencedDate) but not viewed. |
| MerchantAccountId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the merchant account used by the payment gateway. This merchant account links to a merchant account at a payment processor.This field is a relationship field.Relationship NameMerchantAccountRelationship TypeLookupRefers ToMerchantAccount |
| MerchantCredentialId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the merchant credential setup entity to reference merchant information.This field is a relationship field.Relationship NameMerchantCredentialRelationship TypeLookupRefers ToNamedCredential |
| PaymentGatewayName | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionAdmin-defined name for the payment gateway. |
| PaymentProcessor | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionName of payment gateway provider.Possible values are:PaypalStripe |
| PaymentStatus | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe payment gateway is active and can accept payments.Possible values are:EnabledDisabledThe default value is Disabled. |
| PayoutStatus | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionMoney can be moved from the payment provider account to the merchant bank account linked to it.Possible values are:EnabledDisabledThe default value is Disabled. |
| PaymentGatewayProviderId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the payment gateway that handles transactions between the merchant account and the payment processor.This field is a relationship field.Relationship NamePaymentGatewayProviderRelationship TypeLookupRefers ToPaymentGatewayProvider |
| ProviderAccount | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAccount ID assigned by the payment provider that identifies the linked Salesforce Payments account. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionDefines whether Salesforce Payments can use this payment gateway for calls to the external payment gateway. Inactive payment gateways can’t be used.Possible values are:Active - the merchant account can accept payments.Complete – PaymentStatus and DepositStatus are enabled and the account provided all the required information.Enabled – PaymentStatus and PayoutStatus are enabled, but the payment provider can require more information later. If the merchant doesn't provide the information then the account can become restricted. The time limit that the merchant has to provide the information is longer than the RestrictedSoon state.Pending–The merchant account exists but it can’t accept payments. This option maintains backward compatibility for accounts that were created with API version 55.0 and earlier. Pending is no longer in use for API version 57.0 and higher.Rejected – The payment provider has rejected the merchant account with an explanation.Restricted – merchant account functionality is limited. This state is only applicable if PaymentStatus, PayoutStatus, or both are disabled.RestrictedSoon – PaymentStatus and PayoutStatus are enabled, but the payment provider requires more information. If the merchant doesn't provide the information in a specific time period, then the merchant account becomes restricted. |
