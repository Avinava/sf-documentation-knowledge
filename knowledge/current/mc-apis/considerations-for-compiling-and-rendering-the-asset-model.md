---
title: "Considerations for Compiling and Rendering the Asset Model"
domain: mc-apis
topic: considerations-for-compiling-and-rendering-the-asset-model
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:06:20.586Z
estimatedTokens: 862
keywords: [Considerations, Compiling, Rendering, Asset, Model, Compile, context, channel, flattened, content, two, Standard, Sample, Full, Compiler]
---

# Considerations for Compiling and Rendering the Asset Model

> Compile an asset in the context of a channel to return a flattened string of the asset content. You can use two compiling types:

# Considerations for Compiling and Rendering the Asset Model

Compile an asset in the context of a channel to return a flattened string of the asset content. You can use two compiling types:

-   standard compiling
-   rendering

Rendering accounts for superContent and design. Use rendering only for user representation and manipulation of content, as opposed to sending and publishing content.

## Standard Compiling

-   IF an asset contains content:
    -   FOR EACH placeholder block or slot in the content:
        -   REPLACE the placeholder with the compiled string from the block or slot
    -   RETURN replaced content
-   ELSE:
    -   IF an asset contains views:
        -   IF an asset contains a view for the specified channel:
            -   RETURN the compiled channel view
        -   ELSE IF an asset contains an HTML view:
            -   RETURN the compiled HTML view
        -   ELSE:
            -   RETURN empty string

## Rendering

-   IF an asset contains content, design, or superContent:
    -   IF an asset contains superContent and superContent is not empty:
        -   usedContent = superContent
    -   ELSE IF an asset contains content and content is not empty:
        -   usedContent = content
    -   ELSE IF an asset contains design and design is not empty:
        -   usedContent = design
    -   ELSE:
        -   RETURN empty string
    -   FOR EACH placeholder block or slot in the content:
        -   REPLACE the placeholder with the rendered string from the block or slot
    -   RETURN replaced content
-   ELSE:
    -   IF an asset contains views:
        -   IF an asset contains a view for the specified channel:
            -   RETURN the rendered channel view
        -   ELSE IF there is an HTML view:
            -   RETURN the rendered HTML view
        -   ELSE:
            -   RETURN empty string

#### Sample Full Compiler in JavaScript

```js
function getReferences(content, type) {
    var typeMarker = '<div data-type="' + type + '" data-key="';
    var splitContent = content.split(typeMarker);
    var results = [];
    if (splitContent.length > 1) {
        for (var i = 1; i < splitContent.length; i++) {
            var endTagMatches = splitContent[i].match(/(\/>)|(>[^<]*<\/div>)/i);
            var match = endTagMatches[0] || '>';
            results.push(typeMarker + splitContent[i].split(match)[0] + match);
        }
    }
    return results;
}

function compile(asset, channel) {
    asset = asset || {};
    var content = asset.superContent || asset.content || asset.design;
    if (content) {
        ['slot', 'block'].forEach(function (type) {
            var references = getReferences(content, type);
            var types = type + 's';
            references.forEach(function (reference) {
                var refKey = reference.split('data-key="')[1].split('"')[0];
                if (asset[types] && asset[types][refKey]) {
                    content = content.replace(reference, compile(asset[types][refKey]));
                } else {
                    console.error('Bad Asset: referenced ' + type + ' does not exist: ' + refKey);
                }
            });
        });
        return content;
    } else if (asset.views) {
        if (asset.views[channel]) {
            return compile(asset.views[channel], channel);
        } else if (asset.views.html) {
            return compile(asset.views.html, channel);
        }
    }
    return '';
}
```
