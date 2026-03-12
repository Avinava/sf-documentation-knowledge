---
title: "cgcloud__Order_Item__c"
domain: retail-api
topic: cgcloudorderitemc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:39.060Z
estimatedTokens: 3262
keywords: [cgcloud__Order_Item__c, Stores, order, item, API, version, 54.0, later, cgcloud, _Order, _Item, Calls, Associated, Objects]
---

# cgcloud__Order_Item__c

> Stores the details of the order item object. This object is
      available in API version 54.0 and later.

# cgcloud\_\_Order\_Item\_\_c

Stores the details of the order item object. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| cgcloud__Base_Price_Receipt__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionBasic product price in receipt currency. |
| cgcloud__Base_Price__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionStores the Value of the item, specified in the appropriate product condition. |
| cgcloud__Check_In_Reason_Code__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionAllows the specification of a reason if the checked-in product quantity doesn't adhere to the expected product quantity that's given via product inventory.Possible values are:BrokenMisc.Miscounting—Miscounting Check OutNoDoc—Pick up without doc.Stolen |
| cgcloud__Consumer_Quantity__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionOrdered quantity expressed in consumer quantity units. |
| cgcloud__Discount__c | TypepercentPropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionManual discount given by the user. |
| cgcloud__Erp_Id__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of this order entry for the ERP system. |
| cgcloud__Free_Item_Creation_Step__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores a reference to the step that generates the free item. |
| cgcloud__Gross_Value_Receipt__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionGross value in receipt currency. |
| cgcloud__History__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe item, which has been added to the disposal list, has been ordered in a former sales document. (The item belongs to a former sales document of the same business partner and of the same sales document template.)The default value is false. |
| cgcloud__Left_Quantity__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionItem quantity that's left on the truck after product check-in. |
| cgcloud__Listed__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the product exists in an authorization list of the order.The default value is false. |
| cgcloud__Modification_Reason__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies a reason if preordered product quantity has been modified on the mobility device.Possible values are:BadPrd—Bad ProductCpFailed—Pricing failedDmgByDriver—Damage by driverFGReturn—Full good returnIncOrder—Incorrect orderLess—Client wants lessMisc—MiscellaneousMissCount—MisscountingMore—Client wants moreNopayment—No paymentOutTrStock—Out of Truck StockTMStock—Too much stockTckTransfer—Truck transferWrDel—Wrong deliveryWrongPrd—Wrong product |
| cgcloud__Order_Item_Template__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the order item template with which the Order Item is associated.This is a relationship field.Relationship Namecgcloud__Order_Item_Template__rRelationship TypeLookupRefers Tocgcloud__Order_Item_Template__c |
| cgcloud__Order__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the order with which the Order Item is associated.This is a relationship field.Relationship Namecgcloud__Order__rRelationship TypeMaster-detailRefers Tocgcloud__Order__c (Master object) |
| cgcloud__Out_Of_Stock__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the product is out of stock.The default value is false. |
| cgcloud__Parent_Order_Item__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to a parent Order Item. (For example, for a free item, the ordered item that caused the free item. It's used in complex pricing on mobility devices.This is a relationship field.Relationship Namecgcloud__Parent_Order_Item__rRelationship TypeLookupRefers Tocgcloud__Order_Item__c |
| cgcloud__Parent_Type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDefines the parent to which the free item is related. It can be related to an Order Item. If the free item related to the Order header type is Order, then Parent_Order_Item is filled.Possible values are:ItemOrderReward |
| cgcloud__Price_Receipt__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionCalculated price of the item in the receipt or document currency. |
| cgcloud__Price__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionCalculated price of the item in the domestic currency. |
| cgcloud__Pricing_Info_1__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAdditional pricing information field that stores the calculated value in the Order Item level. |
| cgcloud__Pricing_Info_2__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAdditional pricing information field for storing calculated value in the Order Item level. |
| cgcloud__Pricing_Info_3__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAdditional pricing information field for storing calculated value in the Order Item level. |
| cgcloud__Pricing_Info_4__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAdditional pricing information field for storing calculated value in the Order Item level. |
| cgcloud__Pricing_Info_5__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAdditional pricing information field for storing calculated value in the Order Item level.This field is available in API version 55.0 and later. |
| cgcloud__Pricing_Info_6__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAdditional pricing information field for storing calculated value in the Order Item level.This field is available in API version 55.0 and later. |
| cgcloud__Pricing_Info_7__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAdditional pricing information field for storing calculated value in the Order Item level.This field is available in API version 55.0 and later. |
| cgcloud__Pricing_Info_8__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAdditional pricing information field for storing calculated value in the Order Item level.This field is available in API version 55.0 and later. |
| cgcloud__Pricing_Info_9__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAdditional pricing information field for storing calculated value in the Order Item level.This field is available in API version 55.0 and later. |
| cgcloud__Pricing_Info_10__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionAdditional pricing information field for storing calculated value in the Order Item level.This field is available in API version 55.0 and later. |
| cgcloud__Pricing_Information__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionStores conditions that were used to calculate pricing. |
| cgcloud__Product__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionProduct ID of the selected product.This is a relationship field.Relationship Namecgcloud__Product__rRelationship TypeLookupRefers ToProduct2 |
| cgcloud__Promoted__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a promotion is available in the relevant period.The default value is false. |
| cgcloud__Promotion_Reward__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the reward that belongs to the Order Item.This is a relationship field.Relationship Namecgcloud__Promotion_Reward__rRelationship TypeLookupRefers Tocgcloud__Promotion_Reward__c |
| cgcloud__Promotion__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the promotion if the product of the item originates from a selectable promotion.This is a relationship field.Relationship Namecgcloud__Promotion__rRelationship TypeLookupRefers Tocgcloud__Promotion__c |
| cgcloud__Quantity__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionQuantity of this product. |
| cgcloud__Record_Link__c | TypestringPropertiesFilter, Nillable, SortDescriptionHyperlink to the detail page of the record.This is a calculated field.FormulaHYPERLINK("/" &Id, $Label.cgcloud__record_link, "_top") |
| cgcloud__Special_Price_Receipt__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSpecifies a reduced price for an item that's used to calculate the item value, if specified. This attribute can be edited only if the Order item template allows the consideration of the special price. |
| cgcloud__Special_Price__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSpecifies a reduced price for an item that's used to calculate the item value, if specified. This attribute can be edited only if the sales document item template allows the consideration of the special price. |
| cgcloud__Suggested_Quantity__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionContains the suggested order quantity that's been calculated via an algorithm or that's given by a relevant promotion. |
| cgcloud__Target_Quantity__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionProduct checkout quantity for the tour that the HOST interface specifies. |
| cgcloud__UoM__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUnit Of Measure.Possible values are:ConsumerUnitLayerPalletSalesUnit |
| cgcloud__Value_Receipt__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionCalculated value of the item in the receipt or document currency. |
| cgcloud__Value__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionCalculated value of the item in the domestic currency. |
| cgcloud__Voided__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a disposal list item is voided.The default value is false. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Order\_Item\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Order\_Item\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Order\_Item\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Order\_Item\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Order\_Item\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__Order_Item__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Order_Item__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Order_Item__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Order_Item__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Order_Item__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
