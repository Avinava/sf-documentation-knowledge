---
title: "Example of Building Map Data in Apex"
domain: pages
topic: example-of-building-map-data-in-apex
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:23.805Z
estimatedTokens: 794
keywords: [Building, Map, Data, Apex, Construct, location, perform, custom, query, search, nearby, locations, filter, transform, results]
---

# Example of Building Map Data in Apex

> Construct your location data in Apex to perform a custom query, search for nearby
        locations, filter or transform results, or when you can’t use the results returned by a Visualforce standard
        controller.

# Example of Building Map Data in Apex

Construct your location data in Apex to perform a custom query, search for nearby locations, filter or transform results, or when you can’t use the results returned by a Visualforce standard controller.

Apex code gives you complete control over the results that are returned and used for the map and markers. You can also use Apex to return results that are from outside Salesforce.

This page displays up to 10 warehouses nearest the user’s location.

```

```

This code produces the following map.

![A map that uses data provided from Apex](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fpages%2Fimages%2Fpages_maps_apex_example.png&folder=pages)

This page has three important sections.

-   The JavaScript block at the beginning illustrates how you can access the browser’s built-in ability to ask for the user’s current location. This code updates a visible form field. However, you can easily use a hidden form field instead to avoid showing the raw latitude and longitude with its unlikely level of precision.
-   The first <apex:pageBlockSection\> contains a short form for submitting the user’s location in the POSTBACK request. For illustration purposes it’s visible and requires a click, but that’s not required.
-   In the second <apex:pageBlockSection\>, the map itself is simple, requiring only five lines of code. All the complexity is in the {!locations} expression, which accesses a property in the Apex controller.

    Note the use of the rendered attribute, which takes the value of the {!resultsAvailable} expression. This expression is another Apex property, and using it with the rendered attribute hides the map section when locations aren’t available to place on the map.


Here’s the Apex controller that supports the previous page.

```

```

Take a few minutes to learn more about this controller and how it works with the Visualforce page.

-   The locations property is a list of Map<String,Double\> elements. This list holds the location data in a format that’s directly usable by the <apex:mapMarker\> component.
-   The currentPosition property captures the position information that’s submitted from the page’s form. This property also ensures that if the form submission is empty, a valid default value is provided. (A more robust implementation would do more error checking on the form input.)
-   The resultsAvailable property, noted in the earlier description of the Visualforce markup.
-   The findNearby action method is called when the **Go!** <apex:commandButton\> is pressed. This method does all the work, executing a custom SOQL query and massaging the results into the locations property format.

If you want to use the title attribute of <apex:mapMarker\> to provide additional information (for example, the name of the warehouse), you have several options. If your method is returning sObjects, you can reference the appropriate fields in your Visualforce markup. If you’re creating new objects directly, as we are here, you can create an inner class that combines the location map object with the title string. You then return a collection of the inner class objects to the page.

## Code Examples

```
<apex:page controller="FindNearbyController" docType="html-5.0" >

    <!-- JavaScript to get the user's current location, and pre-fill
         the currentPosition form field. -->
    <script type="text/javascript">
        // Get location, fill in search field
    	function setUserLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(loc){
                    var latlon = loc.coords.latitude + "," + loc.coords.longitude;
                    var el = document.querySelector("input.currentPosition");
                    el.value = latlon;
                });
            }
        }
        // Only set the user location once the page is ready
    	var readyStateCheckInterval = setInterval(function() {
    		if (document.readyState === "interactive") {
        		clearInterval(readyStateCheckInterval);
        		setUserLocation();
    		}
		}, 10);
    </script>
    
    <apex:pageBlock >
        <!-- Form field to send currentPosition in request. You can make it
             an <apex:inputHidden> field to hide it. -->
        <apex:pageBlockSection >
            <apex:form >
                <apex:outputLabel for="currentPosition">Find Nearby</apex:outputLabel> 
                <apex:input size="30" 
                     html-placeholder="Attempting to obtain your position..."
                     id="currentPosition" styleClass="currentPosition" 
                     value="{!currentPosition}" />
                <apex:commandButton action="{!findNearby}" value="Go!"/>
            </apex:form>
        </apex:pageBlockSection>
        
        <!-- Map of the results -->
        <apex:pageBlockSection rendered="{!resultsAvailable}" title="Locations">
            <apex:map width="600px" height="400px">
                <apex:repeat value="{!locations}" var="pos">
                    <apex:mapMarker position="{!pos}"/>
                </apex:repeat>
            </apex:map>
        </apex:pageBlockSection>

    </apex:pageBlock>

</apex:page>
```

```apex
public with sharing class FindNearbyController {

    public List<Map<String,Double>> locations { get; private set; }

    public String currentPosition { 
        get {
            if (String.isBlank(currentPosition)) {
                currentPosition = '37.77493,-122.419416'; // San Francisco
            }
            return currentPosition;
        }
        set; 
    }
    
    public Boolean resultsAvailable {
        get {
            if(locations == Null) {
                return false;
            }
            return true;
        }
    }
    
    public PageReference findNearby() {
        String lat, lon;

        // FRAGILE: You'll want a better lat/long parsing routine
        // Format: "<latitude>,<longitude>" (must have comma, but only one comma)
        List<String> latlon = currentPosition.split(',');
        lat = latlon[0].trim();
        lon = latlon[1].trim();

        // SOQL query to get the nearest warehouses
        String queryString =
           'SELECT Id, Name, Location__longitude__s, Location__latitude__s ' +
           'FROM Warehouse__c ' +
           'WHERE DISTANCE(Location__c, GEOLOCATION('+lat+','+lon+'), \'mi\') < 20 ' +
           'ORDER BY DISTANCE(Location__c, GEOLOCATION('+lat+','+lon+'), \'mi\') ' +
           'LIMIT 10';

        // Run the query
        List <Warehouse__c> warehouses = database.Query(queryString);
        
        if(0 < warehouses.size()) {
            // Convert to locations that can be mapped
            locations = new List<Map<String,Double>>();
            for (Warehouse__c wh : warehouses) {
                locations.add(
                    new Map<String,Double>{
                        'latitude' => wh.Location__latitude__s, 
                        'longitude' => wh.Location__longitude__s
                    }
                );
            }
        }
        else {
            System.debug('No results. Query: ' + queryString);
        }
                
        return null;
    }
}
```
