---
title: "Product2"
domain: object-reference
topic: product2
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:15.269Z
estimatedTokens: 4571
keywords: [Product2, product, company, sells, Calls, Special, Access, Rules, Schedule, Enabled, Flags, Usage, Associated, Objects]
---

# Product2

> Represents a product that your company sells.

# Product2

Represents a product that your company sells.

This object has several fields that are used only for quantity and revenue schedules (for example, annuities). Schedules are available only for orgs that have enabled the products and schedules features. If these features aren’t enabled, the schedule fields don’t appear , and you can’t query, create, or update the fields.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

As of API version 8.0, the Product object is no longer available. Requests that contain Product are refused, and responses don’t contain the Product object. Use the Products2 object instead.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

The ConfigureDuringSale and IsSoldOnlyWithOtherProds fields are available in version 58.0 and later when Industry Automotive or Subscription Management is enabled.

## Fields

| Field | Details |
| --- | --- |
| BillingPolicyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the related billing policy. This field is available when Subscription Management is enabled. This field is available in API version 55.0 and later.This field is a relationship field.Relationship NameBillingPolicyRelationship TypeLookupRefers ToBillingPolicy |
| CanUseQuantitySchedule | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the product can have a quantity schedule (true) or not (false). Label is Quantity Scheduling Enabled. |
| CanUseRevenueSchedule | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the product can have a revenue schedule (true) or not (false). Label is Revenue Scheduling Enabled. |
| ConnectionReceivedId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the PartnerNetworkConnection that shared this record with your org. This field is available when Salesforce to Salesforce is enabled. |
| ConnectionSentId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the PartnerNetworkConnection that this record is shared with. This field is available Salesforce to Salesforce is enabled. In API version 16.0 and later, this value is null. Use PartnerNetworkRecordConnection object to forward records to connections. |
| ConfigureDuringSale | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDetermines whether a user can edit a configuration when creating a bundle order or quote.This field is available in API version 58.0 and later.This field is available when Industries Automotive or Subscription Management is enabled.Possible values are:Allowed— Changes are allowed while adding line items to a bundle; for example, when adding products or editing quantity.NotAllowed—Changes aren’t allowed. |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionAvailable only for orgs with the multicurrency feature enabled. Contains the ISO code for any currency allowed by the org. |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionA text description of this record. Label is Product Description. |
| DisplayUrl | TypeurlPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionURL leading to a specific version of a record in the linked external data source. |
| ExternalDataSourceId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the related external data source. |
| ExternalId | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique identifier of a record in the linked external data source. For example, ID #123. |
| Family | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionName of the product family associated with this record. Product families are configured as picklists in the user interface. To obtain a list of valid values, call describeSObjects() and process the result for the values associated with the Family field. Label is Product Family. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether this record is active (true) or not (false). Inactive Product2 records are hidden in many areas in the user interface. You can change the IsActive flag on a Product2 object as often as necessary. Label is Active. |
| IsArchived | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionDescribes whether the product is archived. The default value is false. |
| IsDeleted | TypebooleanPropertiesDefaulted on create, FilterDescriptionIndicates whether the object has been moved to the Recycle Bin (true) or not (false). Label is Deleted. |
| IsSerialized | TypebooleanPropertiesCreate, Filter, Group, Sort, UpdateDescriptionIndicates if a product is a serialized product (true) or not (false). Label is Serialized. |
| IsSoldOnlyWithOtherProds | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether the product can be sold independently or only as part of a bundle.This field is available in API version 58.0 and later.This field is available when Industries Automotive or Subscription Management is enabled.The default value is false, which means that the product can be sold independently. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last interacted with this record, directly or indirectly. Some sample scenarios are: |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, it’s possible that the user only accessed this record or list view (LastReferencedDate), but not viewed it. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. Default name of this record. Label is Product Name. |
| NumberOfQuantityInstallments | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIf the product has a quantity schedule, the number of installments. |
| NumberOfRevenueInstallments | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIf the product has a revenue schedule, the number of installments. |
| ProductClass | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionThis field is read-only. Its value is determined by the value of the Type field and whether the product is associated with a ProductAttribute record. It describes whether a product is a bundle, set, or simple product, a variation parent, or a product variation. Possible values are:Bundle—This product is a parent or component in a product bundle.Set—This product is included in a product set.Simple—This product has no variationsVariationParent—This product is a variation parent. It’s the base product for one or more product variations and, though it has its own stock-keeping unit (SKU), isn’t a sellable entity. Instead, it’s the parent of sellable entities—its variations.Variation—This product is a variation of a parent product. Each variation has its own SKU.When the value of ProductClass = VariationParent, it never changes. The value of ProductClass changes between Simple and Variation when you attach or detach a ProductAttribute record to the product.If you attach a ProductAttribute record to a product, then the product’s ProductClass value changes to Variation. Conversely, when you detach all ProductAttribute records from a product, the ProductClass value changes to Simple.The default value is Simple.This field is available in API version 50.0 and later. It was introduced to support of B2B and B2C Commerce implementations. |
| ProductCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefault product code for this record. Your org defines the product’s code-naming pattern. |
| QuantityInstallmentPeriod | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIf the product has a quantity schedule, the amount of time covered by the schedule. |
| QuantityScheduleType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of the quantity schedule, if the product has one. |
| QuantityUnitOfMeasure | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUnit of the product; for example, kilograms, liters, or cases. This field comes with only one value, Each, so consider creating your own. The QuantityUnitOfMeasure field on ProductItem inherits this field’s values. |
| RecalculateTotalPrice | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionChanges behavior of OpportunityLineItem calculations when a line item has child schedule rows for the Quantity value. When enabled, if the rollup quantity changes, then the quantity rollup value is multiplied against the sales price to change the total price. |
| RevenueInstallmentPeriod | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIf the product has a revenue schedule, the time period covered by the schedule. |
| RevenueScheduleType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of the revenue schedule, if the product has one. |
| StockCheckMethod | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe method for how a product's inventory is checked. Stock checks on parent products are common when bundles are prepackaged and individual child components can't be sold separately. Stock checks on child products are common when bundles aren't prepackaged and must be put together during fulfillment. If bundles aren’t prepackaged, child components can usually be sold separately.Possible values are:Null—Check stock on the product SKU.DoNotCheck —The stock shouldn't be check.ParentProduct —If the product is a parent of a bundle, check stock on the parent product.ChildProducts —If the product is a parent of a bundle, check stock on the child components. |
| StockKeepingUnit | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe SKU for the product. Use in tandem with or instead of the ProductCode field. For example, you can track the manufacturer’s identifying code in the Product Code field and assign the product a SKU when you resell it. |
| TaxPolicyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the related tax policy.This field is available when Subscription Management is enabled. This field is available in API version 55.0 and later.This field is a relationship field.Relationship NameTaxPolicyRelationship TypeLookupRefers ToTaxPolicy |
| TransferRecordMode | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIf serialized, indicates when the serial number is recorded. This field is visible based on field-level security.The value affects the read-only value of the Product2TransferMode field on the ProductTransfer object.Possible values are:SendAndReceive —The serial number is recorded when sending or receiving.ReceiveOnly —The serial number is recorded when receiving only. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe type of product. This field's value affects the read-only value of the ProductClassfield on the Product2 object. field.Base—When Type = Base, then ProductClass = VariationParent.Null—When Type = Null, then ProductClass = Simple.This field is available when B2B or B2C Commerce is enabled.This field is available in API version 50.0 and later. |
| UnitOfMeasureId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the unit of measure associated with the product.This field is a relationship field.This field is available when Revenue Cloud is enabled.This field is available in API version 63.0 and later.Relationship NameUnitOfMeasureRefers ToUnitOfMeasure |

## Schedule Enabled Flags

When enabling the schedules feature, you can decide whether to enable quantity schedules, revenue schedules, or both. In addition, you can use the API to control quantity and revenue scheduling at the product level via the CanUseQuantitySchedule and CanUseRevenueSchedule flags. A value of true for either flag indicates that the product and any OpportunityLineItems can have a schedule of that type. These flags can be set when creating or updating Product2 records.

## Default Schedule Fields

The remaining schedule fields for this object define default schedules. Default schedule values are used to create an OpportunityLineItemSchedule when an OpportunityLineItem is created for the Product.

The default schedule fields support the following valid values (all fields are also nillable).

| Field | Valid Values |
| --- | --- |
| RevenueScheduleType | Divide, Repeat |
| RevenueInstallmentPeriod | Daily, Weekly, Monthly, Quarterly, Yearly |
| NumberOfRevenueInstallments | Integer from 1 to 150, inclusive. |
| QuantityScheduleType | Divide, Repeat |
| QuantityInstallmentPeriod | Daily, Weekly, Monthly, Quarterly, Yearly |
| NumberOfQuantityInstallments | Integer from 1 to 150, inclusive |

When you attempt to set the schedule fields when creating or updating, the API applies cross-field integrity checks. The integrity requirements are:

-   If the schedule type is nil, the installment period and number of installments must be nil.
-   If the schedule type is set to any value, then the installment period and number of installments must be non-nil.

Any create or update that fails these integrity checks is rejected with an error.

These default schedule fields, CanUseQuantitySchedule, and CanUseRevenueSchedule, are restricted picklist fields and are available only if the org has the schedules feature enabled.

## Usage

Use this object to define the default product information for your org. This object is associated by reference with Pricebook2 objects via PricebookEntry objects. The same product can be represented in different price books as price book entries. In fact, the same product can be represented multiple times (as separate PricebookEntry records) in the same price book with different prices or currencies. A product can only have one price for a given currency within the same price book. To be used in custom price books, all standard prices must be added as price book entries to the standard price book.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

Note: You can’t create lookup fields to Product2 object, which have **Required** check box set to true or the **Don't Allow Deletion**" radio button selected, as the platform would otherwise interpret this and throw an error that you cannot create a master-detail relationship to the object.

You can query the products that have been configured for your org. For example, you can allow your client application to obtain valid product IDs for use when configuring PricebookEntry records via the API. Your client application can perform the following tasks on PricebookEntry objects:

-   Query
-   Create for the standard price book or custom price books.
-   Update
-   Delete
-   Change the IsActive field when creating or updating records

This object is defined only for those orgs that have products enabled as a feature. If the org doesn’t have the products feature, this object doesn’t appear in the describeGlobal call, and you can't describe or query this object.

If you try to delete a product via the API but there's an opportunity that uses that product, the delete fails. The workaround is to delete the product in the user interface, which gives you an option to archive the product.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

On opportunities and opportunity products, the workflow rules, validation rules, and Apex triggers fire when an update to a child opportunity product or schedule causes an update to the parent record. This means your custom application logic is enforced when there are updates to the parent record, ensuring higher data quality and compliance with your organization’s business policies.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[Product2ChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm) (API version 44.0)

Change events are available for the object.

[Product2Feed](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_feed.htm) (API version 18.0)

Feed tracking is available for the object.

[Product2History](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)

History is available for tracked fields of the object.

[Product2OwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm) (API version 50.0)

Sharing rules are available for the object.

#### See Also

-   [Overview of Salesforce Objects and Fields](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm "Salesforce objects and fields are analogous to database tables and the table columns. Objects and fields structure data. For example, the central object in the Salesforce data model represents accounts—companies and organizations involved with your business, such as customers, partners, and competitors.")

## Related Topics

- ProductAttribute (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_productattribute.htm)
- Overview of Salesforce Objects and Fields (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm)
