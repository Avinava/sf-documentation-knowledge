---
title: "screenPop() for Lightning Experience for Lightning
         Experience"
domain: api-cti
topic: screenpop-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.970Z
estimatedTokens: 1196
keywords: [screenPop, Lightning, Experience, Open, CTI, doesn’t, support, softphone, layout, Screen, pops, New, browser, window, tab]
---

# screenPop() for Lightning Experience for Lightning
         Experience

> Open CTI
               for Lightning Experience doesn’t support the softphone layout field Screen
                  pops open within when the value is New browser window or
                  tab. In Lightning Experience, the default value is Existing
                  browser window.

# screenPop() for Lightning Experience for Lightning Experience

## Usage

Pops to a new location as specified by the input type and parameters. This method is available in API version 38.0 or later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_cti)

#### Note

Open CTI for Lightning Experience doesn’t support the softphone layout field Screen pops open within when the value is New browser window or tab. In Lightning Experience, the default value is Existing browser window.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| type | string | The enumerated type to screen pop to. Use one of the following values:sforce.opencti.SCREENPOP_TYPE.SOBJECTsforce.opencti.SCREENPOP_TYPE.URLsforce.opencti.SCREENPOP_TYPE.OBJECTHOMEsforce.opencti.SCREENPOP_TYPE.LISTsforce.opencti.SCREENPOP_TYPE.SEARCHsforce.opencti.SCREENPOP_TYPE.NEW_RECORD_MODALsforce.opencti.SCREENPOP_TYPE.FLOW |
| params | object | An object holding arguments depending on the type.For SOBJECT:params : { recordId: string }Where recordId, is the ID of the standard or custom object in Salesforce.For URL:params : { url: string }The URL must be a relative parameter. For more information about the URL, see the force:navigateToURL url parameter in the Lightning Aura Components Developer Guide.For OBJECTHOME:params : { scope: string }Pops to the home of an object or entity such as a case or account. For more information about the scope, see the force:navigateToSObject recordID parameter in the Lightning Aura Components Developer Guide. Here’s a sample input:{ scope: “Account”}For LIST:{ listViewId: string, scope: string }For more information about the listViewId and scope parameter, see force:navigateToList in the Lightning Aura Components Developer Guide.For SEARCH:params : {searchString: string}Pops to the Top Results section of the search page. The string must be at least 3 characters in length.For NEW_RECORD_MODAL:params : {entityName: string, //required defaultFieldValues: object//optional  }Required. The API name of the custom or standard object, such as Account, Case, Contact, or Lead.NoteFor custom objects, the name for a new record model follows this format:objectName__cThis name takes the default namespace. Notice that the separator includes 2 underscores.If your org has namespace enabled, you must prefix it for custom objects. Use this format:namespace__objectName__cTo pop to a new person account model, use the input Account.For FLOW:params: {flowDevName: 'Flow_Dev_Name', flowArgs: [{'name': 'Name', 'type': 'Type', 'value': 'Value'}]}Pops to the target flow. Additional arguments can be passed to the flow, for example, the caller’s phone number or a list of matching records.NoteOnly active UI screen flows (that use the type Flow) can be popped. Arguments passed to the flow must be defined as variables inside the flow, or else they’re ignored at runtime. Consult the FlowVariable section in the topic on Flow in the Metadata API Developer Guide for details on flow arguments. |
| defaultFieldValues | object | Optional. If you set up your softphone to pop to a new entity when there are no search results (for inbound calls), you can use this argument to specify the default fields for the screen pop. For example, when the screen pop opens for the new entity it’s pre-populated with the fields you’ve specified. {  searchParams: 'searchTermWithEmptyResults',     callType: 'inbound',     defaultFieldValues: {LastName : 'searchAndScreenPopLastName'},     deferred: false,     callback: function(result) {         if (result.success) {             console.log(result.returnValue);         } else {             console.log(result.errors);         }     }} |
| callback | function | Optional. JavaScript method executed when the API method call is completed. |

## Sample Code–HTML and JavaScript with a callback

```

```

## Response

This method is asynchronous. The response is returned in an object passed to a callback method. The response object contains the following fields.

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | Returns true if the API method call was invoked successfully, false otherwise. |
| returnValue | object | This API method doesn’t return this object. The returnValue is always null. |
| errors | array | If the API call was successful, this variable is null. If the API call failed, this variable returns an array of error messages. |

#### See Also

-   [*Lightning Flow for Service Developer Guide* (English only)](https://developer.salesforce.com/docs/atlas.en-us.260.0.salesforce_guided_engagement.meta/salesforce_guided_engagement/salesforce_guided_engagement.htm "Lightning Flow for Service Developer Guide (English only)  - HTML (New Window)")

## Code Examples

```
sforce.opencti.screenPop({
     type: sforce.opencti.SCREENPOP_TYPE.*, //Review the arguments section.
     params: object //Depends on the SCREENPOP_TYPE. Review the arguments section.
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
    }}
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
       	function screenPop() {
                	sforce.opencti.screenPop({type: sforce.opencti.SCREENPOP_TYPE.OBJECTHOME, params: {scope:”Account”}, callback: callback  });
        	}
</script>
</head>
<body>
       <button onclick="screenPop();">screenPop</button>
</body>
</html>
```

## Related Topics

- error
                              messages (atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_error_messages_lightning.htm)
