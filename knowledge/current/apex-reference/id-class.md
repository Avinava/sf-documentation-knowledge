---
title: "Id Class"
domain: apex-reference
topic: id-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:30.744Z
estimatedTokens: 3174
namespace: System
keywords: [Converts, specified, ID., restoreCasing, true, represents, 18-character, incorrect, casing, correctly, aligned, its, encoded, casing., Example, Getting, sObject, Token, addError, errorMsg]
---

# Id Class

> Converts the specified string into an ID and returns the ID. If
        restoreCasing is true,
      and the string represents an 18-character ID that has incorrect casing, the method returns an
      18-character ID that is correctly aligned with its encoded casing.

**Namespace:** `System`

# Id Class

Contains methods for the ID primitive data type.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Example: Getting an sObject Token From an ID

This sample shows how to use the getSObjectType method to obtain an sObject token from an ID. The updateOwner method in this sample accepts a list of IDs of the sObjects to update the ownerId field of. This list contains IDs of sObjects of the same type. The second parameter is the new owner ID. Note that since it is a future method, it doesn’t accept sObject types as parameters; this is why it accepts IDs of sObjects. This method gets the sObject token from the first ID in the list, then does a describe to obtain the object name and constructs a query dynamicallly. It then queries for all sObjects and updates their owner ID fields to the new owner ID.

```

```

## Id Methods

The following are methods for Id.

-   **[addError(errorMsg)](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_System_Id_addError)**
    Marks a trigger record with a custom error message and prevents any DML operation from occurring.
-   **[addError(errorMsg, escape)](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_System_Id_addError_2)**
    Marks a trigger record with a custom error message, specifies if the error message should be escaped, and prevents any DML operation from occurring.
-   **[addError(exceptionError)](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_System_Id_addError_3)**
    Marks a trigger record with a custom error message and prevents any DML operation from occurring.
-   **[addError(exceptionError, escape)](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_System_Id_addError_4)**
    Marks a trigger record with a custom error message and prevents any DML operation from occurring.
-   **[getSObjectType()](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_System_Id_getSObjectType)**
    Returns the token for the sObject corresponding to this ID. This method is primarily used with describe information.
-   **[to15()](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_System_Id_to15)**
    Converts an 18-character Id value to a 15-character case-sensitive string.
-   **[valueOf(toID)](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_System_Id_valueOf)**
    Converts the specified String into an ID and returns the ID.
-   **[valueOf(str, restoreCasing)](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_System_id_valueOf_2)**
    Converts the specified string into an ID and returns the ID. If restoreCasing is true, and the string represents an 18-character ID that has incorrect casing, the method returns an 18-character ID that is correctly aligned with its encoded casing.

### addError(errorMsg)

Marks a trigger record with a custom error message and prevents any DML operation from occurring.

#### Signature

public Void addError(String errorMsg)

#### Parameters

errorMsg

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The error message to mark the record with.

#### Return Value

Type: Void

#### Usage

This method is similar to the [addError(errorMsg)](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_System_SObject_addError "Marks a trigger record with a custom error message and prevents any DML operation from occurring.") sObject method.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

This method escapes any HTML markup in the specified error message. The escaped characters are: , <, \>, &, ", \\, \\u2028, \\u2029, and \\u00a9. As a result, HTML markup is not rendered; instead, it is displayed as text in the Salesforce user interface.

#### Example

```

```

### addError(errorMsg, escape)

Marks a trigger record with a custom error message, specifies if the error message should be escaped, and prevents any DML operation from occurring.

#### Signature

public Void addError(String errorMsg, Boolean escape)

#### Parameters

errorMsg

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The error message to mark the record with.

escape

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Indicates whether any HTML markup in the custom error message should be escaped (true) or not (false). This parameter is ignored in both Lightning Experience and the Salesforce mobile app, and the HTML is always escaped. The escape parameter only applies in Salesforce Classic.

#### Return Value

Type: Void

#### Usage

The escaped characters are: , <, \>, &, ", \\, \\u2028, \\u2029, and \\u00a9. As a result, HTML markup is not rendered; instead, it is displayed as text in the Salesforce user interface.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=apexref)

#### Warning

Be cautious if you specify false for the escape argument. Unescaped strings displayed in the Salesforce user interface can represent a vulnerability in the system because these strings might contain harmful code. If you want to include HTML markup in the error message, call this method with a false escape argument. Make sure that you escape any dynamic content, such as input field values. Otherwise, specify true for the escape argument or call [addError(String errorMsg)](#apex_System_Id_addError "Marks a trigger record with a custom error message and prevents any DML operation from occurring.") instead.

#### Example

```

```

### addError(exceptionError)

Marks a trigger record with a custom error message and prevents any DML operation from occurring.

#### Signature

public Void addError(Exception exceptionError)

#### Parameters

exceptionError

Type: [System.Exception](atlas.en-us.apexref.meta/apexref/apex_classes_exception_methods.htm "An exception denotes an error that disrupts the normal flow of code execution. You can use Apex built-in exceptions or create custom exceptions. All exceptions have common methods.")

An Exception object or a custom exception object that contains the error message to mark the record with.

#### Return Value

Type: Void

#### Usage

This method is similar to the [addError(exceptionError)](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_System_SObject_addError_3 "Marks a trigger record with a custom error message and prevents any DML operation from occurring.") sObject method.

This method escapes any HTML markup in the specified error message. The escaped characters are: , <, \>, &, ", \\, \\u2028, \\u2029, and \\u00a9. As a result, HTML markup is not rendered; instead, it is displayed as text in the Salesforce user interface.

#### Example

```

```

### addError(exceptionError, escape)

Marks a trigger record with a custom error message and prevents any DML operation from occurring.

#### Signature

public Void addError(Exception exceptionError, Boolean escape)

#### Parameters

exceptionError

Type: [System.Exception](atlas.en-us.apexref.meta/apexref/apex_classes_exception_methods.htm "An exception denotes an error that disrupts the normal flow of code execution. You can use Apex built-in exceptions or create custom exceptions. All exceptions have common methods.")

An Exception object or a custom exception object that contains the error message to mark the record with.

escape

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Indicates whether any HTML markup in the custom error message should be escaped (true) or not (false). This parameter is ignored in both Lightning Experience and the Salesforce mobile app, and the HTML is always escaped. The escape parameter only applies in Salesforce Classic.

#### Return Value

Type: Void

#### Usage

The escaped characters are: , <, \>, &, ", \\, \\u2028, \\u2029, and \\u00a9. As a result, HTML markup is not rendered; instead, it is displayed as text in the Salesforce user interface.

![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=apexref)

#### Warning

Be cautious if you specify false for the escape argument. Unescaped strings displayed in the Salesforce user interface can represent a vulnerability in the system because these strings might contain harmful code. If you want to include HTML markup in the error message, call this method with a false escape argument. Make sure that you escape any dynamic content, such as input field values. Otherwise, specify true for the escape argument or call [addError(Exception e)](#apex_System_Id_addError_3 "Marks a trigger record with a custom error message and prevents any DML operation from occurring.") instead.

#### Example

```

```

### getSObjectType()

Returns the token for the sObject corresponding to this ID. This method is primarily used with describe information.

#### Signature

public Schema.SObjectType getSObjectType()

#### Return Value

Type: [Schema.SObjectType](atlas.en-us.apexref.meta/apexref/apex_class_Schema_SObjectType.htm#apex_class_Schema_SObjectType "A Schema.sObjectType object is returned from the field describe result using the getReferenceTo method, or from the sObject describe result using the getSObjectType method.")

#### Usage

For more information about describes, see [Understanding Apex Describe Information](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dynamic_describe_objects_understanding.htm).

#### Example

```

```

### to15()

Converts an 18-character Id value to a 15-character case-sensitive string.

#### Signature

public static string to15()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Example

```

```

### valueOf(toID)

Converts the specified String into an ID and returns the ID.

#### Signature

public static ID valueOf(String toID)

#### Parameters

toID

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [ID](#apex_methods_system_id "Contains methods for the ID primitive data type.")

#### Example

```

```

#### Versioned Behavior Changes

In API version 54.0 and later, assignment of an invalid 15 or 18 character ID to a variable results in a System.StringException exception.

### valueOf(str, restoreCasing)

Converts the specified string into an ID and returns the ID. If restoreCasing is true, and the string represents an 18-character ID that has incorrect casing, the method returns an 18-character ID that is correctly aligned with its encoded casing.

#### Signature

public static Id valueOf(String str, Boolean restoreCasing)

#### Parameters

str

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

String to be converted to an ID

restoreCasing

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

If set to true, and str represents an 18-character ID, the method returns an 18-character ID that is correctly aligned with its casing.

#### Return Value

Type: [Id](#apex_methods_system_id "Contains methods for the ID primitive data type.")

The return value depends on both the str and the restoreCasing parameter values.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

If the str is invalid, the method throws a System.StringException exception.

| Parameters | restoreCasing=true | restoreCasing=false |
| --- | --- | --- |
| Valid 15-character str value | Because the 15-character input value can’t be encoded for casing, the method throws a System.StringException. | The method returns a 15-character ID. |
| Valid 18-character str value | The method returns an 18-character ID that is correctly aligned with its encoded casing. | The method doesn’t attempt to correctly align the casing of the 18-character ID and returns an 18-character ID. |

## Code Examples

```apex
public class MyDynamicSolution {
    @future
    public static void updateOwner(List<ID> objIds, ID newOwnerId) {
        // Validate input
        System.assert(objIds != null);
        System.assert(objIds.size() > 0);
        System.assert(newOwnerId != null);
        
        // Get the sObject token from the first ID
        // (the List contains IDs of sObjects of the same type).
        Schema.SObjectType token = objIds[0].getSObjectType();
        
        // Using the token, do a describe 
        // and construct a query dynamically. 
        Schema.DescribeSObjectResult dr = token.getDescribe();
        String queryString = 'SELECT ownerId FROM ' + dr.getName() + 
            ' WHERE ';
        for(ID objId : objIds) {
            queryString += 'Id=\'' + objId + '\' OR ';
        }    
        // Remove the last ' OR'
        queryString = queryString.subString(0, queryString.length() - 4);

        sObject[] objDBList = Database.query(queryString);
        System.assert(objDBList.size() > 0);
        
        // Update the owner ID on the sObjects
        for(Integer i=0;i<objDBList.size();i++) {
            objDBList[i].put('ownerId', newOwnerId);
        }        
        Database.SaveResult[] srList = Database.update(objDBList, false);
        for(Database.SaveResult sr : srList) {
            if (sr.isSuccess()) {
                System.debug('Updated owner ID successfully for ' + 
                    dr.getName() + ' ID ' + sr.getId());
            }
            else {
                System.debug('Updating ' + dr.getName() + ' returned the following errors.');
                for(Database.Error e : sr.getErrors()) {
                    System.debug(e.getMessage());
                }
            }
        }
    }
}
```

```
Trigger.new[0].Id.addError('bad');
```

```
Trigger.new[0].Id.addError('Fix & resubmit', false);
```

```apex
public class MyException extends Exception{}

Trigger.new[0].Id.addError(new myException('Invalid Id'));
```

```apex
public class MyException extends Exception{}

account a = new account();
a.addError(new MyException('Invalid Id & other issues'), false);
```

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- addError(errorMsg) (atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm)
- addError(errorMsg, escape) (atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm)
- addError(exceptionError) (atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm)
- addError(exceptionError, escape) (atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm)
- getSObjectType() (atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm)
- to15() (atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm)
- valueOf(toID) (atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm)
- valueOf(str, restoreCasing) (atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
