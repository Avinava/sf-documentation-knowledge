---
title: "GetFormField"
domain: mc-programmatic-content
topic: getformfield
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:28.193Z
estimatedTokens: 107
keywords: [GetFormField, Function, Ordinal, specifoed, data, **Overview**, **Syntax**, Key, identify, applicable, form, Members]
---

# GetFormField

> GetFormField(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    Key value used to identify applicable form field

# GetFormField

## **Overview**

Pulls back form field information POSTed to the page based on a specified key

### **Syntax**

GetFormField(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | Key value used to identify applicable form field |

## Members

You can retrieve member values using these strings:

-   ApplicationID
-   PackageID
-   ApplicationBaseURL
-   URL
-   PagePath
-   Method

## Example

This sample code requests a form field based on the supplied key:

```
Request.GetFormField("bar");
```

This sample code provides examples of how to call a member:

```
var requestURL = Request.URL();
var requestMethod = Request.Method();
```

> You must escape any HTML form field information POSTed to the page to avoid an error. Otherwise, the application will block the information for security reasons.

Last Updated: Jun 8, 2021

## Code Examples

```
<script runat=server>
     var formField = Platform.Request.GetFormField('fieldName');
</script>
```
