---
title: "GtwyProvPaymentMethodType"
domain: object-reference
topic: gtwyprovpaymentmethodtype
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:11.008Z
estimatedTokens: 1177
keywords: [GtwyProvPaymentMethodType, gateway, provider, payment, integrators, providers, choose, active, receive, order's, data, rather, allowing, Salesforce, Order]
---

# GtwyProvPaymentMethodType

> The gateway provider payment method type allows integrators and payment
      providers to choose an active payment to receive an order's payment data rather than allowing
      the Salesforce Order Management platform to select a default payment method. This object
    is available in API version 50.0 and later.

# GtwyProvPaymentMethodType

The gateway provider payment method type allows integrators and payment providers to choose an active payment to receive an order's payment data rather than allowing the Salesforce Order Management platform to select a default payment method. This object is available in API version 50.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), search(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Comments | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsers can provide additional details about the gateway provider payment method type record. Supports a maximum of 1000 characters. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, Salesforce generates one for each record, which slows performance. |
| GtwyProviderPaymentMethodType | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLinks the Salesforce payment method to the payment method used in the Salesforce Order Management storefront. Your payment gateway integration uses this field when finding a payment method to link to a payment.The value of GtwyProviderPaymentMethodType must match the payment method value sent to the order's Payment Instrument in Salesforce Order Management.Listed below are several examples of payment method values that Salesforce could receive from Salesforce Order Management.CREDIT_CARDBASIC_CREDITCreditCardGooglePayApplePay |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionLanguage of the payment gateway integration. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The gateway provider payment method type name that appears in the user interface. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionNamespace of the payment gateway integration classes. |
| PaymentGatewayProviderId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the payment gateway provider that Salesforce Order Management should use when processing payments. One payment gateway provider can be related to multiple payment method types.This is a relationship field.Relationship NamePaymentGatewayProviderRelationship TypeLookupRefers ToPaymentGatewayProvider |
| PaymentMethodType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of payment method used on an order in Salesforce Order Management.Possible values are:AlternativePaymentMethodCardPaymentMethodDigitalWallet |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the record type entity related to the gateway provider payment method type.This is a relationship field.Relationship NameRecordTypeRelationship TypeLookupRefers ToRecordType |

## Usage

The Salesforce Order Management payment record must have a ProcessorId field with the same value as the payment gateway's ExternalReferenceId field. The gateway provider payment method type record must have a PaymentMethodType field that looks up to the payment method that you want to associate to your payment. Finally, the payment gateway and gateway provider payment method type must have matching PaymentGatewayProviderId fields. When you've established these relationships, the payment record can infer your payment method from the gateway provider payment method type record.

![An ERD diagram showing the relationships between Gateway Provider Payment Method Type and its related entities.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapi%2Fimages%2FSforce_gtwyprovpaymentmethod_erd.png&folder=object_reference)
