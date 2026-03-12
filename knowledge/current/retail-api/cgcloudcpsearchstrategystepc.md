---
title: "cgcloud__CP_Search_Strategy_Step__c"
domain: retail-api
topic: cgcloudcpsearchstrategystepc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:38.535Z
estimatedTokens: 1710
keywords: [cgcloud__CP_Search_Strategy_Step__c, stores, relationship, search, strategy, key, complex, pricing, steps, API, version, 54.0, later, cgcloud, _CP]
---

# cgcloud__CP_Search_Strategy_Step__c

> This object stores the details of the relationship between search
         strategy and key type, which is used to search for complex pricing strategy steps.
      This object is available in API version 54.0 and later.

# cgcloud\_\_CP\_Search\_Strategy\_Step\_\_c

This object stores the details of the relationship between search strategy and key type, which is used to search for complex pricing strategy steps. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| cgcloud__Account_Hierarchy_Search__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies if and how the customer hierarchy is to be considered for condition finding.Possible values are:CompleteCustLevel1—Customer Level 1CustLevel2—Customer Level 2CustLevel3—Customer Level 3CustLevel4—Customer Level 4CustLevel5—Customer Level 5CustLevel6—Customer Level 6CustLevel7—Customer Level 7No |
| cgcloud__Consider_Account_Hierarchy__c | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionSpecifies if condition will be searched only in the trade org hierarchy of the orderer.This is a calculated field.Formulacgcloud__Key_Type__r.cgcloud__Consider_Account_Hierarchy__c |
| cgcloud__Consider_Account__c | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionSpecifies if business partner will be used as key for condition finding.This is a calculated field.Formulacgcloud__Key_Type__r.cgcloud__Consider_Account__c |
| cgcloud__Consider_Product_Hierarchy__c | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionSpecifies if condition will be searched only in the product hierarchy.This is a calculated field.Formulacgcloud__Key_Type__r.cgcloud__Consider_Product_Hierarchy__c |
| cgcloud__Constraint_User_Exit_Id__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUnique identifier for a user exit that represents a constraint for the search strategy step in question: Step will be skipped if user exit confirms the fulfilled constraint. |
| cgcloud__Customer_Role__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the role of the customer that's relevant for condition finding.Possible values are:BillTo—Bill ToDeliveryRecipient—Delivery RecipientOrdererPayer |
| cgcloud__Exclusive__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether condition search stops after having found a condition.The default value is false. |
| cgcloud__Key_Type_Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionDescription of the reference Key Type.This is a calculated field.Formulacgcloud__Key_Type__r.cgcloud__Description__c |
| cgcloud__Key_Type__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the key type.This is a relationship field.Relationship Namecgcloud__Key_Type__rRelationship TypeLookupRefers Tocgcloud__CP_Key_Type__c |
| cgcloud__Product_Hierarchy_Only__c | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionSpecifies if condition will be searched only in the product hierarchy.This is a calculated field.Formulacgcloud__Key_Type__r.cgcloud__Product_Hierarchy_Only__c |
| cgcloud__Product_Hierarchy_Search__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies if and how the product hierarchy is to be considered for condition finding.Possible values are:CompleteNoProdLevel1—Product Level 1ProdLevel2—Product Level 2ProdLevel3—Product Level 3ProdLevel4—Product Level 4ProdLevel5—Product Level 5 |
| cgcloud__Record_Link__c | TypestringPropertiesFilter, Nillable, SortDescriptionLink to the detail page of the search strategy step record.This is a calculated field.FormulaHYPERLINK("/" &Id, $Label.cgcloud__record_link, "_top") |
| cgcloud__Search_Strategy__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the search strategy.This is a relationship field.Relationship Namecgcloud__Search_Strategy__rRelationship TypeMaster-detailRefers Tocgcloud__CP_Search_Strategy__c (Master object) |
| cgcloud__Sort__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionPosition of the search strategy step in the search strategy. |

## Associated Objects

This object has these following associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_CP\_Search\_Strategy\_Step\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_CP\_Search\_Strategy\_Step\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_CP\_Search\_Strategy\_Step\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_CP\_Search\_Strategy\_Step\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_CP\_Search\_Strategy\_Step\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__CP_Search_Strategy_Step__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__CP_Search_Strategy_Step__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__CP_Search_Strategy_Step__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__CP_Search_Strategy_Step__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__CP_Search_Strategy_Step__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
