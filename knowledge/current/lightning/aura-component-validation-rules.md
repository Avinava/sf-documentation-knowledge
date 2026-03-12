---
title: "Aura Component Validation Rules"
domain: lightning
topic: aura-component-validation-rules
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.025Z
estimatedTokens: 1139
keywords: [Aura, Component, Validation, Rules, built, code, validations, cover, restrictions, under, Lightning, Locker, correct, APIs, number]
---

# Aura Component Validation Rules

> Rules built into Aura component code validations cover restrictions under Lightning
    Locker, correct use of Lightning APIs, and a number of best practices for writing Aura component
    code. Each rule, when triggered by your code, points to an area where your code might have an
    issue.

# Aura Component Validation Rules

Rules built into Aura component code validations cover restrictions under Lightning Locker, correct use of Lightning APIs, and a number of best practices for writing Aura component code. Each rule, when triggered by your code, points to an area where your code might have an issue.

In addition to the Lightning-specific rules we’ve created, other rules are active in Lightning validations, included from ESLint basic rules. Documentation for these rules is available on the ESLint project site. If you encounter an error or warning from a rule not described here, search for it on [the ESLint Rules page](http://eslint.org/docs/rules/ "HTML (New Window)").

The set of rules used to validate your code varies depending on the tool you use, and the way you use it. Minimal save-time validations catch the most significant issues only, while Salesforce DX tools provide more comprehensive static code analysis.

-   **[Validation Rules Used at Save Time](atlas.en-us.lightning.meta/lightning/validation_rules_sets_on_save.htm)**
    The following rules are used for validations that are done when you save your Aura component code.
-   **[Validate JavaScript Intrinsic APIs ( ecma-intrinsics ) )](atlas.en-us.lightning.meta/lightning/cli_rules_ecma_intrinsic.htm)**
    This rule deals with the intrinsic APIs in JavaScript, more formally known as ECMAScript.
-   **[Validate Aura API ( aura-api ) )](atlas.en-us.lightning.meta/lightning/cli_rules_aura_api.htm)**
    This rule verifies that use of the framework APIs is according to the published documentation. The use of undocumented or private features is disallowed.
-   **[Validate Aura Component Public API ( secure-component ) )](atlas.en-us.lightning.meta/lightning/cli_rules_secure_component.htm)**
    This rule validates that only public, supported framework API functions and properties are used.
-   **[Validate Secure Document Public API ( secure-document ) )](atlas.en-us.lightning.meta/lightning/cli_rules_secure_document.htm)**
    This rule validates that only supported functions and properties of the document global are accessed.
-   **[Validate Secure Window Public API ( secure-window ) )](atlas.en-us.lightning.meta/lightning/cli_rules_secure_window.htm)**
    This rule validates that only supported functions and properties of the window global are accessed.
-   **[Disallow Use of caller and and callee ( ( no-caller ) )](atlas.en-us.lightning.meta/lightning/validation_rules_no_caller.htm)**
    Prevent the use of arguments.caller and arguments.callee. These are also forbidden in ECMAScript 5 and later when in strict mode, which is enabled under Lightning Locker. This is a standard rule built into ESLint.
-   **[Disallow Script URLs ( no-script-url ) )](atlas.en-us.lightning.meta/lightning/validation_rules_no_script_url.htm)**
    Prevents the use of javascript: URLs. This is a standard rule built into ESLint.
-   **[Disallow Extending Native Objects ( no-extend-native ) )](atlas.en-us.lightning.meta/lightning/validation_rules_no_extend_native.htm)**
    Prevent changing the behavior of built-in JavaScript objects, such as Object or Array, by modifying their prototypes. This is a standard rule built into ESLint.
-   **[Disallow Calling Global Object Properties as Functions ( no-obj-calls ) )](atlas.en-us.lightning.meta/lightning/validation_rules_no_obj_calls.htm)**
    Prevents calling the Math, JSON, and Reflect global objects as though they were functions. For example, Math() is disallowed. This follows the ECMAScript 5 specification. This is a standard rule built into ESLint.
-   **[Disallow Use of \_\_iterator\_\_ Property ( Property ( no-iterator ) )](atlas.en-us.lightning.meta/lightning/validation_rules_no_iterator.htm)**
    Prevents using the obsolete \_\_iterator\_\_ property. Use standard JavaScript iterators and generators instead. This is a standard rule built into ESLint.
-   **[Disallow Use of \_\_proto\_\_ ( ( no-proto ) )](atlas.en-us.lightning.meta/lightning/validation_rules_no_proto.htm)**
    Prevents using the obsolete \_\_proto\_\_ property, which was deprecated in ECMAScript 3.1. Use Object.getPrototypeOf() instead. This is a standard rule built into ESLint.
-   **[Disallow with Statements ( Statements ( no-with ) )](atlas.en-us.lightning.meta/lightning/validation_rules_no_with.htm)**
    Prevents using with statements, which adds members of an object to the current scope in a way that makes it hard to predict or view impact or behavior. This is a standard rule built into ESLint.

## Related Topics

- Validation Rules Used at Save Time (atlas.en-us.lightning.meta/lightning/validation_rules_sets_on_save.htm)
- Validate JavaScript Intrinsic APIs ( ecma-intrinsics ) ) (atlas.en-us.lightning.meta/lightning/cli_rules_ecma_intrinsic.htm)
- Validate Aura API ( aura-api ) ) (atlas.en-us.lightning.meta/lightning/cli_rules_aura_api.htm)
- Validate Aura Component Public API ( secure-component ) ) (atlas.en-us.lightning.meta/lightning/cli_rules_secure_component.htm)
- Validate Secure Document Public API ( secure-document ) ) (atlas.en-us.lightning.meta/lightning/cli_rules_secure_document.htm)
- Validate Secure Window Public API ( secure-window ) ) (atlas.en-us.lightning.meta/lightning/cli_rules_secure_window.htm)
- Disallow Use of caller and and callee ( ( no-caller ) ) (atlas.en-us.lightning.meta/lightning/validation_rules_no_caller.htm)
- Disallow Script URLs ( no-script-url ) ) (atlas.en-us.lightning.meta/lightning/validation_rules_no_script_url.htm)
- Disallow Extending Native Objects ( no-extend-native ) ) (atlas.en-us.lightning.meta/lightning/validation_rules_no_extend_native.htm)
- Disallow Calling Global Object Properties as Functions ( no-obj-calls ) ) (atlas.en-us.lightning.meta/lightning/validation_rules_no_obj_calls.htm)
