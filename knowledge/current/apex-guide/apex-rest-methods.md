---
title: "Apex REST Methods"
domain: apex-guide
topic: apex-rest-methods
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:33:33.946Z
estimatedTokens: 2691
keywords: [Apex, REST, supports, two, formats, representations, resources, JSON, XML, passed, indicated, Content-Type, HTTP, retrieve, Considerations]
---

# Apex REST Methods

> Apex REST supports two formats for representations of resources:
                JSON and XML. JSON representations are passed by default in the body of a request or
                response, and the format is indicated by the Content-Type property in the HTTP header. You can retrieve the
          

# Apex REST Methods

Apex REST supports two formats for representations of resources: JSON and XML. JSON representations are passed by default in the body of a request or response, and the format is indicated by the Content-Type property in the HTTP header. You can retrieve the body as a Blob from the HttpRequest object if there are no parameters to the Apex method. If parameters are defined in the Apex method, an attempt is made to deserialize the request body into those parameters. If the Apex method has a non-void return type, the resource representation is serialized into the response body.

These return and parameter types are allowed:

-   Apex primitives (excluding sObject and Blob).
-   sObjects
-   Lists or maps of Apex primitives or sObjects (only maps with String keys are supported).
-   [User-defined types](#ApexRESTUserDefinedTypes) that contain member variables of the types listed above.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Apex REST doesn’t support XML serialization and deserialization of Connect in Apex objects. Apex REST does support JSON serialization and deserialization of Connect in Apex objects. Also, some collection types, such as maps and lists, aren’t supported with XML. See [Request and Response Data Considerations](#RequestDataConsiderations) for details.

Methods annotated with @HttpGet or @HttpDelete must have no parameters. This is because GET and DELETE requests have no request body, so there's nothing to deserialize.

The @ReadOnly annotation supports the Apex REST annotations for all the HTTP requests: @HttpDelete, @HttpGet, @HttpPatch, @HttpPost, and @HttpPut.

A single Apex class annotated with @RestResource can't have multiple methods annotated with the same HTTP request method. For example, the same class can't have two methods annotated with @HttpGet.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Apex REST currently doesn't support requests of Content-Type multipart/form-data.

## Apex REST Method Considerations

Here are a few points to consider when you define Apex REST methods.

-   RestRequest and RestResponse objects are available by default in your Apex methods through the static RestContext object. This example shows how to access these objects through RestContext:

    ```

    ```

-   If the Apex method has no parameters, Apex REST copies the HTTP request body into the RestRequest.requestBody property. If the method has parameters, then Apex REST attempts to deserialize the data into those parameters and the data won't be deserialized into the RestRequest.requestBody property.
-   Apex REST uses similar serialization logic for the response. An Apex method with a non-void return type has the return value serialized into RestResponse.responseBody. If the return type includes fields with null values, those fields aren’t serialized into the response body.
-   Apex REST methods can be used in managed and unmanaged packages. When calling Apex REST methods that are contained in a managed package, you must include the managed package namespace in the REST call URL. For example, if the class is contained in a managed package namespace called packageNamespace and the Apex REST methods use a URL mapping of /MyMethod/\*, the URL used via REST to call these methods would be of the form https://instance.salesforce.com/services/apexrest/packageNamespace/MyMethod/. For more information about managed packages, see [What is a Package?](atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_dev.htm "Salesforce supports the creation and distribution of Apex through different types of packages. Understand the distinctions between package types, and recognize that Apex behavior can vary across them.").
-   If a login call is made from the API for a user with an expired or temporary password, subsequent API calls to custom Apex REST Web service methods aren't supported and result in the MUTUAL\_AUTHENTICATION\_FAILED error. Reset the user's password and make a call with an unexpired password to be able to call Apex Web service methods.
-   If the heap limit is exceeded in the process of serialization, an HTTP 200 code is returned and the error {"status":"some error occurred"} is appended to the partial JSON response. Returning a collection of sObjects from a REST method involves buffering the JSON serialized form of each sObject. Heap and CPU limits may not be encountered until after the HTTP response header and initial data has started streaming back to the client. To gain control of the statusCode and the responseBody, use a RestResponse instead of directly returning sObjects.

## User-Defined Types

You can use user-defined types for parameters in your Apex REST methods. Apex REST deserializes request data into public, private, or global class member variables of the user-defined type, unless the variable is declared as static or transient. For example, an Apex REST method that contains a user-defined type parameter might look like the following:

```

```

Valid JSON and XML request data for this method would look like:

```

```

```

```

The public, private, or global class member variables must be types allowed by Apex REST:

-   Apex primitives (excluding sObject and Blob).
-   sObjects
-   Lists or maps of Apex primitives or sObjects (only maps with String keys are supported).

When creating user-defined types used as Apex REST method parameters, avoid introducing any class member variable definitions that result in cycles (definitions that depend on each other) at run time in your user-defined types. Here's a simple example:

```

```

The code in the previous example compiles, but at run time when a request is made, Apex REST detects a cycle between instances of def1 and def2, and generates an HTTP 400 status code error response.

## Request and Response Data Considerations

Some additional things to keep in mind for the request data for your Apex REST methods:

-   The names of the Apex parameters matter, although the order doesn’t. For example, valid requests in both XML and JSON look like the following:

    ```

    ```

    ```

    ```

    ```

    ```

-   The URL patterns URLpattern and URLpattern/\* match the same URL. If one class has a urlMapping of URLpattern and another class has a urlMapping of URLpattern/\*, a REST request for this URL pattern resolves to the class that was saved first.
-   Some parameter and return types can't be used with XML as the Content-Type for the request or as the accepted format for the response, and hence, methods with these parameter or return types can't be used with XML. Lists, maps, or collections of collections, for example, List<List<String\>> aren't supported. However, you can use these types with JSON. If the parameter list includes a type that's invalid for XML and XML is sent, an HTTP 415 status code is returned. If the return type is a type that's invalid for XML and XML is the requested response format, an HTTP 406 status code is returned.
-   For request data in either JSON or XML, valid values for Boolean parameters are: true, false (both are treated as case-insensitive), 1 and 0 (the numeric values, not strings of “1” or “0”). Any other values for Boolean parameters result in an error.
-   If the JSON or XML request data contains multiple parameters of the same name, this results in an HTTP 400 status code error response. For example, if your method specifies an input parameter named x, the following JSON request data results in an error:

    ```

    ```

    Similarly, for user-defined types, if the request data includes data for the same user-defined type member variable multiple times, this results in an error. For example, given this Apex REST method and user-defined type:

    ```

    ```

    The following JSON request data also results in an error:

    ```

    ```

-   If you must specify a null value for one of your parameters in your request data, you can either omit the parameter entirely or specify a null value. In JSON, you can specify null as the value. In XML, you must use the http://www.w3.org/2001/XMLSchema-instance namespace with a nil value.
-   For XML request data, you must specify an XML namespace that references any Apex namespace your method uses. So, for example, if you define an Apex REST method such as:

    ```

    ```

    You can use the following XML request data:

    ```

    ```


## Response Status Codes

The status code of a response is set automatically. This table lists some HTTP status codes and what they mean in the context of the HTTP request method. For the full list of response status codes, see [statusCode](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_restresponse.htm#apex_System_RestResponse_statusCode).

| Request Method | Response Status Code | Description |
| --- | --- | --- |
| GET | 200 | The request was successful. |
| PATCH | 200 | The request was successful and the return type is non-void. |
| PATCH | 204 | The request was successful and the return type is void. |
| DELETE, GET, PATCH, POST, PUT | 400 | An unhandled user exception occurred. |
| DELETE, GET, PATCH, POST, PUT | 403 | You don't have access to the specified Apex class. |
| DELETE, GET, PATCH, POST, PUT | 404 | The URL is unmapped in an existing @RestResource annotation. |
| DELETE, GET, PATCH, POST, PUT | 404 | The URL extension is unsupported. |
| DELETE, GET, PATCH, POST, PUT | 404 | The Apex class with the specified namespace couldn't be found. |
| DELETE, GET, PATCH, POST, PUT | 405 | The request method doesn't have a corresponding Apex method. |
| DELETE, GET, PATCH, POST, PUT | 406 | The Content-Type property in the header was set to a value other than JSON or XML. |
| DELETE, GET, PATCH, POST, PUT | 406 | The header specified in the HTTP request isn’t supported. |
| GET, PATCH, POST, PUT | 406 | The XML return type specified for format is unsupported. |
| DELETE, GET, PATCH, POST, PUT | 415 | The XML parameter type is unsupported. |
| DELETE, GET, PATCH, POST, PUT | 415 | The Content-Header Type specified in the HTTP request header is unsupported. |
| DELETE, GET, PATCH, POST, PUT | 500 | An unhandled Apex exception occurred. |

#### See Also

-   [JSON Support](atlas.en-us.apexcode.meta/apexcode/apex_methods_system_json_overview.htm "JavaScript Object Notation (JSON) support in Apex enables the serialization of Apex objects into JSON format and the deserialization of serialized JSON content.")

-   [XML Support](atlas.en-us.apexcode.meta/apexcode/apex_xml_support.htm "Apex provides utility classes that enable the creation and parsing of XML content using streams and the DOM.")

## Code Examples

```
RestRequest req = RestContext.request;
RestResponse res = RestContext.response;
```

```apex
@RestResource(urlMapping='/user_defined_type_example/*')
global with sharing class MyOwnTypeRestResource {

    @HttpPost
    global static MyUserDefinedClass echoMyType(MyUserDefinedClass ic) {
        return ic;
    }

    global class MyUserDefinedClass {

        global String string1;
        global String string2 { get; set; }
        private String privateString;
        global transient String transientString;

    }
    
}
```

```apex
{
    "ic" : {
                "string1" : "value for string1",
                "string2" : "value for string2",
                "privateString" : "value for privateString"
            }
}
```

```apex
<request>
    <ic>
        <string1>value for string1</string1>
        <string2>value for string2</string2>
        <privateString>value for privateString</privateString>
    </ic>
</request>
```

```apex
@RestResource(urlMapping='/CycleExample/*')
global with sharing class ApexRESTCycleExample {
 
    @HttpGet
    global static MyUserDef1 doCycleTest() {
        MyUserDef1 def1 = new MyUserDef1();
        MyUserDef2 def2 = new MyUserDef2();
        def1.userDef2 = def2;
        def2.userDef1 = def1;
        return def1;
    }
 
    global class MyUserDef1 {
        MyUserDef2 userDef2;
    }    
 
    global class MyUserDef2 {
        MyUserDef1 userDef1;
    }
    
}
```

## Related Topics

- What is a
                        Package? (atlas.en-us.apexcode.meta/apexcode/apex_manpkgs_dev.htm)
- JSON Support (atlas.en-us.apexcode.meta/apexcode/apex_methods_system_json_overview.htm)
- XML Support (atlas.en-us.apexcode.meta/apexcode/apex_xml_support.htm)
