# Benchmark data

## cellData.json

It has an array of 200 objects where each object represents a row. Each row has an unique identifier and an array of objects which represents the cells. A row has 200 cells where each cell has an unique identifier and a text.
```json
[
  {
    "id": "58acc40b03e1f91470171ba7",
    "cells": [
      {
        "id": "58acc40b690a7f1a1bd4d527",
        "text": "culpa"
      },
      ...
    ]
  },
  ...
]
```

## cellData_1.json

It is a copy from [cellData.json](cellData.json) where each text property **value** was changed to the number **1**. This is made to force a global update.

## cellData_a1.json

It is a copy from [cellData.json](cellData.json) where each text property was changed its letter **a** to the number **1**. This is made to force a selective update.

## cellData_e2.json

It is a copy from [cellData.json](cellData.json) where each text property was changed its letter **e** to the number **2**. This is made to force a selective update.

## cellData_i3.json

It is a copy from [cellData.json](cellData.json) where each text property was changed its letter **i** to the number **3**. This is made to force a selective update.

## cellData_o4.json

It is a copy from [cellData.json](cellData.json) where each text property was changed its letter **o** to the number **4**. This is made to force a selective update.

## cellData_u5.json

It is a copy from [cellData.json](cellData.json) where each text property was changed its letter **u** to the number **5**. This is made to force a selective update.
