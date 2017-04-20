const Guid = function() {
    const _this = this;
    _this.generate = function() {
        return "je suis un guid";
    };

    return _this;
};

window.SVC = {
    guid: Guid()
};