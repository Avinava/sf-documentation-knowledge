---
title: "Using Custom Marker Icons"
domain: pages
topic: using-custom-marker-icons
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:23.820Z
estimatedTokens: 562
keywords: [Custom, Marker, Icons, Visualforce, map, icon, functional, plain, differentiate, markers, add, detail, style, maps]
---

# Using Custom Marker Icons

> The Visualforce map marker icon
    is functional but plain. To differentiate markers and add detail or style to your maps, use
    custom map marker icons.

# Using Custom Marker Icons

The Visualforce map marker icon is functional but plain. To differentiate markers and add detail or style to your maps, use custom map marker icons.

To customize a marker’s icon, set the icon attribute to an absolute or fully qualified URL to the graphic to use. You can reference any image on the Web, for example, if your graphics are distributed in a CDN. You can also use graphics stored in a static resource. If you use images from a static resource, use the URLFOR() function to obtain the image URL. For example:

```

```

Use a common graphics format, such as PNG, GIF, or JPEG. The preferred marker size is 32 × 32 pixels. Other sizes are scaled, which doesn’t always produce ideal results.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

Visualforce maps can be resource-intensive which can cause memory issues within mobile browsers and the Salesforce app. Maps with many markers or large images used as custom markers can further increase memory consumption. If you plan to deploy Visualforce maps in pages that are used in mobile contexts, be sure to test those pages thoroughly.

This complete page illustrates using a custom marker to indicate an account’s location, and standard markers for the account’s contacts.

```

```

This code produces the following map.

![A map with markers and a custom marker icon](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fpages_maps_markers_custom.png&folder=pages)

To use different icons for markers added inside an iteration like <apex:repeat\>, use an expression related to the iteration variable to define the URL. One simple way is to use icons named for a lookup field on a record. Another approach is to provide the icon name in a custom formula field.

Here’s the previous <apex:repeat\> block with a variation that assumes the contact object has a custom field named “ContactType\_\_c” and that each contact type has a correspondingly named icon.

```

```

If you use a field to provide a critical part of the icon’s URL make sure that it always provides a usable value. For example, by making it a required field, or by ensuring a formula field provides a sensible default value.

## Code Examples

```
<apex:mapMarker title="{! Account.Name }" 
    position="{!Account.BillingStreet},{!Account.BillingCity},{!Account.BillingState}"
    icon="{! URLFOR($Resource.MapMarkers, 'moderntower.png') }" />
```

```
<apex:page standardController="Account">

  <!-- This page must be accessed with an Account Id in the URL. For example: 
       https://MyDomainName--c.vf.force.com/apex/AccountContacts?id=001D000000JRBet -->
  
  <apex:pageBlock >
    <apex:pageBlockSection title="Contacts For {! Account.Name }">
    
      <apex:dataList value="{! Account.Contacts }" var="contact">
        <apex:outputText value="{! contact.Name }" />
      </apex:dataList> 
      
      <apex:map width="600px" height="400px" mapType="roadmap"
  center="{!Account.BillingStreet},{!Account.BillingCity},{!Account.BillingState}">

      <!-- Add a CUSTOM map marker for the account itself -->
      <apex:mapMarker title="{! Account.Name }" 
  position="{!Account.BillingStreet},{!Account.BillingCity},{!Account.BillingState}"
       icon="{! URLFOR($Resource.MapMarkers, 'moderntower.png') }"/>
      
      <!-- Add STANDARD markers for the account's contacts -->
      <apex:repeat value="{! Account.Contacts }" var="ct">
        <apex:mapMarker title="{! ct.Name }" 
          position="{! ct.MailingStreet },{! ct.MailingCity },{! ct.MailingState }">
        </apex:mapMarker>
      </apex:repeat>

      </apex:map>
    
    </apex:pageBlockSection>
  </apex:pageBlock>
   
</apex:page>
```

```
<!-- Add CUSTOM markers for the account's contacts -->
    <apex:repeat value="{! Account.Contacts }" var="ct">
        <apex:mapMarker title="{! ct.Name }" 
          position="{! ct.MailingStreet },{! ct.MailingCity },{! ct.MailingState }"
          icon="{! URLFOR($Resource.MapMarkers, ct.ContactType__c + '.png') }">
        </apex:mapMarker>
    </apex:repeat>
```
