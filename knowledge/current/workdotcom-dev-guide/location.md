---
title: "Location"
domain: workdotcom-dev-guide
topic: location
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:22.370Z
estimatedTokens: 833
keywords: [Location, Work.com, represent, physical, visitor, address, extra, custom, added, search, filtering, levels, enabled, org, abstraction]
---

# Location

> Location is used by Work.com to represent a physical location, with a visitor
      address, with extra custom fields added by Work.com. If location search filtering for all
      levels is enabled in the org, a location can also be an abstraction.

# Location

Location is used by Work.com to represent a physical location, with a visitor address, with extra custom fields added by Work.com. If location search filtering for all levels is enabled in the org, a location can also be an abstraction.

For Work.com, a Location record can have child Location records, which are called sublocations. Use sublocations to create hierarchies that go all the way to an employee work area, for example Building\>Floor\>Space.

Locations have local level information that is set automatically. A top-level, root location is level 1. A child of level 1 is level 2, and so on. By default, a level 1 location must have a visitor address. However, if a Salesforce admin has enabled location search filtering for all levels of the location hierarchy, level 1 locations don't have to have a visitor address. They can be abstractions, like sales regions or city neighborhoods. For details, see Salesforce Help.

A location hierarchy, which includes a level 1 location and all its sublocations, can be 13 levels deep and include up to 10,000 locations.

Location names have a 40-character limit and names must be unique.

Work.com adds the following field customizations on Location.

## Changes to Existing Fields

| Field | Details |
| --- | --- |
| LocationType | DescriptionUsers see this value in Workplace Command Center.For Work.com, the set of valid values is:BuildingCampusFloorPlantSiteSpaceStoreWarehouseThe default value is Building. |
| VisitorAddressId | DescriptionUsers see this value in Workplace Command Center. |

## Custom Fields

| Field | Details |
| --- | --- |
| wkcc__Level2LocationId__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionFor child locations, this value is the level 2 location in its location hierarchy. For level 1 locations, this value is empty. This value is used to aggregate wellness statuses. |
| wkcc__LocationPath__c | TypestringPropertiesCreate, Filter, Group, idLookup, Nillable, Sort, UpdateDescriptionUpdates to this field should be made only by Salesforce. The location hierarchy from the root location to this location. Format is similar to <level1 ID>,<level2 ID>,<level3 ID>. This field is unique within your organization. |
| wkcc__StatusLastUpdated__c | TypedatePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe date when Status__c was last changed. |
| wkcc__Status__c | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the location.Possible values are:Hard CloseOpenReduced DensitySoft Close |

#### See Also

-   [Understand Location Data](atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_understand_location.htm "Work.com uses Location to associate Employees to physical and abstract locations. Existing solutions may already have an alternate data model that tracks employee locations. To apply the full power of Work.com, solutions may need to correlate or synchronize their data with Location data.")

-   [*Object Reference for Salesforce and Lightning Platform*: Location](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_location.htm "
    Object Reference for Salesforce and Lightning Platform: Location - HTML (New Window)")

## Related Topics

- Understand Location Data (atlas.en-us.workdotcom_dev_guide.meta/workdotcom_dev_guide/wdc_cc_understand_location.htm)
