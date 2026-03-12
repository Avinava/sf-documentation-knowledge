---
title: "ProviderActivityMeasureType"
domain: life-sciences-dev-guide
topic: provideractivitymeasuretype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:46.920Z
estimatedTokens: 1751
keywords: [ProviderActivityMeasureType, activity, goal, measure, API, version, 65.0, later, Calls]
---

# ProviderActivityMeasureType

> Represents the details of the activity goal measure type. This
      object is available in API version 65.0 and later.

# ProviderActivityMeasureType

Represents the details of the activity goal measure type. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActivityAccountField | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe field that contains the API name of the account associated with the activity. |
| ActivityObject | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe field that contains the API name of the activity to be measured for the account.Possible values are:ExpenseParticipant—Expense ParticipantKnowledge__ka—KnowledgeKnowledge__kav—KnowledgeLifeScienceEmail—Life Science EmailProviderVisit—Provider VisitProviderVisitProdDetailing—Product DetailsVisitcdpactvstrgptnr__ActivationPlatformCredential__mdt—ActivationPlatformCredentialcustomcontentversion__c—customcontentversionlsc4ce__AdminConsoleMenuItem__mdt—Admin Console Menu Item |
| ActivityParentObjRelaField | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe field that contains the API name of the parent lookup relationship of the activity. |
| ActivityParentObject | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe field that contains the API name of the parent object of the activity.Possible values are:Knowledge__ka—KnowledgeKnowledge__kav—KnowledgeProviderVisit—Provider VisitVisitcdpactvstrgptnr__ActivationPlatformCredential__mdt—ActivationPlatformCredentialcustomcontentversion__c—customcontentversionlsc4ce__AdminConsoleMenuItem__mdt—Admin Console Menu Item |
| ActivityProductField | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe field that contains the API name of the product associated with the activity. |
| ActivityTerritoryField | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe field that contains the API name of the territory associated with the activity. |
| ActivityTypSchdStatusList | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status list of the scheduled activity type. |
| ActivityTypeDtTmField | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe field that contains the API name of the date and time associated with the activity. |
| ActivityTypeExclusionField | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe field that contains the API name of the activity type that is excluded from the activity plan. |
| ActivityTypeField | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe field that contains the API name of the type of activity associated with the account. |
| ActivityTypeFieldValue | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionStores the criteria to identify a specific activity type. |
| ActivityTypeStatusField | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe field that contains the API name of the status of the activity. |
| ActivityTypeStatusList | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe list of statuses associated with the activity. |
| AggregatedActivityActualFld | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe API name of the field to which the actual activity count is copied. |
| AggregatedActivitySchdField | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe API name of the field to which the scheduled activity goal count is copied. |
| AggregatedGoalField | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe API name of the field to which the activity goal count is copied. |
| AlertType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of alert that users see when a limit is reached for an account. Error prevents users from continuing, while Warning allows users to proceed.Possible values are:ErrorWarning |
| Category | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the category of the activity goal measure type and determines the types of provider activity goal measure records that can reference the provider activity measure type record.Possible values are:AccountUtilizationLimitActivityGoalMonetaryCapLimitThe default value is ActivityGoal. |
| Criteria | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe account utilization criteria configuration, in JSON format, for validation and total activity calculation. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. |
| DisplayOrder | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ranks used to order the activity plan gauges on Account or Homepage. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether the activity is active (True) or not (False).The default value is false. |
| Level1RelatedAccountObject | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe field that contains the API name of the Account object associated with the activity.Possible values are:Knowledge__ka—KnowledgeKnowledge__kav—KnowledgeVisitcdpactvstrgptnr__ActivationPlatformCredential__mdt—ActivationPlatformCredentialcustomcontentversion__c—customcontentversionlsc4ce__AdminConsoleMenuItem__mdt—Admin Console Menu Item |
| Level2RelatedAccountObject | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe field that contains the API name of the field that has a direct or indirect relationship to the Account object. |
| Lvl1RelatedAccountObjField | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe field that contains the API name of the Account object associated with the activity measure. |
| Lvl2RelatedAccountObjField | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe field that contains the API name of the field that has a direct or indirect relationship to the activity. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe label for the data change definition value. This display value is the internal label that doesn't get translated. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. |
