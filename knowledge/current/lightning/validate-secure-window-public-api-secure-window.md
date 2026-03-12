---
title: "Validate Secure Window Public API ( secure-window ) )"
domain: lightning
topic: validate-secure-window-public-api-secure-window-
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.041Z
estimatedTokens: 414
keywords: [Validate, Secure, Window, API, secure-window, rule, validates, functions, accessed]
---

# Validate Secure Window Public API ( secure-window ) )

> This rule validates that only supported functions and properties
            of the window global are
        accessed.

# Validate Secure Window Public API ( secure-window ) )

This rule validates that only supported functions and properties of the window global are accessed.

When Lightning Locker is enabled, the framework prevents the use of unsupported API objects or calls. That means your Aura components code is allowed to use:

-   Features built into JavaScript (“intrinsic” features)
-   Published, supported features built into the Aura Components programming model.
-   Published, supported features built into Lightning Locker *SecureObject* objects

Prior to Lightning Locker, when you accessed the window global, you could call any function and access any property available. When Lightning Locker is enabled, the window global is “wrapped” by a new SecureWindow object, which controls access to window and its functions and properties. SecureWindow restricts you to using only “safe” features of the window global.

#### See Also

-   [Validate Aura API ( aura-api ) )](atlas.en-us.lightning.meta/lightning/cli_rules_aura_api.htm "This rule verifies that use of the framework APIs is according to the published documentation. The use of undocumented or private features is disallowed.")

-   [Validate Aura Component Public API ( secure-component ) )](atlas.en-us.lightning.meta/lightning/cli_rules_secure_component.htm "This rule validates that only public, supported framework API functions and properties are used.")

-   [Validate Secure Document Public API ( secure-document ) )](atlas.en-us.lightning.meta/lightning/cli_rules_secure_document.htm "This rule validates that only supported functions and properties of the document global are accessed.")

## Related Topics

- Validate Aura API ( aura-api ) ) (atlas.en-us.lightning.meta/lightning/cli_rules_aura_api.htm)
- Validate Aura Component Public API ( secure-component ) ) (atlas.en-us.lightning.meta/lightning/cli_rules_secure_component.htm)
- Validate Secure Document Public API ( secure-document ) ) (atlas.en-us.lightning.meta/lightning/cli_rules_secure_document.htm)
