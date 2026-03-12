---
title: "FinServ AuthorizationFormText Custom Fields"
domain: financial-services-cloud-object-reference
topic: finserv-authorizationformtext-custom-fields
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:29.563Z
estimatedTokens: 588
keywords: [FinServ, AuthorizationFormText, Custom, authorization, form’s, text, language, settings, API, version, 53.0, later, Calls, Associated, Objects]
---

# FinServ AuthorizationFormText Custom Fields

> Represents an authorization form’s text and language settings.
      This object is available in API version 53.0 and later.

# FinServ AuthorizationFormText Custom Fields

Represents an authorization form’s text and language settings. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| IsActive__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThere can only be one Active Authorization Form Text at any given time with an Auth Form and locale combination. When a Consent Request is sent on a Data Use Purpose, all of the active authorization forms associated with the Data Use Purpose are selected, and all of the active authorization form text on the authorization forms is served to the person providing consent. |
| IsReadOnly__c | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe form is read only and not editable. When you make an Authorization Form Text active at any point, IsReadOnly must be permanently false. |
| LastActivationDateTime__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionYou can sort the list of authorization texts based on their most recent activation date. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AuthorizationFormTextFeed](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[AuthorizationFormTextHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

## Related Topics

- AuthorizationFormTextFeed (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_feed.htm)
- AuthorizationFormTextHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
