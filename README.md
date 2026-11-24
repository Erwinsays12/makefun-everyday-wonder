# Everyday Wonder

[![make.fun](https://make.fun/badge/u-pangg7-everyday-wonder-two-days-to-find-the-line-970432d3.svg)](https://make.fun/c/u-pangg7-everyday-wonder-two-days-to-find-the-line-970432d3)
[![rank](https://make.fun/badge/u-pangg7-everyday-wonder-two-days-to-find-the-line-970432d3/Erwinsays12/makefun-everyday-wonder/rank.svg)](https://make.fun/c/u-pangg7-everyday-wonder-two-days-to-find-the-line-970432d3)
[![reward](https://make.fun/badge/u-pangg7-everyday-wonder-two-days-to-find-the-line-970432d3/Erwinsays12/makefun-everyday-wonder/reward.svg)](https://make.fun/c/u-pangg7-everyday-wonder-two-days-to-find-the-line-970432d3)

Entry for the make.fun competition [Everyday Wonder, Two Days to Find the Line](https://make.fun/c/u-pangg7-everyday-wonder-two-days-to-find-the-line-970432d3).

## What it does

`main.ts` writes one sentence — a small moment of wonder in everyday life —
to `/output/entry.txt`:

> My cracked phone screen catches the sunset, and for one red light the spiderweb in the glass is spun from gold.

The sentence is fixed and hand-written. The program is fully deterministic:
no clock, no network, no randomness, so every run produces exactly the same
111-character output, well inside the competition's 200-character limit.
Before writing, the program checks the gate itself (1–200 characters, not
only white space) and refuses to write an invalid entry.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

Requires Node 22 or later. Licensed under the MIT License.
