---
title: "DTRQuestionnaireResponse"
domain: health-cloud-object-reference
topic: dtrquestionnaireresponse
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:35.491Z
estimatedTokens: 364
keywords: [DTRQuestionnaireResponse, FHIR, resource, maps, Assessment, AssessmentReason, V4.0, Discovery, Framework, Data, Model, Mapping]
---

# DTRQuestionnaireResponse

> The DTRQuestionnaireResponse FHIR resource maps to the
   Assessment and AssessmentReason object.

# DTRQuestionnaireResponse

The DTRQuestionnaireResponse FHIR resource maps to the Assessment and AssessmentReason object.

## FHIR V4.0 - Discovery Framework Data Model Mapping

Here’s how the fields defined by FHIR for [DTRQuestionnaireResponse](https://build.fhir.org/ig/HL7/davinci-dtr/StructureDefinition-dtr-questionnaireresponse.html) map to the fields in Salesforce.

| DTRQuestionnaireResponse element | Salesforce Field | Type | Salesforce Cardinality | Notes |
| --- | --- | --- | --- | --- |
| QuestionnaireResponse.authored | Assessment.CompletedDateTime | DateTime | 0.1 | N/A |
| QuestionnaireResponse.author | Assessment.Assessor | Reference: Account, Contact, Healthcare Provider, User | 0.1 | N/A |
| QuestionnaireResponse.Identifier | Assessment.Identifier | String | 0.1 | N/A |
| QuestionnaireResponse.item.answer.extension:origin | AssessmentQuestionResponse.OriginType | Picklist | 0.1 | See InformationOrigin to learn how the AssessmentQuestionResponse fields map to the elements in the InformationOrigin resource. |
| AssessmentQuestionResponse.ReviewerId | Reference: Account, Contact, Healthcare Provider, User | 0.1 |
| AssessmentQuestionResponse.ReviewerRoleId | Reference: Code Set, Code Set Bundle | 0.M |
| QuestionnaireResponse.extension:context | AssessmentReason.ReferenceRecordId | Reference: Clinical Service Request, Medication Request | 0.M | N/A |
| AssessmentReason.ReferenceValue | String Plus Clob | 0.M | N/A |
