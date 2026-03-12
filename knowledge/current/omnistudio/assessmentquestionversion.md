---
title: "AssessmentQuestionVersion"
domain: omnistudio
topic: assessmentquestionversion
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:53.462Z
estimatedTokens: 1513
keywords: [AssessmentQuestionVersion, Stores, question, versions, assessment, questions., API, version, 55.0, later., Supported, Calls, Fields, Associated, Objects]
---

# AssessmentQuestionVersion

> Stores the question versions for the assessment questions. This
      object is available in API version 55.0 and later.

# AssessmentQuestionVersion

Stores the question versions for the assessment questions. This object is available in API version 55.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActivationDateTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the assessment question version was set to active. |
| AdditionalInformation | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe additional details for an UI element, such as the disclosure text. |
| AssessmentQuestionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The ID of the assessment question associated with this record.This is a relationship field.Relationship NameAssessmentQuestionRelationship TypeLookupRefers ToAssessmentQuestion |
| AssessmentQuestionSourceDocId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the assessment question source document that's associated with the assessment question version.This field is a relationship field.Relationship NameAssessmentQuestionSourceDocRelationship TypeLookupRefers ToAssessmentQuestionSourceDocThis field is available in API version 61.0 and later for users with the Generative AI Assessment Questions user license. |
| DataType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe data type of the assessment question associated with this record.Possible values are:CheckboxCurrencyDateDateTimeDecimalDisclosureEditBlock—Edit BlockEmailFileFormulaIntegerMultiselect—Multi-selectRadioRadioGroup—Radio GroupSelectTelephoneTextTextArea—Text AreaTextBlock—Text BlockTimeURL |
| DeactivationDateTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date when the assessment question version was set to inactive. |
| Description | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe description for the assessment question. This text is not rendered on the assessment. |
| DisplayTextCategory | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionSpecifies the category of the display text when the data type is Text Block.Possible values are:InstructionLegalSecurity |
| HelpText | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe text that's added as an infobubble in the UI element related to the assessment question. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the current version of the assessment question is set to active (true) or not (false).The default value is false. |
| IsOptionSourceResponseValue | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the response value source for an assessment question is configured as custom or SObject in the OmniStudio designer (true) or not (false).The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The name of the assessment question version record. |
| QuestionCreationType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies how the assessment question is created from the assessment question source document.Possible values are:GenAIThis field is available in API version 61.0 and later for users with the Generative AI Assessment Questions user license. |
| QuestionText | TypetextareaPropertiesCreate, Filter, Sort, UpdateDescriptionRequired. The assessment question text. Holds the label for the assessment question that appears on the assessment. |
| ResponseValues | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionSpecifies the values to be defined in the picklist, multiselect picklist, or radio buttons. |
| Status | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe status of the assessment question version. |
| VersionNumber | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe assessment question version number. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AssessmentQuestionVersionChangeEvent](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_change_event.htm)

Change events are available for the object.

[AssessmentQuestionVersionFeed](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_feed.htm "HTML (New Window)")

Feed tracking is available for the object.

[AssessmentQuestionVersionHistory](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_history.htm "HTML (New Window)")

History is available for tracked fields of the object.

[AssessmentQuestionVersionOwnerSharingRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_ownersharingrule.htm)

Sharing rules are available for the object.

[AssessmentQuestionVersionShare](https://developer.salesforce.com/docs/atlas.en-us.260.0.industries_reference.meta/industries_reference/sforce_api_associated_objects_share.htm)

Sharing is available for the object.
