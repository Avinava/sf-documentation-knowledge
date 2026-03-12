---
title: "FinServ AuthorizationFormConsent Custom Fields"
domain: financial-services-cloud-object-reference
topic: finserv-authorizationformconsent-custom-fields
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:29.559Z
estimatedTokens: 871
keywords: [FinServ, AuthorizationFormConsent, Custom, date, way, user, consented, authorization, form, API, version, 53.0, later, Calls, Associated]
---

# FinServ AuthorizationFormConsent Custom Fields

> Represents the date and way in which a user consented to an
         authorization form. This object is available in API version 53.0 and
      later.

# FinServ AuthorizationFormConsent Custom Fields

Represents the date and way in which a user consented to an authorization form. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Browser__c | TypestringPropertiesFilter, Group, Nillable, SortDescriptionCollects data at the time of consent from the browser of the person providing consent. |
| ConsentExpirationDateTime__c | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionSpecifies the length of time for which this particular consent, if accepted, lasts. This is a formula field that adds the Consent Captured Date time and Consent Duration Days on the Auth Form entity. |
| Email__c | TypeemailPropertiesFilter, Group, Nillable, SortDescriptionCollects data at the time of consent from the email address of the person providing consent. |
| InfoAuthRequestFormId__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIdentification of the Information Authorization Request Form related to this record.This field is a relationship field.Relationship NameInfoAuthRequestFormRelationship TypeLookupRefers ToInfoAuthRequestForm |
| IP__c | TypestringPropertiesFilter, Group, Nillable, SortDescriptionCollects data at the time of consent from the IP address of the person providing consent. |
| Location__c | TypestringPropertiesFilter, Group, Nillable, SortDescriptionCollects data at the time of consent from the geo location of the person providing consent. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[AuthorizationFormConsentChangeEvent](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[AuthorizationFormConsentHistory](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[AuthorizationFormConsentShare](atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- AuthorizationFormConsentChangeEvent (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_change_event.htm)
- AuthorizationFormConsentHistory (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_history.htm)
- AuthorizationFormConsentShare (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/sforce_api_associated_objects_share.htm)
