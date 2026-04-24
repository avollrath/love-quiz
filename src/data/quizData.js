export const landingCopy = {
  title: "THE 5 PATTERNS BLOCKING\nYOU FROM HEALTHY LOVE",
  subtitle: "FIND THE PATTERN BLOCKING\nYOUR LOVE LIFE",
  instructions:
    "For each statement, choose the number that feels most true for you:\n0 = Never\n1 = Sometimes\n2 = Often\n3 = Almost Always\nWrite the number next to each statement.",
};

export const scoringCopy = {
  heading:
    "Add up your numbers for each pattern separately. Your highest total shows the pattern that\naffects you most in dating. What your score means:",
  meanings: [
    "0–5: This pattern barely affects you.",
    "6–9: You experience this pattern sometimes.",
    "10–12: This pattern shows up regularly in your dating life.",
    "13–15: This is a strong pattern for you right now.",
  ],
  tieNote:
    "If two patterns score high:\nYou likely have one main pattern and one supporting pattern.",
};

export const answerOptions = [
  { value: 0, label: "Never" },
  { value: 1, label: "Sometimes" },
  { value: 2, label: "Often" },
  { value: 3, label: "Almost Always" },
];

export const patterns = [
  {
    id: "pattern-1",
    number: 1,
    resultName: "Miss/Mister “Impossible Standards”",
    statements: [
      "I have a long list of criteria that I want my future partner to meet.",
      "I easily get the ‘ick’ when dating.",
      "I have very high standards, and I never find people that meet them.",
      "No matter how many people I meet, no one ever seems to feel “quite right.”",
      "I talk myself out of dating someone by focusing on their flaws.",
    ],
    description: `This person looks picky, but the truth is that they’re scared of intimacy.
Research on avoidant attachment shows that when closeness feels
threatening, the mind finds small reasons to push people away. They call it
“having high standards,” but the standards are so unrealistic that nobody
ever qualifies.

When they do meet someone kind and emotionally available, they often
get the “ick” from the smallest, most insignificant details. Maybe “he talked
too much about Ronaldo” or “she had big hands.” These flaws feel huge,
but they’re actually the subconscious trying to create safety. If no one is
ever “good enough,” then they never have to get close enough to be hurt.

The “ick” is often the nervous system trying to escape vulnerability.`,
  },
  {
    id: "pattern-2",
    number: 2,
    resultName: "The Fantasizing Idealist",
    statements: [
      "I often obsess and fantasize about other people.",
      "Real dating often feels disappointing or not magical enough.",
      "I’m more drawn to the idea of love than the real experience.",
      "I expect love to feel exciting or transformative, not ordinary.",
      "I use romantic daydreaming to escape stress or boredom.",
    ],
    description: `This person grew up living in fairytales, rom coms and Disney love stories.
They learned that love should feel magical and dramatic and that the right
person will fix everything. As adults, they carry that same fantasy into their
dating life.

The problem is that real love is imperfect. It involves repair, communication
and moments that feel ordinary. But ordinary feels disappointing to someone
who has been imagining a soulmate story their whole life.

Research shows that idealization can become a form of escapism. It feels
easier to fantasize about the perfect relationship than to face dissatisfaction
in their own life. So they keep chasing a fairytale that no one in the real world
can live up to.

This is a form of avoiding reality.`,
  },
  {
    id: "pattern-3",
    number: 3,
    resultName: "The Maximizer",
    statements: [
      "I worry about settling and missing out on someone better.",
      "I struggle to choose someone because I imagine better options.",
      "I feel like there’s plenty of fish in the sea.",
      "When I’m dating someone I often think the “grass is greener” on the other side.",
      "After choosing someone, I often doubt myself.",
    ],
    description: `Barry Schwartz describes maximizers as people who always want the
“best” choice. They compare, analyze and overthink because they’re
terrified of choosing wrong. In dating, this looks like constant searching.
There’s always someone more attractive, more interesting or more
compatible in theory.

The paradox is that maximizers are actually less satisfied with their
choices. The more options they have, the more they doubt themselves.
Modern dating makes this worse. With endless profiles to swipe through,
it’s easy to believe that the perfect partner is just one more match away.

Intimacy comes from committing to one person and building depth, not
keeping every option open in case something better shows up.`,
  },
  {
    id: "pattern-4",
    number: 4,
    resultName: "The Hyper-Independent",
    statements: [
      "I struggle to rely on others.",
      "I feel safest when I don’t need anyone emotionally.",
      "Being vulnerable feels risky or uncomfortable.",
      "I prefer doing everything and relying on myself.",
      "When someone gets close, I pull back or shut down.",
    ],
    description: `Hyper-independence is usually a trauma response. It comes from
learning, early on, that relying on others leads to pain. So this person
learns to meet all their own needs and they tell themselves it’s strength.

But emotionally, it becomes a barrier. They avoid opening up because
vulnerability feels unsafe. They convince themselves they don’t need
anyone.

Research on attachment shows that human beings regulate stress
through connection. Support, trust and interdependence actually make
us stronger, not weaker. Hyper-independence blocks that. It feels
protective, but it also prevents real love.

It’s self-protection that has gone too far.`,
  },
  {
    id: "pattern-5",
    number: 5,
    resultName: "The Covert Avoidant",
    statements: [
      "I often fall for people who are unavailable.",
      "I really want to be in a relationship, I think and talk about it a lot.",
      "When someone shows clear interest, I lose attraction or pull away.",
      "I often get myself in situationships that feel like a rollercoaster.",
      "The people I date are not meeting my emotional needs and they don’t have the emotional\ndepth that I need.",
    ],
    description: `This person looks like they want love. They chase relationships, talk about
love constantly and feel things deeply. But they only fall for people who are
unavailable. Someone long distance, someone taken, someone emotionally
inconsistent. The pattern is always the same. They want the one person they
cannot have.

Psychologically, this is unconscious avoidance. If the person is unavailable,
then real intimacy is never on the table. They can fantasize about the
relationship without ever facing the vulnerability that comes with a real one.

Attachment research shows that this is a hidden form of avoidance. It allows
them to feel like they’re trying in love, but without the risks that come with
actually choosing someone who is available and capable of loving them back.

Deep down, they’re scared of being fully seen.`,
  },
];
