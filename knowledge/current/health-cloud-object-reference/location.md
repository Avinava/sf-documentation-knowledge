---
title: "Location"
domain: health-cloud-object-reference
topic: location
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:44.165Z
estimatedTokens: 1396
keywords: [Location, FHIR, resource, maps, Healthcare​Facility, Salesforce​, V4​.0, Clinical, Model, Mapping, Sample, Record, Diagram]
---

> The Location FHIR resource maps to the Healthcare​Facility and Location objects in Salesforce​.

# Location

The Location FHIR resource maps to the Healthcare​Facility and Location objects in Salesforce​.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=health_cloud_object_reference)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## FHIR V4​.0 - Clinical Data Model Mapping

Here’s how the fields defined by FHIR for [Location](https://www.hl7.org/fhir/location.html) map to the fields in the Salesforce​.

| Location Resource | Salesforce Field | Type | Salesforce Cardinality | Notes |
| --- | --- | --- | --- | --- |
| identifier | Identifier | Object | 0​.M | The identifier information for a facility is represented as Identifier records that reference the facility record using their Identifier​.Parent​RecordId field​. |
| status | Account​.IsActive | Boolean | 0​.1 | While FHIR defines location​.status as a code, the salesforce implementation is a boolean field in the referenced account record​. |
| operational​Status | N/A | N/A | N/A | Not supported |
| name | Healthcare​Facility​.Name | String | 0​.1 | N/A |
| alias | N/A | N/A | N/A | Not supported |
| description | Location​.Description | String | 0​.1 | N/A |
| mode | N/A | N/A | N/A | Not supported |
| type | Healthcare​Facility​.​Facility​TypeId | Lookup: CodeSet​Bundle | 0​.1 | While FHIR defines location​.type as a zero-to-many resource, Salesforce implements Healthcare​Facility​.​Facility​TypeId as a zero-to-one field​. |
| telecom | Contact​Point​Phone | Object | 0​.M | The telecom information of the facility is stored as Contact​Point​Phone records that reference the account referenced by the facility record​. |
| address | Contact​Point​Address | Object | 0​.M | The address information of the facility is stored as Contact​Point​Address records that reference the account referenced by the facility record​. |
| physical​Type | Healthcare​Facility​.Location​Type | Picklist | 0​.1 | While FHIR defines location​.physical​Type as a code set bundle, Salesforce implements Healthcare​Facility​.Location​Type as a picklist​. |
| position | Location​.Location | Geolocation | 0​.1 | The location​.position FHIR resource is mapped to the Location​.Location salesforce field​. This location (Salesforce object) record is referenced by the healthcare facility record using its Healthcare​Facility​.LocationId lookup field​.position​.altitude is not supported in Location​.Location​. |
| managing​Organization | Account​Account​Relation__c | Junction Object | 0​.1 | The junction object that connects the facility account with the parent organization’s business account​. |
| partOf | Healthcare​Facility​.Parent​FacilityId | Lookup: Healthcare​Facility | 0​.1 | N/A |
| hoursOf​Operation​.daysOf​Week | ​TimeSlot​.DayOf​Week | Picklist | 0​.1 | While FHIR defines location​.hoursOf​Operation​.daysOf​Week as a code set bundle, Salesforce implementation is a picklist​.While the ​TimeSlot​.DayOf​Week field is a zero-to-one field, multiple time slot records can reference the same operating hours record, thereby supporting a zero-to-many reference for location​.hoursOf​Operation​.daysOf​Week in the Salesforce implementation​.The time slot record references the operating hours record using its ​TimeSlot​.Operating​HoursId master-detail reference field​. This operating hours record is referenced by the facility’s account record using its Account​.Operating​HoursId lookup field​. And finally, this account record is referenced by the facility record using its Healthcare​Facility​.AccountId master-detail reference field​. |
| hoursOf​Operation​.allDay | N/A | N/A | N/A | Not supported |
| hoursOf​Operation​.opening​​Time | ​TimeSlot​.Start​​Time | ​Time | 0​.1 | The time slot record references the operating hours record using its ​TimeSlot​.Operating​HoursId master-detail reference field​. This operating hours record is referenced by the facility’s account record using its Account​.Operating​HoursId lookup field​. And finally, this account record is referenced by the facility record using its Healthcare​Facility​.AccountId master-detail reference field​. |
| hoursOf​Operation​.closing​Time | ​TimeSlot​.​End​Time | ​Time | 0​.1 | The time slot record references the operating hours record using its ​TimeSlot​.Operating​HoursId master-detail reference field​. This operating hours record is referenced by the facility’s account record using its Account​.Operating​HoursId lookup field​. And finally, this account record is referenced by the facility record using its Healthcare​Facility​.AccountId master-detail reference field​. |
| availability​Exceptions | Healthcare​Facility​.Availability​Exceptions | String | 0​.1 | N/A |
| end​Point | N/A | N/A | N/A | Not supported |

## Sample Record Diagram

Here's a diagram that shows an example of how this resource is represented in Salesforce.

![A diagram that shows how the location resource for a location is represented in Salesforce.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fhealthcare_api%2FMappings_FHIR%2Fimages%2Fsrd_hc_location.png&folder=health_cloud_object_reference)

#### See Also

-   [HealthcareFacility](atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_HealthCareFacility.htm "Represents a healthcare facility and all its related details. These details may be physical, functional, geographic, or business details. This object is available in API version 51.0 and later.")

## Related Topics

- HealthcareFacility (atlas.en-us.health_cloud_object_reference.meta/health_cloud_object_reference/hc_r4_api_objects_HealthCareFacility.htm)
