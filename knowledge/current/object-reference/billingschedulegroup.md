---
title: "BillingScheduleGroup"
domain: object-reference
topic: billingschedulegroup
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:05.561Z
estimatedTokens: 3578
keywords: [BillingScheduleGroup, consolidated, view, billing, schedules, order, items, generated, asset, including, new, orders, amendment, API, version]
---

# BillingScheduleGroup

> Represents a consolidated view of all billing schedules related to the order
         items generated from one asset, including new orders and amendment orders. This object
      is available in API version 55.0 and later.

# BillingScheduleGroup

Represents a consolidated view of all billing schedules related to the order items generated from one asset, including new orders and amendment orders. This object is available in API version 55.0 and later.

When an order is created, a billing schedule is generated for each order item. The billing schedule group summarizes fields from each billing schedule. For example, it summarizes financial fields such as Total Billed Amount and Total Pending Amount and billing fields such as Billing Day of Month and Billing Term.

The billing schedule group includes schedules generated from a new order item and schedules generated from amendment order items. The billing schedule group shows users the summarized financial data that includes any changes, such as new orders or amendments, made to the asset.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update()

## Special Access Rules

This object is available with Subscription Management, Commerce Subscriptions, and Billing (Revenue Cloud). If your org has both Subscription Management and Commerce Subscriptions, then Subscription Management takes precedence.

For information about this object that's available with Billing (Revenue Cloud), including its special access rules, see the [Revenue Cloud Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_billingschedulegroup.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| BillDayOfMonth | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe Billing Day of Month for the billing schedules that comprise the billing schedule group.Subscription Management uses the order item's billing day of month to calculate the order item’s next billing date, which the billing schedule then inherits. For example, an order item can be billed on the first day of the month. |
| BillToContactId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe contact related to the billing schedule group.﻿This field can’t be modified when related billing schedules are in processing.This field is a relationship field.Relationship NameBillToContactRelationship TypeLookupRefers ToContact |
| BillingAccountId | TypereferencePropertiesFilter, Group, SortDescriptionThe Salesforce account for the billing schedule group.This field is a relationship field.Relationship NameBillingAccountRelationship TypeLookupRefers ToAccount |
| BillingAddress | TypeaddressPropertiesFilter, NillableDescriptionThe compound form of the billing address. Read-only. See Address Compound Fields for details on compound address fields. |
| BillingCity | TypestringPropertiesFilter, Group, Nillable, SortDescriptionDetails for the billing address of this billing schedule group. Maximum size is 40 characters. |
| BillingCountry | TypestringPropertiesFilter, Group, Nillable, SortDescriptionDetails for the billing address of this billing schedule group. Maximum size is 80 characters. |
| BillingGeocodeAccuracy | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionAccuracy level of the geocode for the billing address. See Compound Field Considerations and Limitations for details on geolocation compound fields. |
| BillingLatitude | TypedoublePropertiesFilter, Nillable, SortDescriptionUsed with BillingLongitude to specify the precise geolocation of a billing address. Acceptable values are numbers between –90 and 90 with up to 15 decimal places. See Compound Field Considerations and Limitations for details on geolocation compound fields. |
| BillingLongitude | TypedoublePropertiesFilter, Nillable, SortDescriptionUsed with BillingLatitude to specify the precise geolocation of a billing address. Acceptable values are numbers between –180 and 180 with up to 15 decimal places. See Compound Field Considerations and Limitations for details on geolocation compound fields. |
| BillingMethod | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionShows the type of billing used for the source item.Possible values are:EvergreenOrderAmount |
| BillingPostalCode | TypestringPropertiesFilter, Group, Nillable, SortDescriptionDetails for the billing address of this billing schedule group. Maximum size is 20 characters. |
| BillingScheduleGroupNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionSystem-generated reference number for the billing schedule group. |
| BillingStartMonth | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionRead-only field used with annual billing. The field shows the numbers from 1 to 12, which indicate the month when billing begins for an annual subscription. For example, if billing starts in January, the value is 1; if billing starts in June, the value is 6. This field is available in API version 58.0 and later. |
| BillingState | TypestringPropertiesFilter, Group, Nillable, SortDescriptionDetails for the billing address of this billing schedule group. Maximum size is 80 characters. |
| BillingStreet | TypetextareaPropertiesFilter, Group, Nillable, SortDescriptionStreet address for the billing address of this billing schedule group. |
| BillingTerm | TypeintPropertiesFilter, Group, Nillable, SortDescriptionUsed with BillingTermUnit to define a billing cycle. For example, bill every 20 days or every two months. In this example, the BillingTerm is 20 and the BillingTermUnit is days |
| BillingTermUnit | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe frequency with which the billing schedule is invoiced.Possible values are:DayMonthOneTimeQuarterSemi-AnnualYearUsed with BillingTermUnit to define a billing cycle. |
| BillingType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionInherited from the shared value of each billing schedule in the billing schedule group. Defines when Subscription Management bills a product or service relative to when it’s provided to the customer. Advance billing invoices a product or service before you provide it, while arrears billing invoices a product or service after you provide it. Subscription Management evaluates the billing type when it calculates an order's next billing date.Possible values are:Advance – If the billing schedule is billed in advance, Subscription Management evaluates the order’s billing day of month to choose the nearest date on or before the order product’s start date. For example, if a monthly order product’s start date is January 1, and the order’s billing day of month is 15, the next billing date is December 15.Arrears – If the billing schedule is billed in arrears, Subscription Management evaluates the order’s billing day of month to choose the nearest date after the order product’s start date. For example, if a monthly order product’s start date is January 1 and the order’s billing day of month is 15, the order product’s next billing date is January 15. |
| CancellationDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe date that a cancellation was made against the billing schedule. Subscription Management doesn't invoice billing schedules past their cancellation date. |
| Controller | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionDuring the invoicing process, this field determines which date is used when the billing schedule group and billing schedule have a related field with conflicting values.For example, when Controller has a value of BillingScheduleGroup, if the billing schedule's billing day of month is 5 while the billing schedule group's billing day of month is 10, the invoice is sent on the 10th day of the month.Possible values are:BillingScheduleGroup—The date on the billing schedule group controls. |
| CurrentBillingPeriodAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThis field was removed in Subscription Management API version 55.0. |
| CurrentQuantity | TypedoublePropertiesFilter, Nillable, SortDescriptionThis field was removed in Subscription Management API version 55.0. |
| EffectiveNextBillingDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe earliest NextBillingDate from all billing schedules in the billing schedule group. This field is a reference field that isn't used for any features or calculations.This field is a calculated field. |
| EndDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe latest end date from all billing schedules in the billing schedule group. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record, a record related to this record, or a list view. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. If this value is null, the user might have only accessed this record or list view (LastReferencedDate) but not viewed it. |
| OwnerId | TypereferencePropertiesFilter, Group, Sort, UpdateDescriptionThe Salesforce user who owns the billing schedule group.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PaymentTermId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe ID of the payment term used in this billing schedule group.﻿This field can’t be modified when related billing schedules are in processing.This field is a relationship field.Relationship NamePaymentTermRelationship TypeLookupRefers ToPaymentTerm |
| PeriodBoundary | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionInherited from the order item's parent quote line item or sales transaction item. The period boundary helps determine the start and end date of the billing periods.Possible values are:AlignToCalendar—the period starts on the first day of the term unit; for example, the first day of the month.Anniversary—The start date determines the boundary. For example, if a monthly subscription starts on September 13, the subscription starts on the 13th day of each month.DayOfPeriod—the period starts on the day indicated by PeriodBoundaryDay.EndOfPeriod—the period starts on the last day of the pricing term unit. |
| Product2Id | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the product for the order item represented by each billing schedule in the billing schedule group.This field is a relationship field.Relationship NameProduct2Relationship TypeLookupRefers ToProduct2 |
| ProductName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the product for the order item represented by each billing schedule in the billing schedule group. |
| ProrationPolicyId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionRefers to the proration policy that applies to this billing schedule group. The proration policy defines how time periods are calculated for subscription orders. For example, whether partial periods are allowed.Inherited from the shared proration policy for each billing schedule in the billing schedule group.This field is a relationship field.Relationship NameProrationPolicyRelationship TypeLookupRefers ToProrationPolicy |
| ReferenceEntityId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe asset used to create the billing schedules in the billing schedule group.This field is a relationship field.Relationship NameReferenceEntityRelationship TypeLookupRefers ToAsset |
| ShippingAddress | TypeaddressPropertiesFilter, NillableDescriptionThe compound form of the shipping address. Read-only. See Address Compound Fields for details on compound address fields. |
|  |
| ShippingCity | TypestringPropertiesFilter, Group, Nillable, SortDescriptionDetails for the shipping address for this billing schedule group. City maximum size is 40 characters |
| ShippingCountry | TypestringPropertiesFilter, Group, Nillable, SortDescriptionDetails for the shipping address for this billing schedule group. Country maximum size is 80 characters. |
| ShippingGeocodeAccuracy | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionAccuracy level of the geocode for the shipping address. See Compound Field Considerations and Limitations for details on geolocation compound fields. |
| ShippingLatitude | TypedoublePropertiesFilter, Nillable, SortDescriptionUsed with ShippingLongitude to specify the precise geolocation of a shipping address. Acceptable values are numbers between –90 and 90 with up to 15 decimal places. See Compound Field Considerations and Limitations for details on geolocation compound fields. |
| ShippingLongitude | TypedoublePropertiesFilter, Nillable, SortDescriptionUsed with ShippingLatitude to specify the precise geolocation of an address. Acceptable values are numbers between –180 and 180 with up to 15 decimal places. See Compound Field Considerations and Limitations for details on geolocation compound fields. |
| ShippingPostalCode | TypestringPropertiesFilter, Group, Nillable, SortDescriptionDetails for the shipping address for this billing schedule group. Postal code maximum size is 20 characters. |
| ShippingState | TypestringPropertiesFilter, Group, Nillable, SortDescriptionDetails for the shipping address for this billing schedule group. State maximum size is 80 characters. |
| ShippingStreet | TypetextareaPropertiesFilter, Group, Nillable, SortDescriptionThe street address of the shipping address for this billing schedule group. Maximum of 255 characters. |
| StartDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe earliest start date from all billing schedules in the billing schedule group. |
| TotalBilledAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount that has been invoiced for all billing schedules within the billing schedule group.This field is a calculated field. |
| TotalPendingAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount that hasn't yet been invoiced for all billing schedules within the billing schedule group.This field is a calculated field. |
