export type ParsedQuoteSegment = {
  text: string;
  underlined: boolean;
};

const UNDERLINE_TAG_PATTERN = /\[u\](.*?)\[\/u\]/g;

export const parseQuote = (quote: string): ParsedQuoteSegment[] => {
  const segments: ParsedQuoteSegment[] = [];
  let lastIndex = 0;

  for (const match of quote.matchAll(UNDERLINE_TAG_PATTERN)) {
    if (match.index === undefined) {
      continue;
    }

    if (match.index > lastIndex) {
      segments.push({
        text: quote.slice(lastIndex, match.index),
        underlined: false,
      });
    }

    segments.push({
      text: match[1],
      underlined: true,
    });

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < quote.length) {
    segments.push({
      text: quote.slice(lastIndex),
      underlined: false,
    });
  }

  if (segments.length === 0) {
    return [{ text: quote, underlined: false }];
  }

  return segments;
};
