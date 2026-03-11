---
title: "SandboxPostCopy Methods"
domain: apex-reference
topic: sandboxpostcopy-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.696Z
keywords: [SandboxPostCopy, Methods, Executes, actions, new, sandbox, prepare, use., example, add, logic, method, create, users, run, sanitizing, code, records, perform, setup]
---

# SandboxPostCopy Methods

> Executes actions in a new sandbox to prepare it for use. For example,
      add logic to this method to create users, run sanitizing code on records, and perform other
      setup tasks.

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