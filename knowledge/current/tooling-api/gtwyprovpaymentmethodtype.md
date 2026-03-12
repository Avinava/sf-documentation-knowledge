---
title: "GtwyProvPaymentMethodType"
domain: tooling-api
topic: gtwyprovpaymentmethodtype
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:45.827Z
estimatedTokens: 1752
keywords: [GtwyProvPaymentMethodType, Represents, allows, integrators, payment, providers, choose, active, receive, order's, data, rather, allowing, Salesforce, Order, Management, platform, select, default, method.]
---

# GtwyProvPaymentMethodType

> Represents a type that allows integrators and payment providers to choose an
         active payment to receive an order's payment data rather than allowing the Salesforce Order
         Management platform to select a default payment method. This object is available in
      API version 50.0 and later.

# GtwyProvPaymentMethodType

Represents a type that allows integrators and payment providers to choose an active payment to receive an order's payment data rather than allowing the Salesforce Order Management platform to select a default payment method. This object is available in API version 50.0 and later.

## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), search(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

To access Commerce Payments entities, your org must have a Salesforce Order Management license with the Payment Platform org permission activated. Commerce Payments entities are available only in Lightning Experience.

## Fields

| Field | Details |
| --- | --- |
| Comments | TypetextareaPropertiesFilter, Nillable, SortDescriptionAdditional details about the gateway provider payment method type record. Max length is 1000 characters. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. This field is automatically generated, but you can supply your own value if you create the record using the API.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, Salesforce generates one for each record, which slows performance.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| Fullname | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the associated gatewayProviderPaymentMethodType in Metadata API. The full name can include a namespaceprefix.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| GtwyProviderPaymentMethodType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionLinks the Salesforce payment method to the payment method used in the Salesforce Order Management storefront. Your payment gateway integration uses this field when finding a payment method to link to a payment.The value of GtwyProviderPaymentMethodType must match the payment method value sent to the order's Payment Instrument in Salesforce Order Management.Here are examples of payment method values that Salesforce could receive from Salesforce Order Management.CREDIT_CARDBASIC_CREDITCreditCardGooglePayApplePay |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe language of the payment gateway integration. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. A null value may mean that the user only accessed this record or list view (LastReferencedDate) but did not view it. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| MasterLabel | TypestringPropertiesFilter, Group, idLookup, SortDescriptionRequired. Label for the GtwyProvPaymentMethodType. In the UI, this field is Gateway Provider Payment Method Type. |
| Metadata | TypeGatewayProviderPaymentMethodTypePropertiesCreate, Nillable, UpdateDescriptionMetadata associated with the gateway provider payment method type.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |
| PaymentGatewayProviderId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionSpecifies the payment gateway provider that Salesforce Order Management should use when processing payments. One payment gateway provider can be related to multiple payment method types.This is a relationship field.Relationship NamePaymentGatewayProviderRelationship TypeLookupRefers ToPaymentGatewayProvider |
| PaymentMethodType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the type of payment method used on an order in Salesforce Order Management.Possible values are:AlternativePaymentMethodCardPaymentMethodDigitalWallet |
| RecordTypeId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the record type entity related to the gateway provider payment method type.This is a relationship field.Relationship NameRecordTypeRelationship TypeLookupRefers ToRecordType |

## Usage

The Salesforce Order Management payment record must have a ProcessorId field with the same value as the payment gateway's ExternalReferenceId field. The gateway provider payment method type record must have a PaymentMethodType field that looks up to the payment method that you want to relate to your payment. Finally, the payment gateway and gateway provider payment method type must have matching PaymentGatewayProviderId fields. After you establish these relationships, the payment record infers your payment method from the gateway provider payment method type record.

![An ERD showing the relationship of Payment, GtwyProvPaymentMethodType, PaymentGatewayProvider, PaymentGateway, and PaymentMethods](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapi%2Fimages%2FSforce_gtwyprovpaymentmethod_erd.png&folder=api_tooling)
