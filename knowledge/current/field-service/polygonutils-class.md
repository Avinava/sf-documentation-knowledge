---
title: "PolygonUtils Class"
domain: field-service
topic: polygonutils-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:12.049Z
keywords: [PolygonUtils, Class, Returns, list, IDs, matching, polygons, include, point, longitude, latitude, values., getAllPolygonsByLatLong, Signature, Parameters, Return, Value, Usage, Example]
---

# PolygonUtils Class

> Returns a list of IDs of all matching polygons that include the
      point with the longitude and latitude values.

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