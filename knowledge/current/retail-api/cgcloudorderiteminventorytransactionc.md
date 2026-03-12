---
title: "cgcloud__Order_Item_Inventory_Transaction__c"
domain: retail-api
topic: cgcloudorderiteminventorytransactionc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:39.067Z
estimatedTokens: 1275
keywords: [Holds, association, order, item, template, inventory, control, transaction, API, version, 54.0, later, cgcloud, _Order, _Item]
---

# cgcloud__Order_Item_Inventory_Transaction__c

> Holds the association details for the order item template, the
         inventory control template, and the inventory transaction template. This object is
      available in API version 54.0 and later.

# cgcloud\_\_Order\_Item\_Inventory\_Transaction\_\_c

Holds the association details for the order item template, the inventory control template, and the inventory transaction template. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| cgcloud__Active__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionAttribute used to enable or disable the current template or record.The default value is true. |
| cgcloud__Inventory_Control_Template__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the Inventory control template ID.This is a relationship field.Relationship Namecgcloud__Inventory_Control_Template__rRelationship TypeLookupRefers Tocgcloud__Inventory_Control_Template__c |
| cgcloud__Inventory_Transaction_Template__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the Inventory transaction template ID.This is a relationship field.Relationship Namecgcloud__Inventory_Transaction_Template__rRelationship TypeLookupRefers Tocgcloud__Inventory_Transaction_Template__c |
| cgcloud__Order_Item_Template__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the Order item template ID.This is a relationship field.Relationship Namecgcloud__Order_Item_Template__rRelationship TypeMaster-detailRefers Tocgcloud__Order_Item_Template__c (master object) |
| cgcloud__Unique_Field_Display__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionTechnical field to verify that only one active record is used for display as Yes. Consists of:Order_Item_Template.IdActive (True, False)User_For_Display (True, False) |
| cgcloud__Unique_Inventory_Templates__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionTechnical field to verify the uniqueness for the combination of order template, inventory control template, and inventory transaction template.Inventory_Control_Template.IdInventory_Transaction_Template.Id |
| cgcloud__Used_For_Display__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies the inventory template that's relevant for showing the current inventory balances in the disposal list.The default value is false. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[cgcloud\_\_Order\_Item\_Inventory\_Transaction\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Order\_Item\_Inventory\_Transaction\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Order\_Item\_Inventory\_Transaction\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[cgcloud\_\_Order\_Item\_Inventory\_Transaction\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Order\_Item\_Inventory\_Transaction\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__Order_Item_Inventory_Transaction__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Order_Item_Inventory_Transaction__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Order_Item_Inventory_Transaction__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Order_Item_Inventory_Transaction__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Order_Item_Inventory_Transaction__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
