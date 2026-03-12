---
title: "exclude"
domain: chatterapi
topic: exclude
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:21.780Z
estimatedTokens: 696
keywords: [exclude, specific, API, version, 27.0, later]
---

# exclude

> To exclude specific properties from a response body, use
the exclude request parameter.
The exclude parameter is available
in API version 27.0 and later.

# exclude

To exclude specific properties from a response body, use the exclude request parameter. The exclude parameter is available in API version 27.0 and later.

The value for the exclude query is a list of properties separated by bars (|). You must URL encode the bars as %7C. You must include a forward slash before each property name.

The following request excludes both the aboutMe and address properties from a response body:

```

```

The following table lists rules for using the exclude query parameter, as well as additional examples.

| Description | Original Output | Exclude Value | Filtered Output |
| --- | --- | --- | --- |
| Include a forward slash (/) before property names or the request returns an error. | {  "bar" : "bar value",  "baz" : "baz value" } | exclude=bar | 400 error with error code INVALID_FILTER_VALUE |
| Filter properties by name. | {  "bar" : "bar value",  "baz" : "baz value" } | exclude=/bar | {  "baz" : "baz  value" } |
| Top-level properties cannot be filtered. Note that this query string doesn’t return an error. | <foo>  <bar>bar value</bar>  <baz>baz value</baz> </foo> | exclude=/foo | <foo>  <bar>bar value  </bar>  <baz>baz value  </baz> </foo> |
| Use a bar (\|) delimiter to filter multiple properties. URL encode the delimiter as %7C. | {  "foo" : "foo value",  "bar" : "bar value",  "baz" : "baz value" } | exclude=/foo%7C/bar | {  "baz" : "baz  value" } |
| Filtering a response body filters everything in the response body. | <foo>  <bar>bar value</bar>  <baz>baz value</baz>  <someObject>    <sub>sub 1</sub>  </someObject> </foo> | exclude=/someObject | <foo>  <bar>bar value </bar>  <baz>baz value  </baz> </foo> |
| To filter a property nested in a response body, include the parent response body name as a filter segment. | <foo>  <bar>bar value</bar>  <baz>baz value</baz>  <someObject>    <sub>sub value</sub>   </someObject> </foo> | exclude=/someObject/sub | <foo>  <bar>bar value  </bar>  <baz>baz value  </baz>  <someObject>  </someObject> </foo> |
| Identify an item in a list by its property name. This example uses XML. | <foo>  <bar>bar valu</bar>  <baz>baz value</baz>  <someList>    <item>      <id>1</id>    </item>    <item>      <id>2</id>    </item>    <item>      <id>3</id>    </item>  </someList> </foo> | exclude=/someList/item/id | <foo>  <bar>bar value  </bar>  <baz>baz value  </baz>  <someList>    <item/>    <item/>    <item/>  </someList> </foo> |
| Identify an item in a list by its property name. This example uses JSON. | {  "bar" : "bar value",  "baz" : "baz value",  "someList" : [    {      "id" : "1"    },    {      "id" : "2"    } ,    {      "id" : "3"    }   ] } | exclude=/someList/item/id | {  "bar" : "bar value",  "baz" : "baz value",  "someList" : [    {},    {},    {}  ] } |

## Code Examples

```
/chatter/users/me?exclude=/aboutMe%7C/address
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
 "baz" : "baz 
value"
}
```

```
<foo>
 <bar>bar value</bar>
 <baz>baz value</baz>
</foo>
```
