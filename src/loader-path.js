import path from 'path';
import fs from 'fs';
import url_valid from 'valid-url';
const { access } = fs;
const { R_OK } = fs.constants;
async function _file_path(in_file_path) {
    let file_path = in_file_path;
    if (await is_readable(file_path)) {
        return file_path;
    }
    file_path = `${in_file_path}.js`;
    if (await is_readable(file_path)) {
        return file_path;
    }
    file_path = `${in_file_path}.js`;
    if (await is_readable(file_path)) {
        return file_path;
    }
}
export async function resolve(specifier, parentModuleURL, defaultResolver) {
    if (!specifier
        || specifier[0] == '.'
        || specifier[0] == '/'
        || url_valid.isUri(specifier)) {
        return based_on_extname(specifier);
    }
    const NODE_PATH_a = NODE_PATH_a_();
    for (let i = 0; i < NODE_PATH_a.length; i++) {
        const NODE_PATH = NODE_PATH_a[i];
        const file_path = await _file_path(path.join(NODE_PATH, specifier));
        if (file_path) {
            return based_on_extname(file_path);
        }
    }
    return defaultResolver(specifier, parentModuleURL);
    function based_on_extname(file_path) {
        const path_extname = path.extname(file_path);
        if (!path_extname) {
            return {
                url: /^file:/.test(file_path)
                    ? file_path
                    : `file:${file_path}`,
                format: 'cjs'
            };
        }
        else if (path_extname == '.js') {
            return defaultResolver(file_path, parentModuleURL);
        }
        else {
            return {
                url: file_path,
                format: 'dynamic'
            };
        }
    }
}
let cache_NODE_PATH;
let cache_NODE_PATH_a = [];
function NODE_PATH_a_() {
    const NODE_PATH = process.env.NODE_PATH || '';
    if (NODE_PATH == cache_NODE_PATH)
        return cache_NODE_PATH_a;
    cache_NODE_PATH_a = [];
    cache_NODE_PATH = NODE_PATH;
    const NODE_PATH_a = NODE_PATH.split(':');
    for (let i = 0; i < NODE_PATH_a.length; i++) {
        let out_NODE_PATH = NODE_PATH_a[i].trim();
        const back_regexp = new RegExp('^\.\.');
        const current_regexp = new RegExp('^\.');
        if (back_regexp.test(out_NODE_PATH)) {
            out_NODE_PATH = path.join(process.cwd(), '..', out_NODE_PATH);
        }
        else if (current_regexp.test(out_NODE_PATH)) {
            out_NODE_PATH = path.join(process.cwd(), out_NODE_PATH);
        }
        cache_NODE_PATH_a.push(out_NODE_PATH);
    }
    return cache_NODE_PATH_a;
}
function is_readable(path) {
    return new Promise(resolve => {
        access(path, R_OK, err => {
            if (err) {
                resolve(false);
            }
            else {
                resolve(true);
            }
        });
    });
}
//# sourceMappingURL=src/loader-path.js.map