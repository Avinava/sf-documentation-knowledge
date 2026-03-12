---
title: "AccountPlanRelaObjAnalysis"
domain: life-sciences-dev-guide
topic: accountplanrelaobjanalysis
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:44.882Z
estimatedTokens: 1642
keywords: [AccountPlanRelaObjAnalysis, strategic, analysis, objects, account, plan, helps, identify, internal, external, factors, potentially, affect, objectives, any]
---

# AccountPlanRelaObjAnalysis

> Represents the strategic analysis done on objects related to the account
         plan. This object helps to identify internal and external factors that could potentially
         affect the plan, its objectives, or any related objects. This object is available in API
         version 65.0 and later.

# AccountPlanRelaObjAnalysis

Represents the strategic analysis done on objects related to the account plan. This object helps to identify internal and external factors that could potentially affect the plan, its objectives, or any related objects. This object is available in API version 65.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=life_sciences_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountPlanId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe account plan for which object analysis is done.This field is a relationship field.Relationship NameAccountPlanRelationship TypeMaster-detailRefers ToAccountPlan (the master object) |
| EconomicalAnalysisInfo | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe detailed assessment of economic factors that can impact the account, including market trends, economic indicators, and financial health of the customer and their industry. |
| EnvironmentalAnalysisInfo | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe detailed assessment of environmental factors that can impact the account, such as sustainability considerations, climate change-related risks, and regulatory compliance with environmental standards. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last accessed this record indirectly, for example, through a list view or related record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp when the current user last viewed this record or list view. |
| LegalAnalysisInfo | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe detailed assessment of legal information relevant to the account, including regulations, compliance requirements, and potential legal risks or opportunities. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the account plan related object analysis record. |
| OpportunitiesAnalysisInfo | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe in-depth analysis of identified opportunities within the account based on factors like their potential impact, feasibility, and alignment with the overall strategic objectives. |
| PoliticalAnalysisInfo | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe detailed assessment of political factors that can influence the account, such as government policies, regulatory changes, and political stability in relevant regions. |
| RelatedObjectId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the specific object for which this analysis is done.This field is a polymorphic relationship field.Relationship NameRelatedObjectRefers ToLifeSciMarketableProduct, Product2 |
| SocialAnalysisInfo | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe detailed assessment of social factors that can impact the account, including demographic trends, cultural considerations, and social responsibility initiatives. |
| SourceSystemIdentifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe identifier of the record in the source system. |
| SourceSystemName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the system from which data is loaded into the object. |
| StrengthAnalysisInfo | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe assessment of the internal strengths of the account, such as key capabilities, competitive advantages, and resources that can be leveraged to achieve the plan's objectives. |
| TechnologicalAnalysisInfo | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe detailed assessment of technological factors that can affect the account, including emerging technologies, industry-specific innovations, and the customer's technological capabilities and infrastructure. |
| ThreatsAnalysisInfo | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe identification and assessment of potential threats to the account, such as competitive pressures, market disruptions, and regulatory changes. |
| WeaknessAnalysisInfo | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe detailed assessment of internal weaknesses of the account, such as areas for improvement, resource constraints, and potential vulnerabilities that could hinder the achievement of the plan's objectives. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AccountPlanRelaObjAnalysisChangeEvent](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[AccountPlanRelaObjAnalysisFeed](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[AccountPlanRelaObjAnalysisHistory](atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- AccountPlanRelaObjAnalysisChangeEvent (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_change_event.htm)
- AccountPlanRelaObjAnalysisFeed (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_feed.htm)
- AccountPlanRelaObjAnalysisHistory (atlas.en-us.life_sciences_dev_guide.meta/life_sciences_dev_guide/sforce_api_associated_objects_history.htm)
