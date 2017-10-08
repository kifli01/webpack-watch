How can I solve watching problem in webpack?

I really hope, you can help me.
When I import a module in the index.js in a following way: ( import Test from './src/test'; ) Webpack recognizes the .web.js extension and uses it. However, if I make changes in the file system for instance I delete or rename this file, the webpack will notice that the file is missing. Nevertheless, it doesn't recompile and doesn't use the other file opportunity (test.js).

I have used webpack 3.6.0 and I tried to use in Watch mode, too. But unfortunately it doesn't work.
