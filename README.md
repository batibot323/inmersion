# Inmersion

A language learning app focused on helping you study Spanish. It is free so you can host it yourself.

## Principles
- Immersion
- Anki
- Context

## Features
- Reading Exercises
- Word Bank
- Anki with context
- Translate phrases/sentences

## Weaknesses:
- Lacks methods to speak like a native
- Only 1000 searches per day
- Bad Anki repetition strategy

## Design Decisions:
**Q:** Should we remove words from the `Word Bank` or just set `learned` to `false`?

**A:** Set it to false so we have a way of determining whether a `word` is learned then unlearned.