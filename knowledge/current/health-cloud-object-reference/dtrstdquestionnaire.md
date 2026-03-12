---
title: "DTRStdQuestionnaire"
domain: health-cloud-object-reference
topic: dtrstdquestionnaire
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:35.495Z
estimatedTokens: 338
keywords: [DTRStdQuestionnaire, FHIR, resource, maps, AssessmentDefinition, AssessmentQuestion, AssessmentQuestionResponse, AssessmentQuestionVersion, objects, V4.0, Discovery, Framework, Data, Model, Mapping]
---

# DTRStdQuestionnaire

> The DTRStdQuestionnaire FHIR resource maps to the
   AssessmentDefinition, AssessmentQuestion,
   AssessmentQuestionResponse, and AssessmentQuestionVersion
  objects.

# DTRStdQuestionnaire

The DTRStdQuestionnaire FHIR resource maps to the AssessmentDefinition, AssessmentQuestion, AssessmentQuestionResponse, and AssessmentQuestionVersion objects.

## FHIR V4.0 - Discovery Framework Data Model Mapping

Here’s how the fields defined by FHIR for [DTRStdQuestionnaire](https://build.fhir.org/ig/HL7/davinci-dtr/StructureDefinition-dtr-std-questionnaire.html) map to the fields in Salesforce.

| DTRStdQuestionnaire element | Salesforce Field | Type | Salesforce Cardinality | Notes |
| --- | --- | --- | --- | --- |
| Questionnaire.extension:performerType | AssessmentDefinition.PerformerType | Multi-select Picklist | 0.M | N/A |
| Questionnaire.extension:entryMode | AssessmentQuestionResponse.DisplayType | Picklist | 0.1 | N/A |
| Questionnaire.effectivePeriod | AssessmentQuestionResponse.EffectiveStartDate | DateTime | 0.1 | Since Salesforce doesn’t natively support the period data type, Questionnaire.effectivePeriod is flattened into a set of effective start date and effective end date fields. |
| AssessmentQuestionResponse.EffectiveEndDate | DateTime | 0.1 |
| Questionnaire.item.extension:displayCategory | AssessmentQuestion.DisplayTextCategory | Picklist | 0.1 | Select a display text category only when the data type is Text Block. |
| AssessmentQuestionVersion.DisplayTextCategory | Picklist | 0.1 |
