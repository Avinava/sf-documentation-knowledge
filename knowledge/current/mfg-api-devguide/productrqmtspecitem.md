---
title: "ProductRqmtSpecItem"
domain: mfg-api-devguide
topic: productrqmtspecitem
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:56.039Z
estimatedTokens: 476
keywords: [ProductRqmtSpecItem, specific, measurable, requirement, specification, requested, product, delivered, how, verify, fulfilment, Calls]
---

# ProductRqmtSpecItem

> Represents a specific and measurable requirement within a requirement
      specification for a requested product. Defines what must be delivered and how to verify its
      fulfilment.

# ProductRqmtSpecItem

Represents a specific and measurable requirement within a requirement specification for a requested product. Defines what must be delivered and how to verify its fulfilment.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ProductRqmtSpecVersion | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe parent requirement specification that this item belongs to. |
| Category | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionThe type of requirement, such as functional, performance, or safety. |
| Statement | TypetextPropertiesFilter, Group, Nillable, SortDescriptionThe clear, detailed, and testable statement describing the requirement. |
| AcceptanceCriteria | TypetextPropertiesFilter, Group, Nillable, SortDescriptionThe measurable conditions that must be met for the requirement to be considered fulfilled. |
| TargetValue | TypetextPropertiesFilter, Group, Nillable, SortDescriptionThe specific, desired value or outcome expected for this requirement. |
| Tolerance | TypetextPropertiesFilter, Group, Nillable, SortDescriptionThe acceptable deviation range from the target value.v |
| UnitOfMeasure | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe unit in which the target value and tolerance are measured. |
| VerificationMethod | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionThe specific method used to validate that the requirement is met. |
| RiskLevel | TypepicklistPropertiesFilter, Group, Nillable, SortDescriptionThe level of risk associated with not meeting this requirement. |
| AdditionalInfo | TypetextPropertiesFilter, Group, Nillable, SortDescriptionThe extra notes, context, or guidance relevant to this requirement item. |
