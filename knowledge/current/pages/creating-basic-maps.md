---
title: "Creating Basic Maps"
domain: pages
topic: creating-basic-maps
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:23.799Z
estimatedTokens: 456
keywords: [Creating, Basic, Maps, map, markers, requires, <apex, map>, component, map’s, canvas, including, dimensions, location, initial]
---

# Creating Basic Maps

> A basic map without markers requires only an <apex:map> component. This component defines the map’s basic canvas, including its
  dimensions, location, and initial zoom level.

# Creating Basic Maps

A basic map without markers requires only an <apex:map\> component. This component defines the map’s basic canvas, including its dimensions, location, and initial zoom level.

The center attribute defines the point around which the map is centered. You can provide center values in several formats.

-   A string that represents an address. For example, "1 Market Street, San Francisco, CA". The address is geocoded to determine its latitude and longitude.
-   A string that represents a JSON object with latitude and longitude attributes that specify location coordinates. For example, "{latitude: 37.794, longitude: -122.395}".
-   An Apex map object of type Map<String, Double\>, with latitude and longitude keys to specify location coordinates.

If <apex:map\> doesn’t have child <apex:mapMarker\> tags, the center attribute is required.

This simple street map displays the neighborhood around Salesforce’s San Francisco headquarters.

```

```

This code produces the following map.

![A basic Visualforce map](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fpages_maps_basic_map.png&folder=pages)

Notice the following in this example.

-   The mapped address has no marker. The <apex:map\> component doesn’t, by itself, display map markers, even for the center point. To display up to 100 markers, add child <apex:mapMarker\> components.
-   The map’s center location value is provided as a street address, not a geolocation. The mapping service looks up the latitude and longitude for the address. This process is called geocoding. You can include up to 10 geocoded addresses to a map, either as center attributes or as markers added with <apex:mapMarker\> components.
-   The mapType value is “roadmap”, a standard street map. Other options are “satellite” and “hybrid”.

## Code Examples

```
<apex:page >

    <h1>Salesforce in San Francisco</h1>
  
    <!-- Display the address on a map -->
    <apex:map width="600px" height="400px" mapType="roadmap" zoomLevel="16"
        center="One Market Street, San Francisco, CA">
    </apex:map>
    
</apex:page>
```
