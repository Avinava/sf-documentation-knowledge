---
title: "Understanding Apex Describe Information"
domain: apex-guide
topic: understanding-apex-describe-information
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:33:33.345Z
estimatedTokens: 1237
keywords: [Understanding, Apex, Describe, sObjects, either, tokens, describeSObjects, Schema, Describing, sObject, Obtaining, Results]
---

# Understanding Apex Describe Information

> You can describe sObjects either by using tokens or the describeSObjects Schema method.

# Understanding Apex Describe Information

You can describe sObjects either by using tokens or the describeSObjects Schema method.

Apex provides two data structures and a method for sObject and field describe information:

-   Token—a lightweight, serializable reference to an sObject or a field that is validated at compile time. This is used for token describes.
-   The describeSObjects method—a method in the Schema class that performs describes on one or more sObject types.
-   Describe result—an object of type Schema.DescribeSObjectResult that contains all the describe properties for the sObject or field. Describe result objects are not serializable, and are validated at runtime. This result object is returned when performing the describe, using either the sObject token or the describeSObjects method.

## Describing sObjects Using Tokens

It is easy to move from a token to its describe result, and vice versa. Both sObject and field tokens have the method getDescribe which returns the describe result for that token. On the describe result, the getSObjectType and getSObjectField methods return the tokens for sObject and field, respectively.

Because tokens are lightweight, using them can make your code faster and more efficient. For example, use the token version of an sObject or field when you are determining the type of an sObject or field that your code needs to use. The token can be compared using the equality operator (\==) to determine whether an sObject is the Account object, for example, or whether a field is the Name field or a custom calculated field.

The following code provides a general example of how to use tokens and describe results to access information about sObject and field properties:

```

```

The following algorithm shows how you can work with describe information in Apex:

1.  Generate a list or map of tokens for the sObjects in your organization (see [Accessing All sObjects](atlas.en-us.apexcode.meta/apexcode/apex_dynamic_global_describe.htm#apex_dynamic_global_describe).)
2.  Determine the sObject you need to access.
3.  Generate the describe result for the sObject.
4.  If necessary, generate a map of field tokens for the sObject (see [Accessing All Field Describe Results for an sObject](atlas.en-us.apexcode.meta/apexcode/apex_dynamic_field_tokens.htm#apex_describe_object_all_fields).)
5.  Generate the describe result for the field the code needs to access.

## Using sObject Tokens

SObjects, such as Account and MyCustomObject\_\_c, act as static classes with special static methods and member variables for accessing token and describe result information. You must explicitly reference an sObject and field name at compile time to gain access to the describe result.

To access the token for an sObject, use one of the following methods:

-   Access the sObjectType member variable on an sObject type, such as Account.
-   Call the getSObjectType method on an sObject describe result, an sObject variable, a list, or a map.

Schema.SObjectType is the data type for an sObject token.

In the following example, the token for the Account sObject is returned:

```

```

The following also returns a token for the Account sObject:

```

```

This example can be used to determine whether an sObject or a list of sObjects is of a particular type:

```

```

Some standard sObjects have a field called sObjectType, for example, AssignmentRule, QueueSObject, and RecordType. For these types of sObjects, always use the getSObjectType method for retrieving the token. If you use the property, for example, RecordType.sObjectType, the field is returned.

## Obtaining sObject Describe Results Using Tokens

To access the describe result for an sObject, use one of the following methods:

-   Call the getDescribe method on an sObject token.
-   Use the Schema sObjectType static variable with the name of the sObject. For example, Schema.sObjectType.Lead.

Schema.DescribeSObjectResult is the data type for an sObject describe result.

The following example uses the getDescribe method on an sObject token:

```

```

The following example uses the Schema sObjectType static member variable:

```

```

For more information about the methods available with the sObject describe result, see [DescribeSObjectResultClass](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_sobject_describe.htm).

-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_dynamic_field_tokens.htm "Using Field Tokens")

#### See Also

-   [DescribeSObjectResult.fields()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_sobject_describe.htm "DescribeSObjectResult.fields() - HTML (New Window)")

-   [DescribeSObjectResult.fieldsets()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_sobject_describe.htm "DescribeSObjectResult.fieldsets() - HTML (New Window)")

## Code Examples

```apex
// Create a new account as the generic type sObject
sObject s = new Account();

// Verify that the generic sObject is an Account sObject
System.assert(s.getsObjectType() == Account.sObjectType);

// Get the sObject describe result for the Account object
Schema.DescribeSObjectResult dsr = Account.sObjectType.getDescribe();

// Get the field describe result for the Name field on the Account object
Schema.DescribeFieldResult dfr = Schema.sObjectType.Account.fields.Name;

// Verify that the field token is the token for the Name field on an Account object
System.assert(dfr.getSObjectField() == Account.Name);

// Get the field describe result from the token
dfr = dfr.getSObjectField().getDescribe();
```

```
Schema.sObjectType t = Account.sObjectType;
```

```
Account a = new Account();
Schema.sObjectType t = a.getSObjectType();
```

```apex
// Create a generic sObject variable s
SObject s = Database.query('SELECT Id FROM Account LIMIT 1');

// Verify if that sObject variable is an Account token
System.assertEquals(s.getSObjectType(), Account.sObjectType);

// Create a list of generic sObjects 
List<sObject> sobjList = new Account[]{};

// Verify if the list of sObjects contains Account tokens
System.assertEquals(sobjList.getSObjectType(), Account.sObjectType);
```

```
Schema.DescribeSObjectResult dsr = Account.sObjectType.getDescribe();
```

## Related Topics

- Accessing All sObjects (atlas.en-us.apexcode.meta/apexcode/apex_dynamic_global_describe.htm)
- Accessing All Field Describe Results for an
      sObject (atlas.en-us.apexcode.meta/apexcode/apex_dynamic_field_tokens.htm)
- Next → (atlas.en-us.apexcode.meta/apexcode/apex_dynamic_field_tokens.htm)
