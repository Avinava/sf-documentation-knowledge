---
title: "RedirectTo"
domain: mc-programmatic-content
topic: redirectto
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:22.713Z
estimatedTokens: 534
keywords: [RedirectTo, Function, Ordinal, URL, sting, variable, containing, redirect, **Overview**, **Syntax**, browser]
---

> RedirectTo(1)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    URL sting or variable containing URL string to which to redirect

# RedirectTo

## **Overview**

Allows a client to specify the target of a link originate from a complete URL stored in an attribute, data extension field, or variable. Only use this function in HTML emails within the href attribute of an <a< tag. In text emails, include the prefix http:// and ensure you use no spaces within the parentheses. In order to retain tracking information for clicked links, you must include the anchor tags <a</a< within the email itself and not the link retrieved via AMPscript. This function only provides tracking information for clickable links within an email message. You cannot retrieve tracking information when using this function with URLs stored in a variable or used as part of a query string parameter.

### **Syntax**

RedirectTo(1)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | URL sting or variable containing URL string to which to redirect |

### Usage

Given the data extension Vacation\_Deals:

| Customer_ID | Type | Link |
| --- | --- | --- |
| 123 | Flight | http://example.com/flights/ |
| 123 | Car | http://example.com/cars/ |
| 456 | Hotel | http://example.com/hotels/ |
```
%%[
Var @rows, @link, @cntr, @type
Set @rows=LookupRows('Vacation_Deals','CustomerID','123')
For @cntr=1 to Rowcount(@rows) do
set @type=Field(Row(@rows, @cntr),'type')
set @link=Field(Row(@rows, @cntr),'link')
]%%
<a href='%%=RedirectTo(@link)=%%'>%%=v(@type)=%%</a>
%%[
Next @cntr
]%%
```

System returns:

```
Flight Deals
Car Deals
```

Where Flight Deals links to [http://example.com/flights/](http://example.com/flights/) and Car Deals links to [http://example.com/cars/](http://example.com/cars/). You can also use this function to include data extension values at the end of a hyperlink within an email message, as shown in the example below:

```
%%[Set @email = 'aruiz@example.com'
Set @firstName = 'Angel'
Set @url = Concat('http://www.example.com?email=',@email,'&name=',@firstName)]%%
<a href = '%%=RedirectTo(@url)=%%'>Click Here</a>
```

System returns:

```
http://www.example.com?email=aruiz@...com&amp;name=Angel
```

Last Updated: Jun 8, 2021

## Code Examples

```
<script runat="server">
     var email = "aruiz@example.com";
     var firstName = "Angela";
     var baseUrl = "https://example.com?email=";
     var nameJoin = "&name=";
     Platform.Function.RedirectTo(baseUrl.contact(email,nameJoin,firstName);
</script>
```

```
https://www.example.com?email=aruiz@example.com&name=Angela
```
