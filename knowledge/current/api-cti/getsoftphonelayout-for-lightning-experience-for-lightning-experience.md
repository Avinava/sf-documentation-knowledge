---
title: "getSoftphoneLayout() for Lightning Experience for
   Lightning Experience"
domain: api-cti
topic: getsoftphonelayout-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.761Z
estimatedTokens: 968
keywords: [getSoftphoneLayout, Lightning, Experience, Open, CTI, screenPop, searchAndScreenPop, don’t, support, screenPopSettings, Usage, Arguments, Sample, Code–HTML, JavaScript]
---

# getSoftphoneLayout() for Lightning Experience for
   Lightning Experience

> The Open CTI for Lightning Experience methods screenPop() and searchAndScreenPop() don’t
     support screenPopSettings.

# getSoftphoneLayout() for Lightning Experience for Lightning Experience

## Usage

Returns the softphone layout of the current user. This method is available in API version 38.0 or later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_cti)

#### Note

The Open CTI for Lightning Experience methods screenPop() and searchAndScreenPop() don’t support screenPopSettings.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| callback | function | JavaScript method executed when the API method call is completed. |

## Sample Code–HTML and JavaScript

```

```

## Response

This method is asynchronous. The response is returned in an object passed to a callback method. The response object contains the following fields.

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | If the API call is successful, the value true is returned and the softphone layout definition is returned in returnValue, false otherwise. |
| returnValue | object | If the API call is successful, the softphone layout definition is returned. If the API call fails, null is returned.The returned object contains three elements that represent each of the call-types:"Internal""Inbound""Outbound"Each call-type contains three sub-sections:"callRelatedFields"—An array of call-related fields selected to display. Possible values are "ANI", "DNIS", "SEGMENT", and "QUEUE"."objects"—The set of Salesforce objects selected to display, along with the Field Label and Field Name (API name) selected to display from each object."screenPopSettings"—This object contains a "screenPopsOpenWithin" field with a value of either "ExistingWindow" or "NewWindow".Additionally, it contains the settings for each of the screen pop match types: "NoMatch", "SingleMatch", "MultipleMatches". Each match type contains a corresponding "screenPopType" field and may also contain a "screenPopData" field.If "screenPopType" has a value of "PopToEntity", then "screenPopData" contains the name of the target object.If "screenPopType" has a value of "PopToVisualforce", then "screenPopData" contains the name of the target Visualforce page.If "screenPopType" has a value of "PopToSearch", then there won’t be a "screenPopData" field.If "screenPopType" has a value of "PopToFlow", then "screenPopData" contains the name of the target flow.The following is an example of a returnValue:{ "Internal" : {    "callRelatedFields" : [     "ANI",       "DNIS",     ]    "objects" : {     "User" : [ {       "displayName" : "Name",       "apiName" : "Name"      }     ]    },    "screenPopSettings" : {}   },   "Inbound" : {    "callRelatedFields" : [     "ANI",     "DNIS",     "SEGMENT",     "QUEUE"      ],     "objects" : {     "Account" : [ {       "displayName" : "Account Name",       "apiName" : "Name"      }     ]          },    "screenPopSettings" : {     "NoMatch" : {      "screenPopType" : "PopToEntity",      "screenPopData" : "Contact"       },           "SingleMatch" : {      "screenPopType" : "PopToVisualforce",      "screenPopData" : "Visualforce_Page_Name"     },     "MultipleMatches" : {      "screenPopType" : "PopToSearch"     }    }   },   "Outbound" : {    "callRelatedFields" : [     "DNIS"      ],    "objects" : {     "Account" : [ {       "displayName" : "Account Name",       "apiName" : "Name"      }     ]    },    "screenPopSettings" : {}   }  } |
| errors | array | If the API call was successful, this variable is null. If the API call failed, this variable returns an array of error messages. |

#### See Also

-   [*Lightning Flow for Service Developer Guide* (English only)](https://developer.salesforce.com/docs/atlas.en-us.260.0.salesforce_guided_engagement.meta/salesforce_guided_engagement/salesforce_guided_engagement.htm "Lightning Flow for Service Developer Guide (English only)  - HTML (New Window)")

## Code Examples

```
sforce.opencti.getSoftphoneLayout({
     callback: function
});
```

```
<html>
<head>
   <script type="text/javascript" src="https://domain:port/support/api/66.0/lightning/opencti_min.js"></script>
   <script type="text/javascript">
      var callback = function(response) {
         if (response.success) {
            alert(response.returnValue);
         } else {
            console.error(response.errors);
            alert(
               'Something went wrong. Please check error information in developer console.'
            );
         }
      };

      function getSoftphoneLayout() {
         sforce.opencti.getSoftphoneLayout({
            callback: callback
         });
      }
   </script>
</head>
<body>
   <button onclick="getSoftphoneLayout();">Get Softphone Layout</button>
</body>
</html>
```

```
{
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
    "Account" : [ {
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
    "Account" : [ {
      "displayName" : "Account Name",
      "apiName" : "Name"
     }
    ]
   },
   "screenPopSettings" : {}
  }
 }
```

## Related Topics

- error
                              messages (atlas.en-us.api_cti.meta/api_cti/sforce_api_cti_error_messages_lightning.htm)
