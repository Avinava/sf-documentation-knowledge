---
title: "Using Arrays in Index Paths"
domain: mobile-sdk
topic: using-arrays-in-index-paths
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:31.583Z
estimatedTokens: 496
keywords: [Arrays, Index, Paths, contain, certain, rules, apply]
---

# Using Arrays in Index Paths

> Index paths can contain arrays, but certain rules apply.

# Using Arrays in Index Paths

Index paths can contain arrays, but certain rules apply.

Before Mobile SDK 4.1, index paths supported only maps—in other words, dictionaries or associative arrays. For example, in a path such as a.b.c, SmartStore required both b and c to be maps. Otherwise, when evaluating the path, SmartStore returned nothing.

In Mobile SDK 4.1 and later, index paths can contain arrays and maps. In the a.b.c example, if the value of b is an array, SmartStore expects the array to contain maps that define c. SmartStore then returns an array containing values of c keys found in the b array’s maps.

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

You can’t use index paths that traverse arrays with JSON1 index specs.

## Example

The following table shows various examples of a.b.c paths and the values returned by a SmartStore query.

| Description | Example soup element | Value for path a.b.c |
| --- | --- | --- |
| No arrays | {      "a":{          "b":{ "c":1 }      }  } | 1 |
| c points to an array (internal node). | {      "a":{         "b":{            "c":[1,2,3]       }    } } | [      1,    2,    3 ] |
| b points to an array of maps. Some maps contain the c key. Other maps are ignored. | {      "a":{         "b":[            {               "c":1          },          {               "c":2          },          {               "no-c":3          }       ]    } } | [      1,    2 ] |
| a points to an array of maps. In some maps, b points to a map containing a key. In other maps, b points to an array of maps. Only values from c keys are returned. | {      "a":[         {            "b":{               "c":0          }       },       {            "b":[               {                  "c":1             },             {                  "c":2             },             {                  "no-c":3             }          ]       }    ] } | [      0,    [         1,       2    ] ] |

## Code Examples

```
{ 
    "a":{ 
        "b":{ "c":1 } 
    } 
}
```

```
{  
   "a":{  
      "b":{  
         "c":[1,2,3]
      }
   }
}
```

```
[  
   1,
   2,
   3
]
```

```
{  
   "a":{  
      "b":[  
         {  
            "c":1
         },
         {  
            "c":2
         },
         {  
            "no-c":3
         }
      ]
   }
}
```

```
[  
   1,
   2
]
```
