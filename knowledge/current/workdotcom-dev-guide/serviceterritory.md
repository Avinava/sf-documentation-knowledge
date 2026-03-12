---
title: "ServiceTerritory"
domain: workdotcom-dev-guide
topic: serviceterritory
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:22.546Z
estimatedTokens: 510
keywords: [ServiceTerritory, locations, spaces, associated, workplace, Work.com, adds, new, custom, standard, API, version, 38.0, later, Calls]
---

# ServiceTerritory

> Represents the locations and spaces associated with your workplace. Work.com
      adds new custom fields to the standard ServiceTerritory object. This object is available
    in API version 38.0 and later.

# ServiceTerritory

Represents the locations and spaces associated with your workplace. Work.com adds new custom fields to the standard ServiceTerritory object. This object is available in API version 38.0 and later.

For standard fields on the ServiceTerritory object, see [Object Reference - ServiceTerritory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_serviceterritory.htm).

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Custom Fields

| Field | Details |
| --- | --- |
| wkfsl__Facility_Type__c | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe type of facility, which is derived from the Location record. Users see this value in the Work.com Command Center.Possible values are:BuildingCampusFloorPlantSiteSpaceStoreVirtualWarehouseThe default value is Building. This field is available in API version 48.0 and later.NoteThis field is standard, but the picklist values are custom for Work.com. Users see these values in the Work.com Command Center. |
| wkfsl__Location__c | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionLocation of the service territory. This field is available in API version 48.0 and later. |
| wkfsl__Maximum_Occupancy__c | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionMaximum occupancy for the service territory. This field must be populated for each territory. This field is available in API version 48.0 and later. |
| wkfsl__Select_for_Facility_Plan__c | TypebooleanPropertiesCreate, Filter, Group, Sort, UpdateDescriptionSets whether the service territory available for facility plans. This field's initial value is set from the location type during setup. The default value is falseThis field is available in API version 48.0 and later, and in package version 1.73 and later. |
