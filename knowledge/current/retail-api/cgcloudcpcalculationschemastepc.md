---
title: "cgcloud__CP_Calculation_Schema_Step__c"
domain: retail-api
topic: cgcloudcpcalculationschemastepc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:38.430Z
estimatedTokens: 2215
keywords: [cgcloud__CP_Calculation_Schema_Step__c, stores, relationship, calculation, schema, pricing, condition, template, that's, steps, belong, API, version, 54.0, later]
---

# cgcloud__CP_Calculation_Schema_Step__c

> This object stores the details of the relationship between
         calculation schema and pricing condition template that's used for the calculation steps
         that belong to a calculation schema. This object is available in API version 54.0 and
      later.

# cgcloud\_\_CP\_Calculation\_Schema\_Step\_\_c

This object stores the details of the relationship between calculation schema and pricing condition template that's used for the calculation steps that belong to a calculation schema. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of this record. |
| cgcloud__Accrual__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDefines whether the calculation step is an accrual step.The default value is false. |
| cgcloud__Active__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionActive flag.The default value is false. |
| cgcloud__Base_User_Exit_Id__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUnique identifier for the user exit that modifies the basis value of the calculation. |
| cgcloud__Calculation_Groups__c | TypemultipicklistPropertiesCreate, Filter, Nillable, UpdateDescriptionSpecifies all calculation groups that are relevant for the calculation step.Possible values are:A—DeliveryB—ReturnC—Return ResaleFreeItem—Free Item |
| cgcloud__Calculation_Schema__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the calculation schema record.This is a relationship field.Relationship Namecgcloud__Calculation_Schema__rRelationship TypeMaster-detailRefers Tocgcloud__CP_Calculation_Schema__c (Master object) |
| cgcloud__Constraint_User_Exit_Id__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUnique identifier for a user exit that represents a constraint for the required calculation step. |
| cgcloud__Interim_Value__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAuxiliary variable that can be used to either store the result of the step (Copy) or sum up the current item value (carry over) as interim value.Possible values are:CarryOver(1)—Carry Over (1)CarryOver(2)—Carry Over (2)CarryOver(3)—Carry Over (3)CarryOver(4)—Carry Over (4)CarryOver(5)—Carry Over (5)CarryOver(6)—Carry Over (6)Copy1—Copy (D)Copy2—Copy (E)Copy3—Copy (F)Copy4—Copy (G)Copy5—Copy (H)Copy6—Copy (I) |
| cgcloud__Item_Meta_Rule__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies how the rules apply to the order item template.Possible values are:According to Price EffectAll Items (Total)Delivery (excl. Free Item)Delivery (incl. Free Item)Returns Only |
| cgcloud__Mandatory__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDefines whether a calculation step is mandatory. If no matching condition records are found, the calculation stops with an error message.The default value is false. |
| cgcloud__Position__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionPosition of the calculation step within the calculation schema. |
| cgcloud__Pricing_Condition_Template__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the pricing condition template.This is a relationship field.Relationship Namecgcloud__Pricing_Condition_Template__rRelationship TypeLookupRefers Tocgcloud__CP_Pricing_Condition_Template__c |
| cgcloud__Print_Relevant__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the calculation step is print relevant.The default value is false. |
| cgcloud__Record_Link__c | TypestringPropertiesFilter, Nillable, SortDescriptionLink to the detail page of the calculation schema step record.This is a calculated field.FormulaHYPERLINK("/" &Id, $Label.cgcloud__record_link, "_top") |
| cgcloud__Selectable_Promotion_Skip__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSkip the calculation step for an item that originates from a selectable promotion.The default value is false. |
| cgcloud__Statistical__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDefines whether the calculation step is a statistical step.The default value is false. |
| cgcloud__Step_Constraint__c | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionDefines a constraint for the calculation step. If the constraint isn't fulfilled, the calculation step is skipped. |
| cgcloud__Step_Reference__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDefines the calculation steps that are used as a basis of the current calculation step. |
| cgcloud__Step__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPosition of the calculation step within the calculation schema. |
| cgcloud__Target_Condition__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecification of either the line item attribute or sales document attribute that receives the value of the found condition.Possible values are:BasePriceReceipt—Base Price (Receipt)GrossTotalValueReceipt—Gross Total Value (Receipt)GrossValueReceipt—Gross Value (Receipt)MerchandiseValueReceipt—Merchandise Value (Receipt)PriceReceipt—Price (Receipt)PricingInfo1—Pricing Info 1PricingInfo2—Pricing Info 2PricingInfo3—Pricing Info 3PricingInfo4—Pricing Info 4TotalValueReceipt—Total Value (Receipt)ValueReceipt—Value (Receipt) |
| cgcloud__Target_Result__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecification of either the line item attribute or sales document attribute that receives the result of the current calculation step.Possible values are:BasePriceReceipt—Base Price (Receipt)GrossTotalValueReceipt—Gross Total Value (Receipt)GrossValueReceipt—Gross Value (Receipt)MerchandiseValueReceipt—Merchandise Value (Receipt)PriceReceipt—Price (Receipt)PricingInfo1—Pricing Info 1PricingInfo2—Pricing Info 2PricingInfo3—Pricing Info 3PricingInfo4—Pricing Info 4TotalValueReceipt—Total Value (Receipt)ValueReceipt—Value (Receipt) |
| cgcloud__User_Exit_Id__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUnique identifier for the user exit of the calculation step. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_CP\_Calculation\_Schema\_Step\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_CP\_Calculation\_Schema\_Step\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_CP\_Calculation\_Schema\_Step\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_CP\_Calculation\_Schema\_Step\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_CP\_Calculation\_Schema\_Step\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__CP_Calculation_Schema_Step__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__CP_Calculation_Schema_Step__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__CP_Calculation_Schema_Step__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__CP_Calculation_Schema_Step__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__CP_Calculation_Schema_Step__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
