---
title: "Get Compact Layouts Using sObject CompactLayouts"
domain: rest-api
topic: get-compact-layouts-using-sobject-compactlayouts
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:35.978Z
estimatedTokens: 208
keywords: [Get, Compact, Layouts, sObject, CompactLayouts, Retrieves, list, compact, layouts, specific, object., resource, REST, API, version, 29.0, later., Syntax, Example]
---

# Get Compact Layouts Using sObject CompactLayouts

> Retrieves a list of compact layouts for a specific object. This resource is available
    in REST API version 29.0 and later.

# Get Compact Layouts Using sObject CompactLayouts

Retrieves a list of compact layouts for a specific object. This resource is available in REST API version 29.0 and later.

## Syntax

URI

/services/data/vXX.X/sobjects/sObject/describe/compactLayouts/

Formats

JSON, XML

HTTP methods

GET

Authentication

Authorization: Bearer token

Request parameters

None required

## Example

Example Request

```

```

Example Response Body

This sample JSON response is for compact layouts created on the Account object. In this example, only one custom compact layout was created for Account. The custom compact layout is assigned as the primary compact layout for the object, and it contains two fields: Account Name and Phone.

```

```

If you haven’t defined any compact layouts for an object, the compactLayoutId returns as Null.

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/sobjects/Account/describe/compactLayouts -H "Authorization: Bearer token"
```

```
{ 
  "compactLayouts" : [ { 
    "actions" : [ { 
      "custom" : false, 
      "icons" : null, 
      "label" : "Call", 
      "name" : "CallHighlightAction" 
    }, { 
      "custom" : false, 
      "icons" : null, 
      "label" : "Send Email", 
      "name" : "EmailHighlightAction" 
    }, { 
      "custom" : false, 
      "icons" : null, 
      "label" : "Map", 
      "name" : "MapHighlightAction" 
    }, { 
      "custom" : false, 
      "icons" : null, 
      "label" : "Read News", 
      "name" : "NewsHighlightAction" 
    }, { 
      "custom" : false, 
      "icons" : null, 
      "label" : "View Website", 
      "name" : "WebsiteHighlightAction" 
    } ], 
    "fieldItems" : [ { 
      "editable" : false, 
      "label" : "Account Name", 
      "layoutComponents" : [ { 
        "components" : [ ], 
        "details" : { 
          "autoNumber" : false, 
          "byteLength" : 765, 
          "calculated" : false, 
          "calculatedFormula" : null, 
          "cascadeDelete" : false, 
          "caseSensitive" : false, 
          "controllerName" : null, 
          "createable" : true, 
          "custom" : false, 
          "defaultValue" : null, 
          "defaultValueFormula" : null, 
          "defaultedOnCreate" : false, 
          "dependentPicklist" : false, 
          "deprecatedAndHidden" : false, 
          "digits" : 0, 
          "displayLocationInDecimal" : false, 
          "externalId" : false, 
          "extraTypeInfo" : null, 
          "filterable" : true, 
          "groupable" : true, 
          "htmlFormatted" : false, 
          "idLookup" : false, 
          "inlineHelpText" : null, 
          "label" : "Account Name", 
          "length" : 255, 
          "mask" : null, 
          "maskType" : null, 
          "name" : "Name", 
          "nameField" : true, 
          "namePointing" : false, 
          "nillable" : false, 
          "permissionable" : false, 
          "picklistValues" : [ ], 
          "precision" : 0, 
          "queryByDistance" : false, 
          "referenceTo" : [ ], 
          "relationshipName" : null, 
          "relationshipOrder" : null, 
          "restrictedDelete" : false, 
          "restrictedPicklist" : false, 
          "scale" : 0, 
          "soapType" : "xsd:string", 
          "sortable" : true, 
          "type" : "string", 
          "unique" : false, 
          "updateable" : true, 
          "writeRequiresMasterRead" : false 
        }, 
        "displayLines" : 1, 
        "tabOrder" : 2, 
        "type" : "Field", 
        "value" : "Name" 
      } ], 
      "placeholder" : false, 
      "required" : false 
    }, { 
      "editable" : false, 
      "label" : "Phone", 
      "layoutComponents" : [ { 
        "components" : [ ], 
        "details" : { 
          "autoNumber" : false, 
          "byteLength" : 120, 
          "calculated" : false, 
          "calculatedFormula" : null, 
          "cascadeDelete" : false, 
          "caseSensitive" : false, 
          "controllerName" : null, 
          "createable" : true, 
          "custom" : false, 
          "defaultValue" : null, 
          "defaultValueFormula" : null, 
          "defaultedOnCreate" : false, 
          "dependentPicklist" : false, 
          "deprecatedAndHidden" : false, 
          "digits" : 0, 
          "displayLocationInDecimal" : false, 
          "externalId" : false, 
          "extraTypeInfo" : null, 
          "filterable" : true,
          "groupable" : true,
          "htmlFormatted" : false,
          "idLookup" : false,
          "inlineHelpText" : null,
          "label" : "Account Phone",
          "length" : 40,
          "mask" : null,
          "maskType" : null,
          "name" : "Phone",
          "nameField" : false,
          "namePointing" : false,
          "nillable" : true,
          "permissionable" : true,
          "picklistValues" : [ ],
          "precision" : 0,
          "queryByDistance" : false,
          "referenceTo" : [ ],
          "relationshipName" : null,
          "relationshipOrder" : null,
          "restrictedDelete" : false,
          "restrictedPicklist" : false,
          "scale" : 0,
          "soapType" : "xsd:string",
          "sortable" : true,
          "type" : "phone",
          "unique" : false,
          "updateable" : true,
          "writeRequiresMasterRead" : false 
        }, 
        "displayLines" : 1, 
        "tabOrder" : 3, 
        "type" : "Field", 
        "value" : "Phone" 
      } ], 
      "placeholder" : false, 
      "required" : false 
    } ], 
    "id" : "0AHD000000000AbOAI", 
    "imageItems" : [ { 
      "editable" : false, 
      "label" : "Photo URL", 
      "layoutComponents" : [ { 
        "components" : [ ], 
        "details" : { 
          "autoNumber" : false, 
          "byteLength" : 765, 
          "calculated" : false, 
          "calculatedFormula" : null, 
          "cascadeDelete" : false, 
          "caseSensitive" : false, 
          "controllerName" : null, 
          "createable" : false, 
          "custom" : false, 
          "defaultValue" : null, 
          "defaultValueFormula" : null, 
          "defaultedOnCreate" : false, 
          "dependentPicklist" : false, 
          "deprecatedAndHidden" : false, 
          "digits" : 0, 
          "displayLocationInDecimal" : false, 
          "externalId" : false, 
          "extraTypeInfo" : "imageurl", 
          "filterable" : true, 
          "groupable" : true, 
          "htmlFormatted" : false, 
          "idLookup" : false, 
          "inlineHelpText" : null, 
          "label" : "Photo URL", 
          "length" : 255, 
          "mask" : null, 
          "maskType" : null, 
          "name" : "PhotoUrl", 
          "nameField" : false, 
          "namePointing" : false, 
          "nillable" : true, 
          "permissionable" : false, 
          "picklistValues" : [ ], 
          "precision" : 0, 
          "queryByDistance" : false, 
          "referenceTo" : [ ], 
          "relationshipName" : null, 
          "relationshipOrder" : null, 
          "restrictedDelete" : false, 
          "restrictedPicklist" : false, 
          "scale" : 0, 
          "soapType" : 
          "xsd:string", 
          "sortable" : true, 
          "type" : "url", 
          "unique" : false, 
          "updateable" : false, 
          "writeRequiresMasterRead" : false 
        }, 
        "displayLines" : 1, 
        "tabOrder" : 1, 
        "type" : "Field", 
        "value" : "PhotoUrl" 
      } ], 
      "placeholder" : false, 
      "required" : false 
    } ], 
    "label" : "Custom Account Compact Layout", 
    "name" : "Custom_Account_Compact_Layout"
  } ], 
  "defaultCompactLayoutId" : "0AHD000000000AbOAI", 
  "recordTypeCompactLayoutMappings" : [ { 
    "available" : true, 
    "compactLayoutId" : "0AHD000000000AbOAI", 
    "compactLayoutName" : "Custom_Account_Compact_Layout", 
    "recordTypeId" : "012000000000000AAA", 
    "recordTypeName" : "Master", 
    "urls" : { 
      "compactLayout" : "/services/data/v66.0/sobjects/Account/describe/compactLayouts/012000000000000AAA" 
    } 
  } ], 
  "urls" : { 
    "primary" : "/services/data/v66.0/sobjects/Account/describe/compactLayouts/primary" 
  } 
}
```
