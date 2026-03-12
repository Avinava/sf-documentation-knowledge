---
title: "Fields on ActionPlanTemplate"
domain: life-sciences-dev-guide
topic: fields-on-actionplantemplate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:43.610Z
estimatedTokens: 197
keywords: [ActionPlanTemplate, Life, Sciences, Cloud, extend, standard, integration, external, systems]
---

# Fields on ActionPlanTemplate

> Life Sciences Cloud fields extend the standard ActionPlanTemplate object for
    integration with external systems.

# Fields on ActionPlanTemplate

Life Sciences Cloud fields extend the standard ActionPlanTemplate object for integration with external systems.

## Fields

| Field | Details |
| --- | --- |
| ParentTemplateId | TypeReferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the parent template associated with the action plan template.This field is a relationship field.Relationship NameParentTemplateRefers ToActionPlanTemplate |
| SourceSystemIdentifier | TypeStringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe identifier of the record in the source system. |
| SourceSystemName | TypeStringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the system from which data is loaded into this object. |
