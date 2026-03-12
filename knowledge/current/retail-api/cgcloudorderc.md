---
title: "cgcloud__Order__c"
domain: retail-api
topic: cgcloudorderc
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:39.036Z
estimatedTokens: 5229
keywords: [cgcloud__Order__c, Stores, order, entry, API, version, 54.0, later, cgcloud, _Order, Calls, Associated, Objects]
---

# cgcloud__Order__c

> Stores the header details of the order entry. This object is
      available in API version 54.0 and later.

# cgcloud\_\_Order\_\_c

Stores the header details of the order entry. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| cgcloud__ASN__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAdvanced shipping notice number that the supplier provides for a special delivery. |
| cgcloud__ATM_Confirmation_Nr__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionContains the confirmation number of the receipt that an Automated Teller Machine (ATM) prints. |
| cgcloud__Accountable__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe system shows the Initiator of the order as the initial accountable.This is a relationship field.Relationship Namecgcloud__Accountable__rRelationship TypeLookupRefers ToUser |
| cgcloud__Actual_Check_Out_Quantity__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTotal product checkout quantity for the tour in question as actually counted by the tour executing user. |
| cgcloud__Actual_Check_Out_Type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCheckout type (method) that's must be applied in the product checkout document based on the given template settings.Possible values are:Counting GroupsExpressPalletsSKU |
| cgcloud__Bank_Name__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionContains the name of the bank.Possible values are:Bank_of_Scotland—Bank of ScotlandCitiBank—Citi BankIngDiBaSantanderBank—Santander Bank |
| cgcloud__Bill_Recipient_Account__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the bill to of the order entry.This is a relationship field.Relationship Namecgcloud__Bill_Recipient_Account__rRelationship TypeLookupRefers ToAccount |
| cgcloud__Calculation_Schema__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSchema that's used to calculate the order with complex pricing.This is a relationship field.Relationship Namecgcloud__Calculation_Schema__rRelationship TypeLookupRefers Tocgcloud__CP_Calculation_Schema__c |
| cgcloud__Calculation_Status__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionComplex pricing calculation status.Possible values are:0—Initial1—Calculated2—Calculation Required, Resettable3—Calculation Required, Not Resettable4—Calculation FailedThe default value is 0. |
| cgcloud__Calculation_Time__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTime of the last complex pricing calculation for this order. |
| cgcloud__Cancel_Reason__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the reason for the cancellation of the delivery document or order.Possible values are:CanceledByCall—Canceled by CallCashierNotAvailable—Cashier Not AvailableCustomerBlocked—Customer is credit blockedDoubleDelivery—Double DeliveryMisentryNotEnoughMoney—Not enough moneyWrongDelivery—Wrong DeliveryWrongPricing—Wrong Pricing |
| cgcloud__Check_Out_Quantity__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTotal product checkout quantity for the tour in question as given by the HOST interface. |
| cgcloud__Check_Out_Type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the currency of the order based on the sales org currency of the order template object. It must have the same picklist values as the sales org currency field.Possible values are:Counting GroupsExpressPalletsSKU |
| cgcloud__Currency__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the currency of the order based on the sales org currency of the order template object. It must have the same picklist values as the sales org currency field.Possible values are:CADCHFEURGBPJPYNOKRUBUSD |
| cgcloud__Customer_Order_Id__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCustomer-specific ID of the order. |
| cgcloud__Delivery_Date__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionBy default: next day. Delivery date calculation is customized frequently. |
| cgcloud__Delivery_Note__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDelivery note. |
| cgcloud__Delivery_Recipient__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the delivery recipient of the selected account.This is a relationship field.Relationship Namecgcloud__Delivery_Recipient__rRelationship TypeLookupRefers ToAccount |
| cgcloud__Delivery_Terms__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionTerms of delivery.Possible values are:ExWarehouse—Ex WarehouseFreeOfCharge—Free Of ChargeFreeOnBoard—Free On BoardScaleOfCharge—Scale Of Charge |
| cgcloud__Document_Transaction_Type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies how to manage a sales document.Possible values are:CashInvoice—Delivery Cash InvoiceCreditInvoice—Delivery Credit InvoiceCashOrder—Cash OrderCreditMemo—Credit MemoCreditOrder—Credit OrderInvoiceCashInvoice—Cash InvoiceInvoiceCreditInvoice—Credit InvoiceNoPayment—No PaymentNoPaymentOrder—No Payment OrderVanSalesCashInvoice—Van Sales Cash InvoiceVanSalesNoPaymentInvoice—Van Sales No Payment InvoiceNonValuatedDeliveryNote—Non Valuated Delivery NoteValuatedDeliveryNote—Valuated Delivery Note |
| cgcloud__Document_Type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the type of the order document to distinguish DSD and non-DSD order entries.Possible values are:CashCheckIn—Cash Check InCashCheckOut—Cash Check OutDeliveryOrderEntry—Order EntryProductCheckIn—Product Check InProductCheckOut—Product Check OutTruckAudit—Truck Audit |
| cgcloud__Gross_Total_Value_Receipt__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionTotal value of the order entry in the order/receipt currency. |
| cgcloud__Gross_Total_Value__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionGross total value (domestic currency) of the sales document including relevant sales taxes. The system calculates its value based on the respective sales document item template settings. |
| cgcloud__Header_Discount_Percentage__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionPercentage value of the header discount. |
| cgcloud__Initiation_Date__c | TypedatePropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionDate of initiation of this sales document. |
| cgcloud_Invoice_ID__C | TypedatePropertiesCreate, Nillable, UpdateDescriptionUnique invoice identifier. |
| cgcloud__Inventory_Reference_1__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFirst reference to the inventory as defined in the order template. |
| cgcloud__Inventory_Reference_2__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSecond reference to the inventory as defined in the order template. |
| cgcloud__Inventory_Reference_3__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThird reference to the inventory as defined in the order template. |
| cgcloud__Inventory_Reference_4__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFourth reference to the inventory as defined in the order template. |
| cgcloud__Inventory_Reference_5__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFifth reference to the inventory as defined in the order template. |
| cgcloud__Invoice_Note__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionInvoice note. |
| cgcloud__Merchandise_Value_Receipt__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionMerchandise value (value of goods) in receipt currency, not including header discount. |
| cgcloud__Mobility_Release__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the order was released on Mobility.The default value is false. |
| cgcloud__Order_Account__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLookup field to capture the customer for which the order is created.This is a relationship field.Relationship Namecgcloud__Order_Account__rRelationship TypeLookupRefers ToAccount |
| cgcloud__Order_Date__c | TypedatePropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionDay on which the customer committed to the sales document. For order entries, this is the order date. |
| cgcloud__Order_Id__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the user-readable number that's used for print-outs and customer communication. |
| cgcloud__Order_Template__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the Order Template for Order Entry.This is a relationship field.Relationship Namecgcloud__Order_Template__rRelationship TypeLookupRefers Tocgcloud__Order_Template__c |
| cgcloud__Paid_Amount_Receipt__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionPaid amount of the order entry in domestic currency. The paid amount is a gross value. |
| cgcloud__Paid_Amount__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionPaid amount of order. |
| cgcloud__Payer__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the payer of the order.This is a relationship field.Relationship Namecgcloud__Payer__rRelationship TypeLookupRefers ToAccount |
| cgcloud__Payment_Method__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescribes the manner of the remuneration.Possible values are:CashCheck—ChequeCreditCard—Credit CardDebitCard—Debit CardDeductionExpenseMoneyOrder—Money OrderMultiple |
| cgcloud__Payment_Reason__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies a reason that leads to modifying the document handling regarding payments.Possible values are:CalculationFailed—Calculation FailedPriceDisagreement—Price DisagreementWrongPrice—Wrong Price |
| cgcloud__Payment_Terms__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionTerms of payment.Possible values are:2percent—2 % / 14COD—cash on deliverynet30—net 30 |
| cgcloud__Payment__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents the sign of the absolute paid amount: either inpayment (+, debit) or outpayment (-, credit).Possible values are:Credit—OutDebit—In |
| cgcloud__Phase__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionWorkflow neutral description of the order entry status.Possible values are:ApprovedAssignedCanceledClosedFeedbackForApproval—For ApprovalHoldBack—Hold BackInitialReadyReleasedSendFax—Send FaxVoidedWorkCompleted—Work CompletedThe default value is Initial. |
| cgcloud__Pricing_Date__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionEnables tracking of the conditions that were used. By default: current day. It can be changed if the order was taken on paper first and was then added to the system after a price change. |
| cgcloud__Pricing_Info_1__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAdditional pricing information field that stores calculated value at the order level. |
| cgcloud__Pricing_Info_2__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAdditional pricing information field that stores calculated value at the order level. |
| cgcloud__Pricing_Info_3__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAdditional pricing information field that stores calculated value at the order level. |
| cgcloud__Pricing_Info_4__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAdditional pricing information field that stores calculated value at the order level. |
| cgcloud__Pricing_Info_5__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAdditional pricing information field that stores calculated value at the order level.This field is available in API version 55.0 and later. |
| cgcloud__Pricing_Info_6__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAdditional pricing information field that stores calculated value at the order level.This field is available in API version 55.0 and later. |
| cgcloud__Pricing_Info_7__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAdditional pricing information field that stores calculated value at the order level.This field is available in API version 55.0 and later. |
| cgcloud__Pricing_Info_8__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAdditional pricing information field that stores calculated value at the order level.This field is available in API version 55.0 and later. |
| cgcloud__Pricing_Info_9__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAdditional pricing information field that stores calculated value at the order level.This field is available in API version 55.0 and later. |
| cgcloud__Pricing_Info_10__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAdditional pricing information field that stores calculated value at the order level.This field is available in API version 55.0 and later. |
| cgcloud__Pricing_Information__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionStores the pricing information (found conditions) that are directly related to the order. |
| cgcloud__Receipt_Currency__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReceipt currency of an order.Possible values are:CADCHFEURGBPNOKRUBUSDYen—JPY |
| cgcloud__Record_Link__c | TypestringPropertiesFilter, Nillable, SortDescriptionLink to the Detail page of the Order record.This is a calculated field.FormulaHYPERLINK("/" &Id, $Label.cgcloud__record_link, 			"_self") |
| cgcloud__Release_Geolocation__Latitude__s | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionGeolocation (latitude) that's to be fulfilled by mobility devices, and is not displayed on the order UI. |
| cgcloud__Release_Geolocation__Longitude__s | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionGeolocation (longitude) that's to be fulfilled by mobility devices, and is not displayed on the order UI. |
| cgcloud__Release_Geolocation__c | TypelocationPropertiesNillableDescriptionGeolocation (latitude and longitude) that's to be fulfilled by mobility devices, and is not displayed on the order UI. |
| cgcloud__Release_Platform__c | TypestringPropertiesFilter, Nillable, SortDescriptionPlatform that can be used to release the order.This is a calculated field.FormulaTEXT(cgcloud__Order_Template__r.cgcloud__Release_Platform__c) |
| cgcloud__Release_Time__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate and time on which the sales document was released. |
| cgcloud__Responsible__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the responsible user.This is a relationship field.Relationship Namecgcloud__Responsible__rRelationship TypeLookupRefers ToUser |
| cgcloud__Selected_Rewards__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionStores mobility selected rewards and related items or products in JSON format. |
| cgcloud__Total_Returned_Quantity__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSum of all returned quantities. |
| cgcloud__Total_Shipped_Quantity__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSum of all shipped quantities. |
| cgcloud__Total_Value__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionTotal value (domestic currency) of the order including item discounts, without sales taxes. |
| cgcloud__Tour__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThis field looks up to Tour.This is a relationship field.Relationship Namecgcloud__Tour__rRelationship TypeLookupRefers Tocgcloud__Tour__c |
| cgcloud__Value__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionValue of the order entry in the order or receipt currency. |
| cgcloud__Visit__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the call in which the sales document is created.This is a relationship field.Relationship Namecgcloud__Visit__rRelationship TypeLookupRefers ToVisit |
| cgcloud__Warehouse__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionWarehouse from which the customer is to be delivered.Possible values are:55001—North West55002—South West55003—Middle West55004—North East5505—South EastCE—Central EuropeNA—North America |
| cgcloud__Wholesaler__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the wholesaler of the account.This is a relationship field.Relationship Namecgcloud__Wholesaler__rRelationship TypeLookupRefers ToAccount |
| cgcloud__Workflow__c | TypestringPropertiesFilter, Nillable, SortDescriptionID of the referenced workflow.This is a calculated field.Formulacgcloud__Order_Template__r.cgcloud__Workflow__r.Name |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Order\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Order\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Order\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Order\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Order\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Code Examples

```
HYPERLINK("/" &Id, $Label.cgcloud__record_link,
			"_self")
```

## Related Topics

- cgcloud__Order__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Order__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Order__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Order__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Order__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
