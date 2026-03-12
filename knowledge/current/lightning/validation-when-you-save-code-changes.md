---
title: "Validation When You Save Code Changes"
domain: lightning
topic: validation-when-you-save-code-changes
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:49.983Z
estimatedTokens: 320
keywords: [Validation, Save, Code, Changes, Aura, component, JavaScript, validated, ensures, components, written, best, practices, avoid, common]
---

# Validation When You Save Code Changes

> Aura component JavaScript code is validated when you save it.
      Validation ensures that your components are written using best practices and avoid common
      pitfalls that can make them incompatible with Lightning Locker. Validation happens
      automatically when you save Aura component resources in the Developer Console, in your
      favorite IDE, and via API.

# Validation When You Save Code Changes

Aura component JavaScript code is validated when you save it. Validation ensures that your components are written using best practices and avoid common pitfalls that can make them incompatible with Lightning Locker. Validation happens automatically when you save Aura component resources in the Developer Console, in your favorite IDE, and via API.

Validation failures are treated as errors and block changes from being saved. Error messages explain the failures. Depending on the tool you’re using, these errors are presented in different ways. For example, the Developer Console shows an alert for the first error it encounters (1), and lists all of the validation errors discovered in the **Problems** tab (2).![Save validation errors in the Developer Console](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Faura%2Fimages%2Fdev_console_save_validations.png&folder=lightning)

Validations are applied only to components set to API version 41.0 and later. If the validation service prevents you from saving important changes, set the component version to API 40.0 or earlier to disable validations temporarily. When you’ve corrected the coding errors, return your component to API 41.0 or later to save it with passing validations.
