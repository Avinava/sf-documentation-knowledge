---
title: "cgcloud__Order_Item_Template__c"
domain: retail-api
topic: cgcloudorderitemtemplatec
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:39.110Z
estimatedTokens: 3638
keywords: [cgcloud__Order_Item_Template__c, template, behavior, Order, Item, OrderEntry, sales, document, behave, entry, API, version, 54.0, later, cgcloud]
---

# cgcloud__Order_Item_Template__c

> This template controls the behavior of an Order Item Template. For
         example, OrderEntry is an important template, which allows a sales document to behave like
         an order entry. This object is available in API version 54.0 and later.

# cgcloud\_\_Order\_Item\_Template\_\_c

This template controls the behavior of an Order Item Template. For example, OrderEntry is an important template, which allows a sales document to behave like an order entry. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionUnique identification of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRecord type of the record.This is a relationship field.Relationship NameRecordTypeRelationship TypeLookupRefers ToRecordType |
| cgcloud__Active__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionAttribute that's used to enable or disable the current template.The default value is true. |
| cgcloud__Add_Allowed__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the user can add or scan items for the selected item type.The default value is false. |
| cgcloud__Assortment_Relation__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionControls whether the assignment of products to sales document item templates within the customer selling assortment has to be considered. - No: The system doesn't consider any assignment. - Yes: The system filters the disposal list subject to the assignment. Although, the validation verifies the assignment of each product to the according sales document item template.The default value is false. |
| cgcloud__Calculation_Group__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAttribute that allows to classify order item templates in order to identify the item template in a complex pricing calculation step.Possible values are:A—DeliveryB—ReturnC—Return ResaleFreeItem—Free Item |
| cgcloud__Check_Inventory_Overdraft__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionControls whether and the method by which overdrawing the user inventory is verified.Possible values are:NoWarningYesThe default value is No. |
| cgcloud__Check_Max_Quantity__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionUsed to prevent adding quantities that are greater than the maximum value.Possible values are:0—No1—Yes2—WarningThe default value is 0. |
| cgcloud__Check_Quota_Overdraft__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionControls whether and the method by which overdrawing the quota is verified.Possible values are:NoWarningYesThe default value is No. |
| cgcloud__Closed_Listing__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether an order quantity for a product thatthe order listing algorithm doesn't find can be entered for this sales document item template.The default value is false. |
| cgcloud__Complex_Pricing_Relevant__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the order item tempate can be used for complex scenarios.The default value is false. |
| cgcloud__Consider_Delivery_State__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the delivery of a product is to be considered. For return items, the delivery state is not to be considered.The default value is true. |
| cgcloud__Creation_Platform__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates the platform on which this template can be used to create order documents.Possible values are:BothLaptopMobility |
| cgcloud__Default_Logistic_Unit__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUnit to preset.Possible values are:Consumer—Consumer UnitOrder—Order UnitPrice—Price UnitStockTaking—Stocktaking Unit |
| cgcloud__Description_Language_1__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 1. |
| cgcloud__Description_Language_2__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 2. |
| cgcloud__Description_Language_3__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 3. |
| cgcloud__Description_Language_4__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 4. |
| cgcloud__Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionDescription of the Order_Item_Template.This is a calculated field.FormulaCASE($User.cgcloud__Language_Postfix__c, "Language1", cgcloud__Description_Language_1__c, "Language2", BLANKVALUE(cgcloud__Description_Language_2__c,cgcloud__Description_Language_1__c), "Language3", BLANKVALUE(cgcloud__Description_Language_3__c,cgcloud__Description_Language_1__c), "Language4", BLANKVALUE(cgcloud__Description_Language_4__c,cgcloud__Description_Language_1__c), cgcloud__Description_Language_1__c) |
| cgcloud__Exclude_Order_Rounding__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether Quantity Rounding is to be excluded.The default value is true. |
| cgcloud__Explicit_Default_Unit__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefault Unit Unit to preset the Order_Item.UoM. Used when Use_Product_Logistic !='Yes'.Possible values are:ConsumerUnit—Consumer UnitLayerPalletSalesUnit—Sales Unit |
| cgcloud__Logistic_Category__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionControls the logistical unit types that can be chosen for an item of this template.Possible values are:AllOrder—Order UnitStocktaking—Stocktaking Unit |
| cgcloud__Max_Quantity__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionControls the maximum quantity that can be the orderer of any product by using this order item template. |
| cgcloud__Mobility_Logistic_Unit__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionControls the setting of the QuantitiyLogisticUnit attribute on the Mobility when ordering a product based on this order item template.Possible values are:ConsumerUnit—Consumer UnitOrderUnit—Order Unit |
| cgcloud__Modification_Reason__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies whether the user must enter a reason if the preordered quantity has been modified.Possible values are:Mand—MandatoryNotReq—Not RequiredOpt—Optional |
| cgcloud__Modification_Reasons__c | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionReason for modification of the preordered quantity on a mobile device.Possible values are:BadPrd—Bad ProductDmgByDriver—Damage by driverFGReturn—Full good returnIncOrder—Incorrect orderLess—Client wants lessMisc—MiscellaneousMissCount—MisscountingMore—Client wants moreNopayment—No paymentOutTrStock—Out of Truck StockTMStock—Too much stockTckTransfer—Truck transferWrDel—Wrong deliveryWrongPrd—Wrong product |
| cgcloud__Modify_Quantity__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionQuantity that's to be modified.Possible values are:NoOnly DecreaseOnly IncreaseYes |
| cgcloud__Movement_Direction__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates the type of movement that's associated with the order.Possible values are:InNoneOutThe default value is None. |
| cgcloud__Permits_Printing__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionControls whether the order item of this template is to be printed.The default value is false. |
| cgcloud__Policy__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies whether a order quantity is to be suggested in the disposal list and whether the suggestion is to be based on the ordered quantity or on the delivered (invoiced) quantity of the item.Possible values are:Delivered QuantityNoOrdered Quantity |
| cgcloud__Position__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDetermines the position of the order item template.Possible values are:110111223456789 |
| cgcloud__Price_Effect__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates the effect of the item template on the total value.Possible values are:-1—Subtractive0—Neutral1—AdditiveThe default value is 1. |
| cgcloud__Quantity_Suggestion_Policy__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies whether a order quantity is to be suggested in the disposal list and whether the suggestion is to be based either on the ordered quantity or on the delivered (invoiced) quantity of the item.Possible values are:DeliveredQuantity—Delivered QuantityNoOrderedQuantity—Ordered Quantity |
| cgcloud__Sales_Org__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSales org to which the order item template belongs.Possible values are:0000000100020003 |
| cgcloud__Save_Zero_Quantity__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionOrder item based on the respective item template that's to be saved when the item has been modified but still has 0 quantity of the order item.The default value is false. |
| cgcloud__Scanning_Increment__c | TypedoublePropertiesCreate, Defaulted on create, Filter, Nillable, Sort, UpdateDescriptionScanning increment. |
| cgcloud__Short_Text__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionShort text for the item template. |
| cgcloud__UoM_Scan_Behavior__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionUoM Scan Behavior.Possible values are:Barcode—Barcode UoMCurrent—Current UoMStandard—Standard UoMThe default value is Standard. |
| cgcloud__UoM_Scan_Default_Unit__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionUoM Scan Default UnitPossible values are:ConsumerUnit—Consumer UnitLayerPalletSalesUnit—Sales UnitThe default value is SalesUnit. |
| cgcloud__Use_Inventory__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionControls whether user inventory relationships and attributes are to be considered.The default value is false. |
| cgcloud__Use_Product_Logistic__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionControls the manner in which logistics information for a product is to be considered.Possible values are:N—NoV—ValidateY—Yes |
| cgcloud__Use_Quota__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionControls whether quota relationships and attributes are to be considered.The default value is false. |
| cgcloud__User_Special_Price__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionUser Special PriceThe default value is false. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Order\_Item\_Template\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Order\_Item\_Template\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Order\_Item\_Template\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Order\_Item\_Template\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Order\_Item\_Template\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Code Examples

```
CASE($User.cgcloud__Language_Postfix__c,
"Language1", cgcloud__Description_Language_1__c,
"Language2", BLANKVALUE(cgcloud__Description_Language_2__c,cgcloud__Description_Language_1__c),
"Language3", BLANKVALUE(cgcloud__Description_Language_3__c,cgcloud__Description_Language_1__c),
"Language4", BLANKVALUE(cgcloud__Description_Language_4__c,cgcloud__Description_Language_1__c),
cgcloud__Description_Language_1__c)
```

## Related Topics

- cgcloud__Order_Item_Template__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Order_Item_Template__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Order_Item_Template__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Order_Item_Template__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Order_Item_Template__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
