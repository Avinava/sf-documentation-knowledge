---
title: "AssessmentQuestion"
domain: omnistudio
topic: assessmentquestion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:25:11.611Z
keywords: [AssessmentQuestion, Supported, Calls, Fields, Associated, Objects]
---

# AssessmentQuestion

# AssessmentQuestion

Stores the questions required for an assessment. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActiveVersionId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the active version of the assessment question.This is a relationship field.Relationship NameActiveVersionRelationship TypeLookupRefers ToAssessmentQuestionVersion |
| DataType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. The data type of the assessment question.Possible values are:CheckboxCurrencyDateDateTimeDecimalDisclosureEditBlock—Edit BlockEmailFileFormulaIntegerMultiselect—Multi-selectRadioRadioGroup—Radio GroupSelectTelephoneTextTextArea—Text AreaTextBlock—Text BlockTimeURL |
| Description | TypetextareaPropertiesFilter, Nillable, SortDescriptionThe description for the assessment question. This text is not rendered on the assessment. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. |
| DisplayTextCategory | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the category of the display text when the data type is Text Block.Possible values are:InstructionLegalSecurity |
| FormulaResponseDataType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the data type of the question response calculated by a formula.Possible values are:BooleanCurrencyDateDecimalIntegerText |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The name of the record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who created the relationship record.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| QuestionCategory | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. Stores the question category.Possible values are:DemographicFinancial |
| QuestionText | TypetextareaPropertiesFilter, Nillable, SortDescriptionRequired. The label for the assessment question that appears on the assessment. |
| RelatedQuestionId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIdentifies the ID of the related question. Used to define a question hierarchy.This is a relationship field.Relationship NameRelatedQuestionRelationship TypeLookupRefers ToAssessmentQuestion |
| ShouldExcludeFromMetadata | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionIndicates whether the assessment question record should be excluded from metadata (true) or not (false).The default value is false. |
| ShouldHideInDesigner | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionIndicates whether the assesment question record should be hidden in OmniScript designer (true) or not (false).The default value is false. |
| SourceSystemName | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecifies the source system name from where the content of the assessment question was retrieved.Possible values are:MCG |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AssessmentQuestionChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[AssessmentQuestionFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm "HTML (New Window)")

Feed tracking is available for the object.

[AssessmentQuestionHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm "HTML (New Window)")

History is available for tracked fields of the object.

[AssessmentQuestionShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm "HTML (New Window)")

Sharing is available for the object.