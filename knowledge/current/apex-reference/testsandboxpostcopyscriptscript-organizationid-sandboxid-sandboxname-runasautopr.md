---
title: "testSandboxPostCopyScript(script, organizationId, sandboxId,
            sandboxName, RunAsAutoProcUser)"
domain: apex-reference
topic: testsandboxpostcopyscriptscript-organizationid-sandboxid-sandboxname-runasautopr
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.968Z
keywords: [testSandboxPostCopyScript, script, organizationId, sandboxId, sandboxName, RunAsAutoProcUser, Tests, implementation, SandboxPostCopy, Interface, which, used, specifying, run, completion, Sandbox, copy., true, tests, Automated]
---

# testSandboxPostCopyScript(script, organizationId, sandboxId,
            sandboxName, RunAsAutoProcUser)

> Tests the implementation of the SandboxPostCopy Interface, which is used for
            specifying a script to run at the completion of a Sandbox copy. When RunAsAutoProcUser is true, tests run as Automated Process user in the development
            environment.

### testSandboxPostCopyScript(script, organizationId, sandboxId, sandboxName, RunAsAutoProcUser)

Tests the implementation of the SandboxPostCopy Interface, which is used for specifying a script to run at the completion of a Sandbox copy. When RunAsAutoProcUser is true, tests run as Automated Process user in the development environment.

#### Signature

public static void testSandboxPostCopyScript(System.SandboxPostCopy script, Id organizationId, Id sandboxId, String sandboxName, Boolean RunAsAutoProcUser)

#### Parameters

script

Type: [System.SandboxPostCopy](atlas.en-us.apexref.meta/apexref/apex_interface_System_SandboxPostCopy.htm#apex_interface_System_SandboxPostCopy "To make your sandbox environment business ready, automate data manipulation or business logic tasks. Extend this interface and add methods to perform post-copy tasks, then specify the class during sandbox creation.")

A class that implements the SandboxPostCopy interface.

organizationId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

The sandbox organization ID.

sandboxId

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

The sandbox ID to be provided to the SandboxPostCopy script.

sandboxName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The sandbox name to be provided to the SandboxPostCopy script.

RunAsAutoProcUser

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

When true, the SandboxPostCopy script is tested with the same user access permissions as used by post-copy tasks during sandbox creation. Using the same permissions enables the test to better simulate the actual usage of the class, and to uncover potential issues.

When false, the test runs as the test initiator. This option can alter the permissions with which the script is tested, such as the ability to access objects and features.

#### Return Value

Type: void

#### Usage

This method throws a run-time exception if the test install fails.

#### Example

See [SandboxPostCopy Example Implementation](atlas.en-us.apexref.meta/apexref/apex_interface_System_SandboxPostCopy.htm#apex_interface_System_SandboxPostCopy_Example "These examples show a simple implementation of the SandboxPostCopy interface and a test for that implementation. To test your SandboxPostCopy implementation, use the System.Test.testSandboxPostCopyScript() method.")