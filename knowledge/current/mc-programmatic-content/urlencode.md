---
title: "UrlEncode"
domain: mc-programmatic-content
topic: urlencode
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:28.224Z
estimatedTokens: 221
keywords: [UrlEncode, Function, Ordinal, URL, encode, whether, spaces, character, encodes, **Overview**, **Syntax**, URLEncode, containing, attribute, indicating, how, handles, illegal, characters, Usage]
---

# UrlEncode

> URLEncode(1, 2, 3)


  
    Function Properties
   
   
    
      Ordinal
      Type
      
      Description
    
  
  


    1
    string
    Required
    String containing the URL and attribute value



    2
    boolean
    
    Value indicating how function handles illegal URL characters. A va

# URLEncode

## **Overview**

Returns the specified URL with spaces replaced with %20 or fully encodes all non-alphanumeric characters.

### **Syntax**

URLEncode(1, 2, 3)
| Ordinal | Type |  | Description |
| --- | --- | --- | --- |
| 1 | string | Required | String containing the URL and attribute value |
| 2 | boolean |  | Value indicating how function handles illegal URL characters. A value of 0 replaces space in URL with %20. A value of 1 encodes any illegal characters used in URL, such as spaces or accented letters, in the query string of the given URL. This parameter defaults to 0. |
| 3 | boolean |  | Value indicating how function encodes passed string values. A value of 0 encodes only portion of passed string following the ? character. A value of 1 encodes full passed string. This parameter defaults to 0. |

### Usage

#### Example 1:

```
URLEncode('http://example.com?p=first name')
```

System returns:

```
http://example.com?p=first%20name
```

#### Example 2:

```
URLEncode('http://example.com?p=examplé',1,0)
```

System returns:

```
http://example.com?p%3dexampl%c3%a9
```

#### Example 3:

```
URLEncode('examplé',1,1)
```

System returns:

```
exampl%c3%a9
```

Last Updated: Jun 8, 2021

## Code Examples

```
<script runat="server">
     Platform.Function.UrlEncode("http://www.example.com?value=123 123");
</script>

<script>
     Platform.Function.UrlEncode("http://www.example.com?value=123 123",true);
</script>
```

```
http://www.example.com?value=123%20123
```

```
http://www.example.com?value=123+123
```
