---
title: "TransitTime"
domain: channel-revenue-management-dev-guide
topic: transittime
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:10.749Z
estimatedTokens: 783
keywords: [TransitTime, expected, duration, movement, locations, business, transit, time, inventory, move, two, API, version, 65.0, later]
---

# TransitTime

> Represents the expected duration for a movement between locations. The
         business specifies the transit time required for inventory to move between two locations.
       This object is available in API version 65.0 and later.

# TransitTime

Represents the expected duration for a movement between locations. The business specifies the transit time required for inventory to move between two locations. This object is available in API version 65.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CurrencyIsoCode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionSpecifies the currency ISO code for the currency fields.Possible values are:INR—Indian RupeeKWD—Kuwaiti DinarUSD—U.S. DollarThe default value is USD. |
| DestinationLocationId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The location to which inventory is shipped.This field is a relationship field.Relationship NameDestinationLocationRefers ToLocation |
| Duration | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The estimated time taken for the inventory to move from the source location to the destination location. |
| DurationType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. Specifies how the duration is measured.Possible values are:DaysMonthsWeeksThe default value is Days. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionThe name of the transit time record. |
| OwnerId | TypereferencePropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionThe owner of the transit time record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| SourceLocationId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionRequired. The location from which inventory is shipped.This field is a relationship field.Relationship NameSourceLocationRefers ToLocation |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. Specifies the status of the transit time record.Possible values are:ActiveInactiveThe default value is Active. |
| UsageType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionRequired. Specifies the process, feature, or application that uses the record.Possible values are:ChannelPartnerInventoryThe default value is ChannelPartnerInventory. |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[TransitTimeShare](atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_associated_objects_share.htm "StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing entry on the standard object.")

Sharing is available for the object.

## Related Topics

- TransitTimeShare (atlas.en-us.channel_revenue_management_dev_guide.meta/channel_revenue_management_dev_guide/sforce_api_associated_objects_share.htm)
