module.exports = {
    globals: {
        Vue: true,
        _: true
    },
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:vue/essential',
        'airbnb-base'
    ],
    parserOptions: {
        parser: 'babel-eslint',
    },
    plugins: [
        'vue'
    ],
    rules: {
        indent: ['error', 4],
        'comma-dangle': ['error', 'never']
    }
};
