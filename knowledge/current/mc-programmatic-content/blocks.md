---
title: "Blocks"
domain: mc-programmatic-content
topic: blocks
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:22.325Z
estimatedTokens: 373
keywords: [Blocks, Examples, Template, Language, containers, markup, links, external, code]
---

> Use blocks within Guide Template Language as containers for markup that links to external code.

# Blocks

Use blocks within Guide Template Language as containers for markup that links to external code.

The initial block tag includes an identifier for the block and the type of block used in the template.

Each block contains four different sections:

-   Meta - stores data about the slot used by other applications, including validation and compilation. Nothing in the meta tag affects rendering or impacts the final content.
-   Data - stores a JSON object used during rendering to produce the output of the block.
-   Default - stores content to provide if the markup does not include content or provides an empty value.
-   Content - stores markup to render.

The block will display the content unless it contains an empty value, at which time the block will render the default content.

You can include server-side rendering in the block using a server script tag.

## Examples

The template below uses a data extension picker block that chooses the row from a specified data extension.

### Template

This example outputs the string "I am a deal from Northern Trail Outfitters."

The next template uses an embedded section tag and a data source external to the block.

### Template

### Data

This example outputs the string "I am a deal from Northern Trail Outfitters."

This template includes a server script tag in the block markup. This script can access the data environment and the \_guide object to render text.

This example outputs the string ""Hello from the server"".
