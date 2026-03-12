---
title: "PolygonUtils Class"
domain: field-service
topic: polygonutils-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:55.255Z
estimatedTokens: 1222
namespace: FSL
keywords: [PolygonUtils, Represents, result, getTerritoryIdByPolygons, service, territory, record, latitude, longitude, geolocation, values., Usage, Example, getAllPolygonsByLatLong]
---

# PolygonUtils Class

> Represents the result of using the getTerritoryIdByPolygons method to return a service territory record ID using
      latitude and longitude geolocation values.

**Namespace:** `FSL`

# PolygonUtils Class

Represents the result of using the getTerritoryIdByPolygons method to return a service territory record ID using latitude and longitude geolocation values.

## Namespace

[FSL](atlas.en-us.field_service_dev.meta/field_service_dev/apex_namespace_FSL.htm "The Field Service (FSL) namespace contains all classes, methods, Visualforce pages, and custom objects within the Field Service managed package. To allow access to namespace elements, assign the FSL custom permission set that's appropriate for the user's persona. For example, to allow a user to book appointments, assign the FSL Agent custom permission set.")

## Usage

Before calling the PolygonUtils class, make sure that you have existing map polygon records that are associated with a service territory.

If **Base service appointment territories on polygons** is enabled, global actions consume this class to populate the Service Territory field on service appointments. When standard FSL Global Actions are not being used, you can use the getTerritoryIdByPolygons method to populate the Service Territory lookup field on objects.

If getTerritoryIdByPolygons doesn’t find a territory it returns null.

For more information, see [Create and Manage Map Polygons](https://help.salesforce.com/articleView?id=pfs_map_polygons.htm&language=en_US).

-   **[PolygonUtils Methods](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_PolygonUtils.htm#apex_FSL_PolygonUtils_methods)**


## PolygonUtils Methods

PolygonUtils includes the following static method.

-   **[getTerritoryIdByPolygons(longitude, latitude)](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_PolygonUtils.htm#apex_FSL_PolygonUtils_getTerritoryIdByPolygons)**
    Returns a service territory record ID from longitude and latitude values.
-   **[getAllPolygonsByLatLong(longitude, latitude)](atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_PolygonUtils.htm#apex_FSL_PolygonUtils_getAllPolygonsByLatLong)**
    Returns a list of IDs of all matching polygons that include the point with the longitude and latitude values.

### getTerritoryIdByPolygons(longitude, latitude)

Returns a service territory record ID from longitude and latitude values.

#### Signature

static Id getTerritoryIdByPolygons(Double longitude, Double latitude)

#### Parameters

longitude

Type: [Double](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_double.htm#apex_methods_system_id "HTML (New Window)")

Required. The longitude value of the geolocation to be used to retrieve a service territory record ID via Polygon Classification.

latitude

Type: [Double](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_double.htm#apex_methods_system_id "HTML (New Window)")

Required. The latitude value of the geolocation to be used to retrieve a service territory record ID via Polygon Classification.

#### Return Value

Type: [Id](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_id.htm#apex_methods_system_id)

#### Usage

This method returns a service territory record ID from longitude and latitude values. If a service appointment’s geolocation matches more than one polygon, the appointment is assigned to either the highest or lowest-level territory in the hierarchy depending on your settings.

#### Example

This example retrieves a service territory record ID using latitude and longitude geolocation fields.

```

```

### getAllPolygonsByLatLong(longitude, latitude)

Returns a list of IDs of all matching polygons that include the point with the longitude and latitude values.

#### Signature

static List getAllPolygonsByLatLong(Double longitude, Double latitude)

#### Parameters

longitude

Type: [Double](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_double.htm#apex_methods_system_id "HTML (New Window)")

Required. The longitude value of the geolocation to be used to retrieve a service territory record ID using polygon classification.

latitude

Type: [Double](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_methods_system_double.htm#apex_methods_system_id "HTML (New Window)")

Required. The latitude value of the geolocation to be used to retrieve a service territory record ID using polygon classification.

#### Return Value

Type: [List](https://developer.salesforce.com/docs/atlas.en-us.244.0.apexcode.meta/apexcode/apex_methods_system_list.htm#apex_methods_system_list) <Id>

#### Usage

This method returns a list of polygon record IDs from longitude and latitude values. The method doesn’t include sharing.

#### Example

This example retrieves a list of relevant polygons that include the point with the longitude and latitude values.

```

```

## Code Examples

```apex
//fetch Service Appointment record(s)
List<ServiceAppointment> sas = [select id, latitude, longitude from serviceappointment where appointmentnumber = 'SA-3600' limit 1];
If(!sas.isEmpty()){
    //retrieve the service territory record id from the getTerritoryIdByPolygons method using geolocation fields from the first appointment in the list
    Id ServiceTerritoryId = FSL.PolygonUtils.getTerritoryIdByPolygons(double.valueOf(sas[0].longitude),double.valueOf(sas[0].latitude));
    system.debug(ServiceTerritoryId);
}
```

```apex
//fetch Service Appointment record(s)
Double longitude = 32.077213;
Double latitude = 34.792759;
    List<FSL__Polygon__c> relevantPolygons = 
FSL.PolygonUtils.getAllPolygonsByLatLong
(longitude,latitude);
    system.debug(relevantPolygons);
```

## Related Topics

- FSL (atlas.en-us.field_service_dev.meta/field_service_dev/apex_namespace_FSL.htm)
- PolygonUtils Methods (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_PolygonUtils.htm)
- getTerritoryIdByPolygons(longitude, latitude) (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_PolygonUtils.htm)
- getAllPolygonsByLatLong(longitude, latitude) (atlas.en-us.field_service_dev.meta/field_service_dev/apex_class_FSL_PolygonUtils.htm)
