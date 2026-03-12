---
title: "Add a Geocode to a Custom Address Field"
domain: caf-dev-guide
topic: add-a-geocode-to-a-custom-address-field
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:09.230Z
estimatedTokens: 408
keywords: [Add, Geocode, Custom, Address, geocodes, differs, standard, give, users, precise, geographical, Apex, Visualforce, map, API]
---

# Add a Geocode to a Custom Address Field

> The method to get geocodes differs between standard and custom address fields. To give
    your users precise geographical information, add geocode information to a custom address field
    with Apex, Visualforce, and a map API.

# Add a Geocode to a Custom Address Field

The method to get geocodes differs between standard and custom address fields. To give your users precise geographical information, add geocode information to a custom address field with Apex, Visualforce, and a map API.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: all editions |

| User Permissions Needed |
| --- |
| To modify user interface settings: | Customize Application |

1.  Create an Apex class that retrieves latitude and longitude from your preferred map API. This example calls the Google Map API as defined in the String variable endpoint.

    ```

    ```

2.  Create a Visualforce page that triggers the geocode service from the map API.

    ```

    ```

3.  On the Visualforce page, click **Get GeoCode For Custom Address Field** to trigger the code. To see the latitude and longitude values populated, query the account information in Developer Console.

    ![Query results in Developer Console.](/docs/resources/img/en-us/260.0?doc_id=caf%2Fimages%2Fcaf_dev_geocode_post_query.png&folder=caf_dev_guide)


To automate the process of updating custom address fields with latitude and longitude, set up a trigger to invoke the Apex class.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=caf_dev_guide)

#### Note

The example in this topic uses a third-party map API to retrieve latitude and longitude. Using a Salesforce trigger to invoke this Apex class calls the map API each time the class is invoked. This action can result in charges from your API provider.

## Code Examples

```apex
public class GeoCodeExample {
    @future(callout=true)
    public static void parseJSONResponse() {  
        double lat;
        double lng;
        String city = null;
        String street = null;
           String stateCode = null; 
        String countryCode = null;
        
        Account record = [SELECT Mailing_Address__c FROM Account WHERE Id = 'Account ID'];
        Address customAddress = record.Mailing_Address__c;
        
        //Remove white spaces from address components
        if(customAddress.getCity() != null){
             city = customAddress.getCity().deleteWhitespace();
        }
        if(customAddress.getStreet() != null){
             street = customAddress.getStreet().deleteWhitespace();
        }
        if(customAddress.getStateCode() != null){
             stateCode = customAddress.getStateCode();
        }
        if(customAddress.getCountryCode() != null){
             countryCode = customAddress.getCountryCode();
        }    
        
        //concatenate strings
        String address = street+city+stateCode+countryCode;
        
        String key='API key';
        Http httpProtocol = new Http();
        // Create HTTP request to send.
        HttpRequest request = new HttpRequest();
        // Set the endpoint URL.
        // USING GOOGLE MAP API 
        String endpoint = 'https://maps.googleapis.com/maps/api/geocode/json?address='+address+'&key='+key;
        request.setEndPoint(endpoint);
        // Set the HTTP verb to GET.
        request.setMethod('GET');
        // Send the HTTP request and get the response.
        // The response is in JSON format.
        HttpResponse response = httpProtocol.send(request);
      
       // Parse JSON response to get all the totalPrice field values.
        JSONParser parser = JSON.createParser(response.getBody());
        
        while (parser.nextToken() != null) {
            if ((parser.getCurrentToken() == JSONToken.FIELD_NAME) && 
                (parser.getText() == 'lat')) {
                parser.nextToken();
                // Get latitude
                lat = parser.getDoubleValue();
           
                parser.nextToken();
                parser.nextToken();
                //Get longitude    
                lng = parser.getDoubleValue();
                 } 
              }
        // Update lat long of account record
        record.Mailing_Address__Latitude__s=lat;
        record.Mailing_Address__Longitude__s=lng;
        update record;
    }
}
```

```
<apex:page id="pg" controller="GeoCodeExample">
<apex:form >
    <apex:pageBlock id="pb">
        <apex:pageBlockButtons >
            <apex:commandButton value="Get GeoCode For Custom Address Field" 
            action="{!parseJSONResponse}"/>
        </apex:pageBlockButtons>
    </apex:pageBlock>
</apex:form>
</apex:page>
```
