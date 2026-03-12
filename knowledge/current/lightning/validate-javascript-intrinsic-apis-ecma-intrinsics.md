---
title: "Validate JavaScript Intrinsic APIs ( ecma-intrinsics ) )"
domain: lightning
topic: validate-javascript-intrinsic-apis-ecma-intrinsics-
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.033Z
estimatedTokens: 679
keywords: [Validate, JavaScript, Intrinsic, APIs, ecma-intrinsics, rule, deals, formally, known, ECMAScript, Further, Reading]
---

# Validate JavaScript Intrinsic APIs ( ecma-intrinsics ) )

> This rule deals with the intrinsic APIs in JavaScript, more
			formally known as ECMAScript.

# Validate JavaScript Intrinsic APIs ( ecma-intrinsics ) )

This rule deals with the intrinsic APIs in JavaScript, more formally known as ECMAScript.

When Lightning Locker is enabled, the framework prevents the use of unsupported API objects or calls. That means your Aura components code is allowed to use:

-   Features built into JavaScript (“intrinsic” features)
-   Published, supported features built into the Aura Components programming model.
-   Published, supported features built into Lightning Locker *SecureObject* objects

What exactly are these “intrinsic APIs”? They’re the APIs defined in the [ECMAScript Language Specification](https://tc39.github.io/ecma262/ "HTML (New Window)"). That is, things built into JavaScript. This includes Annex B of the specification, which deals with legacy browser features that aren’t part of the “core” of JavaScript, but are nevertheless still supported for JavaScript running inside a web browser.

Note that some features of JavaScript that you might consider intrinsic—for example, the window and document global variables—are superceded by *SecureObject* objects, which offer a more constrained API.

## Rule Details

This rule verifies that use of the intrinsic JavaScript APIs is according to the published specification. The use of non-standard, deprecated, and removed language features is disallowed.

## Further Reading

-   [ECMAScript specification](https://tc39.github.io/ecma262/ "HTML (New Window)")
-   [Annex B: Additional ECMAScript Features for Web Browsers](https://tc39.github.io/ecma262/#sec-additional-built-in-properties "HTML (New Window)")
-   [Intrinsic Objects (JavaScript)](https://msdn.microsoft.com/en-us/library/4zx5dkc9\(v=vs.94\).aspx "HTML (New Window)")

#### See Also

-   [Validate Aura API ( aura-api ) )](atlas.en-us.lightning.meta/lightning/cli_rules_aura_api.htm "This rule verifies that use of the framework APIs is according to the published documentation. The use of undocumented or private features is disallowed.")

-   [Validate Aura Component Public API ( secure-component ) )](atlas.en-us.lightning.meta/lightning/cli_rules_secure_component.htm "This rule validates that only public, supported framework API functions and properties are used.")

-   [Validate Secure Document Public API ( secure-document ) )](atlas.en-us.lightning.meta/lightning/cli_rules_secure_document.htm "This rule validates that only supported functions and properties of the document global are accessed.")

-   [Validate Secure Window Public API ( secure-window ) )](atlas.en-us.lightning.meta/lightning/cli_rules_secure_window.htm "This rule validates that only supported functions and properties of the window global are accessed.")

## Related Topics

- Validate Aura API ( aura-api ) ) (atlas.en-us.lightning.meta/lightning/cli_rules_aura_api.htm)
- Validate Aura Component Public API ( secure-component ) ) (atlas.en-us.lightning.meta/lightning/cli_rules_secure_component.htm)
- Validate Secure Document Public API ( secure-document ) ) (atlas.en-us.lightning.meta/lightning/cli_rules_secure_document.htm)
- Validate Secure Window Public API ( secure-window ) ) (atlas.en-us.lightning.meta/lightning/cli_rules_secure_window.htm)
