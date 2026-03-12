---
title: "searchAndGetScreenPopUrl() for Salesforce Classic for Salesforce Classic"
domain: api-cti
topic: searchandgetscreenpopurl-for-salesforce-classic-for-salesforce-classic
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.977Z
estimatedTokens: 795
keywords: [searchAndGetScreenPopUrl, Salesforce, Classic, Searches, objects, softphone, layout, search, results, relative, URL, screen, popped, perform, actual]
---

# searchAndGetScreenPopUrl() for Salesforce Classic for Salesforce Classic

> Searches objects specified in the softphone layout
               for a given string. Returns search results and the relative URL to be screen popped.
               Note that this method does not perform an actual screen pop. This method respects
               screen pop settings defined in the so

# searchAndGetScreenPopUrl() for Salesforce Classic for Salesforce Classic

## Usage

Searches objects specified in the softphone layout for a given string. Returns search results and the relative URL to be screen popped. Note that this method does not perform an actual screen pop. This method respects screen pop settings defined in the softphone layout. This method is only available in API version 28.0 or later.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=api_cti)

#### Tip

This method is not available in the Open CTI API for Lightning Experience. To accomplish the same functionality in Lightning, use the deferred parameter available in the [searchAndScreenPop() for Lightning Experience for Lightning Experience](atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_searchandscreenpop_lex.htm) method.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| searchParams | string | String to search. |
| queryParams | string | Specifies the query parameters to pass to the URL. |
| callType | string | Specifies the type of call, such as inbound, outbound, internal, or null. Per the settings in the softphone layout, the call type determines which objects to search for any matches.If callType is null, searches are inbound by default. If callType is internal or outbound, no screen pops occur. |
| callback | function | JavaScript method executed when the API method call is completed. |

## Sample Code–JavaScript

```

```

## Response

| Name | Type | Description |
| --- | --- | --- |
| result | string | Returns a list of objects that match the search results and the URL to the screen pop (screenPopUrl). The search is performed on the objects specified in the softphone layout. For each object found, the object ID, field names, field values, and for API version 33.0 or later, object tab name are returned as a JSON string.The following is an example of searching for “Acme,” and finding one account and three opportunity objects:{"006x0000001ZcyG":{"Name":"Acme - 600 Widgets","object":"Opportunity","displayName":"Opportunity"}, "001x0000003DGQR":{"Name":"Acme","Type":"Analyst","object":"Account", "displayName":"Company"}, "006x0000001ZcyH":{"Name":"Acme - 200 Widgets","object":"Opportunity","displayName":"Opportunity"}, "006x0000001ZcyF":{"Name":"Acme - 1,200 Widgets","object":"Opportunity","displayName":"Opportunity"}, screenPopUrl:"/search/SearchResults?searchType=2&str=Acme"} For API version 31.0 and later, invoking this API method on a PersonAccount object returns additional information:{"001D000000Jn5C5":{"Name":"PersonAccount","contactId":"003D000000QQCEu", "Type":"Analyst","object":"Account","displayName":"Account","personAccount":true}, "screenPopUrl":"/001D000000Jn5C5"} |
| error | string | If the API call was successful, this variable is undefined. If the API call failed, this variable returns an error message. |

#### See Also

-   [*Salesforce Help*: Designing a Custom Softphone Layout](https://help.salesforce.com/apex/HTViewHelpDoc?id=cti_admin_phonelayoutscreate.htm&language=en_US "Salesforce Help: Designing a Custom Softphone Layout - html (New Window)")

## Code Examples

```
sforce.interaction.searchAndGetScreenPopUrl(searchParams:string, queryParams:string, callType:string, callback:function)
```

```
<html>
<head>
   <script type="text/javascript" src="http://domain:port/support/api/33.0/interaction.js"></script>
   <script type="text/javascript">
       var callback = function (response) {
           if (response.result) {
              alert(response.result);
           } else {
              alert(response.error);
           }
        };
       function searchAndGetScreenPopUrl() {
                //Invokes API method
                sforce.interaction.searchAndGetScreenPopUrl('Acme', 'Key1=value1&Key2=value2', 'inbound', callback);
        }
</script>
</head>
<body>
       <button onclick="searchAndGetScreenPopUrl();">searchAndGetScreenPopUrl</button>
</body>
</html>
```

## Related Topics

- searchAndScreenPop() for Lightning Experience for Lightning Experience (atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_searchandscreenpop_lex.htm)
