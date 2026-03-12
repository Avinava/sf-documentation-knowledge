---
title: "products Commands"
domain: comm-cli-reference
topic: products-commands
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:22.957Z
estimatedTokens: 537
keywords: [products, Commands, Prepare, product, data, files, import, commerce, Examples, Command]
---

# products Commands

> Prepare product data files for import.

# products Commands

-   **[commerce:products:import](atlas.en-us.comm_cli_reference.meta/comm_cli_reference/comm_cli_reference_commerce_products.htm#comm_cli_reference_commerce_products_import)**
    Prepare product data files for import.

## commerce:products:import

Prepare product data files for import.

### Examples for commerce:products:import

sfdx commerce:products:import --store-name test-store

### Command Syntax

sfdx commerce:products:import

\[\--json\]

\[\--loglevel LOGLEVEL\]

\[\-v TARGETDEVHUBUSERNAME\]

\[\-u TARGETUSERNAME\]

\[\--apiversion APIVERSION\]

\[\-c PRODUCTS-FILE-CSV\]

\[\-f DEFINITIONFILE\]

\[\-o TYPE\]

\[\-n STORE-NAME\]

\[\-y\]

### Parameters

\--json

Optional

Format output as JSON.

Type: boolean

\--loglevel LOGLEVEL

Optional

The logging level for this command invocation. Logs are stored in $HOME/.sfdx/sfdx.log.

Type: enum

Permissible values are: trace, debug, info, warn, error, fatal, TRACE, DEBUG, INFO, WARN, ERROR, FATAL

Default value: warn

\-v | \--targetdevhubusername TARGETDEVHUBUSERNAME

Optional

A username or alias for the target Dev Hub org. Overrides the default Dev Hub org.

Type: string

\-u | \--targetusername TARGETUSERNAME

Optional

A username or alias for the target org. Overrides the default target org.

Type: string

\--apiversion APIVERSION

Optional

Override the API version used for API requests made by this command.

Type: string

\-c | \--products-file-csv PRODUCTS-FILE-CSV

Optional

The csv file containing products to import. Pass in empty value to do product-less import.

Type: string

Default value: ~/.commerce/examples/csv/Alpine-small.csv

\-f | \--definitionfile DEFINITIONFILE

Optional

Config file.

Type: filepath

Default value: ~/.commerce/config/store-scratch-def.json

\-o | \--type TYPE

Optional

The type of store you want to create.

Type: string

Permissible values are: b2c, b2b

Default value: b2c

\-n | \--store-name STORE-NAME

Required

Name of the site to create.

Type: string

Default value: 1commerce

\-y | \--prompt

Optional

If there is a file difference detected, prompt before overwriting file.

Type: boolean

## Related Topics

- commerce:products:import (atlas.en-us.comm_cli_reference.meta/comm_cli_reference/comm_cli_reference_commerce_products.htm)
