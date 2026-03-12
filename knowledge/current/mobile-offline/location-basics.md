---
title: "Location Basics"
domain: mobile-offline
topic: location-basics
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:57.123Z
estimatedTokens: 367
keywords: [Location, Basics, surface, concept, simple, Salesforce, Tower, How, right, now, location-based, features, we’ve, mobile, devices]
---

# Location Basics

> On the surface, the concept of location is a simple one. Where am I? Where is Salesforce
  Tower? How do I get to Salesforce Tower from where I am right now? These are all location-based
  features, and we’ve been using them on mobile devices for many years. As a developer, the concept
  of location can be more complex.

# Location Basics

On the surface, the concept of location is a simple one. Where am I? Where is Salesforce Tower? How do I get to Salesforce Tower from where I am right now? These are all location-based features, and we’ve been using them on mobile devices for many years. As a developer, the concept of location can be more complex.

Location itself can be reduced to basic X,Y coordinates: a latitude and longitude, also known as a geolocation. For example, {37.7898007,-122.3991439} (the location of Salesforce HQ). But knowing the coordinates of Salesforce Tower doesn’t show you where it is on a map, or tell you where you are in relation to it, or how to get there. These are location-based features, but simple location is not enough to build them. It also requires map rendering, geocoding of street addresses, and route calculation, among other things.

LocationService is a simple API, with features inspired by the similar [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) available in web browsers. It provides a straightforward mechanism for getting the current geolocation of the physical device on which it runs. That’s it. For basic map display, combine LocationService with the [lightning-map](https://developer.salesforce.com/docs/component-library/bundle/lightning-map/documentation) component. For more complex mapping solutions, consider adding third-party libraries and services, such as Google Maps or Leaflet.
