---
title: "Adding Location Markers to a Map"
domain: pages
topic: adding-location-markers-to-a-map
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:23.816Z
estimatedTokens: 698
keywords: [Adding, Location, Markers, Map, add, represent, specific, locations, <apex, mapMarker>, component, include, text, displays, pointer]
---

# Adding Location Markers to a Map

> You can add markers to a map to represent specific locations using the <apex:mapMarker> component. You can include text that
    displays when a pointer hovers over the marker.

# Adding Location Markers to a Map

You can add markers to a map to represent specific locations using the <apex:mapMarker\> component. You can include text that displays when a pointer hovers over the marker.

To place a marker on a map, add an <apex:mapMarker\> component as a child of the associated <apex:map\>. You specify the marker’s location with the position attribute. Optionally, use the title attribute to display text when the pointer hovers over the marker.

You can add up to 100 markers to a map. Use an <apex:repeat\> iteration component to add multiple markers from a collection or list.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

Visualforce maps can be resource-intensive which can cause memory issues within mobile browsers and the Salesforce app. Maps with many markers or large images used as custom markers can further increase memory consumption. If you plan to deploy Visualforce maps in pages that are used in mobile contexts, be sure to test those pages thoroughly.

The position attribute defines the point on the map to place the marker. You can provide position values in several formats.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

You can have up to 10 geocoded address lookups per map. Lookups for both the center attribute of the <apex:map\> component and the position attribute of the <apex:mapMarker\> component count against this limit. To display more markers, provide position values that don’t require geocoding. Locations that exceed the geocoding limit are skipped.

-   A string that represents an address. For example, "1 Market Street, San Francisco, CA". The address is geocoded to determine its latitude and longitude.
-   A string that represents a JSON object with latitude and longitude attributes that specify location coordinates. For example, "{latitude: 37.794, longitude: -122.395}".
-   An Apex map object of type Map<String, Double\>, with latitude and longitude keys to specify location coordinates.

Here’s a page that shows a list of contacts for an account, centered on the account’s address.

```

```

This code produces the following map.

![A map with markers](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fpages_maps_markers.png&folder=pages)

Notice the following in this example.

-   The center and position attributes are passed as a Visualforce expression that concatenates address elements to provide an address string that can be geocoded.
-   Because this page uses geocoding for the addresses, it displays only the first nine contacts. The center attribute of <apex:map\> uses one geocoding lookup as part of the 10 allowed. (In the illustration, the account has only three contacts.)

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
    
  <apex:map width="600px" height="400px" mapType="roadmap"
    center="{!Account.BillingStreet},{!Account.BillingCity},{!Account.BillingState}">

    <apex:repeat value="{! Account.Contacts }" var="contact">
    <apex:mapMarker title="{! contact.Name }"
       position="{!contact.MailingStreet},{!contact.MailingCity},{!contact.MailingState}"
    />
    </apex:repeat>

  </apex:map>

    </apex:pageBlockSection>
  </apex:pageBlock>

</apex:page>
```
