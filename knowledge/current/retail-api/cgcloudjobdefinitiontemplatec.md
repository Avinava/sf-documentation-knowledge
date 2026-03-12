---
title: "cgcloud__Job_Definition_Template__c"
domain: retail-api
topic: cgcloudjobdefinitiontemplatec
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:38.855Z
estimatedTokens: 3046
keywords: [cgcloud__Job_Definition_Template__c, Stores, definition, questions, product, surveys, system, API, version, 54.0, later, cgcloud, _Job, _Definition, _Template]
---

# cgcloud__Job_Definition_Template__c

> Stores the definition of the questions or product surveys that are
         available in the system. This object is available in API version 54.0 and later.

# cgcloud\_\_Job\_Definition\_Template\_\_c

Stores the definition of the questions or product surveys that are available in the system. This object is available in API version 54.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date on which a user viewed this record. |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionUnique identification of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionID of the record owner.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| cgcloud__Active__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether the template is active.The default value is true. |
| cgcloud__Consider_Max_Value__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionControls whether the maximum value of the current job definition template is to be considered.The default value is false. |
| cgcloud__Consider_Min_Value__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionControls whether the minimum value of the current job definition template is to be considered.The default value is false. |
| cgcloud__Data_Type__c | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionReference to the data type that's used as an answer in the respective job.This is a relationship field.Relationship Namecgcloud__Data_Type__rRelationship TypeLookupRefers Tocgcloud__Data_Type__c |
| cgcloud__Description_Language_1__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 1. |
| cgcloud__Description_Language_2__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 2. |
| cgcloud__Description_Language_3__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 3. |
| cgcloud__Description_Language_4__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 4. |
| cgcloud__Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionDescription based on the user-specified language.This is a calculated field.FormulaCASE($User.cgcloud__Language_Postfix__c,       "Language1", cgcloud__Description_Language_1__c,       "Language2", BLANKVALUE(cgcloud__Description_Language_2__c,cgcloud__Description_Language_1__c),       "Language3", BLANKVALUE(cgcloud__Description_Language_3__c,cgcloud__Description_Language_1__c),       "Language4", BLANKVALUE(cgcloud__Description_Language_4__c,cgcloud__Description_Language_1__c),       cgcloud__Description_Language_1__c) |
| cgcloud__Job_Template__c | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionReference to the job template.This is a relationship field.Relationship Namecgcloud__Job_Template__rRelationship TypeLookupRefers Tocgcloud__Job_Template__c |
| cgcloud__Max_Date_Policy__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionControls the validation of date fields when answering questions or surveys on CAS OnPremise mobile devices.Possible values are:MaxDateMinDateNextYearToday |
| cgcloud__Max_Value__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionMaximum value for the answer of the current job definition template. |
| cgcloud__Measure_Type__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionMeasure Type of the referenced Job Definition Template.Possible values are:POSStoreThe default value is Store. |
| cgcloud__Min_Date_Policy__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionControls the validation of date fields when answering questions or surveys on CGCloud OnPremise mobile devices.Possible values are:MaxDateMinDateNextYearToday |
| cgcloud__Min_Value__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionMinimum value for the answer of the current job definition template. |
| cgcloud__Perfect_Store_Question__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDefines whether a question is to be considered relevant to determine the perfect store index of a call.The default value is false. |
| cgcloud__Picture_Taking__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSpecifies whether a picture can be taken for this question during call execution on mobility devices. Note: This is relevant only for Question.The default value is false. |
| cgcloud__Presetting__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the prepopulation of the corresponding attribute in the activity job defintion template (Job_DL_Job_Definition_Template) that's used to control the activity specific to the presetting of the answer in the call.Possible values are:LastValueNoneTargetValueThe default value is None. |
| cgcloud__Primary_Survey_Policy__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAllows specification of three primary product survey questions that's used for discrepancy survey in a matrix-type display on the CAS OnPremise mobility devices.Possible values are:DistributionFacingsPriceSurveyPromotionParticipationPlacementOfDisplayQualityOfDisplayAssetPlacement |
| cgcloud__Competitor_Relevant__c | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionResponse to collate competitor information related to (placement or price) of products or promotions. |
| cgcloud__Product_Reference__c | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionControls whether the survey is about products. If there's no product reference, then dynamic is true. The string (length 1) options are 0 and 1.This is a calculated field.Formulacgcloud__Job_Template__r.cgcloud__Product_Reference__c |
| cgcloud__Sales_Org__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSales org to which the job definition template belongs.Possible values are:0000000100020003 |
| cgcloud__Save_Presetting__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionControls whether preset answers are to be automatically stored when completing the call. Note regarding restrictions of save presetting: In the back end, the save presetting is currently restricted to the Last Value presetting in questions and surveys. On mobility devices, the save presetting is currently restricted to surveys only (considering the Last Value and Target Value presetting).The default value is false. |
| cgcloud__Short_Description_Language_1__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 1. |
| cgcloud__Short_Description_Language_2__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 2. |
| cgcloud__Short_Description_Language_3__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 3. |
| cgcloud__Short_Description_Language_4__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStores the description of language 4. |
| cgcloud__Short_Description__c | TypestringPropertiesFilter, Nillable, SortDescriptionDescription based on the user-specified language.This is a calculated field.FormulaCASE($User.cgcloud__Language_Postfix__c,       "Language1", cgcloud__Short_Description_Language_1__c,       "Language2", BLANKVALUE(cgcloud__Short_Description_Language_2__c,cgcloud__Short_Description_Language_1__c),       "Language3", BLANKVALUE(cgcloud__Short_Description_Language_3__c,cgcloud__Short_Description_Language_1__c),       "Language4", BLANKVALUE(cgcloud__Short_Description_Language_4__c,cgcloud__Short_Description_Language_1__c),       cgcloud__Short_Description_Language_1__c) |
| cgcloud__Sort__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed for sorting. For example, when manually adding questions during call execution on the CAS OnPremise mobile solution. |
| cgcloud__Step_Size__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionControls the stepper for numeric fields when answering questions or surveys on CAS OnPremise mobile devices. |
| cgcloud__Survey_Identification__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionUsed by mobility to store survey identification values.Possible values are:DistributionFacingsPOS DistributionPOS FacingsPOS PricePrice |
| cgcloud__Target_Value_Column__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents the target value column of primary surveys (configured via Primary_Survey_Policy).Possible values are:0—None1—Facing2—PriceSurvey3—Distribution |
| cgcloud__Use_Stepper__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDefines whether the stepper is used.The default value is false. |

## Associated Objects

This object has these associated objects. If the API version isn’t specified, they are available in the same API versions as this object. Otherwise, they are available in the specified API version and later.

[cgcloud\_\_Job\_Definition\_Template\_\_cChangeEvent](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[cgcloud\_\_Job\_Definition\_Template\_\_cFeed](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[cgcloud\_\_Job\_Definition\_Template\_\_cHistory](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for the tracked fields of the object.

[cgcloud\_\_Job\_Definition\_Template\_\_cOwnerSharingRule](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[cgcloud\_\_Job\_Definition\_Template\_\_cShare](atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

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

```
CASE($User.cgcloud__Language_Postfix__c,
      "Language1", cgcloud__Short_Description_Language_1__c,
      "Language2", BLANKVALUE(cgcloud__Short_Description_Language_2__c,cgcloud__Short_Description_Language_1__c),
      "Language3", BLANKVALUE(cgcloud__Short_Description_Language_3__c,cgcloud__Short_Description_Language_1__c),
      "Language4", BLANKVALUE(cgcloud__Short_Description_Language_4__c,cgcloud__Short_Description_Language_1__c),
      cgcloud__Short_Description_Language_1__c)
```

## Related Topics

- cgcloud__Job_Definition_Template__cChangeEvent (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_change_event.htm)
- cgcloud__Job_Definition_Template__cFeed (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_feed.htm)
- cgcloud__Job_Definition_Template__cHistory (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_history.htm)
- cgcloud__Job_Definition_Template__cOwnerSharingRule (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_ownersharingrule.htm)
- cgcloud__Job_Definition_Template__cShare (atlas.en-us.retail_api.meta/retail_api/sforce_api_associated_objects_share.htm)
