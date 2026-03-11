---
title: "AIScoringStep"
domain: omnistudio
topic: aiscoringstep
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:12.294Z
keywords: [AIScoringStep, Important, Supported, SOAP, API, Calls, REST, Methods, Special, Access, Rules, Fields]
---

# AIScoringStep

# AIScoringStep

Represents information about a step associated with an AI scoring model version that’s used by the Scoring Framework for Industries Cloud Einstein. This object is available in API version 57.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=industries_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported SOAP API Calls

describeSObjects(), query(), retrieve(), update()

## Supported REST API Methods

GET, HEAD, PATCH, Query

## Special Access Rules

To access this object, you must have the AI Accelerator User permission set with Scoring Framework enabled for Industries Cloud Einstein from Salesforce Setup. The Salesforce org must have the CRM Plus license and the product’s CRM license.

## Fields

| Field | Details |
| --- | --- |
| AiModelConfigStep | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionID of the AI model config step that’s related to the AIScoringStep record. |
| AiScoringModelDefVersionId | TypereferencePropertiesFilter, Group, SortDescriptionID of the AIScoringModelDefVersion record that’s related to the AIScoringStep record.This field is a relationship field.Relationship NameAiScoringModelDefVersionRelationship TypeLookupRefers ToAIScoringModelDefVersion |
| StepDetail | TypetextareaPropertiesNillable, UpdateDescriptionScoring step details in JSON format. |
| ValidationStatus | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionStatus of the business validations executed on the details that are captured in the scoring step. Available in API version 58.0 and later.Possible values are:DRAFTFAILEDPENDINGSUCCESS |
| ValidationStatusResult | TypetextareaPropertiesNillableDescriptionResult of the business validations executed on the details that are captured in the scoring step. Available in API version 58.0 and later. |