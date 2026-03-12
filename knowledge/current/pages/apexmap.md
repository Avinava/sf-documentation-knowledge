---
title: "apex:map"
domain: pages
topic: apexmap
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:22.744Z
estimatedTokens: 1022
keywords: [apex, map, Display, interactive, JavaScript-based, zooming, panning, markers, Salesforce, data, Street, Showing, Account, Location, Attributes]
---

# apex:map

> Display an interactive, JavaScript-based map, complete with zooming, panning, and markers based on your Salesforce or other data.

# apex:map

Display an interactive, JavaScript-based map, complete with zooming, panning, and markers based on your Salesforce or other data.

<apex:map\> doesn't, by itself, display map markers, even for the center point. To display up to 100 markers, add child <apex:mapMarker\> components.

## Street Map Showing an Account Location

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| center | Object | Specifies the location of the map center. There are several ways to define the center:A string representing an address. For example, "1 Market Street, San Francisco, CA". The address is automatically geocoded to determine its actual latitude and longitude.A string representing a JSON object with latitude and longitude attributes that specify location coordinates. For example, "{latitude: 37.794, longitude: -122.395}".An Apex map object of type Map<String, Double>, with latitude and longitude keys to specify location coordinates.This attribute is required if <apex:map> doesn't have any child <apex:mapMarker> tags.When center isn't set, the map is centered to display all the markers. |  | 32.0 |  |
| height | String | The height of the map, expressed either as a percentage of the available vertical space (for example, height="50%"), or as a number of pixels (for example, height="200px").Note: This value is passed through to the generated HTML for the map. If you provide an invalid value, your map might not render. | Yes | 32.0 |  |
| id | String | An identifier that allows other components in the page to reference this component. |  | 32.0 | global |
| mapType | String | The type of map to display. Must be one of the following:hybridroadmapsatelliteIf not specified, this value defaults to roadmap. |  | 32.0 |  |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 32.0 |  |
| scrollBasedZooming | Boolean | A Boolean value that specifies whether zooming via scroll wheel is enabled on the map. If not specified, this value defaults to true. |  | 37.0 |  |
| showOnlyActiveInfoWindow | Boolean | A Boolean value that specifies whether multiple info windows can be displayed on the map at the same time. If not specified, this value defaults to true and only one info window is displayed at a time. That is, when you click another marker, the first info window disappears and the new info window appears. |  | 34.0 |  |
| width | String | The width of the map, expressed either as a percentage of the available horizontal space (for example, width="50%"), or as a number of pixels (for example, width="200px").Note: This value is passed through to the generated HTML for the map. If you provide an invalid value, your map might not render. | Yes | 32.0 |  |
| zoomLevel | Integer | The initial map zoom level, defined as integer from 0 to 18. Higher values are more completely zoomed in.When child <apex:mapMarker> tags are present and zoomLevel isn't set, the map is zoomed and centered to display all of the markers. If not specified and there are no markers, the default value is 15. |  | 32.0 |  |

#### See Also

-   [apex:mapMarker](atlas.en-us.pages.meta/pages/pages_compref_mapMarker.htm)

-   [Creating Maps with Visualforce](atlas.en-us.pages.meta/pages/pages_maps.htm "Maps communicate information more clearly than mere location data. Visualforce mapping components make it simple to create maps that use third-party mapping services. Visualforce maps are interactive, JavaScript-based maps, complete with zooming, panning, and markers based on your Salesforce or other data. Create standalone map pages, maps that you can insert into page layouts, and even mobile maps for the Salesforce app.")

-   [Creating Basic Maps](atlas.en-us.pages.meta/pages/pages_maps_basic.htm "A basic map without markers requires only an <apex:map> component. This component defines the map’s basic canvas, including its dimensions, location, and initial zoom level.")

## Code Examples

```
<apex:page standardController="Account">

  <!-- This page must be accessed with an Account Id in the URL. For example: 
       https://MyDomainName--c.vf.force.com/apex/AccountLocation?id=001D000000JRBet -->
  
  <apex:pageBlock >
    <apex:pageBlockSection title="{! Account.Name } Location">
    
    <!-- Display the text version of the address -->
    <apex:outputPanel >
        <apex:outputField value="{!Account.BillingStreet}"/><br/>
        <apex:outputField value="{!Account.BillingCity}"/>, &nbsp;
        <apex:outputField value="{!Account.BillingState}"/> &nbsp;
        <apex:outputField value="{!Account.BillingPostalCode}"/><br/>
        <apex:outputField value="{!Account.BillingCountry}"/>
    </apex:outputPanel>
        
    <!-- Display the address on a map -->
    <apex:map width="600px" height="400px" mapType="roadmap" zoomLevel="17"
    center="{!Account.BillingStreet},{!Account.BillingCity},{!Account.BillingState}">
    </apex:map>
    
    </apex:pageBlockSection>
  </apex:pageBlock>
   
</apex:page>
```

## Related Topics

- apex:mapMarker (atlas.en-us.pages.meta/pages/pages_compref_mapMarker.htm)
- Creating Maps with Visualforce (atlas.en-us.pages.meta/pages/pages_maps.htm)
- Creating Basic Maps (atlas.en-us.pages.meta/pages/pages_maps_basic.htm)
