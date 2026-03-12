---
title: "EnblProgramTaskMeasure"
domain: object-reference
topic: enblprogramtaskmeasure
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:08.629Z
estimatedTokens: 481
keywords: [EnblProgramTaskMeasure, connection, Enablement, measure, specific, milestone, outcome, program, API, version, 61.0, later, Calls, Special, Access]
---

# EnblProgramTaskMeasure

> Represents the connection between an Enablement measure and a
         specific milestone or outcome in an Enablement program. This object is available in
      API version 61.0 and later.

# EnblProgramTaskMeasure

Represents the connection between an Enablement measure and a specific milestone or outcome in an Enablement program. This object is available in API version 61.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

To access this object, the Design and Deliver Enablement Programs permission is required. This permission is enabled by default as part of the Manage Enablement Essentials permission set, which comes with the Enablement add-on license.

## Fields

| Field | Details |
| --- | --- |
| EnablementMeasureDefinitionId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the Enablement measure to use with a milestone or outcome.This field is a relationship field.Relationship NameEnablementMeasureDefinitionRelationship TypeLookupRefers ToEnablementMeasureDefinition |
| EnblProgramTaskDefinitionId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the outcome or milestone that uses the Enablement measure.This field is a relationship field.Relationship NameEnblProgramTaskDefinitionRelationship TypeMaster-detailRefers ToEnblProgramTaskDefinition (the master object) |
| SequenceNumber | TypeintPropertiesFilter, Group, Nillable, SortDescriptionA number that specifies the order of the Enablement measure when multiple measures are used with one outcome or milestone, starting at 0. For example, in a composite milestone that uses the Percentage function, the measure that provides the numerator value is sequence 0 and the measure that provides the denominator value is sequence 1. |
