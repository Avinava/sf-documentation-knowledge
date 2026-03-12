---
title: "Validate Secure Document Public API ( secure-document ) )"
domain: lightning
topic: validate-secure-document-public-api-secure-document-
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.038Z
estimatedTokens: 416
keywords: [Validate, Secure, Document, API, secure-document, rule, validates, functions, accessed]
---

# Validate Secure Document Public API ( secure-document ) )

> This rule validates that only supported functions and properties
            of the document global are
        accessed.

# Validate Secure Document Public API ( secure-document ) )

This rule validates that only supported functions and properties of the document global are accessed.

When Lightning Locker is enabled, the framework prevents the use of unsupported API objects or calls. That means your Aura components code is allowed to use:

-   Features built into JavaScript (“intrinsic” features)
-   Published, supported features built into the Aura Components programming model.
-   Published, supported features built into Lightning Locker *SecureObject* objects

Prior to Lightning Locker, when you accessed the document global, you could call any function and access any property available. When Lightning Locker is enabled, the document global is “wrapped” by a new SecureDocument object, which controls access to document and its functions and properties. SecureDocument restricts you to using only “safe” features of the document global.

#### See Also

-   [Validate Aura API ( aura-api ) )](atlas.en-us.lightning.meta/lightning/cli_rules_aura_api.htm "This rule verifies that use of the framework APIs is according to the published documentation. The use of undocumented or private features is disallowed.")

-   [Validate Aura Component Public API ( secure-component ) )](atlas.en-us.lightning.meta/lightning/cli_rules_secure_component.htm "This rule validates that only public, supported framework API functions and properties are used.")

-   [Validate Secure Window Public API ( secure-window ) )](atlas.en-us.lightning.meta/lightning/cli_rules_secure_window.htm "This rule validates that only supported functions and properties of the window global are accessed.")

## Related Topics

- Validate Aura API ( aura-api ) ) (atlas.en-us.lightning.meta/lightning/cli_rules_aura_api.htm)
- Validate Aura Component Public API ( secure-component ) ) (atlas.en-us.lightning.meta/lightning/cli_rules_secure_component.htm)
- Validate Secure Window Public API ( secure-window ) ) (atlas.en-us.lightning.meta/lightning/cli_rules_secure_window.htm)
