---
title: "AccountBrand"
domain: object-reference
topic: accountbrand
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:03.530Z
estimatedTokens: 969
keywords: [AccountBrand, brand, Partner, Account, API, version, 43.0, later, Calls, Special, Access, Rules, Associated, Objects]
---

# AccountBrand

> Represents the brand details of a Partner Account. This object
		is available in API version 43.0 and later.

# AccountBrand

Represents the brand details of a Partner Account. This object is available in API version 43.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated() query(), retrieve(), search(), undelete(), update(), upsert()

## Special Access Rules

This object is available only if digital experiences is enabled in your org and it has a Partner Community or Customer Community Plus license.

## Fields

| Field | Details |
| --- | --- |
| AccountId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionID of the Account. This number is unique within your organization. |
| Address | TypeaddressPropertiesFilter, NillableDescriptionThe street address. |
| City | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe city. |
| CompanyName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe name of the company associated with the account brand. |
| Country | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe country where the account is physically located. |
| Email | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionEmail address associated with the account. |
| GeocodeAccuracy | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist Sort, UpdateDescriptionStores data for accurate geocoded location. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date referenced. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionMost recent date viewed. |
| Latitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed along with Longitude to specify the precise geolocation of an address. |
| LogoId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the logo. |
| LogoUrl | TypeurlPropertiesNillable,DescriptionURL of the logo. This field is available in API version 44.0 and later. |
| Longitude | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionUsed with Latitude to specify the precise geolocation of an address. |
| Name | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionRequired. Name of the account. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionRequired. ID of the Owner. |
| Phone | TypephonePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionPhone number. |
| PostalCode | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe postal code where the user’s IP address is physically located. |
| State | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe address state. |
| Street | TypetextareaPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe address street. |
| Website | TypeurlPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionWebsite for the Account Brand. |

## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

[AccountBrandOwnerSharingRule](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm "StandardObjectNameOwnerSharingRule is the model for all owner sharing rule objects associated with standard objects. These objects represent a rule for sharing a standard object with users other than the owner.")

Sharing rules are available for the object.

[AccountBrandShare](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- AccountBrandOwnerSharingRule (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_ownersharingrule.htm)
- AccountBrandShare (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_share.htm)
