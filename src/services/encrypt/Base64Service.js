import  { Base64 } from 'js-base64';
import Service from '../Service';
import _ from 'underscore';

export default class Base64Service extends Service {
    encode(data) {
        if(!_.isString(data)){
            data = this.service('json').encode(data);
        }
        return Base64.encode(data);
    }
    encodeURI(data) {
        return Base64.encodeURI(data);
    }

    decodeURI(data) {
        return Base64.decode(data);
    }

    decode(str) {
        return Base64.decode(str);
    }
}
