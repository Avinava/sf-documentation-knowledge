---
title: "searchAndScreenPop() for Lightning Experience for
            Lightning Experience"
domain: api-cti
topic: searchandscreenpop-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.998Z
estimatedTokens: 1762
keywords: [searchAndScreenPop, Lightning, Experience, displays, matches, meet, softphone, layout, settings, However, search, screen, pops, regardless, objects]
---

# searchAndScreenPop() for Lightning Experience for
            Lightning Experience

> The returned response displays only matches that
                    meet your softphone layout settings. However, the search page that screen pops,
                    displays all matches, regardless of the objects you specify in your sofpthone
                    layout.

# searchAndScreenPop() for Lightning Experience for Lightning Experience

## Usage

Searches objects specified in the softphone layout for a given string. Returns search results and screen pops any matching records. This method respects screen pop settings defined in the softphone layout. This method is available in API version 38.0 or later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_cti)

#### Note

The returned response displays only matches that meet your softphone layout settings. However, the search page that screen pops, displays all matches, regardless of the objects you specify in your sofpthone layout.

The searchAndScreenPop() method for Lightning Experience works differently from the Salesforce Classic method.

-   Open CTI for Lightning Experience doesn’t support the softphone layout field Screen pops open within when the value is New browser window or tab. In Lightning Experience, the default value is Existing browser window.
-   Open CTI for Lightning Experience provides a new argument called deferred.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=api_cti)

#### Tip

The searchAndGetScreenPopUrl() method is not available in the Open CTI API for Lightning Experience. To accomplish the same functionality in Lightning Experience, use the deferred parameter available in this method. Pass the value in SCREEN\_POP\_DATA from the return object into the screenPop () method.

If you’re noticing inconsistent behavior with the default settings of your softphone layout, edit your softphone layout to force the cache to refresh. From Setup, edit your softphone layout and save the changes. Then edit the layout again and reset the layout to the default settings.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| searchParams | string | String to search. |
| queryParams | string | Specifies the query parameters to pass to the URL. Query parameters are only passed to the URL if the screen pop option is set to Pop to Visualforce. |
| params | object | Specifies arguments to pass to a flow. flowArgs is a list of objects with key-value pairs containing information about the arguments being passed to the flow. Arguments must correspond to input variables of the specified name and type defined in the flow, else they are ignored.params: { FLOW: { flowArgs: [{ 'name': 'Your_Name', 'type': 'Your_Type', 'value': 'Your_Value'}] } }ImportantThis argument can only be used with flows. Consult the FlowVariable section in the topic on Flow in the Metadata API Developer Guide for details on flow arguments. |
| defaultFieldsValue | object | Optional. If you set up your softphone to pop to a new entity when there are no search results (for inbound calls), you can use this argument to specify the default fields for the screen pop. For example, when the screen pop opens for the new entity it’s pre-populated with the fields you’ve specified. {  searchParams: 'searchTermWithEmptyResults',     callType: 'inbound',     defaultFieldValues: {LastName : 'searchAndScreenPopLastName'},     deferred: false,     callback: function(result) {         if (result.success) {             console.log(result.returnValue);         } else {             console.log(result.errors);         }     } |
| callType | string | Specifies the type of call, such as inbound, outbound, internal, or null. Per the settings in the softphone layout, the call type determines which objects to search for any matches.Specify the call type with one of the following values:sforce.opencti.CALL_TYPE.INBOUNDsforce.opencti.CALL_TYPE.OUTBOUNDsforce.opencti.CALL_TYPE.INTERNAL |
| deferred | boolean | Specifies whether the screen pop is performed immediately following the search or if it’s performed later. If the screen pop is performed later, a JSON object is returned. This object must be passed unmodified to sforce.opencti.screenPop to perform the operation.False—Default value. Indicates an immediate screen pop after the search is performed.True—A JSON {object} is returned in the SCREEN_POP_DATA key. Return this object unmodified to sforce.opencti.screenPop for a screen pop. |
| callback | function | JavaScript method executed when the API method call is completed. |

## Sample Code–HTML and JavaScript

```

```

## Response

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | Returns true if the API method call was invoked successfully, false otherwise. |
| returnValue | object | Returns a list of objects that match the search results. The search is performed on the objects specified in the softphone layout. For each object found, the object ID, object type, last modified date, field names, and field values are returned as JSON objects.NoteMake sure that you specify fields to return in your softphone layout. If you don’t, nothing is returned.The following is an example of searching for “Acme,” and finding one Account and three Opportunity objects:{    "006x0000001ZcyG":{     "Id": "006x0000001ZcyG"     "LastModifiedDate": "2017-10-24T18:42:39.000Z",      "Name":"Acme - 600 Widgets",     "RecordType":"Opportunity"    },    "001x0000003DGQR":{       "Name":"Acme",       "Type":"Analyst",       "object":"Account",       "displayName":"Company"    },    "006x0000001ZcyH":{       "Id": "006x0000001ZcyH"       "LastModifiedDate": "2017-10-24T18:42:39.000Z",        "Name":"Acme - 200 Widgets",       "RecordType":"Opportunity"    },    "006x0000001ZcyF":{       "Id": "006x0000001ZcyF"       "LastModifiedDate": "2017-10-24T18:42:39.000Z",       "Name":"Acme - 1,200 Widgets",       "RecordType":"Opportunity"    } }Invoking this API method with a deferred parameter returns the following sample output without any screen navigation.{    "006x0000001ZcyG":{        "Id": "006x0000001ZcyG"        "LastModifiedDate": "2017-10-24T18:42:39.000Z",        "Name":"Acme - 600 Widgets",        "RecordType":"Opportunity"    },   SCREEN_POP_DATA : {} //an object. Do not modify it. Pass it to screenPop() API to navigate. }Invoking this API method on an account or contact object returns additional information.AccountId or PersonContactId—The associated account or contact ID.IsPersonAccount—true if the account or contact is a person account, false otherwise.For example:{      "006x0000001ZcyG":{        "Id": "006x0000001ZcyG"        "IsPersonAccount": true,        "LastModifiedDate": "2017-11-15T00:10:47.000Z",       "Name":"Acme Person Account",     "PersonContactId" : "003D000000QOMqg",       "RecordType":"Account"    } } |
| errors | array | If the API call was successful, this variable is null. If the API call failed, this variable returns an array of error messages. |

#### See Also

-   [*Lightning Flow for Service Developer Guide* (English only)](https://developer.salesforce.com/docs/atlas.en-us.260.0.salesforce_guided_engagement.meta/salesforce_guided_engagement/salesforce_guided_engagement.htm "Lightning Flow for Service Developer Guide (English only)  - HTML (New Window)")

## Code Examples

```
sforce.opencti.searchAndScreenPop({
     searchParams:string //Optional 
     queryParams:string, //Optional 
     defaultFieldValues:object, //Optional
     callType:sforce.opencti.CALL_TYPE.*, //Required. See arguments for more information. 
     deferred:boolean //Optional) 
     callback:function //Optional
});
```

```
{  searchParams: 'searchTermWithEmptyResults',
    callType: 'inbound',
    defaultFieldValues: {LastName : 'searchAndScreenPopLastName'},
    deferred: false,
    callback: function(result) {
        if (result.success) {
            console.log(result.returnValue);
        } else {
            console.log(result.errors);
        }
    }
```

```
<html>
<head>
   <script type="text/javascript" src="http://domain:port/support/api/66.0/lightning/opencti_min.js"></script>
   <script type="text/javascript">
      	 var callback = function(response) {
         if (response.success) {
            console.log('API method call executed successfully! returnValue:', response.returnValue);
         } else { 
            console.error('Something went wrong! Errors:', response.errors);
         }
      	};
       function searchAndScreenPop() {
                //Invokes API method
                sforce.opencti.searchAndScreenPop({ searchParams : 'Acme',queryParams : 'Key1=value1&Key2=value2', callType : sforce.opencti.CALL_TYPE.INBOUND,  deferred: false, callback : callback });
        }
    </script>
</head>
<body>
    <button onclick="searchAndScreenPop();">searchAndScreenPop</button>
</body>
</html>
```

```
{
   "006x0000001ZcyG":{
    "Id": "006x0000001ZcyG"
    "LastModifiedDate": "2017-10-24T18:42:39.000Z", 
    "Name":"Acme - 600 Widgets",
    "RecordType":"Opportunity"
   },
   "001x0000003DGQR":{
      "Name":"Acme",
      "Type":"Analyst",
      "object":"Account",
      "displayName":"Company"
   },
   "006x0000001ZcyH":{
      "Id": "006x0000001ZcyH"
      "LastModifiedDate": "2017-10-24T18:42:39.000Z", 
      "Name":"Acme - 200 Widgets",
      "RecordType":"Opportunity"
   },
   "006x0000001ZcyF":{
      "Id": "006x0000001ZcyF"
      "LastModifiedDate": "2017-10-24T18:42:39.000Z",
      "Name":"Acme - 1,200 Widgets",
      "RecordType":"Opportunity"
   }
}
```

```
{
   "006x0000001ZcyG":{
       "Id": "006x0000001ZcyG"
       "LastModifiedDate": "2017-10-24T18:42:39.000Z",
       "Name":"Acme - 600 Widgets",
       "RecordType":"Opportunity"
   },
  SCREEN_POP_DATA : {} //an object. Do not modify it. Pass it to screenPop() API to navigate.
}
```

## Related Topics

- error
                              messages (atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_error_messages_lightning.htm)
