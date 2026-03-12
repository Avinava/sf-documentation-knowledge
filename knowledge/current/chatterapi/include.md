---
title: "include"
domain: chatterapi
topic: include
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:21.794Z
estimatedTokens: 687
keywords: [include, limit, specific, query]
---

# include

> To limit the response body to specific properties, use
the include query string parameter.

# include

To limit the response body to specific properties, use the include query string parameter.

The value for the include query string parameter is a list of properties separated by bars (|). You must URL encode the bars as %7C. Include a forward slash before every property name.

The following request includes only the aboutMe property and the address property in a response body:

```

```

The following table lists rules for using the include query parameter.

| Description | Original Output | Include Value | Filtered Output |
| --- | --- | --- | --- |
| Include a forward slash (/) before property names or the request returns an error. | {  "bar" : "bar value",  "baz" : "baz value" } | include=bar | 400 error with error code INVALID_FILTER_VALUE |
| Filter properties by name. | {  "bar" : "bar value",  "baz" : "baz value" } | include=/bar | {  "bar" : "bar  value", } |
| Top-level properties are ignored. Note there is no error when you try this. | <foo>  <bar>bar value</bar>  <baz>baz value</baz> </foo> | include=/foo | <foo>   <bar>bar value   </bar>   <baz>baz value   </baz> </foo> |
| Use a bar (\|) delimiter to filter multiple properties. URL encode the delimiter as %7C. | {  "foo" : "foo value",  "bar" : "bar value",  "baz" : "baz value" } | include=/foo%7C/bar | {   "foo" : "foo  value",   "bar" : "bar  value", } |
| Filtering a response body filters everything below it. | <foo>  <bar>bar value</bar>  <baz>baz value</baz>  <someObject>    <sub>sub 1</sub>  </someObject> </foo> | include=/someObject | <foo>   <someObject>     <sub>sub 1     </sub>   </someObject> </foo> |
| To filter a property nested in a response body, include the parent response body name as a filter segment. | <foo>  <bar>bar value</bar>  <baz>baz value</baz>  <someObject>    <sub>sub value</sub>   </someObject> </foo> | include=/someObject/sub | <foo>   <someObject>    <sub>sub 1    </sub>   </someObject> </foo> |
| Identify an item in a list by its property name. This example uses XML. | <foo>  <bar>bar valu</bar>  <baz>baz value</baz>  <someList>    <item>      <id>1</id>    </item>    <item>      <id>2</id>    </item>    <item>      <id>3</id>    </item>  </someList> </foo> | include=/someList/item/id | <foo>  <someList>    <item>     <id>1</id>    </item>    <item>      <id>2</id>    </item>    <item>      <id>3</id>    </item>   </someList>  </foo> |
| Identify an item in a list by its property name. This example uses JSON. | {  "bar" : "bar value",  "baz" : "baz value",  "someList" : [    {      "id" : "1"    },    {      "id" : "2"    } ,    {      "id" : "3"    }   ] } | include=/someList/item/id | {  "someList" : [    {      "id" : "1"    },    {      "id" : "2"    } ,    {      "id" : "3"    }   ]  } |

## Code Examples

```
/chatter/users/me?include=/aboutMe%7C/address
```

```
{
 "bar" : "bar value",
 "baz" : "baz value"
}
```

```
{
 "bar" : "bar value",
 "baz" : "baz value"
}
```

```
{
 "bar" : "bar 
value",
}
```

```
<foo>
 <bar>bar value</bar>
 <baz>baz value</baz>
</foo>
```
