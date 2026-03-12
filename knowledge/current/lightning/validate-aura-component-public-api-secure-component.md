---
title: "Validate Aura Component Public API ( secure-component ) )"
domain: lightning
topic: validate-aura-component-public-api-secure-component-
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:48.036Z
estimatedTokens: 461
keywords: [Validate, Aura, Component, API, secure-component, rule, validates, framework, functions]
---

# Validate Aura Component Public API ( secure-component ) )

> This rule validates that only public, supported framework API
            functions and properties are used.

# Validate Aura Component Public API ( secure-component ) )

This rule validates that only public, supported framework API functions and properties are used.

When Lightning Locker is enabled, the framework prevents the use of unsupported API objects or calls. That means your Aura components code is allowed to use:

-   Features built into JavaScript (“intrinsic” features)
-   Published, supported features built into the Aura Components programming model.
-   Published, supported features built into Lightning Locker *SecureObject* objects

Prior to Lightning Locker, when you created or obtained a reference to a component, you could call any function and access any property available on that component, even if it wasn’t public. When Lightning Locker is enabled, components are “wrapped” by a new SecureComponent object, which controls access to the component and its functions and properties. SecureComponent restricts you to using only the published, supported [Component API](atlas.en-us.lightning.meta/lightning/ref_jsapi_component.htm "Component contains methods to work with components.").

#### See Also

-   [Validate Aura API ( aura-api ) )](atlas.en-us.lightning.meta/lightning/cli_rules_aura_api.htm "This rule verifies that use of the framework APIs is according to the published documentation. The use of undocumented or private features is disallowed.")

-   [Validate Secure Document Public API ( secure-document ) )](atlas.en-us.lightning.meta/lightning/cli_rules_secure_document.htm "This rule validates that only supported functions and properties of the document global are accessed.")

-   [Validate Secure Window Public API ( secure-window ) )](atlas.en-us.lightning.meta/lightning/cli_rules_secure_window.htm "This rule validates that only supported functions and properties of the window global are accessed.")

## Related Topics

- Component API (atlas.en-us.lightning.meta/lightning/ref_jsapi_component.htm)
- Validate Aura API ( aura-api ) ) (atlas.en-us.lightning.meta/lightning/cli_rules_aura_api.htm)
- Validate Secure Document Public API ( secure-document ) ) (atlas.en-us.lightning.meta/lightning/cli_rules_secure_document.htm)
- Validate Secure Window Public API ( secure-window ) ) (atlas.en-us.lightning.meta/lightning/cli_rules_secure_window.htm)
