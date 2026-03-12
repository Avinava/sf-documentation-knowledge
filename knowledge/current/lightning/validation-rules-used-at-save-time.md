---
title: "Validation Rules Used at Save Time"
domain: lightning
topic: validation-rules-used-at-save-time
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:49.999Z
estimatedTokens: 377
keywords: [Validation, Rules, Save, Time, validations, Aura, component, code, Lightning, Platform]
---

# Validation Rules Used at Save Time

> The following rules are used for validations that are done when you save your Aura
    component code.

# Validation Rules Used at Save Time

The following rules are used for validations that are done when you save your Aura component code.

Validation failures for any of these rules prevents saving changes to your code.

## Lightning Platform Rules

These rules are specific to Aura component JavaScript code. These custom rules are written and maintained by Salesforce.

[Validate Aura API ( aura-api ) )](atlas.en-us.lightning.meta/lightning/cli_rules_aura_api.htm#cli_rules_aura_api "This rule verifies that use of the framework APIs is according to the published documentation. The use of undocumented or private features is disallowed.")

This rule verifies that use of the framework APIs is according to the published documentation. The use of undocumented or private features is disallowed.

[Validate Secure Document Public API ( secure-document ) )](atlas.en-us.lightning.meta/lightning/cli_rules_secure_document.htm#cli_rules_secure_document "This rule validates that only supported functions and properties of the document global are accessed.")

This rule validates that only supported functions and properties of the document global are accessed.

[Validate Secure Window Public API ( secure-window ) )](atlas.en-us.lightning.meta/lightning/cli_rules_secure_window.htm#cli_rules_secure_window "This rule validates that only supported functions and properties of the window global are accessed.")

This rule validates that only supported functions and properties of the window global are accessed.

## Related Topics

- Validate Aura API ( aura-api ) ) (atlas.en-us.lightning.meta/lightning/cli_rules_aura_api.htm)
- Validate Secure Document Public API ( secure-document ) ) (atlas.en-us.lightning.meta/lightning/cli_rules_secure_document.htm)
- Validate Secure Window Public API ( secure-window ) ) (atlas.en-us.lightning.meta/lightning/cli_rules_secure_window.htm)
