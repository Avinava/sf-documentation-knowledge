---
title: "Test Class"
domain: apex-reference
topic: test-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.968Z
keywords: [Test, Class, Tests, implementation, UninstallHandler, interface, which, used, specifying, uninstall, script, packages., run, test, initiator, development, environment., testUninstall, uninstallImplementation, Signature]
---

# Test Class

> Tests the implementation of the UninstallHandler interface, which is used for
    specifying an uninstall script in packages. Tests run as the test initiator in the development
    environment.

### testUninstall(uninstallImplementation)

Tests the implementation of the UninstallHandler interface, which is used for specifying an uninstall script in packages. Tests run as the test initiator in the development environment.

#### Signature

public static Void testUninstall(UninstallHandler uninstallImplementation)

#### Parameters

uninstallImplementation

Type: [System.UninstallHandler](atlas.en-us.apexref.meta/apexref/apex_uninstall_handler.htm#apex_System_UninstallHandler_methods)

A class that implements the UninstallHandler interface.

#### Return Value

Type: Void

#### Usage

This method throws a run-time exception if the test uninstall fails.

#### Example

```

```