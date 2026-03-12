---
title: "apex:mapInfoWindow"
domain: pages
topic: apexmapinfowindow
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:22.751Z
estimatedTokens: 407
keywords: [apex, mapInfoWindow, info, window, marker, location, <apex, map>, mapInfoWindow>, component, users, click, tap, Visualforce, markup]
---

# apex:mapInfoWindow

> Defines an info window for the marker displayed at a location on an <apex:map>. The body of the <apex:mapInfoWindow> component is displayed in the info window when users click or tap the marker. The body of the <apex:mapInfoWindow> can be Visualforce markup, HTML and CSS, or even plain text.

# apex:mapInfoWindow

Defines an info window for the marker displayed at a location on an <apex:map\>. The body of the <apex:mapInfoWindow\> component is displayed in the info window when users click or tap the marker. The body of the <apex:mapInfoWindow\> can be Visualforce markup, HTML and CSS, or even plain text.

By default only one info window displays at a time. That is, when you click another marker, the first info window disappears and the new info window appears. To display multiple info windows at once, set showOnlyActiveInfoWindow to false on the containing <apex:map\> component.

**Note:** This component must be enclosed within an <apex:mapMarker\> component.

## Map of Contacts for an Account

```

```

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| id | String | An identifier that allows other components in the page to reference this component. |  | 34.0 | global |
| maxWidth | Integer | Maximum width of the info window, regardless of content's width. |  | 34.0 |  |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 34.0 |  |

#### See Also

-   [apex:map](atlas.en-us.pages.meta/pages/pages_compref_map.htm)

-   [apex:mapMarker](atlas.en-us.pages.meta/pages/pages_compref_mapMarker.htm)

-   [Adding Info Windows to Markers](atlas.en-us.pages.meta/pages/pages_maps_info_windows.htm "Info windows allow you to show extra details on a map. Info windows appear when a user clicks or taps the marker.")

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
    position="{!contact.MailingStreet},{!contact.MailingCity},{!contact.MailingState}">
    	<apex:mapInfoWindow>
    		<apex:outputPanel layout="block" style="font-weight: bold;">
    			<apex:outputText>{! contact.Name }</apex:outputText>
    		</apex:outputPanel>
    		<apex:outputPanel layout="block">
    			<apex:outputText>
            {!contact.MailingStreet},{!contact.MailingCity},{!contact.MailingState}
          </apex:outputText>
    		</apex:outputPanel>     		
    	</apex:mapInfoWindow>
    </apex:mapMarker>
    </apex:repeat>

  </apex:map>

</apex:page>
```

## Related Topics

- apex:map (atlas.en-us.pages.meta/pages/pages_compref_map.htm)
- apex:mapMarker (atlas.en-us.pages.meta/pages/pages_compref_mapMarker.htm)
- Adding Info Windows to Markers (atlas.en-us.pages.meta/pages/pages_maps_info_windows.htm)
