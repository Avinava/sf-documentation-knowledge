---
title: "wkfsl__ShiftAcceptNotification__c"
domain: workdotcom-dev-guide
topic: wkfslshiftacceptnotificationc
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:22.578Z
estimatedTokens: 314
keywords: [wkfsl__ShiftAcceptNotification__c, helper, ensure, employees, don’t, receive, mobile, app, notification, they, assigned, service, appointment, installed, part]
---

# wkfsl__ShiftAcceptNotification__c

> Represents a helper object to ensure that employees don’t receive more
      than one mobile app notification when they are assigned a service appointment. This object is
      installed as a part of the Shift Management managed package. This object is available in
    API version 48.0 and later.

# wkfsl\_\_ShiftAcceptNotification\_\_c

Represents a helper object to ensure that employees don’t receive more than one mobile app notification when they are assigned a service appointment. This object is installed as a part of the Shift Management managed package. This object is available in API version 48.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Name | TypestringPropertiesCreate, Defaulted on create, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe name of this record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who currently owns this record. Default value is the user logged in to the API who ran create(). |
| wkfsl__ServiceResourceId__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe service resource associated with this record. |
| wkfsl__UserId__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionThe user associated with this record. This field is unique within your organization. |
