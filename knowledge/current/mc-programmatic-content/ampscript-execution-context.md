---
title: "AMPscript Execution Context"
domain: mc-programmatic-content
topic: ampscript-execution-context
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:26.849Z
estimatedTokens: 669
keywords: [AMPscript, Execution, Context, Marketing, Cloud, process, content, landing, pages, Web, Collect, Smart, Capture, Call, via]
---

# AMPscript Execution Context

> The Marketing Cloud can process content from landing pages, Web Collect, and Smart Capture. Call that content via a contextual AMPscript function. The execution context of the function determines how the system processes the context.

# AMPscript Execution Context

The Marketing Cloud can process content from landing pages, Web Collect, and Smart Capture. Call that content via a contextual AMPscript function. The execution context of the function determines how the system processes the context.

## Execution Context Specification

The Marketing Cloud supports execution context by type and name, represented by the global read-only variable @@ExecCtx. The system processes Load and Post types, defaulting to Load if the call does not specify a context. Any content without a specific execution context will always process. The system honors any context type and only processes script blocks in the active content with the specified name. For example, the Marketing Cloud processes only script blocks named SaveData if the caller specifies the Post context type and the blocks exist in a section of code executed for the Post type.

The caller sets @@ExecCtx to a case-insensitive string value of Load or Post, indicating the current execution context. Use this variable to control the processing of content according to execution context as shown in this example:

```
/* Content and Script to always be executed here */
%%[ IF @@ExecCtx == "LOAD" THEN]%%
    %%[/*Load Content or Script Here*/]%%
%%[ ELSEIF @@ExecCtx == "POST" THEN]%%
    %%[/*Load Content or Script Here*/]%%
%%[ENDIF]%%
/* Content and Script to always be executed here */
```

You can also control processing of content using execution context names. When the caller specifies a name, the Marketing Cloud system only executes script blocks with that name. Callers can also specify a script type at the script block level, with the script name and type set immediately after the script start delimiter. Use single or double quotes for the case-insensitive string values:

```
%%[[name="nameStr";type="Load|Post].]%%
```

In this example, the UpsertData command executes only if the caller's execution context is set to POST and the name UpdateDate is specified:

```
%%[[name="UpdateDate";type=" Post]UpsertData("MyDE","Col1",Val1,"Col2",Val2)]%%
```

You must complete script blocks within the same script block section. For example, you must complete any IF or FOR statements inside a script block with an ENDIF or NEXT within the same named script block. If script blocks span two or more script block sections, the Marketing Cloud returns this error message:

```
"An incomplete IF statement exists in a typed script block.  Script statements cannot span named or typed script blocks."
You can also use execution context to determine whether to display most current content or the content current as of when the email was sent.
```
