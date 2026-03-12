---
title: "cgcloud__Job_Definition_List__c"
domain: retail-api
topic: cgcloudjobdefinitionlistc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:38.797Z
estimatedTokens: 2738
keywords: [cgcloud__Job_Definition_List__c, Stores, questions, surveys, carried, respective, call, further, relevant, configurations, API, version, 54.0, later, cgcloud]
---

# cgcloud__Job_Definition_List__c

> Stores the set of questions or surveys that are to be carried out in
         the respective call and contains further relevant configurations. This object is
      available in API version 54.0 and later.

# cgcloud\_\_Job\_Definition\_List\_\_c

Stores the set of questions or surveys that are to be carried out in the respective call and contains further relevant configurations. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionUnique identification of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| RecordTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the record type.Available record types:FSA.JDLJDLThis is a relationship field.Relationship NameRecordTypeRelationship TypeLookupRefers ToRecordType |
| cgcloud__Active__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates that the activity is available for use.The default value is true. |
| cgcloud__Activity_Question_Score__c | TypedoublePropertiesFilter, Nillable, SortDescriptionSum of scores of the questions in the activity.This is a calculated field. |
| cgcloud__Activity_Score__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionActivity Score that's to be considered for activity performance evaluation on Mobility. |
| cgcloud__Approval_State__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies whether the activity is created by a field sales activity. The activity can be either valid (Approved), canceled via field sales activity (Canceled), or independent of a field sales activity (NotRelevant).Possible values are:ApprovedCanceledNot RelevantThe default value is Not Relevant. |
| cgcloud__Consider_Account__c | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionRelevant for Standard activity: Restricted to Customers.This is a calculated field.Formulacgcloud__Job_Definition_List_Template__r.cgcloud__Consider_Account__c |
| cgcloud__Consider_History__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIf yes, the system determines historic products for product surveys.The default value is false. |
| cgcloud__Consider_Listing__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIf yes, the system determines listed products for product surveys.The default value is false. |
| cgcloud__Consider_Products__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIf yes, the system determines products that are directly assigned to the activity for product surveys.The default value is false. |
| cgcloud__Consider_Score__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates whether the activity is score relevant.Possible values are:NoYesThe default value is No. |
| cgcloud__Default_Management_Type__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the default management type that's to be considered during the user determination process while creating job lists out of non-standard activity.Possible values are:ConsultantSalesService |
| cgcloud__Description_Language_1__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 1. |
| cgcloud__Description_Language_2__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 2. |
| cgcloud__Description_Language_3__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 3. |
| cgcloud__Description_Language_4__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 4. |
| cgcloud__Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionFormula field for description.This is a calculated field.FormulaCASE($User.cgcloud__Language_Postfix__c, "Language1", cgcloud__Description_Language_1__c, "Language2", BLANKVALUE(cgcloud__Description_Language_2__c,cgcloud__Description_Language_1__c), "Language3", BLANKVALUE(cgcloud__Description_Language_3__c,cgcloud__Description_Language_1__c), "Language4", BLANKVALUE(cgcloud__Description_Language_4__c,cgcloud__Description_Language_1__c), cgcloud__Description_Language_1__c) |
| cgcloud__Field_Sales_Activity__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to a field sales activity. Empty for a stand alone activity.This is a relationship field.Relationship Namecgcloud__Field_Sales_Activity__rRelationship TypeLookupRefers Tocgcloud__Field_Sales_Activity__c |
| cgcloud__Job_Definition_List_Template__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the activity template.This is a relationship field.Relationship Namecgcloud__Job_Definition_List_Template__rRelationship TypeLookupRefers Tocgcloud__Job_Definition_List_Template__c |
| cgcloud__Mark_for_Deletion__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDeletion flag. Users who maintain job definition lists can mark the job definition list for deletion. The system administrator have the permissions to delete the activity.The default value is false. |
| cgcloud__Promotion__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the promotion name.This is a relationship field.Relationship Namecgcloud__Promotion__rRelationship TypeLookupRefers Tocgcloud__Promotion__c |
| cgcloud__Restrict_Org_Unit__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionControls the determination of valid users that are restricted to the org unit assigned to the customer when creating job list out of a non-standard activity.Possible values are:AllMain |
| cgcloud__Sales_Org__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSales organization to which the activity belongs.Possible values are:0000000100020003 |
| cgcloud__Standard_Jobs__c | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf yes, specifies a Standard activity.This is a calculated field.Formulacgcloud__Job_Definition_List_Template__r.cgcloud__Standard_Jobs__c |
| cgcloud__Threshold_Fulfilled__c | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDefines the upper threshold limit for the activity score. |
| cgcloud__Threshold_Partially_Fulfilled__c | TypepercentPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionDefines the lower threshold limit for the activity score. |
| cgcloud__User_Policy__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionControls the determination of valid users when the activity is activated. The attribute controls the valid users by interpreting main management relation between users and Customers.Possible values are:AllFirstOnlyMainThe default value is All. |
| cgcloud__Valid_From__c | TypedatePropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionDate from which the validity period begins. |
| cgcloud__Valid_Thru__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDate on which the validity period ends. |
| cgcloud__Visit_Template_Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionDescription of the linked visit template.This is a calculated field.Formulacgcloud__Visit_Template__r.cgcloud__Description__c |
| cgcloud__Visit_Template__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the visit template.This is a relationship field.Relationship Namecgcloud__Visit_Template__rRelationship TypeLookupRefers Tocgcloud__Visit_Template__c |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Job\_Definition\_List\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Job\_Definition\_List\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Job\_Definition\_List\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Job\_Definition\_List\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Job\_Definition\_List\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

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

- cgcloud__Job_Definition_List__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Job_Definition_List__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Job_Definition_List__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Job_Definition_List__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Job_Definition_List__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
