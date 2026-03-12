---
title: "BillingScheduleGroup"
domain: revenue-cloud
topic: billingschedulegroup
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:09.803Z
estimatedTokens: 2976
keywords: [BillingScheduleGroup, Represents, consolidated, view, billing, schedules, related, order, items, generated, asset, including, new, orders, amendment, orders., API, version, 62.0, later.]
---

# BillingScheduleGroup

> Represents a consolidated view of all the billing schedules related
         to the order items generated from one asset, including new orders and amendment
         orders. This object is available in API version 62.0 and later.

# BillingScheduleGroup

Represents a consolidated view of all the billing schedules related to the order items generated from one asset, including new orders and amendment orders. This object is available in API version 62.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update()

## Special Access Rules

You need the Billing Admin permission set to access this object.

## Fields

| Field | Details |
| --- | --- |
| AnchorProdtBillingSchdGrpId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe billing schedule group for the anchor product in a usage-based product. The anchor product contains the grants for the usage-based product. This field is available in API version 63.0 and later with Revenue Cloud Billing license.This field is a relationship field.Relationship NameAnchorProdtBillingSchdGrpRefers ToBillingScheduleGroup |
| BillDayOfMonth | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe day of the month on which a recurring billing process is scheduled to occur. |
| BillToContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the contact related to the billing schedule group.﻿ This field can’t be modified when related billing schedules are in processing.This field is a relationship field.Relationship NameBillToContactRefers ToContact |
| BillingAccountId | TypereferencePropertiesFilter, Group, SortDescriptionRequired. The ID of the account that's related to the billing schedule group.This field is a relationship field.Relationship NameBillingAccountRefers ToAccount |
| BillingAddress | TypeaddressPropertiesFilter, NillableDescriptionThe compound form of the billing address. Read only. See Address Compound Fields for details on compound address fields. |
| BillingArrangementId | TypereferencePropertiesFilter, Group, SortDescriptionRequired. The ID of the billing arrangement that’s related to the billing schedule group. Available in API version 66.0 and later.This field is a relationship field.Relationship NameBillingArrangementRefers ToBillingArrangement |
| BillingMethod | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionRequired. The type of billing used for the source item.Valid values are:EvergreenOrderAmountUsage |
| BillingResumptionDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe date when billing for the asset related to the billing schedule group is resumed. Available in API version 63.0 and later. |
| BillingScheduleGroupNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRequired. The auto-generated reference number for the billing schedule group. |
| BillingStartMonth | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThis is a read-only field used with annual billing. The field shows the numbers from 1 through 12, which indicate the month when billing begins for an annual subscription. For example, if billing starts in January, the value is 1; if billing starts in June, the value is 6. |
| BillingSuspensionDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe date when billing for the asset related to the billing schedule group is suspended. Available in API version 63.0 and later. |
| BillingTerm | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThis field is used with BillingTermUnitfield to define a billing cycle. For example, bill every 20 days or every two months. In this example, the BillingTerm field value  is 20 and the BillingTermUnit field value is Day. |
| BillingTermUnit | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionRequired. The unit of measurement of the billing term.Valid values are:BillingMilestonePlan—Available in API version 63.0 and later with Revenue Cloud Billing license.DayMonthOneTimeQuarterSemi-AnnualYear |
| BillingTreatmentId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe billing treatment item that's used to configure invoiceable amounts on the billing schedule group.This field is a relationship field.Relationship NameBillingTreatmentRefers ToBillingTreatment |
| BillingType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionRequired. The timing of invoicing for a product or service relative to its delivery to the customer.Valid values are:Advance— Invoices a product or service before its delivery.Arrears— Invoices a product or service after its delivery. |
| BindingInstanceId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe asset or custom object record associated with the billing schedule group. This field is available in API version 63.0 and later with Revenue Cloud Billing license.This field is a polymorphic relationship field.Relationship NameBindingInstanceRefers ToAsset |
| CancellationDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe date from when the user can no longer access the service. For example, if a service ends on August 31, the cancellation date is September 1 because that’s the date from when the user can no longer use the service. Billing schedules past their cancellation date aren't invoiced. |
| Controller | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionRequired. During the invoicing process, this field determines which date is used when the billing schedule group and billing schedule have a related field with conflicting values. For example, when Controller has a value of BillingScheduleGroup, if the billing schedule's billing day of month is 5 while the billing schedule group's billing day of month is 10, the invoice is sent on the 10th day of the month.Valid values are:BillingScheduleGroupNone |
| EffectiveNextBillingDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe earliest NextBillingDate from all billing schedules in the billing schedule group. This field is a reference field that isn't used for any features or calculations.This field is a calculated field. |
| EndDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe end date of the billing schedule group. |
| ExternalBindingInstance | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe custom target associated with the entitlements that are granted with the sellable product. This field is available in API version 63.0 and later with Revenue Cloud Billing license. |
| ExternalRefRecordIdentifier | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe identifier of the external record for which the billing schedule group was created. Available in API version 64.0 and later. |
| LegalEntityId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the legal entity that's related to the billing schedule group.This field is a relationship field.Relationship NameLegalEntityRefers ToLegalEntity |
| NextBillingDateOverride | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe next billing date for all the billing schedules related to the billing schedule group. If specified, this date overrides the next billing dates of the billing schedules. Available in API version 63.0 and later. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. The ID of the user who created the billing schedule group.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| PaymentTermId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the payment term used in this billing schedule group. ﻿This field can’t be modified when related billing schedules are in processing.This field is a relationship field.Relationship NamePaymentTermRefers ToPaymentTerm |
| PeriodBoundary | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThis field is inherited from the order item's parent quote line item or sales transaction item. The period boundary determines the start and end date of the billing periods.Valid values are:AlignToCalendarAnniversaryDayOfPeriodLastDayOfPeriod |
| Product2Id | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe product that was charged or ordered to create the billing schedule group.This field is a relationship field.Relationship NameProduct2Refers ToProduct2 |
| ProductName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the product for the order item that's represented by each billing schedule in the billing schedule group. |
| ProrationPolicyId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the proration policy that applies to this billing schedule group. The proration policy defines how time periods are calculated for orders. For example, whether partial periods are allowed. This field is inherited from the shared proration policy for each billing schedule in the billing schedule group.This field is a relationship field.Relationship NameProrationPolicyRefers ToProrationPolicy |
| ReferenceEntityId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe asset used to create the billing schedules in the billing schedule group.This field is a relationship field.Relationship NameReferenceEntityRefers ToAsset |
| ReferenceRecordId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe ID of the Salesforce record for which the billing schedule group was created. Available in API version 64.0 and later.This field is a polymorphic relationship field.Relationship NameReferenceRecord |
| SavedPaymentMethodId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe ID of the SavedPaymentMethod record that's used to collect payment for the billing schedule group. Available in API version 64.0 and later.This field is a relationship field.Relationship NameSavedPaymentMethodRefers ToSavedPaymentMethod |
| ShipFromAddress | TypeaddressPropertiesFilter, NillableDescriptionThe address from which the product in the billing schedule group is shipped. Available in API version 64.0 and later. |
| ShippingAddress | TypeaddressPropertiesFilter, NillableDescriptionThe compound form of the shipping address. See Address Compound Fields for details on compound address fields.This field is a read-only field. |
| StartDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe earliest start date from all billing schedules in the billing schedule group. |
| TaxTreatmentId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the tax treatment record that's used to calculate tax for the billing schedule group. This value is defined based on the order item's tax policy.This field is a relationship field.Relationship NameTaxTreatmentRefers ToTaxTreatment |
| TotalBilledAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount that has been invoiced for the billing schedules within the billing schedule group.This field is a calculated field. |
| TotalPendingAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount that hasn't yet been invoiced for the billing schedules within the billing schedule group.This field is a calculated field. |
| UsageType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe usage type for the billing schedule group.Valid values are:Revenue CloudCommerce CloudInsurance CloudAvailable in API version 66.0 and later. |
