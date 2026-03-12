---
title: "FinServ AuthorizationForm Custom Fields"
domain: financial-services-cloud-object-reference
topic: finserv-authorizationform-custom-fields
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:29.554Z
estimatedTokens: 467
keywords: [FinServ, AuthorizationForm, Custom, specific, version, effective, dates, form, associated, consent, privacy, policy, terms, conditions, API]
---

# FinServ AuthorizationForm Custom Fields

> Represents the specific version and effective dates of a form that is
         associated with consent, such as a privacy policy or terms and conditions. This object
      is available in API version 53.0 and later.

# FinServ AuthorizationForm Custom Fields

Represents the specific version and effective dates of a form that is associated with consent, such as a privacy policy or terms and conditions. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AssociatedRegulation__c | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe specific regulation to which this authorization form is related. |
| ConsentDurationDayCount__c | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents the number of days for which this Authorization Form is valid for, upon providing consent. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AuthorizationFormHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[AuthorizationFormShare](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- AuthorizationFormHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
- AuthorizationFormShare (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm)
