---
title: "LightningOnboardingConfig"
domain: object-reference
topic: lightningonboardingconfig
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:11.788Z
estimatedTokens: 940
keywords: [LightningOnboardingConfig, feedback, provided, users, switch, Lightning, Experience, Salesforce, Classic, Admins, customize, question, how, frequently, form]
---

# LightningOnboardingConfig

> Represents the feedback provided when users switch from Lightning
         Experience to Salesforce Classic. Admins can customize the question, how frequently the
         form appears, and where the feedback is stored in Chatter from the Adoption Assistance page
         in Lightning Experience Setup. Available in API version 47.0 and later.

# LightningOnboardingConfig

Represents the feedback provided when users switch from Lightning Experience to Salesforce Classic. Admins can customize the question, how frequently the form appears, and where the feedback is stored in Chatter from the Adoption Assistance page in Lightning Experience Setup. Available in API version 47.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. Because changing terms in our code can break current implementations, we maintained this object’s name.

See [Switch to Salesforce Classic Feedback Form](https://help.salesforce.com/articleView?id=lex_encourage_work_feedback.htm&language=en_US) in Salesforce Help for more details.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CollaborationGroupId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the Chatter Group where the user feedback is posted.This is a relationship field.Relationship NameCollaborationGroupRelationship TypeLookupRefers ToCollaborationGroup |
| CustomQuestion | TypetextareaPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionText of the custom question added by the admin. Maximum of 1,000 characters. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance slows down while Salesforce generates one for each record.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| FeedbackFormDaysFrequency | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe number of days between showing the feedback form when a user switches. A value of 0 indicates that the form is shown for every switch. Maximum of 30. |
| IsCustom | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if a feedback form includes a custom question yes or not no. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionIndicates the language used in the org where the feedback form was created. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe label for the prompt. Maximum of 80 characters. |
| PromptDelayTime | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates the amount of time in seconds to delay between instances of all prompts, both org- and Salesforce-created. Minimum of 0 hours and 0 minutes. Maximum of 99 hours and 59 minutes. |
| SendFeedbackToSalesforce | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates if the user feedback can be shared with Salesforce. If yes, share the feedback with Salesforce. If no, the feedback is only shared in the Chatter Group chosen when customizing the form. The default value is false. |
