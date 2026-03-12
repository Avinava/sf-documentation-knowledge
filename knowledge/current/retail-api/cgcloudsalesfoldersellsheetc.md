---
title: "cgcloud__Sales_Folder_Sell_Sheet__c"
domain: retail-api
topic: cgcloudsalesfoldersellsheetc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:39.834Z
estimatedTokens: 1111
keywords: [cgcloud__Sales_Folder_Sell_Sheet__c, stores, relationship, sales, folder, sell, sheet, API, version, 54.0, later, cgcloud, _Sales, _Folder, _Sell]
---

# cgcloud__Sales_Folder_Sell_Sheet__c

> This object stores the details of the relationship between the sales
         folder and sell sheet. This object is available in API version 54.0 and later.

# cgcloud\_\_Sales\_Folder\_Sell\_Sheet\_\_c

This object stores the details of the relationship between the sales folder and sell sheet. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| cgcloud__Record_Link__c | TypestringPropertiesFilter, Nillable, SortDescriptionLink to the detail page of the sales folder sell sheet record.This is a calculated field.FormulaHYPERLINK("/" &Id, $Label.cgcloud__record_link, "_top") |
| cgcloud__Sales_Folder__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the Sales Folder.This is a relationship field.Relationship Namecgcloud__Sales_Folder__rRelationship TypeMaster-detailRefers Tocgcloud__Sales_Folder__c ( Master object) |
| cgcloud__Sales_Org__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSales Organization to which the sales folder sell sheet assignment of the sales folder (and the sales folder itself) belongs.Possible values are:0000000100020003 |
| cgcloud__Sell_Sheet_Unique__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThis field ensures that one sell sheet is attached only once to a sales folder. It's a concatenation of Sales Folder Id and Sell Sheet Id. This field is updated by a Workflow. |
| cgcloud__Sell_Sheet__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the Sell Sheet.This is a relationship field.Relationship Namecgcloud__Sell_Sheet__rRelationship TypeMaster-detailRefers Tocgcloud__Sell_Sheet__c (the detail object) |
| cgcloud__Sort__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSort field for the Sales Folder Sell Sheet. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Sales\_Folder\_Sell\_Sheet\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Sales\_Folder\_Sell\_Sheet\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Sales\_Folder\_Sell\_Sheet\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Sales\_Folder\_Sell\_Sheet\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Sales\_Folder\_Sell\_Sheet\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__Sales_Folder_Sell_Sheet__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Sales_Folder_Sell_Sheet__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Sales_Folder_Sell_Sheet__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Sales_Folder_Sell_Sheet__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Sales_Folder_Sell_Sheet__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
