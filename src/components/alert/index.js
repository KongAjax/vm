import Component from './alert';
import {Util} from '../../helper';

var override = (callback) => {
    return (...args) => {
        if(typeof args[1] != 'object'){
            args.splice(1, 0, {});
        }else if(!args[1]){
            args[1] = '';
        }

        return callback.apply(window, args);
    }
};

var Alert = override((content, options, callback, manualClose) => {
    var buttons = options.buttons;

    if(!buttons){
        buttons = {};
        buttons[options.confirmButtonText || '确定'] = function(){
            callback && callback();
            !manualClose && this.destroy(false);
        }
    }

    return Util.factory(Component, {
        content: content,
        extras: options.extras,
        flex: options.flex,
        buttons: buttons
    });
});

Alert.confirm = override((content, options, callback, manualClose) => {
    var buttons = {};

    buttons[options.cancelButtonText || '取消'] = {
        border: true,
        callback(){
            this.destroy(false);
        }
    };
    buttons[options.confirmButtonText || '确定'] = function(){
        callback && callback();
        !manualClose && this.destroy(false);
    };

    return Util.factory(Component, {
        content: content,
        extras: options.extras,
        flex: options.flex !== false,
        buttons: buttons
    });
});

Alert.Component = Component;
export default Util.register(Alert);