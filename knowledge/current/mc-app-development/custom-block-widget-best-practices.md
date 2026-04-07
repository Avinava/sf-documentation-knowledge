---
title: "Custom Block Widget Best Practices"
domain: mc-app-development
topic: custom-block-widget-best-practices
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:21.220Z
estimatedTokens: 225
keywords: [Block, Widget, Best, Practices, developing, blocks, adhere, Lightning, Design, System, Remember, User, Choices, Canvas, Real, Time]
---

> When developing custom blocks, adhere to these best practices.

# Custom Block Widget Best Practices

When developing custom blocks, adhere to these best practices.

## Use the Lightning Design System

[](https://www.lightningdesignsystem.com/)[https://www.lightningdesignsystem.com/](https://www.lightningdesignsystem.com/)

## Remember User Choices

When the user makes choices in the block widget and saves the block, they expect those choices to be remembered when they open that same block again. To save configuration separately from the block content itself, you can use getData.

## Update the Canvas in Real Time

Most of the editor’s system blocks update the canvas in real time, so your custom block widget should create the same experience for your users. If the user types or selects an option in the block, update those activities in real time rather than waiting for the user to exit or manually save. Use setContent or setSuperContent on changes.
