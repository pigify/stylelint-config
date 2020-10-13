module.exports = {
  defaultSeverity: 'warning',
  plugins: [
    'stylelint-declaration-block-no-ignored-properties',
    'stylelint-order',
    'stylelint-selector-no-empty',
    'stylelint-declaration-use-variable'
  ],

  rules: {
    'block-closing-brace-empty-line-before': 'never',
    'block-closing-brace-newline-after': 'always',
    'block-closing-brace-newline-before': 'always',
    'block-no-empty': true,
    'block-opening-brace-newline-after': 'always',
    'color-hex-case': 'lower',
    'color-hex-length': 'long',
    'color-no-invalid-hex': true,
    'comment-empty-line-before': 'always',
    'comment-no-empty': true,
    'comment-whitespace-inside': 'always',
    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'always',
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-no-redundant-longhand-properties': true,
    'declaration-block-semicolon-newline-after': 'always',
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-trailing-semicolon': 'always',
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'declaration-empty-line-before': 'never',
    'font-weight-notation': 'numeric',
    'function-calc-no-invalid': true,
    'function-calc-no-unspaced-operator': true,
    'function-name-case': 'lower',
    'function-url-quotes': 'always',
    indentation: 2,
    'max-empty-lines': 1,
    'max-line-length': 120,
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-name-case': 'lower',
    'media-feature-parentheses-space-inside': 'always',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': true,
    'no-empty-source': true,
    'no-empty-first-line': true,
    'no-eol-whitespace': true,
    'no-extra-semicolons': true,
    'no-invalid-double-slash-comments': true,
    'no-missing-end-of-source-newline': true,
    'number-max-precision': 4,
    'property-case': 'lower',
    'property-no-unknown': true,
    'rule-empty-line-before': 'always',
    'selector-attribute-brackets-space-inside': 'always',
    'selector-attribute-operator-space-after': 'always',
    'selector-attribute-operator-space-before': 'always',
    'selector-attribute-quotes': 'always',
    'selector-combinator-space-after': 'always',
    'selector-max-attribute': 1,
    'selector-max-empty-lines': 1,
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-element-case': 'lower',
    'selector-type-case': 'lower',
    'shorthand-property-no-redundant-values': true,
    'string-no-newline': true,
    'string-quotes': 'single',
    'unit-case': 'lower',
    'unit-no-unknown': true,
    'plugin/declaration-block-no-ignored-properties': true,
    'plugin/stylelint-selector-no-empty': true,
    'order/properties-alphabetical-order': true,
    'sh-waqar/declaration-use-variable': [['/color/']]
  }
};