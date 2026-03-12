---
title: "cgcloud__Sales_Organization_User__c"
domain: retail-api
topic: cgcloudsalesorganizationuserc
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:39.900Z
estimatedTokens: 1667
keywords: [cgcloud__Sales_Organization_User__c, stores, relationship, sales, organization, user, API, version, 54.0, later, cgcloud, _Sales, _Organization, _User, Calls]
---

# cgcloud__Sales_Organization_User__c

> This object stores the details of the relationship between a sales
         organization and a user. This object is available in API version 54.0 and later.

# cgcloud\_\_Sales\_Organization\_User\_\_c

This object stores the details of the relationship between a sales organization and a user. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionUnique identification of the record. |
| cgcloud__Default_Account__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the default customer.This is a relationship field.Relationship Namecgcloud__Default_Account__rRelationship TypeLookupRefers ToAccount |
| cgcloud__Default_Visit_Template__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the default visit template.This is a relationship field.Relationship Namecgcloud__Default_Visit_Template__rRelationship TypeLookupRefers Tocgcloud__Visit_Template__c |
| cgcloud__Is_Tour_Selection_Required__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether tour selection is enabled for the user.The default value is false.This field is reserved for future. |
| cgcloud__Record_Link__c | TypestringPropertiesFilter, Nillable, SortDescriptionInternally used to show the record's hyperlink.This is a calculated field.FormulaHYPERLINK("/" &Id, $Label.cgcloud__record_link, "_top") |
| cgcloud__Sales_Organization__c | TypereferencePropertiesCreate, Filter, Group, SortDescriptionReference to the sales organization.This is a relationship field.Relationship Namecgcloud__Sales_Organization__rRelationship TypeMaster-detailRefers Tocgcloud__Sales_Organization__c (the master object) |
| cgcloud__Unique_User_Id__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUsed internally. Contains these unique values:User.IdSales_Organisation.Id |
| cgcloud__User__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the user.This is a relationship field.Relationship Namecgcloud__User__rRelationship TypeLookupRefers ToUser |
| cgcloud__Work_Begins__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionTime at which the user begins to work. |
| cgcloud__Work_Ends__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionTime at which the user stops to work. |
| cgcloud__Works_On_Friday__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDay of the week on which the user typically works. For example, used for capacity planning.The default value is false. |
| cgcloud__Works_On_Monday__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDay of the week on which the user typically works. For example, used for capacity planning.The default value is false. |
| cgcloud__Works_On_Saturday__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDay of the week on which the user typically works. For example, used for capacity planning.The default value is false. |
| cgcloud__Works_On_Sunday__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDay of the week on which the user typically works. For example, used for capacity planning.The default value is false. |
| cgcloud__Works_On_Thursday__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDay of the week on which the user typically works. For example, used for capacity planning.The default value is false. |
| cgcloud__Works_On_Tuesday__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDay of the week on which the user typically works. For example, used for capacity planning.The default value is false. |
| cgcloud__Works_On_Wednesday__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDay of the week on which the user typically works. For example, used for capacity planning.The default value is false. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Sales\_Organization\_User\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Sales\_Organization\_User\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Sales\_Organization\_User\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Sales\_Organization\_User\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Sales\_Organization\_User\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- cgcloud__Sales_Organization_User__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Sales_Organization_User__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Sales_Organization_User__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Sales_Organization_User__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Sales_Organization_User__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
