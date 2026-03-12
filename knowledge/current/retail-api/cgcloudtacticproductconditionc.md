---
title: "cgcloud__Tactic_Product_Condition__c"
domain: retail-api
topic: cgcloudtacticproductconditionc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:40.107Z
estimatedTokens: 1905
keywords: [cgcloud__Tactic_Product_Condition__c, store, internal, conditions, generated, promotions, API, version, 54.0, later, cgcloud, _Tactic, _Product, _Condition, Calls]
---

# cgcloud__Tactic_Product_Condition__c

> Use this object to store the internal conditions that are generated
         out of promotions. This object is available in API version 54.0 and later.

# cgcloud\_\_Tactic\_Product\_Condition\_\_c

Use this object to store the internal conditions that are generated out of promotions. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| cgcloud__Additional_KPI_Value_1__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionValue of Additional Condition KPI 1 if it's defined in the template of the related tactic. |
| cgcloud__Additional_KPI_Value_2__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionValue of Additional Condition KPI 2 if it's defined in the template of the related Tactic. |
| cgcloud__Additional_KPI_Value_3__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionValue of Additional Condition KPI 3 if it's defined in the template of the related Tactic. |
| cgcloud__Bom_Header_Product__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the BOM header of the product that was used to generate this condition.This field is a relationship field.This field is available in API version 55.0 and later.Relationship Namecgcloud__Bom_Header_Product__rRelationship TypeLookupRefers ToProduct2 |
| cgcloud__Export_Status__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionDefines the status of the export process.Possible values are:FailedInitialProcessedThe default value is Initial. |
| cgcloud__Exported_Version__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionVersion of the exported record. |
| cgcloud__In_Product_Filter_Result__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the product is available because it is in the result of the product filter (or, products under this group are in the result of the product filter).The default value is false. |
| cgcloud__Last_Synced_Date_Time__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDate on which the record was last synced. |
| cgcloud__Last_Synced_Version__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionVersion of the record that's synchronized from off-platform. |
| cgcloud__Listed__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the product is available because it is listed (or, products under this group are listed).The default value is false. |
| cgcloud__Measure_Code__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe measure code of the condition source KPI that was used to generate this condition.This field is available in API version 55.0 and later. |
| cgcloud__Off_Platform_Id__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionGUID generated off-platform. |
| cgcloud__Product_Part__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the product part linking the BOM component to its header.This field is a relationship field.This field is available in API version 55.0 and later.Relationship Namecgcloud__Product_Part__rRelationship TypeLookupRefers Tocgcloud__Product_Part__c |
| cgcloud__Product__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionProduct (group) for which the condition is generated.This is a relationship field.Relationship Namecgcloud__Product__rRelationship TypeLookupRefers ToProduct2 |
| cgcloud__Status__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStatus of the promotion to which the tactic belongs.Possible values are:CancelledCommittedDeletedForApprovalModelingPlanningPreparationRejected |
| cgcloud__Tactic__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionTactic that generated the condition.This is a relationship field.Relationship Namecgcloud__Tactic__rRelationship TypeLookupRefers Tocgcloud__Tactic__c |
| cgcloud__Valid_From__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStart date of the condition. |
| cgcloud__Valid_Thru__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionEnd date of the condition. |
| cgcloud__Value__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionValue of the condition. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Tactic\_Product\_Condition\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Tactic\_Product\_Condition\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Tactic\_Product\_Condition\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Tactic\_Product\_Condition\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Tactic\_Product\_Condition\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__Tactic_Product_Condition__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Tactic_Product_Condition__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Tactic_Product_Condition__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Tactic_Product_Condition__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Tactic_Product_Condition__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
