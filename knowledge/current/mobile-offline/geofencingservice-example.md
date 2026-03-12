---
title: "GeofencingService Example"
domain: mobile-offline
topic: geofencingservice-example
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:56.978Z
estimatedTokens: 153
keywords: [GeofencingService, Here’s, basic, Lightning, web, component, uses, device’s, biometrics, capabilities, verify, device, ownership]
---

# GeofencingService Example

> Here’s a basic example of a Lightning web component that uses a device’s biometrics
    capabilities to verify device ownership.

# GeofencingService Example

Here’s a basic example of a Lightning web component that uses a device’s biometrics capabilities to verify device ownership.

Here’s a basic example of a Lightning web component that uses GeofencingService to monitor and determine when a user arrives or departs a geographic region.

```

```

#### See Also

-   [Use the GeofencingService API](atlas.en-us.mobile_offline.meta/mobile_offline/use_geofencingservice_in_a_lightning_component.htm "To develop a Lightning web component with location-based features for creating and monitoring geofences, use the GeofencingService API.")

## Code Examples

```
<template>
   <lightning-card title="Geofencing Service" icon-name="custom:custom14">
       <div class="slds-var-m-around_medium">
           <p><lightning-formatted-text value={geofencingResults}></lightning-formatted-text></p>
           <div class="slds-var-m-around_medium">
               <p>Create an entry and exit geofence at the Salesforce Tower:</p>
               <lightning-button variant="brand" label="Add Geofences"
                   title="Add Geofences to SF Tower"
                   onclick={addGeofence}
                   class="slds-var-m-around_x-small"
                   disabled={geofencingServiceDisabled}>
               </lightning-button>
           </div>
           <div class="slds-var-m-around_medium">
               <p><lightning-formatted-text value={geofencingAddedResults}></lightning-formatted-text></p> 
           </div>
       </div>
       <div class="slds-var-m-around_medium">
           <div class="slds-var-m-around_medium">
               <p>Remove all active geofences:</p>
               <lightning-button variant="brand" label="Remove All Geofences"
                   title="Remove all geofences"
                   onclick={removeGeofences}
                   class="slds-var-m-around_x-small"
                   disabled={geofencingServiceDisabled}>
               </lightning-button>
           </div>
           <div class="slds-var-m-around_medium">
               <p><lightning-formatted-text value={removeGeofencesResults}></lightning-formatted-text></p> 
           </div>
       </div>
       <div class="slds-var-m-around_medium">
           <div class="slds-var-m-around_medium">
               <p>Get list of all active geofences:</p>
               <lightning-button variant="brand" label="Get Active Geofences"
                   title="Get active geofences"
                   onclick={getActiveGeofences}
                   class="slds-var-m-around_x-small"
                   disabled={geofencingServiceDisabled}>
               </lightning-button>
           </div>
           <div class="slds-var-m-around_medium">
               <p><lightning-formatted-text value={activeGeofencesResults}></lightning-formatted-text></p> 
               <ul class="slds-var-m-around_medium">
                   <template for:each={activeGeofences} for:item="geofence">
                       <li key={geofence}>{geofence}</li>
                   </template>
               </ul>        
           </div>
       </div>
   </lightning-card>   
</template>
```

## Related Topics

- Use the GeofencingService API (atlas.en-us.mobile_offline.meta/mobile_offline/use_geofencingservice_in_a_lightning_component.htm)
