---
title: "QueueableDuplicateSignature.Builder Class"
domain: apex-reference
topic: queueableduplicatesignaturebuilder-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:21.745Z
estimatedTokens: 2215
namespace: System
keywords: [QueueableDuplicateSignature.Builder, Build, unique, queueable, job, inner, builder, builds, QueueableDuplicateSignature, input, addId, addInteger, addString, DuplicateSignature, AsyncOptions]
---

# QueueableDuplicateSignature.Builder Class

> Build a unique signature for your queueable job using this inner builder class. The
      build() class method builds a  QueueableDuplicateSignature object, with input from the addId(), addInteger(), and addString() methods. Use the DuplicateSignature property in the AsyncOptions
    class to store the queueable job signature. Enqueue your job by using the System.enqueueJob() with the AsyncOptions parameter.

**Namespace:** `System`

# QueueableDuplicateSignature.Builder Class

Build a unique signature for your queueable job using this inner builder class. The build() class method builds a QueueableDuplicateSignature object, with input from the addId(), addInteger(), and addString() methods. Use the DuplicateSignature property in the AsyncOptions class to store the queueable job signature. Enqueue your job by using the System.enqueueJob() with the AsyncOptions parameter.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Examples

This example builds the async job signature with UserId and the string MyQueueable.

AsyncOptions options = new AsyncOptions(); options.DuplicateSignature = new System.QueueableDuplicateSignature.Builder() .addId(UserInfo.getUserId()) .addString('MyQueueable') .build(); try { System.enqueueJob(new MyQueueable(), options); } catch (DuplicateMessageException ex) { //Exception is thrown if there is already an enqueued job with the same signature Assert.areEqual('Attempt to enqueue job with duplicate queueable signature', ex.getMessage()); }

This example builds the async job signature using ApexClass Id and the hash value of an sObject.

AsyncOptions options = new AsyncOptions(); options.DuplicateSignature = new QueueableDuplicateSignature.Builder() .addInteger(System.hashCode(someAccount)) .addId(\[SELECT Id FROM ApexClass WHERE Name='MyQueueable'\].Id) .build(); System.enqueueJob(new MyQueueable(), options);

-   **[QueueableDuplicateSignature.Builder Methods](atlas.en-us.apexref.meta/apexref/apex_class_System_QueueableDuplicateSignature_Builder.htm#apex_System_QueueableDuplicateSignature_Builder_methods)**


#### See Also

-   [*Apex Developer Guide*: Detecting Duplicate Queueable Jobs](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dedupe_queueable.htm "Apex Developer Guide: Detecting Duplicate Queueable Jobs - HTML (New Window)")


## QueueableDuplicateSignature.Builder Methods

The following are methods for QueueableDuplicateSignature.Builder.

-   **[addId(inputId)](atlas.en-us.apexref.meta/apexref/apex_class_System_QueueableDuplicateSignature_Builder.htm#apex_System_QueueableDuplicateSignature_Builder_addId)**
    Adds an ID to build a unique signature for a queueable job. You can then enqueue the job by using the signature as the AsyncOptions parameter to System.enqueueJob().
-   **[addInteger(inputInteger)](atlas.en-us.apexref.meta/apexref/apex_class_System_QueueableDuplicateSignature_Builder.htm#apex_System_QueueableDuplicateSignature_Builder_addInteger)**
    Adds an integer to build a unique signature for a queueable job. You can then enqueue the job by using the signature as the AsyncOptions parameter to System.enqueueJob().
-   **[addString(inputString)](atlas.en-us.apexref.meta/apexref/apex_class_System_QueueableDuplicateSignature_Builder.htm#apex_System_QueueableDuplicateSignature_Builder_addString)**
    Adds a string to build a unique signature for a queueable job. You can then enqueue the job by using the signature as the AsyncOptions parameter to System.enqueueJob().
-   **[build()](atlas.en-us.apexref.meta/apexref/apex_class_System_QueueableDuplicateSignature_Builder.htm#apex_System_QueueableDuplicateSignature_Builder_build)**
    Builds a unique signature for a queueable job. You can then enqueue the job by using the signature as the AsyncOptions parameter to System.enqueueJob().
-   **[getMaxSize()](atlas.en-us.apexref.meta/apexref/apex_class_System_QueueableDuplicateSignature_Builder.htm#apex_System_QueueableDuplicateSignature_Builder_getMaxSize)**
    Gets the maximum size of the queueable job signature in bytes.
-   **[getRemainingSize()](atlas.en-us.apexref.meta/apexref/apex_class_System_QueueableDuplicateSignature_Builder.htm#apex_System_QueueableDuplicateSignature_Builder_getRemainingSize)**
    Gets the remaining size of the queueable job signature in bytes, after subtracting what is already used by the signature from the maximum allowed number.
-   **[getSize()](atlas.en-us.apexref.meta/apexref/apex_class_System_QueueableDuplicateSignature_Builder.htm#apex_System_QueueableDuplicateSignature_Builder_getSize)**
    Gets the size of the queueable job signature in bytes.

### addId(inputId)

Adds an ID to build a unique signature for a queueable job. You can then enqueue the job by using the signature as the AsyncOptions parameter to System.enqueueJob().

#### Signature

public System.QueueableDuplicateSignature.Builder addId(Id id)

#### Parameters

inputId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

#### Return Value

Type: [QueueableDuplicateSignature.Builder](#apex_class_System_QueueableDuplicateSignature_Builder "Build a unique signature for your queueable job using this inner builder class. The build() class method builds a QueueableDuplicateSignature object, with input from the addId(), addInteger(), and addString() methods. Use the DuplicateSignature property in the AsyncOptions class to store the queueable job signature. Enqueue your job by using the System.enqueueJob() with the AsyncOptions parameter.")

### addInteger(inputInteger)

Adds an integer to build a unique signature for a queueable job. You can then enqueue the job by using the signature as the AsyncOptions parameter to System.enqueueJob().

#### Signature

public System.QueueableDuplicateSignature.Builder addInteger(Integer i)

#### Parameters

inputInteger

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: [QueueableDuplicateSignature.Builder](#apex_class_System_QueueableDuplicateSignature_Builder "Build a unique signature for your queueable job using this inner builder class. The build() class method builds a QueueableDuplicateSignature object, with input from the addId(), addInteger(), and addString() methods. Use the DuplicateSignature property in the AsyncOptions class to store the queueable job signature. Enqueue your job by using the System.enqueueJob() with the AsyncOptions parameter.")

### addString(inputString)

Adds a string to build a unique signature for a queueable job. You can then enqueue the job by using the signature as the AsyncOptions parameter to System.enqueueJob().

#### Signature

public System.QueueableDuplicateSignature.Builder addString(String s)

#### Parameters

inputString

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: [QueueableDuplicateSignature.Builder](#apex_class_System_QueueableDuplicateSignature_Builder "Build a unique signature for your queueable job using this inner builder class. The build() class method builds a QueueableDuplicateSignature object, with input from the addId(), addInteger(), and addString() methods. Use the DuplicateSignature property in the AsyncOptions class to store the queueable job signature. Enqueue your job by using the System.enqueueJob() with the AsyncOptions parameter.")

### build()

Builds a unique signature for a queueable job. You can then enqueue the job by using the signature as the AsyncOptions parameter to System.enqueueJob().

#### Signature

public System.QueueableDuplicateSignature build()

#### Return Value

Type: [QueueableDuplicateSignature Class](atlas.en-us.apexref.meta/apexref/apex_class_System_QueueableDuplicateSignature.htm#apex_class_System_QueueableDuplicateSignature "Used in the AsyncOptions class to store the queueable job signature in the DuplicateSignature property.")

### getMaxSize()

Gets the maximum size of the queueable job signature in bytes.

#### Signature

public Integer getMaxSize()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### getRemainingSize()

Gets the remaining size of the queueable job signature in bytes, after subtracting what is already used by the signature from the maximum allowed number.

#### Signature

public Integer getRemainingSize()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### getSize()

Gets the size of the queueable job signature in bytes.

#### Signature

public Integer getSize()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- QueueableDuplicateSignature.Builder Methods (atlas.en-us.apexref.meta/apexref/apex_class_System_QueueableDuplicateSignature_Builder.htm)
- addId(inputId) (atlas.en-us.apexref.meta/apexref/apex_class_System_QueueableDuplicateSignature_Builder.htm)
- addInteger(inputInteger) (atlas.en-us.apexref.meta/apexref/apex_class_System_QueueableDuplicateSignature_Builder.htm)
- addString(inputString) (atlas.en-us.apexref.meta/apexref/apex_class_System_QueueableDuplicateSignature_Builder.htm)
- build() (atlas.en-us.apexref.meta/apexref/apex_class_System_QueueableDuplicateSignature_Builder.htm)
- getMaxSize() (atlas.en-us.apexref.meta/apexref/apex_class_System_QueueableDuplicateSignature_Builder.htm)
- getRemainingSize() (atlas.en-us.apexref.meta/apexref/apex_class_System_QueueableDuplicateSignature_Builder.htm)
- getSize() (atlas.en-us.apexref.meta/apexref/apex_class_System_QueueableDuplicateSignature_Builder.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
