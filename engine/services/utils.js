const Guid = function() {
    const _this = this;
    _this.generate = function() {
        return Math.random();
    };

    return _this;
};

window.SVC = {
    guid: Guid()
};