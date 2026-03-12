---
title: "ConvAnalysisTopic"
domain: object-reference
topic: convanalysistopic
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:07.365Z
estimatedTokens: 747
keywords: [ConvAnalysisTopic, topic, generated, Sales, Signals, refresh, run, product, experiencing, issues, due, high, pricing, identified, analysis]
---

# ConvAnalysisTopic

> Represents a topic generated from the Sales Signals refresh or run. For
         example, a product experiencing issues due to high pricing could be a topic identified
         through the analysis of multiple calls. This object is available in API version 63.0
      and later.

# ConvAnalysisTopic

Represents a topic generated from the Sales Signals refresh or run. For example, a product experiencing issues due to high pricing could be a topic identified through the analysis of multiple calls. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

Users need the Sales Signals permission set and the Sales Signals feature must be enabled.

## Fields

| Field | Details |
| --- | --- |
| CallPercentage | TypedoublePropertiesCreate, Filter, SortDescriptionRequired. The percentage of calls that apply to a topic, out of the total number of calls that were analyzed. |
| Category | TypestringPropertiesCreate, Filter, Group, SortDescriptionRequired. A classification or grouping used to filter topics. This field is used in conjunction with Keyword. |
| ConvAnalysisSummaryId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. The conversation analysis summary associated with the topic.This field is a relationship field.Relationship NameConvAnalysisSummaryRelationship TypeMaster-detailRefers ToConvAnalysisSummary (the parent object) |
| GenerationsIdentifier | TypestringPropertiesCreate, Filter, Group, SortDescriptionRequired. The ID used to track the LLM-generated response for feedback purposes. |
| Keyword | TypestringPropertiesCreate, Filter, Group, SortDescriptionRequired. A specific word used in conjunction with Category to filter topics. For example, Product:Salesforce, where the keyword is Salesforce. |
| MentionCount | TypeintPropertiesCreate, Filter, Group, SortDescriptionRequired. The number of call insights associated with the topic. |
| Order | TypeintPropertiesCreate, Filter, Group, SortDescriptionRequired. A numerical value used to sort topics in a sequence. |
| Summary | TypetextareaPropertiesCreate, UpdateDescriptionRequired. A detailed explanation of the topic. |
| Title | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The title of the topic that describes it. |
| TopicSentiment | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe sentiment of the topic, whether it’s negative, neutral, or positive. |
| TotalCalls | TypeintPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe total number of calls analyzed for the topic. |
| TotalCallsForCategoryKeyword | TypeintPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe total number of calls analyzed for category:keyword. Multiple topics can be under a single category:keyword. |
| TotalMentionsForCategoryKeyword | TypeintPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe total number of mentions analyzed for category:keyword. |
| TurnIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionUUID that is generated and used to track a group of LLM-generated content. |
