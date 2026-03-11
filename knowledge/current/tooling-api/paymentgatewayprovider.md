---
title: "PaymentGatewayProvider"
domain: tooling-api
topic: paymentgatewayprovider
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:38.462Z
keywords: [PaymentGatewayProvider, Important, Supported, SOAP, API, Calls, REST, Methods, Special, Access, Rules, Fields]
---

# PaymentGatewayProvider

# PaymentGatewayProvider

Represents the payment gateway provider processing payments. This object is available in API version 48.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_tooling)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported SOAP API Calls

create(), delete(), describeLayout(), describeSObjects(), query(), retrieve(), search(), update(), upsert()

## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

## Special Access Rules

To access Salesforce Payments objects with the API, your org must have one or more of these licenses: Salesforce Payments, Salesforce Order Management, B2B Commerce, or D2C Commerce. Salesforce Payments objects are available only in Lightning Experience.

## Fields

| Field | Details |
| --- | --- |
| ApexAdapterId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe Apex adapter reference for your payment gateway. This field is unique within your organization. This field is a relationship field.This field is a relationship field.Relationship NameApexAdapterRelationship TypeLookupRefers ToApexClass |
| Comments | TypetextareaPropertiesFilter, Nillable, SortDescriptionAdditional details about the payment gateway provider . Max length is 1000 characters. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionRequired. The unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. Label is Record Type Name. This field is automatically generated, but you can supply your own value if you create the record using the API. |
| Fullname | TypestringPropertiesCreate, Group, NillableDescriptionThe full name of the associated <insert_type_name> in Metadata API. The full name can include a namespaceprefix.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| IdempotencySupported | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionIndictes whether idempotency can be used.Possible values are:NoYesThe default value is No. |
| Language | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe language of the PaymentGatewayProvider.Possible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. A null value may mean that the user only accessed this record or list view (LastReferencedDate) but did not view it. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| MasterLabel | TypestringPropertiesFilter, Group, idLookup, SortDescriptionLabel for the PaymentGatewayProvider. In the UI, this field is Payment Gateway Provider. |
| Metadata | TypePaymentGatewayProviderPropertiesCreate, Nillable, UpdateDescriptionThe PaymentGatewayProvider’s metadata.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix associated with this object. Each Developer Edition organization that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values:In Developer Edition organizations, the namespace prefix is set to the namespace prefix of the organization for all objects that support it. There is an exception if an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition organization of the package developer.In organizations that are not Developer Edition organizations, NamespacePrefix is only set for objects that are part of an installed managed package. There is no namespace prefix for all other objects. |