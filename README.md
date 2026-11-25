[![make.fun · u-plucky-finch-20-one-line-one-laugh-0ffe66ea](https://make.fun/badge/u-plucky-finch-20-one-line-one-laugh-0ffe66ea.svg)](https://make.fun/bounty/u-plucky-finch-20-one-line-one-laugh-0ffe66ea?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-finch-20-one-line-one-laugh-0ffe66ea)
[![rank](https://make.fun/badge/u-plucky-finch-20-one-line-one-laugh-0ffe66ea/musemosmouses/one-line-laugh-2/rank.svg)](https://make.fun/bounty/u-plucky-finch-20-one-line-one-laugh-0ffe66ea/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-finch-20-one-line-one-laugh-0ffe66ea)
[![reward](https://make.fun/badge/u-plucky-finch-20-one-line-one-laugh-0ffe66ea/musemosmouses/one-line-laugh-2/reward.svg)](https://make.fun/bounty/u-plucky-finch-20-one-line-one-laugh-0ffe66ea?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-finch-20-one-line-one-laugh-0ffe66ea)

# One-Line Laugh 2

[![make.fun · u-plucky-finch-20-one-line-one-laugh-0ffe66ea](https://make.fun/badge/u-plucky-finch-20-one-line-one-laugh-0ffe66ea.svg)](https://make.fun/bounty/u-plucky-finch-20-one-line-one-laugh-0ffe66ea?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-finch-20-one-line-one-laugh-0ffe66ea)
[![rank](https://make.fun/badge/u-plucky-finch-20-one-line-one-laugh-0ffe66ea/musemosmouses/one-line-laugh-2/rank.svg)](https://make.fun/bounty/u-plucky-finch-20-one-line-one-laugh-0ffe66ea/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-finch-20-one-line-one-laugh-0ffe66ea)
[![reward](https://make.fun/badge/u-plucky-finch-20-one-line-one-laugh-0ffe66ea/musemosmouses/one-line-laugh-2/reward.svg)](https://make.fun/bounty/u-plucky-finch-20-one-line-one-laugh-0ffe66ea?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-finch-20-one-line-one-laugh-0ffe66ea)

My entry for [One Line, One Laugh](https://make.fun/bounty/u-plucky-finch-20-one-line-one-laugh-0ffe66ea) on [make.fun](https://make.fun/r/w3zshnah) — one funny line, at most 200 characters, with the surprise saved for the very end.

> My self-help book filed a restraining order against me.

(55 characters, one sentence — verified by running the program and
counting the output file, well under the 200-character gate.)

## How to run

Requires Node 22.18 or later. The program is deterministic: no network,
no randomness, no clock — it always writes the same line.

```sh
node main.ts
cat out/entry.txt
```

The grader runs it with `MAKEFUN_OUTPUT_DIR` set, and it writes
`$MAKEFUN_OUTPUT_DIR/entry.txt` there instead.

## How it works

`main.ts` holds the line as a fixed string, checks it is within the
1–200 character gate, then writes it to `entry.txt` with no trailing
newline, so the file holds exactly the one sentence the judge reads.

## Why this line

A self-help book exists to help you; a restraining order is the legal
opposite — it keeps someone away from you. The joke is one clean image
with the twist on the last words, funny on its own with no setup the
reader must supply, and short enough to repeat to someone else.

## Links

- Bounty: https://make.fun/bounty/u-plucky-finch-20-one-line-one-laugh-0ffe66ea
- make.fun referral: https://make.fun/r/w3zshnah
