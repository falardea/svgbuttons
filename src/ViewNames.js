const VIEW_NAMES = {
    ROOT_VIEW_NAME: "AxialRatio",
    TEST_CONFIG_NAME: "TestSetup",
    TEST_EXECUTION_NAME: "ButtonWheel",
    toPath: function(name){
        return "/" + this.ROOT_VIEW_NAME + (name ? ("/" + name) : '')
    }
}

export default VIEW_NAMES
