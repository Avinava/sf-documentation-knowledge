---
title: "BusinessAlertStatus"
domain: omnistudio
topic: businessalertstatus
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:52.076Z
estimatedTokens: 331
keywords: [BusinessAlertStatus, status, insight, alert, API, version, 57.0, later, Calls, Special, Access, Rules]
---

# BusinessAlertStatus

> Represents information about the read status of an insight alert. This
      object is available in API version 57.0 and later.

# BusinessAlertStatus

Represents information about the read status of an insight alert. This object is available in API version 57.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

The BusinessAlertStatus object is available only if the ERI Growth User or ERI Starter User license is enabled.

## Fields

| Field | Details |
| --- | --- |
| BusinessAlertId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe insight alert related to the status.This field is a relationship field.Relationship NameBusinessAlertRelationship TypeLookupRefers ToBusinessAlert |
| IsAlertRead | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the insight alert is read by the user (true) or not (false).The default value is false. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionSpecifies the activation status of the insight alert. |
| UserId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the user who is associated with the alert.This field is a relationship field.Relationship NameUserRelationship TypeLookupRefers ToUser |
