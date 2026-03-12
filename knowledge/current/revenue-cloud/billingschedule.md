---
title: "BillingSchedule"
domain: revenue-cloud
topic: billingschedule
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:11.011Z
estimatedTokens: 2965
keywords: [BillingSchedule, order, item, that's, invoicing, process, API, version, 62.0, later, Calls, Special, Access, Rules]
---

# BillingSchedule

> Represents information about the order item that's used in the invoicing
         process. This object is available in API version 62.0 and later.

# BillingSchedule

Represents information about the order item that's used in the invoicing process. This object is available in API version 62.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=revenue_lifecycle_management_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update()

## Special Access Rules

You need the Billing Admin permission set to access this object.

## Fields

| Field | Details |
| --- | --- |
| BillDayOfMonth | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe day of the month on which a recurring billing process is scheduled to occur. |
| BilledAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total amount (excluding tax) that has been invoiced from the billing schedule.This field is a calculated field. |
| BillingAccountId | TypereferencePropertiesFilter, Group, SortDescriptionRequired. The ID of the account that's related to the billing schedule.This field is a relationship field.Relationship NameBillingAccountRefers ToAccount |
| BillingMethod | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type of billing used for the source item.Valid values are:EvergreenOrderAmountUsage—Available in API version 63.0 and later with Revenue Cloud Billing license. |
| BillingMilestonePlanId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe billing milestone plan associated with the billing schedule. This field is available in API version 63.0 and later with Revenue Cloud Billing license.This field is a relationship field.Relationship NameBillingMilestonePlanRefers ToBillingMilestonePlan |
| BillingPeriodAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount to be invoiced each billing period. For example, if the billing period is monthly, this field shows the monthly amount that appears on the invoice line. |
| BillingScheduleEndDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe last date that the billing schedule is available for invoicing. This value is inherited from the EndDate field on the order item. |
| BillingScheduleGroupId | TypereferencePropertiesFilter, Group, SortDescriptionRequired. The billing schedule group that contains the billing schedule. Billing schedules are grouped when they have the same source order item. The source order item is the original order item that a customer bought. Afterwards, if the customer amends, cancels, or renews the order item, a new billing schedule is created with the BillingScheduleGroupId for the original order item.This field is a relationship field.Relationship NameBillingScheduleGroupRelationship TypeMaster-detailRefers ToBillingScheduleGroup (the master object) |
| BillingScheduleNumber | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionRequired. The auto-generated reference number for the billing schedule. |
| BillingScheduleStartDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe date when the billing schedule is available for invoicing. This value is inherited from the ServiceDate field on the order item. |
| BillingTerm | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe duration for which the customer is invoiced. |
| BillingTermUnit | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionRequired. The unit of measurement of the billing term.Valid values are:BillingMilestonePlan—Available in API version 63.0 and later with Revenue Cloud Billing license.DayMonthOneTimeQuarterSemi-AnnualYear |
| BillingTreatmentItemId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe billing treatment item that's used to configure invoiceable amounts on the billing schedule.This field is a relationship field.Relationship NameBillingTreatmentItemRefers ToBillingTreatmentItem |
| BillingType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe timing of invoicing for a product or service relative to its delivery to the customer.Valid values are:Advance— Invoices a product or service before its delivery.Arrears — Invoices a product or service after its delivery. |
| CancellationDate | TypedatePropertiesFilter, Group, Nillable, SortDescriptionThe date from when the user can no longer access the service. For example, if a service ends on August 31, the cancellation date is September 1 because that’s the date from when the user can no longer use the service. Billing schedules past their cancellation date aren't invoiced. |
| Category | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionRequired. The category of the billing schedule.Valid values are:AmendQuantity— A billing schedule for an order that changes the quantity.Cancellation — A billing schedule for an order that was canceled.Original — A billing schedule for the initial order.Renewal — A billing schedule for an order that was renewed. |
| CustomInvoiceGroupKey | TypestringPropertiesFilter, Group, Restricted picklist, SortDescriptionThe group identifier for which an invoice must be generated when the invoice group type is Custom.This field is available in API version 63.0 and later with Revenue Cloud Billing license. |
| InvBatchDraftToPostedRunId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe batch job that posts all invoices with a status as Draft that are generated by the invoice batch run associated with the billing schedule.This field is a relationship field.Relationship NameInvBatchDraftToPostedRunRefers ToInvBatchDraftToPostedRun |
| InvoiceBatchRunId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe invoice batch run that evaluated the billing schedule and its billing period items to generate an invoice.This field is a relationship field.Relationship NameInvoiceBatchRunRefers ToInvoiceBatchRun |
| InvoiceGroupType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies whether to generate an invoice for a billing schedule, a custom group, or the default group of account, bill-to-contact, payment term, currency, and tax engine.Valid values are:Billing ScheduleCustomDefaultThis field is available in API version 63.0 and later with Revenue Cloud Billing license. |
| InvoiceRunMatchingValue | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe batch value used by the invoice run that evaluated the billing schedule. During an invoice run, billing schedules with the same batch value, including null, are grouped to the same invoice run. |
| LineAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount associated with a specific line item in the billing schedule. Available in API version 63.0 and later. |
| NetUnitPrice | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe net unit price of the order item for which the billing schedule was created. Available in API version 64.0 and later. |
| NextBillingDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date that the next billing period starts for the invoice. This date is used to calculate which invoice lines are included on an invoice. When an invoice scheduler or API evaluates an order for invoicing, billing schedules with a next billing date on or before the invoice's target date are included in the invoice. |
| NextChargeFromDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date that the billing schedule is invoiced in the upcoming billing period. For example, if you invoiced a customer for a billing period of 01/01/24 through 01/31/24, the billing schedule's NextChargeFromDate is 02/01/22. |
| OriginalBillingScheduleId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionIf the billing schedule is an amended or canceled billing schedule, then this field shows the original billing schedule. Otherwise, this field is null.This field is a relationship field.Relationship NameOriginalBillingScheduleRefers ToBillingSchedule |
| PendingAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount from the current billing term that hasn't been billed yet. For example, the unbilled amount for a month, quarter, or year, depending on this billing schedule's billing term. |
| PricingTermUnit | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionRequired. The unit of time for which the pricing of the product applies.Valid values are:MonthsQuarterlySemi-AnnualAnnualAvailable in API version 66.0 and later. |
| Quantity | TypedoublePropertiesFilter, Nillable, SortDescriptionThe quantity of the order item that created the billing schedule. |
| Reference | TypereferencePropertiesFilter, Group, idLookup, SortDescriptionThe ID of the parent record of the reference item for which the billing schedule is created. Available in API version 61.0 and later. |
| ReferenceEntityId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe parent order of the order item that created the billing schedule.This field is a polymorphic relationship field.Relationship NameReferenceEntityRefers ToOrder |
| ReferenceEntityItemId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe order item or asset that created the billing schedule.This field is a polymorphic relationship field.Relationship NameReferenceEntityItemRefers ToOrderItem, OrderItemAdjustmentLineItem |
| ReferenceItem | TypereferencePropertiesFilter, Group, idLookup, SortDescriptionThe ID of the transaction line item record for which the billing schedule is created. Available in API version 61.0 and later. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The status of the order item that the billing schedule represents.Valid values are:WaitingForMilestoneEventAccomplishment—Available in API version 63.0 and later with Revenue Cloud Billing license.CompletelyBilledErrorProcessingReadyForInvoicing |
| TaxTreatmentId | TypereferencePropertiesFilter, Group, SortDescriptionRequired. The ID of the treatment that's used to calculate tax for the billing schedule. This value is defined based on the order item's tax policy.This field is a relationship field.Relationship NameTaxTreatmentRefers ToTaxTreatment |
| TotalAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total amount of the order item represented by the billing schedule. |
| Type | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of the billing schedule.Valid values are:LineItemAdjustedChargeLineItemAdjustmentLineItemCharge |
| UnitOfMeasureId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the unit of measure for the billing schedule. Available in API version 63.0 and later.This field is a relationship field.Relationship NameUnitOfMeasureRefers ToUnitOfMeasure |
| UnitPrice | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe price for an individual unit of the billing schedule's parent order item, including charges, adjustments, and discounts. This value is inherited from the order item's UnitPrice field. |
| UsageResourceId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe usage resource associated with the billing schedule. This field is available in API version 63.0 and later with Revenue Cloud Billing license.This field is a relationship field.Relationship NameUsageResourceRefers ToUsageResource |
