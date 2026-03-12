---
title: "getSoftphoneLayout() for Salesforce Classic for Salesforce Classic"
domain: api-cti
topic: getsoftphonelayout-for-salesforce-classic-for-salesforce-classic
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.751Z
estimatedTokens: 836
keywords: [getSoftphoneLayout, Salesforce, Classic, softphone, layout, JSON, API, version, 27.0, later, Usage, Arguments, Sample, Code–JavaScript]
---

# getSoftphoneLayout() for Salesforce Classic for Salesforce Classic

> Returns the softphone layout as a JSON string. This
    method is only available in API version 27.0 or later.

# getSoftphoneLayout() for Salesforce Classic for Salesforce Classic

## Usage

Returns the softphone layout as a JSON string. This method is only available in API version 27.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| callback | function | JavaScript method executed when the API method call is completed. |

## Sample Code–JavaScript

```

```

## Response

This method is asynchronous. The response is returned in an object passed to a callback method. The response object contains the following fields.

| Name | Type | Description |
| --- | --- | --- |
| result | string | If the API call was successful, the softphone layout definition is returned as a JSON string. If the API call failed, null is returned.The returned JSON string contains three elements that represent each of the call types:"Internal""Inbound""Outbound"Each call-type contains three subsections:"callRelatedFields"—An array of call-related fields selected to display. Possible values are "ANI", "DNIS", "SEGMENT", and "QUEUE"."objects"—The set of Salesforce objects selected to display, along with the Field Label and Field Name (API name) selected to display from each object."screenPopSettings"—This object contains a "screenPopsOpenWithin" field with a value of either "ExistingWindow" or "NewWindow". Additionally, it contains the settings for each of the screen pop match types: "NoMatch", "SingleMatch", "MultipleMatches". Each match type contains a corresponding "screenPopType" field and may also contain a "screenPopData" field. If "screenPopType" has a value of "PopToEntity", then "screenPopData" contains the name of the target object. If "screenPopType" has a value of "PopToVisualforce", then "screenPopData" contains the name of the target Visualforcepage. If "screenPopType" has a value of "PopToSearch", then there won’t be a "screenPopData" field.The following is an example of a JSON response:"Internal" : {    "callRelatedFields" : [     "ANI",       "DNIS",     ]    "objects" : {     "User" : [ {       "displayName" : "Name",       "apiName" : "Name"      }     ]    },    "screenPopSettings" : {}   },   "Inbound" : {    "callRelatedFields" : [     "ANI",     "DNIS",     "SEGMENT",     "QUEUE"      ],     "objects" : {     "Account" : [ {       "displayName" : "Account Name",       "apiName" : "Name"      }     ]          },    "screenPopSettings" : {     "NoMatch" : {      "screenPopType" : "PopToEntity",      "screenPopData" : "Contact"       },           "SingleMatch" : {      "screenPopType" : "PopToVisualforce",      "screenPopData" : "Visualforce_Page_Name"     },     "MultipleMatches" : {      "screenPopType" : "PopToSearch"     }    }   },   "Outbound" : {    "callRelatedFields" : [     "DNIS"      ],    "objects" : {     "Account" : [ {       "displayName" : "Account Name",       "apiName" : "Name"      }     ]    },    "screenPopSettings" : {}   }  } |
| error | string or undefined | If the API call was successful, this variable is undefined. If the API call failed, this variable returns an error message. |

#### See Also

-   [*Salesforce Help*: Designing a Custom Softphone Layout](https://help.salesforce.com/apex/HTViewHelpDoc?id=cti_admin_phonelayoutscreate.htm&language=en_US "Salesforce Help: Designing a Custom Softphone Layout - html (New Window)")

## Code Examples

```
sforce.interaction.cti.getSoftphoneLayout(callback:function);
```

```
<html>
<head>
   <script type="text/javascript" src="http://domain:port/support/api/27.0/interaction.js"></script>
   <script type="text/javascript">
       var callback = function (response) {
               alert(response.result);
           } 
       // Calls getSoftphoneLayout
       sforce.interaction.cti.getSoftphoneLayout(callback);
</script>
</head>
<body></body>
</html>
```

```
"Internal" : {
   "callRelatedFields" : [
    "ANI",  
    "DNIS", 
   ]
   "objects" : {
    "User" : [ {
      "displayName" : "Name",
      "apiName" : "Name"
     }
    ]
   },
   "screenPopSettings" : {}
  },
  "Inbound" : {
   "callRelatedFields" : [
    "ANI",
    "DNIS",
    "SEGMENT",
    "QUEUE"  
   ],
    "objects" : {
    "Account" : [ {
      "displayName" : "Account Name",
      "apiName" : "Name"
     }
    ]
     
   },
   "screenPopSettings" : {
    "NoMatch" : {
     "screenPopType" : "PopToEntity",
     "screenPopData" : "Contact"  
    },
     
    "SingleMatch" : {
     "screenPopType" : "PopToVisualforce",
     "screenPopData" : "Visualforce_Page_Name"
    },
    "MultipleMatches" : {
     "screenPopType" : "PopToSearch"
    }
   }
  },
  "Outbound" : {
   "callRelatedFields" : [
    "DNIS"  
   ],
   "objects" : {
    "Account" : [ {
      "displayName" : "Account Name",
      "apiName" : "Name"
     }
    ]
   },
   "screenPopSettings" : {}
  }
 }
```
