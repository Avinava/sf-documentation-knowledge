---
title: "Adding Info Windows to Markers"
domain: pages
topic: adding-info-windows-to-markers
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:23.811Z
estimatedTokens: 422
keywords: [Adding, Info, Windows, Markers, allow, show, extra, map, appear, user, clicks, taps, marker]
---

# Adding Info Windows to Markers

> Info windows allow you to show extra details on a map. Info windows appear when a user
    clicks or taps the marker.

# Adding Info Windows to Markers

Info windows allow you to show extra details on a map. Info windows appear when a user clicks or taps the marker.

The map marker title attribute lets you display a small amount of information when a user hovers over the marker. To display more information or have more control over how it’s formatted, use an info window instead of or in addition to the title attribute.

For example, you can display complete details for a contact’s address, formatted for optimal display. You can add a clickable telephone link or even display a profile photo for objects that have one.

To add an info window to a map marker, add an <apex:mapInfoWindow\> component as a child component of the associated <apex:mapMarker\>. The body of the <apex:mapInfoWindow\> component is displayed in the info window when users click or tap the marker, and can be Visualforce markup, HTML and CSS, or plain text.

This complete page uses Visualforce markup for the contents of the info window.

```

```

This code produces the following map.

![A map with markers displaying an info window](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fpages_maps_info_window.png&folder=pages)

By default, only one info window displays at a time. When you click another marker, the first info window closes, and the new info window opens. To display multiple info windows at once, set showOnlyActiveInfoWindow to false on the containing <apex:map\> component.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

Consider carefully the effect of displaying multiple info windows at once, because it can create a cluttered map.

## Code Examples

```
<apex:page standardController="Account">

  <!-- This page must be accessed with an Account Id in the URL. For example: 
       https://MyDomainName--c.vf.force.com/apex/AccountContactsCustomMarker?id=001D000000JRBet -->
  
  <apex:pageBlock >
    <apex:pageBlockSection title="Contacts For {! Account.Name }">
    
      <apex:dataList value="{! Account.Contacts }" var="contact">
        <apex:outputText value="{! contact.Name }" />
      </apex:dataList> 
      
      <apex:map width="600px" height="400px" mapType="roadmap"
  center="{!Account.BillingStreet},{!Account.BillingCity},{!Account.BillingState}">

      <!-- Add markers for account contacts -->
      <apex:repeat value="{! Account.Contacts }" var="ct">
        <apex:mapMarker title="{! ct.Name }" 
          position="{! ct.MailingStreet },{! ct.MailingCity },{! ct.MailingState }">

          <!-- Add info window with contact details -->
          <apex:mapInfoWindow >
            <apex:outputPanel layout="block" style="font-weight: bold;">
              <apex:outputText>{! ct.Name }</apex:outputText>
            </apex:outputPanel>

            <apex:outputPanel layout="block">
              <apex:outputText>{! ct.MailingStreet }</apex:outputText>
            </apex:outputPanel>               

            <apex:outputPanel layout="block">
              <apex:outputText>{! ct.MailingCity }, {! ct.MailingState }</apex:outputText>
            </apex:outputPanel>               

            <apex:outputPanel layout="block">
              <apex:outputLink value="{! 'tel://' + ct.Phone }">
                  <apex:outputText>{! ct.Phone }</apex:outputText>
              </apex:outputLink>
            </apex:outputPanel>               
          </apex:mapInfoWindow>

        </apex:mapMarker>
      </apex:repeat>

      </apex:map>
    
    </apex:pageBlockSection>
  </apex:pageBlock>
   
</apex:page>
```
