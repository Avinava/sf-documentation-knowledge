---
title: "cgcloud__Account_Extension__c"
domain: retail-api
topic: cgcloudaccountextensionc
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:37.949Z
estimatedTokens: 3994
keywords: [cgcloud__Account_Extension__c, records, account, roles, further, product-related, attributes, API, version, 54.0, later, cgcloud, _Account, _Extension, Calls]
---

# cgcloud__Account_Extension__c

> This object records account roles and further product-related
         attributes. This object is available in API version 54.0 and later.

# cgcloud\_\_Account\_Extension\_\_c

This object records account roles and further product-related attributes. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of this record. |
| cgcloud__Account_Plan_Type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the level of the customer in trade org hierarchies, which is used to aggregate KPIs.Possible values are:Plan |
| cgcloud__Account__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the customer to whom the Extension record is assigned.This is a relationship field.Relationship Namecgcloud__Account__rRelationship TypeMaster-detailRefers ToAccount (the master object) |
| cgcloud__Bill_To_Role_Valid_From__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate from which the Bill To Role is valid. |
| cgcloud__Bill_To_Role_Valid_Thru__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate until which the Bill To Role is valid. |
| cgcloud__Broker_Role_Valid_From__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate from which the Broker Role is valid. |
| cgcloud__Broker_Role_Valid_Thru__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate until which the Broker Role is valid. |
| cgcloud__Class_Of_Trade__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to which the account the company segment belongs.Possible values are:CC—C&C MarketsCategorySpecialistConvenienceStoresDepartmentDiscountStoresDrugStoresGasStationGroceryHotelHypermarketKioskRestaurantsSM—Supermarket |
| cgcloud__Company_Type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefines the type of customer.Possible values are:ConsumerIndependentOnTradePayeePayerRetailerThirdPartyWholesaler |
| cgcloud__Consider_Modules__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the account can be used to list module classification.The default value is false. |
| cgcloud__Customer_Id__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the customer to whom the Extension record is assigned. |
| cgcloud__Customer_Role_Number__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDefines the role number of the customer. |
| cgcloud__Customer_Role_Price_List_type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefines the Role Price List type of the customer.Possible values are:Direct CustomerNotRelevantWholesaler |
| cgcloud__Customer_Role_Price_Type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefines the customer's Role Price type.Possible values are:NotRelevantconsumerfactory |
| cgcloud__Customer_Role_Valid_From__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate from which the customer role is valid. |
| cgcloud__Customer_Role_Valid_Thru__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate until which the customer role is valid. |
| cgcloud__Date_Closure__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate on which the company closed. |
| cgcloud__Decreasing_PSI__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the previously calculated PSI is higher than the last one.The default value is false. |
| cgcloud__Decreasing_Revenue__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDefines whether a customer is classified as a decrease revenue customer.Possible values are:NoYes |
| cgcloud__Delivery_Role_Modify_Preset_Quantity__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the way quantity modifications of preset quantities of delivery documents can be modified.Possible values are:NoOnly DecreaseOnly IncreaseYes |
| cgcloud__Delivery_Role_Valid_From__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate from which the Delivery Role is valid. |
| cgcloud__Delivery_Role_Valid_Thru__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate until which the Delivery Role is valid. |
| cgcloud__Distribution_Issue__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the last relevant call (and then the customer) has distribution issues.The default value is false. |
| cgcloud__ExternalId__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionUnique external ID. |
| cgcloud__Fixed_Overdraw__c | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionFixed-based overdraw allowance percentage. |
| cgcloud__Fund_Role_Valid_From__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate from which the Fund Role is valid. |
| cgcloud__Invoice_Document_Transaction_Type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies how to handle invoice documents regarding payments.Possible values are:CreditMemoInvoiceCashInvoiceInvoiceCreditInvoiceNoPaymentThis field is available in API version 55.0 and later. |
| cgcloud__Fund_Role_Valid_Thru__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate until which the Fund Role is valid. |
| cgcloud__Last_PSI__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionLast relevant calculated PSI. |
| cgcloud__Last_Visit_Date__c | TypedatePropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionDate on which the last customer call was referenced to calculate the KPI. |
| cgcloud__Match_Code__c | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionMatchcode of the business partner. It is usually a concatenation of several encoded account attributes, such as name, state, and city. For example, KROGER.GA.ATL. |
| cgcloud__OOS_Issue__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the last relevant call (and then the customer) has Out Of Stock (OOS) issues.The default value is false. |
| cgcloud__Order_Document_Transaction_Type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionMode to handle orders. Specifies payment type and defines detailed behavior of a delivery document.Possible values are:CashOrderCreditOrderNoPaymentOrderVanSalesCashInvoiceVanSalesNoPaymentInvoiceThis field is available in API version 55.0 and later. |
| cgcloud__Order_Role_Order_Template_Blocked__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSet a value to control the customer's use of the temporary order template.Possible values are:0—No1—Yes2—Warning |
| cgcloud__Order_Role_Orderer_Type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionType of the ordering business partner.Possible values are:DirectIndirectReplenishment |
| cgcloud__Order_Role_Valid_From__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate from which the Order Role is valid. |
| cgcloud__Order_Role_Valid_Thru__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate until which the Order Role is valid. |
| cgcloud__Org_Level__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionClassification of the customer organization level.Possible values are:CustLevel01—Customer Level 1CustLevel02—Customer Level 2CustLevel03—Customer Level 3CustLevel04—Customer Level 4CustLevel05—Customer Level 5CustLevel06—Customer Level 6CustLevel07—Customer Level 7 |
| cgcloud__Payer_Role_Credit_Block__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the customer is credit blocked.The default value is false. |
| cgcloud__Payer_Role_Credit_Rating__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the credit rating of the customer.Possible values are:ABC |
| cgcloud__Payer_Role_Document_Transaction_Type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionMode to handle orders. Specifies payment type and defines detailed behavior of a delivery document.Possible values are:CashInvoice—Delivery Cash InvoiceCreditInvoice—Delivery Credit InvoiceNonValuatedDeliveryNote—Non Valuated Delivery NoteValuatedDeliveryNote—Valuated Delivery Note |
| cgcloud__Payer_Role_Overall_Credit_Limit__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSpecifies the overall credit limit of the customer. |
| cgcloud__Payer_Role_Valid_From__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate from which the Payer Role is valid. |
| cgcloud__Payer_Role_Valid_Thru__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date until when the Payer Role is valid. |
| cgcloud__Payment_Mode__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionPreferred payment mode used when taking a payment during order taking.Possible values are:CashCheckCreditCardDebitCardMoneyOrderThis field is available in API version 55.0 and later. |
| cgcloud__Phase__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSystem in which the record is stored.Possible values are:1—Priority ERP2—Priority CRM3—Only CRM |
| cgcloud__Pricing_Type__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionDetermines the pricing type of the customer.Possible values are:1—Standard2—Standard incl. Sales TaxC—Sample/DonationThe default value is 1. |
| cgcloud__Priority__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionClassification of a company.Possible values are:A - PriorityB - PriorityC - Priority |
| cgcloud__Promotion_Valid_From__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate from which the Promotion Role is valid. |
| cgcloud__Promotion_Valid_Thru__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate until which the Promotion Role is valid. |
| cgcloud__RBF_Overdraw__c | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionRate Based Funding overdraw allowance percentage. |
| cgcloud__Record_Link__c | TypestringPropertiesFilter, Nillable, SortDescriptionLink to the detail page of the CustomerExtension record.This is a calculated field.FormulaHYPERLINK("/" &Id, $Label.cgcloud__record_link, "_top") |
| cgcloud__Sales_Org__c | TypestringPropertiesFilter, Nillable, SortDescriptionSales organization to which the customer extension belongs.This is a calculated field.Formulacgcloud__Account__r.cgcloud__Sales_Org__c |
| cgcloud__Sales_Organization__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionOptimize the reading process of account filters in the Trade Calendar and Account Plan.This is a relationship field.Relationship Namecgcloud__Sales_Organization__rRelationship TypeLookupRefers Tocgcloud__Sales_Organization__c |
| cgcloud__Sales_Relevant__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the account can be used for sales activities.The default value is false. |
| cgcloud__State__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStatus of the account. Business partner roles can be used to control the status of the account.Possible values are:010—Active090—Prepared for Deletion |
| cgcloud__Store_Role_Valid_From__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate from which the Store Role is valid. |
| cgcloud__Store_Role_Valid_Thru__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate until which the Store Role is valid. |
| cgcloud__Tax_Jurisdiction_Code__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionJurisdiction code of location at which taxes are to be paid. |
| cgcloud__Transfer_Record_Identifier__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIdentifies the anchor customer for the promotion transfer process. |
| cgcloud__Transfer_Record_Identifier_Unique__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA unique identifier that contains a combination of transfer record identifier and sales org values. |
| cgcloud__Week_Day_Share_Profile__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLookup to the Week Day Share Profile that's utilized for calculations for the referenced account.This is a relationship field.Relationship Namecgcloud__Week_Day_Share_Profile__rRelationship TypeLookupRefers Tocgcloud__Week_Day_Share_Profile__c |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Account\_Extension\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Account\_Extension\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Account\_Extension\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Account\_Extension\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Account\_Extension\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__Account_Extension__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Account_Extension__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Account_Extension__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Account_Extension__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Account_Extension__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
