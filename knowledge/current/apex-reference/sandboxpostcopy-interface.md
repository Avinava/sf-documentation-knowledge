---
title: "SandboxPostCopy Interface"
domain: apex-reference
topic: sandboxpostcopy-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:29.993Z
estimatedTokens: 1121
namespace: System
keywords: [SandboxPostCopy, sandbox, environment, business, ready, automate, data, manipulation, logic, tasks, Extend, add, perform, post-copy, specify]
---

# SandboxPostCopy Interface

> To make your sandbox environment business ready, automate data
      manipulation or business logic tasks. Extend this interface and add methods to perform
      post-copy tasks, then specify the class during sandbox creation.

**Namespace:** `System`

# SandboxPostCopy Interface

To make your sandbox environment business ready, automate data manipulation or business logic tasks. Extend this interface and add methods to perform post-copy tasks, then specify the class during sandbox creation.

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Usage

Create an Apex class that implements this interface. Specify your class during sandbox creation. After your sandbox is created, the runApexClass(context) method in your class runs using the automated process user’s permissions.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

The SandboxPostCopy Apex class is executed at the end of the sandbox copy using a special Automated Process user that isn’t visible within the org. This user doesn’t have access to all object and features; therefore, the Apex script cannot access all objects and features. If the script fails, run the script after sandbox activation as a user with appropriate permissions.

-   **[SandboxPostCopy Methods](atlas.en-us.apexref.meta/apexref/apex_interface_System_SandboxPostCopy.htm#apex_System_SandboxPostCopy_methods)**

-   **[SandboxPostCopy Example Implementation](atlas.en-us.apexref.meta/apexref/apex_interface_System_SandboxPostCopy.htm#apex_interface_System_SandboxPostCopy_Example)**
    These examples show a simple implementation of the SandboxPostCopy interface and a test for that implementation. To test your SandboxPostCopy implementation, use the System.Test.testSandboxPostCopyScript() method.

#### See Also

-   [*Tooling API*: SandboxInfo](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_tooling.meta/api_tooling/tooling_api_objects_sandboxinfo.htm "Tooling API: SandboxInfo - HTML (New Window)")

-   [*Tooling API*: SandboxProcess](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_tooling.meta/api_tooling/tooling_api_objects_sandboxprocess.htm "Tooling API: SandboxProcess - HTML (New Window)")


## SandboxPostCopy Methods

The following method is for SandboxPostCopy.

-   **[runApexClass(context)](atlas.en-us.apexref.meta/apexref/apex_interface_System_SandboxPostCopy.htm#apex_System_SandboxPostCopy_runApexClass)**
    Executes actions in a new sandbox to prepare it for use. For example, add logic to this method to create users, run sanitizing code on records, and perform other setup tasks.

### runApexClass(context)

Executes actions in a new sandbox to prepare it for use. For example, add logic to this method to create users, run sanitizing code on records, and perform other setup tasks.

#### Signature

public void runApexClass(System.SandboxContext context)

#### Parameters

context

Type: System.SandboxContext

The org ID, sandbox ID, and sandbox name for your sandbox. To work with these values, reference context.organizationId(), context.sandboxId(), and context.sandboxName() in your code.

#### Return Value

Type: void

## SandboxPostCopy Example Implementation

These examples show a simple implementation of the SandboxPostCopy interface and a test for that implementation. To test your SandboxPostCopy implementation, use the System.Test.testSandboxPostCopyScript() method.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

The SandboxPostCopy Apex class is executed at the end of the sandbox copy using a special Automated Process user that isn’t visible within the org. This user doesn’t have access to all objects and features; therefore, the Apex script can’t access all objects and features. If the script fails, run the script after sandbox activation as a user with appropriate permissions.

This example implements the System.SandboxPostCopy interface.

```

```

The following example tests the implementation using the System.Test.testSandboxPostCopyScript() method. This method takes four parameters: a reference to a class that implements the SandboxPostCopy interface, and the three fields on the context object that you pass to the runApexClass(context) method. An overload on the method takes an optional Boolean parameter to indicate if the test must be performed as the Automated Process user.

```

```

For more information on testing, see [Testing Apex](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_testing.htm).

## Code Examples

```apex
global class PrepareMySandbox implements SandboxPostCopy {
 
    global PrepareMySandbox() {
        // Implementations of SandboxPostCopy must have a no-arg constructor.
        // This constructor is used during the sandbox copy process.
        // You can also implement constructors with arguments, but be aware that
        // they won’t be used by the sandbox copy process (unless as part of the
        // no-arg constructor).
        this(some_args);
    }
 
    global PrepareMySandbox(String some_args) {
        // Logic for constructor.
    }
    
    global void runApexClass(SandboxContext context) {
        System.debug('Org ID: ' + context.organizationId());
        System.debug('Sandbox ID: ' + context.sandboxId());
        System.debug('Sandbox Name: ' + context.sandboxName());
 
        // Insert logic here to prepare the sandbox for use.
    }
}
```

```
@isTest
class PrepareMySandboxTest {

    @isTest
    static void testMySandboxPrep() {
        // Insert logic here to create records of the objects that the class you’re testing
        // manipulates.

        Test.startTest();

        // Replace '00D000000000000' with your sandboxId and
        // execute test script with RunAsAutoProcUser set to true.

        Test.testSandboxPostCopyScript(
            new PrepareMySandbox(), UserInfo.getOrganizationId(),
                '00D000000000000', UserInfo.getOrganizationName(), true);

        Test.stopTest();

        // Insert assert statements here to check that the records you created above have
        // the values you expect.
    }
}
```

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- SandboxPostCopy Methods (atlas.en-us.apexref.meta/apexref/apex_interface_System_SandboxPostCopy.htm)
- SandboxPostCopy Example Implementation (atlas.en-us.apexref.meta/apexref/apex_interface_System_SandboxPostCopy.htm)
- runApexClass(context) (atlas.en-us.apexref.meta/apexref/apex_interface_System_SandboxPostCopy.htm)
