---
title: "getDisplayLocation()"
domain: apex-reference
topic: getdisplaylocation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:19.350Z
estimatedTokens: 306
keywords: [getDisplayLocation, Retrieves, display, location, where, canvas, app, being, called, from., example, Visualforce, page., Usage]
---

# getDisplayLocation()

> Retrieves the display location where
the canvas app is being called from. For example, a value of Visualforce page.

# getDisplayLocation()

Retrieves the display location where the canvas app is being called from. For example, a value of Visualforce page.

## Signature

public String getDisplayLocation()

## Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The return value can be one of the following strings:

-   Chatter—The canvas app was called from the Chatter tab.
-   ChatterFeed—The canvas app was called from a Chatter canvas feed item.
-   MobileNav—The canvas app was called from the navigation menu.
-   OpenCTI—The canvas app was called from an Open CTI component.
-   PageLayout—The canvas app was called from an element within a page layout. If the displayLocation is PageLayout, one of the subLocation values might be returned.
-   Publisher—The canvas app was called from a canvas custom quick action.
-   ServiceDesk—The canvas app was called from a Salesforce Console component.
-   Visualforce—The canvas app was called from a Visualforce page.
-   None—The canvas app was called from the Canvas App Previewer.

## Usage

Use this method to obtain the display location for the canvas app.

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
