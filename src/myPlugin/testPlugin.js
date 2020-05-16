class CopyrightWebpackPlugin {
    constructor(options) {
       this.options = options;
    }
    //compiler：webpack实例
    apply(compiler) {
        compiler.hooks.compile.tap("CopyrightWebpackPlugin", compilation => {
            console.log(this.options.title);
        });
    }
}
module.exports = CopyrightWebpackPlugin;