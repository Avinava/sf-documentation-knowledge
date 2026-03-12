---
title: "ActionPlanTmplItmAssessmentInd"
domain: psc-api
topic: actionplantmplitmassessmentind
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:32.852Z
estimatedTokens: 349
keywords: [ActionPlanTmplItmAssessmentInd, action, plan, template, items, assessment, indicator, definitions, associated, Calls]
---

# ActionPlanTmplItmAssessmentInd

> Represents the action plan template items and the assessment indicator
         definitions associated with them.

# ActionPlanTmplItmAssessmentInd

Represents the action plan template items and the assessment indicator definitions associated with them.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search()

## Fields

| Field | Details |
| --- | --- |
| ActionPlanTemplateItemId | TypereferencePropertiesFilter, Group, SortDescriptionThe action plan template item that is associated with the assessment indicator definition.This field is a relationship field.Relationship NameActionPlanTemplateItemRelationship TypeMaster-detailRefers ToActionPlanTemplateItem (the detail object) |
| AssessmentIndDefinitionId | TypereferencePropertiesFilter, Group, SortDescriptionThe assessment indicator definition that is associated with the action plan template item.This field is a relationship field.Relationship NameAssessmentIndDefinitionRelationship TypeMaster-detailRefers ToAssessmentIndicatorDefinition (the master object) |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user referenced this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe most recent date on which a user viewed this record. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the action plan template item assessment indicator definition. |
