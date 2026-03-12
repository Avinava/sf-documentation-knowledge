---
title: "Creating Maps with Visualforce"
domain: pages
topic: creating-maps-with-visualforce
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:23.794Z
estimatedTokens: 990
keywords: [Creating, Maps, Visualforce, communicate, clearly, mere, location, data, mapping, components, simple, third-party, services, interactive, JavaScript-based]
---

# Creating Maps with Visualforce

> Maps communicate information more clearly than mere
   location data. Visualforce mapping
   components make it simple to create maps that use third-party mapping services. Visualforce maps are interactive,
   JavaScript-based maps, complete with zooming, panning, and markers based on your Salesforce or other data. Create standalone
   map pages, maps that you can insert into page layouts, and even mobile maps for the Salesforce
   app.

# Creating Maps with Visualforce

Maps communicate information more clearly than mere location data. Visualforce mapping components make it simple to create maps that use third-party mapping services. Visualforce maps are interactive, JavaScript-based maps, complete with zooming, panning, and markers based on your Salesforce or other data. Create standalone map pages, maps that you can insert into page layouts, and even mobile maps for the Salesforce app.

Visualforce provides a set of related mapping components. The <apex:map\> component defines the map canvas, including size, type, center point, and initial zoom level. The <apex:mapMarker\> child component defines the markers to place on the map by address or geolocation (latitude and longitude). You can use the <apex:mapInfoWindow\> component to add customizable information panels that appear when a marker is clicked or tapped.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

Visualforce mapping components aren’t available in Developer Edition organizations.

Maps that you define in Visualforce markup generate JavaScript code to render onto the page. This JavaScript connects to a mapping service and builds the map by fetching map tiles and placing markers. If your items to be mapped don’t have a latitude and longitude, Visualforce maps can geocode their addresses. After the map renders, your users can interact with the map by panning and zooming, just like they’re used to with other map sites. The effect is as if you wrote your own custom JavaScript to interact with a third-party mapping service, but without actually needing to write it. You define the map in Visualforce and get the mapping JavaScript for free.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=pages)

#### Important

Visualforce mapping components add JavaScript to your page, and use third-party JavaScript code to draw the map.

-   JavaScript added by Visualforce uses industry-standard best practices to avoid conflicts with other JavaScript executing on the same page. If your own JavaScript doesn’t also use best practices, it could conflict with the mapping code.
-   Addresses that need geocoding—that is, locations that don’t include values for latitude and longitude—are sent to a third-party service for geocoding. These addresses aren’t associated with your organization, and no other data is sent other than what you provide in your Visualforce markup. However, if your organization requires strict control of data shared outside of Salesforce, don’t use the geocoding feature of Visualforce maps.

-   **[Creating Basic Maps](atlas.en-us.pages.meta/pages/pages_maps_basic.htm)**
    A basic map without markers requires only an <apex:map\> component. This component defines the map’s basic canvas, including its dimensions, location, and initial zoom level.
-   **[Adding Location Markers to a Map](atlas.en-us.pages.meta/pages/pages_maps_markers.htm)**
    You can add markers to a map to represent specific locations using the <apex:mapMarker\> component. You can include text that displays when a pointer hovers over the marker.
-   **[Using Custom Marker Icons](atlas.en-us.pages.meta/pages/pages_maps_markers_custom.htm)**
    The Visualforce map marker icon is functional but plain. To differentiate markers and add detail or style to your maps, use custom map marker icons.
-   **[Adding Info Windows to Markers](atlas.en-us.pages.meta/pages/pages_maps_info_windows.htm)**
    Info windows allow you to show extra details on a map. Info windows appear when a user clicks or taps the marker.
-   **[Example of Building Map Data in Apex](atlas.en-us.pages.meta/pages/pages_maps_example.htm)**
    Construct your location data in Apex to perform a custom query, search for nearby locations, filter or transform results, or when you can’t use the results returned by a Visualforce standard controller.

## Related Topics

- Creating Basic Maps (atlas.en-us.pages.meta/pages/pages_maps_basic.htm)
- Adding Location Markers to a Map (atlas.en-us.pages.meta/pages/pages_maps_markers.htm)
- Using Custom Marker Icons (atlas.en-us.pages.meta/pages/pages_maps_markers_custom.htm)
- Adding Info Windows to Markers (atlas.en-us.pages.meta/pages/pages_maps_info_windows.htm)
- Example of Building Map Data in Apex (atlas.en-us.pages.meta/pages/pages_maps_example.htm)
