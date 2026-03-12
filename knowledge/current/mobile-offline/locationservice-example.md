---
title: "LocationService Example"
domain: mobile-offline
topic: locationservice-example
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:57.113Z
estimatedTokens: 316
keywords: [LocationService, Here’s, basic, Lightning, web, component, user’s, current, location, displays, map]
---

# LocationService Example

> Here’s a basic example of a Lightning web component that gets the user’s current
        location and displays it on a map.

# LocationService Example

Here’s a basic example of a Lightning web component that gets the user’s current location and displays it on a map.

The HTML template provides the bare minimum for a location-based interface. There’s an element to display the map, a bit of static help text, and a button to get the location. There are two interesting aspects of this template:

-   Disabling the Get Current Location button using the disabled attribute when not in a supported Salesforce mobile app. This attribute is set based on the results of isAvailable() when the component is initialized.
-   A spinner that indicates “indeterminate progress” while waiting for the current location request to resolve.

```

```

Once the current location is determined, we use the [lightning-map](https://developer.salesforce.com/docs/component-library/bundle/lightning-map/documentation) base component to display it. Each phase of the location request lifecycle writes a console message.

```

```

#### See Also

-   [Use the LocationService API](atlas.en-us.mobile_offline.meta/mobile_offline/use_locationservice_in_a_lightning_component.htm "To develop a Lightning web component with location-based features, use the LocationService API to determine the current location.")

## Code Examples

```
<!-- locationServiceExample.html -->
<template>
 
   <div class="slds-text-align_center">
       <span class="slds-text-heading_large">Where in the World Am I?</span>
   </div>
 
   <!-- After the current location is received,
        its value is displayed here: -->
   <template lwc:if={currentLocation}>
       <div class="slds-m-vertical_large slds-p-vertical_medium
                   slds-text-align_left slds-border_top slds-border_bottom">
          
           <!-- Current location as latitude and longitude -->
           Your current location is:
           <pre>{currentLocationAsString}</pre>
 
           <!-- Current location as a map -->
           <lightning-map map-markers={currentLocationAsMarker} zoom-level=16>
           </lightning-map>
       </div>
   </template>
 
   <!-- While request is processing, show spinner -->
   <div class="slds-m-around_large">
       <template lwc:if={requestInProgress}>
           <div class="slds-is-relative">
               <lightning-spinner
                   alternative-text="Getting location...">
               </lightning-spinner>
           </div>
       </template>
   </div>
 
   <!-- Static help text -->
   <div class="slds-text-align_center slds-text-color_weak slds-m-vertical_large">
       Click <strong>Get Current Location</strong> to see where you are.
   </div>
 
   <!-- The get-current-location button;
        Disabled if LocationService isn't available -->
   <div class="slds-align_absolute-center slds-m-vertical_large">
       <lightning-button
           variant="brand"
           disabled={locationButtonDisabled}
           icon-name="utility:target"
           label="Get Current Location"
           title="Use your device's GPS and other location sensors to determine your current location"
           onclick={handleGetCurrentLocationClick}>
       </lightning-button>
   </div>
</template>
```

```
// locationServiceExample.js
import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { getLocationService } from 'lightning/mobileCapabilities';
 
export default class LocationServiceExample extends LightningElement {
 
   // Internal component state
   myLocationService;
   currentLocation;
   locationButtonDisabled = false;
   requestInProgress = false;
 
   // When component is initialized, detect whether to enable Location button
   connectedCallback() {
       this.myLocationService = getLocationService();
       if (this.myLocationService == null || !this.myLocationService.isAvailable()) {
           this.locationButtonDisabled = true;
       }
   }
  
   handleGetCurrentLocationClick(event) {
       // Reset current location
       this.currentLocation = null;
 
       if(this.myLocationService != null && this.myLocationService.isAvailable()) {
 
           // Configure options for location request
           const locationOptions = {
               enableHighAccuracy: true
           }
 
           // Show an "indeterminate progress" spinner before we start the request
           this.requestInProgress = true;
 
           // Make the request
           // Uses anonymous function to handle results or errors
           this.myLocationService
               .getCurrentPosition(locationOptions)
               .then((result)  => {
                   this.currentLocation = result;
 
                   // result is a Location object
                   console.log(JSON.stringify(result));
 
                   this.dispatchEvent(
                       new ShowToastEvent({
                           title: 'Location Detected',
                           message: 'Location determined successfully.',
                           variant: 'success'
                       })
                   );
               })
               .catch((error) => {
                   // Handle errors here
                   console.error(error);
 
                   // Inform the user we ran into something unexpected
                   this.dispatchEvent(
                       new ShowToastEvent({
                           title: 'LocationService Error',
                           message:
                               'There was a problem locating you: ' +
                               JSON.stringify(error) +
                               ' Please try again.',
                           variant: 'error',
                           mode: 'sticky'
                       })
                   );
               })
               .finally(() => {
                   console.log('#finally');
                   // Remove the spinner
                   this.requestInProgress = false;
               });
       } else {
           // LocationService is not available
           // Not running on hardware with GPS, or some other context issue
           console.log('Get Location button should be disabled and unclickable. ');
           console.log('Somehow it got clicked: ');
           console.log(event);
 
           // Let user know they need to use a mobile phone with a GPS
           this.dispatchEvent(
               new ShowToastEvent({
                   title: 'LocationService Is Not Available',
                   message: 'Try again from the Salesforce app on a mobile device.',
                   variant: 'error'
               })
           );
       }
   }
 
   // Format LocationService result Location object as a simple string
   get currentLocationAsString() {
       return `Lat: ${this.currentLocation.coords.latitude}, Long: ${this.currentLocation.coords.longitude}`;
   }
 
   // Format Location object for use with lightning-map base component
   get currentLocationAsMarker() {
       return [{
           location: {
               Latitude: this.currentLocation.coords.latitude,
               Longitude: this.currentLocation.coords.longitude
           },
           title: 'My Location'
       }]
   }
}
```

## Related Topics

- Use the LocationService API (atlas.en-us.mobile_offline.meta/mobile_offline/use_locationservice_in_a_lightning_component.htm)
