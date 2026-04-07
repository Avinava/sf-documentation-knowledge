---
title: "ResourceAbsence"
domain: eu-developer-guide
topic: resourceabsence
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:32.813Z
estimatedTokens: 232
keywords: [ResourceAbsence, time, period, service, resource, unavailable, work, API, 64.0]
---

> Fields associated with a time period in which a service resource is
         unavailable to work in Field Service. This object is available in API version 64.0 and
      later.

# ResourceAbsence

Fields associated with a time period in which a service resource is unavailable to work in Field Service. This object is available in API version 64.0 and later.

The standard fields are documented in the [ResourceAbsence](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_resourceabsence.htm "HTML (New Window)") object reference.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ApprovalStatus | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the approval status of the absense request made by the service resource.Possible values are:ApprovedCancelledRejectedSubmittedThe default value is Submitted. |
