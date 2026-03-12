---
title: "BusinessLicense"
domain: psc-api
topic: businesslicense
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:34.695Z
estimatedTokens: 1784
keywords: [BusinessLicense, authorization, issued, regulatory, agency, granted, organization, contact, specific, user, Calls, Associated, Objects]
---

# BusinessLicense

> Represents an authorization issued by a regulatory agency. The
		authorization can be granted to an organization, a contact, or a specific user.

# BusinessLicense

Represents an authorization issued by a regulatory agency. The authorization can be granted to an organization, a contact, or a specific user.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the authorized organization.This field is a relationship field.Relationship NameAccountRelationship TypeLookupRefers ToAccount |
| BusinessTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe business type category of the authorized organization or person.This field is a relationship field.Relationship NameBusinessTypeRelationship TypeLookupRefers ToBusinessType |
| ContactId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the authorized contact.This field is a relationship field.Relationship NameContactRelationship TypeLookupRefers ToContact |
| HealthcareProviderId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the Healthcare Provider who holds this license.This field is a relationship field.Relationship NameHealthcareProviderRelationship TypeLookupRefers ToHealthcareProvider |
| Identifier | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionA unique identifier for this authorization. This field is unique within your organization. |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionWhether the authorization is still valid and in effect.The default value is false. |
| Issuer | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the regulatory authority that issued the authorization. |
| JurisdictionCountry | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe country that this authorization covers. Only used if JurisdictionType is set to COUNTRY. |
| JurisdictionOther | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe county or other area that this authorization covers. Only used if JurisdictionType is set to COUNTY. |
| JurisdictionState | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe state or province that this authorization covers. Only used if JurisdictionType is set to STATE or PROVINCE. |
| JurisdictionType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of geopolitical area that this authorization covers.Possible values are:COUNTRYCOUNTYPROVINCESTATE |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of this authorization. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the user who owns this record.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| PeriodEnd | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date on which this authorization expires. |
| PeriodStart | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date on which this authorization goes into effect. |
| RegulatoryAuthorizationTypeId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the regulatory authorization type.This field is a relationship field.Relationship NameRegulatoryAuthorizationTypeRelationship TypeLookupRefers ToRegulatoryAuthorizationType |
| Status | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe current status of the authorization. Possible values are:DraftInactiveRevokedVerified |
| UserId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the authorized user.This field is a relationship field.Relationship NameUserRelationship TypeLookupRefers ToUser |
| VerificationStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe current status of the verification process for this authorization. Possible values are:Authorized |
| VerifiedDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date that this authorization was verified. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[BusinessLicenseChangeEvent](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API Version 55.0)

Change events are available for the object.

[BusinessLicenseFeed](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm "StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts and feed-tracked changes of a standard object.")

Feed tracking is available for the object.

[BusinessLicenseHistory](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[BusinessLicenseOwnerSharingRule](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[BusinessLicenseShare](atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- BusinessLicenseChangeEvent (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_change_event.htm)
- BusinessLicenseFeed (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_feed.htm)
- BusinessLicenseHistory (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_history.htm)
- BusinessLicenseOwnerSharingRule (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_ownersharingrule.htm)
- BusinessLicenseShare (atlas.en-us.psc_api.meta/psc_api/sforce_api_associated_objects_share.htm)
