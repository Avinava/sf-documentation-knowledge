---
title: "Salesforce Maps Apex Methods"
domain: maps-developer-guide
topic: salesforce-maps-apex-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:53.817Z
estimatedTokens: 1516
keywords: [Salesforce, Maps, Apex, typed, object-oriented, programming, language, developers, execute, flow, transaction, control, statements, Platform, server]
---

# Salesforce Maps Apex Methods

> Apex is a typed, object-oriented programming language that allows developers to execute
    flow and transaction control statements on the Salesforce Platform server, in conjunction with
    calls to the API. Use the sample code in this Apex method documentation as a starting point for
    your Salesforce Maps implementation.

# Salesforce Maps Apex Methods

Apex is a typed, object-oriented programming language that allows developers to execute flow and transaction control statements on the Salesforce Platform server, in conjunction with calls to the API. Use the sample code in this Apex method documentation as a starting point for your Salesforce Maps implementation.

-   **[Assign Records to Owners Using an Assignment Plan](atlas.en-us.maps_developer_guide.meta/maps_developer_guide/maps_apex_assignrecords.htm)**
    The AssignRecords() Apex method assigns records to users automatically using rules specified in an assignment plan. For example, suppose that you use a web-to-lead generation form to generate inbound leads in Salesforce. You use the AssignRecords() method to assign those leads to sales reps as soon as the lead records are created, reducing the time for sales reps to contact leads.
-   **[Create a Route](atlas.en-us.maps_developer_guide.meta/maps_developer_guide/maps_apex_createroute.htm)**
    The CreateRoute() Apex method creates a record that includes a list of waypoints that reps access in Salesforce Maps. The record doesn't include a route between waypoints.
-   **[Create Routes for Specific Users](atlas.en-us.maps_developer_guide.meta/maps_developer_guide/maps_apex_startadvoptimizationusers.htm)**
    The StartAdvancedOptimizationForUsers() Apex method creates routes for users assigned to any active Salesforce Maps Advanced visit plan. Use this method to leverage Salesforce Maps Advanced visit planning from your custom workflow or app, such as a retail execution app. By using Apex, you can generate routes for reps automatically without having to make field reps click through the UI to manually generate routes.
-   **[Create Routes from Visit Plan](atlas.en-us.maps_developer_guide.meta/maps_developer_guide/maps_apex_startadvoptimizationvisit.htm)**
    The StartAdvancedOptimizationForVisitPlan() Apex method creates routes for all users assigned to a Salesforce Maps Advanced visit plan. Use this method to leverage Salesforce Maps Advanced visit planning from your custom workflow or app, such as a retail execution app. By using Apex, you can generate routes for reps automatically without having to make field reps click through the UI to manually generate routes.
-   **[Get a Route](atlas.en-us.maps_developer_guide.meta/maps_developer_guide/maps_apex_getroute.htm)**
    The getRoute() Apex method returns a route between two or more waypoints for the specified mode of transportation. The travel time depends on the mode of transportation. The route appears in Salesforce Maps for the users who requested the route, such as a delivery truck driver and the admin. This method doesn’t optimize the route. Instead, it finds a route between the waypoints in entered sequence.
-   **[Get the Boundary Information](atlas.en-us.maps_developer_guide.meta/maps_developer_guide/maps_apex_getboundaryinformation.htm)**
    The GetBoundaryInformation() Apex method returns geographical IDs of locations that fit the specified search criteria.
-   **[Get the Distance Matrix](atlas.en-us.maps_developer_guide.meta/maps_developer_guide/maps_apex_getdistancematrix.htm)**
    The GetDistanceMatrix() Apex method takes a set of locations and returns the estimated travel distance in meters and the time in seconds between the locations.
-   **[Get the Geographical Coordinates of an Address](atlas.en-us.maps_developer_guide.meta/maps_developer_guide/maps_apex_geocode.htm)**
    The Geocode() Apex method takes a single address and returns the geographical coordinates and the formatted address.
-   **[Get the Geographical Coordinates of Addresses in Batch](atlas.en-us.maps_developer_guide.meta/maps_developer_guide/maps_apex_batchgeocode.htm)**
    The BatchGeocode() Apex method takes addresses and returns their geographical coordinates and formatted addresses.
-   **[Permanently Delete Datasets and Alignments](atlas.en-us.maps_developer_guide.meta/maps_developer_guide/maps_apex_docleanup.htm)**
    The DoCleanup() Apex method permanently removes, or cleans up, datasets and related alignments that a user already deleted using **Territory Planning Data Sets** or **Territory Planning Alignments** | **Delete** in the UI. Use this method to reduce object size and improve Territory Planning load time and performance.
-   **[Retrieve Data That Salesforce Maps Hosts](atlas.en-us.maps_developer_guide.meta/maps_developer_guide/maps_apex_gethosteddata.htm)**
    The GetHostedData() Apex method retrieves geographical IDs for properties and displays them in Salesforce Maps. We accomplish this retrieval in two requests while using the same method. The first request returns geographical IDs for properties that Salesforce Maps hosts for a specified area and filter criteria. The second request takes these geographical IDs and display parameters, such as legend and popup information, and displays them in Salesforce Maps.
-   **[Retrieve the Geographical Data of Country-Specific Shapes](atlas.en-us.maps_developer_guide.meta/maps_developer_guide/maps_apex_getboundarygeojson.htm)**
    The GetBoundaryGeoJSON() Apex method returns the geographical data, area, and perimeter for a list of geographical IDs.
-   **[Retrieve the Geographical Data of Polygons](atlas.en-us.maps_developer_guide.meta/maps_developer_guide/maps_apex_getpolygongeometry.htm)**
    The getPolygonGeometry() Apex method returns the geometric data, such as the area and perimeter, for the requested geographical shape or custom polygon.
-   **[Retrieve the Territories in Which the Records Reside](atlas.en-us.maps_developer_guide.meta/maps_developer_guide/maps_apex_pointinpolygon.htm)**
    The PointInPolygon() Apex method returns the territory shape in which each record resides. It reads in the geographical coordinates of one or more records and compares each against the surrounding territory shape. Review [Considerations for Retrieving Territory Shapes](https://help.salesforce.com/s/articleView?id=004388105&type=1&language=en_US "HTML (New Window)").

## Related Topics

- Assign Records to Owners Using an Assignment Plan (atlas.en-us.maps_developer_guide.meta/maps_developer_guide/maps_apex_assignrecords.htm)
- Create a Route (atlas.en-us.maps_developer_guide.meta/maps_developer_guide/maps_apex_createroute.htm)
- Create Routes for Specific Users (atlas.en-us.maps_developer_guide.meta/maps_developer_guide/maps_apex_startadvoptimizationusers.htm)
- Create Routes from Visit Plan (atlas.en-us.maps_developer_guide.meta/maps_developer_guide/maps_apex_startadvoptimizationvisit.htm)
- Get a Route (atlas.en-us.maps_developer_guide.meta/maps_developer_guide/maps_apex_getroute.htm)
- Get the Boundary Information (atlas.en-us.maps_developer_guide.meta/maps_developer_guide/maps_apex_getboundaryinformation.htm)
- Get the Distance Matrix (atlas.en-us.maps_developer_guide.meta/maps_developer_guide/maps_apex_getdistancematrix.htm)
- Get the Geographical Coordinates of an Address (atlas.en-us.maps_developer_guide.meta/maps_developer_guide/maps_apex_geocode.htm)
- Get the Geographical Coordinates of Addresses in Batch (atlas.en-us.maps_developer_guide.meta/maps_developer_guide/maps_apex_batchgeocode.htm)
- Permanently Delete Datasets and Alignments (atlas.en-us.maps_developer_guide.meta/maps_developer_guide/maps_apex_docleanup.htm)
