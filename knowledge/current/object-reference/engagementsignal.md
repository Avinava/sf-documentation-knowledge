---
title: "EngagementSignal"
domain: object-reference
topic: engagementsignal
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:08.661Z
estimatedTokens: 555
keywords: [EngagementSignal, data, individual’s, engagement, action, web, click, email, PDF, download, API, version, 62.0, later, Calls]
---

# EngagementSignal

> Represents data about an individual’s engagement action, such as a web click,
         an email response, or a PDF download. This object is available in API version 62.0 and
         later.

# EngagementSignal

Represents data about an individual’s engagement action, such as a web click, an email response, or a PDF download. This object is available in API version 62.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Fields

| Field | Details |
| --- | --- |
| DataSpaceId | TypereferencePropertiesFilter, Group, SortDescriptionRequired. Unique identifier that refers to the data space where the engagement signal originates.This field is a relationship field.Relationship NameDataSpaceRefers ToDataSpace |
| Description | TypestringPropertiesFilter, Group, Nillable, SortDescriptionAn optional text description of the engagement signal. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionRequired. API name for the engagement signal that's system-or user-generated. |
| IsRemote | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates if the engagement signal object is owned by a different org in Data 360.The default value is false. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp that indicates the last time the engagement signal was referenced by the current user. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp that indicates the last time the current user viewed the engagement signal record. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionRequired. Text label that identifies the engagement signal. |
| Status | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionPicklist value that indicates the current status of the engagement signal.Possible values are:ActiveCreateError—ErrorDeleteError—ErrorDeletingEditError—ErrorPreparingProcessingThe default value is Processing. |

## Usage

Use this object to define foundational data for your business objectives and recommendations in Salesforce Personalization. Use mapped data model object (DMO) fields to identify and track an individual’s engagement actions. For example, use data about a web click, an email response, or a PDF download to help achieve your personalization goals.
