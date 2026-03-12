---
title: "OSAsyncChgCompletedEvent"
domain: object-reference
topic: osasyncchgcompletedevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:14.200Z
estimatedTokens: 1077
keywords: [OSAsyncChgCompletedEvent, event, processing, credit, memo, invoices, entities, bulk, action, successfully, completed, exist, synchronous, APIs, API]
---

# OSAsyncChgCompletedEvent

> An event that allows the processing of the credit memo, invoices, and other
         entities after a bulk action has successfully completed. The event provides all of the
         values that would exist on the synchronous APIs. This object is available in API version
         63.0 and later.

# OSAsyncChgCompletedEvent

An event that allows the processing of the credit memo, invoices, and other entities after a bulk action has successfully completed. The event provides all of the values that would exist on the synchronous APIs. This object is available in API version 63.0 and later.

## Supported Calls

create(), describeSObjects()

## Special Access Rules

This object is only available in Salesforce Order Management orgs.

## Fields

| Field | Details |
| --- | --- |
| ActionType | TypestringPropertiesCreate, NillableDescriptionThe type of the action that gets applied to Order SummaryPossible values are:CANCEL_ALLRETURN_ALL |
| AsyncOperationLogId | TypereferencePropertiesCreate, NillableDescriptionThe ID of the AsyncOperationLog.This field is a relationship field.Relationship NameAsyncOperationLogRefers ToAsyncOperationLog |
| CurrencyIsoCode | TypestringPropertiesCreate, NillableDescriptionThe ISO code for the currency of the OrderSummary that's associated with the FulfillmentOrder. This field is available only for orgs with multicurrencies enabled.Possible values are:CNY—Chinese YuanGBP—British PoundUSD—U.S. DollarThe default value is USD. |
| EventUuid | TypestringPropertiesNillableDescriptionUniquely identifies an event message. The ID used to match the events that are returned in the callback result with the events in the publish call. |
| FeeChangeOrderId | TypereferencePropertiesCreate, NillableDescriptionThe change order for the fee ID. This order usually used for invoices.This field is a relationship field.Relationship NameFeeChangeOrderRefers ToOrder |
| GrandTotalAmount | TypedoublePropertiesCreate, NillableDescriptionThe new order summary's grand total.This amount is equal to TotalAmount + TotalTaxAmount. |
| InFulfillmentChangeOrderId | TypereferencePropertiesCreate, NillableDescriptionThe change order for any items during fulfillment.This field is a relationship field.Relationship NameInFulfillmentChangeOrderRefers ToOrder |
| OrderSummaryId | TypereferencePropertiesCreate, NillableDescriptionThe foreign key for the master Order Summary entity.This field is a relationship field.Relationship NameOrderSummaryRefers ToOrderSummary |
| PostFulfillmentChangeOrderId | TypereferencePropertiesCreate, NillableDescriptionThe change order for any items post-fulfillment. This ID is used for credit memos refundsThis field is a relationship field.Relationship NamePostFulfillmentChangeOrderRefers ToOrder |
| PreFulfillmentChangeOrderId | TypereferencePropertiesCreate, NillableDescriptionThe change order for any items that haven't been fulfilled.This field is a relationship field.Relationship NamePreFulfillmentChangeOrderRefers ToOrder |
| TotalAdjDistAmount | TypedoublePropertiesCreate, NillableDescriptionThe total distributed adjustment amount without taxes. |
| TotalAdjDistTaxAmount | TypedoublePropertiesCreate, NillableDescriptionThe total distributed adjustment taxes. |
| TotalAdjustedDeliveryAmount | TypedoublePropertiesCreate, NillableDescriptionThe total delivery adjusted amount without taxes. |
| TotalAdjustedDeliveryTaxAmount | TypedoublePropertiesCreate, NillableDescriptionThe total delivery adjusted tax amount . |
| TotalAdjustedProductAmount | TypedoublePropertiesCreate, NillableDescriptionThe total adjusted product amount without tax. |
| TotalAdjustedProductTaxAmount | TypedoublePropertiesCreate, NillableDescriptionThe total adjusted product tax amount.This amount is equal to TotalAdjustmentAmount + TotalAdjustmentTaxAmount. |
| TotalAmount | TypedoublePropertiesCreate, NillableDescriptionThe total amount, not including taxes. |
| TotalExcessFundsAmount | TypedoublePropertiesCreate, NillableDescriptionThe amount used to determine if a refund is needed pre-fulfillment. |
| TotalFeeAmount | TypedoublePropertiesCreate, NillableDescriptionTotal fee amount, not including taxes. |
| TotalFeeTaxAmount | TypedoublePropertiesCreate, NillableDescriptionThe total fee tax amount. |
| TotalRefundableAmount | TypedoublePropertiesCreate, NillableDescriptionThe amount that can be refunded to the client. |
| TotalRequiredFundsAmount | TypedoublePropertiesCreate, NillableDescriptionThe total amount of required funds. |
| TotalTaxAmount | TypedoublePropertiesCreate, NillableDescriptionThe combined total of all taxes. |
