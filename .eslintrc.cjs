module.exports = {
    env: {
        node: true,
        es2021: true,
    },
    extends: [
        'airbnb-base',
    ],
    'parserOptions': {
        'ecmaVersion': 13,
        'sourceType': "module"
    },
  'rules': {
    "import/extensions": [ "never" | "always" | "ignorePackages"]
  }
};
