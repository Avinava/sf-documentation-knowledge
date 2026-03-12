---
title: "getDetailsByPrimaryTabId()"
domain: service-cloud
topic: getdetailsbyprimarytabid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:57.417Z
estimatedTokens: 1621
keywords: [getDetailsByPrimaryTabId, details, chat, associated, specific, primary, tab, ID., API, version, 29.0, later., Syntax, Arguments, Sample, Code–Visualforce, Response, breadcrumb, customDetail, entityMap]
---

# getDetailsByPrimaryTabId()

> Returns the details of the chat associated with a specific primary tab ID. Available in API version 29.0 or
            later.

# getDetailsByPrimaryTabId()

Returns the details of the chat associated with a specific primary tab ID. Available in API version 29.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| primaryTabId | String | The ID of the primary tab associated with the chat for which to retrieve details. |
| callback | function | JavaScript method called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| primaryTabId | String | The ID of the primary tab associated with the chat. |
| details | Object | An object that contains all the details for a chat associated with a particular primary tab. |
| success | Boolean | true if retrieving the details was successful; false if retrieving the details wasn’t successful. |

## details

The details object contains the following properties:

| Property | Type | Description |
| --- | --- | --- |
| acceptTime | Date/Time | The date and time an agent accepted the chat request. |
| breadcrumbs | Array of breadcrumb objects | An array of breadcrumb objects representing a list of Web pages visited by the visitor before and during the chat. |
| chatKey | String | The chat key associated with the chat. |
| customDetails | Array of customDetail objects | An array of customDetail objects that represent custom details that have been passed in to this chat via the Deployment API or Pre-Chat Form API. |
| geoLocation | Object | An object representing the details of a chat visitor’s location, derived from a geoIP lookup on the chat visitor's IP address. |
| ipAddress | String | The IP address of the chat visitor in dot-decimal format. |
| isEnded | Boolean | Specifies whether a chat has ended (true) or not (false). |
| isEngaged | Boolean | Specifies whether a chat is currently engaged (true) or not (false). |
| isPushRequest | Boolean | Specifies whether a chat was routed to an agent through a push-based routing method such as Least Active or Most Available (true) or not (false). |
| isTransferringOut | Boolean | Specifies whether a chat is currently in the process of being transferred to another agent (true) or not (false). |
| liveChatButtonId | String | The 15-digit record ID for the chat button from which the chat request originated. |
| liveChatDeploymentId | String | The 15-digit record ID for the deployment from which the chat request originated. |
| name | String | The name of the chat visitor. |
| requestTime | Date/Time | The date and time the chat was requested. |
| visitorInfo | Object | An object containing information about the visitor's web browser. |

## breadcrumb

A breadcrumb represents a Web page viewed by a chat visitor. The breadcrumb object contains the following properties:

| Property | Type | Description |
| --- | --- | --- |
| location | String | The URL of a Web page viewed by a chat visitor. |
| time | Date/Time | The date and time a chat visitor visited a specific breadcrumb URL. |

## customDetail

Custom details are details that have been passed into the chat through the Deployment API or Pre-Chat Form API. The customDetail object contains the following properties:

| Property | Type | Description |
| --- | --- | --- |
| label | String | The name of the custom detail as specified in the Deployment API or Pre-Chat Form API. |
| value | String | The value of the custom detail as specified in the Deployment API or Pre-Chat Form API. |
| transcriptFields | Array of Strings | The names of fields where the customer’s details on the chat transcript are saved. |
| entityMaps | Array of entityMap objects | An array of pre-created records used for mapping the custom detail information. |

## entityMap

Entities are records that are created when a customer starts a chat with an agent. You can use the API to auto-populate these records with customer details. The entityMap object contains the following properties:

| Property | Type | Description |
| --- | --- | --- |
| entityName | String | The record to search for or create. |
| fieldName | String | The name of the field associated the details. |
| isFastFillable | Boolean | Specifies whether the value can be used to populate the field when an agent creates or edits a record (true) or not (false) (Live Agent console only). |
| isAutoQueryable | Boolean | If you’re using the Live Agent console, specifies whether to perform a a SOSL query (in the Live Agent console) (true) or not (false) to find records with a fieldName containing the value.If you’re using the Salesforce console, specifies whether to perform a SOQL query (in the Salesforce console) (true) or not (false) to find records with a fieldName containing the value. |
| isExactMatchable | Boolean | Specifies whether to only search for records that have fields exactly matching the field fieldName (true) or not (false). |

## geoLocation

The geoLocation object represents the details of a chat visitor’s location. It contains the following properties:

| Property | Type | Description |
| --- | --- | --- |
| city | String | The name of the chat visitor’s city. |
| countryCode | String | The two-digit ISO-3166 country code for the chat visitor's country. |
| countryName | String | The name of chat visitor’s country. |
| latitude | String | The chat visitor's approximate latitude. |
| longitude | String | The chat visitor's approximate longitude. |
| organization | String | The organization name of the chat visitor's internet service provider. |
| region | String | The chat visitor’s region, such as state or province. |

## visitorInfo

The visitorInfo object represents information about the visitor's web browser. It contains the following properties:

| Property | Type | Description |
| --- | --- | --- |
| browserName | String | The name and version of the chat visitor's web browser. |
| language | String | The language of the chat visitor's web browser. |
| originalReferrer | String | The original URL of the Web page from which the chat visitor requested a chat. |
| screenResolution | String | The screen resolution of the chat visitor's computer, as passed by the chat visitor’s browser. |
| sessionKey | String | the sessionKey of the visitor which will ultimately be stored on the LiveChatVisitor record as a unique reference to this live chat visitor |

## Code Examples

```
sforce.console.chat.getDetailsByPrimaryTabId(primaryTabId:String, callback:Function)
```

```
<apex:page >
    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <a href="#" onClick="testGetDetailsByPrimaryTabId();">Get Chat Details</a> 

    <script type="text/javascript">

        function testGetDetailsByPrimaryTabId() {
            //Get the value for 'myPrimaryTabId'from the getPrimaryTabIds() or getEnclosingPrimaryTabId() methods. 
            //These values are for example purposes only
            var primaryTabId = 'myPrimaryTabId';
            sforce.console.chat.getDetailsByPrimaryTabId(primaryTabId, getDetailsSuccess);
        }
        
        function getDetailsSuccess(result) {
            //Report whether accepting the chat was succesful
            if (result.success == true) {
                console.log(result);
                chatKey = result.details.chatKey;
                alert('The chatKey for this chat is: ' + chatKey);
            } else {
                alert('Getting the details was not Succesful');
            }
        };

    </script>
</apex:page>
```
