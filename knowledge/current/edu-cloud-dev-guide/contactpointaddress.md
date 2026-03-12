---
title: "ContactPointAddress"
domain: edu-cloud-dev-guide
topic: contactpointaddress
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:25.358Z
estimatedTokens: 1923
keywords: [ContactPointAddress, contact’s, billing, shipping, address, associated, individual, person, account, API, version, 61.0, later, Calls, Special]
---

# ContactPointAddress

> Represents a contact’s billing or shipping address, which is
         associated with an individual or a person account. This object is available in API
      version 61.0 and later.

# ContactPointAddress

Represents a contact’s billing or shipping address, which is associated with an individual or a person account. This object is available in API version 61.0 and later.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=edu_cloud_dev_guide)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if the FundraisingAccess license is enabled and the Fundraising User system permission is assigned to users.

## Fields

| Field | Details |
| --- | --- |
| ActiveFromDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the contact’s address became active. |
| ActiveToDate | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when the contact’s address is no longer active. |
| Address | TypeaddressPropertiesFilter, NillableDescriptionThe full address. |
| AddressType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe type of address.Valid values are:BillingShipping |
| BestTimeToContactEndTime | TypetimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe latest time to contact the individual. |
| BestTimeToContactStartTime | TypetimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe earliest time to contact the individual. |
| BestTimeToContactTimezone | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe timezone applied to the best time to contact the individual. |
| City | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe address city. |
| ContactPointPhoneId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe primary phone number associated with this address.This field is a relationship field.Relationship NameContactPointPhoneRelationship TypeLookupRefers ToContactPointPhone |
| Country | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe address country. |
| GeocodeAccuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe level of accuracy of a location’s geographical coordinates compared with its physical address. A geocoding service typically provides this value based on the address’s latitude and longitude coordinates.Valid values are:AddressBlockCityCountyExtendedZipNearAddressNeighborhoodStateStreetUnknownZip |
| IsDefault | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a contact’s address is the preferred method of communication (true) or not (false).The default value is false. |
| IsPrimary | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether a contact’s address is their primary address (true) or not (false). The default value is false. |
| IsThirdPartyAddress | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the address is associated with a third party (true) or not (false). The default value is false. |
| IsUndeliverable | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the address is undeliverable (true) or not (false).The default value is false. |
| LastAddressStdDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe most recent date and time that the address was evaluated by the address standardization provider. |
| LastAddressStdStatus | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe most recent status received from the address standardization provider. |
| LastChangeOfAddressDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe most recent date and time that the address was evaluated by the change of address provider. |
| LastChangeOfAddressStatus | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe status of the latest change of address request. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last referenced a record related to this record. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |
| Latitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with Longitude to specify the precise geolocation of the address. Acceptable values are numbers between –90 and 90 with up to 15 decimal places. |
| Longitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with Latitude to specify the precise geolocation of the address. Acceptable values are numbers between –180 and 180 with up to 15 decimal places. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionRequired. The name of the contact point address record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe ID of the account’s owner associated with this contact.This field is a polymorphic relationship field.Relationship NameOwnerRelationship TypeLookupRefers ToGroup, User |
| ParentId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the contact’s parent record. Only an individual or account can be a contact’s parent.This field is a polymorphic relationship field.Relationship NameParentRelationship TypeMaster-detailRefers ToAccount, Individual (the master object) |
| PostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe address postal code. |
| PreferenceRank | TypeintPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe preference rank when there are multiple contact point addresses. |
| SeasonalEndDay | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe day when the seasonal address of the contact is replaced by the default address.Valid values are: 1–31 |
| SeasonalEndMonth | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe month when the seasonal address of the contact is replaced by the default address.Valid values are: 1–12 |
| SeasonalStartDay | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe day when the seasonal address of the contact replaces the default address.Valid values are: 1–31 |
| SeasonalStartMonth | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe month when the seasonal address of the contact replaces the default address.Valid values are: 1–12 |
| State | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe address state. |
| Street | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe address street. |
| UsageType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe usage type of this address. For instance, whether it’s a work address or a home address.Valid values are:HomeInactiveTemporaryWork |
