---
title: "More Readable Styling Markup with the  join Expression Expression"
domain: lightning
topic: more-readable-styling-markup-with-the-join-expression-expression
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:47.975Z
estimatedTokens: 265
keywords: [Readable, Styling, Markup, join, Expression, messy, specify, apply, component, attribute, Try, easier-to-read]
---

# More Readable Styling Markup with the  join Expression Expression

> Markup can get messy when you specify the class names to apply based
   on the component attribute values. Try using a join
   expression for easier-to-read markup.

# More Readable Styling Markup with the join Expression Expression

Markup can get messy when you specify the class names to apply based on the component attribute values. Try using a join expression for easier-to-read markup.

This example sets the class names based on the component attribute values. It’s readable, but the spaces between class names are easy to forget.

```

```

Sometimes, if the markup is not broken into multiple lines, it can hurt your eyes or make you mutter profanities under your breath.

```

```

Try using a join expression instead for easier-to-read markup. This example join expression sets ' ' as the first argument so that you don’t have to specify it for each subsequent argument in the expression.

```

```

You can also use a join expression for dynamic styling.

```

```

#### See Also

-   [Expression Functions Reference](atlas.en-us.lightning.meta/lightning/expr_functions.htm "The expression language contains math, string, array, comparison, boolean, and conditional functions. All functions are case-sensitive.")

## Code Examples

```
<li class="{! 'calendarEvent ' +
    v.zoomDirection + ' ' +
    (v.past ? 'pastEvent ' : '') +
    (v.zoomed ? 'zoom ' : '') +
    (v.multiDayFragment ? 'multiDayFragment ' : '')}">
    <!-- content here -->
</li>
```

```
<li class="{! 'calendarEvent ' + v.zoomDirection + ' ' + (v.past ? 'pastEvent ' : '') + (v.zoomed ? 'zoom ' : '') + (v.multiDayFragment ? 'multiDayFragment ' : '')}">
    <!-- content here -->
</li>
```

```
<li
    class="{! join(' ', 
        'calendarEvent',
        v.zoomDirection,
        v.past ? 'pastEvent' : '',
        v.zoomed ? 'zoom' : '',
        v.multiDayFragment ? 'multiDayFragment' : ''
    )}">
    <!-- content here -->
</li>
```

```
<div style="{! join(';', 
    'top:' + v.timeOffsetTop + '%',
    'left:' + v.timeOffsetLeft + '%',
    'width:' + v.timeOffsetWidth + '%'
)}">
    <!-- content here -->
</div>
```

## Related Topics

- Expression Functions Reference (atlas.en-us.lightning.meta/lightning/expr_functions.htm)
