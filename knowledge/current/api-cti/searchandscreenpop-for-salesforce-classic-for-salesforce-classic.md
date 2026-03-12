---
title: "searchAndScreenPop() for Salesforce Classic for
                Salesforce Classic"
domain: api-cti
topic: searchandscreenpop-for-salesforce-classic-for-salesforce-classic
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.985Z
estimatedTokens: 722
keywords: [searchAndScreenPop, Salesforce, Classic, Searches, objects, softphone, layout, search, results, screen, pops, any, matching, records, respects]
---

# searchAndScreenPop() for Salesforce Classic for
                Salesforce Classic

> Searches objects specified in the softphone layout
                    for a given string. Returns search results and screen pops any matching records.
                    This method respects screen pop settings defined in the softphone
                layout.

# searchAndScreenPop() for Salesforce Classic for Salesforce Classic

## Usage

Searches objects specified in the softphone layout for a given string. Returns search results and screen pops any matching records. This method respects screen pop settings defined in the softphone layout.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_cti)

#### Note

The returned response displays only matches that meet your softphone layout settings. However, the search page that screen pops, displays all matches, regardless of the objects you specify in your sofpthone layout.

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
| result | string | Returns a list of objects that match the search results. The search is performed on the objects specified in the softphone layout. For each object found, the object ID, field names, field values, and for API version 33.0 or later, object tab names are returned as a JSON string.NoteIf multiple matches are found, only a single field is returned.The following is an example of searching for “Acme,” and finding one account and three opportunity objects:{     "006x0000001ZcyG" : {"Name" : "Acme - 600 Widgets", "object" : "Opportunity", "displayName" : "Opportunity"},     "001x0000003DGQR" : {"Name" : "Acme", "Type" : "Analyst", "object" : "Account", "displayName" : "Company"},     "006x0000001ZcyH" : {"Name" : "Acme - 200 Widgets", "object" : "Opportunity", "displayName" : "Opportunity"},     "006x0000001ZcyF" : {"Name" : "Acme - 1,200 Widgets", "object" : "Opportunity", "displayName" : "Opportunity"} }For API version 31.0 and later, invoking this API method on a PersonAccount object returns additional information:{"001D000000JWAW8":{"Name":"Acme","contactId":"003D000000QNwDB", "Type":"Analyst","object":"Account","personAccount":true}} |
| error | string | If the API call was successful, this variable is undefined. If the API call failed, this variable returns an error message. |

#### See Also

-   [*Salesforce Help*: Designing a Custom Softphone Layout](https://help.salesforce.com/apex/HTViewHelpDoc?id=cti_admin_phonelayoutscreate.htm&language=en_US "Salesforce Help: Designing a Custom Softphone Layout - html (New Window)")

## Code Examples

```
sforce.interaction.searchAndScreenPop(searchParams:string, queryParams:string, callType:string, (optional) callback:function);
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
       function searchAndScreenPop() {
                //Invokes API method
                sforce.interaction.searchAndScreenPop('Acme', 'Key1=value1&Key2=value2', 'inbound', callback);
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
    "006x0000001ZcyG" : {"Name" : "Acme - 600 Widgets", "object" : "Opportunity", "displayName" : "Opportunity"},
    "001x0000003DGQR" : {"Name" : "Acme", "Type" : "Analyst", "object" : "Account", "displayName" : "Company"},
    "006x0000001ZcyH" : {"Name" : "Acme - 200 Widgets", "object" : "Opportunity", "displayName" : "Opportunity"},
    "006x0000001ZcyF" : {"Name" : "Acme - 1,200 Widgets", "object" : "Opportunity", "displayName" : "Opportunity"}
}
```
