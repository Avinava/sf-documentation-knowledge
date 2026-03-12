---
title: "Order"
domain: object-reference
topic: order
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:13.688Z
estimatedTokens: 6409
keywords: [Order, associated, contract, account, Calls, Usage, Orders, Price, Books, Objects]
---

# Order

> Represents an order associated with a contract or an
		account.

# Order

Represents an order associated with a contract or an account.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRequired. ID of the Account associated with this order. Only updated when the order’s StatusCode value is Draft.This field is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| ActivatedById | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionID of the user who activated this order.This field is a relationship field.Relationship NameActivatedByRelationship TypeLookupRefers ToUser |
| ActivatedDate | TypedateTimePropertiesFilter, Nillable, Sort, UpdateDescriptionDate and time when the order was activated. |
| BillingAddress | TypeaddressPropertiesFilter, NillableDescription |
| BillingCity | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCity for the billing address for this order. The maximum size is 40 characters. |
| BillingCountry | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCountry for the billing address for this order. The maximum size is 80 characters. |
| BillingCountryCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionISO country code for the billing address for this order. |
| BillingEmailAddress | TypeemailPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionEmail address for this order’s billing address.This field is available with Salesforce Order Management, Revenue Cloud, or B2B Commerce license.This field is available in API v48.0 and later. |
| BillingGeocodeAccuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAccuracy level of the geocode of the address. |
| BillingLatitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with BillingLongitude to specify the precise geolocation of a billing address. Acceptable values are numbers between –90 and 90 with up to 15 decimal places. |
| BillingLongitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with BillingLatitude to specify the precise geolocation of a billing address. Acceptable values are numbers between –180 and 180 with up to 15 decimal places. |
| BillingPhoneNumber | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPhone number for this order’s billing address.This field is available with Salesforce Order Management, Revenue Cloud, or B2B Commerce license.This field is available in API v48.0 and later. |
| BillingPostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPostal code for the billing address for this order. The maximum size is 20 characters. |
| BillingState | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionState for the billing address for this order. The maximum size is 80 characters. |
| BillingStateCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionISO state code for the order’s billing address. |
| BillingStreet | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStreet address for the billing address. |
| BillToContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the contact that the order is billed to. |
| CompanyAuthorizedById | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the user who authorized the account associated with the order.This field is a relationship field.Relationship NameCompanyAuthorizedByRelationship TypeLookupRefers ToUser |
| CompanyAuthorizedDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which your organization authorized the order. |
| ContractId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the contract associated with this order. Only updated when the order’s StatusCode value is Draft.This field is a relationship field.Relationship NameContractRelationship TypeLookupRefers ToContract |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThree-letter ISO 4217 currency code. |
| CustomerAuthorizedById | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the contact who authorized the order.This field is a relationship field.Relationship NameCustomerAuthorizedByRelationship TypeLookupRefers ToContact |
| CustomerAuthorizedDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate on which the contact authorized the order. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDescription of the order. |
| EffectiveDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionDate at which the order becomes effective. Label is Order Start Date. |
| EndDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate at which the order ends. Label is Order End Date. |
| ExternalCustomerReference | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe external customer ID from an ecommerce channel or any other external channel. Label is External Customer ID Reference.This field is available in API version 66.0 and later. |
| GrandTotalAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionSum of TotalAmount and TotalTaxAmount.This field is available with Salesforce Order Management, Revenue Cloud, or B2B Commerce license.This field is available in API v48.0 and later. |
| IsReductionOrder | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionRead only. Determines whether an order is a reduction order. Label is Reduction Order. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last interacted with this record, directly or indirectly. Some sample scenarios are: |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, it’s possible that the user only accessed this record or list view (LastReferencedDate), but not viewed it. |
| Name | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName for this order. |
| OpportunityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID for the opportunity that’s associated with this order. |
| OrderedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date and time that the order was placed.This field is available with Salesforce Order Management, Revenue Cloud, or B2B Commerce license.This field is available in API v48.0 and later. |
| OrderManagementReferenceIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe field used by Order Management to store the external reference identifier for B2C Commerce orders. On creation, the B2C Integration sets this value to B2C realm ID + "_" + B2C instance ID + "@" + B2C Commerce catalog/domain ID + "@" + B2C Commerce order number. Otherwise, it isn’t set.When you create an OrderSummary, if you don’t specify an ExternalReferenceIdentifier value, it’s set to this value. If this value is null, then the system generates a value for ExternalReferenceIdentifier. This value isn’t required to be unique in an organization, but the OrderSummary ExternalReferenceIdentifier is.This field is available in API version 56.0 and later. |
| OrderNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionOrder number assigned to this order (not the unique, system-generated ID assigned during creation). The maximum size is 30 characters. |
| OrderReferenceNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionOrder reference number assigned to this order. The maximum size is 80 characters. |
| OriginalOrderId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Nillable, SortDescriptionOptional. ID of the original order that a reduction order is reducing, if the reduction order is reducing a single order. Label is Original Order.Editable only if isReductionOrder is true. If the reduction order is reducing more than one order, leave blank.This field is a relationship field.Relationship NameOriginalOrderRelationship TypeLookupRefers ToOrder |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. ID of the user or queue that owns this order.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PaymentTermId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Nillable, SortDescriptionThe ID of the related payment term. This field is available in API version 55.0 and later. This field is available if Subscription Management is enabled in your org.This field is a relationship field.Relationship NamePaymentTermRelationship TypeLookupRefers ToPaymentTerm |
| PoDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate of the purchase order. |
| PoNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionNumber identifying the purchase order. The maximum is 80. |
| Pricebook2Id | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionRequired. ID of the price book associated with this order.This field is a relationship field.Relationship NamePricebook2Relationship TypeLookupRefers ToPricebook2 |
| QuoteId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the quote that’s associated with this order.If you set QuoteId to null, QuoteLineItemId on all of the order’s child order products is set to null. |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the record type assigned to this order. |
| RelatedOrderId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe original order that a change order was created from.This field is available with Salesforce Order Management, Revenue Cloud, or B2B Commerce license.This field is available in API v48.0 and later.This field is a relationship field.Relationship NameRelatedOrderRelationship TypeLookupRefers ToOrder |
| RelatedOrderType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the related order type.Possible values are:ChangeOrderSupplementalOrderTransferOrder |
| SalesChannelId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to a sales channel entity.This field is available with Salesforce Order Management, Revenue Cloud, or B2B Commerce license.This field is available in API v48.0 and later. |
| SalesStoreId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the RetailStore or WebStore associated with this Order.This field is a polymorphic relationship field.This field is available with Salesforce Order Management, Revenue Cloud, or B2B Commerce license.This field is available in API v46.0 and later.Relationship NameSalesStoreRelationship TypeLookupRefers ToWebStore |
| ShippingAddress | TypeaddressPropertiesFilter, NillableDescriptionShipping address for the order. |
| ShippingCity | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCity of the shipping address. The maximum size is 40 characters. |
| ShippingCountry | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCountry of the shipping address. The maximum size is 80 characters. |
| ShippingCountryCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionISO country code for the order’s shipping address. |
| ShippingGeocodeAccuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAccuracy level of the geocode of the shipping address. |
| ShippingLatitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with ShippingLongitude to specify the precise geolocation of a shipping address. Acceptable values are numbers between –90 and 90 with up to 15 decimal places. |
| ShippingLongitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with ShippingLatitude to specify the precise geolocation of an address. Acceptable values are numbers between –180 and 180 with up to 15 decimal places. |
| ShippingPostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPostal code of the shipping address. The maximum size is 20 characters. |
| ShippingState | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionState of the shipping address. The maximum size is 80 characters. |
| ShippingStateCode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionISO state code for the order’s shipping address. |
| ShippingStreet | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStreet address of the shipping address. Maximum of 255 characters. |
| ShipToContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the contact that the order is shipped to. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionPicklist of values that indicate order status. Each value is associated with one of the status categories defined in StatusCode. For example, the status picklist might contain Draft, Ready for Review, and Ready for Activation values with a StatusCode of Draft. |
| StatusCode | TypepicklistPropertiesFilter, Group, Restricted picklist, Sort, UpdateDescriptionThe status category for the order. Label is Status Category.Valid values are:DraftActivatedSuperseded—This value is applicable only to Revenue Cloud Advanced users and is available in API version 64.0 and later.To use supplemental orders, also known as in-flight amendments, create a status that’s associated with the Superseded status code.. |
| TaxLocaleType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of tax calculation that Salesforce uses for the order’s order items. VAT regions use gross tax, which includes tax in all sale amounts. US regions use net tax, which calculates tax separately from the initial sale amount and then adds the sale and tax amounts together in a total.Use TaxLocaleType to determine which types of tax fields to show on your order. If TaxLocaleType is null, the order shows all tax fields.Gross Tax FieldsTotalAdjDeliveryAmtWithTaxTotalAdjProductAmtWithTaxTotalProductAdjDistAmtWithTaxTotalDeliveryAdjDistAmtWithTaxThis field is available with Salesforce Order Management, Revenue Cloud, or B2B Commerce license.This field is available in API v49.0 and later. |
| TotalAdjDeliveryAmtWithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionSum of delivery line amounts, delivery line adjustments, and tax. Order products with null Type fields aren’t included.This field is a gross tax field.This field is available with Salesforce Order Management, Revenue Cloud, or B2B Commerce license.This field is available in API v49.0 and later. |
| TotalAdjProductAmtWithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionSum of product line amounts, line adjustments, and tax. Order products with null Type fields aren’t included.This field is a gross tax field.This field is available with Salesforce Order Management, Revenue Cloud, or B2B Commerce license.This field is available in API v49.0 and later. |
| TotalAdjustedDeliveryAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionSum of delivery line amounts and delivery line adjustments. Order products with null Type fields aren’t included.This field is available with Salesforce Order Management, Revenue Cloud, or B2B Commerce license.This field is available in API v48.0 and later. |
| TotalAdjustedDeliveryTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionSum of delivery line tax amounts and delivery line tax adjustments.This field is available with Salesforce Order Management, Revenue Cloud, or B2B Commerce license.This field is available in API v48.0 and later. |
| TotalAdjustedProductAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionSum of product line amounts and line adjustments. Order products with null Type fields aren’t included.This field is available with Salesforce Order Management, Revenue Cloud, or B2B Commerce license.This field is available in API v48.0 and later. |
| TotalAdjustedProductTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionSum of line tax amounts and line tax adjustments. Order products with null Type fields aren’t included.This field is available with Salesforce Order Management, Revenue Cloud, or B2B Commerce license.This field is available in API v48.0 and later. |
| TotalAmount | TypecurrencyPropertiesFilter, SortDescriptionThe net total amount for the order products associated with this order.This field is available in API v48.0 and later. |
| TotalDeliveryAdjDistAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionRoll-up of the order’s delivery adjustment distributed amounts. Used only when the Order Adjustment Group has a Type value of Header.This field is available with Salesforce Order Management, Revenue Cloud, or B2B Commerce license.This field is available in API v48.0 and later. |
| TotalDeliveryAdjDistAmtWithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionRoll-up of the order’s delivery adjustment distributed amounts and tax. Used only when the Order Adjustment Group has a Type value of Header.This field is a gross tax field.This field is available with Salesforce Order Management, Revenue Cloud, or B2B Commerce license.This field is available in API v49.0 and later. |
| TotalDeliveryAdjDistTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionRoll-up of the order’s delivery adjustment distributed tax amounts. Used only when the Order Adjustment Group has a Type value of Header.This field is available with Salesforce Order Management, Revenue Cloud, or B2B Commerce license.This field is available in API v48.0 and later. |
| TotalProductAdjDistAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionRoll-up of the order’s product adjustment distributed amounts. Order products with null Type fields aren’t included. Used only when the Order Adjustment Group has a Type value of Header.This field is available with Salesforce Order Management, Revenue Cloud, or B2B Commerce license.This field is available in API v48.0 and later. |
| TotalProductAdjDistAmtWithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionRoll-up of the order’s product adjustment distributed amounts. Order products with null Type fields aren’t included. Used only when the Order Adjustment Group has a Type value of Header.This field is a gross tax field.This field is available with Salesforce Order Management, Revenue Cloud, or B2B Commerce license.This field is available in API v49.0 and later. |
| TotalProductAdjDistTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionRoll-up of the order’s product adjustment distributed tax amounts. Order products with null Type fields aren’t included. Used only when the Order Adjustment Group has a Type value of Header.This field is available with Salesforce Order Management, Revenue Cloud, or B2B Commerce license.This field is available in API v48.0 and later. |
| TotalTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionRoll-up of all taxes on the order, including delivery taxes, price adjustment taxes, and product taxes.This field is available with Salesforce Order Management, Revenue Cloud, or B2B Commerce license.This field is available in API v48.0 and later. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionTo show more information about your order, you can add custom values to the Type picklist. By default, the Type field doesn't perform any actions or show any values. |

## Usage

The Status field specifies the current state of an order. Status strings represent its current state (Draft or Activated).

When a client application creates an order, the Status Code must be Draft and the Status must be any value that corresponds to a Status Code of Draft. The application can then activate an order by updating it and setting the value in its Status field to an Activated state. However, the Status field is the only field you can update when activating the order.

After an order is activated, your client application can change the Status back to the Draft state—but only if the order doesn’t have any child reduction order products. Your client application can delete orders when the Status is Draft but not when its Status is Activated.

Client applications can use the API to create, update, delete, and query any Attachment associated with an order.

## Orders Without Price Books

If your organization manages products and price books in an external platform, you can use Salesforce API to create orders and order items without values for their price book and price book entry fields. This feature is available only for Salesforce orgs with the B2B Commerce, B2B Commerce Starter, B2B Commerce Growth, or B2B Commerce Plus packages. Admins enable orders without price books by going to Salesforce Order Settings and selecting the Optional Price Book setting.

In a standard order, Salesforce prompts the sales rep to select a price book when they add the first order product to the order. The sales rep can then add order products that have price book entries in the selected price book. In an order without a price book, Salesforce hides the order’s Add Products button and Edit Products button so that sales reps must manage their products and price books by using their external system.

You can create orders without price books only by creating an order with the Salesforce API and leaving the Pricebook2Id field null. Orders without price books follow several different guidelines compared to standard orders.

-   Orders without price books don’t support reduction orders or change orders.
-   Order products without price book entries require list prices.
-   Orders without price books support only order items without price book entries. Orders with price books support only order items with price book entries.
-   ![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

    #### Important

    Orders without price books are supported with B2B licenses only. Salesforce Order Management requires price books for orders and price book entries for order products.


## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[OrderChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm) (API version 44.0)

Change events are available for the object.

[OrderFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm) (API version 29.0)

Feed tracking is available for the object.

[OrderHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[OrderOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

#### See Also

-   [OrderHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderhistory.htm "Represents historical information about changes that have been made to the standard fields of the associated order, or to any custom fields with history tracking enabled.")

-   [OrderItem](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderitem.htm "Represents an order product that your organization sells.")

-   [OrderSummary](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_ordersummary.htm "Represents the current properties and state of an order. Corresponds to one or more order objects, consisting of an original object and any change objects applicable to it. This object is available in API version 48.0 and later.")

-   [SalesChannel](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_saleschannel.htm "Represents the origin of an order. For example, a web storefront, physical store, marketplace, or mobile app. If you integrate Salesforce Order Management with Salesforce B2C Commerce, set up a SalesChannel corresponding to each Site in your B2C Commerce implementation. This object is available in API version 48.0 and later.")

## Related Topics

- OrderHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderhistory.htm)
- OrderItem (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderitem.htm)
- OrderSummary (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_ordersummary.htm)
- SalesChannel (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_saleschannel.htm)
