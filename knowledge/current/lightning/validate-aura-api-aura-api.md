---
title: "Validate Aura API ( aura-api ) )"
domain: lightning
topic: validate-aura-api-aura-api-
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:48.028Z
estimatedTokens: 538
keywords: [Validate, Aura, API, aura-api, rule, verifies, framework, APIs, according, published, documentation, undocumented, features, disallowed, Further]
---

# Validate Aura API ( aura-api ) )

> This rule verifies that use of the framework APIs is according to
            the published documentation. The use of undocumented or private features is
            disallowed.

# Validate Aura API ( aura-api ) )

This rule verifies that use of the framework APIs is according to the published documentation. The use of undocumented or private features is disallowed.

When Lightning Locker is enabled, the framework prevents the use of unsupported API objects or calls. That means your Aura components code is allowed to use:

-   Features built into JavaScript (“intrinsic” features)
-   Published, supported features built into the Aura Components programming model.
-   Published, supported features built into Lightning Locker *SecureObject* objects

This rule deals with the supported, public framework APIs, for example, those available through the framework global $A.

Why is this rule called “Aura API”? Because the core of the Aura Components programming model is the open source Aura Framework. And this rule verifies permitted uses of that framework, rather than anything specific to Lightning Components.

## Rule Details

The following patterns are considered problematic:

```

```

## Further Reading

For details of all of the methods available in the framework, including $A, see the [JavaScript API documentation](atlas.en-us.lightning.meta/lightning/ref_jsapi_intro.htm "The JavaScript API lists the publicly accessible methods for each object that you can use in JavaScript code, such as a controller or helper. The $A namespace is the entry point for using the framework in JavaScript code.").

#### See Also

-   [Validate Aura Component Public API ( secure-component ) )](atlas.en-us.lightning.meta/lightning/cli_rules_secure_component.htm "This rule validates that only public, supported framework API functions and properties are used.")

-   [Validate Secure Document Public API ( secure-document ) )](atlas.en-us.lightning.meta/lightning/cli_rules_secure_document.htm "This rule validates that only supported functions and properties of the document global are accessed.")

-   [Validate Secure Window Public API ( secure-window ) )](atlas.en-us.lightning.meta/lightning/cli_rules_secure_window.htm "This rule validates that only supported functions and properties of the window global are accessed.")

## Code Examples

```
Aura.something(); // Use $A instead
$A.util.fake(); // fake is not available in $A.util
```

## Related Topics

- JavaScript API
                    documentation (atlas.en-us.lightning.meta/lightning/ref_jsapi_intro.htm)
- Validate Aura Component Public API ( secure-component ) ) (atlas.en-us.lightning.meta/lightning/cli_rules_secure_component.htm)
- Validate Secure Document Public API ( secure-document ) ) (atlas.en-us.lightning.meta/lightning/cli_rules_secure_document.htm)
- Validate Secure Window Public API ( secure-window ) ) (atlas.en-us.lightning.meta/lightning/cli_rules_secure_window.htm)
