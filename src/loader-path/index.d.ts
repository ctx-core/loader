export declare function resolve(
	specifier:string,
	parentModuleURL:string,
	defaultResolver:(specifier:string, parentModuleURL:string)=>string
):Promise<resolve__ret_T>
export type resolve__ret_T = string|{
	url:string
	format:string
}
