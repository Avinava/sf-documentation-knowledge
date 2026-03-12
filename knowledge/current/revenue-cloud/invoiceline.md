---
title: "InvoiceLine"
domain: revenue-cloud
topic: invoiceline
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:10.552Z
estimatedTokens: 3176
keywords: [InvoiceLine, Represents, amount, buyer, must, pay, product, service, fee., Invoice, lines, created, based, order, line., API, version, 62.0, later., Important]
---

# InvoiceLine

> Represents the amount that a buyer must pay for a product, service,
         or fee. Invoice lines are created based on the amount of an order line. This object is
      available in API version 62.0 and later.

# InvoiceLine

Represents the amount that a buyer must pay for a product, service, or fee. Invoice lines are created based on the amount of an order line. This object is available in API version 62.0 and later.

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
| AdjustmentAmount | TypecurrencyPropertiesFilter, Nillable, Sort, UpdateDescriptionThe sum of adjustments made to the invoice line. |
| AdjustmentAmountWithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of adjustment amounts, including associated taxes related to the invoice line. |
| AdjustmentTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe sum of tax adjustments to the invoice line. |
| Balance | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe outstanding balance for an invoice line. This amount is equal to the invoice’s total amount with tax after deducting the payments made. |
| BillingAddressId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThis field is related to an InvoiceAddressGroup field containing the billing address for the invoice line. For example, one InvoiceAddressGroup field is related to the invoiceLine's BillingAddressID field, and another InvoiceAddressGroup field is related to the invoiceLine's ShippingAddressId field.This field is a relationship field.Relationship NameBillingAddressRefers ToInvoiceAddressGroup |
| BillingScheduleGroupId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe ID of the billing schedule group for the invoice line.This field is a relationship field.Relationship NameBillingScheduleGroupRefers ToBillingScheduleGroup |
| BillingScheduleId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe ID of the billing schedule for the invoice line. Edit access is enabled for this field. You must not modify this field when the invoice line is related to a posted invoice.This field is a relationship field.Relationship NameBillingScheduleRefers ToBillingSchedule |
| ChargeAmount | TypecurrencyPropertiesFilter, Nillable, Sort, UpdateDescriptionThe sum of charges made to the invoice line. |
| ChargeAmountWithTax | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount on a charge invoice line, including tax. |
| ChargeConvertedNegAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount on a charge invoice line that’s converted to credit. |
| ChargeTaxAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe tax to be applied on a charge invoice line. |
| ConvertedNegAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount from an invoice line that’s converted to credit. |
| CorpCurrencyCnvChargeAmt | TypedoublePropertiesFilter, Nillable, Sort, UpdateDescriptionThe sum of charges made to the invoice line in corporate currency. Available in API version 63.0 and later. |
| CorpCurrencyCnvTotalTaxAmt | TypedoublePropertiesFilter, Nillable, Sort, UpdateDescriptionThe total tax amount of the invoice line in corporate currency. Available in API version 63.0 and later. |
| CorporateCurrencyCvsnDate | TypedatePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe date on which the invoice line amounts are converted to corporate currency. Available in API version 63.0 and later. |
| CorporateCurrencyCvsnRate | TypedoublePropertiesFilter, Nillable, Sort, UpdateDescriptionThe exchange rate that's used to convert the invoice line amounts to corporate currency. Available in API version 63.0 and later. |
| CorporateCurrencyIsoCode | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe currency ISO code of the corporate currency. Available in API version 63.0 and later. |
| Description | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe description of the invoice line. |
| FuncCrcyCnvTotalTaxAmt | TypedoublePropertiesFilter, Nillable, Sort, UpdateDescriptionThe total tax amount value in functional currency. Available in API version 66.0 and later. |
| FuncCurrencyCnvChargeAmt | TypedoublePropertiesFilter, Nillable, Sort, UpdateDescriptionThe charge amount value in functional currency. Available in API version 66.0 and later. |
| FunctionalCurrencyCvsnDate | TypedatePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe date on which the invoice line amount values are converted into functional currency. Available in API version 66.0 and later. |
| FunctionalCurrencyCvsnRate | TypedoublePropertiesFilter, Nillable, Sort, UpdateDescriptionThe exchange rate that's used to convert the invoice line amount values into functional currency. Available in API version 66.0 and later. |
| FunctionalCurrencyIsoCode | TypestringPropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe ISO code of the functional currency. Available in API version 66.0 and later. |
| GroupReferenceEntityItemId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe ID of the record that the invoice line corresponds to.This field is a polymorphic relationship field.Relationship NameGroupReferenceEntityItemRefers ToDebitMemoLine, OrderItem, OrderItemAdjustmentLineItem, OrderItemDetail, QuoteLineDetail, QuoteLineItem |
| HasMultipleItems | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionRequired. Indicates whether this field merges items from the same billing period (true) or not (false).The default value is false. |
| InvoiceId | TypereferencePropertiesFilter, Group, SortDescriptionRequired. The ID of the invoice record that contains this invoice line.This field is a relationship field.Relationship NameInvoiceRelationship TypeMaster-detailRefers ToInvoice (the master object) |
| InvoiceLineEndDate | TypedatePropertiesFilter, Group, Sort, UpdateDescriptionRequired. The end date of the billing for the service for invoice lines made from a time-based service. |
| InvoiceLineStartDate | TypedatePropertiesFilter, Group, Sort, UpdateDescriptionRequired. The first date of the billing for the service for invoice lines made from a time-based service. |
| InvoiceStatus | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe status of the invoice line. This field is inherited from the invoice’s status. |
| IsUsageBasedInvoiceLine | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionRequired. Indicates whether the product is usage-based (true) or not (false).The default value is false. This field is available in API version 63.0 and later with Revenue Cloud Billing license. |
| LegalEntityAccountingPeriodId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe ID of the legal entity accounting period record used in this invoice line.This field is a relationship field.Relationship NameLegalEntityAccountingPeriodRefers ToLegalEntyAccountingPeriod |
| LegalEntityId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe ID of the legal entity record used in this invoice line.This field is a relationship field.Relationship NameLegalEntityRefers ToLegalEntity |
| LineAmount | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe amount of the invoice line.This field is a calculated field. |
| Name | TypestringPropertiesFilter, Group, idLookup, Sort, UpdateDescriptionRequired. The name of the invoice line. |
| NetCreditsApplied | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total credit memo line amount applied to the invoice line. This amount is calculated by subtracting the unapplied credit memo line amount from the applied credit memo line amount.This field is a calculated field. |
| NetPaymentsApplied | TypecurrencyPropertiesFilter, Nillable, SortDescriptionThe total payment amount that’s applied to the invoice line after unapplication of payments. This amount is calculated by subtracting the unapplied payment line invoice line amount from the applied payment line invoice line amount. Available in API version 61.0 and later.This field is a calculated field. |
| OverageUnitOfMeasure | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unit that’s used to measure the overage. For example, byte or minute. This field is available in API version 63.0 and later with Revenue Cloud Billing license. |
| ParentInvoiceLineId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the parent invoice line record.This field is a relationship field.Relationship NameParentInvoiceLineRefers ToInvoiceLine |
| Product2Id | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe ID of the product that was charged or ordered to create the invoice line.This field is a relationship field.Relationship NameProduct2Refers ToProduct2 |
| Quantity | TypedoublePropertiesFilter, Nillable, Sort, UpdateDescriptionThe number of units of the order product that created the invoice line. |
| ReferenceEntityItemId | TypereferencePropertiesFilter, Group, Nillable, Sort, UpdateDescriptionThe order item or adjustment item that created the invoice line.This field is a polymorphic relationship field.Relationship NameReferenceEntityItemRefers ToOrderItem, OrderItemAdjustmentLineItem |
| ReferenceEntityItemType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of transaction that created the invoice line.Valid values are:Delivery ChargeFeeOrder Product |
| ReferenceEntityItemTypeCode | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of object that created the invoice line.Valid values are:ChargeProduct |
| ShipFromAddressId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe shipping origin of the invoiced product. Available in API version 64.0 and later.This field is a relationship field.Relationship NameShipFromAddressRefers ToInvoiceAddressGroup |
| ShippingAddressId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the shipping address record associated with the invoice line.This field is a relationship field.Relationship NameShippingAddressRefers ToInvoiceAddressGroup |
| TaxAmount | TypecurrencyPropertiesFilter, Nillable, Sort, UpdateDescriptionThe total tax for the invoice line. |
| TaxProcessingStatus | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the tax processing of the invoice line.Valid values are:EstimatedPendingPosted |
| TaxTreatmentId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe tax treatment used on this invoice line.This field is a relationship field.Relationship NameTaxTreatmentRefers ToTaxTreatment |
| Type | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of the invoice line.Valid values are:AdjustmentChargeTax |
| UnitOfMeasureId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe unit of measure of the product associated with the invoice line. Available in API version 63.0 and later.This field is a relationship field.Relationship NameUnitOfMeasureRefers ToUnitOfMeasure |
| UnitPrice | TypecurrencyPropertiesFilter, Nillable, Sort, UpdateDescriptionThe price for one unit of the item on the invoice line. |
| UsageOverageQuantity | TypedoublePropertiesFilter, Nillable, SortDescriptionThe quantity of the usage overage that’s being invoiced. This field is available in API version 63.0 and later with Revenue Cloud Billing license. |
| UsageProductBillSchdGrpId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the usage-based product billing schedule group associated with the invoice line. This field is available in API version 63.0 and later with Revenue Cloud Billing license.This field is a relationship field.Relationship NameUsageProductBillSchdGrpRefers ToBillingScheduleGroup |
| UsageProductId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the usage-based product that was charged or ordered to create the invoice line. This field is available in API version 63.0 and later with Revenue Cloud Billing license.This field is a relationship field.Relationship NameUsageProductRefers ToProduct2 |
