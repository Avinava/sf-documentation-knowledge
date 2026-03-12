---
title: "OvertimeApprover"
domain: eu-developer-guide
topic: overtimeapprover
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.282Z
estimatedTokens: 275
keywords: [OvertimeApprover, person, approves, overtime, hours, API, version, 62.0, later, Calls]
---

# OvertimeApprover

> Represents a person who approves overtime hours. This object is
      available in API version 62.0 and later.

# OvertimeApprover

Represents a person who approves overtime hours. This object is available in API version 62.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ApproverRole | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe role of the overtime approver. |
| ApproverUserId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe user ID associated with the overtime approver if the approver is a Salesforce user.This field is a relationship field.Relationship NameApproverUserRefers ToUser |
| ExternalIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID assigned to the overtime approver by an external data source. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the overtime approver is active (true) or not (false).The default value is false. |
