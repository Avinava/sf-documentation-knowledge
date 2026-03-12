---
title: "cgcloud__Payment_Tactic_Product_Manual_Input__c"
domain: retail-api
topic: cgcloudpaymenttacticproductmanualinputc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:39.373Z
estimatedTokens: 1268
keywords: [Stores, manual, inputs, payment, tactic-specific, API, version, 54.0, later, cgcloud, _Payment, _Tactic, _Product, _Manual, _Input]
---

# cgcloud__Payment_Tactic_Product_Manual_Input__c

> Stores manual inputs for payment tactic-specific manual inputs.
      This object is available in API version 54.0 and later.

# cgcloud\_\_Payment\_Tactic\_Product\_Manual\_Input\_\_c

Stores manual inputs for payment tactic-specific manual inputs. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| cgcloud__Effective_Total__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionEffective Total Value. |
| cgcloud__Measure_Code__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionMeasure Code under which the manual input is stored in the .json file. |
| cgcloud__Obsolete__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionObsolete flag of the manual input entry.Possible values are:0—Non Obsolete1—Obsolete since removed2—Obsolete since overriddenThe default value is 0. |
| cgcloud__Payment_Tactic__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPayment or Tactic combination for which the manual input was entered.This is a relationship field.Relationship Namecgcloud__Payment_Tactic__rRelationship TypeLookupRefers Tocgcloud__Payment_Tactic__c |
| cgcloud__Payment__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRelated payment.This is a relationship field.Relationship Namecgcloud__Payment__rRelationship TypeMaster-detailRefers Tocgcloud__Payment__c (the master object) |
| cgcloud__Product__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionProduct for which the manual input was entered. Because the manual input can happen on any level (also, total level), the value of this object can be null.This is a relationship field.Relationship Namecgcloud__Product__rRelationship TypeLookupRefers ToProduct2 |
| cgcloud__Sort__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionInput order of manual inputs. It's incremented by 1 for each new entry for a payment or tactic combination. |
| cgcloud__User__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUser who entered the manual input.This is a relationship field.Relationship Namecgcloud__User__rRelationship TypeLookupRefers ToUser |
| cgcloud__Value__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionEntered value. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Payment\_Tactic\_Product\_Manual\_Input\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Payment\_Tactic\_Product\_Manual\_Input\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Payment\_Tactic\_Product\_Manual\_Input\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Payment\_Tactic\_Product\_Manual\_Input\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Payment\_Tactic\_Product\_Manual\_Input\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__Payment_Tactic_Product_Manual_Input__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Payment_Tactic_Product_Manual_Input__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Payment_Tactic_Product_Manual_Input__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Payment_Tactic_Product_Manual_Input__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Payment_Tactic_Product_Manual_Input__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
