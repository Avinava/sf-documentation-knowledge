---
title: "QuoteLineItem"
domain: object-reference
topic: quotelineitem
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:15.940Z
estimatedTokens: 7445
keywords: [QuoteLineItem, quote, line, item, member, Product2, products, associated, along, items, API, version, 18.0, later, Calls]
---

# QuoteLineItem

> Represents a quote line item, which is a member of the list of Product2
   products associated with a quote, along with other information about those line items on that
   quote. Available in API version 18.0 and later.

# QuoteLineItem

Represents a quote line item, which is a member of the list of Product2 products associated with a quote, along with other information about those line items on that quote. Available in API version 18.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

The user must have “Edit” permissions on quote records to create or update quote line items on a quote. The user must have “Edit” permissions on quote records to delete a quote line item.

Some of the fields are available when you turn on Subscription Management.

## Fields

| Field | Details |
| --- | --- |
| BatchIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionIdentifier for a product bundle in a transaction processing batch. This value makes sure that quote lines from the same bundles process together. |
| BillingFrequency | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe time period that indicates how often the quote line item is billed. This field is available in API version 55.0 and later. This field is available when Subscription Management is enabled.Possible values are:AnnualMonthly |
| BillingReference | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionReference to the original quote for which this quote line item is created. This field is available in API version 61.0 and later. |
| CurrencyIsoCode | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionAvailable only for organizations enabled for multiple currencies. Contains the ISO code for any currency allowed by the organization.If the organization has multicurrency and a Pricebook2 specified on the quote (the Pricebook2Id field isn’t blank), then the currency value of this field must match the currency of the PricebookEntry objects for any associated quote line items.This value comes from the related quote and can't be changed. |
| CustomProductName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCustom product name for the quote line item. |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionText description of the line item. Limit: 225 characters. |
| Discount | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe optional discount percentage, specified by the sales representative at the line level. Editable number from 0 to 100. |
| DiscountAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe fixed amount discount to apply to the quote line item. Available in API version 59.0 and later. |
| DoesAutomaticallyRenew | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates that the quote line item is set to automatically renew (True) or not (False).The default value is false. |
| Division | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionA logical segment of your organization's data. For example, if your company is organized into different business units, you could create a division for each business unit, such as “North America,” “Healthcare,” or “Consulting.” Available only if the organization has the Division permission enabled. |
| EffectiveGrantDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date on which the resources associated with the quote line item are granted. |
| EndDate | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionIf the quote line item is sold on subscription, this field indicates the date on which the subscription ends. This field is available in API version 55.0 and later. This field is available if Subscription Management is enabled in your org.You can indicate a subscription’s length by using either StartDate and EndDate, or by using StartDate and SubscriptionTerm. If you provide a value for both EndDate and SubscriptionTerm, EndDate is used to determine the subscription’s length. |
| EndDateTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe end date and time of the quote line item, which is derived from the End Date and End Time fields in the time zone specified in the Start and End Time Zone field. If the time zone isn't specified, the default is Coordinated Universal Time (UTC).This field is available in Revenue Cloud in API version 65.0 and later. |
| EndQuantity | TypedoublePropertiesFilter, Nillable, SortDescriptionIf the quote line item is sold on a subscription, this field indicates the end quantity when the subscription ends. This field is available in API version 60.0 and later. This field is available with Subscription Management. |
| EndTime | TypetimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe end time of the quote line item.This field is available in Revenue Cloud in API version 65.0 and later. |
| HasQuantitySchedule | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionRead-only. Indicates whether the opportunity line item that the quote line item is synced with has a quantity schedule. |
| HasRevenueSchedule | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionRead-only. Indicates whether the opportunity line item that the quote line item is synced with has a revenue schedule. If this object has a revenue schedule, the GrandTotal and TotalPrice fields can't be updated. In addition, the Quantity field can't be updated if this object has a quantity schedule. The system ignores any attempt to update this field. The update isn't rejected but the updated value is ignored. |
| HasSchedule | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionRead-only. Indicates whether the line item uses schedules. |
| IsPrimarySegment | TypebooleanPropertiesFilter, Group, SortDescriptionIndicates whether the segment for the quote line item is a primary segment (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user only accessed this record or list view (LastReferencedDate) but not viewed it. |
| LegalEntityId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the legal entity record associated with the quote line item.This field is a relationship field.Relationship NameLegalEntityRefers ToLegalEntity |
| LineNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRead-only. An automatically generated number identifying the quote line item. In the form of QL-XXXXX. |
| ListPrice | TypecurrencyPropertiesFilter, Nillable, SortDescriptionRead-only. Corresponds to the UnitPrice on the PricebookEntry that is associated with this line item, which can be in the standard price book or a custom price book. A client app can use this information to show whether the unit price (or sales price) of the line item differs from the price book entry list price. |
| ListPriceTotal | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe ListPrice times the Quantity. This field is a calculated field. |
| Margin | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe optional margin percentage, specified by the sales representative at the line item level.This field is available in Revenue Cloud in API version 65.0 and later. |
| MarginAmount | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe optional margin amount, specified by the sales representative at the line item level.This field is available in Revenue Cloud in API version 65.0 and later. |
| NetTotalPrice | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe price after all adjustments, inclusive of quantity, prorated for the duration of the subscription. This field is a calculated field equal to TotalAdjustmentAmount plus TotalLineAmount.This field is available in API version 56.0 and later. This field is available with Subscription Management. |
| NetUnitPrice | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe unit price after all price adjustments are applied. |
| OpportunityLineItemId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionID of the related opportunity line item. This field is populated by the API during creation of the quote line item. Not editable. Available in API version 40.0 and later. |
| ParentQuoteLineItemId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe unique identifier of the related line item in the parent quote.This field is populated by the API during creation of the quote line item.This field is available in version 58.0 and later. This field is available when Subscription Management is enabled.This field is a relationship field.Relationship NameParentQuoteLineItemRelationship TypeLookupRefers ToQuoteLineItem |
| PartnerDiscountPercent | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe partner’s discount percent applied to the quote lines. Available in API version 59.0 and later. |
| PartnerUnitPrice | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe unit price after applying the discount given to the partner for the quote line item. Available in API version 59.0 and later. |
| PeriodBoundary | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe period boundary helps determine the start and end date of the billing periods.This field is available in API version 55.0 and later. This field is available with Subscription Management and Revenue Cloud.Possible values are:AlignToCalendar—the period starts on the first day of the term unit; for example, the first day of the month.Anniversary—The start date determines the boundary. For example, if a monthly subscription starts on September 13, the subscription starts on the 13th day of each month.DayOfPeriod—the period starts on the day indicated by PeriodBoundaryDay.LastDayOfPeriod—the period starts on the last day of the pricing term unit.Keep these considerations in mind for amendment, renewal, and cancellations of assets in Revenue Cloud.The value of the PeriodBoundary field is copied from the AssetActionSource (initial sale), by default.For termed selling models where the PeriodBoundary value is Anniversary, the value of the PeriodBoundary field is automatically converted to DayOfPeriod.Start date adjustment operation on an asset preserves the original value without conversion. |
| PeriodBoundaryDay | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRequired when PeriodBoundary is DayOfPeriod. Indicates day of the week or month that marks the period boundary. Must be an integer from 1 through 31.This field is available in API version 55.0 and later. This field is available with Subscription Management and Revenue Cloud.Keep these considerations in mind for amendment, renewal, and cancellations of assets in Revenue Cloud.The value of the PeriodBoundary field is copied from the AssetActionSource (initial sale), by default.When PeriodBoundary field value is converted from Anniversary to DayOfPeriod for termed selling models, the value of the PeriodBoundaryDay field is automatically populated with the day value from AssetActionSource.StartDate.Start date adjustment operation on an asset preserves the original value without conversion. |
| PeriodBoundaryStartMonth | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Nillable, Sort, UpdateDescriptionThe field is populated based on input in the StartDate, PeriodBoundary, and PeriodBoundaryDay when BillingFrequency is Annual and PricingTermUnit is Annual or by manual user entry. Possible values are:1-January2-February3-March4-April5-May6-June7-July8-August9-September10-October11-November12-DecemberKeep these considerations in mind for amendment, renewal, and cancellations of assets in Revenue Cloud.The value of the PeriodBoundary field is copied from the AssetActionSource (initial sale), by default.For termed selling models where PeriodBoundary field value is Anniversary and PricingTermUnit field value is ANNUAL, SEMI_ANNUAL, or QUARTERLY, the value of the PeriodBoundaryStartMonth field is automatically recalculated by using AssetActionSource.StartDate.month.Start date adjustment operation on an asset preserves the original value without conversion. |
| PricebookEntryId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. ID of the associated PricebookEntry. Exists only for orgs with Products enabled. In API 38.0 and earlier, if Product2Id is populated with PricebookEntryId data, you receive an error message. In API 39.0 and later, Product2Id is nulled, and PricebookEntryId is populated with the PricebookEntryId data. |
| PriceRevisionPolicyId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe price uplift policy associated with this quote line item.This field is a relationship field.Relationship NamePriceRevisionPolicyRefers ToPriceRevisionPolicyLabel is Price Revision Policy.This field is available in Revenue Cloud in API version 65.0 and later. |
| PricingContractId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe contract used for pricing that's associated with the quote line item.This field is a relationship field.Relationship NamePricingContractRefers ToContract |
| PriceWaterfallIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe price waterfall identifier generated by Salesforce Pricing that's associated with the pricing of the detail record. Available in API version 60.0 and later. |
| PricingTerm | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of terms in the subscription. For example, if a monthly subscription is priced yearly, this field is 12.This field is available in API version 55.0 and later. This field is available with Subscription Management. |
| PricingTermCount | TypedoublePropertiesFilter, Nillable, SortDescriptionA calculated field indicating the number of pricing terms in the subscription. This field is available in API version 55.0 and later. This field is available with Subscription Management. |
| PricingTermUnit | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe unit of time for the pricing term. This field is available in API version 55.0 and later. This field is available with Subscription Management.Possible values are:Annual—Available in API version 58.0 and later. UI label is Years.Months. |
| Product2Id | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. ID of the Product2 associated with this QuoteLineItem. In API 38.0 and earlier, if Product2Id is populated with PricebookEntryId data, you receive an error message. In API 39.0 and later, Product2Id is nulled, and PricebookEntryId is populated with the PricebookEntryId data. |
| ProductInstanceIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the product instance that’s added to a quote. Each quote line item created for the same product instance has the same product instance identifier value. |
| ProductSellingModelId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the related product selling model. This field is available in API version 55.0 and later. This field is available with Subscription Management.This field is a relationship field.Relationship NameProductSellingModelRelationship TypeLookupRefers ToProductSellingModel |
| ProrationPolicyId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the related proration policy. This field is available in API version 55.0 and later. This field is available with Subscription Management.This field is a relationship field.Relationship NameProrationPolicyRelationship TypeLookupRefers ToProrationPolicy |
| Quantity | TypedoublePropertiesCreate, Filter, Sort, UpdateDescriptionRequired. The number of units for the line item. |
| QuantityUnitOfMeasureId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe unit of measure for the quantity, start quantity, and end quantity.This field is a relationship field.Relationship NameQuantityUnitOfMeasureRefers ToUnitOfMeasure |
| QuoteActionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the related quote action. This field is available in API version 58.0 and later. This field is available with Subscription Management and Revenue Lifecycle Management.This field is a relationship field.Relationship NameQuoteActionRelationship TypeLookupRefers ToQuoteAction |
| QuoteId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. ID of the associated quote. |
| QuoteLineGroupId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the quote line group for the quote line item.This field is a relationship field.Relationship NameQuoteLineGroupRefers ToQuoteLineGroup |
| QuoteLineItemRecipientId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the recipient for the quote line item.This field is a relationship field.Relationship NameQuoteLineItemRecipientRefers ToQuoteLineItemRecipient |
| RampIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ramp ID used to group quote line item segments. |
| RelatedQuoteLineItemId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe quote line item ID related to the order item created.This field is a relationship field.Relationship NameRelatedQuoteLineItemRefers ToOrderItemThis field is available in Revenue Cloud in API version 65.0 and later. |
| SegmentIdentifier | TypestringPropertiesFilter, Group, idLookup, Nillable, SortDescriptionThe ID of the segment. |
| SegmentName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the quote line item segment. |
| SegmentType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe time period for the segment.Possible values are:CustomFreeTrial—Free TrialYearlyThe default value is Yearly. |
| SellingModelType | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionIndicates whether the quote line item is sold as a one-time purchase, an evergreen subscription, or as a termed subscription. This field is available in API version 55.0 and later. This field is available with Subscription Management.Possible values are:EvergreenOneTimeTermDefinedThe default value is OneTime. |
| ServiceDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the product revenue is recognized and the product quantity is shipped. |
| SortOrder | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe value of where the line item is in the sorted order such as 1, 2, 3. The SortOrder value determines the order in which a quote line item appears in the Quote Line Items related list and the Quote PDF. Client apps can use this value to match the sort order in Salesforce. This field is only available in API versions 21.0 and greater. |
| StartDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIf the quote line item is sold on subscription, this field indicates the date on which the subscription starts. This field is available in API version 55.0 and later. This field is available with Subscription Management. |
| StartDateTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe start date and time of the quote line item, which is derived from the Start Date and Start Time fields in the time zone specified in the Start and End Time Zone field. If the time zone isn't specified, the default is Coordinated Universal Time (UTC).This field is available in Revenue Cloud in API version 65.0 and later. |
| StartEndTimeZone | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe time zone for the quote line item's start and end dates, times, and datetimes.This field is available in Revenue Cloud in API version 65.0 and later. |
| StartTime | TypetimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe start time of the quote line item.This field is available in Revenue Cloud in API version 65.0 and later. |
| StartQuantity | TypedoublePropertiesCreate, Filter, Nillable, SortDescriptionIf the quote line item is sold on a subscription, this field indicates the item quantity when the subscription starts. This field is available in API version 60.0 and later. This field is available with Subscription Management. |
| StartingPriceTotal | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe starting unit price times the quantity. |
| StartingUnitPriceSource | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates whether the starting unit price was entered manually or calculated. This field is available in API version 55.0 and later. This field is available with Subscription Management.Possible values are:ManualSystemInherited |
| Status | Typedynamic picklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionRepresents the status of the quote line item. This field is available in API version 60.0 and later. The QuoteLineItemStatus permission is required to access this field.Possible values are:In ProgressPendingApprovedRejectedDefault value is In Progress. |
| SubscriptionTerm | TypeintPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe number of terms in the subscription.You can indicate a subscription’s length by using either StartDate and EndDate, or by using StartDate and SubscriptionTerm. If you provide a value for both EndDate and SubscriptionTerm, EndDate is used and SubscriptionTerm is ignored. |
| SubscriptionTermUnit | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe unit of time used to define the subscription. This field is available in API version 55.0 and later. This field is available with Subscription Management.Possible values are:Annual—UI label is YearsMonths |
| Subtotal | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe line item's Quantity multiplied by the UnitPrice. In Revenue Cloud, Subtotal is set to TotalLineAmount when TotalLineAmount has a value. |
| TotalAdjustment | TypepercentPropertiesFilter, Nillable, SortDescriptionThe total discount percentage applied at the line item level. This percentage is calculated by using the formula: (Total Line Amount - Net Total Price) / Total Line Amount.This field is available in Revenue Cloud in API version 65.0 and later. |
| TotalAdjustmentAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of the adjustments applied to the quote line item, inclusive of quantity, prorated for the duration of the subscription.This field is available in API version 56.0 and later. This field is available with Subscription Management. |
| TotalCost | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total cost of all products sold in the quote, calculated by multiplying the quantity by the unit cost.This field is available in Revenue Cloud in API version 65.0 and later. |
| TotalLineAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total price of the quote line item, before price adjustments, inclusive of quantity, prorated for the duration of the subscription. This price is a calculated field equal to ListPrice times Quantity times PricingTermCount.This field is available in API version 56.0 and later. This field is available with Subscription Management. |
| TotalMargin | TypepercentPropertiesFilter, Nillable, SortDescriptionThe effective margin percentage at the line item level. This percentage is calculated by using the formula: (Net Total Price - Total Cost) / Net Total Price.This field is available in Revenue Cloud in API version 65.0 and later. |
| TotalMarginAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe effective margin amount at the line item level. This amount is calculated by subtracting total cost from net total price.This field is available in Revenue Cloud in API version 65.0 and later. |
| TotalPrice | TypecurrencyPropertiesFilter, Nillable, SortDescriptionRead-only. Calculated by applying the Discount to the Subtotal. This field is nillable, but you can't set both TotalPrice and UnitPrice to null in the same update. To insert the TotalPrice for a quote line item via the API (given only a unit price and the quantity), calculate this field as the unit price multiplied by the quantity. This field is read only if the quote line item has a revenue schedule. |
| UnitCost | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe unit cost of a product sold as part of the quote.This field is available in Revenue Cloud in API version 65.0 and later. |
| UnitPrice | TypecurrencyPropertiesCreate, Filter, Sort, UpdateDescriptionRequired. The price per unit for the quote line item. |
| UnitPriceUplift | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe percentage increase of the quote line item's unit price. |
| ValidationResult | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies whether the quote line item was configured and priced by Revenue Lifecycle Management.A quote can be activated only after all its quote line items are configured and priced by Revenue Lifecycle Management.Valid values are:Warning—Indicates that the quote line item wasn’t configured and priced by Revenue Lifecycle Management.Available in API version 60.0 and later. |
| Visibility | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies how Salesforce shows a quote line item in the Transaction Line Editor and a quote document.Possible values are:Always—Quote line items are always displayed in the Transaction Line Editor.Never—Quote line items aren't displayed in the Transaction Line Editor or in the quote document.Quote Document Only—Quote line items are displayed only in the quote document, but not in the Transaction Line Editor.Transaction Line Editor Only—Quote line items are displayed only in the Transaction Line Editor, but not in the quote document.The default value is Always. |

## Usage

A quote record can have QuoteLineItem records only if the quote has a Pricebook2. A QuoteLineItem must correspond to a Product2 that is listed in the quote's Pricebook2.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

If the multicurrency option is enabled, the CurrencyIsoCode field is present. It can't be modified, it’s always set to the value of the CurrencyIsoCode of the parent quote.

Effects on Quotes

Quotes with related QuoteLineItem objects are affected in the following ways:

-   Creating a QuoteLineItem increments the quote value by the TotalPrice of the QuoteLineItem.
-   When you create or update a QuoteLineItem, the API verifies that the line item corresponds to a PricebookEntry in the Pricebook2 associated with the quote.

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[QuoteLineItemChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 44.0)

Change events are available for the object.

[QuoteLineItemHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.") (API version 57.0)

History is available for tracked fields of the object.

#### See Also

-   [Quote](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_quote.htm "Represents a quote, which is a record showing proposed prices for products and services. Available in API version 18.0 and later.")

-   [QuoteDocument](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_quotedocument.htm "Represents a quote in document format. Available in API version 18.0 and later.")

-   [Opportunity](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_opportunity.htm "Represents an opportunity, which is a sale or pending deal.")

## Related Topics

- QuoteLineItemChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- QuoteLineItemHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- Quote (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_quote.htm)
- QuoteDocument (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_quotedocument.htm)
- Opportunity (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_opportunity.htm)
