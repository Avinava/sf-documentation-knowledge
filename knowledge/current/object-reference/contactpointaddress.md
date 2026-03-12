---
title: "ContactPointAddress"
domain: object-reference
topic: contactpointaddress
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:06.905Z
estimatedTokens: 2124
keywords: [ContactPointAddress, contact’s, billing, shipping, address, associated, individual, person, account, API, version, 49.0, later, Calls, Objects]
---

# ContactPointAddress

> Represents a contact’s billing or shipping address, which is
         associated with an individual or person account. This object is available in API
      version 49.0 and later.

# ContactPointAddress

Represents a contact’s billing or shipping address, which is associated with an individual or person account. This object is available in API version 49.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| ActiveFromDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the contact’s address became active. |
| ActiveToDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the contact’s address is no longer active. |
| Address | TypeaddressPropertiesFilter, NillableDescriptionThe full address. |
| AddressFirstName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionFirst name associated with the address.The field is available only if the B2B Commerce license is enabled.This field is available in API version 57.0 and later. |
| AddressLastName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLast name associated with the address.The field is available only if the B2B Commerce license is enabled.This field is available in API version 57.0 and later. |
| AddressMiddleName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionMiddle name associated with the address.The field is available only if the B2B Commerce license is enabled.This field is available in API version 57.0 and later. |
| AddressType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIndicates the type of address.Possible values are:BillingShipping |
| BestTimeToContactEndTime | TypetimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe latest time to contact the individual. |
| BestTimeToContactStartTime | TypetimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe earliest time to contact the individual. |
| BestTimeToContactTimezone | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe time zone applied to the best time to contact the individual. |
| City | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe address city. |
| CompanyName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionCompany name associated with the address.The field is available only if the B2B Commerce license is enabled.This field is available in API version 57.0 and later. |
| ContactPointPhoneId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionRepresents the primary phone number associated with this address.This is a relationship field.Relationship NameContactPointPhoneRelationship TypeLookupRefers ToContactPointPhone |
| Country | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe address country. |
| GeocodeAccuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe level of accuracy of a location’s geographical coordinates compared with its physical address. A geocoding service typically provides this value based on the address’s latitude and longitude coordinates.Possible values are:AddressBlockCityCountyExtendedZipNearAddressNeighborhoodStateStreetUnknownZip |
| IsDefault | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a contact’s address is the preferred method of communication (true) or not (false). The default value is false. |
| IsPrimary | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a contact’s address is their primary address (true) or not (false). The default value is false. |
| IsThirdPartyAddress | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the address is associated with a third party (true) or not (false). The default value is false.This field is available in API version 57.0 and later. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last referenced a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Latitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with Longitude to specify the precise geolocation of the address. Acceptable values are numbers between –90 and 90 with up to 15 decimal places. |
| Longitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with Latitude to specify the precise geolocation of the address. Acceptable values are numbers between –180 and 180 with up to 15 decimal places. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The name of the contact point address record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the account’s owner associated with this contact.This is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ParentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the contact’s parent record. Only an individual or account can be a contact’s parent. Because this is a master-detail relationship, users must have Edit access to the parent record to create or modify a Contact Point Address.This is a polymorphic relationship field.Relationship NameParentRelationship TypeMaster-detailRefers ToAccount, Individual |
| PhoneNumber | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPhone number associated with the address.The field is available only if the B2B Commerce license is enabled.This field is available in API version 57.0 and later. |
| PostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe address postal code. |
| PreferenceRank | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPreference rank when there are multiple contact point addresses. |
| State | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe address state. |
| Street | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe address street. |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionSpecify the usage type of this address. For instance, whether it’s a work address or a home address.Possible values are:HomeInactiveTemporaryWork |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ContactPointAddressChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.")

Change events are available for the object.

[ContactPointAddressHistory](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm "StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the history of changes to the values in the fields of a standard object.")

History is available for tracked fields of the object.

[ContactPointAddressShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- ContactPointAddressChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
- ContactPointAddressHistory (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_history.htm)
- ContactPointAddressShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
