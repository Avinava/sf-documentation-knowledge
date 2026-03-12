---
title: "store Commands"
domain: comm-cli-reference
topic: store-commands
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:22.987Z
estimatedTokens: 2260
keywords: [store, Commands, Comprehensive, community, push, sources, buyer, user, import, products, search, index, commerce, Examples, Command]
---

# store Commands

> Comprehensive create and set up a store.  This will create your community/store push store sources, create buyer user, import products, create search index.

# store Commands

-   **[commerce:store:create](atlas.en-us.comm_cli_reference.meta/comm_cli_reference/comm_cli_reference_commerce_store.htm#comm_cli_reference_commerce_store_create)**
    Comprehensive create and set up a store. This will create your community/store push store sources, create buyer user, import products, create search index.
-   **[commerce:store:display](atlas.en-us.comm_cli_reference.meta/comm_cli_reference/comm_cli_reference_commerce_store.htm#comm_cli_reference_commerce_store_display)**
    Display buyer info.
-   **[commerce:store:open](atlas.en-us.comm_cli_reference.meta/comm_cli_reference/comm_cli_reference_commerce_store.htm#comm_cli_reference_commerce_store_open)**
    Open store(s).
-   **[commerce:store:quickstart:create](atlas.en-us.comm_cli_reference.meta/comm_cli_reference/comm_cli_reference_commerce_store.htm#comm_cli_reference_commerce_store_quickstart_create)**
    Use this command to just create a community. It will use sfdx force:community:create until a community is created or failed.
-   **[commerce:store:quickstart:setup](atlas.en-us.comm_cli_reference.meta/comm_cli_reference/comm_cli_reference_commerce_store.htm#comm_cli_reference_commerce_store_quickstart_setup)**
    Set up a store.

## commerce:store:create

Comprehensive create and set up a store. This will create your community/store push store sources, create buyer user, import products, create search index.

### Examples for commerce:store:create

sfdx commerce:store:create --store-name test-store

### Command Syntax

sfdx commerce:store:create

\[\--json\]

\[\--loglevel LOGLEVEL\]

\[\-v TARGETDEVHUBUSERNAME\]

\[\-u TARGETUSERNAME\]

\[\--apiversion APIVERSION\]

\[\-f DEFINITIONFILE\]

\[\-o TYPE\]

\[\-y\]

\[\-t TEMPLATENAME\]

\[\-b BUYER-USERNAME\]

\[\-n STORE-NAME\]

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

\-y | \--prompt

Optional

If there is a file difference detected, prompt before overwriting file.

Type: boolean

\-t | \--templatename TEMPLATENAME

Optional

Template to use to create a site .

Type: string

Default value: b2c-lite-storefront

\-b | \--buyer-username BUYER-USERNAME

Optional

Buyer's username.

Type: string

Default value: buyer@1commerce.com

\-n | \--store-name STORE-NAME

Required

Name of the site to create.

Type: string

Default value: 1commerce

## commerce:store:display

Display buyer info.

### Examples for commerce:store:display

sfdx commerce:store:display --store-name test-store

### Command Syntax

sfdx commerce:store:display

\[\--json\]

\[\--loglevel LOGLEVEL\]

\[\-v TARGETDEVHUBUSERNAME\]

\[\-u TARGETUSERNAME\]

\[\--apiversion APIVERSION\]

\[\-b BUYER-USERNAME\]

\[\-n STORE-NAME\]

\[\-p URLPATHPREFIX\]

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

\-b | \--buyer-username BUYER-USERNAME

Optional

Buyer's username.

Type: string

Default value: buyer@1commerce.com

\-n | \--store-name STORE-NAME

Required

Name of the site to create.

Type: string

Default value: 1commerce

\-p | \--urlpathprefix URLPATHPREFIX

Optional

Required if different from store-name URL to append to the domain created when Experiences was enabled for this org.

Type: string

## commerce:store:open

Open store(s).

### Examples for commerce:store:open

sfdx commerce:store:open --store-name test-store

sfdx commerce:store:open --all

### Command Syntax

sfdx commerce:store:open

\[\--json\]

\[\--loglevel LOGLEVEL\]

\[\-v TARGETDEVHUBUSERNAME\]

\[\-u TARGETUSERNAME\]

\[\--apiversion APIVERSION\]

\[\-n STORE-NAME\]

\[\--all\]

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

\-n | \--store-name STORE-NAME

Required

Name of the site to create.

Type: string

Default value: 1commerce

\--all

Optional

View All stores using sfdx force:org:open \_ui/networks/setup/SetupNetworksPage page.

Type: boolean

## commerce:store:quickstart:create

Use this command to just create a community. It will use sfdx force:community:create until a community is created or failed.

### Examples for commerce:store:quickstart:create

sfdx commerce:store:quickstart:create --templatename 'b2c-lite-storefront'

### Command Syntax

sfdx commerce:store:quickstart:create

\[\--json\]

\[\--loglevel LOGLEVEL\]

\[\-u TARGETUSERNAME\]

\[\--apiversion APIVERSION\]

\[\-t TEMPLATENAME\]

\[\-n STORE-NAME\]

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

\-u | \--targetusername TARGETUSERNAME

Optional

A username or alias for the target org. Overrides the default target org.

Type: string

\--apiversion APIVERSION

Optional

Override the API version used for API requests made by this command.

Type: string

\-t | \--templatename TEMPLATENAME

Optional

Template to use to create a site .

Type: string

Default value: b2c-lite-storefront

\-n | \--store-name STORE-NAME

Required

Name of the site to create.

Type: string

Default value: 1commerce

## commerce:store:quickstart:setup

Set up a store.

### Examples for commerce:store:quickstart:setup

sfdx commerce:store:quickstart:setup --definitionfile store-scratch-def.json

### Command Syntax

sfdx commerce:store:quickstart:setup

\[\--json\]

\[\--loglevel LOGLEVEL\]

\[\-v TARGETDEVHUBUSERNAME\]

\[\-u TARGETUSERNAME\]

\[\--apiversion APIVERSION\]

\[\-f DEFINITIONFILE\]

\[\-y\]

\[\-n STORE-NAME\]

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

\-f | \--definitionfile DEFINITIONFILE

Optional

Config file.

Type: filepath

Default value: ~/.commerce/config/store-scratch-def.json

\-y | \--prompt

Optional

If there is a file difference detected, prompt before overwriting file.

Type: boolean

\-n | \--store-name STORE-NAME

Required

Name of the site to create.

Type: string

Default value: 1commerce

## Related Topics

- commerce:store:create (atlas.en-us.comm_cli_reference.meta/comm_cli_reference/comm_cli_reference_commerce_store.htm)
- commerce:store:display (atlas.en-us.comm_cli_reference.meta/comm_cli_reference/comm_cli_reference_commerce_store.htm)
- commerce:store:open (atlas.en-us.comm_cli_reference.meta/comm_cli_reference/comm_cli_reference_commerce_store.htm)
- commerce:store:quickstart:create (atlas.en-us.comm_cli_reference.meta/comm_cli_reference/comm_cli_reference_commerce_store.htm)
- commerce:store:quickstart:setup (atlas.en-us.comm_cli_reference.meta/comm_cli_reference/comm_cli_reference_commerce_store.htm)
