---
title: "Favor Composition Over Inheritance"
domain: lightning
topic: favor-composition-over-inheritance
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:49.340Z
estimatedTokens: 340
keywords: [Favor, Composition, Over, Inheritance, Aura, supports, favors, possible]
---

# Favor Composition Over Inheritance

> Aura supports inheritance, but it favors composition. When possible, use
  composition.

# Favor Composition Over Inheritance

Aura supports inheritance, but it favors composition. When possible, use composition.

When you create an Aura component, you use a mix of inheritance and composition. For example, when you create an application or a component, you extend one of the default base components: aura:application or aura:component. That’s inheritance and it works well. However, when you create a custom component that extends another component, inheritance can get a little more complicated.

Component composition happens when you nest a component in another component. To build a component body, you add components within the body. This component composition enables you to build complex components from simpler building-block components.

Why use composition? Because code reuse and testing become easier.

Also, one feature of inheritance works differently in Aura than it does in most languages and frameworks. This difference makes inheritance lose some of its charm.

When you instantiate a Java class you create one instance, no matter how long that class’s inheritance path is. Not so in Aura. Aura creates one instance of the subclassed component and one instance of its parent. The more levels of inheritance, the more component instances are created. Inheritance consumes more memory and processor resources than you might expect.
