const CONST_VAR = {
   SORT_DESC: 'desc',
   SORT_ASC: 'asc',
   SORT_UNDEFINED: 'undef',
   SIZE_PER_PAGE: 10,
   NEXT_PAGE: '\u00BB',
   LAST_PAGE: '>>',
   PRE_PAGE: '\u00AB',
   FIRST_PAGE: '1',
   DELIMITER_PAGINATION: '\u2026',
   PAGE_START_INDEX: 1,
   SIZE_PER_PAGE_LIST: [
      { id: 10, name: 10 },
      { id: 25, name: 25 },
      { id: 50, name: 50 },
      { id: 75, name: 75 }
   ],
   PAGINATION_SIZE: 5,
   FILTER_DELAY: 1,
   FILTER_TYPE: {
      TEXT: 'TextFilter',
      REGEX: 'RegexFilter',
      SELECT: 'SelectFilter',
      NUMBER: 'NumberFilter',
      DATE: 'DateFilter',
      CUSTOM: 'CustomFilter'
   }
};

export default CONST_VAR;
