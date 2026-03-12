---
title: "apex:mapMarker"
domain: pages
topic: apexmapmarker
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:22.757Z
estimatedTokens: 582
keywords: [apex, mapMarker, marker, location, <apex, map>, Map, Contacts, Account, Attributes]
---

# apex:mapMarker

> Defines a marker to be displayed at a location on an <apex:map>.

# apex:mapMarker

Defines a marker to be displayed at a location on an <apex:map\>.

**Note:** This component must be enclosed within an <apex:map\> component. You can add up to 100 <apex:mapMarker\> components to a single map.

## Map of Contacts for an Account

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| icon | String | An absolute or fully qualified URL of the icon to be displayed for this marker. If you use images from a static resource, use the URLFOR() function to obtain the image URL. |  | 34.0 |  |
| id | String | An identifier that allows other components in the page to reference this component. |  | 32.0 | global |
| position | Object | Specifies the location of the marker. There are several ways to define the location:A string representing an address. For example, "1 Market Street, San Francisco, CA". The address is automatically geocoded to determine its actual latitude and longitude.A string representing a JSON object with latitude and longitude attributes that specify location coordinates. For example, "{latitude: 37.794, longitude: -122.395}".An Apex map object of type Map<String, Double>, with latitude and longitude keys to specify location coordinates.Note: You can have up to 10 geocoded address lookups per map. Lookups for both the center attribute of the <apex:map> component and the position attribute of the <apex:mapMarker> component count against this limit. To display more markers, provide position values that don't require geocoding. Locations that exceed the geocoding limit are skipped. | Yes | 32.0 |  |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 32.0 |  |
| title | String | Text to display when the user's cursor moves over the marker. That is, when the marker's mouseover event is triggered. |  | 32.0 |  |

#### See Also

-   [apex:map](atlas.en-us.pages.meta/pages/pages_compref_map.htm)

-   [Adding Location Markers to a Map](atlas.en-us.pages.meta/pages/pages_maps_markers.htm "You can add markers to a map to represent specific locations using the <apex:mapMarker> component. You can include text that displays when a pointer hovers over the marker.")

## Code Examples

```
<apex:page standardController="Account">

  <!-- This page must be accessed with an Account Id in the URL. For example: 
       https://MyDomainName--c.vf.force.com/apex/NearbyContacts?id=001D000000JRBet -->
  
  <apex:pageBlock >
    <apex:pageBlockSection title="Contacts For {! Account.Name }">
    
     <apex:dataList value="{! Account.Contacts }" var="contact">
       <apex:outputText value="{! contact.Name }" />
     </apex:dataList> 
    
    </apex:pageBlockSection>
  </apex:pageBlock>
   
  <apex:map width="600px" height="400px" mapType="roadmap"
    center="{!Account.BillingStreet},{!Account.BillingCity},{!Account.BillingState}">

    <apex:repeat value="{! Account.Contacts }" var="contact">
    <apex:mapMarker title="{! contact.Name }"
    position="{!contact.MailingStreet},{!contact.MailingCity},{!contact.MailingState}"
    />
    </apex:repeat>

  </apex:map>

</apex:page>
```

## Related Topics

- apex:map (atlas.en-us.pages.meta/pages/pages_compref_map.htm)
- Adding Location Markers to a Map (atlas.en-us.pages.meta/pages/pages_maps_markers.htm)
