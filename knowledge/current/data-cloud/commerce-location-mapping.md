---
title: "Commerce: Location Mapping"
domain: data-cloud
topic: commerce-location-mapping
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:42.879Z
keywords: [Commerce, Location, Mapping, DLO, DMO]
---

# Commerce: Location Mapping

# Commerce: Location Mapping

After a data stream is deployed, the Commerce starter data bundle automatically maps data from Commerce Cloud to data model objects (DMO)s in Data Cloud. Location data is the location that fulfills orders, such as a warehouse or a retail store.

## DLO to DMO Mapping

These data mappings relate to the Location object included in the Salesforce Commerce connector and how that data connects to DMOs.

| DLO Field | DLO Field Data Type | DMO | DMO Field |
| --- | --- | --- | --- |
| Id | ID | Location | id |
| LocationType | picklist | Location | LocationTypeId |
| Latitude | double | Location | GeoLatitude |
| Longitude | double | Location | GeoLongitude |
| ParentLocationId | reference | Location | ParentLocationId |
| PossessionDate | date | Location | PossessionDate |
| ConstructionStartDate | date | Location | ConstructionStartDate |
| ConstructionEndDate | date | Location | ConstructionEndDate |
| OpenDate | date | Location |  |
| CloseDate | date | Location | CloseDate |
| RemodelStartDate | date | Location | RemodelStartDate |
| RemodelEndDate | date | Location | RemodelEndDate |
| AddressId | reference | Location | VisitorAddressId |