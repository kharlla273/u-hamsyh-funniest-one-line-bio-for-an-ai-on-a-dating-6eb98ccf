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
