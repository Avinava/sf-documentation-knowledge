---
title: "BusinessLicenseApplication"
domain: psc-api
topic: businesslicenseapplication
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:33.297Z
estimatedTokens: 2262
keywords: [BusinessLicenseApplication, application, form, submitted, business, owner, API, version, 49.0, later, Calls, Associated, Objects]
---

# BusinessLicenseApplication

> Represents an application form submitted by a business owner. This
      object is available in API version 49.0 and later.

# BusinessLicenseApplication

Represents an application form submitted by a business owner. This object is available in API version 49.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the applicant’s account.This field is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| AdditionalLocationDescription | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAdditional text describing the applicant’s location. |
| AmountPaid | TypecurrencyPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe amount paid by the applicant. |
| ApplicantId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the individual who is submitting the business license application.This field is a relationship field.Relationship NameApplicantRelationship TypeLookupRefers ToContact |
| ApplicationCaseId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the case associated to the application.This field is a relationship field.Relationship NameApplicationCaseRelationship TypeLookupRefers ToCase |
| ApplicationCategory | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCategorizes the ways an application can be processed.Possible values are:BasicSpecial |
| ApplicationType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of the application.Possible values are:Change Of Circumstance—Available in API versions 62.0 and later.ChangeOfCircumstance—Available in API versions 60.0 and 61.0.NewRecertification—Available in API version 60.0 and later.Renewal |
| AppliedDate | TypedateTimePropertiesCreate, Filter, Sort, UpdateDescriptionThe date the application was submitted. |
| ApprovedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date the application was approved. |
| BusinessTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the business activity associated with the application.This field is a relationship field.Relationship NameBusinessTypeRelationship TypeLookupRefers ToBusinessType |
| Category | TypepicklistPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe service category for the application.Possible values are:PermitEmergency Service |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionDescription for the application. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when a user most recently viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when a user most recently viewed this record. If this value is null, this record might only have been referenced (LastReferencedDate) and not viewed. |
| LicensePermitNameId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the issued license or permit for this application.This field is a relationship field.Relationship NameLicensePermitNameRelationship TypeLookupRefers ToBusinessLicense |
| LicenseTypeId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the type of license associated with this application.This field is a relationship field.Relationship NameLicenseTypeRelationship TypeLookupRefers ToRegulatoryAuthorizationType |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe auto-generated unique identifier for the application. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user that owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PaymentDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when payment was received from the applicant. |
| PrimaryOwnerId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the primary business owner associated with the business license application.This field is a relationship field.Relationship NamePrimaryOwnerRelationship TypeLookupRefers ToContact |
| RequirementsCompleteDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date when all requirements were met for approval of the application. |
| SavedApplicationRef | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionReference to the saved application.This field is a relationship field.Relationship NameSavedApplicationRefRelationship TypeLookupRefers ToPreliminaryApplicationRef |
| SiteAddress | TypeaddressPropertiesFilter, NillableDescriptionFull address of the business location. |
| SiteCity | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCity of the business location. |
| SiteCountry | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCountry of the business location. |
| SiteGeocodeAccuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe expected precision of the latitude and longitude values provided for the business.Possible values are:AddressBlockCityCountyExtendedZipNearAddressNeighborhoodStateStreetUnknownZip |
| SiteLatitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionLatitude for the business location. |
| SiteLongitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionLongitude for the business location. |
| SitePostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPostal or zip code for the business location. |
| SiteState | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionState or province code for the business location. |
| SiteStreet | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionStreet address for the business location. |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe submission and approval status of the application. Possible values are:Application AcceptedApprovedApproved with ConditionsCancelledIn ReviewInspection PhaseSubmitted |
| WasReturned | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionWhether a submitted application was sent back to the applicant due to errors. The default value is false. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[BusinessLicenseApplicationChangeEvent](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 55.0)

Change events are available for the object.

[BusinessLicenseApplicationFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[BusinessLicenseApplicationHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[BusinessLicenseApplicationOwnerSharingRule](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[BusinessLicenseApplicationShare](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Share is available for the object.

## Related Topics

- BusinessLicenseApplicationChangeEvent (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_change_event.htm)
- BusinessLicenseApplicationFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- BusinessLicenseApplicationHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
- BusinessLicenseApplicationOwnerSharingRule (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm)
- BusinessLicenseApplicationShare (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm)
