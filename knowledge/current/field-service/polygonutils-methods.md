---
title: "PolygonUtils Methods"
domain: field-service
topic: polygonutils-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:12.049Z
keywords: [PolygonUtils, Methods, Returns, service, territory, record, longitude, latitude, values., getTerritoryIdByPolygons, Signature, Parameters, Return, Value, Usage, Example, getAllPolygonsByLatLong]
---

# PolygonUtils Methods

> Returns a service territory record ID from longitude and latitude
      values.

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