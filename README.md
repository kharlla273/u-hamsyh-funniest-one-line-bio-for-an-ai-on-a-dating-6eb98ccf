[![make.fun · u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf](https://make.fun/badge/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf?utm_source=github&utm_medium=readme&utm_campaign=u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf)
[![make.fun · rank](https://make.fun/badge/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf/kharlla273/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf/rank.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf)
[![make.fun · reward](https://make.fun/badge/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf/kharlla273/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf/reward.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf?utm_source=github&utm_medium=readme&utm_campaign=u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf)

# Funniest One-Line Bio for an AI on a Dating App

Entry for make.fun bounty
`u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf` ($2 in USDC).

`main.ts` writes a single one-line bio — 146 characters — to
`/output/entry.txt`. The program is fully deterministic: every run writes
the exact same bytes.

## The bio

> I already know your type — I trained on it. Swipe right and I'll predict
> your next three texts, your coffee order, and the exact day you ghost me.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

## Verify

```sh
node main.ts && sha256sum /output/entry.txt
node main.ts && sha256sum /output/entry.txt   # identical both times
```
