---
title: "Using Field Tokens"
domain: apex-guide
topic: using-field-tokens
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:47.068Z
keywords: [Field, Tokens, Note, Describe, Results, Accessing, sObject, Considerations, Versioned, Behavior, Changes, See]
---

# Using Field Tokens

# Using Field Tokens

To access the token for a field, use one of the following methods:

-   Access the static member variable name of an sObject static type, for example, Account.Name.
-   Call the getSObjectField method on a field describe result.

The field token uses the data type Schema.SObjectField.

In the following example, the field token is returned for the Account object's Description field:

```

```

In the following example, the field token is returned from the field describe result:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Field tokens aren't available for person accounts. If you access Schema.Account.fieldname, you get an exception error. Instead, specify the field name as a string.

## Using Field Describe Results

To access the describe result for a field, use one of the following methods:

-   Call the getDescribe method on a field token.
-   Access the fields member variable of an sObject token with a field member variable (such as Name, BillingCity, and so on.)

The field describe result uses the data type Schema.DescribeFieldResult.

The following example uses the getDescribe method:

```

```

This example uses the fields member variable method:

```

```

In the example above, the system uses special parsing to validate that the final member variable (Name) is valid for the specified sObject at compile time. When the parser finds the fields member variable, it looks backwards to find the name of the sObject (Account). It validates that the field name following the fields member variable is legitimate. The fields member variable only works when used in this manner.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Don’t use the fields member variable without also using either a field member variable name or the getMap method. For more information on getMap, see the next section.

For more information about the methods available with a field describe result, see [DescribeFieldResultClass](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_fields_describe.htm).

## Accessing All Field Describe Results for an sObject

Use the field describe result's getMap method to return a map that represents the relationship between all the field names (keys) and the field tokens (values) for an sObject.

The following example generates a map that can be used to access a field by name:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

The value type of this map is not a field describe result. Using the describe results would take too many system resources. Instead, it is a map of tokens that you can use to find the appropriate field. After you determine the field, generate the describe result for it.

The map has the following characteristics:

-   It is dynamic, that is, it is generated at runtime on the fields for that sObject.
-   All field names are case insensitive.
-   The keys use namespaces as required.
-   The keys reflect whether the field is a custom object.

## Field Describe Considerations

Note the following when describing fields.

-   A field describe that’s executed from within an installed managed package returns Chatter fields even if Chatter is not enabled in the installing organization. This is not true if the field describe is executed from a class that’s not within an installed managed package.
-   When you describe sObjects and their fields from within an Apex class, custom fields of new field types are returned regardless of the API version that the class is saved in. If a field type, such as the geolocation field type, is available only in a recent API version, components of a geolocation field are returned even if the class is saved in an earlier API version.

## Versioned Behavior Changes

In API version 34.0 and later, Schema.DescribeSObjectResult on a custom SObjectType includes map keys prefixed with the namespace, even if the namespace is that of currently executing code. If you work with multiple namespaces and generate runtime describe data, make sure that your code accesses keys correctly using the namespace prefix.

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_dynamic_describe_objects_understanding.htm "Understanding Apex Describe Information")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_dynamic_permissions.htm "Understanding Describe Information Permissions")

#### See Also

-   [DescribeSObjectResult.fields()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_sobject_describe.htm "DescribeSObjectResult.fields() - HTML (New Window)")
    
-   [DescribeSObjectResult.fieldsets()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_sobject_describe.htm "DescribeSObjectResult.fieldsets() - HTML (New Window)")