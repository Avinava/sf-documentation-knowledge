---
title: "Span Server-Side JavaScript Blocks with AMPScript Control Statements"
domain: mc-programmatic-content
topic: span-server-side-javascript-blocks-with-ampscript-control-statements
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:23.945Z
estimatedTokens: 196
keywords: [Span, Server-Side, JavaScript, Blocks, AMPScript, Control, Statements, content]
---

> Server-side JavaScript blocks can span these content types:

# Span Server-Side JavaScript Blocks with AMPScript Control Statements

Server-side JavaScript blocks can span these content types:

-   HTML
-   Text
-   Personalization Strings
-   AMPscript

Use this sample code as an example to construct your own content. Close all script blocks before moving on to the next content type.

```
<script runat=server language=javascript>
var Count = 0;
if (Count < 1)
{
</script>
    <p> If Case </p>
    %%[
        VAR @v1         SET @v1 = 0         FOR @v1 = 1 TO 5 DO]%%
            <p>This is loop %%=v(@v1)=%% </p>
        %%[ NEXT ]%%
<script runat=server language=javascript>
}
else if (Count > 1)
{
</script>
    <p> Else If Case </p>
<script runat=server>
}
else
{
</script>
    <p> Else Case </p>
<script runat=server>
}
</script>
```
