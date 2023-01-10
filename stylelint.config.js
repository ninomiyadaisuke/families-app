module.exports = {
  plugin: ['stylelint-scss', 'stylelint-order'],
  ignoreFiles: [
    // node_modulsディレクトリ配下にあるCSSを対象外する。
    '**/node_modules/**',
  ],
  extends: [
    'stylelint-config-recommended-scss', // scssのための拡張ルール追加
    'stylelint-config-recess-order', // 視認性を考慮したcssプロパティの自動ソートを設定
    'stylelint-config-prettier', // Prettierとの競合ルールをOFFにする
  ],
  rules: {
    'order/properties-alphabetical-order': true,
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['use', 'forward'],
      },
    ],
  },
};
