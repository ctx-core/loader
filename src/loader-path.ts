import path from 'path'
import fs from 'fs'
import valid__url from 'valid-url'
const { access } = fs
const { R_OK } = fs.constants
async function _path__file(in_file_path:string) {
	let file_path = in_file_path
	if (await is_readable(file_path)) {
		return file_path
	}
	file_path = `${in_file_path}.js`
	if (await is_readable(file_path)) {
		return file_path
	}
	file_path = `${in_file_path}.js`
	if (await is_readable(file_path)) {
		return file_path
	}
}
export async function resolve(
	specifier:string,
	parentModuleURL:string,
	defaultResolver:(specifier:string, parentModuleURL:string)=>string
) {
	if (
		!specifier
		|| specifier[0] == '.'
		|| specifier[0] == '/'
		|| valid__url.isUri(specifier)
	) {
		return based_on_extname(specifier)
	}
	const a1__NODE_PATH = _NODE_PATH_a1()
	for (let i = 0; i < a1__NODE_PATH.length; i++) {
		const NODE_PATH__ = a1__NODE_PATH[i]
		const path__file =
			await _path__file(path.join(NODE_PATH__, specifier))
		if (path__file) {
			return based_on_extname(path__file)
		}
	}
	return defaultResolver(specifier, parentModuleURL)
	function based_on_extname(file_path:string) {
		const extname__path = path.extname(file_path)
		if (!extname__path) {
			return {
				url:
					/^file:/.test(file_path)
					? file_path
					: `file:${file_path}`,
				format: 'cjs'
			}
		} else if (extname__path == '.js') {
			return defaultResolver(file_path, parentModuleURL)
		} else {
			return {
				url: file_path,
				format: 'dynamic'
			}
		}
	}
}
let cache_NODE_PATH:string
let cache_NODE_PATH_a1:string[] = []
function _NODE_PATH_a1() {
	const NODE_PATH = process.env.NODE_PATH || ''
	if (NODE_PATH == cache_NODE_PATH)
		return cache_NODE_PATH_a1
	cache_NODE_PATH_a1 = []
	cache_NODE_PATH = NODE_PATH
	const a1__NODE_PATH = NODE_PATH.split(':')
	for (let i = 0; i < a1__NODE_PATH.length; i++) {
		let out_NODE_PATH = a1__NODE_PATH[i].trim()
		const regexp__back = new RegExp('^\.\.')
		const regexp__current = new RegExp('^\.')
		if (regexp__back.test(out_NODE_PATH)) {
			out_NODE_PATH = path.join(process.cwd(), '..', out_NODE_PATH)
		} else if (regexp__current.test(out_NODE_PATH)) {
			out_NODE_PATH = path.join(process.cwd(), out_NODE_PATH)
		}
		cache_NODE_PATH_a1.push(out_NODE_PATH)
	}
	return cache_NODE_PATH_a1
}
function is_readable(path:string) {
	return new Promise(resolve=>{
		access(path, R_OK, err=>{
			if (err) {
				resolve(false)
			} else {
				resolve(true)
			}
		})
	})
}
