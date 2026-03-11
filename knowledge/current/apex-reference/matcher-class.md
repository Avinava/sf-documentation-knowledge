---
title: "Matcher Class"
domain: apex-reference
topic: matcher-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.366Z
keywords: [Matcher, Class, Sets, transparency, bounds, object., default, object, uses, anchoring, regions., useTransparentBounds, transparentBounds, Signature, Parameters, Return, Value, Usage]
---

# Matcher Class

> Sets the transparency bounds for this Matcher object. By
default, a Matcher object uses anchoring bounds regions.

### useTransparentBounds(transparentBounds)

Sets the transparency bounds for this Matcher object. By default, a Matcher object uses anchoring bounds regions.

#### Signature

public Matcher object useTransparentBounds(Boolean transparentBounds)

#### Parameters

transparentBounds

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

If you specify true, the Matcher object uses transparent bounds. If you specify false, opaque bounds are used.

#### Return Value

Type: [Matcher](#apex_classes_pattern_and_matcher_matcher_methods "Matchers use Patterns to perform match operations on a character string.")

#### Usage

For more information, see [Using Bounds](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_pattern_and_matcher_bounds.htm).