---
title: "OrderSummary"
domain: object-reference
topic: ordersummary
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:14.068Z
estimatedTokens: 6636
keywords: [OrderSummary, current, state, order, Corresponds, objects, consisting, original, any, change, applicable, API, version, 48.0, later]
---

# OrderSummary

> Represents the current properties and state of an order. Corresponds to one or
      more order objects, consisting of an original object and any change objects applicable to
      it. This object is available in API version 48.0 and later.

# OrderSummary

Represents the current properties and state of an order. Corresponds to one or more order objects, consisting of an original object and any change objects applicable to it. This object is available in API version 48.0 and later.

For performance and data integrity reasons, CRUD operations on OrderSummary records don't fire Apex triggers.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is only available in Salesforce Order Management orgs or if the B2B Commerce license is enabled.

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the account or person account associated with the OrderSummary. It represents the shopper in the storefront.If the OrderLifeCycleType field on the associated OrderSummary is set to UNMANAGED, then users with the Edit Unmanaged Order Summaries or B2B Commerce Integrator user permission can modify this field.This field is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| ActiveProcess​ExceptionCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionTotal number of active process exceptions on the OrderSummary.This field is available in API version 50.0 and later. |
| BillingAddress | TypeaddressPropertiesFilter, NillableDescriptionBilling address associated with the OrderSummary.If the OrderLifeCycleType field on the associated OrderSummary is set to UNMANAGED, then users with the Edit Unmanaged Order Summaries or B2B Commerce Integrator user permission can modify this field. |
| BillingCity | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionBilling address city. |
| BillingCountry | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionBilling address country. |
| BillingCountry​Code | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe ISO country code for the billing address. The default value is US. |
| BillingEmail​Address | TypeemailPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionEmail address on the billing address. |
| BillingGeocode​Accuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe accuracy of the geocode for the billing address.Possible values are:AddressBlockCityCountyExtendedZipNearAddressNeighborhoodStateStreetUnknownZip |
| BillingLatitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with BillingLongitude to specify the precise geolocation of the billing address. Acceptable values are numbers between –90 and 90 with up to 15 decimal places. |
| BillingLongitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with BillingLatitude to specify the precise geolocation of the billing address. Acceptable values are numbers between –90 and 90 with up to 15 decimal places. |
| BillingPhoneNumber | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPhone number of the billing address. |
| BillingPostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionBilling address postal code. |
| BillingState | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionBilling address state. |
| BillingState​Code | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe ISO state or province code for the billing address. |
| BillingStreet | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionBilling address street. |
| BillToContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionID of the Contact associated with the OrderSummary. It represents the shopper in the storefront when not using person accounts.If the OrderLifeCycleType field is set to UNMANAGED, then users with the Edit Unmanaged Order Summaries or B2B Commerce Integrator user permission can modify this field.This field is available in API version 49.0 and later.Relationship NameBillToContactRelationship TypeLookupRefers ToContact |
| BusinessModel | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe business model of the OrderSummary.Possible values are:B2BB2CThis field is available in API version 53.0 and later. |
| ChangeOrderId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionReserved for future use. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAvailable only with the multicurrency feature enabled. Contains the ISO code for the currency of the original Order associated with the OrderSummary.Possible values are:DKK—Danish KroneEUR—EuroGBP—British PoundUSD—U.S. DollarThe default value is USD.This field is available in API version 49.0 and later. |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDescription of the OrderSummary.This field can be edited. |
| EffectiveDate | TypedatePropertiesCreate, Filter, Group, Sort, UpdateDescriptionDate at which the order becomes effective. Label is Order Start Date.This field is available in API version 64.0 and later. |
| ExternalReference​Identifier | TypestringPropertiesFilter, Group, idLookup, Nillable, Sort, UpdateDescriptionUsed internally to prevent duplicate records. This value is case-sensitive.In API version 56.0 and later, for orders ingested from B2C Commerce, this value is set to B2C realm ID + "_" + B2C instance ID + "@" + B2C Commerce catalog/domain ID + "@" + B2C Commerce order number.In API version 55.0, the standard B2C Commerce integration set this value to "SFDC" + "@" + nanotime + "@" + UUID and High Scale Orders set it to the value used in later versions.This field is available in API version 54.0 and later. |
| GrandTotalAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal amount, including adjustments and tax, of the OrderSummary. |
| IsSuspended | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the OrderSummary is suspended. The default value is false.This field is available in API version 50.0 and later. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| OperationInProgress | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionCurrent operation.Possible values are:CancellationNone |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. A null value can mean that this record has only been referenced (LastReferencedDate) and not viewed. |
| OrderedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionDate of the original order associated with this OrderSummary.If the OrderLifeCycleType field on the associated OrderSummary is set to UNMANAGED, then users with the Edit Unmanaged Order Summaries or B2B Commerce Integrator user permission can modify this field. |
| OrderLifeCycleType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionSpecifies whether the OrderSummary is managed by Salesforce Order Management (MANAGED) or by an external system (UNMANAGED). An unmanaged OrderSummary is stored in Salesforce for reference purposes.Some Order Management APIs reject input records that are associated with unmanaged OrderSummaries.Order Management does not update financial bucket fields on some records that are associated with unmanaged OrderSummaries.A user with the EditUnmanagedOrderSummaries or B2BCommerceIntegrator permission can edit certain fields on objects related to unmanaged OrderSummaries that are normally only accessible via APIs.Possible values are:MANAGED—ManagedUNMANAGED—UnmanagedThis field is available in API version 49.0 and later. |
| OrderNumber | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the OrderSummary. |
| OrderProduct​LineCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionTotal number of unique products ordered on this Order Summary.This field is available in API version 52.0 and later. |
| OriginalOrderId | TypereferencePropertiesFilter, Group, SortDescriptionID of the original order associated with this OrderSummary. Label is Original Order.This field is a relationship field.Relationship NameOriginalOrderRelationship TypeLookupRefers ToOrder |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who currently owns this OrderSummary. Default value is the ID of the user who created the record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PoDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionPurchase order date associated with this OrderSummary.If the OrderLifeCycleType field on the associated OrderSummary is set to UNMANAGED, then users with the Edit Unmanaged Order Summaries or B2B Commerce Integrator user permission can modify this field.This field is available in API version 52.0 and later. |
| PoNumber | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPurchase order number associated with this OrderSummary.If the OrderLifeCycleType field on the associated OrderSummary is set to UNMANAGED, then users with the Edit Unmanaged Order Summaries or B2B Commerce Integrator user permission can modify this field. |
| Pricebook2Id | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the pricebook associated with this OrderSummary.This field is available in API version 54.0 and later.This field is a relationship field.Relationship NamePricebook2Relationship TypeLookupRefers ToPricebook2 |
| RoutingAttempts | TypeintPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of attempts that have been made to route the order summary to inventory locations.This field is available in API version 51.0 and later. |
| SalesChannelId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the SalesChannel associated with this OrderSummary.If the OrderLifeCycleType field on the associated OrderSummary is set to UNMANAGED, then users with the Edit Unmanaged Order Summaries or B2B Commerce Integrator user permission can modify this field.This field is a relationship field.Relationship NameSalesChannelRelationship TypeLookupRefers ToSalesChannel |
| SalesStoreId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the RetailStore or WebStore associated with this OrderSummary.If the OrderLifeCycleType field on the associated OrderSummary is set to UNMANAGED, then users with the Edit Unmanaged Order Summaries or B2B Commerce Integrator user permission can modify this field.This field is a relationship field.Relationship NameSalesStoreRelationship TypeLookupRefers ToWebStore |
| SourceProcess | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionDescribes the order process that created the OrderSummary.Possible values are:Exchange The OrderSummary was created by an Exchange processOrderOnBehalf The OrderSummary was created by an Order on Behalf Of processStandard The OrderSummary was not created by an Order on Behalf Of or Exchange processThis field is available in API version 57.0 and later. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionStatus of the order summary. Unlike the Status and Status Category fields on the order and FulfillmentOrder objects, this field is optional.We recommend that you use the same values in this picklist that you use in the Status picklist for the order object. |
| SourceOrderSummaryId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the source order summary that’s associated with this OrderSummary.This field is populated when the SourceProcess of this OrderSummary is an exchange process.Relationship NameSourceOrderSummaryRelationship TypeLookupRefers ToOrderSummary |
| TaxLocaleType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe system used to handle tax on the original Order associated with the OrderSummary. Gross usually applies to taxes like value-added tax (VAT), and Net usually applies to taxes like sales tax. Automatic taxes use currency to determine if the tax is added on top of the price (excluded) or included in the price.Possible values are:Gross (displays most prices and taxes as combined values)Net (displays most prices and taxes as separate values)Automatic (displays most prices and taxes as combined or separate, based on the currency)If the OrderLifeCycleType field on the associated OrderSummary is set to UNMANAGED, then users with the Edit Unmanaged Order Summaries or B2B Commerce Integrator user permission can modify this field.This field is available in API version 49.0 and later. |
| TotalAdjDelivery​AmtWithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal amount of all OrderItemSummaries of type Delivery Charge belonging to this OrderSummary, inclusive of item-level adjustments and tax. This amount is equal to TotalAdjustedDeliveryAmount + TotalAdjustedDeliveryTaxAmount.This field is available in API version 49.0 and later. |
| TotalAdjDistAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal of distributed adjustments applied to OrderItemSummaries belonging to this OrderSummary. This amount is equal to TotalProductAdjDistAmount plus TotalDeliveryAdjDistAmount. |
| TotalAdjDist​AmountWithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal of distributed adjustments applied to OrderItemSummaries belonging to this OrderSummary, inclusive of tax. This amount is equal to TotalAdjDistAmount plus TotalAdjDistTaxAmount.This field is available in API version 49.0 and later. |
| TotalAdjDist​TaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTax on the TotalAdjDistAmount. |
| TotalAdjFee​AmtWithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal amount of all OrderItemSummaries of type Fee belonging to this OrderSummary, inclusive of item-level adjustments and tax. This amount is equal to TotalAdjustedFeeAmount plus TotalAdjustedFeeTaxAmount.This field is available in API version 56.0 and later. |
| TotalAdjProduct​AmtWithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal amount of all OrderItemSummaries of type code Product belonging to this OrderSummary, inclusive of item-level adjustments and tax. This amount is equal to TotalAdjustedProductAmount plus TotalAdjustedProductTaxAmount.This field is available in API version 49.0 and later. |
| TotalAdjusted​DeliveryAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal, including item-level adjustments but not order-level adjustments or tax, of all OrderItemSummaries of type Delivery Charge belonging to this OrderSummary. |
| TotalAdjusted​DeliveryTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTax on the TotalAdjustedDeliveryAmount. |
| TotalAdjusted​FeeAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal, including item-level adjustments but not order-level adjustments or tax, of all OrderItemSummaries of type Fee belonging to this OrderSummary.This field is available in API version 56.0 and later. |
| TotalAdjusted​FeeTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTax on the TotalAdjustedFeeAmount.This field is available in API version 56.0 and later. |
| TotalAdjusted​Product​Amount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal, including item-level adjustments but not order-level adjustments or tax, of all OrderItemSummaries of type code Product belonging to this OrderSummary. |
| TotalAdjusted​Product​TaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTax on the TotalAdjustedProductAmount. |
| TotalAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal, including adjustments but not tax, of all OrderItemSummaries belonging to this OrderSummary. Equal to TotalAdjustedProductAmount plus TotalAdjustedFeeAmount plus TotalAdjustedDeliveryAmount. |
| TotalDeliveryAdj​DistAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal of all order-level price adjustments applied to OrderItemSummaries of type Delivery Charge belonging to this OrderSummary. This value includes OrderItemAdjustmentLineSummaries that belong to OrderAdjustmentGroupSummaries of type Header. |
| TotalDeliveryAdj​DistAmtWithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal of all order-level price adjustments applied to OrderItemSummaries of type Delivery Charge belonging to this OrderSummary, inclusive of tax. This value includes OrderItemAdjustmentLineSummaries that belong to OrderAdjustmentGroupSummaries of type Header. It is equal to TotalDeliveryAdjDistAmount + TotalDeliveryAdjDistTaxAmount.This field is available in API version 49.0 and later. |
| TotalDeliveryAdj​DistTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTax on the TotalDeliveryAdjDistAmount. |
| TotalDeliveryAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionSum of the Total Line Amounts of all OrderItemSummaries of type Delivery Charge belonging to this OrderSummary, not including adjustments or tax.This field is available in API version 54.0 and later. |
| TotalDeliveryAmount​WithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal of all OrderItemSummaries of type Delivery Charge belonging to this OrderSummary, including tax but not including adjustments. It is equal to TotalDeliveryAmount + TotalDeliveryTaxAmount.This field is available in API version 54.0 and later. |
| TotalDelivery​TaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTax on the TotalDeliveryAmount.This field is available in API version 54.0 and later. |
| TotalFeeAdj​DistAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal of all order-level price adjustments applied to OrderItemSummaries of type Fee belonging to this OrderSummary. This value includes OrderItemAdjustmentLineSummaries that belong to OrderAdjustmentGroupSummaries of type Header.This field is available in API version 56.0 and later. |
| TotalFeeAdj​DistAmtWithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal of all order-level price adjustments applied to OrderItemSummaries of type Fee belonging to this OrderSummary, inclusive of tax. This value includes OrderItemAdjustmentLineSummaries that belong to OrderAdjustmentGroupSummaries of type Header. It is equal to TotalFeeAdjDistAmount + TotalFeeAdjDistTaxAmount.This field is available in API version 56.0 and later. |
| TotalFeeAdj​DistTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTax on the TotalFeeAdjDistAmount.This field is available in API version 56.0 and later. |
| TotalFeeAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionSum of the Total Line Amounts of all OrderItemSummaries of type Fee belonging to this OrderSummary, not including adjustments or tax.This field is available in API version 56.0 and later. |
| TotalFeeAmount​WithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal of all OrderItemSummaries of type Fee belonging to this OrderSummary, including tax but not including adjustments. It is equal to TotalFeeAmount + TotalFeeTaxAmount.This field is available in API version 56.0 and later. |
| TotalFeeTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTax on the TotalFeeAmount.This field is available in API version 56.0 and later. |
| TotalProductAdj​DistAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal of all order-level price adjustments applied to OrderItemSummaries of type code Product belonging to this OrderSummary. This value includes OrderItemAdjustmentLineSummaries that belong to OrderAdjustmentGroupSummaries of type Header. |
| TotalProductAdj​DistAmtWithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal of all order-level price adjustments applied to OrderItemSummaries of type code Product belonging to this OrderSummary, inclusive of tax. This value includes OrderItemAdjustmentLineSummaries that belong to OrderAdjustmentGroupSummaries of type Header. It is equal to TotalProductAdjDistAmount + TotalProductAdjDistTaxAmount.This field is available in API version 49.0 and later. |
| TotalProductAdj​DistTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTax on the TotalProductAdjDistAmount. |
| TotalProductAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionSum of the Total Line Amounts of all OrderItemSummaries of type code Product belonging to this OrderSummary, not including adjustments or tax.This field is available in API version 54.0 and later. |
| TotalProductAmount​WithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal of all OrderItemSummaries of type code Product belonging to this OrderSummary, including tax but not including adjustments. It is equal to TotalProductAmount + TotalProductTaxAmount.This field is available in API version 54.0 and later. |
| TotalProduct​TaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTax on the TotalProductAmount.This field is available in API version 54.0 and later. |
| TotalTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionTotal tax on all OrderItemSummaries belonging to this OrderSummary. Equal to TotalAdjustedDeliveryTaxAmount plus TotalAdjustedFeeTaxAmount plus TotalAdjustedProductTaxAmount. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[OrderSummaryChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 62.0)

Change events are available for the object.

[OrderSummaryFeed](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[OrderSummaryOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[OrderSummaryShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

#### See Also

-   [FulfillmentOrder](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_fulfillmentorder.htm "Represents a group of products, fees, and delivery charges on a single order that share the same fulfillment location, delivery method, and recipient. The FulfillmentOrderLineItems belonging to a FulfillmentOrder are associated with OrderItemSummary objects belonging to a single OrderSummary. This object is available in API version 48.0 and later.")

-   [Order](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_order.htm "Represents an order associated with a contract or an account.")

-   [OrderItemSummary](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderitemsummary.htm "Represents the current properties and state of a product or charge on an OrderSummary. Corresponds to one or more order item objects, consisting of an original object and any change objects applicable to it. This object is available in API version 48.0 and later.")

-   [OrderPaymentSummary](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderpaymentsummary.htm "Represents the current properties and state of payments using a single payment method that are applied to one OrderSummary. This object is available in API version 48.0 and later.")

-   [OrderSummaryRoutingSchedule](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_ordersummaryroutingschedule.htm "Represents an attempt to route an order summary to one or more inventory locations for fulfillment. You can use it to schedule future attempts and to record completed attempts. This object is available in API version 51.0 and later.")

-   [PendingOrderSummary](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_pendingordersummary.htm "Object representing a B2C Commerce order ingested via High Scale Orders before an OrderSummary is created for it. Optimized for online transaction processing (OLTP). This object is available in API version 55.0 and later.")

-   [SalesChannel](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_saleschannel.htm "Represents the origin of an order. For example, a web storefront, physical store, marketplace, or mobile app. If you integrate Salesforce Order Management with Salesforce B2C Commerce, set up a SalesChannel corresponding to each Site in your B2C Commerce implementation. This object is available in API version 48.0 and later.")

## Related Topics

- OrderSummaryChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- OrderSummaryFeed (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm)
- OrderSummaryOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- OrderSummaryShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
- FulfillmentOrder (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_fulfillmentorder.htm)
- Order (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_order.htm)
- OrderItemSummary (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderitemsummary.htm)
- OrderPaymentSummary (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_orderpaymentsummary.htm)
- OrderSummaryRoutingSchedule (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_ordersummaryroutingschedule.htm)
- PendingOrderSummary (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_pendingordersummary.htm)
